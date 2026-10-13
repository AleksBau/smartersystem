/**
 * Inhalte der Leistungsseiten.
 *
 * Jede Seite zielt auf eine konkrete Suchanfrage. Wer "Heizung smart
 * nachruesten Berlin" sucht, soll auf einer Seite landen, die genau das
 * im Titel traegt - nicht auf der Startseite.
 *
 * WICHTIG, rechtlich: Hier wird ausschliesslich beschrieben, was ohne
 * Eintragung in die Handwerksrolle erbracht werden darf - batteriebetriebene
 * und steckerfertige Komponenten. Kein Austausch von Wandschaltern, keine
 * Arbeiten an der festen Installation, keine Zutrittstechnik.
 */

export const leistungen = [
  {
    slug: 'heizungssteuerung',
    icon: '🌡️',
    kurz: 'Heizung',
    h1: 'Heizung smart nachrüsten in Berlin',
    titel: 'Heizung smart nachrüsten Berlin | Smarter System',
    beschreibung:
      'Smarte Heizungssteuerung für Ihre Wohnung in Berlin: Funkthermostate auf vorhandene Ventile, ohne Umbau an der Heizung. Festpreis inklusive Montage und Einweisung.',
    claim: 'Jeder Raum wird warm, wenn Sie ihn brauchen – und sonst nicht.',
    einleitung:
      'Die meisten Heizkörper laufen nach Gefühl. Morgens zu kalt, tagsüber unnötig warm, nachts vergessen zurückzudrehen. Eine smarte Steuerung übernimmt das – und zwar raumweise, nicht pauschal für die ganze Wohnung.',
    nutzen: [
      {
        titel: 'Heizkosten sinken spürbar',
        text: 'Wer die Temperatur in einem Raum um ein Grad senkt, spart dort rund sechs Prozent Heizenergie. Eine Zeitsteuerung, die nachts und bei Abwesenheit automatisch absenkt, holt genau das heraus – ohne dass Sie frieren.',
      },
      {
        titel: 'Nach Ihrem Tagesablauf, nicht nach Schema F',
        text: 'Bad warm ab halb sieben, Wohnzimmer ab Feierabend, Schlafzimmer kühl. Wir richten die Zeitprofile gemeinsam mit Ihnen ein, so wie Sie tatsächlich leben.',
      },
      {
        titel: 'Fenster auf, Heizung aus',
        text: 'Ein Fensterkontakt meldet das geöffnete Fenster, der Thermostat regelt sofort herunter und nach dem Schließen wieder hoch. Das passiert von allein, auch wenn niemand daran denkt.',
      },
      {
        titel: 'Kein Eingriff in die Heizungsanlage',
        text: 'Wir tauschen nur den Thermostatkopf auf dem vorhandenen Ventil. Kein Wasser ablassen, kein Handwerker an der Anlage, keine Spuren. In einer Mietwohnung ist das ohne Weiteres rückbaubar.',
      },
    ],
    komponenten: [
      'Funk-Thermostatkopf je Heizkörper, batteriebetrieben, auf das vorhandene Ventil geschraubt',
      'Wandthermostat für Räume, in denen die Temperatur dort gemessen werden soll, wo Sie sitzen',
      'Fenster- und Türkontakte in Klebemontage, ohne Bohren',
      'Zentrale für die Steuerung per App, auch von unterwegs',
    ],
    faq: [
      {
        frage: 'Funktioniert das auch in einer Mietwohnung?',
        antwort:
          'Ja. Der alte Thermostatkopf wird abgeschraubt und der neue aufgesetzt. Das ist keine bauliche Veränderung und beim Auszug in zehn Minuten rückgängig gemacht. Den alten Kopf bekommen Sie beschriftet zurück.',
      },
      {
        frage: 'Passen die Thermostate auf meine Heizkörper?',
        antwort:
          'In aller Regel ja. Die gängigen Ventilanschlüsse sind genormt, für die übrigen gibt es Adapter. Beim kostenlosen Termin vor Ort sehen wir uns Ihre Ventile an, bevor Sie etwas bestellen.',
      },
      {
        frage: 'Was passiert bei einem Stromausfall?',
        antwort:
          'Die Thermostate laufen mit Batterien und regeln weiter. Nur die Steuerung per App ruht, bis Strom und Internet zurück sind. Die Batterien halten etwa zwei Jahre, das Gerät meldet sich rechtzeitig.',
      },
      {
        frage: 'Brauche ich dafür einen Heizungsbauer?',
        antwort:
          'Nein. An der Heizungsanlage selbst wird nicht gearbeitet. Sollte bei Ihnen ein hydraulischer Abgleich oder ein Ventiltausch sinnvoll sein, sagen wir Ihnen das offen und vermitteln einen Fachbetrieb.',
      },
    ],
  },

  {
    slug: 'alarmanlage',
    icon: '🔔',
    kurz: 'Sicherheit',
    h1: 'Funk-Alarmanlage nachrüsten in Berlin',
    titel: 'Alarmanlage nachrüsten Berlin | Smarter System',
    beschreibung:
      'Funk-Alarmanlage für Wohnung und Haus in Berlin, ohne Kabel und ohne Stemmen. Fenster- und Türüberwachung, Sirene, Nachricht aufs Handy. Festpreis inklusive Montage.',
    claim: 'Sie erfahren sofort, wenn etwas nicht stimmt – egal, wo Sie gerade sind.',
    einleitung:
      'Die meisten Einbrüche in Berlin passieren über Fenster und Terrassentüren im Erdgeschoss, und die meisten werden abgebrochen, sobald es laut wird und auffällt. Genau dort setzt eine Funk-Alarmanlage an.',
    nutzen: [
      {
        titel: 'Laut und sichtbar statt heimlich',
        text: 'Im Alarmfall geht die Sirene an und das Licht im Haus schaltet ein. Einbrecher suchen keine Auseinandersetzung, sie suchen eine ruhige Gelegenheit. Beides nehmen Sie ihnen.',
      },
      {
        titel: 'Nachricht aufs Handy, in Sekunden',
        text: 'Sie bekommen die Meldung sofort, ob Sie im Büro sind oder im Urlaub. Sie sehen, welches Fenster ausgelöst hat, und können entscheiden, wen Sie anrufen.',
      },
      {
        titel: 'Ohne Kabel, ohne Dreck',
        text: 'Alle Komponenten funken und laufen mit Batterie oder Stecker. Es wird nichts gestemmt, nichts verlegt, nichts verputzt. Die Montage einer Wohnung dauert in der Regel einen Arbeitstag.',
      },
      {
        titel: 'Auch wenn niemand da ist',
        text: 'Eine Anwesenheitssimulation schaltet abends Licht in wechselnden Räumen. Von außen sieht die Wohnung bewohnt aus, auch wenn Sie zwei Wochen weg sind.',
      },
    ],
    komponenten: [
      'Fenster- und Türkontakte an allen gefährdeten Öffnungen, in Klebemontage',
      'Innensirene mit Steckernetzteil, zusätzlich optische Signalgebung',
      'Bewegungsmelder für Flure und Durchgangsräume',
      'Fernbedienung oder Taster zum Scharf- und Unscharfschalten',
      'Zentrale mit Benachrichtigung auf Ihr Smartphone',
    ],
    faq: [
      {
        frage: 'Muss ich dafür Löcher bohren?',
        antwort:
          'In der Regel nicht. Die Kontakte werden geklebt, die Sirene kommt an eine Steckdose. Wo ein Gerät zwingend verschraubt werden sollte, besprechen wir das vorher mit Ihnen.',
      },
      {
        frage: 'Geht die Anlage bei jeder Katze los?',
        antwort:
          'Die Bewegungsmelder lassen sich in der Empfindlichkeit einstellen, und Sie können einzelne Räume aus der Überwachung herausnehmen. In den ersten Wochen passen wir die Einstellungen nach, bis es passt.',
      },
      {
        frage: 'Wird ein Wachdienst alarmiert?',
        antwort:
          'Nein, die Meldung geht an Sie und an die Personen, die Sie hinterlegen. Eine Aufschaltung auf eine Leitstelle ist etwas anderes und kostet laufend Geld – wenn Sie das möchten, sagen wir Ihnen ehrlich, wann es sich lohnt.',
      },
      {
        frage: 'Was, wenn jemand den Strom abstellt?',
        antwort:
          'Die Melder laufen mit Batterie und funken weiter. Die Zentrale meldet den Stromausfall als Ereignis, solange die Internetverbindung steht.',
      },
    ],
  },

  {
    slug: 'lichtsteuerung',
    icon: '💡',
    kurz: 'Licht',
    h1: 'Lichtsteuerung nachrüsten in Berlin',
    titel: 'Smarte Lichtsteuerung Berlin nachrüsten | Smarter System',
    beschreibung:
      'Licht per App, Taster oder automatisch – nachgerüstet ohne Kabel und ohne Eingriff in die Elektroinstallation. Für Wohnung, Haus und Büro in Berlin, zum Festpreis.',
    claim: 'Ein Schalter an der Wand, wo bisher keiner war – ohne ein einziges Kabel.',
    einleitung:
      'Es gibt in fast jeder Wohnung die eine Stelle, an der ein Lichtschalter fehlt. Am Bett, am Sofa, am Ende des Flurs. Mit Funktastern lässt sich das nachrüsten, ohne eine Wand zu öffnen.',
    nutzen: [
      {
        titel: 'Schalter an jeder Wand, ohne Kabel',
        text: 'Der Funktaster wird geklebt oder geschraubt und kann überall hin – auch auf Glas oder Fliesen. Er sieht aus wie ein normaler Schalter und braucht keine Leitung.',
      },
      {
        titel: 'Licht geht an, wenn Sie den Raum betreten',
        text: 'Ein Bewegungsmelder im Flur oder Keller schaltet beim Betreten ein und nach einer eingestellten Zeit wieder aus. Besonders praktisch mit vollen Händen.',
      },
      {
        titel: 'Alles aus mit einem Druck',
        text: 'Ein Taster an der Wohnungstür schaltet beim Verlassen alle eingebundenen Lampen und Geräte ab. Kein Rundgang mehr durch die Wohnung.',
      },
      {
        titel: 'Ohne Eingriff in die Elektrik',
        text: 'Wir arbeiten mit Zwischensteckern, schaltbaren Leuchtmitteln und Funktastern. An der festen Installation wird nichts verändert – auch in einer Mietwohnung unproblematisch.',
      },
    ],
    komponenten: [
      'Funktaster, einzeln oder als Doppeltaster, frei an der Wand platzierbar',
      'Zwischenstecker mit Schalt- und Messfunktion für Steh- und Tischleuchten',
      'Bewegungs- und Präsenzmelder für Flur, Keller und Treppenhaus',
      'Fernbedienung für Lichtstimmungen',
    ],
    faq: [
      {
        frage: 'Funktioniert das mit meinen vorhandenen Lampen?',
        antwort:
          'Steh-, Tisch- und Stehleuchten mit Stecker schalten wir über Zwischenstecker. Bei fest angeschlossenen Deckenleuchten arbeiten wir über schaltbare Leuchtmittel. Was in Ihrem Fall sinnvoll ist, sehen wir beim Termin vor Ort.',
      },
      {
        frage: 'Tauschen Sie auch Lichtschalter in der Wand?',
        antwort:
          'Arbeiten an der festen Elektroinstallation führen wir nicht selbst aus. Wenn das in Ihrem Fall die bessere Lösung ist, sagen wir es Ihnen und arbeiten mit einem eingetragenen Elektrofachbetrieb zusammen.',
      },
      {
        frage: 'Funktioniert der vorhandene Schalter weiter?',
        antwort:
          'Ja. Alles bleibt wie gewohnt bedienbar, die Funklösung kommt zusätzlich dazu. Niemand in Ihrem Haushalt muss umlernen.',
      },
    ],
  },

  {
    slug: 'rauchwarnmelder',
    icon: '🚨',
    kurz: 'Rauchmelder',
    h1: 'Vernetzte Rauchwarnmelder in Berlin',
    titel: 'Rauchwarnmelder montieren Berlin | Smarter System',
    beschreibung:
      'Vernetzte Funk-Rauchwarnmelder für Wohnung und Haus in Berlin. Alle Melder schlagen gemeinsam an, Meldung aufs Handy. Montage nach DIN 14676 mit Protokoll.',
    claim: 'Wenn es in der Küche brennt, hören Sie es auch im Schlafzimmer.',
    einleitung:
      'Rauchwarnmelder sind in Berlin seit 2021 in allen Wohnungen Pflicht. Einzelne Melder haben aber eine Schwäche: Sie hören den Melder im Keller nicht, wenn Sie oben schlafen. Vernetzte Melder lösen gemeinsam aus.',
    nutzen: [
      {
        titel: 'Alle Melder schlagen gleichzeitig an',
        text: 'Erkennt ein Melder Rauch, geben alle anderen Alarm. In einem Haus über zwei Etagen oder einer großen Wohnung kann das den entscheidenden Unterschied machen.',
      },
      {
        titel: 'Meldung aufs Handy, auch von unterwegs',
        text: 'Sie erfahren es auch, wenn Sie nicht zu Hause sind – und können jemanden anrufen, der nachsieht, bevor aus einem vergessenen Topf ein Wohnungsbrand wird.',
      },
      {
        titel: 'Fachgerechte Montage mit Protokoll',
        text: 'Wir montieren nach der Anwendungsnorm DIN 14676 und übergeben ein schriftliches Protokoll mit Montageorten und Gerätenummern. Das ist Ihr Nachweis gegenüber Vermieter und Versicherung.',
      },
      {
        titel: 'Ruhe statt nächtlichem Piepen',
        text: 'Die Geräte melden eine schwache Batterie rechtzeitig in der App, nicht um drei Uhr nachts mit einem Piepton. Die fest verbaute Batterie hält zehn Jahre.',
      },
    ],
    komponenten: [
      'Funkvernetzte Rauchwarnmelder mit fest verbauter Zehn-Jahres-Batterie',
      'Montage in Schlafräumen, Kinderzimmern und Fluren nach DIN 14676',
      'Einbindung in die Zentrale für Meldungen aufs Smartphone',
      'Schriftliches Montageprotokoll für Ihre Unterlagen',
    ],
    faq: [
      {
        frage: 'Sind Rauchwarnmelder in Berlin Pflicht?',
        antwort:
          'Ja. Nach der Berliner Bauordnung müssen Schlafräume, Kinderzimmer und Flure, über die Rettungswege führen, mit Rauchwarnmeldern ausgestattet sein. Die Pflicht gilt seit dem 1. Januar 2021 auch für bestehende Wohnungen.',
      },
      {
        frage: 'Wer ist für die Wartung verantwortlich?',
        antwort:
          'Für den Einbau ist in Berlin der Eigentümer zuständig, für die Betriebsbereitschaft grundsätzlich der Mieter, sofern der Eigentümer sie nicht selbst übernommen hat. Wir übernehmen die jährliche Prüfung auf Wunsch im Rahmen eines Wartungsvertrags.',
      },
      {
        frage: 'Ersetzen Sie auch vorhandene alte Melder?',
        antwort:
          'Ja. Rauchwarnmelder müssen nach zehn Jahren ausgetauscht werden. Wir nehmen die alten Geräte mit und entsorgen sie fachgerecht.',
      },
    ],
  },

  {
    slug: 'videoueberwachung',
    icon: '📹',
    kurz: 'Kameras',
    h1: 'Überwachungskamera installieren in Berlin',
    titel: 'Überwachungskamera installieren Berlin | Smarter System',
    beschreibung:
      'Innen- und Außenkameras mit Live-Bild aufs Smartphone, in Berlin fachgerecht eingerichtet. Mit Akku oder Steckernetzteil, ohne Kabelverlegung. Datenschutz inklusive.',
    claim: 'Nachsehen, wer geklingelt hat – von überall.',
    einleitung:
      'Eine Kamera hilft in zwei Momenten: wenn Sie wissen wollen, wer vor der Tür steht, und wenn hinterher niemand erklären kann, wie der Kratzer ans Auto gekommen ist. Beides lässt sich ohne Kabelverlegung lösen.',
    nutzen: [
      {
        titel: 'Live-Bild aufs Handy',
        text: 'Sie öffnen die App und sehen sofort, was gerade passiert – an der Haustür, im Hof oder im Lager. Auch nachts, dank Infrarot.',
      },
      {
        titel: 'Meldung nur, wenn es wichtig ist',
        text: 'Die Kamera meldet Bewegung in einem Bereich, den Sie festlegen. Die Straße davor können Sie ausblenden, damit nicht jedes vorbeifahrende Auto eine Benachrichtigung auslöst.',
      },
      {
        titel: 'Außen ohne Elektriker',
        text: 'Wir setzen auf Kameras mit Akku oder Steckernetzteil. Es muss keine Leitung nach draußen gelegt und keine Wand durchbohrt werden.',
      },
      {
        titel: 'Rechtlich sauber ausgerichtet',
        text: 'Wir richten die Kamera so aus, dass sie Ihr Grundstück erfasst und nicht den Gehweg oder das Nachbargrundstück. Wo ein Hinweisschild nötig ist, sagen wir es Ihnen – das erspart Ärger.',
      },
    ],
    komponenten: [
      'Innenkamera mit Steckernetzteil, schwenkbar',
      'Außenkamera mit Akku, wetterfest, ohne feste Leitung',
      'Video-Türsprechstelle als Ergänzung zur vorhandenen Klingel',
      'Einrichtung der Aufzeichnung und der Benachrichtigungen in der App',
    ],
    faq: [
      {
        frage: 'Darf ich überhaupt eine Kamera anbringen?',
        antwort:
          'Auf Ihrem eigenen Grundstück ja, solange sie nicht öffentliche Wege, Nachbargrundstücke oder gemeinschaftlich genutzte Bereiche erfasst. In Mehrfamilienhäusern ist der Hausflur heikel. Wir sagen Ihnen vor der Montage, was in Ihrem Fall geht und was nicht.',
      },
      {
        frage: 'Wo landen die Aufnahmen?',
        antwort:
          'Bei Homematic IP bleiben die Aufnahmen in Ihrem Netzwerk beziehungsweise in Ihrem eigenen Konto. Wir richten die Speicherdauer so ein, wie Sie es möchten.',
      },
      {
        frage: 'Wie lange hält der Akku einer Außenkamera?',
        antwort:
          'Das hängt stark davon ab, wie oft sie auslöst. Bei sinnvoll eingegrenztem Erfassungsbereich sind mehrere Monate üblich. Die App meldet rechtzeitig, wenn geladen werden muss.',
      },
    ],
  },

  {
    slug: 'wartung',
    icon: '🛠️',
    kurz: 'Wartung',
    h1: 'Wartung und Support für Ihr Smart Home',
    titel: 'Smart Home Wartung & Support Berlin | Smarter System',
    beschreibung:
      'Batteriewechsel, Updates, neue Automatisierungen und ein Ansprechpartner, der zurückruft. Wartung für Homematic IP in Berlin – auch für Anlagen, die wir nicht gebaut haben.',
    claim: 'Ein Ansprechpartner, der sich an Ihre Anlage erinnert.',
    einleitung:
      'Ein Smart Home ist kein Möbelstück, es lebt. Batterien gehen leer, Updates kommen, der Tagesablauf ändert sich. Ohne jemanden, der sich kümmert, wird daraus nach zwei Jahren eine Sammlung Geräte, die niemand mehr anfasst.',
    nutzen: [
      {
        titel: 'Jährliche Durchsicht vor Ort',
        text: 'Wir prüfen alle Geräte, tauschen schwache Batterien, spielen Aktualisierungen ein und sehen nach, ob die Automatisierungen noch zu Ihrem Alltag passen.',
      },
      {
        titel: 'Neue Automatisierungen, wenn sich etwas ändert',
        text: 'Kind zieht aus, Homeoffice-Tage verschieben sich, neue Leuchte im Wohnzimmer. Wir passen die Abläufe an, statt dass Sie sich in Menüs einarbeiten.',
      },
      {
        titel: 'Hilfe per Telefon und WhatsApp',
        text: 'Die meisten Fragen klären sich in fünf Minuten am Telefon. Dafür brauchen Sie keine Hotline mit Warteschleife, sondern jemanden, der Ihre Anlage kennt.',
      },
      {
        titel: 'Auch für fremde Anlagen',
        text: 'Haben Sie Homematic IP selbst aufgebaut oder von jemand anderem einbauen lassen, übernehmen wir die Betreuung trotzdem. Wir sehen uns den Bestand an und sagen Ihnen offen, was sinnvoll ist.',
      },
    ],
    komponenten: [
      'Jährlicher Termin vor Ort mit Prüfprotokoll',
      'Batteriewechsel an allen Geräten, Material inklusive',
      'Aktualisierung von Zentrale und Komponenten',
      'Anpassung bestehender und Einrichtung neuer Automatisierungen',
      'Telefon- und WhatsApp-Support zwischen den Terminen',
    ],
    faq: [
      {
        frage: 'Brauche ich überhaupt eine Wartung?',
        antwort:
          'Zwingend nicht. Sinnvoll wird sie, sobald Sie mehr als eine Handvoll Geräte haben oder Rauchwarnmelder im Spiel sind, deren Funktion jährlich geprüft werden sollte.',
      },
      {
        frage: 'Was kostet das?',
        antwort:
          'Das richtet sich nach der Größe Ihrer Anlage. Nach jeder Installation sind 30 Tage Support ohnehin enthalten. Ein Angebot für die laufende Betreuung bekommen Sie danach unverbindlich.',
      },
      {
        frage: 'Wie schnell sind Sie da, wenn etwas ausfällt?',
        antwort:
          'Die meisten Störungen klären wir am selben Tag per Telefon oder Fernzugriff. Ist ein Termin vor Ort nötig, kommen wir in der Regel innerhalb weniger Werktage.',
      },
    ],
  },
]

export function leistungZuSlug(slug) {
  return leistungen.find((l) => l.slug === slug)
}
