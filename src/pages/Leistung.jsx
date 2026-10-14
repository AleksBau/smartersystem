import { Link, useParams } from 'react-router-dom'
import { leistungen, leistungZuSlug, EINZUGSGEBIET } from '../data/leistungen'

const ablauf = [
  { nr: '1', titel: 'Kostenloser Termin vor Ort', text: 'Wir sehen uns Ihre Räume an, hören zu und sagen Ihnen offen, was sinnvoll ist und was nicht.' },
  { nr: '2', titel: 'Festpreis-Angebot', text: 'Sie bekommen ein schriftliches Angebot mit allen Geräten und der Montage. Keine Überraschungen hinterher.' },
  { nr: '3', titel: 'Montage an einem Tag', text: 'In der Regel ist alles an einem Arbeitstag fertig. Es werden keine Leitungen verlegt und keine Wände aufgestemmt. Wo gebohrt werden muss, sagen wir es vorher und räumen hinter uns auf.' },
  { nr: '4', titel: 'Einweisung, bis es sitzt', text: 'Wir gehen alles mit Ihnen durch, bis Sie es selbst bedienen können. Danach 30 Tage Support inklusive.' },
]

function Haken() {
  return (
    <svg className="w-4 h-4 mt-1 flex-shrink-0 text-[#1A56E8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

export default function Leistung() {
  const { slug } = useParams()
  const l = leistungZuSlug(slug)

  if (!l) {
    return (
      <div className="max-w-3xl mx-auto px-[5%] py-32 text-center">
        <h1 className="font-playfair font-bold text-3xl text-gray-900 mb-4">Diese Leistung kennen wir nicht</h1>
        <p className="text-gray-500 mb-8">Schauen Sie in der Übersicht, ob etwas anderes passt.</p>
        <Link to="/leistungen" className="btn-primary">Zur Übersicht</Link>
      </div>
    )
  }

  const andere = leistungen.filter((x) => x.slug !== l.slug)

  return (
    <>
      {/* Kopf */}
      <div className="px-[5%] py-20 text-center" style={{ background: 'linear-gradient(135deg, #0B1B4D, #1A56E8)' }}>
        <div className="text-4xl mb-4">{l.icon}</div>
        <h1 className="font-playfair font-extrabold text-white mb-4 max-w-3xl mx-auto" style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)' }}>
          {l.h1}
        </h1>
        <p className="text-white/80 text-lg max-w-2xl mx-auto">{l.claim}</p>
      </div>

      {/* Einleitung */}
      <section className="py-16 px-[5%]">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed">{l.einleitung}</p>
        </div>
      </section>

      {/* Nutzen */}
      <section className="pb-16 px-[5%]">
        <div className="max-w-5xl mx-auto">
          <div className="section-label">Was Sie davon haben</div>
          <h2 className="section-title text-2xl md:text-3xl mb-10">Darum lohnt es sich</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {l.nutzen.map((n, i) => (
              <div key={i} className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">{n.titel}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{n.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Komponenten */}
      <section className="py-16 px-[5%] bg-[#F0F4FF]">
        <div className="max-w-3xl mx-auto">
          <div className="section-label">Im Einsatz</div>
          <h2 className="section-title text-2xl md:text-3xl mb-8">Was wir einbauen</h2>
          <ul className="space-y-3">
            {l.komponenten.map((k, i) => (
              <li key={i} className="flex gap-3 text-gray-700 leading-relaxed">
                <Haken />
                <span>{k}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-500 text-sm mt-8 leading-relaxed">
            Wir arbeiten mit einem in Deutschland entwickelten und produzierten Funksystem, das vom VDE hinsichtlich
            Funkprotokoll, Informationssicherheit und Datenschutz geprüft und zertifiziert ist. Alle Komponenten stammen
            aus einer Hand und sind aufeinander abgestimmt. Für die Nutzung ist kein Abonnement nötig, und es werden
            keine Daten an Dritte verkauft.
          </p>
        </div>
      </section>

      {/* Ablauf */}
      <section className="py-16 px-[5%]">
        <div className="max-w-5xl mx-auto">
          <div className="section-label">So läuft es ab</div>
          <h2 className="section-title text-2xl md:text-3xl mb-10">Vom Anruf bis zum fertigen System</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ablauf.map((s) => (
              <div key={s.nr}>
                <div className="w-9 h-9 rounded-xl grid place-items-center text-white font-bold text-sm mb-3" style={{ background: 'linear-gradient(135deg, #1A56E8, #38BDF8)' }}>
                  {s.nr}
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1.5">{s.titel}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fragen */}
      <section className="py-16 px-[5%] bg-[#F0F4FF]">
        <div className="max-w-3xl mx-auto">
          <div className="section-label">Häufige Fragen</div>
          <h2 className="section-title text-2xl md:text-3xl mb-8">Das werden wir oft gefragt</h2>
          <div className="space-y-4">
            {l.faq.map((f, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">{f.frage}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.antwort}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aufforderung */}
      <section className="py-16 px-[5%] text-center" style={{ background: 'linear-gradient(135deg, #0B1B4D, #1A56E8)' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="font-playfair font-extrabold text-white text-2xl md:text-3xl mb-4">Unverbindlich beraten lassen</h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            Der Termin vor Ort kostet nichts und verpflichtet zu nichts. Danach wissen Sie, was in Ihrer Wohnung
            möglich ist und was es kostet.
          </p>
          <Link to="/kontakt" className="inline-block bg-white text-[#1A56E8] font-bold px-8 py-4 rounded-xl no-underline hover:bg-[#F0F4FF] transition-colors">
            Termin anfragen
          </Link>
          <p className="text-white/60 text-sm mt-6">
            Oder direkt anrufen: <a href="tel:+4915563989382" className="text-white underline">+49 15563 989382</a>
          </p>
          <p className="text-white/60 text-sm mt-2">Wir sind in {EINZUGSGEBIET} für Sie unterwegs.</p>
        </div>
      </section>

      {/* Weitere Leistungen */}
      <section className="py-16 px-[5%]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-playfair font-bold text-gray-900 text-xl mb-6">Weitere Leistungen</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {andere.map((a) => (
              <Link
                key={a.slug}
                to={`/leistungen/${a.slug}`}
                className="inline-flex items-center gap-2 bg-[#F0F4FF] text-[#1A56E8] font-semibold text-sm px-4 py-2.5 rounded-xl no-underline hover:bg-[#dfe8ff] transition-colors"
              >
                <span>{a.icon}</span> {a.kurz}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
