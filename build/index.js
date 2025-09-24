import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

// All data files are inlined here
const exercise0Data = [
  {
    id: 51,
    sentence: "___ Mann liest ein Buch.",
    options: ['Der', 'Den'],
    correctAnswer: ['Der'],
    explanation: 'We need the subject of the sentence (Who is reading?). The subject is in the Nominativ case. "Der" is Nominativ masculine.',
    hint: 'Ask: Wer liest? (Who is reading?)',
    translation: 'The man is reading a book.'
  },
  {
    id: 52,
    sentence: "Ich sehe ___ Mann.",
    options: ['der', 'den'],
    correctAnswer: ['den'],
    explanation: 'We need the direct object of the verb "sehen" (Whom do I see?). The direct object is in the Akkusativ case. "den" is Akkusativ masculine.',
    hint: 'Ask: Wen sehe ich? (Whom do I see?)',
    translation: 'I see the man.'
  },
  {
    id: 53,
    sentence: "___ (she) hilft dem Kind.",
    options: ['Sie', 'Ihr'],
    correctAnswer: ['Sie'],
    explanation: 'We need the subject of the sentence. The Nominativ form for "she" is "Sie".',
    hint: 'Who is helping the child?',
    translation: 'She helps the child.'
  },
  {
    id: 54,
    sentence: "Kannst du ___ (me) bitte helfen?",
    options: ['mich', 'mir'],
    correctAnswer: ['mir'],
    explanation: 'The verb "helfen" (to help) is a special Dativ verb. It always takes the Dativ case. "mir" is the Dativ form of "ich".',
    hint: 'The verb "helfen" always takes the Dativ case.',
    translation: 'Can you please help me?'
  },
  {
    id: 55,
    sentence: "Er fragt ___ (me).",
    options: ['mich', 'mir'],
    correctAnswer: ['mich'],
    explanation: 'The verb "fragen" (to ask) takes a direct object in the Akkusativ case. "mich" is the Akkusativ form of "ich".',
    hint: 'Whom does he ask? (Wen fragt er?)',
    translation: 'He asks me.'
  },
  {
    id: 56,
    sentence: "___ gefällt das Buch?",
    options: ['Wem', 'Wen', 'Wer'],
    correctAnswer: ['Wem'],
    explanation: 'The verb "gefallen" (to be pleasing to) takes a Dativ object. We ask "To whom is the book pleasing?" with "Wem?".',
    hint: 'The verb "gefallen" takes a Dativ object.',
    translation: 'Who likes the book? (Literally: To whom is the book pleasing?)'
  },
  {
    id: 57,
    sentence: "Das Auto gehört ___ (him).",
    options: ['ihn', 'ihm'],
    correctAnswer: ['ihm'],
    explanation: 'The verb "gehören" (to belong to) is a Dativ verb. The Dativ form of "er" (he) is "ihm".',
    hint: 'The verb "gehören" always takes the Dativ case.',
    translation: 'The car belongs to him.'
  },
  {
    id: 58,
    sentence: "Wir haben ___ Hund.",
    options: ['einen', 'einem'],
    correctAnswer: ['einen'],
    explanation: 'The verb "haben" (to have) takes a direct object in the Akkusativ case. "Hund" is masculine, so we use "einen".',
    hint: 'What do we have? The direct object.',
    translation: 'We have a dog.'
  },
  {
    id: 59,
    sentence: "Ich danke ___ (you, formal).",
    options: ['Sie', 'Ihnen'],
    correctAnswer: ['Ihnen'],
    explanation: 'The verb "danken" (to thank) is a Dativ verb. The Dativ form of "Sie" (formal you) is "Ihnen".',
    hint: 'The verb "danken" always takes the Dativ case.',
    translation: 'I thank you.'
  },
  {
    id: 60,
    sentence: "___ hat den Kuchen gegessen?",
    options: ['Wer', 'Wen', 'Wem'],
    correctAnswer: ['Wer'],
    explanation: 'We are asking for the subject of the sentence (who ate the cake?). The question word for a Nominativ subject is "Wer".',
    hint: 'Ask for the subject (the doer).',
    translation: 'Who ate the cake?'
  }
];
const exercise1Data = [
  {
    id: 1,
    sentence: '___ Mann liest das Buch.',
    options: ['der', 'den', 'ein', 'einen'],
    correctAnswer: ['der', 'ein'],
    explanation: 'The subject is "Mann" (masculine), so we need the Nominativ case. Both "der" and "ein" are correct.',
    hint: 'Ask: Wer liest das Buch? (Who is reading the book?)',
    translation: 'The/A man is reading the book.',
    answerDetails: {
      der: '"Der Mann" means "the man" (a specific man).',
      ein: '"Ein Mann" means "a man" (any man).'
    }
  },
  {
    id: 2,
    sentence: 'Ich sehe ___ Mann.',
    options: ['der', 'den', 'ein', 'einen'],
    correctAnswer: ['den', 'einen'],
    explanation: 'The direct object is "Mann" (masculine), so we need the Akkusativ case. Both "den" and "einen" are correct.',
    hint: 'Ask: Wen sehe ich? (Whom do I see?)',
    translation: 'I see the/a man.',
    answerDetails: {
      den: '"den Mann" means "the man" (a specific man).',
      einen: '"einen Mann" means "a man" (any man).'
    }
  },
  {
    id: 3,
    sentence: '___ Hund bellt laut.',
    options: ['der', 'den', 'ein', 'einen'],
    correctAnswer: ['der', 'ein'],
    explanation: 'The subject is "Hund" (masculine), so we need the Nominativ case. Both "der" and "ein" are correct.',
    hint: 'Ask: Wer bellt laut? (Who is barking loudly?)',
    translation: 'The/A dog is barking loudly.',
    answerDetails: {
      der: '"Der Hund" means "the dog" (a specific dog).',
      ein: '"Ein Hund" means "a dog" (any dog).'
    }
  },
  {
    id: 4,
    sentence: 'Die Frau füttert ___ Hund.',
    options: ['der', 'den', 'ein', 'einen'],
    correctAnswer: ['den', 'einen'],
    explanation: 'The direct object is "Hund" (masculine), so we need the Akkusativ case. Both "den" and "einen" are correct.',
    hint: 'Ask: Wen füttert die Frau? (Whom is the woman feeding?)',
    translation: 'The woman is feeding the/a dog.',
    answerDetails: {
      den: '"den Hund" means "the dog" (a specific dog).',
      einen: '"einen Hund" means "a dog" (any dog).'
    }
  },
  {
    id: 5,
    sentence: '___ Lehrer erklärt die Regel.',
    options: ['der', 'den', 'ein', 'einen'],
    correctAnswer: ['der', 'ein'],
    explanation: 'The subject is "Lehrer" (masculine), so we need the Nominativ case. Both "der" and "ein" are correct.',
    hint: 'Ask: Wer erklärt die Regel? (Who is explaining the rule?)',
    translation: 'The/A teacher is explaining the rule.',
     answerDetails: {
      der: '"Der Lehrer" means "the teacher" (a specific teacher).',
      ein: '"Ein Lehrer" means "a teacher" (any teacher).'
    }
  },
  {
    id: 6,
    sentence: 'Der Schüler fragt ___ Lehrer.',
    options: ['der', 'den', 'ein', 'einen'],
    correctAnswer: ['den', 'einen'],
    explanation: 'The direct object is "Lehrer" (masculine), so we need the Akkusativ case. Both "den" and "einen" are correct.',
    hint: 'Ask: Wen fragt der Schüler? (Whom does the student ask?)',
    translation: 'The student asks the/a teacher.',
    answerDetails: {
      den: '"den Lehrer" means "the teacher" (a specific teacher).',
      einen: '"einen Lehrer" means "a teacher" (any teacher).'
    }
  },
  {
    id: 7,
    sentence: '___ Apfel ist rot.',
    options: ['der', 'den', 'ein', 'einen'],
    correctAnswer: ['der', 'ein'],
    explanation: 'The subject is "Apfel" (masculine), so we need the Nominativ case. Both "der" and "ein" are correct.',
    hint: 'Ask: Wer ist rot? (Who/what is red?)',
    translation: 'The/An apple is red.',
    answerDetails: {
      der: '"Der Apfel" means "the apple" (a specific apple).',
      ein: '"Ein Apfel" means "an apple" (any apple).'
    }
  },
  {
    id: 8,
    sentence: 'Das Kind isst ___ Apfel.',
    options: ['der', 'den', 'ein', 'einen'],
    correctAnswer: ['den', 'einen'],
    explanation: 'The direct object is "Apfel" (masculine), so we need the Akkusativ case. Both "den" and "einen" are correct.',
    hint: 'Ask: Wen oder was isst das Kind? (Whom or what is the child eating?)',
    translation: 'The child is eating the/an apple.',
    answerDetails: {
      den: '"den Apfel" means "the apple" (a specific apple).',
      einen: '"einen Apfel" means "an apple" (any apple).'
    }
  },
  {
    id: 9,
    sentence: '___ Stuhl ist alt.',
    options: ['der', 'den', 'ein', 'einen'],
    correctAnswer: ['der', 'ein'],
    explanation: 'The subject is "Stuhl" (masculine), so we need the Nominativ case. Both "der" and "ein" are correct.',
    hint: 'Ask: Wer ist alt? (Who/what is old?)',
    translation: 'The/A chair is old.',
    answerDetails: {
      der: '"Der Stuhl" means "the chair" (a specific chair).',
      ein: '"Ein Stuhl" means "a chair" (any chair).'
    }
  },
  {
    id: 10,
    sentence: 'Er kauft ___ Stuhl.',
    options: ['der', 'den', 'ein', 'einen'],
    correctAnswer: ['den', 'einen'],
    explanation: 'The direct object is "Stuhl" (masculine), so we need the Akkusativ case. Both "den" and "einen" are correct.',
    hint: 'Ask: Wen oder was kauft er? (Whom or what is he buying?)',
    translation: 'He is buying the/a chair.',
    answerDetails: {
      den: '"den Stuhl" means "the chair" (a specific chair).',
      einen: '"einen Stuhl" means "a chair" (any chair).'
    }
  },
  {
    id: 11,
    sentence: 'Dort steht ___ Mann.',
    options: ['der', 'den', 'ein', 'einen'],
    correctAnswer: ['der', 'ein'],
    explanation: 'The subject is "Mann" (masculine), so we need the Nominativ case. Both "der" and "ein" are correct.',
    hint: 'Ask: Wer steht dort? (Who is standing there?)',
    translation: 'A man is standing there.',
    answerDetails: {
      der: '"Der Mann" means "the man" (a specific man).',
      ein: '"Ein Mann" means "a man" (any man).'
    }
  },
  {
    id: 12,
    sentence: 'Ich kenne ___ Mann.',
    options: ['der', 'den', 'ein', 'einen'],
    correctAnswer: ['den', 'einen'],
    explanation: 'The direct object is "Mann" (masculine), so we need the Akkusativ case. Both "den" and "einen" are correct.',
    hint: 'Ask: Wen kenne ich? (Whom do I know?)',
    translation: 'I know a man.',
    answerDetails: {
      den: '"den Mann" means "the man" (a specific man).',
      einen: '"einen Mann" means "a man" (any man).'
    }
  },
  {
    id: 13,
    sentence: '___ Hund spielt im Garten.',
    options: ['der', 'den', 'ein', 'einen'],
    correctAnswer: ['der', 'ein'],
    explanation: 'The subject is "Hund" (masculine), so we need the Nominativ case. Both "der" and "ein" are correct.',
    hint: 'Ask: Wer spielt im Garten? (Who is playing in the garden?)',
    translation: 'A dog is playing in the garden.',
    answerDetails: {
      der: '"Der Hund" means "the dog" (a specific dog).',
      ein: '"Ein Hund" means "a dog" (any dog).'
    }
  },
  {
    id: 14,
    sentence: 'Sie hat ___ Hund.',
    options: ['der', 'den', 'ein', 'einen'],
    correctAnswer: ['den', 'einen'],
    explanation: 'The direct object is "Hund" (masculine), so we need the Akkusativ case. Both "den" and "einen" are correct.',
    hint: 'Ask: Wen oder was hat sie? (Whom or what does she have?)',
    translation: 'She has a dog.',
    answerDetails: {
      den: '"den Hund" means "the dog" (a specific dog).',
      einen: '"einen Hund" means "a dog" (any dog).'
    }
  },
  {
    id: 15,
    sentence: 'Das ist ___ Tisch.',
    options: ['der', 'den', 'ein', 'einen'],
    correctAnswer: ['der', 'ein'],
    explanation: 'After the verb "sein" (to be), we use the Nominativ case. Both "der" and "ein" are correct.',
    hint: 'The verb "sein" always takes the Nominativ case.',
    translation: 'That is a table.',
    answerDetails: {
      der: '"Der Tisch" means "the table" (a specific table).',
      ein: '"Ein Tisch" means "a table" (any table).'
    }
  },
  {
    id: 16,
    sentence: 'Wir brauchen ___ Tisch.',
    options: ['der', 'den', 'ein', 'einen'],
    correctAnswer: ['den', 'einen'],
    explanation: 'The direct object is "Tisch" (masculine), so we need the Akkusativ case. Both "den" and "einen" are correct.',
    hint: 'Ask: Wen oder was brauchen wir? (Whom or what do we need?)',
    translation: 'We need a table.',
    answerDetails: {
      den: '"den Tisch" means "the table" (a specific table).',
      einen: '"einen Tisch" means "a table" (any table).'
    }
  },
  {
    id: 17,
    sentence: '___ Freund von mir kommt heute.',
    options: ['der', 'den', 'ein', 'einen'],
    correctAnswer: ['der', 'ein'],
    explanation: 'The subject is "Freund" (masculine), so we need the Nominativ case. Both "der" and "ein" are correct.',
    hint: 'Ask: Wer kommt heute? (Who is coming today?)',
    translation: 'A friend of mine is coming today.',
    answerDetails: {
      der: '"Der Freund" means "the friend" (a specific friend).',
      ein: '"Ein Freund" means "a friend" (any friend).'
    }
  },
  {
    id: 18,
    sentence: 'Ich besuche ___ Freund.',
    options: ['der', 'den', 'ein', 'einen'],
    correctAnswer: ['den', 'einen'],
    explanation: 'The direct object is "Freund" (masculine), so we need the Akkusativ case. Both "den" and "einen" are correct.',
    hint: 'Ask: Wen besuche ich? (Whom am I visiting?)',
    translation: 'I am visiting a friend.',
    answerDetails: {
      den: '"den Freund" means "the friend" (a specific friend).',
      einen: '"einen Freund" means "a friend" (any friend).'
    }
  },
  {
    id: 19,
    sentence: 'Dort liegt ___ Stift.',
    options: ['der', 'den', 'ein', 'einen'],
    correctAnswer: ['der', 'ein'],
    explanation: 'The subject is "Stift" (masculine), so we need the Nominativ case. Both "der" and "ein" are correct.',
    hint: 'Ask: Wer liegt dort? (Who/what is lying there?)',
    translation: 'A pen is lying there.',
    answerDetails: {
      der: '"Der Stift" means "the pen" (a specific pen).',
      ein: '"Ein Stift" means "a pen" (any pen).'
    }
  },
  {
    id: 20,
    sentence: 'Ich suche ___ Stift.',
    options: ['der', 'den', 'ein', 'einen'],
    correctAnswer: ['den', 'einen'],
    explanation: 'The direct object is "Stift" (masculine), so we need the Akkusativ case. Both "den" and "einen" are correct.',
    hint: 'Ask: Wen oder was suche ich? (Whom or what am I looking for?)',
    translation: 'I am looking for a pen.',
    answerDetails: {
      den: '"den Stift" means "the pen" (a specific pen).',
      einen: '"einen Stift" means "a pen" (any pen).'
    }
  },
];
const exercise2Data = [
  // Masculine
  {
    id: 21,
    sentence: '___ Lehrer ist sehr nett.',
    options: ['der', 'den', 'ein', 'einen'],
    correctAnswer: ['der', 'ein'],
    explanation: 'Nominativ is used because "Lehrer" (masculine) is the subject. Both "der" and "ein" are correct.',
    hint: 'Ask: Wer ist nett? (Who is nice?)',
    translation: 'The/A teacher is very nice.',
    answerDetails: {
      der: '"Der Lehrer" means "the teacher" (a specific teacher).',
      ein: '"Ein Lehrer" means "a teacher" (any teacher).',
    },
  },
  {
    id: 22,
    sentence: 'Ich frage ___ Lehrer.',
    options: ['der', 'den', 'ein', 'einen'],
    correctAnswer: ['den', 'einen'],
    explanation: 'Akkusativ is used because "Lehrer" (masculine) is the direct object. Both "den" and "einen" are correct.',
    hint: 'Ask: Wen frage ich? (Whom do I ask?)',
    translation: 'I am asking the/a teacher.',
    answerDetails: {
      den: '"den Lehrer" means "the teacher" (a specific teacher).',
      einen: '"einen Lehrer" means "a teacher" (any teacher).',
    },
  },
  {
    id: 23,
    sentence: 'Dort steht ___ Stuhl.',
    options: ['ein', 'einen', 'der', 'dem'],
    correctAnswer: ['ein', 'der'],
    explanation: 'Nominativ is used because "Stuhl" (masculine) is the subject. Both "der" and "ein" are correct.',
    hint: 'Ask: Was steht dort? (What is standing there?)',
    translation: 'A/The chair is standing there.',
    answerDetails: {
      der: '"Der Stuhl" means "the chair" (a specific chair).',
      ein: '"Ein Stuhl" means "a chair" (any chair).',
    },
  },
  {
    id: 24,
    sentence: 'Er kauft ___ Stuhl.',
    options: ['ein', 'einen', 'den', 'dem'],
    correctAnswer: ['einen', 'den'],
    explanation: 'Akkusativ is used because "Stuhl" (masculine) is the direct object. Both "den" and "einen" are correct.',
    hint: 'Ask: Was kauft er? (What is he buying?)',
    translation: 'He is buying a/the chair.',
    answerDetails: {
      den: '"den Stuhl" means "the chair" (a specific chair).',
      einen: '"einen Stuhl" means "a chair" (any chair).',
    },
  },
  {
    id: 25,
    sentence: 'Siehst du ___ Baum dort?',
    options: ['der', 'den', 'ein', 'einen'],
    correctAnswer: ['den', 'einen'],
    explanation: 'Akkusativ is used because "Baum" (masculine) is the direct object. Both "den" and "einen" are correct.',
    hint: 'Ask: Wen oder was siehst du? (Whom or what do you see?)',
    translation: 'Do you see the/a tree there?',
    answerDetails: {
      den: '"den Baum" means "the tree" (a specific tree).',
      einen: '"einen Baum" means "a tree" (any tree).',
    },
  },
  // Feminine
  {
    id: 26,
    sentence: '___ Katze schläft auf dem Sofa.',
    options: ['die', 'der', 'eine', 'einer'],
    correctAnswer: ['die', 'eine'],
    explanation: 'Nominativ is used because "Katze" (feminine) is the subject. Both "die" and "eine" are correct.',
    hint: 'Ask: Wer schläft? (Who is sleeping?)',
    translation: 'The/A cat is sleeping on the sofa.',
    answerDetails: {
      die: '"Die Katze" means "the cat" (a specific cat).',
      eine: '"Eine Katze" means "a cat" (any cat).',
    },
  },
  {
    id: 27,
    sentence: 'Ich sehe ___ Katze.',
    options: ['die', 'der', 'eine', 'einer'],
    correctAnswer: ['die', 'eine'],
    explanation: 'Akkusativ is used because "Katze" (feminine) is the direct object. For feminine nouns, Nominativ and Akkusativ forms are the same.',
    hint: 'Ask: Was sehe ich? (What do I see?)',
    translation: 'I see the/a cat.',
    answerDetails: {
      die: '"die Katze" means "the cat" (a specific cat).',
      eine: '"eine Katze" means "a cat" (any cat).',
    },
  },
  {
    id: 28,
    sentence: 'Das ist ___ Tasche.',
    options: ['die', 'der', 'eine', 'einen'],
    correctAnswer: ['die', 'eine'],
    explanation: 'Nominativ is used after the verb "sein" (to be). "Tasche" is feminine.',
    hint: 'The verb "sein" always takes the Nominativ case.',
    translation: 'That is the/a bag.',
    answerDetails: {
      die: '"Die Tasche" means "the bag" (a specific bag).',
      eine: '"Eine Tasche" means "a bag" (any bag).',
    },
  },
  {
    id: 29,
    sentence: 'Er hat ___ Tasche.',
    options: ['die', 'der', 'eine', 'einen'],
    correctAnswer: ['die', 'eine'],
    explanation: 'Akkusativ is used because "Tasche" (feminine) is the direct object. For feminine nouns, Nominativ and Akkusativ forms are the same.',
    hint: 'Ask: Was hat er? (What does he have?)',
    translation: 'He has the/a bag.',
    answerDetails: {
      die: '"die Tasche" means "the bag" (a specific bag).',
      eine: '"eine Tasche" means "a bag" (any bag).',
    },
  },
  {
    id: 30,
    sentence: '___ Blume ist sehr schön.',
    options: ['die', 'der', 'eine', 'einer'],
    correctAnswer: ['die', 'eine'],
    explanation: 'Nominativ is used because "Blume" (feminine) is the subject. Both "die" and "eine" are correct.',
    hint: 'Ask: Was ist schön? (What is beautiful?)',
    translation: 'The/A flower is very beautiful.',
    answerDetails: {
      die: '"Die Blume" means "the flower" (a specific flower).',
      eine: '"Eine Blume" means "a flower" (any flower).',
    },
  },
  // Neutral
  {
    id: 31,
    sentence: '___ Kind spielt im Garten.',
    options: ['das', 'den', 'ein', 'einen'],
    correctAnswer: ['das', 'ein'],
    explanation: 'Nominativ is used because "Kind" (neutral) is the subject. Both "das" and "ein" are correct.',
    hint: 'Ask: Wer spielt? (Who is playing?)',
    translation: 'The/A child is playing in the garden.',
    answerDetails: {
      das: '"Das Kind" means "the child" (a specific child).',
      ein: '"Ein Kind" means "a child" (any child).',
    },
  },
  {
    id: 32,
    sentence: 'Ich sehe ___ Kind.',
    options: ['das', 'dem', 'ein', 'einem'],
    correctAnswer: ['das', 'ein'],
    explanation: 'Akkusativ is used because "Kind" (neutral) is the direct object. For neutral nouns, Nominativ and Akkusativ forms are the same.',
    hint: 'Ask: Wen sehe ich? (Whom do I see?)',
    translation: 'I see the/a child.',
    answerDetails: {
      das: '"das Kind" means "the child" (a specific child).',
      ein: '"ein Kind" means "a child" (any child).',
    },
  },
  {
    id: 33,
    sentence: 'Dort liegt ___ Buch.',
    options: ['ein', 'einen', 'das', 'dem'],
    correctAnswer: ['ein', 'das'],
    explanation: 'Nominativ is used because "Buch" (neutral) is the subject. Both "das" and "ein" are correct.',
    hint: 'Ask: Was liegt dort? (What is lying there?)',
    translation: 'A/The book is lying there.',
    answerDetails: {
      das: '"Das Buch" means "the book" (a specific book).',
      ein: '"Ein Buch" means "a book" (any book).',
    },
  },
  {
    id: 34,
    sentence: 'Sie liest ___ Buch.',
    options: ['ein', 'einen', 'das', 'dem'],
    correctAnswer: ['ein', 'das'],
    explanation: 'Akkusativ is used because "Buch" (neutral) is the direct object. For neutral nouns, Nominativ and Akkusativ forms are the same.',
    hint: 'Ask: Was liest sie? (What is she reading?)',
    translation: 'She is reading a/the book.',
     answerDetails: {
      das: '"das Buch" means "the book" (a specific book).',
      ein: '"ein Buch" means "a book" (any book).',
    },
  },
  {
    id: 35,
    sentence: 'Wir kaufen ___ Auto.',
    options: ['das', 'dem', 'ein', 'einem'],
    correctAnswer: ['das', 'ein'],
    explanation: 'Akkusativ is used because "Auto" (neutral) is the direct object. For neutral nouns, Nominativ and Akkusativ forms are the same.',
    hint: 'Ask: Was kaufen wir? (What are we buying?)',
    translation: 'We are buying the/a car.',
    answerDetails: {
      das: '"das Auto" means "the car" (a specific car).',
      ein: '"ein Auto" means "a car" (any car).',
    },
  },
  // Plural
  {
    id: 36,
    sentence: '___ Kinder spielen draußen.',
    options: ['die', 'den', 'der', 'das'],
    correctAnswer: ['die'],
    explanation: 'Nominativ is used because "die Kinder" is the subject (who is playing?). "Kinder" is plural. There is no indefinite article in plural.',
    hint: 'Ask: Wer spielt? (Who is playing?)',
    translation: 'The children are playing outside.',
  },
  {
    id: 37,
    sentence: 'Wir sehen ___ Kinder.',
    options: ['die', 'den', 'der', 'das'],
    correctAnswer: ['die'],
    explanation: 'Akkusativ is used because "die Kinder" is the direct object (whom do we see?). The Akkusativ form for plural nouns is "die".',
    hint: 'Ask: Wen sehen wir? (Whom do we see?)',
    translation: 'We see the children.',
  },
   {
    id: 38,
    sentence: 'Hier sind ___ Stühle.',
    options: ['keine', 'keinen', 'kein', 'keiner'],
    correctAnswer: ['keine'],
    explanation: 'Nominativ Plural. "Stühle" is the subject, so we use "keine".',
    hint: 'Ask: Wer oder was ist hier? (Who or what is here?)',
    translation: 'Here are no chairs.',
  },
  {
    id: 39,
    sentence: 'Ich kaufe ___ Stühle.',
    options: ['keine', 'keinen', 'kein', 'keiner'],
    correctAnswer: ['keine'],
    explanation: 'Akkusativ Plural. "Stühle" is the direct object, so we use "keine".',
    hint: 'Ask: Wen oder was kaufe ich? (Whom or what am I buying?)',
    translation: 'I am not buying any chairs.',
  },
  {
    id: 40,
    sentence: 'Er mag ___ Blumen.',
    options: ['die', 'den', 'der', 'das'],
    correctAnswer: ['die'],
    explanation: 'Akkusativ is used because "die Blumen" is the direct object (what does he like?). The Akkusativ form for plural nouns is "die".',
    hint: 'Ask: Was mag er? (What does he like?)',
    translation: 'He likes the flowers.',
  },
];
const exercise3Data = [
  {
    id: 41,
    sentence: '___ Frau geht spazieren.',
    options: ['die', 'der', 'eine', 'einen'],
    correctAnswer: ['die', 'eine'],
    explanation: 'Nominativ is used because "Frau" (feminine) is the subject. Both "die" and "eine" are correct.',
    hint: 'Ask: Wer geht spazieren? (Who is going for a walk?)',
    translation: 'The/A woman is going for a walk.',
    answerDetails: {
      die: '"Die Frau" means "the woman" (a specific woman).',
      eine: '"Eine Frau" means "a woman" (any woman).',
    },
  },
  {
    id: 42,
    sentence: 'Der Mann sieht ___ Frau.',
    options: ['die', 'der', 'eine', 'einen'],
    correctAnswer: ['die', 'eine'],
    explanation: 'Akkusativ is used because "Frau" (feminine) is the direct object. For feminine nouns, Nominativ and Akkusativ forms are the same.',
    hint: 'Ask: Wen sieht der Mann? (Whom does the man see?)',
    translation: 'The man sees the/a woman.',
    answerDetails: {
      die: '"die Frau" means "the woman" (a specific woman).',
      eine: '"eine Frau" means "a woman" (any woman).',
    },
  },
  {
    id: 43,
    sentence: 'Das ist ___ schöne Tasche.',
    options: ['eine', 'einen', 'die', 'der'],
    correctAnswer: ['eine', 'die'],
    explanation: 'Nominativ is used after the verb "sein" (to be). "Tasche" is feminine.',
    hint: 'The verb "sein" always takes the Nominativ case.',
    translation: 'That is a/the beautiful bag.',
    answerDetails: {
      die: '"Die schöne Tasche" means "the beautiful bag" (a specific bag).',
      eine: '"Eine schöne Tasche" means "a beautiful bag" (any bag).',
    },
  },
  {
    id: 44,
    sentence: 'Ich kaufe ___ neue Tasche.',
    options: ['eine', 'einen', 'die', 'der'],
    correctAnswer: ['eine', 'die'],
    explanation: 'Akkusativ is used because "neue Tasche" (feminine) is the direct object. For feminine nouns, Nominativ and Akkusativ forms are the same.',
    hint: 'Ask: Was kaufe ich? (What am I buying?)',
    translation: 'I am buying a/the new bag.',
    answerDetails: {
      die: '"die neue Tasche" means "the new bag" (a specific bag).',
      eine: '"eine neue Tasche" means "a new bag" (any bag).',
    },
  },
  {
    id: 45,
    sentence: '___ Katze spielt mit dem Ball.',
    options: ['die', 'der', 'eine', 'einen'],
    correctAnswer: ['die', 'eine'],
    explanation: 'Nominativ is used because "Katze" (feminine) is the subject. Both "die" and "eine" are correct.',
    hint: 'Ask: Wer spielt mit dem Ball? (Who is playing with the ball?)',
    translation: 'The/A cat is playing with the ball.',
    answerDetails: {
      die: '"Die Katze" means "the cat" (a specific cat).',
      eine: '"Eine Katze" means "a cat" (any cat).',
    },
  },
  {
    id: 46,
    sentence: 'Das Kind streichelt ___ Katze.',
    options: ['die', 'der', 'eine', 'einen'],
    correctAnswer: ['die', 'eine'],
    explanation: 'Akkusativ is used because "Katze" (feminine) is the direct object. For feminine nouns, Nominativ and Akkusativ forms are the same.',
    hint: 'Ask: Wen oder was streichelt das Kind? (Whom or what is the child petting?)',
    translation: 'The child is petting the/a cat.',
    answerDetails: {
      die: '"die Katze" means "the cat" (a specific cat).',
      eine: '"eine Katze" means "a cat" (any cat).',
    },
  },
  {
    id: 47,
    sentence: 'Dort steht ___ Lampe.',
    options: ['eine', 'einen', 'die', 'der'],
    correctAnswer: ['eine', 'die'],
    explanation: 'Nominativ is used because "Lampe" (feminine) is the subject. Both "die" and "eine" are correct.',
    hint: 'Ask: Was steht dort? (What is standing there?)',
    translation: 'A/The lamp is standing there.',
    answerDetails: {
      die: '"Die Lampe" means "the lamp" (a specific lamp).',
      eine: '"Eine Lampe" means "a lamp" (any lamp).',
    },
  },
  {
    id: 48,
    sentence: 'Wir brauchen ___ Lampe.',
    options: ['eine', 'einen', 'die', 'der'],
    correctAnswer: ['eine', 'die'],
    explanation: 'Akkusativ is used because "Lampe" (feminine) is the direct object. For feminine nouns, Nominativ and Akkusativ forms are the same.',
    hint: 'Ask: Was brauchen wir? (What do we need?)',
    translation: 'We need a/the lamp.',
    answerDetails: {
      die: '"die Lampe" means "the lamp" (a specific lamp).',
      eine: '"eine Lampe" means "a lamp" (any lamp).',
    },
  },
  {
    id: 49,
    sentence: '___ Blume riecht gut.',
    options: ['die', 'der', 'eine', 'einen'],
    correctAnswer: ['die', 'eine'],
    explanation: 'Nominativ is used because "Blume" (feminine) is the subject. Both "die" and "eine" are correct.',
    hint: 'Ask: Was riecht gut? (What smells good?)',
    translation: 'The/A flower smells good.',
    answerDetails: {
      die: '"Die Blume" means "the flower" (a specific flower).',
      eine: '"Eine Blume" means "a flower" (any flower).',
    },
  },
  {
    id: 50,
    sentence: 'Er schenkt mir ___ Blume.',
    options: ['eine', 'einen', 'die', 'der'],
    correctAnswer: ['eine', 'die'],
    explanation: 'Akkusativ is used because "Blume" (feminine) is the direct object being given. Both "die" and "eine" are correct.',
    hint: 'Ask: Was schenkt er mir? (What is he giving me?)',
    translation: 'He is giving me a/the flower.',
    answerDetails: {
      die: '"die Blume" means "the flower" (a specific flower).',
      eine: '"eine Blume" means "a flower" (any flower).',
    },
  },
];
// ... (Concatenate ALL other data files here in the same way) ...

const chapters = {
  nomAkk: {
    title: 'Nominativ vs Akkusativ vs Dativ',
    quizzes: {
      ex0: { title: 'Exercise 0: The Basics', data: exercise0Data },
      ex1: { title: 'Exercise 1: Akkusativ : Masculine Nouns', data: exercise1Data },
      ex2: { title: 'Exercise 2: Wer vs. Wen vs. Wem (Basics)', data: exercise22Data },
      ex3: { title: 'Exercise 3: Wer vs. Wen vs. Wem (Hard)', data: exercise23Data },
      ex4: { title: 'Exercise 4: Akkusativ : All Genders', data: exercise2Data },
      ex5: { title: 'Exercise 5: Akkusativ : Feminine Nouns', data: exercise3Data },
      ex6: { title: 'Exercise 6: Akkusativ : All Genders', data: exercise4Data },
      ex7: { title: 'Exercise 7: Nominativ : All Genders', data: exercise5Data },
      ex8: { title: 'Exercise 8: Nominativ : Masculine', data: exercise6Data },
      ex9: { title: 'Exercise 9: Nominativ : Feminine & Plural', data: exercise7Data },
      ex10: { title: 'Exercise 10: Dativ : Masculine ', data: exercise8Data },
      ex11: { title: 'Exercise 11: Dativ : Masculine', data: exercise9Data },
      ex12: { title: 'Exercise 12: Dativ : Feminine ', data: exercise10Data },
      ex13: { title: 'Exercise 13: Dativ : Feminine ', data: exercise11Data },
      ex14: { title: 'Exercise 14: Dativ : Plural ', data: exercise12Data },
      ex15: { title: 'Exercise 15: Dativ : Plural ', data: exercise13Data },
      ex16: { title: 'Exercise 16: Dativ : All Genders ', data: exercise14Data },
      ex17: { title: 'Exercise 17: Dativ : All Genders ', data: exercise15Data },
      ex18: { title: 'Exercise 18: Dativ : All Genders ', data: exercise16Data },
      ex19: { title: 'Exercise 19: Mixed Cases (Tough)', data: exercise17Data },
      ex20: { title: 'Exercise 20: Mixed Cases with Pronouns ', data: exercise18Data },
      ex21: { title: 'Exercise 21: Mixed Cases with Adjectives', data: exercise19Data },
      ex22: { title: 'Exercise 22: Mixed Cases: Double Blanks ', data: exercise20Data },
      ex23: { title: 'Exercise 23: Mixed Cases: Triple Blanks ', data: exercise21Data },
      ex24: { title: 'Exercise 24: Personal Pronouns: Akkusativ', data: exercise24Data },
      ex25: { title: 'Exercise 25: Personal Pronouns: Dativ', data: exercise25Data },
      ex26: { title: 'Exercise 26: Personal Pronouns: Akkusativ vs. Dativ', data: exercise26Data },
      ex27: { title: 'Exercise 27: Personal Pronouns: All Cases (Mixed)', data: exercise27Data },
      ex28: { title: 'Exercise 28: Prepositions: Akkusativ (Direction/Movement)', data: exercise28Data },
      ex29: { title: 'Exercise 29: Prepositions: Dativ (Location/Static)', data: exercise29Data },
      ex30: { title: 'Exercise 30: Prepositions: Akkusativ vs. Dativ (Mixed)', data: exercise30Data },
      ex31: { title: 'Exercise 31: Verbs with Akkusativ', data: exercise31Data },
      ex32: { title: 'Exercise 32: Verbs with Dativ', data: exercise32Data },
    }
  },
  modal: {
    title: 'Modal Verbs',
    quizzes: {
      modalEx0: { title: 'Exercise 0: The Basics', data: modalExercise0Data },
      modalEx1: { title: 'Exercise 1: können & müssen', data: modalExercise1Data },
      modalEx2: { title: 'Exercise 2: dürfen & wollen', data: modalExercise2Data },
      modalEx3: { title: 'Exercise 3: sollen, mögen & möchten', data: modalExercise3Data },
      modalEx4: { title: 'Exercise 4: All Verbs (Mixed)', data: modalExercise4Data },
      modalEx5: { title: 'Exercise 5: Complex Sentences (Hard)', data: modalExercise5Data },
    }
  },
  numbers: {
    title: 'Numbers & Dates',
    quizzes: {
      numEx0: { title: 'Exercise 0: Ordinal Numbers (Interactive)', data: interactiveOrdinalData, type: 'interactive_ordinal' },
      numEx1: { title: 'Exercise 1: Cardinal Numbers (1-100)', data: numbersExercise0Data },
      numEx2: { title: 'Exercise 2: Ordinal Numbers & Dates', data: numbersExercise1Data },
      numEx3: { title: 'Exercise 3: Mixed Ordinals & Dates', data: numbersExercise2Data },
      numEx4: { title: 'Exercise 4: Advanced Dates', data: numbersExercise3Data },
    }
  },
  invitations: {
    title: 'Einladen (Invitations)',
    quizzes: {
      invEx0: { title: 'Exercise 0: Party Vocabulary', data: invitationsEx0Data },
      invEx1: { title: 'Exercise 1: How to Invite', data: invitationsEx1Data },
      invEx2: { title: 'Exercise 2: Actions and Verbs During Parties', data: invitationsEx2Data },
      invEx3: { title: 'Exercise 3: Complete the Invitations', data: invitationsEx3Data },
      invEx4: { title: 'Exercise 4: Accepting Invitations', data: invitationsEx4Data },
      invEx5: { title: 'Exercise 5: Declining Invitations', data: invitationsEx5Data },
      invEx6: { title: 'Exercise 6: Common Gifts (Geschenke)', data: invitationsEx6Data },
    }
  },
  prepositions: {
    title: 'Prepositions (Präpositionen)',
    quizzes: {
      prepEx0: { title: 'Exercise 0: Basics & Meanings', data: prepositionsEx0Data },
      prepEx1: { title: 'Exercise 1: Prepositions & Cases', data: prepositionsEx1Data },
      prepEx2: { title: 'Exercise 2: Akkusativ-Only Prepositions', data: prepositionsEx2Data },
      prepEx3: { title: 'Exercise 3: Akkusativ Prepositions (Applied)', data: prepositionsEx3Data },
    }
  }
};


// Main Application Component from index.tsx
const IntroContent = () => (
    <div className="intro-content">
        <h2 className="intro-header">Nominativ, Akkusativ & Dativ: The Core Cases</h2>
        
        <div className="rule-box">
            <h3>The 3 Main Cases: Who is doing what to whom?</h3>
            <p>German cases change nouns, pronouns, and articles based on their job in a sentence.</p>
            <ul>
                <li><strong>Nominativ (Subject):</strong> The doer of the action. Ask: <strong>Wer/Was?</strong> (Who/What?)</li>
                <li><strong>Akkusativ (Direct Object):</strong> The thing directly receiving the action. Ask: <strong>Wen/Was?</strong> (Whom/What?)</li>
                <li><strong>Dativ (Indirect Object):</strong> The person/thing indirectly affected, often the recipient. Ask: <strong>Wem?</strong> (To whom?)</li>
            </ul>
        </div>

        <h3>Article Changes</h3>
        <table className="article-table">
            <thead>
                <tr>
                    <th>Gender</th>
                    <th>Nominativ (Subject)</th>
                    <th>Akkusativ (Direct Object)</th>
                    <th>Dativ (Indirect Object)</th>
                </tr>
            </thead>
            <tbody>
                <tr className="masculine-row">
                    <td>Maskulin (m.)</td>
                    <td><strong>der / ein</strong></td>
                    <td className="change-highlight"><strong>den / einen</strong></td>
                    <td className="change-highlight"><strong>dem / einem</strong></td>
                </tr>
                <tr>
                    <td>Feminin (f.)</td>
                    <td>die / eine</td>
                    <td>die / eine</td>
                    <td className="change-highlight"><strong>der / einer</strong></td>
                </tr>
                <tr>
                    <td>Neutrum (n.)</td>
                    <td>das / ein</td>
                    <td>das / ein</td>
                    <td className="change-highlight"><strong>dem / einem</strong></td>
                </tr>
                <tr>
                    <td>Plural</td>
                    <td>die / keine</td>
                    <td>die / keine</td>
                    <td className="change-highlight"><strong>den (+n) / keinen (+n)</strong></td>
                </tr>
            </tbody>
        </table>
        
        <div className="rule-box summary">
            <h3>Case Triggers: Common Verbs</h3>
            <p>Some verbs almost always take an object in a specific case. Learning them is a great shortcut!</p>
            <div className="verb-case-columns">
                 <div>
                    <strong>Common Akkusativ Verbs:</strong>
                    <ul>
                        <li>haben (to have)</li>
                        <li>sehen (to see)</li>
                        <li>fragen (to ask)</li>
                        <li>lieben (to love)</li>
                        <li>mögen (to like)</li>
                        <li>kaufen (to buy)</li>
                    </ul>
                 </div>
                 <div>
                    <strong>Common Dativ Verbs:</strong>
                     <ul>
                        <li>helfen (to help)</li>
                        <li>danken (to thank)</li>
                        <li>gefallen (to please)</li>
                        <li>gehören (to belong to)</li>
                        <li>antworten (to answer)</li>
                        <li>glauben (to believe)</li>
                    </ul>
                 </div>
            </div>
        </div>

        <h3>Personal Pronouns</h3>
        <table className="pronoun-table">
            <thead>
                <tr>
                    <th>Nominativ</th>
                    <th>Akkusativ</th>
                    <th>Dativ</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>ich</td><td className="change-highlight">mich</td><td className="change-highlight">mir</td></tr>
                <tr><td>du</td><td className="change-highlight">dich</td><td className="change-highlight">dir</td></tr>
                <tr><td>er</td><td className="change-highlight">ihn</td><td className="change-highlight">ihm</td></tr>
                <tr><td>sie</td><td>sie</td><td className="change-highlight">ihr</td></tr>
                <tr><td>es</td><td>es</td><td className="change-highlight">ihm</td></tr>
                <tr><td>wir</td><td>uns</td><td>uns</td></tr>
                <tr><td>ihr</td><td>euch</td><td>euch</td></tr>
                <tr><td>sie/Sie</td><td>sie/Sie</td><td className="change-highlight">ihnen/Ihnen</td></tr>
            </tbody>
        </table>
    </div>
);

// ... (Rest of index.tsx file, including all components and the final root.render call)
const App = () => {
    const [page, setPage] = useState('home'); // 'home', 'topic', 'quiz'
    const [currentChapterId, setCurrentChapterId] = useState(null);
    const [currentQuizId, setCurrentQuizId] = useState(null);

    const handleSelectChapter = (chapterId) => {
        setCurrentChapterId(chapterId);
        setPage('topic');
    };

    const handleSelectQuiz = (quizId) => {
        setCurrentQuizId(quizId);
        setPage('quiz');
    };

    const renderPage = () => {
        // ... (The entire renderPage logic from index.tsx)
    };

    return <div className="container">{renderPage()}</div>;
};

const container = document.getElementById('app-container');
const root = createRoot(container);
root.render(<App />);
