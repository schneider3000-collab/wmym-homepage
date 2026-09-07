import type { SiteContent } from './types';

export const en: SiteContent = {
  locale: 'en',
  htmlLang: 'en',
  localeName: 'English',
  otherLocale: 'de',
  otherLocaleName: 'Deutsch',
  otherLocaleLabel: 'Auf Deutsch ansehen',

  routes: {
    home: '/en',
    offerings: '/en/offerings',
    method: '/en/method',
    research: '/en/research',
    about: '/en/about',
    contact: '/en/contact',
    imprint: '/en/imprint',
    privacy: '/en/privacy',
  },

  brand: {
    name: 'whatmakesyoumove',
    claim: 'What moves you.',
    owner: 'Stefan M. Schneider',
    role: 'Feldenkrais practice and movement research, Vienna.',
    email: 'stefan@recursive.work',
    city: 'Vienna',
  },

  nav: {
    offerings: 'Offerings',
    method: 'Method',
    research: 'Research',
    about: 'About',
    contact: 'Contact',
    menu: 'Menu',
    close: 'Close',
    skipToContent: 'Skip to content',
  },

  home: {
    title: 'Feldenkrais in Vienna — movement that starts from sensing',
    description:
      'Feldenkrais practice and movement research in Vienna. Group classes, individual sessions and workshops for people who want to move more freely, more safely and with less pain — grounded in scientific work at the University of Vienna.',
    eyebrow: 'Feldenkrais practice & movement research · Vienna',
    headline: 'What makes you move?',
    lede:
      'Feldenkrais practice and movement research for people who want to move more freely, more safely and with less pain — in Vienna, grounded in scientific work at the University of Vienna.',
    ctaPrimary: 'Request an appointment',
    ctaSecondary: 'See what I offer',
    heroImageAlt:
      'Stefan M. Schneider, Feldenkrais practitioner in Vienna, in the studio',

    programmesEyebrow: 'Three paths',
    programmesHeadline: 'Three paths, three starting points.',
    programmesLede:
      'DEEP, BALANCE and ACTIVE can all be booked — each with its own character, its own pace, its own format. Gentle, without pressure to perform, starting exactly where you are.',
    programmesCta: 'All details and prices',

    tilesHeadline: 'And beyond that',
    tiles: [
      {
        eyebrow: 'For institutes & teams',
        title: 'Workshops & professional training',
        body:
          'A scientifically grounded background on embodiment, body awareness and somatic learning — clearly presented for everyone who works with movement themselves and wants to deepen their understanding.',
        linkLabel: 'More about workshops',
        linkTo: 'offerings',
        anchor: '#workshops',
      },
      {
        eyebrow: 'University of Vienna',
        title: "Research: Parkinson's",
        body:
          "This is about more than symptoms. Parkinson's changes not only how the body moves — over time it also changes the feeling of still being fully yourself. That is exactly where my current pilot study begins.",
        linkLabel: 'About the research project',
        linkTo: 'research',
        anchor: '',
      },
    ],

    aboutEyebrow: 'In brief',
    aboutHeadline: 'Movement is my profession — from two directions at once.',
    aboutBody: [
      'I am a Feldenkrais practitioner and a cognitive scientist. This combination is rare, and it shapes how I work: practically experienced in my own body, scientifically grounded in understanding how movement, perception and learning are connected.',
      'The result is a practice that is not merely well meant, but demonstrably effective.',
    ],
    aboutCta: 'More about me',
    aboutImageAlt: 'Stefan M. Schneider in front of the University of Vienna banner',

    trustHeadline: 'In cooperation with and member of',
    trustItems: [
      { name: 'University of Vienna', href: 'https://www.univie.ac.at/' },
      { name: 'Feldenkrais Verband Österreich', href: 'https://www.feldenkrais.at/author/schneider' },
      { name: 'Parkinson Selbsthilfe Wien', href: '' },
      { name: 'Neuro9', href: 'https://neuro9.org/' },
      { name: 'HASENHERZ e. V.', href: '' },
    ],

    facts: [
      { value: '15', label: 'years of Taichi practice, several of them as a teacher' },
      { value: '100+', label: 'students accompanied through the seminar series “What makes you move”' },
      { value: '18', label: 'publications and book chapters, listed on ORCID' },
      { value: '2026', label: 'doctorate on imagination and mental imagery' },
    ],

    closingHeadline: 'The next step is simple.',
    closingBody:
      'You do not need to know exactly what Feldenkrais is to sense whether it is right for you. Just write me a few lines — together we will find out where you are and what could help.',
    closingCta: 'Get in touch',
  },

  programmes: [
    {
      id: 'deep',
      name: 'DEEP',
      tagline: 'Finding your way to rest',
      forWhom: 'For everyone who senses that the mind does not settle on its own.',
      body:
        'Our body often knows a way to rest faster than the mind can explain it — embodiment reaches deeper than thinking alone. DEEP is for everyone who wants to step out of the constant circling of thoughts and learn to wind down again, without having to force it.',
      format: 'Weekly class, online, with content developed as the series goes on.',
      price: '25 € per class · 250 € monthly block (12 classes)',
      status: 'Bookable',
      cta: 'Sign up for the next DEEP class',
      crossref: 'Looking for more drive and energy instead? Then ACTIVE may be the better first step.',
    },
    {
      id: 'balance',
      name: 'BALANCE',
      tagline: 'Steadiness and confidence in everyday life',
      forWhom:
        'For everyone looking to regain trust in their own body when standing, walking and moving between the two.',
      body:
        'Balance is not a state you reach once, but a constant series of small corrections — a skill you can practise, at any age. BALANCE starts exactly there: with the embodied sense of standing and stability, not with muscle strength alone. Whether because of unsteadiness in older age, after a knee injury, or in the context of a neurological diagnosis such as Parkinson’s.',
      format:
        "Currently running as the Parkinson's programme: short online one-to-one sessions (about 30 minutes), several times a week.",
      price: '60 € per session, incl. preparation and follow-up · 400 € monthly booking',
      status: 'Bookable',
      cta: 'Enquire about the individual programme',
      crossref:
        "A more general BALANCE group course for a wider audience is in development. Parkinson's is the starting point and remains a focus — but BALANCE is not aimed exclusively at people with Parkinson's.",
    },
    {
      id: 'active',
      name: 'ACTIVE',
      tagline: 'Rediscovering the joy of moving',
      forWhom: 'For everyone who wants to get moving again — playfully, curiously and with some verve.',
      body:
        'Sometimes the body is not tired but under-challenged. ACTIVE is the frame for playful, activating movement work — without pressure to perform, from the floor up to (if you like) standing on your head.',
      format:
        'Weekly online evening course, 90 minutes, live. Plus regular sessions in the studio of a personal trainer friend, focused on coordination.',
      price: '25 € per class · 250 € monthly block (12 classes). Studio sessions by arrangement.',
      status: 'Bookable',
      cta: 'Sign up for the online evening course',
      crossref:
        'Looking for more calm after all that activity? DEEP could be the next step. Want more steadiness first? Start with BALANCE.',
    },
  ],

  offerings: {
    title: 'Feldenkrais Vienna: group classes, individual sessions, workshops — prices',
    description:
      'Everything on offer at a glance: the DEEP, BALANCE and ACTIVE programme lines, individual sessions, workshops for institutes — with transparent prices and a free first session.',
    eyebrow: 'Offerings',
    headline: 'What I offer',
    lede:
      'Whether you are looking for a single session for yourself, want to train your team, or have a collaboration in mind: here is what I offer — and what a first step can look like.',

    programmesHeadline: 'The three programmes',
    programmesIntro:
      'The three programme lines are the primary structure of what I offer — each anchored in actual practice, not a purely theoretical construct. All of them run as an ongoing series of around twelve classes, with recordings for participants.',

    fiHeadline: 'Individual sessions — FI (Functional Integration)',
    fiStatus: 'Currently paused',
    fiBody:
      'FI is the most personal form of Feldenkrais work — hands-on, tailored precisely to you. I am still in training for it, and at the moment I also lack a suitable room. FI is therefore not bookable right now. You are welcome to leave your details without obligation, and I will get in touch as soon as FI starts.',
    fiCta: 'Register your interest',

    workshopsHeadline: 'Workshops & professional training for institutes and training academies',
    workshopsLede: 'Scientific depth for everyone who works with movement themselves.',
    workshopsBody:
      'As a cognitive scientist with my own Feldenkrais practice I bring both sides together: clearly presented background knowledge on embodiment, body awareness and somatic learning — for training academies, professional associations and teams who want to deepen their foundations without having to fight their way through the academic literature.',
    workshopsPrice: '700 € per training day',
    workshopsCta: 'Enquire about a workshop',

    firstHeadline: 'The first session is on me.',
    firstBody:
      'Free or reduced, whichever works for you. Just write me a few lines about what is on your mind — together we will find out where a good starting point lies.',
    firstCta: 'Request a first session',

    pricesHeadline: 'Prices at a glance',
    pricesNote: 'All amounts are currently taken as a voluntary donation — see the note below.',
    pricesTable: {
      colOffer: 'Offer',
      colUnit: 'Unit',
      colPrice: 'Amount',
      rows: [
        { offer: 'First session', unit: 'to get to know each other', price: 'free or reduced' },
        { offer: "BALANCE — Parkinson's programme", unit: 'online one-to-one session (approx. 30 min.)', price: '60 €' },
        { offer: "BALANCE — Parkinson's programme", unit: 'monthly booking', price: '400 €' },
        { offer: 'ACTIVE / DEEP', unit: 'single class', price: '25 €' },
        { offer: 'ACTIVE / DEEP', unit: 'monthly block (12 classes)', price: '250 €' },
        { offer: 'Individual session on site', unit: 'subject to availability', price: '80 €' },
        { offer: 'Professional training for institutes', unit: 'per day', price: '700 €' },
      ],
    },

    notesHeadline: 'Good to know',
    notes: [
      {
        title: 'Transparent: currently a voluntary donation',
        body:
          'Because my practice is still being built up and the trade licence is still being processed, for the time being I accept the amounts listed as a voluntary donation. Nothing changes for you: you receive the same quality and attention — and at the same time you support the building of this work. Once the formal side is complete, the amounts will apply as regular prices.',
      },
      {
        title: 'Accessibility',
        body:
          'Skills that help should not be available only to those who can comfortably afford them. If the cost is a hurdle for you right now, just talk to me — I will try to find a solution that works for both of us.',
      },
      {
        title: 'A Feldenkrais gift',
        body:
          'A Feldenkrais session can also be given as a present — as a voucher, for someone who could do something for themselves but perhaps does not give themselves permission to.',
      },
      {
        title: 'A word on individuality',
        body:
          'Every body, every history, every limitation is different. If you are unsure which offer suits you — just write me a few lines about what is on your mind. Together we will find out where a good starting point lies.',
      },
    ],

    faqHeadline: 'Frequently asked questions about prices and appointments',
    faq: [
      { q: 'Is there a trial session?', a: 'Yes. The first session is free or reduced — just write to me.' },
      {
        q: 'What does a session cost?',
        a: "BALANCE (Parkinson's programme) 60 € per session, 400 € per month. ACTIVE and DEEP courses 25 € per class, 250 € per monthly block (12 classes). Individual session on site 80 €. Training day for institutes 700 €.",
      },
      {
        q: 'And if I cannot afford that right now?',
        a: 'Then talk to me. Skills that help should not be available only to those who can comfortably afford them. We will find a solution that works for both of us.',
      },
      {
        q: 'Do you also offer online sessions?',
        a: "Yes. BALANCE (Parkinson's programme), the ACTIVE evening course and DEEP all run online, with no travel at all.",
      },
      {
        q: 'Can I give a session as a present?',
        a: 'Yes, as a voucher — for someone who could do something for themselves but perhaps does not give themselves permission to.',
      },
      {
        q: 'Why are the prices described as a “donation”?',
        a: 'Because my trade registration is currently being processed. This changes nothing about the quality or scope of the sessions — once the registration is complete, the amounts will apply as regular prices.',
      },
      {
        q: 'Do I have to commit long term?',
        a: 'No. There are single sessions and monthly blocks, but no contracts and no automatic renewal.',
      },
    ],
  },

  method: {
    title: 'What is Feldenkrais? Method, effect and the two forms ATM and FI',
    description:
      'Feldenkrais is a somatic learning method: through small, consciously perceived movements the nervous system finds easier ways. The basic principle, the forms ATM and FI, where it comes from, and frequent questions.',
    eyebrow: 'Method',
    headline: 'What is Feldenkrais?',
    lede:
      'Feldenkrais is a somatic movement method — a method that works through conscious, gentle movement, not through force, stretching or correction. At its centre is not the question “Am I doing this correctly?” but “How does this feel — and could it be easier?”',

    sections: [
      {
        title: 'The basic principle',
        body: [
          'Most movement offers want to improve something by practising, repeating, strengthening. Feldenkrais takes a different path: through very small, consciously perceived movements, your nervous system itself discovers new, easier ways of moving. Not through effort, but through attention.',
          'This sounds unfamiliar at first — most people expect movement to be something you train. Feldenkrais starts with learning instead: the body changes when the nervous system recognises a new possibility, not when an old movement pattern is repeated with force.',
        ],
      },
      {
        title: 'Where the method comes from',
        body: [
          'The method was developed by Moshe Feldenkrais (1904–1984), a physicist and judoka who took his own knee injuries as a starting point to investigate how closely movement, perception and learning are connected.',
          'For decades the method has been passed on worldwide in recognised, multi-year training programmes — my own training follows this standard.',
        ],
      },
      {
        title: 'A different understanding of health',
        body: [
          'Health is often understood as the absence of illness. But many people who are medically considered cured still do not really return to their lives.',
          'A different, more helpful thought: health is the ability to lose your balance — through illness, through a diagnosis, through a life crisis — and to find a way back to your own equilibrium. Not the absence of upheaval, but the ability to deal with it. This is exactly where Feldenkrais begins: not with the question “What is missing?” but with the question “What can I still sense right now, and how do I find a way from there?”',
        ],
      },
      {
        title: 'Why it works',
        body: [
          'This is also the question that occupies me as a scientist: why does something change when you only perceive consciously, without training?',
          "That is precisely what I investigate in my research — currently among others with people with Parkinson's, where this principle can achieve a great deal. Embodiment reaches deeper than thinking alone: the nervous system learns through experience, not through insight.",
        ],
      },
    ],

    formsHeadline: 'Two forms — ATM and FI',
    forms: [
      {
        abbr: 'ATM',
        name: 'Awareness Through Movement',
        body:
          'Guided group or individual lessons with spoken instructions. You move yourself, slowly and attentively, while a voice leads you through a movement sequence. No demonstration, no right or wrong — only your own, changing perception.',
        status: 'I offer this regularly',
      },
      {
        abbr: 'FI',
        name: 'Functional Integration',
        body:
          'The most individual form: a one-to-one lesson in which I work with my hands to help you sense new movement possibilities you have not yet found yourself. Gentle, never manipulative — more a dialogue through touch than a treatment.',
        status: 'Training ongoing, currently paused',
      },
    ],

    forWhomHeadline: 'Who it is suitable for',
    forWhomBody:
      'Feldenkrais is suitable for almost any body and any age — precisely because nothing is forced. Common starting points:',
    forWhomList: [
      'chronic pain and recurring tension',
      'restricted movement after an injury or an operation',
      'the feeling of being stiff, or no longer quite at home in your own body',
      'unsteadiness when walking, fear of falling, declining balance',
      "neurological conditions such as Parkinson's",
      'simply the wish to move more alert, more lightly and more expressively',
    ],

    glossaryHeadline: 'A short glossary',
    glossaryIntro: 'Terms that come up again and again in classes and texts.',
    glossary: [
      { term: 'Somatic', def: 'From the body, experienced from within — as opposed to looking at the body from outside.' },
      { term: 'Embodiment', def: 'The insight that thinking, feeling and perceiving do not happen only in the head, but throughout the whole moving body.' },
      { term: 'Proprioception', def: 'The inner sense of the position, tension and movement of your own body — the basis of every Feldenkrais lesson.' },
      { term: 'ATM', def: 'Awareness Through Movement: a verbally guided lesson in which you move yourself.' },
      { term: 'FI', def: 'Functional Integration: a one-to-one lesson working through gentle touch with the hands.' },
      { term: 'Rehabituation', def: 'Not drilling old movement habits further, but questioning them, letting them go and reorganising them.' },
      { term: 'Ideokinesis', def: 'Working purely through inner images to change posture and coordination — closely related to my research on mental imagery.' },
    ],

    faqHeadline: 'Frequently asked questions about the method',
    faq: [
      {
        q: 'Is Feldenkrais a therapy?',
        a: 'No. Feldenkrais is a learning method, not a treatment. Nothing is corrected and nothing is treated — you make movement experiences yourself, from which your nervous system derives new possibilities. Anyone who needs medical treatment will find it with doctors and therapists. Feldenkrais can stand alongside it, not in its place.',
      },
      {
        q: 'What is the difference between Feldenkrais and physiotherapy or yoga?',
        a: 'Physiotherapy works on a function that is to be restored. Yoga works with postures that are taken up and held. Feldenkrais works with attention: very small, slow movements, without a goal and without a model, until an easier way shows itself. Nothing is practised, something is learned.',
      },
      {
        q: 'Do I have to be flexible or athletic?',
        a: 'No. Precisely because nothing is forced, the method suits almost any body and any age. You move at your own pace and within your own range, without comparison to others in the room.',
      },
      {
        q: 'What is the difference between ATM and FI?',
        a: 'ATM (Awareness Through Movement) are guided lessons with spoken instructions — you move yourself. FI (Functional Integration) is a one-to-one lesson in which hands are used to make movement possibilities perceptible that you have not yet found yourself. Current status: I offer ATM regularly, FI is still part of my training.',
      },
      {
        q: 'What do I need for a lesson?',
        a: 'Comfortable, warm clothing and a mat. Nothing more. For online lessons additionally a space on the floor and a camera that can see you.',
      },
      {
        q: 'How often do I have to come before something changes?',
        a: 'Many people notice a difference after a single lesson — usually not as a big change, but as ease in a place where there was effort before. Whether something lasting comes of it shows over several lessons. That is why there are block prices and no contracts.',
      },
    ],
  },

  research: {
    title: "Feldenkrais and Parkinson's — research project at the University of Vienna",
    description:
      "Pilot study at the University of Vienna: a four-week Feldenkrais-based movement programme for people with Parkinson's, developed together with those affected and accompanied by a documentary film.",
    eyebrow: 'Research · University of Vienna',
    headline: 'Movement that gives back what illness takes',
    lede:
      'As a cognitive scientist at the University of Vienna and as a Feldenkrais practitioner I move between two worlds that are rarely thought of together: the scientific question of how body and self are connected — and the practical work of accompanying people in sensing this connection again.',
    heroImageAlt: 'Stefan M. Schneider in front of the University of Vienna banner',

    projectEyebrow: 'Current project',
    projectTitle: "Parkinson's — Moving the Conversation",
    projectBody: [
      "Parkinson's is the fastest growing neurological condition worldwide and remains incurable. Medication and surgery can slow its course — but they do not reach everything the illness takes. Because Parkinson's changes not only movement, breath, facial expression and voice. Over time something quieter changes too: the feeling of still being fully present, still fully oneself. Many people affected describe this as a kind of inner estrangement — it is not only the body that narrows, but the sense of self.",
      "This is exactly where our project begins. Together with an interdisciplinary team — psychologists, cognitive scientists, Feldenkrais teachers, filmmakers and, most centrally, people with Parkinson's themselves — we are developing a four-week movement programme based on the Feldenkrais Method. The approach: not correction, not effort, but fine perception, discovery and reconnection with one's own body.",
      "My starting assumption: most complementary therapies aim to maintain physical function. The programme I am co-developing in the team aims at something that is often overlooked — the lived sense of body and self that Parkinson's quietly undermines. Those who regain their body awareness and expressiveness often gain more than fewer symptoms: the experience of being more fully themselves again.",
      "A documentary film project accompanies the entire process — it records not only what happens, but how it feels. The film will later be shown publicly and opens a conversation between participants, the Parkinson's community, professionals and a wider public.",
    ],

    teamHeadline: 'The team',
    teamIntro:
      "The project is created by an interdisciplinary team at the University of Vienna: psychology, cognitive science, philosophy and artistic research work together with people with Parkinson's.",
    teamImageAlt: 'From the interdisciplinary team around the pilot study',
    team: [
      { name: 'Matthew Pelowski', role: 'Psychology · project lead' },
      { name: 'Bence Szaszkó', role: 'Psychology' },
      { name: 'Stefan M. Schneider', role: 'Cognitive science' },
      { name: 'Blanca Spee', role: 'Psychology' },
      { name: 'Thieme Stap', role: 'Philosophy' },
      { name: 'Ruth Anderwald', role: 'Artistic research' },
      { name: 'Leonhard Grond', role: 'Artistic research' },
    ],
    funding: 'Funded by Seed Funding of the University of Vienna, 2026.',

    relevanceHeadline: 'Why this might be relevant for you',
    relevance: [
      {
        who: 'If you are affected yourself, or a family member',
        body:
          'This project is not created about the people it concerns, but with them — as equal partners in the research process, not merely as participants.',
      },
      {
        who: 'If you work in healthcare',
        body:
          'The aim is a scientifically tested, Feldenkrais-based programme that can be integrated into existing treatment with comparatively little effort and without elaborate infrastructure — as a cost-effective addition that places dignity, expressiveness and a sense of self at its centre.',
      },
      {
        who: 'If you do research yourself',
        body:
          'Embodied cognition, movement science, participatory research: I welcome exchange and collaboration. The project is deliberately small and dialogue-oriented, as the basis for a larger, internationally comparative follow-up study.',
      },
    ],

    nextHeadline: 'What happens next',
    nextBody:
      'This pilot project is the first step. Next: larger groups, several development cycles, a more comprehensive scientific evaluation — and comparison with other approaches such as physiotherapy, dance, theatre or arts-based therapies. In the long term I am particularly interested in whether the model can be transferred to other neurodegenerative conditions.',

    focusHeadline: 'My research focus',
    focus: [
      'embodiment and enactive cognitive science',
      'body awareness and body consciousness',
      'imagination and mental imagery',
      'somatic movement learning',
      'phenomenology and first-person methods',
      'creativity research and artistic research',
    ],

    linksHeadline: 'References',
    links: [
      {
        label: 'Official project entry, Forschungsverbund Gesundheit in Gesellschaft, University of Vienna',
        href: 'https://gig.univie.ac.at/forschung/projekte/projekt-details/parkinsons-moving-the-conversation',
      },
      { label: 'ORCID profile', href: 'https://orcid.org/0000-0002-0724-8282' },
      { label: "Neuro9 — Feldenkrais online for Parkinson's", href: 'https://neuro9.org/' },
    ],

    bridgeHeadline: 'Did you arrive here through the study?',
    bridgeBody:
      'I also offer the programme developed in the study outside of it — as short online one-to-one sessions, several times a week, with no travel.',
    bridgeCta: "See the Parkinson's programme",

    faqHeadline: "Frequently asked questions about the Parkinson's programme",
    faq: [
      {
        q: "Can Feldenkrais have an effect with Parkinson's?",
        a: 'That is exactly what we are investigating. The starting consideration: most complementary offers aim to maintain physical function. Our programme addresses something less often considered — the lived sense of body and self. Whether and how strongly this works is the subject of the ongoing pilot study. Robust statements will only be possible after the evaluation.',
      },
      {
        q: 'Is the programme a treatment or a replacement for medication?',
        a: 'No, explicitly not. The programme replaces neither medical treatment nor medication. It is a movement and perception practice that stands alongside them.',
      },
      {
        q: 'Do I have to take part in the study to do the programme?',
        a: 'No. I also offer the programme developed in the study independently of it — as short online one-to-one sessions, several times a week, with no travel.',
      },
      {
        q: 'What does an online one-to-one session look like?',
        a: 'About 30 minutes, several times a week, at your home. You lie or sit, I guide you through a movement sequence. No travel, no preparation, no pressure to perform.',
      },
      {
        q: 'I am a family member — can I join in?',
        a: 'Talk to me. The project is explicitly created with the people it concerns, not about them.',
      },
      {
        q: 'I work in healthcare. Is there material for professionals?',
        a: 'Yes. The official project entry of the University of Vienna is linked, and for collaborations and professional exchange you can reach me directly through the contact form.',
      },
    ],
  },

  about: {
    title: 'Stefan M. Schneider — Feldenkrais practitioner and cognitive scientist, Vienna',
    description:
      'Feldenkrais practitioner, cognitive scientist at the University of Vienna, certified Taichi teacher and graduate of the Kunstakademie Düsseldorf. Background, publications and the story behind “What makes you move”.',
    eyebrow: 'Vienna · University of Vienna',
    headline: 'About me',
    lede:
      'I am a Feldenkrais practitioner and a cognitive scientist — two paths that have belonged together for me for a long time.',
    portraitAlt: 'Stefan M. Schneider, Feldenkrais practitioner in Vienna, in the studio',

    meta: [
      { label: 'Role', value: 'Feldenkrais practice and movement research' },
      { label: 'Institution', value: 'University of Vienna' },
      { label: 'Focus', value: 'Embodiment · somatic learning · mental imagery' },
      { label: 'ORCID', value: '0000-0002-0724-8282' },
    ],

    whoHeadline: 'Who I am',
    whoBody: [
      "I am concerned with the question of how body, perception and consciousness are connected — practically as a Feldenkrais and Taichi teacher, scientifically as a cognitive scientist at the University of Vienna. My doctoral thesis is devoted to imagination and how it is anchored in the body; alongside that I accompany people in practice in sensing precisely this connection again — currently with a particular focus on neurodegenerative conditions such as Parkinson's.",
      'This dual perspective matters to me: I do not only talk about movement, I stand in the middle of it myself every day.',
    ],

    storyHeadline: 'My own movement history',
    storyBody: [
      'My movement history does not begin with dance training, but with a knee. From the age of fifteen it dislocated several times a year; at 22 I could barely walk for the pain. A misalignment was corrected surgically, followed by more than twenty years of physiotherapy and strength training — and the same experience again and again, that some things simply did not improve. Every step hurt a little, and the tension carried on up through the hip and spine into the neck.',
      'On top of that, at 19 I fell from a great height. The fractures healed well, but afterwards I was stiff and deeply unsure of what I was allowed to trust myself with. From those conditions I worked out, piece by piece, what was possible: swimming, Taekwondo up to competition level, gliding and hang gliding, fifteen years of Taichi in a system that cultivates the inner form very precisely.',
      'The pain in the knee only resolved at 45 — through a combination of Feldenkrais and targeted training. It turned out that the well-meant habit of guiding the knee in a straight track had allowed too little rotation. Since then every movement in that area is a pleasure. That is why I do this work: I know from my own experience what it is like to search for a way like a movement detective — and to find one.',
    ],

    timelineHeadline: 'Stages of a long apprenticeship',
    timeline: [
      {
        period: 'since 2020',
        title: 'University of Vienna',
        body:
          'Most recently Co-Principal Investigator of the FWF project “Creative Conversations with Materials” on creativity in artistic making; previously Associate Researcher in the FWF project on intercorporeal synergy practices (acro yoga, Taichi push hands, contact improvisation).',
      },
      {
        period: '2016–2022',
        title: 'International project lead, Cairo',
        body:
          'Led three consecutive, mutually building cooperation projects with Ain Shams University Cairo, including building an e-learning platform and organising student exchanges.',
      },
      {
        period: '2012–2019',
        title: 'University of Osnabrück · Institute of Cognitive Science',
        body:
          'Teaching and research in phenomenology, artificial intelligence and cognitive science — including the multi-part seminar series “What makes you move?”, which gave this site its name.',
      },
      {
        period: '2026',
        title: 'Doctorate',
        body:
          'Dissertation on imagination and mental imagery — the dynamics of embodied representation. B.Sc. and M.Sc. in Cognitive Science there as well.',
      },
      {
        period: 'ongoing',
        title: 'Feldenkrais and Taichi',
        body:
          'Certified Tai Chi Chuan teacher. In Feldenkrais training, currently holding a teaching licence for Awareness Through Movement lessons; the Functional Integration training is being completed. Field research on somatic movement practices: Feldenkrais, Gaga Dance, Taichi, Ideokinesis.',
      },
      {
        period: 'since 2001',
        title: 'Fine art',
        body: 'Diploma and master student, Kunstakademie Düsseldorf, with Georg Herold and Jan Dibbets.',
      },
    ],
    timelineStations: {
      title: 'Places',
      places: 'Düsseldorf · Osnabrück · Paris · Birmingham · Cairo · Tel Aviv · Vienna',
      body: 'Grew up and worked in these places among others, at home in Vienna for some years now.',
    },
    vitaLink: 'Full academic CV on ORCID',

    pubsHeadline: 'Publications on movement, perception and learning',
    pubsIntro:
      'My research examines what happens in perception and body when movement is guided through language — precisely what happens in every Feldenkrais lesson.',
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
        venue: 'Language Sciences, vol. 102',
        href: 'https://doi.org/10.1016/j.langsci.2024.101625',
      },
      {
        year: '2022',
        authors: 'Schneider, S. M.',
        titleText: 'Intercorporeal synergy practices — perspectives from expert interaction',
        venue: 'in: Collaborative Embodied Performance (book chapter)',
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
        venue: 'in: Selbstbeobachtung — Oswald Wieners Denkpsychologie (book chapter)',
        href: '',
      },
    ],
    pubsLink: 'Full list of publications on ORCID',

    whyHeadline: 'Why I take this path',
    whyBody: [
      'The title of this site has a story of its own: “What makes you move?” was the title of a multi-part seminar I taught at the University of Osnabrück — on conscious anticipation, the moving body, sensing and deliberate practice.',
      'The question has not let go of me since, except that today I no longer ask it only in the seminar room but in practice: what makes you move — literally and figuratively? And how do we find that out together when illness, pain or simply the routine of everyday life has buried that connection?',
      'That is why this site is not called “therapy” but “what moves you”. It is a question, not a treatment.',
    ],
    whyPull: 'The title of this site was once the title of a seminar.',

    curiosityHeadline: 'What moves me?',
    curiosityBody:
      'Curiosity. Curiosity about what is beautiful, what is new, what is enriching — about imagination, perception and the wish to express oneself. And the connection to people: the deep wish to help, and to make that interaction good for everyone involved.',

    artHeadline: 'Painting and drawing',
    artBody: [
      'Before I researched and taught movement, I drew it. I studied at the Kunstakademie Düsseldorf and still work with ink and paper today. Drawing was my first school of perceiving. Feldenkrais is the second — with the same questions, by other means.',
    ],
    artPull:
      'My painting draws on the sensation of space, movement, speed and physicality — and on the material of ink and paper.',
    artCaptionSuffix: 'ink on paper · 2023',
    artWorks: [
      { title: 'Crows in a Ginkgo Tree 1' },
      { title: 'Crows in a Ginkgo Tree 2' },
      { title: 'Krahh!' },
      { title: 'Volcanic Landscape' },
      { title: 'Rhino' },
      { title: 'Ele' },
    ],
    artNote: 'A selection of further works can be seen at the Austrian Ärztekunstverein',
    artNoteHref: 'https://www.aerztekunstverein.at/gallery-view/stefan-marco-schneider/',

    neuro9Headline: "Neuro9 — Feldenkrais online for people with Parkinson's",
    neuro9Body:
      "Together with colleagues from several countries I founded Neuro9: a cooperative that makes short, frequent online lessons accessible to people with Parkinson's.",
    neuro9Cta: 'See the project',
    neuro9Href: 'https://neuro9.org/',
  },

  contact: {
    title: 'Contact — Feldenkrais Vienna',
    description:
      'Get in touch with Stefan M. Schneider, Feldenkrais practitioner in Vienna. Enquiries about classes, workshops and research collaborations — directly by email, with no data stored.',
    eyebrow: 'Contact',
    headline: 'Contact',
    lede:
      'Whether you have a question, are looking for a session, or have a collaboration in mind — just write to me.',

    form: {
      legendAbout: 'What is it about?',
      legendYou: 'How can I reach you?',
      legendWhen: 'When suits you?',
      name: 'Name',
      email: 'Email',
      phone: 'Phone (optional)',
      topic: 'Subject',
      topics: [
        'First session / getting to know each other',
        'DEEP — finding your way to rest',
        'BALANCE — steadiness and confidence',
        "BALANCE — Parkinson's programme",
        'ACTIVE — the joy of moving',
        'Register interest in individual sessions (FI)',
        'Workshop / professional training',
        'Research collaboration',
        'Voucher',
        'Other',
      ],
      preferredTime: 'Preferred time (optional)',
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      times: ['morning', 'afternoon', 'evening'],
      message: 'Message',
      messagePlaceholder: 'What is on your mind right now? A sentence or two is plenty.',
      consent: 'I agree that my details may be used to process my enquiry.',
      submit: 'Write message',
      hint:
        'The button opens your email program with a prepared message to me. No data is stored on this page and nothing is transmitted to third parties.',
      fallbackLabel: 'Not working? Write directly to',
      required: 'Required field',
      subjectPrefix: 'Enquiry via whatmakesyoumove',
    },

    directHeadline: 'Direct',
    directNote: 'Vienna · the practice address is shared when an appointment is made',
    channelsHeadline: 'Channels',
    channels: [
      { label: 'Instagram @stef.moves', href: 'https://www.instagram.com/stef.moves/' },
      { label: 'LinkedIn', href: 'https://at.linkedin.com/in/stefan-marco-schneider' },
      { label: 'ORCID', href: 'https://orcid.org/0000-0002-0724-8282' },
    ],
    personalNote:
      'I read your enquiry personally — there is no team behind this, only me. That also means: a little patience with the reply, but a genuine response tailored to you, guaranteed.',
  },

  footer: {
    tagline: 'Feldenkrais practice and movement research, Vienna.',
    contactHeadline: 'Contact',
    legalHeadline: 'Legal',
    scienceHeadline: 'Research',
    navHeadline: 'Pages',
    science: [
      { label: 'ORCID', href: 'https://orcid.org/0000-0002-0724-8282' },
      { label: 'ResearchGate', href: 'https://www.researchgate.net/profile/Stefan-Marco-Schneider-2' },
      { label: 'University of Vienna', href: 'https://ufind.univie.ac.at/de/person.html?id=112282' },
    ],
    social: [
      { label: 'Instagram', href: 'https://www.instagram.com/stef.moves/' },
      { label: 'LinkedIn', href: 'https://at.linkedin.com/in/stefan-marco-schneider' },
    ],
    copyright: 'Stefan M. Schneider',
  },

  legal: {
    imprint: {
      title: 'Legal notice',
      description: 'Legal notice and disclosure under Section 5 ECG and Section 25 MedienG.',
      headline: 'Legal notice',
      lede: 'Information under Section 5 of the Austrian E-Commerce Act (ECG) and Section 25 of the Austrian Media Act (MedienG).',
      todo:
        'To be completed before publication: address, wording of the trade licence, competent authority and, where applicable, VAT identification number. These details are mandatory in Austria as soon as the site goes live.',
      blocks: [
        {
          title: 'Media owner and responsible for content',
          lines: ['Stefan Marco Schneider', '[street and number]', '[postcode] Vienna, Austria'],
        },
        {
          title: 'Contact',
          lines: ['stefan@recursive.work'],
        },
        {
          title: 'Business purpose',
          lines: [
            'Feldenkrais practice (Awareness Through Movement), workshops and professional training, and applied movement research.',
            'Trade registration in progress — until it is complete, amounts are accepted as a voluntary donation.',
          ],
        },
        {
          title: 'Professional title and membership',
          lines: [
            'Feldenkrais practitioner in training, holding a teaching licence for Awareness Through Movement lessons.',
            'Member of the Feldenkrais Verband Österreich.',
          ],
        },
        {
          title: 'Editorial policy',
          lines: [
            'Information about the Feldenkrais practice of Stefan M. Schneider and about his scientific work on movement, perception and somatic learning.',
          ],
        },
        {
          title: 'Liability for links',
          lines: [
            'This website contains links to external third-party websites over whose content there is no influence. No warranty is given for these external contents; the respective provider is always responsible for them.',
          ],
        },
        {
          title: 'Image credits',
          lines: [
            'Photographs and ink drawings: Stefan M. Schneider, unless stated otherwise.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy',
      description: 'Privacy policy: this website sets no cookies, uses no tracking and stores no personal data.',
      headline: 'Privacy',
      lede:
        'In short: this website sets no cookies, uses no tracking, embeds no external services and stores no personal data.',
      todo:
        'To check before publication: name the hosting provider and its server logs explicitly in the “Hosting” section.',
      blocks: [
        {
          title: 'Controller',
          lines: ['Stefan Marco Schneider, Vienna — reachable at stefan@recursive.work.'],
        },
        {
          title: 'No cookies, no tracking',
          lines: [
            'This website sets no cookies and uses no analytics or tracking tools. No profiling takes place.',
          ],
        },
        {
          title: 'No external resources',
          lines: [
            'Fonts, images and scripts are loaded exclusively from our own server. In particular, no fonts are loaded from Google Fonts or comparable services, so that no connection to third parties is established when you open the page.',
          ],
        },
        {
          title: 'Contact form',
          lines: [
            'The form on the contact page transmits nothing to this website. It merely assembles an email from your entries in your browser and opens your own email program with it. Only when you click “Send” there are the details transmitted — via your own email provider.',
            'Details submitted by email are used exclusively to process the enquiry and are not passed on to third parties.',
          ],
        },
        {
          title: 'Hosting',
          lines: [
            'The site is hosted as a static website with [hosting provider]. For technical reasons, server logs (IP address, time, file requested) may be created when the page is retrieved; these serve operational security and are deleted after a short time.',
          ],
        },
        {
          title: 'Your rights',
          lines: [
            'You have the right to information, rectification, erasure, restriction of processing, data portability and objection. To exercise them, simply write to stefan@recursive.work.',
            'The supervisory authority for complaints is the Austrian Data Protection Authority, Barichgasse 40–42, 1030 Vienna.',
          ],
        },
      ],
    },
  },

  common: {
    faqIntro: 'Direct answers to the questions that come up most often.',
    backToTop: 'Back to top',
    externalLink: 'Opens in a new tab',
    status: 'Status',
    price: 'Contribution',
    format: 'Format',
    forWhom: 'Who for',
    moreOn: 'More on this',
    allOfferings: 'See all offerings',
  },
};
