export const exercise6Data = [
  // Multi-blank questions
  {
    id: 113,
    sentenceParts: ['Der Mann kauft ', ' Blume für ', ' Frau.'],
    blanks: [
      { options: ['die', 'der', 'eine', 'einen'], correctAnswer: ['die', 'eine'], explanation: 'Blank 1: "Blume" is a feminine direct object (Akkusativ). The form is "die" or "eine".' },
      { options: ['die', 'der', 'eine', 'einen'], correctAnswer: ['die', 'eine'], explanation: 'Blank 2: The preposition "für" always takes the Akkusativ case. "Frau" is feminine, so it is "die" or "eine".' }
    ],
    hint: 'Ask "Was kauft er?" (Blume) and remember that "für" always takes Akkusativ.',
    translation: 'The man is buying a/the flower for the/a woman.'
  },
  {
    id: 114,
    sentenceParts: ['Ich sehe ', ' Hund und ', ' Katze im Garten.'],
    blanks: [
      { options: ['der', 'den', 'ein', 'einen'], correctAnswer: ['den', 'einen'], explanation: 'Blank 1: "Hund" is a masculine direct object (Akusativ), so we use "den" or "einen".' },
      { options: ['die', 'der', 'eine', 'einer'], correctAnswer: ['die', 'eine'], explanation: 'Blank 2: "Katze" is a feminine direct object (Akkusativ). The form does not change.' }
    ],
    hint: 'Ask: Wen oder was sehe ich? (Whom or what do I see?) for both objects.',
    translation: 'I see a/the dog and a/the cat in the garden.'
  },
  // FIX: Removed duplicate properties from question 115 and kept the corrected version which avoids Dativ case.
  {
    id: 115,
    sentenceParts: ['___ Kind hat ', ' Ball, den es gefunden hat.'],
    blanks: [
      { options: ['das', 'dem', 'ein', 'einem'], correctAnswer: ['das', 'ein'], explanation: 'Blank 1: "Kind" is the neutral subject of the sentence (Nominativ), so "das" or "ein" is correct.' },
      { options: ['der', 'den', 'ein', 'einen'], correctAnswer: ['den', 'einen'], explanation: 'Blank 2: "Ball" is the masculine direct object (Akkusativ) that the child has.' }
    ],
    hint: 'Ask "Wer hat den Ball?" (Kind) and "Was hat das Kind?" (Ball).',
    translation: 'The/A child has the/a ball that it found.'
  },
  {
    id: 116,
    sentenceParts: ['Wir kaufen ', ' Bücher und ', ' Stühle für das Zimmer.'],
    blanks: [
      { options: ['die', 'den', 'keine', 'keinen'], correctAnswer: ['die', 'keine'], explanation: 'Blank 1: "Bücher" is a plural direct object (Akkusativ). The form is "die" or "keine".' },
      { options: ['die', 'den', 'keine', 'keinen'], correctAnswer: ['die', 'keine'], explanation: 'Blank 2: "Stühle" is also a plural direct object (Akkusativ). The form is "die" or "keine".' }
    ],
    hint: 'Both nouns are plural direct objects of "kaufen".',
    translation: 'We are buying the/no books and the/no chairs for the room.'
  },
  {
    id: 117,
    sentenceParts: ['Ich habe ', ' Hund, aber nicht ', ' Katze.'],
    blanks: [
      { options: ['ein', 'einen', 'kein', 'keinen'], correctAnswer: ['einen'], explanation: 'Blank 1: "Hund" is a masculine direct object (Akkusativ). It must be "einen".' },
      { options: ['die', 'eine', 'keine', 'einer'], correctAnswer: ['die'], explanation: 'Blank 2: "Katze" is a feminine direct object. The sentence structure with "nicht" implies a specific cat is not owned, so "die" is best.' }
    ],
    hint: 'The first blank is a masculine direct object. The second part of the sentence uses "nicht" to negate the verb.',
    translation: 'I have a dog, but not the cat.'
  },
  // FIX: Removed duplicate properties from question 118 and kept the simplified version with two blanks instead of three.
  {
    id: 118,
    sentenceParts: ['___ Lehrer erklärt ', ' schwierige Aufgabe.'],
    blanks: [
      { options: ['der', 'den', 'ein', 'einen'], correctAnswer: ['der', 'ein'], explanation: 'Blank 1: "Lehrer" is the masculine subject (Nominativ) who is explaining.' },
      { options: ['die', 'der', 'eine', 'einen'], correctAnswer: ['die', 'eine'], explanation: 'Blank 2: "Aufgabe" is the feminine direct object (Akkusativ) that is being explained.' }
    ],
    hint: 'Ask "Wer erklärt?" (Lehrer) and "Was erklärt er?" (Aufgabe).',
    translation: 'The/A teacher explains the/a difficult task.'
  },
  {
    id: 119,
    sentenceParts: ['Wenn ', ' Mann ', ' Frau sieht, lächelt er.'],
    blanks: [
      { options: ['der', 'den', 'ein', 'einen'], correctAnswer: ['der', 'ein'], explanation: 'Blank 1: In this subordinate clause, "Mann" is the subject (Nominativ).' },
      { options: ['die', 'der', 'eine', 'einer'], correctAnswer: ['die', 'eine'], explanation: 'Blank 2: "Frau" is the direct object (Akkusativ) in the clause.' }
    ],
    hint: 'In the "wenn" clause: Who sees? (Mann). Whom does he see? (Frau).',
    translation: 'When the/a man sees the/a woman, he smiles.'
  },
  {
    id: 120,
    sentenceParts: ['Er hat ', ' Idee für ', ' Geschenk.'],
    blanks: [
      { options: ['die', 'der', 'eine', 'einer'], correctAnswer: ['die', 'eine'], explanation: 'Blank 1: "Idee" is a feminine direct object (Akkusativ).' },
      { options: ['das', 'dem', 'ein', 'einem'], correctAnswer: ['das', 'ein'], explanation: 'Blank 2: "für" always takes Akkusativ. "Geschenk" is a neutral noun.' }
    ],
    hint: '"Was hat er?" (Idee) and remember "für" + Akkusativ.',
    translation: 'He has the/an idea for the/a gift.'
  },

  // Complex single-blank questions
  {
    id: 121,
    sentence: 'Ohne ___ genauen Plan können wir das Projekt nicht starten.',
    options: ['der', 'den', 'ein', 'einen'],
    correctAnswer: ['einen'],
    explanation: 'The preposition "ohne" always takes the Akkusativ case. "Plan" is masculine, so we need "einen".',
    hint: 'Rule: "ohne" + Akkusativ.',
    translation: 'Without a precise plan, we cannot start the project.',
  },
  {
    id: 122,
    sentence: 'Durch ___ langen Tunnel fuhr der Zug langsam.',
    options: ['der', 'den', 'ein', 'einen'],
    correctAnswer: ['den'],
    explanation: 'The preposition "durch" always takes the Akkusativ case. "Tunnel" is masculine, so we need "den".',
    hint: 'Rule: "durch" + Akkusativ.',
    translation: 'The train drove slowly through the long tunnel.',
  },
  {
    id: 123,
    sentence: '___ Mann, den du gestern getroffen hast, ist mein Onkel.',
    options: ['der', 'den', 'ein', 'einen'],
    correctAnswer: ['der'],
    explanation: '"Der Mann" is the subject of the main clause ("...ist mein Onkel"). The relative clause "den du gestern getroffen hast" just describes him.',
    hint: 'Focus on the main clause: Wer ist mein Onkel? (Who is my uncle?)',
    translation: 'The man whom you met yesterday is my uncle.',
  },
  {
    id: 124,
    sentence: 'Ich finde ___ Film, den wir gesehen haben, sehr langweilig.',
    options: ['der', 'den', 'ein', 'einen'],
    correctAnswer: ['den'],
    explanation: '"Den Film" is the direct object of the verb "finde" (I find the film...).',
    hint: 'Ask: Was finde ich sehr langweilig? (What do I find very boring?)',
    translation: 'I find the film that we saw very boring.',
  },
  {
    id: 125,
    sentence: 'Für ___ neuen Job muss er nächste Woche nach Berlin ziehen.',
    options: ['der', 'den', 'ein', 'einen'],
    correctAnswer: ['den', 'einen'],
    explanation: 'The preposition "für" always takes Akkusativ. "Job" is masculine, so we use "den" or "einen".',
    hint: 'Rule: "für" + Akkusativ.',
    translation: 'For the/a new job, he has to move to Berlin next week.',
  },
  {
    id: 126,
    sentence: 'Obwohl sie müde war, hat sie ___ ganzen Bericht zu Ende geschrieben.',
    options: ['der', 'den', 'ein', 'einen'],
    correctAnswer: ['den'],
    explanation: '"Den ganzen Bericht" is the masculine direct object of the verb "hat geschrieben".',
    hint: 'Ask: Was hat sie zu Ende geschrieben? (What did she finish writing?)',
    translation: 'Although she was tired, she finished writing the whole report.',
  },
   {
    id: 127,
    sentence: 'Es gibt ___ einfachen Weg, dieses Problem zu lösen.',
    options: ['kein', 'keinen', 'ein', 'einen'],
    correctAnswer: ['keinen', 'einen'],
    explanation: 'The phrase "es gibt" always takes the Akkusativ case. "Weg" is masculine, so we use "einen" or "keinen".',
    hint: 'Rule: "es gibt" + Akkusativ.',
    translation: 'There is a/no easy way to solve this problem.',
  },
   {
    id: 128,
    sentence: 'Jeden Morgen liest mein Vater ___ Zeitung beim Frühstück.',
    options: ['die', 'der', 'eine', 'einer'],
    correctAnswer: ['die', 'eine'],
    explanation: '"Zeitung" is the feminine direct object of the verb "liest".',
    hint: 'Ask: Was liest mein Vater? (What does my father read?)',
    translation: 'Every morning my father reads the/a newspaper at breakfast.',
  },
  {
    id: 129,
    sentence: '___ Professor, dessen Buch wir lesen, hält heute einen Vortrag.',
    options: ['der', 'den', 'ein', 'einen'],
    correctAnswer: ['der'],
    explanation: '"Der Professor" is the subject of the main clause ("...hält einen Vortrag").',
    hint: 'Focus on the main clause: Wer hält einen Vortrag? (Who is giving a lecture?)',
    translation: 'The professor whose book we are reading is giving a lecture today.',
  },
  {
    id: 130,
    sentence: 'Entlang ___ Fluss gibt es einen schönen Radweg.',
    options: ['der', 'den', 'ein', 'einen'],
    correctAnswer: ['den'],
    explanation: 'The preposition "entlang" takes the Akkusativ case when it comes before the noun. "Fluss" is masculine.',
    hint: 'Rule: "entlang" (pre-position) + Akkusativ.',
    translation: 'There is a beautiful bike path along the river.',
  },
  {
    id: 131,
    sentence: 'Sie hat die Prüfung ohne ___ einzige Schwierigkeit bestanden.',
    options: ['die', 'der', 'eine', 'einer'],
    correctAnswer: ['eine'],
    explanation: '"ohne" always takes the Akkusativ. "Schwierigkeit" is feminine. The phrase "ohne eine einzige" means "without a single".',
    hint: 'Rule: "ohne" + Akkusativ.',
    translation: 'She passed the exam without a single difficulty.',
  },
  {
    id: 132,
    sentence: 'Gegen ___ Willen seiner Eltern studierte er Kunst.',
    options: ['der', 'den', 'ein', 'einen'],
    correctAnswer: ['den'],
    explanation: 'The preposition "gegen" always takes Akkusativ. "Wille" is masculine.',
    hint: 'Rule: "gegen" + Akkusativ.',
    translation: 'He studied art against the will of his parents.',
  },
];