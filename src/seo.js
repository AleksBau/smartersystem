import { leistungen } from './data/leistungen'

/**
 * Eine einzige Quelle für alles, was Suchmaschinen über die Seiten wissen.
 *
 * Wird an drei Stellen benutzt:
 *   1. beim Vorab-Rendern, um je Seite Titel und Beschreibung einzusetzen
 *   2. beim Erzeugen der sitemap.xml
 *   3. für die Frage-und-Antwort-Daten der Leistungsseiten
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

const feste = [
  {
    pfad: '/',
    titel: 'Smart Home nachrüsten | Berlin & Brandenburg',
    beschreibung:
      'Smart Home für Wohnung, Haus und Büro in Berlin und Brandenburg. Komplettpakete ab 1.249 € inklusive Montage, Einrichtung und Einweisung. Beratung kostenlos.',
    prioritaet: '1.0',
  },
  {
    pfad: '/leistungen',
    titel: 'Leistungen im Überblick | Berlin & Brandenburg',
    beschreibung:
      'Heizung, Licht und Beschattung, Alarm, Kameras, Rauchwarnmelder, Schaltertausch und Wartung. Smart Home nachrüsten ohne Umbau, zum Festpreis.',
    prioritaet: '0.9',
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
  },
  {
    pfad: '/datenschutz',
    titel: 'Datenschutzerklärung | Smarter System',
    beschreibung:
      'Diese Website setzt keine Cookies, misst nichts und bindet keine Dienste Dritter ein. Welche Daten wir verarbeiten und wie lange wir sie speichern.',
    prioritaet: '0.2',
  },
];

// Aus jeder Leistung wird automatisch eine eigene Seite. So kann die Liste in
// data/leistungen.js wachsen, ohne dass hier etwas nachgetragen werden muss.
const ausLeistungen = leistungen.map((l) => ({
  pfad: `/leistungen/${l.slug}`,
  titel: l.titel,
  beschreibung: l.beschreibung,
  prioritaet: '0.9',
  faq: l.faq,
  leistungsName: l.h1,
}));

export const seiten = [...feste, ...ausLeistungen];

/** Findet die Angaben zu einem Pfad, mit der Startseite als Rückfallebene. */
export function seiteZuPfad(pfad) {
  const sauber = pfad.replace(/\/+$/, '') || '/';
  return seiten.find((s) => s.pfad === sauber) || seiten[0];
}
