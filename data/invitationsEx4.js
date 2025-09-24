export const invitationsEx4Data = [
  {
    id: 1,
    invitationTitle: "Antwort 1: Zusagen (Accept)",
    sentence: 'Hallo Maria,\nvielen Dank für die Einladung zu deiner Party!\nIch ___(1)___ sehr gerne. Das klingt super!\nIch freue mich schon ___(2)___, alle wiederzusehen.\nSoll ich etwas ___(3)___?\nLiebe Grüße,\nLukas',
    blanks: [
      {
        id: '1',
        options: ['komme', 'absage', 'bleibe'],
        correctAnswer: 'komme',
        explanation: '"Ich komme gerne" is a standard phrase for accepting an invitation.'
      },
      {
        id: '2',
        options: ['darauf', 'dagegen', 'damit'],
        correctAnswer: 'darauf',
        explanation: 'The fixed phrase is "sich auf etwas freuen" (to look forward to something).'
      },
      {
        id: '3',
        options: ['mitbringen', 'vergessen', 'ablehnen'],
        correctAnswer: 'mitbringen',
        explanation: '"Etwas mitbringen" (to bring something along) is a polite offer to contribute.'
      }
    ],
    comprehension: [
      { id: 'c1', question: 'Kommt Lukas zur Party?', correctAnswer: 'Ja' },
      { id: 'c2', question: 'Was bietet er an?', correctAnswer: 'Etwas mitzubringen' }
    ]
  },
  {
    id: 2,
    invitationTitle: "Antwort 2: Zusagen (Accept)",
    sentence: 'Hi Tom,\ncoole Idee mit der Grillparty! Wir sind auf jeden Fall ___(1)___.\nWir haben an dem Tag auch ___(2)___ und große Lust.\nWir können einen Salat machen, wenn du ___(3)___.\nBis dann!',
    blanks: [
      {
        id: '1',
        options: ['dabei', 'weg', 'dagegen'],
        correctAnswer: 'dabei',
        explanation: '"Dabei sein" means "to be there" or "to be in".'
      },
      {
        id: '2',
        options: ['Zeit', 'keine Zeit', 'Stress'],
        correctAnswer: 'Zeit',
        explanation: 'To accept, you must have "Zeit" (time).'
      },
      {
        id: '3',
        options: ['möchtest', 'hasst', 'kannst'],
        correctAnswer: 'möchtest',
        explanation: '"Wenn du möchtest" means "if you would like".'
      }
    ],
    comprehension: [
      { id: 'c1', question: 'Kommen sie zur Grillparty?', correctAnswer: 'Ja' },
      { id: 'c2', question: 'Was bieten sie an mitzubringen?', correctAnswer: 'Einen Salat' }
    ]
  }
];