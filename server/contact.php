<?php
/**
 * Kontaktformular-Empfaenger fuer smartersystem.de
 *
 * Ablageort auf dem Server: https://web.smartersystem.de/contact.php
 *
 * Diese Datei wird NICHT von GitHub Pages ausgeliefert. Sie liegt hier nur zur
 * Versionierung. Hochladen per FTP/SFTP in das Web-Verzeichnis von web.smartersystem.de.
 *
 * Grundsatz: Alles, was aus dem Browser kommt, ist unzuverlaessig. Ein Angreifer
 * kann diese Adresse direkt ansprechen und jede Pruefung im Browser umgehen.
 * Deshalb wird hier alles erneut geprueft.
 */

declare(strict_types=1);

// ---------------------------------------------------------------------------
// Einstellungen
// ---------------------------------------------------------------------------

/** Empfaenger der Anfragen. */
const MAIL_TO = 'info@smartersystem.de';

/** Absender. Muss ein Postfach der eigenen Domain sein, sonst greift SPF/DKIM nicht. */
const MAIL_FROM = 'info@smartersystem.de';
const MAIL_FROM_NAME = 'Smarter System Website';

/** Nur diese Herkunftsadressen duerfen das Formular nutzen. */
const ALLOWED_ORIGINS = [
    'https://smartersystem.de',
    'https://www.smartersystem.de',
];

/** Hoechstens so viele Anfragen pro IP-Adresse und Stunde. */
const RATE_LIMIT_PER_HOUR = 5;

/** Groesse des Anfragekoerpers in Byte. Alles darueber wird verworfen. */
const MAX_BODY_BYTES = 20000;

/**
 * Zufallswert fuer die Verschleierung der IP-Adresse.
 * Liegt neben dieser Datei eine Datei namens .contact-salt, wird deren Inhalt
 * verwendet. So muss der echte Wert nicht in der Versionsverwaltung stehen.
 */
$saltFile = __DIR__ . '/.contact-salt';
define('IP_SALT', is_readable($saltFile)
    ? trim((string) file_get_contents($saltFile))
    : 'ersatzwert-bitte-datei-.contact-salt-anlegen');

/** Zulaessige Feldlaengen in Zeichen. */
const LIMITS = [
    'company' => 100,
    'fname'   => 60,
    'lname'   => 60,
    'email'   => 120,
    'phone'   => 30,
    'zip'     => 10,
    'message' => 3000,
];

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
    // Alle Steuerzeichen, auch CR, LF und Tab.
    $value = preg_replace('/[\x00-\x1F\x7F]+/u', ' ', $value) ?? '';
    $value = trim(preg_replace('/\s+/u', ' ', $value) ?? '');
    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $maxLength, 'UTF-8');
    }
    return substr($value, 0, $maxLength);
}

/** Wie cleanLine, erlaubt aber Zeilenumbrueche. Nur fuer den Nachrichtentext. */
function cleanText(?string $value, int $maxLength): string
{
    $value = (string) $value;
    $value = str_replace(["\r\n", "\r"], "\n", $value);
    $value = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]+/u', '', $value) ?? '';
    $value = trim($value);
    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $maxLength, 'UTF-8');
    }
    return substr($value, 0, $maxLength);
}

/** Betreffzeile nach RFC 2047 kodieren, damit Umlaute nicht zerfallen. */
function encodeHeader(string $text): string
{
    return '=?UTF-8?B?' . base64_encode($text) . '?=';
}

/**
 * Begrenzt Anfragen pro IP-Adresse.
 * Gespeichert wird nur ein Hashwert der IP, nicht die IP selbst.
 * Dateien aelter als sieben Tage werden entfernt.
 */
function rateLimitExceeded(string $ip): bool
{
    $dir = sys_get_temp_dir() . '/ss-contact-rl';
    if (!is_dir($dir) && !@mkdir($dir, 0700, true) && !is_dir($dir)) {
        return false; // Kein Verzeichnis moeglich: nicht blockieren, aber auch nicht zaehlen.
    }

    // Aufraeumen, damit das Verzeichnis nicht unbegrenzt waechst.
    foreach ((array) @glob($dir . '/*') as $old) {
        if (is_string($old) && @filemtime($old) < time() - 7 * 86400) {
            @unlink($old);
        }
    }

    $file = $dir . '/' . hash('sha256', IP_SALT . $ip);
    $now = time();

    $stamps = [];
    if (is_readable($file)) {
        $raw = (string) @file_get_contents($file);
        foreach (explode("\n", $raw) as $line) {
            $t = (int) trim($line);
            if ($t > $now - 3600) {
                $stamps[] = $t;
            }
        }
    }

    if (count($stamps) >= RATE_LIMIT_PER_HOUR) {
        return true;
    }

    $stamps[] = $now;
    @file_put_contents($file, implode("\n", $stamps), LOCK_EX);
    return false;
}

// ---------------------------------------------------------------------------
// Herkunft pruefen (CORS)
// ---------------------------------------------------------------------------

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$originAllowed = in_array($origin, ALLOWED_ORIGINS, true);

if ($originAllowed) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Control-Max-Age: 86400');
}

// Vorabanfrage des Browsers.
if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
    http_response_code($originAllowed ? 204 : 403);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST, OPTIONS');
    respond(false, 405, 'method');
}

// Ein leeres Origin kommt von Nicht-Browser-Werkzeugen. Wir lassen nur
// die eigene Website zu.
if (!$originAllowed) {
    respond(false, 403, 'origin');
}

// ---------------------------------------------------------------------------
// Anfragekoerper einlesen
// ---------------------------------------------------------------------------

$declaredLength = (int) ($_SERVER['CONTENT_LENGTH'] ?? 0);
if ($declaredLength > MAX_BODY_BYTES) {
    respond(false, 413, 'size');
}

$raw = (string) file_get_contents('php://input', false, null, 0, MAX_BODY_BYTES + 1);
if ($raw === '' || strlen($raw) > MAX_BODY_BYTES) {
    respond(false, 400, 'body');
}

// Ungueltiges UTF-8 fuehrt sonst dazu, dass die Filter unten ins Leere greifen.
if (!mb_check_encoding($raw, 'UTF-8')) {
    respond(false, 400, 'encoding');
}

$data = json_decode($raw, true, 4);
if (!is_array($data)) {
    respond(false, 400, 'json');
}

// Unerwartete Felder verwerfen, statt sie weiterzugeben.
$data = array_intersect_key($data, LIMITS);
foreach ($data as $key => $value) {
    if (!is_string($value) && !is_numeric($value)) {
        respond(false, 400, 'type');
    }
    $data[$key] = (string) $value;
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

if ($fname === '' || $lname === '') {
    respond(false, 422, 'name');
}

$email = filter_var($email, FILTER_VALIDATE_EMAIL) ?: '';
if ($email === '' || strlen($email) > LIMITS['email']) {
    respond(false, 422, 'email');
}

// Zusaetzliche Sicherung: In keiner Kopfzeile darf ein Umbruch stehen.
foreach ([$email, $fname, $lname] as $headerValue) {
    if (preg_match('/[\r\n]/', $headerValue)) {
        respond(false, 422, 'header');
    }
}

// Das Formular sendet fuer leere Felder einen Strich. Den fuehren wir zurueck,
// damit in der E-Mail "keine Angabe" steht.
$placeholders = ['-', "\u{2013}", "\u{2014}"];
$company = in_array($company, $placeholders, true) ? '' : $company;
$phone   = in_array($phone,   $placeholders, true) ? '' : $phone;
$zip     = in_array($zip,     $placeholders, true) ? '' : $zip;
$message = in_array($message, $placeholders, true) ? '' : $message;

// Einfache Spam-Erkennung: sehr viele Links deuten auf Massenversand.
if (preg_match_all('#https?://#i', $message) > 4) {
    respond(true, 200, 'ok'); // Still verwerfen, damit Bots nichts lernen.
}

// ---------------------------------------------------------------------------
// Anfragen begrenzen
// ---------------------------------------------------------------------------

$ip = (string) ($_SERVER['REMOTE_ADDR'] ?? '0.0.0.0');
if (rateLimitExceeded($ip)) {
    respond(false, 429, 'rate');
}

// ---------------------------------------------------------------------------
// E-Mail zusammensetzen und versenden
// ---------------------------------------------------------------------------

$subject = encodeHeader(sprintf('Neue Anfrage von %s %s', $fname, $lname));

$body = implode("\n", [
    'Neue Anfrage ueber das Kontaktformular auf smartersystem.de',
    '',
    'Name:         ' . $fname . ' ' . $lname,
    'E-Mail:       ' . $email,
    'Telefon:      ' . ($phone !== '' ? $phone : 'keine Angabe'),
    'Unternehmen:  ' . ($company !== '' ? $company : 'keine Angabe'),
    'Postleitzahl: ' . ($zip !== '' ? $zip : 'keine Angabe'),
    '',
    'Nachricht:',
    $message !== '' ? $message : 'keine Nachricht eingegeben',
    '',
    str_repeat('-', 60),
    'Eingegangen: ' . date('d.m.Y H:i:s'),
]);

$headers = implode("\r\n", [
    'From: ' . encodeHeader(MAIL_FROM_NAME) . ' <' . MAIL_FROM . '>',
    'Reply-To: ' . encodeHeader($fname . ' ' . $lname) . ' <' . $email . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'X-Mailer: smartersystem-contact',
    'Auto-Submitted: auto-generated',
]);

$sent = @mail(MAIL_TO, $subject, $body, $headers, '-f' . MAIL_FROM);
if (!$sent) {
    // Zweiter Versuch ohne Envelope-Parameter, falls der Anbieter ihn sperrt.
    $sent = @mail(MAIL_TO, $subject, $body, $headers);
}

if (!$sent) {
    respond(false, 500, 'send');
}

respond(true, 200, 'ok');
