export const invitationsEx3Data = [
  {
    id: 1063,
    invitationTitle: "Einladung 1: Geburtstagsfeier",
    sentence: 'Liebe Freunde,\nich ___(1)___ euch zu meiner Geburtstagsfeier ein.\nDie Party ist am Samstag ___(2)___ 18 Uhr.\nWir feiern ___(3)___ meinem Haus.\nBitte bringt gute Laune mit!',
    blanks: [
      {
        id: '1',
        options: ['lade', 'esse', 'tanze'],
        correctAnswer: 'lade',
        explanation: '"Ich lade ... ein" is how you say "I invite...".'
      },
      {
        id: '2',
        options: ['um', 'am', 'im'],
        correctAnswer: 'um',
        explanation: 'For specific times, the correct preposition is "um".'
      },
      {
        id: '3',
        options: ['in', 'auf', 'bei'],
        correctAnswer: 'in',
        explanation: 'To celebrate inside your house, use "in meinem Haus". "Bei" is also possible for "at my place".'
      }
    ],
    comprehension: [
      { id: 'c1', question: 'Welches Fest?', correctAnswer: 'Eine Geburtstagsfeier' },
      { id: 'c2', question: 'Wer lädt ein?', correctAnswer: 'Ich' },
      { id: 'c3', question: 'Wann?', correctAnswer: 'Samstag um 18 Uhr' },
      { id: 'c4', question: 'Wo?', correctAnswer: 'In meinem Haus' },
      { id: 'c5', question: 'Wen lädt die Person ein?', correctAnswer: 'Freunde' }
    ]
  },
  {
    id: 1064,
    invitationTitle: "Einladung 2: Hochzeit",
    sentence: 'Hallo,\nwir ___(1)___ unsere Hochzeit am 20. Juni.\nDie Feier ist ___(2)___ Restaurant „Sonne“.\nKönnt ihr ___(3)___ kommen? Wir würden uns freuen!',
    blanks: [
      {
        id: '1',
        options: ['feiern', 'wünschen', 'fotografieren'],
        correctAnswer: 'feiern',
        explanation: '"feiern" means "to celebrate".'
      },
      {
        id: '2',
        options: ['im', 'nach', 'zu'],
        correctAnswer: 'im',
        explanation: 'For locations like restaurants, "im" (in dem) is used.'
      },
      {
        id: '3',
        options: ['bitte', 'nicht', 'kein'],
        correctAnswer: 'bitte',
        explanation: '"bitte" (please) makes the question polite.'
      }
    ],
    comprehension: [
      { id: 'c1', question: 'Welches Fest?', correctAnswer: 'Eine Hochzeit' },
      { id: 'c2', question: 'Wer lädt ein?', correctAnswer: 'Wir' },
      { id: 'c3', question: 'Wann?', correctAnswer: 'Am 20. Juni' },
      { id: 'c4', question: 'Wo?', correctAnswer: 'Im Restaurant "Sonne"' },
      { id: 'c5', question: 'Wen laden sie ein?', correctAnswer: 'Dich/Euch' }
    ]
  },
  {
    id: 1065,
    invitationTitle: "Einladung 3: Weihnachtsfeier",
    sentence: 'Liebe Kollegen,\nich möchte euch zu unserer Weihnachtsfeier ___(1)___ .\nDie Feier ist am Freitag ___(2)___ 19 Uhr.\nWir essen, trinken und ___(3)___ zusammen.',
    blanks: [
      {
        id: '1',
        options: ['einladen', 'einkaufen', 'schenken'],
        correctAnswer: 'einladen',
        explanation: 'After a modal verb (möchte), the main verb "einladen" (to invite) goes to the end in its infinitive form.'
      },
      {
        id: '2',
        options: ['um', 'im', 'am'],
        correctAnswer: 'um',
        explanation: 'For specific times, use "um".'
      },
      {
        id: '3',
        options: ['tanzen', 'kaufen', 'fotografieren'],
        correctAnswer: 'tanzen',
        explanation: '"tanzen" (to dance) is a common party activity.'
      }
    ],
    comprehension: [
      { id: 'c1', question: 'Welches Fest?', correctAnswer: 'Eine Weihnachtsfeier' },
      { id: 'c2', question: 'Wer lädt ein?', correctAnswer: 'Ich' },
      { id: 'c3', question: 'Wann?', correctAnswer: 'Freitag um 19 Uhr' },
      { id: 'c4', question: 'Wo?', correctAnswer: 'Nicht spezifiziert' },
      { id: 'c5', question: 'Wen lädt die Person ein?', correctAnswer: 'Kollegen' }
    ]
  },
  {
    id: 1066,
    invitationTitle: "Einladung 4: Grillparty",
    sentence: 'Hallo,\nam Sonntag machen wir eine ___(1)___ im Garten.\nJeder kann etwas zu essen ___(2)___ .\nBitte sagt mir ___(3)___, ob ihr kommt.',
    blanks: [
      {
        id: '1',
        options: ['Grillparty', 'Geburtstag', 'Hochzeit'],
        correctAnswer: 'Grillparty',
        explanation: 'A party in the garden is likely a "Grillparty" (barbecue).'
      },
      {
        id: '2',
        options: ['mitbringen', 'fotografieren', 'wünschen'],
        correctAnswer: 'mitbringen',
        explanation: '"mitbringen" means "to bring along", which fits a potluck-style party.'
      },
      {
        id: '3',
        options: ['Bescheid', 'Haus', 'Geschenk'],
        correctAnswer: 'Bescheid',
        explanation: 'The phrase "Bescheid sagen" means "to let someone know" / "RSVP".'
      }
    ],
    comprehension: [
      { id: 'c1', question: 'Welches Fest?', correctAnswer: 'Eine Grillparty' },
      { id: 'c2', question: 'Wer lädt ein?', correctAnswer: 'Wir' },
      { id: 'c3', question: 'Wann?', correctAnswer: 'Am Sonntag' },
      { id: 'c4', question: 'Wo?', correctAnswer: 'Im Garten' },
      { id: 'c5', question: 'Wen laden sie ein?', correctAnswer: 'Dich/Euch' }
    ]
  },
    {
    id: 1067,
    invitationTitle: "Einladung 5: Klassentreffen",
    sentence: 'Liebe ehemalige Mitschüler,\nkaum zu glauben, aber unser Schulabschluss ist schon 10 Jahre her! Das ___(1)___ wir feiern.\nIch möchte ___(2)___ herzlich zu einem Klassentreffen einladen.\nWir treffen uns am Samstag, den 15. Juli, ___(3)___ 19 Uhr im Restaurant "Alte Schule".\nEs wäre toll, viele von euch wiederzusehen und in Erinnerungen zu ___(4)___.\nBitte gebt mir bis zum 1. Juli ___(5)___, ob ihr kommt.\nViele Grüße,\nAlex',
    blanks: [
      {
        id: '1',
        options: ['müssen', 'wollen', 'dürfen'],
        correctAnswer: 'müssen',
        explanation: '"Das müssen wir feiern" means "We have to celebrate that!".'
      },
      {
        id: '2',
        options: ['euch', 'sie', 'wir'],
        correctAnswer: 'euch',
        explanation: 'The invitation is addressed to "you all" (euch).'
      },
      {
        id: '3',
        options: ['um', 'am', 'in'],
        correctAnswer: 'um',
        explanation: 'For specific times, use "um".'
      },
      {
        id: '4',
        options: ['schwelgen', 'tanzen', 'essen'],
        correctAnswer: 'schwelgen',
        explanation: '"In Erinnerungen schwelgen" is a set phrase meaning "to reminisce".'
      },
      {
        id: '5',
        options: ['Bescheid', 'eine Antwort', 'Geld'],
        correctAnswer: 'Bescheid',
        explanation: '"Bescheid geben" is a common way to say "let me know".'
      }
    ],
    comprehension: [
      { id: 'c1', question: 'Welches Fest?', correctAnswer: 'Ein Klassentreffen' },
      { id: 'c2', question: 'Wer lädt ein?', correctAnswer: 'Alex' },
      { id: 'c3', question: 'Wann?', correctAnswer: 'Samstag, 15. Juli, um 19 Uhr' },
      { id: 'c4', question: 'Wo?', correctAnswer: 'Im Restaurant "Alte Schule"' },
      { id: 'c5', question: 'Wen lädt die Person ein?', correctAnswer: 'Ehemalige Mitschüler' }
    ]
  },
  {
    id: 1068,
    invitationTitle: "Einladung 6: Einweihungsparty",
    sentence: 'Hallo zusammen,\nwir sind endlich in unsere neue Wohnung ___(1)___!\nDas möchten wir gerne mit euch feiern und laden euch herzlich zu unserer ___(2)___ am Freitag, den 5. August, ab 20 Uhr ein.\nUnsere neue Adresse ist die Musterstraße 123.\nFür Getränke und kleine Snacks ist ___(3)___.\nWir freuen uns riesig ___(4)___ euch!\nSagt uns bitte kurz Bescheid, ob ihr ___(5)___ könnt.\nLiebe Grüße,\nAnna & Tom',
    blanks: [
      {
        id: '1',
        options: ['umgezogen', 'eingezogen', 'gezogen'],
        correctAnswer: 'eingezogen',
        explanation: '"einziehen" means to move in. "umziehen" means to move (from one place to another).'
      },
      {
        id: '2',
        options: ['Einweihungsparty', 'Hochzeit', 'Geburtstagsparty'],
        correctAnswer: 'Einweihungsparty',
        explanation: 'A party to celebrate a new home is an "Einweihungsparty" (housewarming party).'
      },
      {
        id: '3',
        options: ['gesorgt', 'gemacht', 'gekauft'],
        correctAnswer: 'gesorgt',
        explanation: '"Für etwas ist gesorgt" is a passive phrase meaning "Something is provided for".'
      },
      {
        id: '4',
        options: ['auf', 'mit', 'für'],
        correctAnswer: 'auf',
        explanation: 'The expression "sich freuen auf" means "to look forward to".'
      },
      {
        id: '5',
        options: ['kommen', 'seid', 'habt'],
        correctAnswer: 'kommen',
        explanation: 'After the modal verb "könnt", the main verb "kommen" is needed in its infinitive form.'
      }
    ],
    comprehension: [
      { id: 'c1', question: 'Welches Fest?', correctAnswer: 'Eine Einweihungsparty' },
      { id: 'c2', question: 'Wer lädt ein?', correctAnswer: 'Anna & Tom' },
      { id: 'c3', question: 'Wann?', correctAnswer: 'Freitag, 5. August, ab 20 Uhr' },
      { id: 'c4', question: 'Wo?', correctAnswer: 'Musterstraße 123' },
      { id: 'c5', question: 'Wen laden sie ein?', correctAnswer: 'Freunde/Zusammen' }
    ]
  }
];
