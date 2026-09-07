// German content. This object is the source of truth for the site's shape:
// `en.ts` is typed against it, so a missing or renamed key there is a build error.
export const de = {
  locale: 'de',
  htmlLang: 'de-AT',
  localeName: 'Deutsch',
  otherLocale: 'en',
  otherLocaleName: 'English',
  otherLocaleLabel: 'Switch to English',

  routes: {
    home: '/',
    offerings: '/angebot',
    method: '/methode',
    research: '/forschung',
    about: '/ueber-mich',
    contact: '/kontakt',
    imprint: '/impressum',
    privacy: '/datenschutz',
  },

  brand: {
    name: 'whatmakesyoumove',
    claim: 'Was dich bewegt.',
    owner: 'Stefan M. Schneider',
    role: 'Feldenkrais-Praxis und Bewegungsforschung, Wien.',
    email: 'stefan@recursive.work',
    city: 'Wien',
  },

  nav: {
    offerings: 'Angebot',
    method: 'Methode',
    research: 'Forschung',
    about: 'Über mich',
    contact: 'Kontakt',
    menu: 'Menü',
    close: 'Schließen',
    skipToContent: 'Zum Inhalt springen',
  },

  home: {
    title: 'Feldenkrais in Wien — Bewegung, die vom Spüren ausgeht',
    description:
      'Feldenkrais-Praxis und Bewegungsforschung in Wien. Gruppenstunden, Einzelstunden und Workshops für Menschen, die sich freier, sicherer und schmerzärmer bewegen wollen — fundiert durch wissenschaftliche Arbeit an der Universität Wien.',
    eyebrow: 'Feldenkrais-Praxis & Bewegungsforschung · Wien',
    headline: 'Was bewegt dich?',
    lede:
      'Feldenkrais-Praxis und Bewegungsforschung für Menschen, die sich freier, sicherer und schmerzärmer bewegen wollen — in Wien, fundiert durch wissenschaftliche Arbeit an der Universität Wien.',
    ctaPrimary: 'Termin anfragen',
    ctaSecondary: 'Angebot ansehen',
    heroImageAlt:
      'Stefan M. Schneider, Feldenkrais-Praktiker in Wien, im Studio',

    programmesEyebrow: 'Drei Wege',
    programmesHeadline: 'Drei Wege, drei Ausgangspunkte.',
    programmesLede:
      'DEEP, BALANCE und ACTIVE sind alle drei buchbar — jedes mit eigenem Charakter, eigenem Tempo, eigenem Format. Behutsam, ohne Leistungsdruck, dort wo du gerade stehst.',
    programmesCta: 'Alle Details und Preise',

    tilesHeadline: 'Und darüber hinaus',
    tiles: [
      {
        eyebrow: 'Für Institute & Teams',
        title: 'Workshops & Fortbildung',
        body:
          'Wissenschaftlich fundierter Hintergrund zu Embodiment, Körperwahrnehmung und somatischem Lernen — verständlich aufbereitet für alle, die selbst mit Bewegung arbeiten und ihr Wissen vertiefen wollen.',
        linkLabel: 'Mehr zu Workshops',
        linkTo: 'offerings',
        anchor: '#workshops',
      },
      {
        eyebrow: 'Universität Wien',
        title: 'Forschung: Parkinson',
        body:
          'Es geht um mehr als Symptome. Parkinson verändert nicht nur, wie sich der Körper bewegt — mit der Zeit verändert sich auch das Gefühl, noch ganz man selbst zu sein. Genau dort setzt meine aktuelle Pilotstudie an.',
        linkLabel: 'Zum Forschungsprojekt',
        linkTo: 'research',
        anchor: '',
      },
    ],

    aboutEyebrow: 'Kurz vorgestellt',
    aboutHeadline: 'Bewegung ist mein Beruf — aus zwei Richtungen zugleich.',
    aboutBody: [
      'Ich bin Feldenkrais-Praktiker und Kognitionswissenschaftler. Diese Kombination ist selten, und sie prägt, wie ich arbeite: praktisch erfahren am eigenen Körper, wissenschaftlich fundiert im Verständnis davon, wie Bewegung, Wahrnehmung und Lernen zusammenhängen.',
      'Das Ergebnis ist eine Praxis, die nicht nur gut gemeint, sondern nachvollziehbar wirksam ist.',
    ],
    aboutCta: 'Mehr über mich',
    aboutImageAlt: 'Stefan M. Schneider vor dem Banner der Universität Wien',

    trustHeadline: 'In Kooperation mit und Mitgliedschaft bei',
    trustItems: [
      { name: 'Universität Wien', href: 'https://www.univie.ac.at/' },
      { name: 'Feldenkrais Verband Österreich', href: 'https://www.feldenkrais.at/author/schneider' },
      { name: 'Parkinson Selbsthilfe Wien', href: '' },
      { name: 'Neuro9', href: 'https://neuro9.org/' },
      { name: 'HASENHERZ e. V.', href: '' },
    ],

    facts: [
      { value: '15', label: 'Jahre Taichi-Praxis, davon mehrere Jahre als Lehrer' },
      { value: '100+', label: 'Studierende durch die Seminarreihe „What makes you move“ begleitet' },
      { value: '18', label: 'Publikationen und Buchbeiträge, gelistet auf ORCID' },
      { value: '2026', label: 'Promotion zu Imagination und mentaler Vorstellung' },
    ],

    closingHeadline: 'Der nächste Schritt ist einfach.',
    closingBody:
      'Du musst nicht wissen, was Feldenkrais genau ist, um zu spüren, ob es das Richtige für dich ist. Schreib mir kurz — wir finden gemeinsam heraus, wo du stehst und was dir helfen kann.',
    closingCta: 'Jetzt Kontakt aufnehmen',
  },

  programmes: [
    {
      id: 'deep',
      name: 'DEEP',
      tagline: 'Zur Ruhe finden',
      forWhom: 'Für alle, die spüren: der Kopf beruhigt sich nicht von selbst.',
      body:
        'Unser Körper weiß oft schneller einen Weg zur Ruhe, als der Verstand ihn erklären kann — Verkörperung reicht tiefer als reines Nachdenken. DEEP richtet sich an alle, die aus dem ständigen Gedankenkreisen aussteigen und lernen wollen, sich selbst wieder herunterzufahren, ohne sich dazu zwingen zu müssen.',
      format: 'Wöchentliche Stunde, online, mit fortlaufend entwickelten Inhalten.',
      price: '25 € je Einheit · 250 € im Monatsblock (12 Einheiten)',
      status: 'Buchbar',
      cta: 'Zur nächsten DEEP-Stunde anmelden',
      crossref: 'Suchst du eher mehr Schwung und Energie? Dann ist ACTIVE vielleicht der bessere erste Schritt.',
    },
    {
      id: 'balance',
      name: 'BALANCE',
      tagline: 'Stand und Sicherheit im Alltag',
      forWhom:
        'Für alle, die im Stehen, Gehen und in Übergängen wieder mehr Vertrauen in den eigenen Körper suchen.',
      body:
        'Balance ist kein Zustand, den man einmal erreicht, sondern eine ständige, kleine Korrektur — eine Fähigkeit, die man üben kann, in jedem Alter. BALANCE setzt genau dort an: beim verkörperten Gefühl von Stand und Stabilität, nicht bei reiner Muskelkraft. Ob wegen Gangunsicherheit im Alter, nach einer Knieverletzung oder im Rahmen einer neurologischen Diagnose wie Parkinson.',
      format:
        'Aktuell als Parkinson-Programm: kurze Online-Einzelstunden (ca. 30 Minuten), mehrmals pro Woche.',
      price: '60 € je Einheit inkl. Vor- und Nachbereitung · 400 € Monatsbuchung',
      status: 'Buchbar',
      cta: 'Interesse am Einzelprogramm',
      crossref:
        'Ein allgemeinerer BALANCE-Gruppenkurs für ein breiteres Publikum ist in Entwicklung. Parkinson ist der Ausgangspunkt und bleibt ein Schwerpunkt — BALANCE richtet sich aber nicht ausschließlich an Parkinson-Betroffene.',
    },
    {
      id: 'active',
      name: 'ACTIVE',
      tagline: 'Bewegungsfreude zurückgewinnen',
      forWhom: 'Für alle, die wieder spielerisch, neugierig und mit Elan in Bewegung kommen wollen.',
      body:
        'Manchmal ist der Körper nicht müde, sondern unterfordert. ACTIVE ist der Rahmen für spielerische, aktivierende Bewegungsarbeit — ohne Leistungsdruck, vom Boden bis (wenn du magst) auf den Kopf gestellt.',
      format:
        'Wöchentlicher Online-Abendkurs, 90 Minuten, live. Dazu regelmäßige Termine im Studio eines befreundeten Personal Trainers, mit Fokus auf Koordinationsschulung.',
      price: '25 € je Einheit · 250 € im Monatsblock (12 Einheiten). Studio-Termine nach Absprache.',
      status: 'Buchbar',
      cta: 'Zum Online-Abendkurs anmelden',
      crossref:
        'Nach viel Aktivität mehr Ruhe gesucht? DEEP könnte der nächste Schritt sein. Erst mehr Stand-Sicherheit gewünscht? Starte mit BALANCE.',
    },
  ],

  offerings: {
    title: 'Feldenkrais Wien: Gruppenstunden, Einzelstunden, Workshops — Preise',
    description:
      'Alle Angebote im Überblick: die Programmlinien DEEP, BALANCE und ACTIVE, Einzelstunden, Workshops für Institute — mit transparenten Preisen und der ersten Stunde kostenlos.',
    eyebrow: 'Angebot',
    headline: 'Angebot',
    lede:
      'Ob du eine einzelne Stunde für dich suchst, dein Team fortbilden willst oder eine Kooperation im Kopf hast: Hier findest du, was ich anbiete — und wie ein erster Schritt aussehen kann.',

    programmesHeadline: 'Die drei Programme',
    programmesIntro:
      'Die drei Programmlinien sind die primäre Angebotsstruktur — jede mit eigener Verankerung in der Praxis, kein rein theoretisches Konstrukt. Alle laufen als fortlaufende Reihe, ausgelegt auf rund zwölf Einheiten, mit Aufzeichnung für Teilnehmende.',

    fiHeadline: 'Einzelstunden — FI (Functional Integration)',
    fiStatus: 'Derzeit pausiert',
    fiBody:
      'FI ist die persönlichste Form der Feldenkrais-Arbeit — Hand-Arbeit, exakt auf dich abgestimmt. Ich befinde mich noch in der Ausbildung dazu, und aktuell fehlt mir zusätzlich ein passender Raum dafür. FI ist daher im Moment nicht buchbar. Trag dich gern unverbindlich ein, ich melde mich, sobald FI startet.',
    fiCta: 'Interesse hinterlassen',

    workshopsHeadline: 'Workshops & Fortbildung für Institute und Ausbildungsstätten',
    workshopsLede: 'Wissenschaftlicher Tiefgang für alle, die selbst mit Bewegung arbeiten.',
    workshopsBody:
      'Als Kognitionswissenschaftler mit eigener Feldenkrais-Praxis bringe ich beide Seiten zusammen: verständlich aufbereitetes Hintergrundwissen zu Embodiment, Körperwahrnehmung und somatischem Lernen — für Ausbildungsstätten, Verbände und Teams, die ihr fachliches Fundament vertiefen wollen, ohne sich durch Fachliteratur kämpfen zu müssen.',
    workshopsPrice: '700 € je Fortbildungstag',
    workshopsCta: 'Workshop anfragen',

    firstHeadline: 'Die erste Stunde geht auf mich.',
    firstBody:
      'Kostenlos oder vergünstigt, je nachdem was für dich passt. Schreib mir einfach kurz, was dich beschäftigt — wir finden gemeinsam heraus, wo ein guter Einstieg liegt.',
    firstCta: 'Erste Stunde anfragen',

    pricesHeadline: 'Preise auf einen Blick',
    pricesNote: 'Alle Beträge verstehen sich aktuell als freiwilliger Spendenbeitrag — siehe Hinweis unten.',
    pricesTable: {
      colOffer: 'Angebot',
      colUnit: 'Einheit',
      colPrice: 'Betrag',
      rows: [
        { offer: 'Erste Stunde', unit: 'zum Kennenlernen', price: 'kostenlos oder vergünstigt' },
        { offer: 'BALANCE — Parkinson-Programm', unit: 'Online-Einzelstunde (ca. 30 Min.)', price: '60 €' },
        { offer: 'BALANCE — Parkinson-Programm', unit: 'Monatsbuchung', price: '400 €' },
        { offer: 'ACTIVE / DEEP', unit: 'Einzelne Kursstunde', price: '25 €' },
        { offer: 'ACTIVE / DEEP', unit: 'Monatsblock (12 Einheiten)', price: '250 €' },
        { offer: 'Einzelstunde vor Ort', unit: 'nach Verfügbarkeit', price: '80 €' },
        { offer: 'Fortbildung für Institute', unit: 'je Tag', price: '700 €' },
      ],
    },

    notesHeadline: 'Gut zu wissen',
    notes: [
      {
        title: 'Transparent: aktuell als Spendenbeitrag',
        body:
          'Da sich meine Praxis derzeit im Aufbau befindet und die gewerbliche Lizenz noch in Bearbeitung ist, nehme ich die angegebenen Beträge vorerst als freiwilligen Spendenbeitrag entgegen. Für dich ändert sich nichts: Du erhältst dieselbe Qualität und Zuwendung — und unterstützt gleichzeitig den Aufbau dieser Arbeit. Sobald die formale Seite abgeschlossen ist, gelten die Beträge als reguläre Preise.',
      },
      {
        title: 'Zugänglichkeit',
        body:
          'Können, das hilft, sollte nicht nur denen offenstehen, die es sich uneingeschränkt leisten können. Wenn die Kosten für dich gerade eine Hürde sind, sprich mich einfach an — ich versuche, eine Lösung zu finden, die für uns beide passt.',
      },
      {
        title: 'Ein Feldenkrais-Geschenk',
        body:
          'Eine Feldenkrais-Stunde lässt sich auch verschenken — als Gutschein, für jemanden, der etwas für sich tun könnte, sich aber vielleicht selbst nicht die Erlaubnis dazu gibt.',
      },
      {
        title: 'Ein Wort zur Individualität',
        body:
          'Jeder Körper, jede Geschichte, jede Einschränkung ist anders. Wenn du unsicher bist, welches Angebot zu dir passt — schreib mir einfach kurz, was dich beschäftigt. Wir finden gemeinsam heraus, wo ein guter Einstieg liegt.',
      },
    ],

    faqHeadline: 'Häufige Fragen zu Preisen und Terminen',
    faq: [
      { q: 'Gibt es eine Probestunde?', a: 'Ja. Die erste Stunde ist kostenlos oder vergünstigt — schreib mir einfach.' },
      {
        q: 'Was kostet eine Stunde?',
        a: 'BALANCE (Parkinson-Programm) 60 € je Einheit, 400 € im Monat. ACTIVE- und DEEP-Kurse 25 € je Einheit, 250 € im Monatsblock (12 Einheiten). Einzelstunde vor Ort 80 €. Fortbildungstag für Institute 700 €.',
      },
      {
        q: 'Und wenn ich mir das gerade nicht leisten kann?',
        a: 'Dann sprich mich an. Können, das hilft, sollte nicht nur denen offenstehen, die es sich uneingeschränkt leisten können. Wir finden eine Lösung, die für uns beide passt.',
      },
      {
        q: 'Bietest du auch online an?',
        a: 'Ja. BALANCE (Parkinson-Programm), der ACTIVE-Abendkurs und DEEP laufen alle online, ganz ohne Anfahrt.',
      },
      {
        q: 'Kann ich eine Stunde verschenken?',
        a: 'Ja, als Gutschein — für jemanden, der etwas für sich tun könnte, sich aber vielleicht selbst nicht die Erlaubnis dazu gibt.',
      },
      {
        q: 'Warum werden die Preise als „Spendenbeitrag“ bezeichnet?',
        a: 'Weil meine Gewerbeanmeldung gerade in Bearbeitung ist. Das ändert nichts an Qualität oder Umfang der Stunden — sobald die Anmeldung abgeschlossen ist, gelten die Beträge als reguläre Preise.',
      },
      {
        q: 'Muss ich mich langfristig binden?',
        a: 'Nein. Es gibt Einzelstunden und Monatsblöcke, aber keine Verträge und keine automatische Verlängerung.',
      },
    ],
  },

  method: {
    title: 'Was ist Feldenkrais? Methode, Wirkung und die zwei Formen ATM und FI',
    description:
      'Feldenkrais ist eine somatische Lernmethode: über kleine, bewusst wahrgenommene Bewegungen findet das Nervensystem leichtere Wege. Grundprinzip, die Formen ATM und FI, Herkunft und häufige Fragen.',
    eyebrow: 'Methode',
    headline: 'Was ist Feldenkrais?',
    lede:
      'Feldenkrais ist eine somatische Bewegungsmethode — eine Methode, die über bewusste, sanfte Bewegung arbeitet, nicht über Kraft, Dehnung oder Korrektur. Im Zentrum steht nicht die Frage „Wie mache ich das richtig?“, sondern „Wie fühlt sich das an — und geht es auch leichter?“',

    sections: [
      {
        title: 'Das Grundprinzip',
        body: [
          'Die meisten Bewegungsangebote wollen etwas verbessern, indem sie üben, wiederholen, kräftigen. Feldenkrais geht einen anderen Weg: durch sehr kleine, bewusst wahrgenommene Bewegungen entdeckt dein Nervensystem selbst neue, leichtere Wege, sich zu bewegen. Nicht durch Anstrengung, sondern durch Aufmerksamkeit.',
          'Das klingt zunächst ungewohnt — die meisten Menschen erwarten Bewegung als etwas, das man trainiert. Feldenkrais setzt stattdessen beim Lernen an: Der Körper verändert sich, wenn das Nervensystem eine neue Möglichkeit erkennt, nicht wenn man einen alten Bewegungsablauf mit Kraft wiederholt.',
        ],
      },
      {
        title: 'Woher die Methode kommt',
        body: [
          'Entwickelt wurde die Methode von Moshe Feldenkrais (1904–1984), Physiker und Judoka, der seine eigenen Knieverletzungen zum Ausgangspunkt nahm, um zu untersuchen, wie eng Bewegung, Wahrnehmung und Lernen miteinander verbunden sind.',
          'Seit Jahrzehnten wird die Methode weltweit in anerkannten, mehrjährigen Ausbildungsgängen weitergegeben — auch meine eigene Ausbildung folgt diesem Standard.',
        ],
      },
      {
        title: 'Ein anderes Verständnis von Gesundheit',
        body: [
          'Gesundheit wird oft als Abwesenheit von Krankheit verstanden. Aber viele Menschen, die medizinisch als geheilt gelten, kommen trotzdem nicht mehr richtig in ihr Leben zurück.',
          'Ein anderer, hilfreicherer Gedanke: Gesundheit ist die Fähigkeit, aus dem Gleichgewicht zu geraten — durch Krankheit, durch eine Diagnose, durch eine Lebenskrise — und einen Weg zurück zur eigenen Balance zu finden. Nicht die Abwesenheit von Erschütterung, sondern die Fähigkeit, mit ihr umzugehen. Genau hier setzt Feldenkrais an: nicht bei der Frage „Was fehlt?“, sondern bei der Frage „Was kann ich gerade noch spüren, und wie finde ich von dort aus einen Weg?“',
        ],
      },
      {
        title: 'Warum es wirkt',
        body: [
          'Das ist auch die Frage, die mich als Wissenschaftler beschäftigt: Warum verändert sich etwas, wenn man nur bewusst wahrnimmt, ohne zu trainieren?',
          'Genau das untersuche ich in meiner Forschung — unter anderem aktuell bei Menschen mit Parkinson, wo dieses Prinzip besonders viel bewirken kann. Verkörperung reicht dabei tiefer als reines Nachdenken: Das Nervensystem lernt über Erfahrung, nicht über Einsicht.',
        ],
      },
    ],

    formsHeadline: 'Zwei Formen — ATM und FI',
    forms: [
      {
        abbr: 'ATM',
        name: 'Awareness Through Movement',
        body:
          'Angeleitete Gruppen- oder Einzelstunden mit gesprochener Anleitung. Du bewegst dich selbst, langsam und achtsam, während eine Stimme dich durch eine Bewegungssequenz führt. Kein Vormachen, kein richtig oder falsch — nur die eigene, sich verändernde Wahrnehmung.',
        status: 'Biete ich regulär an',
      },
      {
        abbr: 'FI',
        name: 'Functional Integration',
        body:
          'Die individuellste Form: eine Einzelstunde, in der ich mit den Händen arbeite, um dir zu helfen, neue Bewegungsmöglichkeiten zu spüren, die du selbst noch nicht gefunden hast. Sanft, nie manipulativ — eher ein Dialog über Berührung als eine Behandlung.',
        status: 'Ausbildung läuft, derzeit pausiert',
      },
    ],

    forWhomHeadline: 'Für wen es geeignet ist',
    forWhomBody:
      'Feldenkrais eignet sich für fast jeden Körper und jedes Alter — gerade weil nichts forciert wird. Häufige Ausgangslagen:',
    forWhomList: [
      'chronische Schmerzen und wiederkehrende Verspannungen',
      'Bewegungseinschränkungen nach Verletzung oder Operation',
      'das Gefühl, steif oder nicht mehr ganz zuhause im eigenen Körper zu sein',
      'Gangunsicherheit, Sturzangst, nachlassendes Gleichgewicht',
      'neurologische Erkrankungen wie Parkinson',
      'der Wunsch, sich wacher, leichter und ausdrucksfähiger zu bewegen',
    ],

    glossaryHeadline: 'Kleines Glossar',
    glossaryIntro: 'Begriffe, die in Stunden und Texten immer wieder vorkommen.',
    glossary: [
      { term: 'Somatisch', def: 'Vom Körper her, von innen erlebt — im Unterschied zur Betrachtung des Körpers von außen.' },
      { term: 'Embodiment / Verkörperung', def: 'Die Einsicht, dass Denken, Fühlen und Wahrnehmen nicht nur im Kopf stattfinden, sondern durch den ganzen bewegten Körper hindurch.' },
      { term: 'Propriozeption', def: 'Der innere Sinn für Stellung, Spannung und Bewegung des eigenen Körpers — die Grundlage jeder Feldenkrais-Stunde.' },
      { term: 'ATM', def: 'Awareness Through Movement: verbal angeleitete Bewegungsstunde, in der du dich selbst bewegst.' },
      { term: 'FI', def: 'Functional Integration: Einzelstunde, in der über sanfte Berührung mit den Händen gearbeitet wird.' },
      { term: 'Rehabituierung', def: 'Alte Bewegungsgewohnheiten nicht weiter einüben, sondern hinterfragen, lösen und neu organisieren.' },
      { term: 'Ideokinese', def: 'Arbeit allein über innere Vorstellungsbilder, um Haltung und Koordination zu verändern — eng verwandt mit meiner Forschung zu mentaler Vorstellung.' },
    ],

    faqHeadline: 'Häufige Fragen zur Methode',
    faq: [
      {
        q: 'Ist Feldenkrais eine Therapie?',
        a: 'Nein. Feldenkrais ist eine Lernmethode, keine Behandlung. Es wird nichts korrigiert und nichts therapiert — du machst selbst Bewegungserfahrungen, aus denen dein Nervensystem neue Möglichkeiten ableitet. Wer eine medizinische Behandlung braucht, findet sie bei Ärztinnen und Therapeuten. Feldenkrais kann daneben stehen, nicht an ihrer Stelle.',
      },
      {
        q: 'Was ist der Unterschied zwischen Feldenkrais und Physiotherapie oder Yoga?',
        a: 'Physiotherapie arbeitet an einer Funktion, die wiederhergestellt werden soll. Yoga arbeitet mit Haltungen, die eingenommen und gehalten werden. Feldenkrais arbeitet mit Aufmerksamkeit: sehr kleine, langsame Bewegungen, ohne Ziel und ohne Vorbild, bis sich von selbst ein leichterer Weg zeigt. Es wird nicht geübt, es wird gelernt.',
      },
      {
        q: 'Muss ich beweglich oder sportlich sein?',
        a: 'Nein. Gerade weil nichts forciert wird, ist die Methode für fast jeden Körper und jedes Alter geeignet. Du bewegst dich in deinem eigenen Tempo und in deiner eigenen Bewegungsamplitude, ohne Vergleich mit anderen im Raum.',
      },
      {
        q: 'Was ist der Unterschied zwischen ATM und FI?',
        a: 'ATM (Awareness Through Movement) sind angeleitete Stunden mit gesprochener Anleitung — du bewegst dich selbst. FI (Functional Integration) ist eine Einzelstunde, in der mit den Händen gearbeitet wird, um Bewegungsmöglichkeiten spürbar zu machen, die du selbst noch nicht gefunden hast. Aktueller Stand: ATM biete ich regulär an, FI befindet sich noch in meiner Ausbildung.',
      },
      {
        q: 'Was brauche ich für eine Stunde?',
        a: 'Bequeme, warme Kleidung und eine Unterlage. Mehr nicht. Für die Online-Stunden zusätzlich einen Platz am Boden und eine Kamera, die dich sehen kann.',
      },
      {
        q: 'Wie oft muss ich kommen, bis sich etwas verändert?',
        a: 'Viele Menschen spüren schon nach einer einzelnen Stunde einen Unterschied — meist nicht als große Veränderung, sondern als Leichtigkeit an einer Stelle, an der vorher Anstrengung war. Ob daraus etwas Dauerhaftes wird, zeigt sich über mehrere Stunden. Deshalb gibt es Blockpreise und keine Verträge.',
      },
    ],
  },

  research: {
    title: 'Feldenkrais bei Parkinson — Forschungsprojekt an der Universität Wien',
    description:
      'Pilotstudie an der Universität Wien: ein vierwöchiges Feldenkrais-basiertes Bewegungsprogramm für Menschen mit Parkinson, entwickelt gemeinsam mit Betroffenen, begleitet von einem Dokumentarfilm.',
    eyebrow: 'Forschung · Universität Wien',
    headline: 'Bewegung, die zurückgibt, was Krankheit nimmt',
    lede:
      'Als Kognitionswissenschaftler an der Universität Wien und als Feldenkrais-Praktiker bewege ich mich zwischen zwei Welten, die selten zusammengedacht werden: der wissenschaftlichen Frage, wie Körper und Selbst zusammenhängen — und der praktischen Arbeit, Menschen dabei zu begleiten, diese Verbindung wieder zu spüren.',
    heroImageAlt: 'Stefan M. Schneider vor dem Banner der Universität Wien',

    projectEyebrow: 'Aktuelles Projekt',
    projectTitle: 'Parkinson — Moving the Conversation',
    projectBody: [
      'Parkinson ist die am schnellsten wachsende neurologische Erkrankung weltweit, bis heute nicht heilbar. Medikamente und operative Eingriffe können den Verlauf verlangsamen — aber sie erreichen nicht alles, was die Krankheit nimmt. Denn Parkinson verändert nicht nur Bewegung, Atem, Mimik und Stimme. Mit der Zeit verändert sich auch etwas Leiseres: das Gefühl, noch ganz präsent, noch ganz man selbst zu sein. Viele Betroffene beschreiben das als eine Art innere Entfremdung — nicht nur der Körper wird enger, auch das Selbstgefühl.',
      'Genau hier setzt unser Projekt an. Gemeinsam mit einem interdisziplinären Team — Psycholog:innen, Kognitionswissenschaftler:innen, Feldenkrais-Lehrenden, Filmschaffenden und, ganz zentral, Menschen mit Parkinson selbst — entwickeln wir ein vierwöchiges Bewegungsprogramm auf Basis der Feldenkrais-Methode. Der Ansatz: nicht Korrektur, nicht Anstrengung, sondern feines Wahrnehmen, Entdecken und Wiederverbinden mit dem eigenen Körper.',
      'Meine Ausgangsvermutung: Die meisten ergänzenden Therapien zielen darauf, körperliche Funktion zu erhalten. Das Programm, das ich im Team mitentwickle, zielt auf etwas, das oft übersehen wird — das erlebte Körper- und Selbstgefühl, das Parkinson still untergräbt. Wer seine Körperwahrnehmung und Ausdrucksfähigkeit zurückgewinnt, gewinnt oft mehr als nur weniger Symptome: die Erfahrung, wieder stärker man selbst zu sein.',
      'Ein dokumentarisches Filmprojekt begleitet den gesamten Prozess — es hält nicht nur fest, was passiert, sondern wie es sich anfühlt. Der Film wird später öffentlich gezeigt und eröffnet ein Gespräch zwischen Teilnehmenden, der Parkinson-Community, Fachleuten und einer breiteren Öffentlichkeit.',
    ],

    teamHeadline: 'Das Team',
    teamIntro:
      'Das Projekt entsteht in einem interdisziplinären Team an der Universität Wien: Psychologie, Kognitionswissenschaft, Philosophie und künstlerische Forschung arbeiten zusammen mit Menschen mit Parkinson.',
    teamImageAlt: 'Aus dem interdisziplinären Team rund um die Pilotstudie',
    team: [
      { name: 'Matthew Pelowski', role: 'Psychologie · Projektleitung' },
      { name: 'Bence Szaszkó', role: 'Psychologie' },
      { name: 'Stefan M. Schneider', role: 'Kognitionswissenschaft' },
      { name: 'Blanca Spee', role: 'Psychologie' },
      { name: 'Thieme Stap', role: 'Philosophie' },
      { name: 'Ruth Anderwald', role: 'Künstlerische Forschung' },
      { name: 'Leonhard Grond', role: 'Künstlerische Forschung' },
    ],
    funding: 'Gefördert durch Seed Funding der Universität Wien, 2026.',

    relevanceHeadline: 'Warum das für dich relevant sein könnte',
    relevance: [
      {
        who: 'Wenn du selbst betroffen bist oder Angehörige:r',
        body:
          'Dieses Projekt entsteht nicht über, sondern mit den Menschen, um die es geht — als gleichberechtigte Partner:innen im Forschungsprozess, nicht nur als Teilnehmende.',
      },
      {
        who: 'Wenn du in der Gesundheitsversorgung arbeitest',
        body:
          'Ziel ist ein wissenschaftlich geprüftes, Feldenkrais-basiertes Programm, das sich mit vergleichsweise geringem Aufwand und ohne aufwändige Infrastruktur in bestehende Behandlung integrieren lässt — als kosteneffiziente Ergänzung, die Würde, Ausdruckskraft und Selbstgefühl in den Mittelpunkt stellt.',
      },
      {
        who: 'Wenn du selbst forschst',
        body:
          'Embodied Cognition, Bewegungswissenschaft, partizipative Forschung: Ich freue mich über Austausch und Kooperation. Das Projekt ist bewusst klein und dialogorientiert angelegt, als Grundlage für eine größere, international vergleichende Folgestudie.',
      },
    ],

    nextHeadline: 'Wie es weitergeht',
    nextBody:
      'Dieses Pilotprojekt ist der erste Schritt. Als Nächstes: größere Gruppen, mehrere Entwicklungszyklen, eine umfassendere wissenschaftliche Auswertung — und der Vergleich mit anderen Ansätzen wie Physiotherapie, Tanz, Theater oder kunstbasierten Therapien. Langfristig interessiert mich besonders, ob sich das Modell auf andere neurodegenerative Erkrankungen übertragen lässt.',

    focusHeadline: 'Meine Forschungsschwerpunkte',
    focus: [
      'Embodiment und enaktive Kognitionswissenschaft',
      'Körperwahrnehmung und Körperbewusstsein',
      'Imagination und mentale Vorstellung',
      'somatisches Bewegungslernen',
      'Phänomenologie und First-Person-Methoden',
      'Kreativitätsforschung und künstlerische Forschung',
    ],

    linksHeadline: 'Verweise',
    links: [
      {
        label: 'Offizieller Projekteintrag, Forschungsverbund Gesundheit in Gesellschaft, Universität Wien',
        href: 'https://gig.univie.ac.at/forschung/projekte/projekt-details/parkinsons-moving-the-conversation',
      },
      { label: 'ORCID-Profil', href: 'https://orcid.org/0000-0002-0724-8282' },
      { label: 'Neuro9 — Feldenkrais online bei Parkinson', href: 'https://neuro9.org/' },
    ],

    bridgeHeadline: 'Du bist über die Studie hier gelandet?',
    bridgeBody:
      'Das Programm, das in der Studie entwickelt wurde, biete ich auch außerhalb davon an — als kurze Online-Einzelstunden, mehrmals pro Woche, ohne Anfahrt.',
    bridgeCta: 'Zum Parkinson-Angebot',

    faqHeadline: 'Häufige Fragen zum Parkinson-Programm',
    faq: [
      {
        q: 'Kann Feldenkrais bei Parkinson etwas bewirken?',
        a: 'Genau das untersuchen wir. Die Ausgangsüberlegung: Die meisten ergänzenden Angebote zielen darauf, körperliche Funktion zu erhalten. Unser Programm richtet sich auf etwas, das seltener beachtet wird — das erlebte Körper- und Selbstgefühl. Ob und wie stark das wirkt, ist Gegenstand der laufenden Pilotstudie. Belastbare Aussagen gibt es erst nach der Auswertung.',
      },
      {
        q: 'Ist das Programm eine Behandlung oder ein Ersatz für Medikamente?',
        a: 'Nein, ausdrücklich nicht. Das Programm ersetzt keine medizinische Behandlung und keine Medikation. Es ist eine Bewegungs- und Wahrnehmungspraxis, die daneben steht.',
      },
      {
        q: 'Muss ich an der Studie teilnehmen, um das Programm zu machen?',
        a: 'Nein. Das Programm, das in der Studie entwickelt wurde, biete ich auch unabhängig davon an — als kurze Online-Einzelstunden, mehrmals pro Woche, ohne Anfahrt.',
      },
      {
        q: 'Wie läuft eine Online-Einzelstunde ab?',
        a: 'Etwa 30 Minuten, mehrmals pro Woche, bei dir zuhause. Du liegst oder sitzt, ich leite dich durch eine Bewegungssequenz. Keine Anfahrt, keine Vorbereitung, kein Leistungsdruck.',
      },
      {
        q: 'Ich bin Angehörige oder Angehöriger — kann ich mitmachen?',
        a: 'Sprich mich an. Das Projekt entsteht ausdrücklich mit den Menschen, um die es geht, nicht über sie.',
      },
      {
        q: 'Ich arbeite in der Gesundheitsversorgung. Gibt es Material für Fachpublikum?',
        a: 'Ja. Der offizielle Projekteintrag der Universität Wien ist verlinkt, und für Kooperationen und fachlichen Austausch erreichst du mich direkt über das Kontaktformular.',
      },
    ],
  },

  about: {
    title: 'Stefan M. Schneider — Feldenkrais-Praktiker und Kognitionswissenschaftler, Wien',
    description:
      'Feldenkrais-Praktiker, Kognitionswissenschaftler an der Universität Wien, ausgebildeter Taichi-Lehrer und Absolvent der Kunstakademie Düsseldorf. Werdegang, Publikationen und die Geschichte hinter „What makes you move“.',
    eyebrow: 'Wien · Universität Wien',
    headline: 'Über mich',
    lede:
      'Ich bin Feldenkrais-Praktiker und Kognitionswissenschaftler — zwei Wege, die für mich schon lange zusammengehören.',
    portraitAlt: 'Stefan M. Schneider, Feldenkrais-Praktiker in Wien, im Studio',

    meta: [
      { label: 'Tätigkeit', value: 'Feldenkrais-Praxis und Bewegungsforschung' },
      { label: 'Institution', value: 'Universität Wien' },
      { label: 'Schwerpunkte', value: 'Embodiment · somatisches Lernen · mentale Vorstellung' },
      { label: 'ORCID', value: '0000-0002-0724-8282' },
    ],

    whoHeadline: 'Wer ich bin',
    whoBody: [
      'Ich beschäftige mich mit der Frage, wie Körper, Wahrnehmung und Bewusstsein zusammenhängen — praktisch als Feldenkrais- und Taichi-Lehrer, wissenschaftlich als Kognitionswissenschaftler an der Universität Wien. Meine Doktorarbeit widmet sich der Vorstellungskraft und wie sie im Körper verankert ist; parallel dazu begleite ich Menschen in der Praxis dabei, genau diese Verbindung wieder zu spüren — aktuell mit besonderem Fokus auf neurodegenerative Erkrankungen wie Parkinson.',
      'Diese Doppelperspektive ist mir wichtig: Ich spreche nicht nur über Bewegung, ich stehe auch selbst jeden Tag mitten drin.',
    ],

    storyHeadline: 'Meine eigene Bewegungsgeschichte',
    storyBody: [
      'Meine Bewegungsgeschichte beginnt nicht mit einer Tanzausbildung, sondern mit einem Knie. Seit meinem fünfzehnten Lebensjahr renkte es sich mehrmals im Jahr aus; mit 22 konnte ich vor Schmerzen kaum noch gehen. Eine Fehlstellung wurde operativ korrigiert, danach folgten über zwanzig Jahre Physiotherapie und Krafttraining — und die immer gleiche Erfahrung, dass manche Dinge sich einfach nicht verbesserten. Jeder Schritt tat ein bisschen weh, und die Spannung setzte sich über Hüfte und Wirbelsäule bis in den Nacken fort.',
      'Dazu kam mit 19 ein schwerer Sturz aus großer Höhe. Die Brüche heilten gut, aber danach war ich steif und zutiefst verunsichert, was ich mir zutrauen durfte. Aus diesen Voraussetzungen habe ich mir Stück für Stück erschlossen, was möglich ist: Schwimmen, Taekwondo bis zum Wettkampfniveau, Segel- und Drachenfliegen, fünfzehn Jahre Taichi in einem System, das die innere Form sehr präzise kultiviert.',
      'Gelöst hat sich der Schmerzpunkt im Knie erst mit 45 — durch eine Kombination aus Feldenkrais und gezieltem Training. Es zeigte sich, dass gerade das gut gemeinte Führen des Knies in der Schiene zu wenig Rotation zugelassen hatte. Seitdem freut mich jede Bewegung in diesem Bereich. Das ist der Grund, warum ich diese Arbeit mache: Ich weiß aus eigener Erfahrung, wie es ist, bewegungsdetektivisch nach einem Weg zu suchen — und ihn zu finden.',
    ],

    timelineHeadline: 'Stationen eines langen Lernens',
    timeline: [
      {
        period: 'seit 2020',
        title: 'Universität Wien',
        body:
          'Zuletzt Co-Principal Investigator des FWF-Projekts „Creative Conversations with Materials“ zu Kreativität in künstlerischen Schaffensprozessen; zuvor Associate Researcher im FWF-Projekt zu zwischenleiblichen Synergiepraktiken (Akro-Yoga, Taichi Push Hands, Kontaktimprovisation).',
      },
      {
        period: '2016–2022',
        title: 'Internationale Projektleitung, Kairo',
        body:
          'Leitung dreier aufeinander aufbauender Kooperationsprojekte mit der Ain Shams University Kairo, inklusive Aufbau einer E-Learning-Plattform und Organisation von Studierendenaustauschen.',
      },
      {
        period: '2012–2019',
        title: 'Universität Osnabrück · Institut für Kognitionswissenschaft',
        body:
          'Lehre und Forschung in Phänomenologie, künstlicher Intelligenz und Kognitionswissenschaft — darunter die mehrteilige Seminarreihe „What makes you move?“, die dieser Seite ihren Namen gegeben hat.',
      },
      {
        period: '2026',
        title: 'Promotion',
        body:
          'Dissertation zu Imagination und mentaler Vorstellung — der Dynamik verkörperter Repräsentation. B.Sc. und M.Sc. Cognitive Science ebenda.',
      },
      {
        period: 'laufend',
        title: 'Feldenkrais und Taichi',
        body:
          'Zertifizierter Tai-Chi-Chuan-Lehrer. In der Feldenkrais-Ausbildung, aktuell mit Lehrlizenz für Awareness-Through-Movement-Stunden; die Ausbildung zur Funktionalen Integration befindet sich im Abschluss. Feldforschung zu somatischen Bewegungspraktiken: Feldenkrais, Gaga Dance, Taichi, Ideokinese.',
      },
      {
        period: 'seit 2001',
        title: 'Bildende Kunst',
        body: 'Diplom und Meisterschüler, Kunstakademie Düsseldorf, bei Georg Herold und Jan Dibbets.',
      },
    ],
    timelineStations: {
      title: 'Stationen',
      places: 'Düsseldorf · Osnabrück · Paris · Birmingham · Kairo · Tel Aviv · Wien',
      body: 'Aufgewachsen und gearbeitet unter anderem an diesen Orten, seit einigen Jahren in Wien zuhause.',
    },
    vitaLink: 'Vollständige akademische Vita auf ORCID',

    pubsHeadline: 'Publikationen zu Bewegung, Wahrnehmung und Lernen',
    pubsIntro:
      'Meine Forschung untersucht, was in Wahrnehmung und Körper geschieht, wenn Bewegung über Sprache angeleitet wird — also genau das, was in jeder Feldenkrais-Stunde passiert.',
    pubs: [
      {
        year: '2026',
        authors: 'Schneider, S. M., & Kimmel, M.',
        titleText: '„Mind Your Own Business“: Taichi Synergies From Individual Coordination To Collective Physics',
        venue: 'Journal of Expertise',
        href: '',
      },
      {
        year: '2026',
        authors: 'Anderwald, R., Grond, L., & Schneider, S. M.',
        titleText: 'Moving Bodies, Concepts, and Understanding',
        venue: 'The Journal of Somaesthetics',
        href: '',
      },
      {
        year: '2024',
        authors: 'Kimmel, M., Schneider, S. M., & Fisher, V. J.',
        titleText: '„Introjecting“ imagery: A process model of how minds and bodies are co-enacted',
        venue: 'Language Sciences, Band 102',
        href: 'https://doi.org/10.1016/j.langsci.2024.101625',
      },
      {
        year: '2022',
        authors: 'Schneider, S. M.',
        titleText: 'Intercorporeal synergy practices — perspectives from expert interaction',
        venue: 'in: Collaborative Embodied Performance (Buchkapitel)',
        href: '',
      },
      {
        year: '2019',
        authors: 'Schneider, S. M.',
        titleText: 'Bodily experience in somatic movement practices',
        venue: 'Dance & Somatic Practices, Coventry University',
        href: '',
      },
      {
        year: '2015',
        authors: 'Schneider, S. M.',
        titleText: 'Vorstellen als räumlich-zeitliches Konstruieren',
        venue: 'in: Selbstbeobachtung — Oswald Wieners Denkpsychologie (Buchkapitel)',
        href: '',
      },
    ],
    pubsLink: 'Vollständige Publikationsliste auf ORCID',

    whyHeadline: 'Warum ich diesen Weg gehe',
    whyBody: [
      'Der Titel dieser Seite hat eine eigene Geschichte: „What makes you move?“ war der Titel eines mehrteiligen Seminars, das ich an der Universität Osnabrück gegeben habe — über bewusste Antizipation, den bewegten Körper, Spüren und bewusste Übung.',
      'Die Frage hat mich seither nicht losgelassen, nur dass ich sie heute nicht mehr nur im Seminarraum stelle, sondern in der Praxis: Was bewegt dich — im wörtlichen wie im übertragenen Sinn? Und wie finden wir das gemeinsam heraus, wenn Krankheit, Schmerz oder einfach die Routine des Alltags diese Verbindung verschüttet haben?',
      'Deshalb heißt diese Seite nicht „Therapie“, sondern „Was dich bewegt“. Sie ist eine Frage, keine Behandlung.',
    ],
    whyPull: 'Der Titel dieser Seite war einmal der Titel eines Seminars.',

    curiosityHeadline: 'Was mich bewegt?',
    curiosityBody:
      'Neugierde. Neugierde auf das Schöne, das Neue, das Bereichernde — auf Imagination, Wahrnehmung und den Wunsch, sich auszudrücken. Und die Verbindung zu Menschen: der tiefe Wunsch zu helfen und diese Interaktion für alle positiv zu gestalten.',

    artHeadline: 'Malerei und Zeichnung',
    artBody: [
      'Bevor ich Bewegung erforscht und unterrichtet habe, habe ich sie gezeichnet. Ich habe an der Kunstakademie Düsseldorf studiert und arbeite bis heute mit Tusche und Papier. Zeichnen war meine erste Schule des Wahrnehmens. Feldenkrais ist die zweite — mit denselben Fragen, anderen Mitteln.',
    ],
    artPull:
      'Meine Malerei speist sich aus der Empfindung von Raum, Bewegung, Geschwindigkeit und Körperlichkeit — und aus dem Material Tusche und Papier.',
    artCaptionSuffix: 'Tusche auf Papier · 2023',
    artWorks: [
      { title: 'Krähen auf Ginkgobaum 1' },
      { title: 'Krähen auf Ginkgobaum 2' },
      { title: 'Krahh!' },
      { title: 'Vulkanlandschaft' },
      { title: 'Rhino' },
      { title: 'Ele' },
    ],
    artNote: 'Eine Auswahl weiterer Arbeiten ist beim Österreichischen Ärztekunstverein zu sehen',
    artNoteHref: 'https://www.aerztekunstverein.at/gallery-view/stefan-marco-schneider/',

    neuro9Headline: 'Neuro9 — Feldenkrais online für Menschen mit Parkinson',
    neuro9Body:
      'Gemeinsam mit Kolleginnen und Kollegen aus mehreren Ländern habe ich Neuro9 gegründet: eine Kooperative, die kurze, häufige Online-Stunden für Menschen mit Parkinson zugänglich macht.',
    neuro9Cta: 'Das Projekt ansehen',
    neuro9Href: 'https://neuro9.org/',
  },

  contact: {
    title: 'Kontakt — Feldenkrais Wien',
    description:
      'Kontakt zu Stefan M. Schneider, Feldenkrais-Praktiker in Wien. Anfragen zu Stunden, Workshops und Forschungskooperationen — direkt per E-Mail, ohne Datenspeicherung.',
    eyebrow: 'Kontakt',
    headline: 'Kontakt',
    lede:
      'Egal ob du eine Frage hast, eine Stunde suchst oder eine Kooperation im Kopf hast — schreib mir einfach.',

    form: {
      legendAbout: 'Worum geht es?',
      legendYou: 'Wie erreiche ich dich?',
      legendWhen: 'Wann passt es dir?',
      name: 'Name',
      email: 'E-Mail',
      phone: 'Telefon (optional)',
      topic: 'Anliegen',
      topics: [
        'Erste Stunde / Kennenlernen',
        'DEEP — zur Ruhe finden',
        'BALANCE — Stand und Sicherheit',
        'BALANCE — Parkinson-Programm',
        'ACTIVE — Bewegungsfreude',
        'Einzelstunde (FI) vormerken',
        'Workshop / Fortbildung',
        'Forschungskooperation',
        'Gutschein',
        'Sonstiges',
      ],
      preferredTime: 'Wunschzeit (optional)',
      days: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
      times: ['vormittags', 'nachmittags', 'abends'],
      message: 'Nachricht',
      messagePlaceholder: 'Was beschäftigt dich gerade? Ein, zwei Sätze reichen völlig.',
      consent:
        'Ich bin einverstanden, dass meine Angaben zur Bearbeitung meiner Anfrage verwendet werden.',
      submit: 'Nachricht schreiben',
      hint:
        'Der Button öffnet dein E-Mail-Programm mit einer fertig vorbereiteten Nachricht an mich. Auf dieser Seite werden keine Daten gespeichert und nichts an Dritte übertragen.',
      fallbackLabel: 'Klappt das nicht? Schreib direkt an',
      required: 'Pflichtfeld',
      subjectPrefix: 'Anfrage über whatmakesyoumove',
    },

    directHeadline: 'Direkt',
    directNote: 'Wien · Praxisadresse wird bei Terminvereinbarung mitgeteilt',
    channelsHeadline: 'Kanäle',
    channels: [
      { label: 'Instagram @stef.moves', href: 'https://www.instagram.com/stef.moves/' },
      { label: 'LinkedIn', href: 'https://at.linkedin.com/in/stefan-marco-schneider' },
      { label: 'ORCID', href: 'https://orcid.org/0000-0002-0724-8282' },
    ],
    personalNote:
      'Deine Anfrage lese ich persönlich — es gibt kein Team dahinter, nur mich. Das heißt auch: etwas Geduld bei der Antwort, aber garantiert eine echte, auf dich zugeschnittene Rückmeldung.',
  },

  footer: {
    tagline: 'Feldenkrais-Praxis und Bewegungsforschung, Wien.',
    contactHeadline: 'Kontakt',
    legalHeadline: 'Rechtliches',
    scienceHeadline: 'Wissenschaft',
    navHeadline: 'Seiten',
    science: [
      { label: 'ORCID', href: 'https://orcid.org/0000-0002-0724-8282' },
      { label: 'ResearchGate', href: 'https://www.researchgate.net/profile/Stefan-Marco-Schneider-2' },
      { label: 'Universität Wien', href: 'https://ufind.univie.ac.at/de/person.html?id=112282' },
    ],
    social: [
      { label: 'Instagram', href: 'https://www.instagram.com/stef.moves/' },
      { label: 'LinkedIn', href: 'https://at.linkedin.com/in/stefan-marco-schneider' },
    ],
    copyright: 'Stefan M. Schneider',
  },

  legal: {
    imprint: {
      title: 'Impressum',
      description: 'Impressum und Offenlegung gemäß § 5 ECG und § 25 MedienG.',
      headline: 'Impressum',
      lede: 'Angaben gemäß § 5 E-Commerce-Gesetz und § 25 Mediengesetz.',
      todo:
        'Vor der Veröffentlichung auszufüllen: Anschrift, Gewerbewortlaut, Behörde und gegebenenfalls UID-Nummer. Diese Angaben sind in Österreich verpflichtend, sobald die Seite live geht.',
      blocks: [
        {
          title: 'Medieninhaber und für den Inhalt verantwortlich',
          lines: ['Stefan Marco Schneider', '[Straße und Hausnummer]', '[PLZ] Wien, Österreich'],
        },
        {
          title: 'Kontakt',
          lines: ['stefan@recursive.work'],
        },
        {
          title: 'Unternehmensgegenstand',
          lines: [
            'Feldenkrais-Praxis (Awareness Through Movement), Workshops und Fortbildungen sowie angewandte Bewegungsforschung.',
            'Gewerbeanmeldung in Bearbeitung — Beträge werden bis zum Abschluss als freiwilliger Spendenbeitrag entgegengenommen.',
          ],
        },
        {
          title: 'Berufsbezeichnung und Mitgliedschaft',
          lines: [
            'Feldenkrais-Praktiker in Ausbildung, mit Lehrlizenz für Awareness-Through-Movement-Stunden.',
            'Mitglied im Feldenkrais Verband Österreich.',
          ],
        },
        {
          title: 'Blattlinie',
          lines: [
            'Information über die Feldenkrais-Praxis von Stefan M. Schneider sowie über seine wissenschaftliche Arbeit zu Bewegung, Wahrnehmung und somatischem Lernen.',
          ],
        },
        {
          title: 'Haftung für Links',
          lines: [
            'Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte kein Einfluss besteht. Für diese fremden Inhalte wird keine Gewähr übernommen; verantwortlich ist stets der jeweilige Anbieter.',
          ],
        },
        {
          title: 'Bildnachweis',
          lines: [
            'Fotografien und Tuschezeichnungen: Stefan M. Schneider, sofern nicht anders angegeben.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Datenschutz',
      description: 'Datenschutzerklärung: Diese Website setzt keine Cookies, nutzt kein Tracking und speichert keine personenbezogenen Daten.',
      headline: 'Datenschutz',
      lede:
        'Kurz gesagt: Diese Website setzt keine Cookies, verwendet kein Tracking, bindet keine externen Dienste ein und speichert keine personenbezogenen Daten.',
      todo:
        'Vor der Veröffentlichung prüfen: Hosting-Anbieter und dessen Server-Logs im Abschnitt „Hosting“ konkret benennen.',
      blocks: [
        {
          title: 'Verantwortlich',
          lines: ['Stefan Marco Schneider, Wien — erreichbar unter stefan@recursive.work.'],
        },
        {
          title: 'Keine Cookies, kein Tracking',
          lines: [
            'Diese Website setzt keine Cookies und verwendet keine Analyse- oder Tracking-Werkzeuge. Es findet keine Profilbildung statt.',
          ],
        },
        {
          title: 'Keine externen Ressourcen',
          lines: [
            'Schriften, Bilder und Skripte werden ausschließlich vom eigenen Server geladen. Insbesondere werden keine Schriften von Google Fonts oder ähnlichen Diensten nachgeladen, sodass beim Aufruf der Seite keine Verbindung zu Dritten entsteht.',
          ],
        },
        {
          title: 'Kontaktformular',
          lines: [
            'Das Formular auf der Kontaktseite überträgt nichts an diese Website. Es stellt aus deinen Eingaben lediglich im Browser eine E-Mail zusammen und öffnet damit dein eigenes E-Mail-Programm. Erst wenn du dort auf „Senden“ klickst, werden die Angaben übermittelt — über deinen eigenen E-Mail-Anbieter.',
            'Per E-Mail übermittelte Angaben werden ausschließlich zur Bearbeitung der Anfrage verwendet und nicht an Dritte weitergegeben.',
          ],
        },
        {
          title: 'Hosting',
          lines: [
            'Die Seite wird als statische Website bei [Hosting-Anbieter] gehostet. Beim Abruf können technisch bedingt Server-Logs (IP-Adresse, Zeitpunkt, abgerufene Datei) anfallen, die der Betriebssicherheit dienen und nach kurzer Zeit gelöscht werden.',
          ],
        },
        {
          title: 'Deine Rechte',
          lines: [
            'Dir stehen die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch zu. Wende dich dafür formlos an stefan@recursive.work.',
            'Beschwerdebehörde ist die Österreichische Datenschutzbehörde, Barichgasse 40–42, 1030 Wien.',
          ],
        },
      ],
    },
  },

  common: {
    faqIntro: 'Direkte Antworten auf die Fragen, die am häufigsten kommen.',
    backToTop: 'Nach oben',
    externalLink: 'Öffnet in neuem Tab',
    status: 'Status',
    price: 'Beitrag',
    format: 'Format',
    forWhom: 'Für wen',
    moreOn: 'Mehr dazu',
    allOfferings: 'Alle Angebote ansehen',
  },
} ;
