export const exercise0Data = [
  // Theory Questions
  {
    id: 51,
    sentence: "Which case answers the question 'Wer?' or 'Was?' (Who/What)? ___",
    options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'],
    correctAnswer: ['Nominativ'],
    explanation: 'Nominativ is used for the subject of the sentence, which is found by asking "Wer?" (Who?) or "Was?" (What?).',
    hint: 'Think about the subject of a sentence.',
    translation: ''
  },
  {
    id: 52,
    sentence: "Which case answers the question 'Wen?' or 'Was?' (Whom/What)? ___",
    options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'],
    correctAnswer: ['Akkusativ'],
    explanation: 'Akkusativ is used for the direct object of the sentence, which is found by asking "Wen?" (Whom?) or "Was?" (What?).',
    hint: 'Think about the direct object of a sentence.',
    translation: ''
  },
  {
    id: 53,
    sentence: "The subject of the sentence is always in the ___ case.",
    options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'],
    correctAnswer: ['Nominativ'],
    explanation: 'The subject, the doer of the action, is always in the Nominativ case.',
    hint: 'Who or what is doing the action?',
    translation: ''
  },
  {
    id: 54,
    sentence: "The direct object of the sentence is always in the ___ case.",
    options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'],
    correctAnswer: ['Akkusativ'],
    explanation: 'The direct object, which receives the action, is always in the Akkusativ case.',
    hint: 'Who or what is receiving the action?',
    translation: ''
  },
  {
    id: 55,
    sentence: "Which is the only article gender that changes its form in the Akkusativ case? ___",
    options: ['Masculine', 'Feminine', 'Neutral', 'Plural'],
    correctAnswer: ['Masculine'],
    explanation: 'Only masculine articles change in the Akkusativ (der -> den, ein -> einen, kein -> keinen).',
    hint: 'der -> den',
    translation: ''
  },
  // Masculine Practice
  {
    id: 56,
    sentence: '___ Hund schläft.',
    options: ['der', 'den', 'ein', 'einen'],
    correctAnswer: ['der', 'ein'],
    explanation: 'The subject ("Hund", masculine) is in the Nominativ case.',
    hint: 'Ask: Wer schläft? (Who is sleeping?)',
    translation: 'The/A dog is sleeping.',
    answerDetails: {
      der: '"Der Hund" means "the dog" (specific).',
      ein: '"Ein Hund" means "a dog" (non-specific).',
    }
  },
  {
    id: 57,
    sentence: 'Ich sehe ___ Hund.',
    options: ['der', 'den', 'ein', 'einen'],
    correctAnswer: ['den', 'einen'],
    explanation: 'The direct object ("Hund", masculine) is in the Akkusativ case.',
    hint: 'Ask: Wen sehe ich? (Whom do I see?)',
    translation: 'I see the/a dog.',
    answerDetails: {
      den: '"den Hund" means "the dog" (specific).',
      einen: '"einen Hund" means "a dog" (non-specific).',
    }
  },
  // Feminine Practice
  {
    id: 58,
    sentence: '___ Katze spielt.',
    options: ['die', 'der', 'eine', 'einer'],
    correctAnswer: ['die', 'eine'],
    explanation: 'The subject ("Katze", feminine) is in the Nominativ case.',
    hint: 'Ask: Wer spielt? (Who is playing?)',
    translation: 'The/A cat is playing.',
    answerDetails: {
      die: '"Die Katze" means "the cat" (specific).',
      eine: '"Eine Katze" means "a cat" (non-specific).',
    }
  },
  {
    id: 59,
    sentence: 'Er mag ___ Katze.',
    options: ['die', 'der', 'eine', 'einer'],
    correctAnswer: ['die', 'eine'],
    explanation: 'The direct object ("Katze", feminine) is in the Akkusativ case. Feminine articles do not change.',
    hint: 'Ask: Wen mag er? (Whom does he like?)',
    translation: 'He likes the/a cat.',
    answerDetails: {
      die: '"die Katze" means "the cat" (specific).',
      eine: '"eine Katze" means "a cat" (non-specific).',
    }
  },
  // Neutral Practice
  {
    id: 60,
    sentence: '___ Kind lacht.',
    options: ['das', 'den', 'ein', 'einen'],
    correctAnswer: ['das', 'ein'],
    explanation: 'The subject ("Kind", neutral) is in the Nominativ case.',
    hint: 'Ask: Wer lacht? (Who is laughing?)',
    translation: 'The/A child is laughing.',
    answerDetails: {
      das: '"Das Kind" means "the child" (specific).',
      ein: '"Ein Kind" means "a child" (non-specific).',
    }
  },
  {
    id: 61,
    sentence: 'Sie hört ___ Kind.',
    options: ['das', 'dem', 'ein', 'einem'],
    correctAnswer: ['das', 'ein'],
    explanation: 'The direct object ("Kind", neutral) is in the Akkusativ case. Neutral articles do not change.',
    hint: 'Ask: Wen hört sie? (Whom does she hear?)',
    translation: 'She hears the/a child.',
    answerDetails: {
      das: '"das Kind" means "the child" (specific).',
      ein: '"ein Kind" means "a child" (non-specific).',
    }
  },
  // Plural Practice
  {
    id: 62,
    sentence: '___ Leute tanzen.',
    options: ['die', 'den', 'der', 'das'],
    correctAnswer: ['die'],
    explanation: 'The subject ("Leute", plural) is in the Nominativ case. There is no indefinite article in plural.',
    hint: 'Ask: Wer tanzt? (Who is dancing?)',
    translation: 'The people are dancing.',
  },
  {
    id: 63,
    sentence: 'Wir treffen ___ Leute.',
    options: ['die', 'den', 'der', 'das'],
    correctAnswer: ['die'],
    explanation: 'The direct object ("Leute", plural) is in the Akkusativ case. The plural article does not change.',
    hint: 'Ask: Wen treffen wir? (Whom do we meet?)',
    translation: 'We are meeting the people.',
  },
  // Mixed Practice
  {
    id: 64,
    sentence: 'Er kauft ___ Tisch.',
    options: ['der', 'den', 'ein', 'einen'],
    correctAnswer: ['den', 'einen'],
    explanation: '"Tisch" is masculine and the direct object, so it must be Akkusativ.',
    hint: 'What is he buying?',
    translation: 'He is buying the/a table.',
    answerDetails: {
      den: '"den Tisch" means "the table" (specific).',
      einen: '"einen Tisch" means "a table" (non-specific).',
    }
  },
  {
    id: 65,
    sentence: '___ Lampe ist an.',
    options: ['die', 'der', 'eine', 'einen'],
    correctAnswer: ['die', 'eine'],
    explanation: '"Lampe" is feminine and the subject, so it must be Nominativ.',
    hint: 'What is on?',
    translation: 'The/A lamp is on.',
     answerDetails: {
      die: '"Die Lampe" means "the lamp" (specific).',
      eine: '"Eine Lampe" means "a lamp" (non-specific).',
    }
  },
  {
    id: 66,
    sentence: 'Ich lese ___ Buch.',
    options: ['das', 'dem', 'ein', 'einem'],
    correctAnswer: ['das', 'ein'],
    explanation: '"Buch" is neutral and the direct object, so it must be Akkusativ. The neutral form does not change.',
    hint: 'What am I reading?',
    translation: 'I am reading the/a book.',
    answerDetails: {
      das: '"das Buch" means "the book" (specific).',
      ein: '"ein Buch" means "a book" (non-specific).',
    }
  },
  {
    id: 67,
    sentence: '___ Auto ist schnell.',
    options: ['das', 'den', 'ein', 'einen'],
    correctAnswer: ['das', 'ein'],
    explanation: '"Auto" is neutral and the subject, so it must be Nominativ.',
    hint: 'What is fast?',
    translation: 'The/A car is fast.',
    answerDetails: {
      das: '"Das Auto" means "the car" (specific).',
      ein: '"Ein Auto" means "a car" (non-specific).',
    }
  },
  {
    id: 68,
    sentence: 'Sie hat ___ Bruder.',
    options: ['der', 'den', 'ein', 'einen'],
    correctAnswer: ['den', 'einen'],
    explanation: '"Bruder" is masculine and the direct object, so it must be Akkusativ.',
    hint: 'Whom does she have?',
    translation: 'She has a/the brother.',
    answerDetails: {
      den: '"den Bruder" means "the brother" (specific).',
      einen: '"einen Bruder" means "a brother" (non-specific).',
    }
  },
  {
    id: 69,
    sentence: 'Ich habe ___ Idee.',
    options: ['die', 'der', 'eine', 'einen'],
    correctAnswer: ['die', 'eine'],
    explanation: '"Idee" is feminine and the direct object. The feminine form does not change in Akkusativ.',
    hint: 'What do I have?',
    translation: 'I have an/the idea.',
    answerDetails: {
      die: '"die Idee" means "the idea" (specific).',
      eine: '"eine Idee" means "an idea" (non-specific).',
    }
  },
  {
    id: 70,
    sentence: 'Wir sehen ___ Film.',
    options: ['der', 'den', 'ein', 'einen'],
    correctAnswer: ['den', 'einen'],
    explanation: '"Film" is masculine and the direct object, so it must be Akkusativ.',
    hint: 'What do we see?',
    translation: 'We are watching a/the film.',
    answerDetails: {
      den: '"den Film" means "the film" (specific).',
      einen: '"einen Film" means "a film" (non-specific).',
    }
  }
];