import { Link } from 'react-router-dom'

const pakete = [
  {
    key: 'S',
    name: 'Starter',
    claim: 'Sicher & Warm',
    preis: '949',
    zielgruppe: 'Für Wohnungen bis ca. 60 m²',
    highlight: false,
    inhalt: [
      '1 × Zentrale (Access Point)',
      '2 × Heizkörperthermostat',
      '1 × Wandthermostat mit Luftfeuchtemessung',
      '2 × Fenster- und Türkontakt',
      '1 × Schaltsteckdose',
      '1 × Alarmsirene',
    ],
    nutzen: 'Heizkosten senken, Schimmel vorbeugen, Alarm bei geöffnetem Fenster.',
  },
  {
    key: 'M',
    name: 'Komfort',
    claim: 'Wohnung komplett',
    preis: '1.249',
    zielgruppe: 'Für Wohnungen bis ca. 90 m²',
    highlight: true,
    inhalt: [
      '1 × Zentrale (Access Point)',
      '3 × Heizkörperthermostat',
      '1 × Wandthermostat mit Luftfeuchtemessung',
      '1 × Raumklimasensor',
      '2 × Schaltsteckdose',
      '3 × Fenster- und Türkontakt',
      '1 × Alarmsirene',
      '1 × Funk-Wandtaster (ohne Kabel, frei platzierbar)',
    ],
    nutzen: 'Die komplette Wohnung im Griff – Heizung, Licht, Sicherheit, alles in einer App.',
  },
  {
    key: 'L',
    name: 'Premium',
    claim: 'Haus & Zutritt',
    preis: '2.249',
    zielgruppe: 'Für Häuser und große Wohnungen',
    highlight: false,
    inhalt: [
      '1 × Zentrale (Access Point)',
      '4 × Heizkörperthermostat',
      '2 × Wandthermostat mit Luftfeuchtemessung',
      '1 × Präsenzmelder',
      '2 × Schaltsteckdose, 1 × Messsteckdose',
      '5 × Fenster- und Türkontakt',
      '1 × Türschlossantrieb + 2 Fernbedienungen',
      '2 × Rauchwarnmelder, 1 × Alarmsirene',
    ],
    nutzen: 'Nie wieder Schlüssel suchen, nie wieder fragen, ob die Tür zu ist.',
  },
]

const enthalten = [
  { icon: '📦', text: 'Alle Geräte inklusive – keine Nachbestellung nötig' },
  { icon: '🛠️', text: 'Fachgerechte Montage ohne Bohren in tragende Wände' },
  { icon: '⚙️', text: '10 Automatisierungen, individuell auf Sie abgestimmt' },
  { icon: '🎓', text: 'Persönliche Einweisung, bis alles sitzt' },
  { icon: '📄', text: 'Schriftlicher Installationsbericht für Ihre Unterlagen' },
  { icon: '💬', text: '30 Tage kostenfreier Support per Telefon und WhatsApp' },
]

function Check() {
  return (
    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#1A56E8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

export default function StarterSets() {
  return (
    <section id="pakete" className="bg-[#F0F4FF] py-24 px-[5%]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="section-label">Festpreis-Pakete</div>
          <h2 className="section-title text-3xl md:text-4xl">
            Smart Home zum <span className="text-[#1A56E8]">Festpreis</span>
          </h2>
          <p className="text-gray-500 text-lg mt-3 max-w-2xl mx-auto">
            Komplett installiert, eingerichtet und erklärt. Ein Preis, ein Termin, keine Überraschungen auf der Rechnung.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {pakete.map((p) => (
            <div
              key={p.key}
              className={`relative rounded-2xl border transition-all duration-300 flex flex-col h-full ${
                p.highlight
                  ? 'border-[#1A56E8] shadow-2xl lg:-mt-4 lg:mb-4 bg-white'
                  : 'border-gray-200 shadow-sm hover:shadow-lg bg-white'
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1A56E8] text-white text-[0.7rem] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full whitespace-nowrap">
                  Beliebteste Wahl
                </div>
              )}
              <div className="p-8 pb-6">
                <div className="text-xs font-bold tracking-widest uppercase text-[#1A56E8] mb-1">{p.name}</div>
                <h3 className="font-playfair font-bold text-2xl text-gray-900 mb-1">{p.claim}</h3>
                <p className="text-gray-400 text-sm mb-5">{p.zielgruppe}</p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-bold text-gray-900">{p.preis} €</span>
                  <span className="text-gray-400 text-sm">inkl. MwSt.</span>
                </div>
                <p className="text-gray-500 text-xs mb-6">Festpreis inkl. Montage &amp; Einrichtung</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 min-h-[3rem]">{p.nutzen}</p>
                <Link
                  to="/kontakt"
                  className={`block text-center font-bold px-6 py-3 rounded-xl no-underline text-sm transition-colors ${
                    p.highlight
                      ? 'bg-[#1A56E8] text-white hover:bg-[#1246C8]'
                      : 'bg-[#F0F4FF] text-[#1A56E8] hover:bg-[#dfe8ff]'
                  }`}
                >
                  Kostenlos beraten lassen
                </Link>
              </div>
              <div className="border-t border-gray-100 p-8 pt-6 flex-1">
                <div className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">Enthaltene Geräte</div>
                <ul className="space-y-2.5">
                  {p.inhalt.map((i, n) => (
                    <li key={n} className="flex gap-2.5 text-sm text-gray-600 leading-snug">
                      <Check />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Was immer dabei ist */}
        <div className="mt-14 bg-white border border-gray-100 shadow-sm rounded-2xl p-8 md:p-10">
          <h3 className="font-bold text-gray-900 text-lg mb-6 text-center">In jedem Paket enthalten</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {enthalten.map((e, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-xl leading-none mt-0.5">{e.icon}</span>
                <span className="text-gray-600 text-sm leading-snug">{e.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Individuell */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Ihr Zuhause passt in kein Paket? <Link to="/kontakt" className="text-[#1A56E8] font-semibold no-underline hover:underline">Wir stellen Ihnen ein individuelles Angebot zusammen</Link> – die Beratung vor Ort ist kostenlos und unverbindlich.
          </p>
        </div>


      </div>
    </section>
  )
}
