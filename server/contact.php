<?php
/**
 * Kontaktformular-Empfaenger fuer smartersystem.de
 * Liegt auf dem Server unter https://web.smartersystem.de/contact.php
 *
 * Verschickt zwei Mails ueber das eigene Postfach:
 *   1. die Anfrage an den Betreiber
 *   2. eine Eingangsbestaetigung an den Absender
 *
 * Grundsatz: Alles, was aus dem Browser kommt, ist unzuverlaessig. Ein
 * Angreifer kann diese Adresse direkt ansprechen und jede Pruefung im Browser
 * umgehen. Deshalb wird hier alles erneut geprueft.
 *
 * Die Zugangsdaten stehen in contact-config.php, nicht in dieser Datei.
 */

declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception as MailException;

// ---------------------------------------------------------------------------
// Einstellungen
// ---------------------------------------------------------------------------

/** Nur diese Herkunftsadressen duerfen das Formular nutzen. */
const ALLOWED_ORIGINS = [
    'https://smartersystem.de',
    'https://www.smartersystem.de',
];

/** Anfragen je IP-Adresse und Stunde. */
const LIMIT_ANFRAGEN = 5;

/** Bestaetigungsmails je IP-Adresse und Stunde. Bewusst niedriger: Diese Mail
 *  geht an eine fremde Adresse und waere sonst ein Werkzeug fuer Spamversand. */
const LIMIT_BESTAETIGUNGEN = 3;

/** Groesse des Anfragekoerpers in Byte. */
const MAX_BODY_BYTES = 20000;

/** Zulaessige Feldlaengen in Zeichen. */
const LIMITS = [
    'company' => 100,
    'fname'   => 60,
    'lname'   => 60,
    'email'   => 120,
    'phone'   => 30,
    'zip'     => 10,
    'message' => 3000,
    'website' => 100, // Spam-Falle, muss leer bleiben
];

/** Telefonnummer fuer die Fusszeilen der Mails. */
const TELEFON_ANZEIGE = '+49 15563 989382';
const TELEFON_LINK    = '+4915563989382';

// ---------------------------------------------------------------------------
// Hilfsfunktionen
// ---------------------------------------------------------------------------

/** Antwortet als JSON und beendet die Verarbeitung. */
function respond(bool $success, int $httpStatus = 200, string $code = ''): void
{
    http_response_code($httpStatus);
    header('Content-Type: application/json; charset=utf-8');
    header('X-Content-Type-Options: nosniff');
    header('Cache-Control: no-store');
    // Absichtlich keine Details: Fehlermeldungen verraten Angreifern, was greift.
    echo json_encode(['success' => $success, 'code' => $code], JSON_UNESCAPED_UNICODE);
    exit;
}

/**
 * Entfernt Steuerzeichen und begrenzt die Laenge.
 * Zeilenumbrueche werden getilgt, weil sie in E-Mail-Kopfzeilen zur
 * Header-Injection missbraucht werden koennen.
 */
function cleanLine(?string $value, int $maxLength): string
{
    $value = (string) $value;
    $value = preg_replace('/[\x00-\x1F\x7F]+/u', ' ', $value) ?? '';
    $value = trim(preg_replace('/\s+/u', ' ', $value) ?? '');
    return mb_substr($value, 0, $maxLength, 'UTF-8');
}

/** Wie cleanLine, erlaubt aber Zeilenumbrueche. Nur fuer den Nachrichtentext. */
function cleanText(?string $value, int $maxLength): string
{
    $value = (string) $value;
    $value = str_replace(["\r\n", "\r"], "\n", $value);
    $value = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]+/u', '', $value) ?? '';
    return mb_substr(trim($value), 0, $maxLength, 'UTF-8');
}

/** Kuerzt sicher fuer die Anzeige in der Bestaetigungsmail. */
function kuerzen(string $value, int $max): string
{
    return mb_strlen($value, 'UTF-8') > $max
        ? mb_substr($value, 0, $max, 'UTF-8') . ' …'
        : $value;
}

/** Kurzschreibweise fuer die HTML-Maskierung. */
function e(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

/**
 * Zaehlt Vorgaenge je IP-Adresse innerhalb einer Stunde.
 * Gespeichert wird nur ein Hashwert der IP, nicht die IP selbst.
 * Dateien aelter als sieben Tage werden entfernt.
 *
 * @param bool $nurPruefen true = nur nachsehen, nicht mitzaehlen
 */
function limitUeberschritten(string $schluessel, string $ip, string $salt, int $limit, bool $nurPruefen = false): bool
{
    $basis = is_dir(__DIR__ . '/../.contact-rl') || @mkdir(__DIR__ . '/../.contact-rl', 0700, true)
        ? __DIR__ . '/../.contact-rl'
        : sys_get_temp_dir() . '/ss-contact-rl';

    if (!is_dir($basis) && !@mkdir($basis, 0700, true) && !is_dir($basis)) {
        return false; // Kein Verzeichnis moeglich: nicht blockieren.
    }

    foreach ((array) @glob($basis . '/*') as $alt) {
        if (is_string($alt) && (int) @filemtime($alt) < time() - 7 * 86400) {
            @unlink($alt);
        }
    }

    $datei = $basis . '/' . hash('sha256', $salt . '|' . $schluessel . '|' . $ip);
    $jetzt = time();

    $zeiten = [];
    if (is_readable($datei)) {
        foreach (explode("\n", (string) @file_get_contents($datei)) as $zeile) {
            $t = (int) trim($zeile);
            if ($t > $jetzt - 3600) {
                $zeiten[] = $t;
            }
        }
    }

    if (count($zeiten) >= $limit) {
        return true;
    }

    if (!$nurPruefen) {
        $zeiten[] = $jetzt;
        @file_put_contents($datei, implode("\n", $zeiten), LOCK_EX);
    }

    return false;
}

// ---------------------------------------------------------------------------
// Herkunft pruefen (CORS)
// ---------------------------------------------------------------------------

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$originErlaubt = in_array($origin, ALLOWED_ORIGINS, true);

if ($originErlaubt) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Control-Max-Age: 86400');
}

if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
    http_response_code($originErlaubt ? 204 : 403);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST, OPTIONS');
    respond(false, 405, 'method');
}

if (!$originErlaubt) {
    respond(false, 403, 'origin');
}

// ---------------------------------------------------------------------------
// Zugangsdaten laden
// ---------------------------------------------------------------------------

$configDatei = __DIR__ . '/contact-config.php';
if (!is_readable($configDatei)) {
    error_log('contact.php: contact-config.php fehlt');
    respond(false, 500, 'config');
}
$config = require $configDatei;
if (!is_array($config) || empty($config['smtp_pass']) || empty($config['smtp_user'])) {
    error_log('contact.php: contact-config.php unvollstaendig');
    respond(false, 500, 'config');
}

// ---------------------------------------------------------------------------
// Anfragekoerper einlesen
// ---------------------------------------------------------------------------

if ((int) ($_SERVER['CONTENT_LENGTH'] ?? 0) > MAX_BODY_BYTES) {
    respond(false, 413, 'size');
}

$raw = (string) file_get_contents('php://input', false, null, 0, MAX_BODY_BYTES + 1);
if ($raw === '' || strlen($raw) > MAX_BODY_BYTES) {
    respond(false, 400, 'body');
}

if (!mb_check_encoding($raw, 'UTF-8')) {
    respond(false, 400, 'encoding');
}

$data = json_decode($raw, true, 4);
if (!is_array($data)) {
    respond(false, 400, 'json');
}

// Unerwartete Felder verwerfen, statt sie weiterzugeben.
$data = array_intersect_key($data, LIMITS);
foreach ($data as $schluessel => $wert) {
    if (!is_string($wert) && !is_numeric($wert)) {
        respond(false, 400, 'type');
    }
    $data[$schluessel] = (string) $wert;
}

// ---------------------------------------------------------------------------
// Felder pruefen
// ---------------------------------------------------------------------------

$fname   = cleanLine($data['fname']   ?? '', LIMITS['fname']);
$lname   = cleanLine($data['lname']   ?? '', LIMITS['lname']);
$email   = cleanLine($data['email']   ?? '', LIMITS['email']);
$company = cleanLine($data['company'] ?? '', LIMITS['company']);
$phone   = cleanLine($data['phone']   ?? '', LIMITS['phone']);
$zip     = cleanLine($data['zip']     ?? '', LIMITS['zip']);
$message = cleanText($data['message'] ?? '', LIMITS['message']);
$falle   = cleanLine($data['website'] ?? '', LIMITS['website']);

// Spam-Falle: Das Feld ist im Formular unsichtbar. Nur Bots fuellen es aus.
if ($falle !== '') {
    respond(true, 200, 'ok'); // Still verwerfen, damit Bots nichts lernen.
}

if ($fname === '' || $lname === '') {
    respond(false, 422, 'name');
}

$email = filter_var($email, FILTER_VALIDATE_EMAIL) ?: '';
if ($email === '') {
    respond(false, 422, 'email');
}

// Zusaetzliche Sicherung: In keiner Kopfzeile darf ein Umbruch stehen.
foreach ([$email, $fname, $lname] as $kopfzeilenWert) {
    if (preg_match('/[\r\n]/', $kopfzeilenWert)) {
        respond(false, 422, 'header');
    }
}

// Das Formular sendet fuer leere Felder teils einen Strich.
$platzhalter = ['-', "\u{2013}", "\u{2014}"];
$company = in_array($company, $platzhalter, true) ? '' : $company;
$phone   = in_array($phone,   $platzhalter, true) ? '' : $phone;
$zip     = in_array($zip,     $platzhalter, true) ? '' : $zip;
$message = in_array($message, $platzhalter, true) ? '' : $message;

// Viele Links deuten auf Massenversand.
if (preg_match_all('#https?://#i', $message) > 4) {
    respond(true, 200, 'ok');
}

// ---------------------------------------------------------------------------
// Anfragen begrenzen
// ---------------------------------------------------------------------------

$ip   = (string) ($_SERVER['REMOTE_ADDR'] ?? '0.0.0.0');
$salt = (string) ($config['ip_salt'] ?? 'kein-salt');

if (limitUeberschritten('anfrage', $ip, $salt, LIMIT_ANFRAGEN)) {
    respond(false, 429, 'rate');
}

// ---------------------------------------------------------------------------
// Mailversand
// ---------------------------------------------------------------------------

require __DIR__ . '/phpmailer/src/Exception.php';
require __DIR__ . '/phpmailer/src/PHPMailer.php';
require __DIR__ . '/phpmailer/src/SMTP.php';

/**
 * @param array<string,mixed> $config
 */
function sendeMail(array $config, string $an, string $betreff, string $html, string $text, ?string $antwortAn = null): bool
{
    try {
        $mail = new PHPMailer(true);
        $mail->isSMTP();
        $mail->Host       = (string) $config['smtp_host'];
        $mail->SMTPAuth   = true;
        $mail->Username   = (string) $config['smtp_user'];
        $mail->Password   = (string) $config['smtp_pass'];
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = (int) $config['smtp_port'];
        $mail->Timeout    = 20;
        $mail->CharSet    = 'UTF-8';
        $mail->setFrom((string) $config['smtp_user'], 'Smarter System');
        $mail->addAddress($an);
        if ($antwortAn !== null && $antwortAn !== '') {
            $mail->addReplyTo($antwortAn);
        }
        $mail->isHTML(true);
        $mail->Subject = $betreff;
        $mail->Body    = $html;
        $mail->AltBody = $text; // Reiner Text verbessert die Zustellbarkeit.
        return $mail->send();
    } catch (MailException|Throwable $e) {
        error_log('contact.php Mailfehler: ' . $e->getMessage());
        return false;
    }
}

$nameVoll = $fname . ' ' . $lname;
$oderKeine = static fn(string $v): string => $v !== '' ? $v : 'keine Angabe';

// --- 1. Anfrage an den Betreiber ------------------------------------------

$zeilen = [
    ['👤 Name',    $nameVoll],
    ['✉️ E-Mail',  $email],
    ['📱 Telefon', $oderKeine($phone)],
    ['🏢 Firma',   $oderKeine($company)],
    ['📍 PLZ',     $oderKeine($zip)],
];

$tabelle = '';
foreach ($zeilen as $i => [$titel, $wert]) {
    $hintergrund = $i % 2 === 0 ? '#F0F4FF' : '#ffffff';
    $inhalt = $titel === '✉️ E-Mail'
        ? '<a href="mailto:' . e($email) . '" style="color:#1A56E8;text-decoration:none;">' . e($email) . '</a>'
        : e($wert);
    $tabelle .= '<tr style="background:' . $hintergrund . ';">'
        . '<td style="padding:12px 16px;color:#6B7280;font-size:13px;width:140px;font-weight:bold;">' . $titel . '</td>'
        . '<td style="padding:12px 16px;color:#111827;font-size:14px;">' . $inhalt . '</td></tr>';
}

$notify_html = '<!DOCTYPE html><html lang="de"><head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#F0F4FF;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#F0F4FF;padding:40px 0;"><tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(26,86,232,0.10);">
<tr><td style="background:linear-gradient(135deg,#0B1B4D,#1A56E8);padding:36px 40px;text-align:center;">
<h1 style="margin:0;color:#ffffff;font-size:22px;letter-spacing:1px;">📬 Neue Kontaktanfrage</h1>
<p style="margin:8px 0 0;color:rgba(255,255,255,0.75);font-size:14px;">smartersystem.de</p>
</td></tr>
<tr><td style="padding:36px 40px;">
<p style="margin:0 0 24px;color:#374151;font-size:15px;">Sie haben eine neue Anfrage von <strong>' . e($nameVoll) . '</strong> erhalten.</p>
<table width="100%" cellpadding="0" cellspacing="0" style="border-radius:12px;overflow:hidden;border:1px solid #E5E7EB;">' . $tabelle . '</table>
<table width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;"><tr>
<td style="background:#F0F4FF;border-left:4px solid #1A56E8;border-radius:0 12px 12px 0;padding:16px 20px;">
<p style="margin:0 0 8px;color:#6B7280;font-size:12px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;">💬 Nachricht</p>
<p style="margin:0;color:#111827;font-size:14px;line-height:1.7;">' . nl2br(e($oderKeine($message))) . '</p>
</td></tr></table>
<table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;"><tr><td align="center">
<a href="mailto:' . e($email) . '" style="display:inline-block;background:linear-gradient(135deg,#1A56E8,#38BDF8);color:#ffffff;text-decoration:none;padding:14px 36px;border-radius:8px;font-size:15px;font-weight:bold;">↩ Jetzt antworten</a>
</td></tr></table>
</td></tr>
<tr><td style="background:#F9FAFB;padding:20px 40px;text-align:center;border-top:1px solid #E5E7EB;">
<p style="margin:0;color:#9CA3AF;font-size:12px;">Smarter System · info@smartersystem.de · ' . TELEFON_ANZEIGE . '</p>
</td></tr>
</table></td></tr></table></body></html>';

$notify_text = implode("\n", [
    'Neue Kontaktanfrage ueber smartersystem.de',
    '',
    'Name:    ' . $nameVoll,
    'E-Mail:  ' . $email,
    'Telefon: ' . $oderKeine($phone),
    'Firma:   ' . $oderKeine($company),
    'PLZ:     ' . $oderKeine($zip),
    '',
    'Nachricht:',
    $oderKeine($message),
]);

$gesendet = sendeMail(
    $config,
    (string) ($config['mail_to'] ?? $config['smtp_user']),
    'Neue Anfrage von ' . $nameVoll,
    $notify_html,
    $notify_text,
    $email
);

if (!$gesendet) {
    respond(false, 500, 'send');
}

// --- 2. Eingangsbestaetigung an den Absender ------------------------------
//
// Diese Mail geht an eine Adresse, die der Anfragende selbst eingetragen hat.
// Ohne Begrenzung waere das ein Werkzeug, um ueber diesen Server beliebige
// Fremde anzuschreiben. Deshalb: nur wenn die Benachrichtigung oben geklappt
// hat, und nur wenige Male je Stunde und IP-Adresse.

if (!limitUeberschritten('bestaetigung', $ip, $salt, LIMIT_BESTAETIGUNGEN)) {

    $kurzeNachricht = kuerzen($oderKeine($message), 500);

    $reply_html = '<!DOCTYPE html><html lang="de"><head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#F0F4FF;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#F0F4FF;padding:40px 0;"><tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(26,86,232,0.10);">
<tr><td style="background:linear-gradient(135deg,#0B1B4D,#1A56E8);padding:36px 40px;text-align:center;">
<h1 style="margin:0;color:#ffffff;font-size:22px;letter-spacing:1px;">✅ Anfrage erhalten</h1>
<p style="margin:8px 0 0;color:rgba(255,255,255,0.75);font-size:14px;">Vielen Dank für Ihre Nachricht</p>
</td></tr>
<tr><td style="padding:36px 40px;">
<p style="margin:0 0 16px;color:#374151;font-size:15px;">Hallo <strong>' . e($fname) . '</strong>,</p>
<p style="margin:0 0 24px;color:#374151;font-size:15px;line-height:1.7;">vielen Dank für Ihre Anfrage. Wir haben Ihre Nachricht erhalten und melden uns <strong>so schnell wie möglich</strong> bei Ihnen, in der Regel innerhalb von 24 Stunden.</p>
<table width="100%" cellpadding="0" cellspacing="0" style="border-radius:12px;overflow:hidden;border:1px solid #E5E7EB;margin-bottom:24px;">
<tr style="background:#1A56E8;"><td colspan="2" style="padding:12px 16px;color:#ffffff;font-size:13px;font-weight:bold;letter-spacing:0.5px;">📋 Ihre Angaben</td></tr>
<tr style="background:#F0F4FF;"><td style="padding:12px 16px;color:#6B7280;font-size:13px;width:140px;font-weight:bold;">Name</td><td style="padding:12px 16px;color:#111827;font-size:14px;">' . e($nameVoll) . '</td></tr>
<tr style="background:#ffffff;"><td style="padding:12px 16px;color:#6B7280;font-size:13px;font-weight:bold;">Telefon</td><td style="padding:12px 16px;color:#111827;font-size:14px;">' . e($oderKeine($phone)) . '</td></tr>
<tr style="background:#F0F4FF;"><td style="padding:12px 16px;color:#6B7280;font-size:13px;font-weight:bold;">PLZ</td><td style="padding:12px 16px;color:#111827;font-size:14px;">' . e($oderKeine($zip)) . '</td></tr>
<tr style="background:#ffffff;"><td style="padding:12px 16px;color:#6B7280;font-size:13px;font-weight:bold;">Nachricht</td><td style="padding:12px 16px;color:#111827;font-size:14px;line-height:1.6;">' . nl2br(e($kurzeNachricht)) . '</td></tr>
</table>
<p style="margin:0;color:#6B7280;font-size:13px;line-height:1.7;">Falls Sie noch Fragen haben, erreichen Sie uns jederzeit direkt:<br>
📱 <a href="tel:' . TELEFON_LINK . '" style="color:#1A56E8;text-decoration:none;">' . TELEFON_ANZEIGE . '</a> &nbsp;|&nbsp;
✉️ <a href="mailto:info@smartersystem.de" style="color:#1A56E8;text-decoration:none;">info@smartersystem.de</a></p>
</td></tr>
<tr><td style="background:#F9FAFB;padding:20px 40px;text-align:center;border-top:1px solid #E5E7EB;">
<p style="margin:0 0 4px;color:#374151;font-size:13px;font-weight:bold;">Smarter System</p>
<p style="margin:0;color:#9CA3AF;font-size:12px;">Aleksandar Vukanovic · Eisackstraße 37 · 10827 Berlin</p>
<p style="margin:4px 0 0;color:#9CA3AF;font-size:12px;">info@smartersystem.de · ' . TELEFON_ANZEIGE . '</p>
<p style="margin:8px 0 0;color:#D1D5DB;font-size:11px;">Diese Bestätigung wurde automatisch erzeugt.</p>
</td></tr>
</table></td></tr></table></body></html>';

    $reply_text = implode("\n", [
        'Hallo ' . $fname . ',',
        '',
        'vielen Dank fuer Ihre Anfrage. Wir haben Ihre Nachricht erhalten und',
        'melden uns so schnell wie moeglich bei Ihnen, in der Regel innerhalb',
        'von 24 Stunden.',
        '',
        'Ihre Angaben:',
        'Name:    ' . $nameVoll,
        'Telefon: ' . $oderKeine($phone),
        'PLZ:     ' . $oderKeine($zip),
        'Nachricht: ' . $kurzeNachricht,
        '',
        'Smarter System · Aleksandar Vukanovic',
        'Eisackstrasse 37 · 10827 Berlin',
        'info@smartersystem.de · ' . TELEFON_ANZEIGE,
    ]);

    sendeMail(
        $config,
        $email,
        'Ihre Anfrage bei Smarter System',
        $reply_html,
        $reply_text,
        (string) ($config['mail_to'] ?? $config['smtp_user'])
    );
}

respond(true, 200, 'ok');
