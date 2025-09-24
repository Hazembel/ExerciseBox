export const invitationsEx5Data = [
  {
    id: 1,
    invitationTitle: "Antwort 1: Absagen (Decline)",
    sentence: 'Liebe Julia,\nvielen Dank für die nette Einladung!\nLeider ___(1)___ ich an dem Wochenende nicht, weil ich meine Großeltern besuche.\n___(2)___! Ich wäre wirklich gern gekommen.\nVielleicht klappt es ja beim nächsten ___(3)___.\nViel Spaß euch allen!',
    blanks: [
      {
        id: '1',
        options: ['kann', 'will', 'muss'],
        correctAnswer: 'kann',
        explanation: '"Leider kann ich nicht" is the standard polite phrase for "Unfortunately, I can\'t".'
      },
      {
        id: '2',
        options: ['Schade', 'Super', 'Perfekt'],
        correctAnswer: 'Schade',
        explanation: '"Schade!" (What a shame!) expresses regret.'
      },
      {
        id: '3',
        options: ['Mal', 'Tag', 'Fest'],
        correctAnswer: 'Mal',
        explanation: '"Beim nächsten Mal" means "next time".'
      }
    ],
    comprehension: [
      { id: 'c1', question: 'Kommt die Person zur Party?', correctAnswer: 'Nein' },
      { id: 'c2', question: 'Was ist der Grund?', correctAnswer: 'Sie besucht ihre Großeltern' }
    ]
  },
  {
    id: 2,
    invitationTitle: "Antwort 2: Absagen (Decline)",
    sentence: 'Hallo Max,\ndanke für die Einladung. Es tut mir sehr ___(1)___, aber ich muss dir für Freitag leider ___(2)___.\nIch habe an dem Abend schon ___(3)___ vor und kann es nicht verschieben.\nIch wünsche euch einen tollen Abend!\nLiebe Grüße',
    blanks: [
      {
        id: '1',
        options: ['leid', 'gut', 'Spaß'],
        correctAnswer: 'leid',
        explanation: '"Es tut mir leid" means "I\'m sorry".'
      },
      {
        id: '2',
        options: ['absagen', 'zusagen', 'einladen'],
        correctAnswer: 'absagen',
        explanation: '"Absagen" is the verb for "to decline" or "to cancel".'
      },
      {
        id: '3',
        options: ['etwas', 'nichts', 'alles'],
        correctAnswer: 'etwas',
        explanation: 'The phrase "etwas vorhaben" means "to have other plans".'
      }
    ],
    comprehension: [
      { id: 'c1', question: 'Kann die Person kommen?', correctAnswer: 'Nein' },
      { id: 'c2', question: 'Warum nicht?', correctAnswer: 'Sie hat schon etwas anderes vor' }
    ]
  }
];