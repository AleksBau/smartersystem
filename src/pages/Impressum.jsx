export default function Impressum() {
  return (
    <>
      <div className="px-[5%] py-24 text-center" style={{ background: 'linear-gradient(135deg, #0B1B4D, #1A56E8)' }}>
        <h1 className="font-playfair font-extrabold text-white mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Impressum</h1>
        <p className="text-white/75 text-base">Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)</p>
      </div>
      <div className="max-w-3xl mx-auto px-[5%] py-20">
        <div className="bg-[#F0F4FF] border border-[#1A56E8]/15 rounded-2xl p-6 mb-8">
          <p className="text-gray-900 leading-relaxed">
            <strong>Aleksandar Vukanovic</strong><br />
            Smarter System<br />
            Eisackstraße 37<br />
            10827 Berlin<br />
            Deutschland
          </p>
        </div>

        {[
          { title: 'Unternehmensform', content: 'Einzelunternehmen, Inhaber Aleksandar Vukanovic' },
          { title: 'Kontakt', content: (
            <><strong>Telefon:</strong> +49 15563 989382<br /><strong>E-Mail:</strong> <a href="mailto:info@smartersystem.de" className="text-[#1A56E8] underline">info@smartersystem.de</a></>
          )},
          { title: 'Umsatzsteuer-Identifikationsnummer', content: 'Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE461326297' },
          { title: 'Verantwortlich für den Inhalt', content: 'Aleksandar Vukanovic, Eisackstraße 37, 10827 Berlin' },
        ].map((s, i) => (
          <div key={i}>
            <h2 className="font-playfair font-bold text-gray-900 text-xl mt-10 mb-3 pb-2 border-b-2 border-[#F0F4FF]">{s.title}</h2>
            <p className="text-gray-500 leading-relaxed text-sm">{s.content}</p>
          </div>
        ))}

        <h2 className="font-playfair font-bold text-gray-900 text-xl mt-10 mb-3 pb-2 border-b-2 border-[#F0F4FF]">Verbraucherstreitbeilegung</h2>
        <p className="text-gray-500 leading-relaxed text-sm">Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. Anliegen klären wir gern direkt – schreiben Sie uns an <a href="mailto:info@smartersystem.de" className="text-[#1A56E8] underline">info@smartersystem.de</a>.</p>

        <h2 className="font-playfair font-bold text-gray-900 text-xl mt-10 mb-3 pb-2 border-b-2 border-[#F0F4FF]">Haftung für Inhalte</h2>
        <p className="text-gray-500 leading-relaxed text-sm mb-3">Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
        <p className="text-gray-500 leading-relaxed text-sm">Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>

        <h2 className="font-playfair font-bold text-gray-900 text-xl mt-10 mb-3 pb-2 border-b-2 border-[#F0F4FF]">Haftung für Links</h2>
        <p className="text-gray-500 leading-relaxed text-sm mb-3">Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.</p>
        <p className="text-gray-500 leading-relaxed text-sm">Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>

        <h2 className="font-playfair font-bold text-gray-900 text-xl mt-10 mb-3 pb-2 border-b-2 border-[#F0F4FF]">Urheberrecht</h2>
        <p className="text-gray-500 leading-relaxed text-sm mb-3">Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
        <p className="text-gray-500 leading-relaxed text-sm">Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis.</p>
        <p className="text-xs text-gray-400 mt-6">Textbausteine der Haftungs- und Urheberrechtshinweise: <a href="https://www.e-recht24.de" target="_blank" rel="noreferrer" className="underline">e-recht24.de</a></p>
      </div>
    </>
  )
}
