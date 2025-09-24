export const exercise20Data = [
  {
    id: 401,
    sentenceParts: ['', ' kauft ', '.'],
    blanks: [
      { id: 1, options: ['Der Mann', 'Den Mann', 'Dem Mann'], correctAnswer: ['Der Mann'], explanation: 'Blank 1: Subject (Wer kauft?) is Nominativ masculine.' },
      { id: 2, options: ['den Kuchen', 'dem Kuchen', 'der Kuchen'], correctAnswer: ['den Kuchen'], explanation: 'Blank 2: Direct object (Was kauft er?) is Akkusativ masculine.' }
    ],
    hint: 'Nominativ subject + Akkusativ direct object.',
    translation: 'The man buys the cake.'
  },
  {
    id: 402,
    sentenceParts: ['', ' gehört ', '.'],
    blanks: [
      { id: 1, options: ['Das Auto', 'Den Auto', 'Dem Auto'], correctAnswer: ['Das Auto'], explanation: 'Blank 1: Subject (Was gehört?) is Nominativ neuter.' },
      { id: 2, options: ['der Frau', 'die Frau', 'den Frauen'], correctAnswer: ['der Frau'], explanation: 'Blank 2: The verb "gehören" takes a Dativ object. Dativ feminine is "der".' }
    ],
    hint: 'Nominativ subject + Dativ object with the verb "gehören".',
    translation: 'The car belongs to the woman.'
  },
  {
    id: 403,
    sentenceParts: ['Ich sehe ', ' mit ', '.'],
    blanks: [
      { id: 1, options: ['den Hund', 'dem Hund', 'der Hund'], correctAnswer: ['den Hund'], explanation: 'Blank 1: Direct object of "sehen" is Akkusativ masculine.' },
      { id: 2, options: ['dem Kind', 'das Kind', 'den Kindern'], correctAnswer: ['dem Kind'], explanation: 'Blank 2: The preposition "mit" takes a Dativ object. Dativ neuter is "dem".' }
    ],
    hint: 'Akkusativ direct object + Dativ object with "mit".',
    translation: 'I see the dog with the child.'
  },
  {
    id: 404,
    sentenceParts: ['', ' hilft ', '.'],
    blanks: [
      { id: 1, options: ['Die Kinder', 'Den Kindern', 'Der Kinder'], correctAnswer: ['Die Kinder'], explanation: 'Blank 1: Subject (Wer hilft?) is Nominativ plural.' },
      { id: 2, options: ['dem alten Mann', 'den alten Mann', 'der alte Mann'], correctAnswer: ['dem alten Mann'], explanation: 'Blank 2: The verb "helfen" takes a Dativ object.' }
    ],
    hint: 'Nominativ subject + Dativ object with "helfen".',
    translation: 'The children help the old man.'
  },
  {
    id: 405,
    sentenceParts: ['Durch ', ' fliegt ', '.'],
    blanks: [
      { id: 1, options: ['den Park', 'dem Park', 'der Park'], correctAnswer: ['den Park'], explanation: 'Blank 1: The preposition "durch" takes Akkusativ.' },
      { id: 2, options: ['ein Vogel', 'einen Vogel', 'einem Vogel'], correctAnswer: ['ein Vogel'], explanation: 'Blank 2: The subject (Wer fliegt?) is Nominativ.' }
    ],
    hint: 'Akkusativ prepositional object + Nominativ subject.',
    translation: 'A bird flies through the park.'
  },
  {
    id: 406,
    sentenceParts: ['Gefällt ', ' ', '?'],
    blanks: [
      { id: 1, options: ['dir', 'dich', 'du'], correctAnswer: ['dir'], explanation: 'Blank 1: "gefallen" takes a Dativ object (to whom it is pleasing).' },
      { id: 2, options: ['das neue Buch', 'dem neuen Buch', 'den neuen Buch'], correctAnswer: ['das neue Buch'], explanation: 'Blank 2: The thing being liked is the Nominativ subject.' }
    ],
    hint: 'Dativ object + Nominativ subject with "gefallen".',
    translation: 'Do you like the new book?'
  },
  {
    id: 407,
    sentenceParts: ['', ' liest ', ' vor.'],
    blanks: [
      { id: 1, options: ['Die Mutter', 'Der Mutter', 'Die Müttern'], correctAnswer: ['Die Mutter'], explanation: 'Blank 1: The subject (Wer liest vor?) is Nominativ feminine.' },
      { id: 2, options: ['eine Geschichte', 'einer Geschichte', 'einen Geschichte'], correctAnswer: ['eine Geschichte'], explanation: 'Blank 2: The direct object (Was liest sie vor?) is Akkusativ feminine.' }
    ],
    hint: 'Nominativ subject + Akkusativ direct object.',
    translation: 'The mother reads a story aloud.'
  },
  {
    id: 408,
    sentenceParts: ['Nach ', ' geht ', ' nach Hause.'],
    blanks: [
      { id: 1, options: ['dem Unterricht', 'den Unterricht', 'der Unterricht'], correctAnswer: ['dem Unterricht'], explanation: 'Blank 1: The preposition "nach" takes Dativ.' },
      { id: 2, options: ['der Schüler', 'den Schüler', 'dem Schüler'], correctAnswer: ['der Schüler'], explanation: 'Blank 2: The subject (Wer geht?) is Nominativ.' }
    ],
    hint: 'Dativ prepositional object + Nominativ subject.',
    translation: 'After the lesson, the student goes home.'
  },
  {
    id: 409,
    sentenceParts: ['Ich danke ', ' für ', '.'],
    blanks: [
      { id: 1, options: ['dem Polizisten', 'den Polizisten', 'der Polizist'], correctAnswer: ['dem Polizisten'], explanation: 'Blank 1: The verb "danken" takes a Dativ object.' },
      { id: 2, options: ['die Hilfe', 'der Hilfe', 'dem Hilfe'], correctAnswer: ['die Hilfe'], explanation: 'Blank 2: The preposition "für" takes an Akkusativ object.' }
    ],
    hint: 'Dativ object + Akkusativ object with "für".',
    translation: 'I thank the police officer for the help.'
  },
  {
    id: 410,
    sentenceParts: ['', ' folgt ', '.'],
    blanks: [
      { id: 1, options: ['Der Hund', 'Den Hund', 'Dem Hund'], correctAnswer: ['Der Hund'], explanation: 'Blank 1: The subject (Wer folgt?) is Nominativ.' },
      { id: 2, options: ['seinem Besitzer', 'seinen Besitzer', 'sein Besitzer'], correctAnswer: ['seinem Besitzer'], explanation: 'Blank 2: The verb "folgen" takes a Dativ object.' }
    ],
    hint: 'Nominativ subject + Dativ object with "folgen".',
    translation: 'The dog follows its owner.'
  },
  {
    id: 411,
    sentenceParts: ['Ohne ', ' findet ', ' nicht statt.'],
    blanks: [
      { id: 1, options: ['einen guten Grund', 'einem guten Grund', 'ein guter Grund'], correctAnswer: ['einen guten Grund'], explanation: 'Blank 1: The preposition "ohne" takes Akkusativ.' },
      { id: 2, options: ['die Besprechung', 'der Besprechung', 'den Besprechungen'], correctAnswer: ['die Besprechung'], explanation: 'Blank 2: The subject (Was findet nicht statt?) is Nominativ.' }
    ],
    hint: 'Akkusativ prepositional object + Nominativ subject.',
    translation: 'Without a good reason, the meeting will not take place.'
  },
  {
    id: 412,
    sentenceParts: ['Wir haben ', ' für ', ' gekauft.'],
    blanks: [
      { id: 1, options: ['ein Geschenk', 'einem Geschenk', 'eines Geschenks'], correctAnswer: ['ein Geschenk'], explanation: 'Blank 1: The direct object (Was haben wir gekauft?) is Akkusativ.' },
      { id: 2, options: ['den Lehrer', 'dem Lehrer', 'der Lehrer'], correctAnswer: ['den Lehrer'], explanation: 'Blank 2: The preposition "für" takes Akkusativ.' }
    ],
    hint: 'Akkusativ direct object + Akkusativ prepositional object.',
    translation: 'We bought a gift for the teacher.'
  },
  {
    id: 413,
    sentenceParts: ['', ' passt ', ' nicht.'],
    blanks: [
      { id: 1, options: ['Der Pullover', 'Den Pullover', 'Dem Pullover'], correctAnswer: ['Der Pullover'], explanation: 'Blank 1: The subject (Was passt nicht?) is Nominativ.' },
      { id: 2, options: ['dem Jungen', 'den Jungen', 'der Junge'], correctAnswer: ['dem Jungen'], explanation: 'Blank 2: The verb "passen" takes a Dativ object.' }
    ],
    hint: 'Nominativ subject + Dativ object with "passen".',
    translation: 'The sweater does not fit the boy.'
  },
  {
    id: 414,
    sentenceParts: ['Seit ', ' hat ', ' einen Bart.'],
    blanks: [
      { id: 1, options: ['einem Monat', 'einen Monat', 'ein Monat'], correctAnswer: ['einem Monat'], explanation: 'Blank 1: The preposition "seit" takes Dativ.' },
      { id: 2, options: ['der Mann', 'den Mann', 'dem Mann'], correctAnswer: ['der Mann'], explanation: 'Blank 2: The subject (Wer hat einen Bart?) is Nominativ.' }
    ],
    hint: 'Dativ prepositional object + Nominativ subject.',
    translation: 'For a month, the man has had a beard.'
  },
  {
    id: 415,
    sentenceParts: ['Gegenüber ', ' liegt ', '.'],
    blanks: [
      { id: 1, options: ['der Schule', 'die Schule', 'den Schulen'], correctAnswer: ['der Schule'], explanation: 'Blank 1: The preposition "gegenüber" takes Dativ.' },
      { id: 2, options: ['der Park', 'den Park', 'dem Park'], correctAnswer: ['der Park'], explanation: 'Blank 2: The subject (Was liegt?) is Nominativ.' }
    ],
    hint: 'Dativ prepositional object + Nominativ subject.',
    translation: 'The park is opposite the school.'
  },
  {
    id: 416,
    sentenceParts: ['', ' besucht ', ' im Krankenhaus.'],
    blanks: [
      { id: 1, options: ['Die Familie', 'Der Familie', 'Den Familien'], correctAnswer: ['Die Familie'], explanation: 'Blank 1: The subject (Wer besucht?) is Nominativ.' },
      { id: 2, options: ['ihre Oma', 'ihrer Oma', 'ihren Omas'], correctAnswer: ['ihre Oma'], explanation: 'Blank 2: The direct object (Wen besucht sie?) is Akkusativ.' }
    ],
    hint: 'Nominativ subject + Akkusativ direct object.',
    translation: 'The family visits their grandma in the hospital.'
  },
  {
    id: 417,
    sentenceParts: ['Ich vertraue ', ' bei ', '.'],
    blanks: [
      { id: 1, options: ['dem Arzt', 'den Arzt', 'der Arzt'], correctAnswer: ['dem Arzt'], explanation: 'Blank 1: The verb "vertrauen" takes a Dativ object.' },
      { id: 2, options: ['dieser Diagnose', 'diese Diagnose', 'diesen Diagnosen'], correctAnswer: ['dieser Diagnose'], explanation: 'Blank 2: The preposition "bei" takes Dativ.' }
    ],
    hint: 'Dativ object + Dativ prepositional object.',
    translation: 'I trust the doctor with this diagnosis.'
  },
  {
    id: 418,
    sentenceParts: ['', ' schmeckt ', ' gut.'],
    blanks: [
      { id: 1, options: ['Der Kaffee', 'Den Kaffee', 'Dem Kaffee'], correctAnswer: ['Der Kaffee'], explanation: 'Blank 1: The subject (Was schmeckt gut?) is Nominativ.' },
      { id: 2, options: ['den Gästen', 'die Gäste', 'dem Gast'], correctAnswer: ['den Gästen'], explanation: 'Blank 2: The verb "schmecken" takes a Dativ object.' }
    ],
    hint: 'Nominativ subject + Dativ object with "schmecken".',
    translation: 'The guests like the coffee.'
  },
  {
    id: 419,
    sentenceParts: ['Aus ', ' kommt ', '.'],
    blanks: [
      { id: 1, options: ['dem Haus', 'das Haus', 'den Häusern'], correctAnswer: ['dem Haus'], explanation: 'Blank 1: The preposition "aus" takes Dativ.' },
      { id: 2, options: ['ein lautes Geräusch', 'einem lauten Geräusch', 'eines lauten Geräuschs'], correctAnswer: ['ein lautes Geräusch'], explanation: 'Blank 2: The subject (Was kommt?) is Nominativ.' }
    ],
    hint: 'Dativ prepositional object + Nominativ subject.',
    translation: 'A loud noise is coming from the house.'
  },
  {
    id: 420,
    sentenceParts: ['Für ', ' ist ', ' eine Überraschung.'],
    blanks: [
      { id: 1, options: ['den Jungen', 'dem Jungen', 'der Junge'], correctAnswer: ['den Jungen'], explanation: 'Blank 1: The preposition "für" takes Akkusativ.' },
      { id: 2, options: ['das Geschenk', 'dem Geschenk', 'des Geschenks'], correctAnswer: ['das Geschenk'], explanation: 'Blank 2: The subject (Was ist eine Überraschung?) is Nominativ.' }
    ],
    hint: 'Akkusativ prepositional object + Nominativ subject.',
    translation: 'For the boy, the gift is a surprise.'
  }
]
