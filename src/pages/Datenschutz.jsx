import { Link } from 'react-router-dom'

const sections = [
  { title: 'Verantwortlicher', content: (
    <p className="text-gray-500 text-sm leading-relaxed">
      <strong>Aleksandar Vukanovic</strong> – Smarter System (Einzelunternehmen)<br />
      Eisackstraße 37<br />10827 Berlin<br />Deutschland<br /><br />
      <strong>Telefon:</strong> +49 15563 989382<br />
      <strong>E-Mail:</strong> <a href="mailto:info@smartersystem.de" className="text-[#1A56E8] underline">info@smartersystem.de</a><br /><br />
      Einen Datenschutzbeauftragten müssen wir nicht benennen, da die gesetzlichen Schwellenwerte nicht erreicht werden.
    </p>
  )},
  { title: 'Keine Cookies, kein Tracking', content: (
    <>
      <p className="text-gray-500 text-sm leading-relaxed mb-3">Diese Website setzt <strong>keine Cookies</strong> und verwendet <strong>keine Analyse-, Statistik- oder Marketing-Werkzeuge</strong>. Es findet keine Reichweitenmessung statt, es werden keine Profile gebildet, und wir speichern nichts im Speicher Ihres Browsers (kein Local Storage, kein Session Storage).</p>
      <p className="text-gray-500 text-sm leading-relaxed">Aus diesem Grund benötigen wir kein Einwilligungsbanner. Sie können diese Website nutzen, ohne dass eine Einwilligung erforderlich ist.</p>
    </>
  )},
  { title: 'Hosting der Website', content: (
    <>
      <p className="text-gray-500 text-sm leading-relaxed mb-3">Die Website wird als statische Seite über <strong>GitHub Pages</strong> ausgeliefert, einen Dienst der GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA (Konzern Microsoft).</p>
      <p className="text-gray-500 text-sm leading-relaxed mb-3">Beim Aufruf einer Seite überträgt Ihr Browser technisch notwendige Daten an die Server des Anbieters, insbesondere Ihre IP-Adresse, die abgerufene Adresse, Datum und Uhrzeit sowie Browser- und Betriebssystemkennung. Diese Daten sind erforderlich, um die Seite überhaupt an Sie ausliefern zu können, und werden vom Anbieter zur Auslieferung, zur Sicherheit und zur Abwehr von Missbrauch verarbeitet.</p>
      <p className="text-gray-500 text-sm leading-relaxed mb-3"><strong>Zweck:</strong> technische Bereitstellung und Sicherheit der Website<br /><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb eines Webangebots)</p>
      <p className="text-gray-500 text-sm leading-relaxed mb-3"><strong>Speicherdauer:</strong> Wir selbst erstellen und speichern keine Zugriffsprotokolle dieser Website und haben auf die Protokolle des Anbieters keinen Zugriff. Die Dauer der Speicherung richtet sich nach den Vorgaben des Anbieters.</p>
      <p className="text-gray-500 text-sm leading-relaxed"><strong>Datenübermittlung in die USA:</strong> Der Anbieter ist ein US-Unternehmen, sodass eine Verarbeitung in einem Drittland stattfinden kann. Die Übermittlung erfolgt auf Grundlage der Standarddatenschutzklauseln der EU-Kommission nach Art. 46 Abs. 2 lit. c DSGVO beziehungsweise, soweit der Anbieter zertifiziert ist, auf Grundlage des EU-US Data Privacy Framework nach Art. 45 DSGVO. Ein Zugriff von US-Behörden auf diese Daten lässt sich nicht vollständig ausschließen.</p>
    </>
  )},
  { title: 'Keine eingebundenen Dienste Dritter', content: (
    <p className="text-gray-500 text-sm leading-relaxed">Beim Aufruf dieser Seiten wird keine Verbindung zu Servern Dritter aufgebaut. Wir binden keine fremden Schriftarten, Karten, Videos, Schaltflächen sozialer Netzwerke oder Werbenetzwerke ein. Die verwendete Schriftart liefern wir von unserem eigenen Server aus, sodass dabei keine Daten an Dritte übertragen werden.</p>
  )},
  { title: 'Kontaktformular', content: (
    <>
      <p className="text-gray-500 text-sm leading-relaxed mb-3">Wenn Sie das Kontaktformular nutzen, verarbeiten wir die von Ihnen eingegebenen Angaben: Vorname, Nachname und E-Mail-Adresse sowie, soweit Sie sie angeben, Unternehmen, Telefonnummer, Postleitzahl des Objekts, Ihre Nachricht und die Angabe, wie Sie auf uns aufmerksam geworden sind. Pflichtangaben sind Vorname, Nachname und E-Mail-Adresse, weil wir Ihnen ohne diese nicht antworten können. Alle weiteren Felder sind freiwillig; ohne sie können wir Ihre Anfrage nur allgemeiner beantworten. Nachteile entstehen Ihnen dadurch nicht. Die Angabe zur Herkunft werten wir ausschließlich intern aus, um zu erkennen, welcher Weg zu uns führt; sie wird nicht an Dritte weitergegeben und nicht mit Ihrer Person verknüpft ausgewertet.</p>
      <p className="text-gray-500 text-sm leading-relaxed mb-3">Die Übertragung erfolgt verschlüsselt an einen Server unter der Adresse web.smartersystem.de; von dort wird uns Ihre Anfrage als E-Mail zugestellt. An die von Ihnen angegebene Adresse senden wir automatisch eine Eingangsbestätigung mit einer Zusammenfassung Ihrer Angaben, damit Sie wissen, dass Ihre Anfrage angekommen ist. Werbung versenden wir nicht. Formularserver und E-Mail-Postfach werden von unserem Dienstleister ALL-INKL.COM – Neue Medien Münnich, Hauptstraße 68, 02742 Friedersdorf, betrieben, mit dem ein Vertrag über die Auftragsverarbeitung nach Art. 28 DSGVO besteht. Bei der Übermittlung protokolliert dieser Server zusätzlich Ihre IP-Adresse sowie Datum und Uhrzeit. Auf diese Protokolle haben wir keinen Zugriff; die Dauer ihrer Speicherung richtet sich nach den Vorgaben unseres Dienstleisters.</p>
      <p className="text-gray-500 text-sm leading-relaxed mb-3"><strong>Schutz vor Massenanfragen:</strong> Damit das Formular nicht für den Versand von Werbe- oder Schadmails missbraucht werden kann, begrenzen wir die Zahl der Absendungen je Anschluss. Dafür speichern wir für höchstens sieben Tage einen Prüfwert Ihrer IP-Adresse zusammen mit dem Zeitpunkt der Absendung. Der Prüfwert wird mit einem geheimen Zufallswert gebildet; Ihre IP-Adresse selbst speichern wir nicht und können sie aus dem Prüfwert nicht wiederherstellen.</p>
      <p className="text-gray-500 text-sm leading-relaxed mb-3"><strong>Zweck:</strong> Bearbeitung und Beantwortung Ihrer Anfrage sowie Erstellung eines Angebots<br /><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage der Vorbereitung oder Durchführung eines Vertrags dient, im Übrigen Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen). Eine Einwilligung ist hierfür nicht erforderlich und wird von uns nicht verlangt.</p>
      <p className="text-gray-500 text-sm leading-relaxed"><strong>Speicherdauer:</strong> Wir löschen Ihre Anfrage spätestens <strong>sechs Monate</strong> nach abgeschlossener Bearbeitung, sofern Sie nicht vorher Löschung verlangen und keine Aufbewahrungspflicht besteht. Kommt es zu einem Auftrag, bewahren wir die zugehörigen Unterlagen nach den handels- und steuerrechtlichen Fristen auf: sechs Jahre nach § 257 Handelsgesetzbuch sowie zehn Jahre für Rechnungen und Buchungsbelege nach § 147 Abgabenordnung und § 14b Umsatzsteuergesetz.</p>
    </>
  )},
  { title: 'Kontakt per E-Mail, Telefon und WhatsApp', content: (
    <>
      <p className="text-gray-500 text-sm leading-relaxed mb-3">Wenn Sie uns per E-Mail oder Telefon erreichen, verarbeiten wir Ihre Angaben zur Bearbeitung Ihres Anliegens. Rechtsgrundlage und Speicherdauer entsprechen den Angaben zum Kontaktformular.</p>
      <p className="text-gray-500 text-sm leading-relaxed">Auf unserer Website finden Sie einen Link zu WhatsApp. Beim bloßen Aufruf unserer Seiten werden dabei keine Daten an WhatsApp übertragen; eine Verbindung entsteht erst, wenn Sie den Link anklicken. Schreiben Sie uns über WhatsApp, verarbeitet die WhatsApp Ireland Limited, Merrion Road, Dublin 4, Irland, Ihre Telefonnummer, Ihre Nachrichten und Verbindungsdaten nach ihren eigenen Bestimmungen; darauf haben wir keinen Einfluss. Rechtsgrundlage unserer eigenen Verarbeitung ist Art. 6 Abs. 1 lit. b beziehungsweise lit. f DSGVO. Sie erreichen uns gleichwertig per E-Mail, Telefon oder Formular, wenn Sie WhatsApp nicht nutzen möchten.</p>
    </>
  )},
  { title: 'Empfänger Ihrer Daten', content: (
    <>
      <p className="text-gray-500 text-sm leading-relaxed mb-3">Wir verkaufen keine Daten und geben sie nicht zu Werbezwecken an Dritte weiter. Eine Übermittlung erfolgt nur, soweit sie für die genannten Zwecke erforderlich ist, an folgende Empfänger und Empfängerkategorien:</p>
      <ul className="text-gray-500 text-sm leading-relaxed ml-5 mb-3 list-disc space-y-1">
        <li><strong>Hosting- und E-Mail-Dienstleister</strong> für die Auslieferung der Website, den Betrieb des Formularservers und des E-Mail-Postfachs, wie oben benannt</li>
        <li><strong>Handwerksbetriebe und Fachpartner</strong>, wenn Ihr Auftrag Leistungen umfasst, die wir nicht selbst erbringen, etwa Arbeiten an der festen Elektroinstallation oder an der Heizungsanlage. Weitergegeben werden dann nur Ihr Name, die Anschrift des Objekts und die für die Ausführung notwendigen technischen Angaben, und nur mit Ihrem Wissen.</li>
        <li><strong>Buchhaltung und Steuerberatung</strong> einschließlich der eingesetzten Rechnungssoftware, für Rechnungsdaten im Rahmen der steuerlichen Pflichten</li>
        <li><strong>Kreditinstitute</strong> zur Abwicklung von Zahlungen</li>
        <li><strong>Behörden und Gerichte</strong>, soweit wir gesetzlich zur Auskunft verpflichtet sind</li>
      </ul>
      <p className="text-gray-500 text-sm leading-relaxed">Mit Dienstleistern, die Daten in unserem Auftrag verarbeiten, bestehen Verträge über die Auftragsverarbeitung nach Art. 28 DSGVO.</p>
    </>
  )},
  { title: 'Keine automatisierte Entscheidungsfindung', content: (
    <p className="text-gray-500 text-sm leading-relaxed">Eine automatisierte Entscheidungsfindung einschließlich Profilbildung nach Art. 22 DSGVO findet nicht statt. Angebote erstellen wir von Hand.</p>
  )},
  { title: 'Datensicherheit', content: (
    <p className="text-gray-500 text-sm leading-relaxed">Website und Kontaktformular sind durchgehend über HTTPS mit TLS verschlüsselt; Sie erkennen das am Schlosssymbol in der Adresszeile Ihres Browsers. Die Zugänge zu unseren Systemen sind mit starken Passwörtern und, wo verfügbar, mit Zwei-Faktor-Authentisierung geschützt. Diese Maßnahmen entsprechen dem Stand der Technik; eine absolute Sicherheit der Datenübertragung im Internet kann niemand gewährleisten.</p>
  )},
]

const rights = [
  ['Auskunft', 'Art. 15 DSGVO, welche Daten wir über Sie verarbeiten'],
  ['Berichtigung', 'Art. 16 DSGVO, Korrektur unrichtiger Angaben'],
  ['Löschung', 'Art. 17 DSGVO, Entfernung Ihrer Daten, soweit keine Aufbewahrungspflicht entgegensteht'],
  ['Einschränkung der Verarbeitung', 'Art. 18 DSGVO'],
  ['Datenübertragbarkeit', 'Art. 20 DSGVO, Herausgabe in einem gängigen Format'],
  ['Widerspruch', 'Art. 21 DSGVO, gegen Verarbeitungen, die auf einem berechtigten Interesse beruhen'],
  ['Widerruf einer Einwilligung', 'Art. 7 Abs. 3 DSGVO, jederzeit und ohne Angabe von Gründen, mit Wirkung für die Zukunft'],
]

export default function Datenschutz() {
  return (
    <>
      <div className="px-[5%] py-24 text-center" style={{ background: 'linear-gradient(135deg, #0B1B4D, #1A56E8)' }}>
        <h1 className="font-playfair font-extrabold text-white mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Datenschutzerklärung</h1>
        <p className="text-white/75 text-base">Stand: September 2026 | Smarter System</p>
      </div>

      <div className="max-w-3xl mx-auto px-[5%] py-20">
        <p className="text-gray-500 text-sm leading-relaxed mb-2">Mit dieser Erklärung informieren wir Sie nach Art. 13 und 14 der Datenschutz-Grundverordnung (DSGVO) darüber, welche personenbezogenen Daten wir verarbeiten, zu welchem Zweck, auf welcher Rechtsgrundlage, wie lange wir sie speichern und welche Rechte Sie haben.</p>
        <p className="text-gray-500 text-sm leading-relaxed">Kurz gefasst: Sie können diese Website ansehen, ohne dass wir etwas über Sie erfahren. Daten entstehen erst, wenn Sie uns schreiben oder anrufen.</p>

        {sections.map((s, i) => (
          <div key={i}>
            <h2 className="font-playfair font-bold text-gray-900 text-xl mt-10 mb-3 pb-2 border-b-2 border-[#F0F4FF]">{s.title}</h2>
            {s.content}
          </div>
        ))}

        <h2 className="font-playfair font-bold text-gray-900 text-xl mt-10 mb-3 pb-2 border-b-2 border-[#F0F4FF]">Ihre Rechte</h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-3">Sie haben jederzeit das Recht auf:</p>
        <ul className="text-gray-500 text-sm leading-relaxed ml-5 mb-3 list-disc space-y-1">
          {rights.map(([r, d], i) => <li key={i}><strong>{r}</strong> – {d}</li>)}
        </ul>
        <p className="text-gray-500 text-sm leading-relaxed">Eine kurze E-Mail an <a href="mailto:info@smartersystem.de" className="text-[#1A56E8] underline">info@smartersystem.de</a> genügt. Die Auskunft ist kostenfrei, und wir antworten innerhalb eines Monats.</p>

        <h2 className="font-playfair font-bold text-gray-900 text-xl mt-10 mb-3 pb-2 border-b-2 border-[#F0F4FF]">Beschwerderecht bei der Aufsichtsbehörde</h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-3">Sie können sich nach Art. 77 DSGVO jederzeit bei einer Datenschutz-Aufsichtsbehörde beschweren, insbesondere bei der Behörde Ihres gewöhnlichen Aufenthaltsorts oder bei der für uns zuständigen Stelle:</p>
        <p className="text-gray-500 text-sm leading-relaxed">Berliner Beauftragte für Datenschutz und Informationsfreiheit<br />Alt-Moabit 59–61, 10555 Berlin<br /><a href="https://www.datenschutz-berlin.de" target="_blank" rel="noreferrer" className="text-[#1A56E8] underline">www.datenschutz-berlin.de</a></p>

        <h2 className="font-playfair font-bold text-gray-900 text-xl mt-10 mb-3 pb-2 border-b-2 border-[#F0F4FF]">Änderungen dieser Erklärung</h2>
        <p className="text-gray-500 text-sm leading-relaxed">Wir passen diese Erklärung an, wenn wir unsere Website oder unsere Abläufe ändern. Es gilt jeweils die hier veröffentlichte Fassung. Unsere Kontaktdaten finden Sie auch im <Link to="/impressum" className="text-[#1A56E8] underline">Impressum</Link>.</p>
      </div>
    </>
  )
}
