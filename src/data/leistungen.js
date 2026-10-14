/**
 * Inhalte der Leistungsseiten.
 *
 * Aufbau nach dem Muster, das sich für lokale Betriebe bewährt hat:
 *   titel  -> was Google in der Trefferliste anzeigt. Hier steht das
 *             Einzugsgebiet drin, weil danach gesucht wird.
 *   h1     -> was der Besucher auf der Seite liest. Hier steht KEIN Ort,
 *             sondern der Nutzen. Ein Ortsname in der Überschrift wirkt
 *             wie eine Suchmaschinenseite, nicht wie ein Fachbetrieb.
 *
 * Herstellernamen werden bewusst nicht genannt.
 */

export const EINZUGSGEBIET = 'Berlin und Brandenburg'

export const leistungen = [
  {
    slug: 'heizungssteuerung',
    icon: '🌡️',
    kurz: 'Heizung',
    h1: 'Heizungssteuerung',
    titel: 'Heizung smart nachrüsten | Berlin & Brandenburg',
    beschreibung:
      'Smarte Heizungssteuerung für Wohnung, Büro und Einrichtung. Funkthermostate auf vorhandene Ventile, ohne Eingriff in die Anlage. Festpreis inklusive Montage.',
    claim: 'Jeder Raum wird warm, wenn er gebraucht wird – und sonst nicht.',
    einleitung:
      'Die meisten Heizkörper laufen nach Gefühl. Morgens zu kalt, tagsüber unnötig warm, am Wochenende heizt ein leeres Büro durch. Eine smarte Steuerung übernimmt das raumweise – und rechnet sich dort am schnellsten, wo viele Räume nach Plan genutzt werden.',
    nutzen: [
      {
        titel: 'Für Büros und Einrichtungen am wirksamsten',
        text: 'Besprechungsräume, Praxen, Vereinsheime, Kitas und Verwaltungsräume stehen die meiste Zeit leer und heizen trotzdem. Jeder Raum bekommt ein Zeitprofil nach Belegung, das Wochenende und die Ferien laufen automatisch im Absenkbetrieb. Das ist die Stellschraube mit dem größten Hebel – und als Betriebsausgabe absetzbar.',
      },
      {
        titel: 'Heizkosten sinken spürbar',
        text: 'Ein Grad weniger Raumtemperatur spart rund sechs Prozent Heizenergie. Eine Steuerung, die nachts, am Wochenende und bei Abwesenheit automatisch absenkt, holt genau das heraus, ohne dass jemand friert.',
      },
      {
        titel: 'Niemand muss mehr daran denken',
        text: 'Kein Hausmeister, der abends durch alle Räume geht. Kein Mitarbeiter, der den Heizkörper im Lager vergisst. Die Steuerung macht es verlässlich, jeden Tag gleich.',
      },
      {
        titel: 'Fenster auf, Heizung aus',
        text: 'Ein Fensterkontakt meldet das geöffnete Fenster, der Thermostat regelt sofort herunter und nach dem Schließen wieder hoch. Gerade in Räumen, die regelmäßig gelüftet werden, summiert sich das.',
      },
      {
        titel: 'Kein Eingriff in die Heizungsanlage',
        text: 'Wir tauschen nur den Thermostatkopf auf dem vorhandenen Ventil. Kein Wasser ablassen, kein Handwerker an der Anlage, keine Spuren. In Miet- und Gewerberäumen ist das jederzeit rückbaubar.',
      },
      {
        titel: 'Auswertung statt Bauchgefühl',
        text: 'Sie sehen je Raum, wie lange geheizt wurde und wie die Temperatur verlaufen ist. Bei mehreren Standorten erkennen Sie auf einen Blick, wo etwas aus dem Ruder läuft.',
      },
    ],
    komponenten: [
      'Funk-Thermostatkopf je Heizkörper, batteriebetrieben, auf das vorhandene Ventil geschraubt',
      'Wandthermostat für Räume, in denen dort gemessen werden soll, wo Menschen sitzen',
      'Fenster- und Türkontakte, in der Regel in Klebemontage',
      'Zentrale für Zeitprofile, Auswertung und Zugriff von unterwegs',
      'Auf Wunsch Bediensperre, damit Einstellungen in öffentlich zugänglichen Räumen nicht verstellt werden',
    ],
    faq: [
      {
        frage: 'Lohnt sich das auch für ein Büro oder eine Einrichtung?',
        antwort:
          'Dort meist schneller als in einer Wohnung. Je mehr Räume nach festem Plan genutzt werden und je länger sie leer stehen, desto größer der Effekt. Beim Termin vor Ort rechnen wir das für Ihre Räume konkret durch, bevor Sie etwas beauftragen.',
      },
      {
        frage: 'Funktioniert das auch in einer Mietwohnung?',
        antwort:
          'Ja. Der alte Thermostatkopf wird abgeschraubt und der neue aufgesetzt. Das ist keine bauliche Veränderung und beim Auszug in zehn Minuten rückgängig gemacht. Den alten Kopf bekommen Sie beschriftet zurück.',
      },
      {
        frage: 'Passen die Thermostate auf unsere Heizkörper?',
        antwort:
          'In aller Regel ja. Die gängigen Ventilanschlüsse sind genormt, für die übrigen gibt es Adapter. Beim kostenlosen Termin vor Ort sehen wir uns die Ventile an, bevor etwas bestellt wird.',
      },
      {
        frage: 'Was passiert bei einem Stromausfall?',
        antwort:
          'Die Thermostate laufen mit Batterien und regeln weiter. Nur die Steuerung per App ruht, bis Strom und Internet zurück sind. Die Batterien halten etwa zwei Jahre, das Gerät meldet sich rechtzeitig.',
      },
      {
        frage: 'Brauchen wir dafür einen Heizungsbauer?',
        antwort:
          'Nein. An der Heizungsanlage selbst wird nicht gearbeitet. Sollte bei Ihnen ein hydraulischer Abgleich oder ein Ventiltausch sinnvoll sein, sagen wir das offen und vermitteln einen Fachbetrieb.',
      },
    ],
  },

  {
    slug: 'alarmanlage',
    icon: '🔔',
    kurz: 'Alarm',
    h1: 'Alarm & Einbruchschutz',
    titel: 'Alarmanlage nachrüsten | Berlin & Brandenburg',
    beschreibung:
      'Funk-Alarmanlage für Wohnung, Haus und Gewerbe. Fenster- und Türüberwachung, Sirene, Nachricht aufs Handy. Nachgerüstet an einem Tag, zum Festpreis.',
    claim: 'Sie erfahren sofort, wenn etwas nicht stimmt – egal, wo Sie gerade sind.',
    einleitung:
      'Die meisten Einbrüche passieren über Fenster und Terrassentüren im Erdgeschoss, und die meisten werden abgebrochen, sobald es laut wird und auffällt. Genau dort setzt eine Funk-Alarmanlage an.',
    nutzen: [
      {
        titel: 'Laut und sichtbar statt heimlich',
        text: 'Im Alarmfall geht die Sirene an und das Licht schaltet ein. Einbrecher suchen keine Auseinandersetzung, sie suchen eine ruhige Gelegenheit. Beides nehmen Sie ihnen.',
      },
      {
        titel: 'Nachricht aufs Handy, in Sekunden',
        text: 'Sie bekommen die Meldung sofort, ob Sie im Büro sind oder im Urlaub. Sie sehen, welches Fenster ausgelöst hat, und können entscheiden, wen Sie anrufen.',
      },
      {
        titel: 'Keine Leitungen durch die Wohnung',
        text: 'Die Komponenten funken untereinander und laufen mit Batterie oder Stecker. Es wird keine Leitung verlegt und keine Wand aufgestemmt. Gebohrt wird dort, wo ein Gerät sicher halten muss: Sirene und Bewegungsmelder werden gedübelt, Fenster- und Türkontakte meist nur geklebt. Welche Stellen das sind, legen wir vor der Montage gemeinsam fest.',
      },
      {
        titel: 'Auch wenn niemand da ist',
        text: 'Eine Anwesenheitssimulation schaltet abends Licht in wechselnden Räumen. Von außen sieht das Objekt bewohnt aus, auch wenn Sie zwei Wochen weg sind.',
      },
    ],
    komponenten: [
      'Fenster- und Türkontakte an allen gefährdeten Öffnungen, meist in Klebemontage',
      'Innensirene mit Steckernetzteil, zusätzlich optische Signalgebung',
      'Bewegungsmelder für Flure und Durchgangsräume',
      'Fernbedienung oder Taster zum Scharf- und Unscharfschalten',
      'Zentrale mit Benachrichtigung auf Ihr Smartphone',
    ],
    faq: [
      {
        frage: 'Muss dafür gebohrt werden?',
        antwort:
          'Für einen Teil der Geräte ja. Fenster- und Türkontakte werden in der Regel geklebt. Bewegungsmelder und Sirene müssen dauerhaft sicher halten und werden deshalb gedübelt – das sind wenige kleine Löcher, die sich beim Rückbau leicht schließen lassen. Wo gebohrt wird, stimmen wir vor der Montage mit Ihnen ab.',
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
    slug: 'licht-und-beschattung',
    icon: '💡',
    kurz: 'Licht & Beschattung',
    h1: 'Licht & Beschattung',
    titel: 'Licht & Rollladensteuerung nachrüsten | Berlin & Brandenburg',
    beschreibung:
      'Licht, Rollläden und Jalousien automatisch steuern – per App, Funktaster oder nach Sonnenstand. Nachgerüstet ohne neue Leitungen, für Wohnung, Haus und Büro.',
    claim: 'Morgens fahren die Rollläden hoch, abends geht das Licht an. Ohne dass jemand daran denkt.',
    einleitung:
      'Es gibt in fast jeder Wohnung die eine Stelle, an der ein Lichtschalter fehlt. Und es gibt den Sommertag, an dem niemand da war, um die Jalousie herunterzulassen, und abends steht die Hitze im Raum. Beides lässt sich nachrüsten – an den vorhandenen Schaltern und überall dort, wo bisher keiner sitzt.',
    nutzen: [
      {
        titel: 'Schalter an jeder Wand',
        text: 'Ihre vorhandenen Markenschalter tauschen wir gegen funkfähige Schalter im gleichen Design – an derselben Stelle, in derselben Dose, ohne neue Leitungen. Zusätzlich lassen sich Funktaster überall dort anbringen, wo bisher kein Schalter sitzt: am Bett, am Sofa, am Ende des Flurs. Sie werden geklebt oder geschraubt und halten auch auf Glas und Fliesen.',
      },
      {
        titel: 'Beschattung nach Sonne, nicht nach Zufall',
        text: 'Rollläden und Jalousien fahren morgens hoch, abends herunter und bei starker Sonne automatisch in Schattenstellung. Im Sommer bleibt es innen kühler, im Winter geht abends weniger Wärme verloren.',
      },
      {
        titel: 'Licht geht an, wenn Sie den Raum betreten',
        text: 'Ein Bewegungsmelder im Flur, Keller oder Treppenhaus schaltet beim Betreten ein und nach einer eingestellten Zeit wieder aus. Besonders praktisch mit vollen Händen.',
      },
      {
        titel: 'Alles aus mit einem Druck',
        text: 'Ein Taster an der Wohnungs- oder Bürotür schaltet beim Verlassen alle eingebundenen Lampen und Geräte ab. Kein Rundgang mehr durch die Räume.',
      },
    ],
    komponenten: [
      'Schalt- und Dimmaktoren anstelle Ihrer vorhandenen Wandschalter, im passenden Rahmen',
      'Funktaster, einzeln oder als Doppeltaster, frei an der Wand platzierbar',
      'Rollladen- und Jalousieaktoren anstelle des vorhandenen Schalters',
      'Zwischenstecker mit Schalt- und Messfunktion für Steh- und Tischleuchten',
      'Bewegungs- und Präsenzmelder für Flur, Keller und Treppenhaus',
      'Helligkeits- und Wettersensorik für die automatische Beschattung',
    ],
    faq: [
      {
        frage: 'Bleibt das Aussehen meiner Schalter erhalten?',
        antwort:
          'Wir verwenden Rahmen, die zu Ihren vorhandenen Schaltern passen. In der Regel fällt der getauschte Schalter im Raum nicht auf. Bedient wird er wie vorher – wer nichts mit der App zu tun haben will, merkt keinen Unterschied.',
      },
      {
        frage: 'Wird dabei an der Elektroinstallation gearbeitet?',
        antwort:
          'Nur innerhalb der vorhandenen Schalterdose und am bestehenden Stromkreis. Es werden keine Leitungen neu verlegt, keine Stromkreise geschaffen und keine Arbeiten an Verteilung oder Zähleranlage vorgenommen. Nach dem Tausch führen wir die vorgeschriebenen Messungen nach DIN VDE 0100-600 durch und halten sie schriftlich fest. Wo mehr nötig ist, arbeiten wir mit einem eingetragenen Elektrofachbetrieb zusammen und sagen Ihnen das vorher.',
      },
      {
        frage: 'Funktioniert das mit meinen vorhandenen Lampen?',
        antwort:
          'Steh-, Tisch- und Bodenleuchten mit Stecker schalten wir über Zwischenstecker. Fest angeschlossene Deckenleuchten steuern wir über einen Schaltaktor anstelle des vorhandenen Schalters. Was in Ihrem Fall sinnvoll ist, sehen wir beim Termin vor Ort.',
      },
      {
        frage: 'Lassen sich auch vorhandene Rollläden nachrüsten?',
        antwort:
          'Wenn Ihre Rollläden bereits elektrisch über einen Wandschalter fahren, ja. Der Schalter wird gegen einen Aktor getauscht, der Rollladenmotor bleibt unverändert. Bei Gurtwicklern von Hand ist der Aufwand größer – das sagen wir Ihnen vor Ort offen.',
      },
      {
        frage: 'Geht das auch in einer Mietwohnung?',
        antwort:
          'Funktaster und Zwischenstecker ohne Weiteres. Beim Tausch eines Wandschalters handelt es sich um einen Eingriff in die Installation – der ursprüngliche Zustand lässt sich wiederherstellen, Sie sollten Ihren Vermieter aber vorher einbeziehen. Wir sagen Ihnen, was Sie dafür fragen müssen.',
      },
      {
        frage: 'Verdunkelt die Automatik auch, wenn ich im Raum bin?',
        antwort:
          'Nein. Sie legen fest, wann automatisch gefahren wird und wann nicht. Ein Druck auf den Schalter hat immer Vorrang vor der Automatik.',
      },
    ],
  },

  {
    slug: 'rauchwarnmelder',
    icon: '🚨',
    kurz: 'Rauchmelder',
    h1: 'Rauchwarnmelder',
    titel: 'Rauchwarnmelder montieren lassen | Berlin & Brandenburg',
    beschreibung:
      'Vernetzte Funk-Rauchwarnmelder für Wohnung, Haus und Gewerbe. Montage nach DIN 14676 mit Protokoll, Meldung aufs Handy, jährliche Prüfung auf Wunsch.',
    claim: 'Wenn es in der Küche brennt, hören Sie es auch im Schlafzimmer.',
    einleitung:
      'Rauchwarnmelder sind in Berlin seit 2021 in allen Wohnungen Pflicht. Einzelne Melder haben aber eine Schwäche: Sie hören den Melder im Keller nicht, wenn Sie oben schlafen. Vernetzte Melder lösen gemeinsam aus.',
    nutzen: [
      {
        titel: 'Alle Melder schlagen gleichzeitig an',
        text: 'Erkennt ein Melder Rauch, geben alle anderen Alarm. In einem Haus über zwei Etagen, einer großen Wohnung oder einem Bürotrakt kann das den entscheidenden Unterschied machen.',
      },
      {
        titel: 'Meldung aufs Handy, auch von unterwegs',
        text: 'Sie erfahren es auch, wenn Sie nicht da sind – und können jemanden anrufen, der nachsieht, bevor aus einem vergessenen Topf ein Wohnungsbrand wird.',
      },
      {
        titel: 'Fachgerechte Montage mit Protokoll',
        text: 'Wir montieren nach der Anwendungsnorm DIN 14676 und übergeben ein schriftliches Protokoll mit Montageorten und Gerätenummern. Das ist Ihr Nachweis gegenüber Eigentümer, Verwaltung und Versicherung.',
      },
      {
        titel: 'Ruhe statt nächtlichem Piepen',
        text: 'Die Geräte melden eine schwache Batterie rechtzeitig in der App, nicht um drei Uhr nachts mit einem Piepton. Die fest verbaute Batterie hält zehn Jahre.',
      },
      {
        titel: 'Für Verwaltungen und Eigentümergemeinschaften',
        text: 'Ganze Häuser statten wir in einem Durchgang aus, mit Geräteliste je Wohnung und einem Protokoll für die Akte. Die jährliche Prüfung übernehmen wir auf Wunsch gleich mit.',
      },
    ],
    komponenten: [
      'Funkvernetzte Rauchwarnmelder mit fest verbauter Zehn-Jahres-Batterie',
      'Montage in Schlafräumen, Kinderzimmern und Fluren nach DIN 14676',
      'Einbindung in die Zentrale für Meldungen aufs Smartphone',
      'Schriftliches Montageprotokoll für Ihre Unterlagen',
      'Fachgerechte Entsorgung der alten Geräte',
    ],
    faq: [
      {
        frage: 'Sind Rauchwarnmelder in Berlin Pflicht?',
        antwort:
          'Ja. Nach der Berliner Bauordnung müssen Schlafräume, Kinderzimmer und Flure, über die Rettungswege führen, mit Rauchwarnmeldern ausgestattet sein. Die Pflicht gilt seit dem 1. Januar 2021 auch für bestehende Wohnungen. In Brandenburg gilt eine entsprechende Regelung.',
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
      {
        frage: 'Statten Sie auch ganze Häuser aus?',
        antwort:
          'Ja. Für Eigentümergemeinschaften und Verwaltungen rüsten wir alle Wohnungen in einem Durchgang aus und übergeben eine Dokumentation je Einheit. Sprechen Sie uns auf die Terminabstimmung mit den Mietern an.',
      },
    ],
  },

  {
    slug: 'videoueberwachung',
    icon: '📹',
    kurz: 'Kameras',
    h1: 'Kameras',
    titel: 'Überwachungskamera installieren | Berlin & Brandenburg',
    beschreibung:
      'Innen- und Außenkameras mit Live-Bild aufs Smartphone, fachgerecht montiert und eingerichtet. Mit Akku oder Steckernetzteil, ohne feste Elektroinstallation.',
    claim: 'Nachsehen, wer geklingelt hat – von überall.',
    einleitung:
      'Eine Kamera hilft in zwei Momenten: wenn Sie wissen wollen, wer vor der Tür steht, und wenn hinterher niemand erklären kann, wie der Kratzer ans Auto gekommen ist. Beides lässt sich ohne neue Elektroinstallation lösen.',
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
        titel: 'Ohne neue Elektroinstallation',
        text: 'Wir setzen auf Kameras mit Akku oder Steckernetzteil, deshalb muss keine feste Leitung nach draußen gelegt werden. Die Kamera wird an der Fassade gedübelt. Muss für das Netzteil ein Kabel nach innen, setzen wir eine saubere Durchführung und verschließen sie fachgerecht. Ob das bei Ihnen nötig ist, sehen wir beim Termin vor Ort.',
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
          'Bei den von uns eingesetzten Kameras bleiben die Aufnahmen in Ihrem Netzwerk beziehungsweise in Ihrem eigenen Konto. Wir richten die Speicherdauer so ein, wie Sie es möchten.',
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
    h1: 'Wartung & Support',
    titel: 'Smart-Home-Wartung & Support | Berlin & Brandenburg',
    beschreibung:
      'Batteriewechsel, Aktualisierungen, neue Automatisierungen und jemand, der zurückruft. Auch für Anlagen, die wir nicht selbst gebaut haben.',
    claim: 'Damit aus Ihrer Technik nach zwei Jahren kein Kabelsalat wird.',
    einleitung:
      'Ein Smart Home ist kein Möbelstück, es lebt. Batterien gehen leer, Aktualisierungen kommen, der Tagesablauf ändert sich. Ohne jemanden, der sich kümmert, wird daraus nach zwei Jahren eine Sammlung Geräte, die niemand mehr anfasst.',
    nutzen: [
      {
        titel: 'Jährliche Durchsicht vor Ort',
        text: 'Wir prüfen alle Geräte, tauschen schwache Batterien, spielen Aktualisierungen ein und sehen nach, ob die Automatisierungen noch zu Ihrem Alltag passen.',
      },
      {
        titel: 'Neue Automatisierungen, wenn sich etwas ändert',
        text: 'Kind zieht aus, Homeoffice-Tage verschieben sich, neue Leuchte im Wohnzimmer, zusätzlicher Besprechungsraum. Wir passen die Abläufe an, statt dass Sie sich in Menüs einarbeiten.',
      },
      {
        titel: 'Hilfe per Telefon und WhatsApp',
        text: 'Die meisten Fragen klären sich in fünf Minuten am Telefon. Dafür brauchen Sie keine Hotline mit Warteschleife, sondern jemanden, der Ihre Anlage kennt.',
      },
      {
        titel: 'Auch für fremde Anlagen',
        text: 'Haben Sie Ihr System selbst aufgebaut oder von jemand anderem einbauen lassen, übernehmen wir die Betreuung trotzdem. Wir sehen uns den Bestand an und sagen Ihnen offen, was sinnvoll ist.',
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
