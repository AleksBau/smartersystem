import { Link } from 'react-router-dom'
import { leistungen, EINZUGSGEBIET } from '../data/leistungen'

export default function Leistungen() {
  return (
    <>
      <div className="px-[5%] py-20 text-center" style={{ background: 'linear-gradient(135deg, #0B1B4D, #1A56E8)' }}>
        <h1 className="font-playfair font-extrabold text-white mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
          Unsere Leistungen
        </h1>
        <p className="text-white/80 text-lg max-w-2xl mx-auto">
          Smart Home nachrüsten, ohne Umbau und ohne Dreck – einzeln oder als Komplettpaket zum Festpreis.
          Wir sind in {EINZUGSGEBIET} für Sie unterwegs.
        </p>
      </div>

      <section className="py-20 px-[5%]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leistungen.map((l) => (
              <Link
                key={l.slug}
                to={`/leistungen/${l.slug}`}
                className="group bg-white border border-gray-100 shadow-sm rounded-2xl p-7 no-underline hover:shadow-lg hover:border-[#1A56E8]/30 transition-all"
              >
                <div className="text-3xl mb-4">{l.icon}</div>
                <h2 className="font-playfair font-bold text-xl text-gray-900 mb-2 group-hover:text-[#1A56E8] transition-colors">
                  {l.h1}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{l.claim}</p>
                <span className="text-[#1A56E8] font-semibold text-sm">Mehr erfahren →</span>
              </Link>
            ))}
          </div>

          <div className="mt-12 bg-[#F0F4FF] rounded-2xl p-8 md:p-10 text-center">
            <h2 className="font-playfair font-bold text-gray-900 text-2xl mb-4">
              Zusammen ergibt es erst ein Smart Home
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed max-w-2xl mx-auto">
              Einzelne Geräte können einzelne Dinge. Richtig stark wird es, wenn sie voneinander wissen: Der
              Fensterkontakt dreht die Heizung herunter. Der Bewegungsmelder schaltet das Licht ein – und nachts,
              wenn die Anlage scharf ist, löst derselbe Melder Alarm aus. Die Rollläden fahren herunter, sobald der
              Rauchwarnmelder Ruhe gibt und die Sonne zu stark wird.
            </p>
            <p className="text-gray-600 mb-7 leading-relaxed max-w-2xl mx-auto">
              Deshalb bündeln unsere Komplettpakete Heizung, Licht und Sicherheit zum Festpreis – inklusive Montage,
              zehn aufeinander abgestimmten Automatisierungen und persönlicher Einweisung.
            </p>
            <Link to="/#pakete" className="btn-primary">Pakete ansehen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
