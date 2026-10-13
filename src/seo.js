/**
 * Eine einzige Quelle für alles, was Suchmaschinen über die Seiten wissen.
 *
 * Wird an drei Stellen benutzt:
 *   1. beim Vorab-Rendern, um je Seite Titel und Beschreibung einzusetzen
 *   2. beim Erzeugen der sitemap.xml
 *   3. in der Navigation, damit Leistungsseiten nicht doppelt gepflegt werden
 *
 * Titel: höchstens etwa 60 Zeichen, sonst kürzt Google ab.
 * Beschreibung: 140 bis 160 Zeichen, mit einem Grund zu klicken.
 */

export const SITE = {
  name: 'Smarter System',
  inhaber: 'Aleksandar Vukanovic',
  url: 'https://smartersystem.de',
  telefon: '+49 15563 989382',
  telefonLink: '+4915563989382',
  email: 'info@smartersystem.de',
  strasse: 'Eisackstraße 37',
  plz: '10827',
  ort: 'Berlin',
};

export const seiten = [
  {
    pfad: '/',
    titel: 'Smart Home Berlin zum Festpreis | Smarter System',
    beschreibung:
      'Smart Home für Wohnung, Haus und Büro in Berlin. Komplettpakete ab 1.249 € inklusive Montage, Einrichtung und Einweisung. Beratung vor Ort kostenlos.',
    prioritaet: '1.0',
  },
  {
    pfad: '/kontakt',
    titel: 'Kontakt | Smarter System Berlin',
    beschreibung:
      'Kostenlose und unverbindliche Beratung zu Smart Home in Berlin. Per Telefon, WhatsApp oder Formular – wir melden uns in der Regel innerhalb von 24 Stunden.',
    prioritaet: '0.8',
  },
  {
    pfad: '/impressum',
    titel: 'Impressum | Smarter System',
    beschreibung: 'Anbieterkennzeichnung nach § 5 Digitale-Dienste-Gesetz für Smarter System, Berlin.',
    prioritaet: '0.2',
    nichtIndexieren: false,
  },
  {
    pfad: '/datenschutz',
    titel: 'Datenschutzerklärung | Smarter System',
    beschreibung:
      'Diese Website setzt keine Cookies, misst nichts und bindet keine Dienste Dritter ein. Welche Daten wir verarbeiten und wie lange wir sie speichern.',
    prioritaet: '0.2',
  },
];

/** Findet die Angaben zu einem Pfad, mit der Startseite als Rückfallebene. */
export function seiteZuPfad(pfad) {
  const sauber = pfad.replace(/\/+$/, '') || '/';
  return seiten.find((s) => s.pfad === sauber) || seiten[0];
}
