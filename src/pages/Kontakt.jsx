import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Kontakt() {
  const formRef = useRef()
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    if (status === 'loading') return

    const data = new FormData(formRef.current)

    // Spam-Falle: Das Feld ist für Menschen unsichtbar. Nur Bots füllen es aus.
    if (data.get('website')) {
      setStatus('success')
      formRef.current.reset()
      return
    }

    setStatus('loading')

    try {
      const res = await fetch('https://web.smartersystem.de/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          company: data.get('company') || '',
          fname:   data.get('fname'),
          lname:   data.get('lname'),
          email:   data.get('email'),
          phone:   data.get('phone') || '',
          zip:     data.get('zip') || '',
          message: data.get('message') || '',
        })
      })

      const json = await res.json()
      if (json.success) {
        setStatus('success')
        formRef.current.reset()
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.error('Fehler:', err)
      setStatus('error')
    }
  }

  return (
    <>
      {/* PAGE HEADER */}
      <div className="px-[5%] py-24 text-center"
        style={{ background: 'linear-gradient(135deg, #0B1B4D, #1A56E8)' }}>
        <h1 className="font-playfair font-extrabold text-white mb-3" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>
          Kontaktieren Sie uns
        </h1>
        <p className="text-white/80 text-lg">Wir freuen uns auf Ihre Anfrage – kostenlos und unverbindlich</p>
      </div>

      {/* CONTACT SECTION */}
      <section className="py-20 px-[5%] bg-[#F0F4FF]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.6fr] gap-16 items-start">
          
          {/* LEFT: INFO */}
          <div>
            <h2 className="font-playfair font-extrabold text-gray-900 text-3xl mb-3">So erreichen Sie uns</h2>
            <p className="text-gray-500 leading-relaxed mb-8">Ob per Telefon, WhatsApp oder Formular – wir sind für Sie da und melden uns schnell zurück.</p>
            
            {[
              { icon: '📱', label: 'Telefon & WhatsApp', value: '+49 15563 989382', href: 'tel:+4915563989382' },
              { icon: '✉️', label: 'E-Mail', value: 'info@smartersystem.de', href: 'mailto:info@smartersystem.de' },
              { icon: '🕐', label: 'Erreichbarkeit', value: 'Montag bis Freitag 9–18 Uhr', href: null },
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 flex items-center gap-4 mb-3 border border-[#1A56E8]/10 hover:border-[#1A56E8]/40 hover:shadow-md transition-all">
                <div className="w-12 h-12 flex-shrink-0 rounded-xl grid place-items-center text-xl"
                  style={{ background: 'linear-gradient(135deg, #1A56E8, #38BDF8)' }}>
                  {card.icon}
                </div>
                <div>
                  <span className="block text-[0.7rem] font-bold text-[#1A56E8] uppercase tracking-widest">{card.label}</span>
                  {card.href
                    ? <a href={card.href} className="text-gray-900 font-medium text-sm no-underline hover:text-[#1A56E8]">{card.value}</a>
                    : <p className="text-gray-900 font-medium text-sm m-0">{card.value}</p>
                  }
                </div>
              </div>
            ))}

            <div className="rounded-2xl p-4 flex items-center gap-4 mt-4"
              style={{ background: 'linear-gradient(135deg, #0B1B4D, #1A56E8)' }}>
              <div className="text-3xl">💬</div>
              <div>
                <span className="block text-[#38BDF8] text-[0.7rem] font-bold uppercase tracking-widest">Schnellste Option</span>
                <p className="text-white font-medium text-sm m-0">WhatsApp-Nachricht – oft in Minuten beantwortet</p>
              </div>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="bg-white rounded-3xl p-8 shadow-xl" style={{ boxShadow: '0 20px 60px rgba(26,86,232,0.1)' }}>
            <h3 className="font-playfair font-bold text-gray-900 text-2xl mb-7">Anfrage senden</h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="relative">
              {/* Company */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-800 mb-1.5">Unternehmen (optional)</label>
                <input name="company" type="text" placeholder="Ihr Unternehmen" maxLength={100}
                  className="w-full px-4 py-3 rounded-xl border-[1.5px] border-gray-200 bg-[#F0F4FF] text-gray-900 text-sm outline-none focus:border-[#1A56E8] focus:bg-white focus:ring-4 focus:ring-[#1A56E8]/8 transition-all" />
              </div>

              {/* Name row */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-800 mb-1.5">Vorname *</label>
                  <input name="fname" type="text" placeholder="Max" required maxLength={60}
                    className="w-full px-4 py-3 rounded-xl border-[1.5px] border-gray-200 bg-[#F0F4FF] text-gray-900 text-sm outline-none focus:border-[#1A56E8] focus:bg-white focus:ring-4 focus:ring-[#1A56E8]/8 transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-800 mb-1.5">Nachname *</label>
                  <input name="lname" type="text" placeholder="Mustermann" required maxLength={60}
                    className="w-full px-4 py-3 rounded-xl border-[1.5px] border-gray-200 bg-[#F0F4FF] text-gray-900 text-sm outline-none focus:border-[#1A56E8] focus:bg-white focus:ring-4 focus:ring-[#1A56E8]/8 transition-all" />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-800 mb-1.5">E-Mail-Adresse *</label>
                  <input name="email" type="email" placeholder="max@beispiel.de" required maxLength={120}
                    className="w-full px-4 py-3 rounded-xl border-[1.5px] border-gray-200 bg-[#F0F4FF] text-gray-900 text-sm outline-none focus:border-[#1A56E8] focus:bg-white focus:ring-4 focus:ring-[#1A56E8]/8 transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-800 mb-1.5">Telefon</label>
                  <input name="phone" type="tel" placeholder="+49 ..." maxLength={30}
                    className="w-full px-4 py-3 rounded-xl border-[1.5px] border-gray-200 bg-[#F0F4FF] text-gray-900 text-sm outline-none focus:border-[#1A56E8] focus:bg-white focus:ring-4 focus:ring-[#1A56E8]/8 transition-all" />
                </div>
              </div>

              {/* ZIP */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-800 mb-1.5">Postleitzahl der Immobilie</label>
                <input name="zip" type="text" placeholder="10115" maxLength={10} inputMode="numeric" pattern="[0-9]{5}"
                  className="w-full px-4 py-3 rounded-xl border-[1.5px] border-gray-200 bg-[#F0F4FF] text-gray-900 text-sm outline-none focus:border-[#1A56E8] focus:bg-white focus:ring-4 focus:ring-[#1A56E8]/8 transition-all" />
              </div>

              {/* Message */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-800 mb-1.5">Ihre Nachricht</label>
                <textarea name="message" rows={4} maxLength={3000} placeholder="Beschreiben Sie kurz, was Sie sich vorstellen …"
                  className="w-full px-4 py-3 rounded-xl border-[1.5px] border-gray-200 bg-[#F0F4FF] text-gray-900 text-sm outline-none focus:border-[#1A56E8] focus:bg-white focus:ring-4 focus:ring-[#1A56E8]/8 transition-all resize-y min-h-[100px]" />
              </div>

              {/* Spam-Falle – für Menschen unsichtbar, kein Pflichtfeld */}
              <div
                aria-hidden="true"
                style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap', border: 0, padding: 0, margin: '-1px' }}
              >
                <label htmlFor="website">Website</label>
                <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              {/* Datenschutzhinweis – Information, keine Einwilligung */}
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                Ihre Angaben verwenden wir ausschließlich, um Ihre Anfrage zu bearbeiten. Wie lange wir sie
                speichern und welche Rechte Sie haben, steht in unserer{" "}
                <Link to="/datenschutz" className="text-[#1A56E8] underline">Datenschutzerklärung</Link>.
              </p>

              <button type="submit" disabled={status === 'loading'}
                className="w-full py-4 bg-[#1A56E8] text-white rounded-xl font-playfair font-bold text-base cursor-pointer transition-all hover:bg-[#0F3BAA] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                style={{ boxShadow: '0 8px 24px rgba(26,86,232,0.3)' }}>
                {status === 'loading' ? 'Wird gesendet…' : 'Anfrage senden →'}
              </button>

              {status === 'success' && (
                <div className="mt-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl p-4 text-sm font-medium">
                  ✅ Vielen Dank! Ihre Anfrage wurde übermittelt. Wir melden uns schnellstmöglich bei Ihnen.
                </div>
              )}
              {status === 'error' && (
                <div className="mt-4 bg-red-50 border border-red-200 text-red-800 rounded-xl p-4 text-sm font-medium">
                  ❌ Es gab einen Fehler beim Senden. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an <a href="mailto:info@smartersystem.de" className="underline">info@smartersystem.de</a>.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
