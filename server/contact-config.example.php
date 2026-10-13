<?php
/**
 * Zugangsdaten fuer contact.php
 *
 * SO GEHT ES:
 * 1. Diese Datei auf dem Server in "contact-config.php" umbenennen
 *    (also ohne ".example"), im selben Ordner wie contact.php.
 * 2. Unten das Postfach-Passwort eintragen.
 * 3. Diese Beispieldatei NICHT mit echtem Passwort in die Versionsverwaltung legen.
 */

return [
    // Postfach, ueber das verschickt wird. Muss ein Postfach der eigenen
    // Domain sein, sonst weist der Empfaenger die Mail als Faelschung ab.
    'smtp_host' => 'w01f4ac1.kasserver.com',
    'smtp_user' => 'info@smartersystem.de',
    'smtp_pass' => 'HIER-DAS-NEUE-POSTFACH-PASSWORT-EINTRAGEN',
    'smtp_port' => 587,

    // Hierhin gehen die Anfragen.
    'mail_to'   => 'info@smartersystem.de',

    // Zufallswert zur Verschleierung der IP-Adressen in der Sperrliste.
    // Einmalig durch irgendeine lange zufaellige Zeichenfolge ersetzen.
    'ip_salt'   => 'HIER-EINE-LANGE-ZUFALLSFOLGE-EINTRAGEN',
];
