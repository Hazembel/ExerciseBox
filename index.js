import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { exercise0Data } from './data/exercise0.js';
import { exercise1Data } from './data/exercise1.js';
import { exercise2Data } from './data/exercise2.js';
import { exercise3Data } from './data/exercise3.js';
import { exercise4Data } from './data/exercise4.js';
import { exercise5Data } from './data/exercise5.js';
import { exercise6Data } from './data/exercise6.js';
import { modalExercise0Data } from './data/modalExercise0.js';
import { modalExercise1Data } from './data/modalExercise1.js';
import { modalExercise2Data } from './data/modalExercise2.js';
import { modalExercise3Data } from './data/modalExercise3.js';
import { modalExercise4Data } from './data/modalExercise4.js';
import { modalExercise5Data } from './data/modalExercise5.js';
import { interactiveOrdinalData } from './data/interactiveOrdinalData.js';
import { numbersExercise0Data } from './data/numbersExercise0.js';
import { numbersExercise1Data } from './data/numbersExercise1.js';
import { numbersExercise2Data } from './data/numbersExercise2.js';
import { numbersExercise3Data } from './data/numbersExercise3.js';
import { personalPronounsEx0Data } from './data/personalPronounsEx0.js';
import { personalPronounsEx1Data } from './data/personalPronounsEx1.js';
import { personalPronounsEx2Data } from './data/personalPronounsEx2.js';
import { personalPronounsEx3Data } from './data/personalPronounsEx3.js';
import { personalPronounsEx4Data } from './data/personalPronounsEx4.js';
import { invitationsEx0Data } from './data/invitationsEx0.js';
import { invitationsEx1Data } from './data/invitationsEx1.js';
import { invitationsEx2Data } from './data/invitationsEx2.js';
import { invitationsEx3Data } from './data/invitationsEx3.js';
import { prepositionsEx0Data } from './data/prepositionsEx0.js';
import { prepositionsEx1Data } from './data/prepositionsEx1.js';
import { prepositionsEx2Data } from './data/prepositionsEx2.js';
import { prepositionsEx3Data } from './data/prepositionsEx3.js';


const chapters = {
  nomAkk: {
    title: 'Nominativ vs Akkusativ',
    quizzes: {
      ex0: { title: 'Exercise 0: The Basics', data: exercise0Data },
      ex1: { title: 'Exercise 1: Masculine Nouns', data: exercise1Data },
      ex2: { title: 'Exercise 2: All Genders', data: exercise2Data },
      ex3: { title: 'Exercise 3: Feminine Nouns', data: exercise3Data },
      ex4: { title: 'Exercise 4: All Genders (Medium)', data: exercise4Data },
      ex5: { title: 'Exercise 5: Plurals & "kein" (Hard)', data: exercise5Data },
      ex6: { title: 'Exercise 6: Complex Sentences (Very Hard)', data: exercise6Data },
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
  pronouns: {
    title: 'Personal Pronouns',
    quizzes: {
        proEx0: { title: 'Exercise 0: Basics (Nom. & Akk.)', data: personalPronounsEx0Data },
        proEx1: { title: 'Exercise 1: Mixed Akkusativ', data: personalPronounsEx1Data },
        proEx2: { title: 'Exercise 2: Dative Pronouns', data: personalPronounsEx2Data },
        proEx3: { title: 'Exercise 3: Wer vs. Wen (Basics)', data: personalPronounsEx3Data },
        proEx4: { title: 'Exercise 4: Wer vs. Wen (Mixed)', data: personalPronounsEx4Data },
    }
  },
  invitations: {
    title: 'Einladen (Invitations)',
    quizzes: {
      invEx0: { title: 'Exercise 0: Party Vocabulary', data: invitationsEx0Data },
      invEx1: { title: 'Exercise 1: How to Invite', data: invitationsEx1Data },
      invEx2: { title: 'Exercise 2: Actions and Verbs During Parties', data: invitationsEx2Data },
      invEx3: { title: 'Exercise 3: Complete the Invitations', data: invitationsEx3Data },
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


const IntroContent = () => (
    React.createElement('div', { className: 'intro-content' },
        React.createElement('h2', { className: 'intro-header' }, 'Nominativ & Akkusativ: The Basics'),
        React.createElement('div', { className: 'rule-box' },
            React.createElement('h3', null, 'When to use Nominativ (Subject)'),
            React.createElement('p', null, 'The ', React.createElement('strong', null, 'Nominativ'), ' case is for the ', React.createElement('strong', null, 'subject'), ' of the sentence. The subject is the person or thing doing the action. Ask ', React.createElement('strong', null, 'Wer?'), ' (Who?) or ', React.createElement('strong', null, 'Was?'), ' (What?) to find it.'),
            React.createElement('ul', null,
                React.createElement('li', null, React.createElement('em', null, '“', React.createElement('strong', null, 'Der Mann'), ' schläft.”'), ' → ', React.createElement('strong', null, 'Wer'), ' schläft? → Der Mann.'),
                React.createElement('li', null, React.createElement('em', null, '“', React.createElement('strong', null, 'Ein Hund'), ' spielt.”'), ' → ', React.createElement('strong', null, 'Was'), ' spielt? → Ein Hund.')
            )
        ),
        React.createElement('div', { className: 'rule-box' },
            React.createElement('h3', null, 'When to use Akkusativ (Direct Object)'),
            React.createElement('p', null, 'The ', React.createElement('strong', null, 'Akkusativ'), ' case is for the ', React.createElement('strong', null, 'direct object'), '. The direct object is the person or thing that receives the action. Ask ', React.createElement('strong', null, 'Wen?'), ' (Whom?) or ', React.createElement('strong', null, 'Was?'), ' (What?) to find it.'),
            React.createElement('ul', null,
                React.createElement('li', null, React.createElement('em', null, '“Ich sehe ', React.createElement('strong', null, 'den Mann'), '.”'), ' → ', React.createElement('strong', null, 'Wen'), ' sehe ich? → den Mann.'),
                React.createElement('li', null, React.createElement('em', null, '“Er kauft ', React.createElement('strong', null, 'einen Hund'), '.”'), ' → ', React.createElement('strong', null, 'Was'), ' kauft er? → einen Hund.')
            )
        ),
        React.createElement('h3', null, 'Articles Overview (Nominativ → Akkusativ)'),
        React.createElement('table', { className: 'article-table' },
            React.createElement('thead', null,
                React.createElement('tr', null,
                    React.createElement('th', null, 'Gender'),
                    React.createElement('th', null, 'Nominativ'),
                    React.createElement('th', null, 'Akkusativ'),
                    React.createElement('th', null, 'Change?')
                )
            ),
            React.createElement('tbody', null,
                React.createElement('tr', { className: 'masculine-row' },
                    React.createElement('td', null, 'Maskulin (m.)'),
                    React.createElement('td', null, React.createElement('strong', null, 'der / ein / kein')),
                    React.createElement('td', null, React.createElement('strong', null, 'den / einen / keinen')),
                    React.createElement('td', { className: 'change-highlight' }, 'Yes!')
                ),
                React.createElement('tr', null,
                    React.createElement('td', null, 'Feminin (f.)'),
                    React.createElement('td', null, 'die / eine / keine'),
                    React.createElement('td', null, 'die / eine / keine'),
                    React.createElement('td', null, 'No')
                ),
                React.createElement('tr', null,
                    React.createElement('td', null, 'Neutrum (n.)'),
                    React.createElement('td', null, 'das / ein / kein'),
                    React.createElement('td', null, 'das / ein / kein'),
                    React.createElement('td', null, 'No')
                ),
                React.createElement('tr', null,
                    React.createElement('td', null, 'Plural'),
                    React.createElement('td', null, 'die / keine'),
                    React.createElement('td', null, 'die / keine'),
                    React.createElement('td', null, 'No')
                )
            )
        ),
        React.createElement('div', { className: 'rule-box summary' },
            React.createElement('h3', null, 'Mini Rules & Tricks'),
            React.createElement('ol', null,
                React.createElement('li', null, 'Ask ', React.createElement('strong', null, 'Wer/Was?'), ' for ', React.createElement('strong', null, 'Nominativ'), ' (subject).'),
                React.createElement('li', null, 'Ask ', React.createElement('strong', null, 'Wen/Was?'), ' for ', React.createElement('strong', null, 'Akkusativ'), ' (direct object).'),
                React.createElement('li', null, React.createElement('strong', null, 'Only MASKULIN SINGULAR changes in Akkusativ.'), ' (der → den, ein → einen, kein → keinen).'),
                React.createElement('li', null, 'All other articles (feminine, neutral, plural) stay the same in Akkusativ.')
            )
        )
    )
);

const ModalIntroContent = () => (
    React.createElement('div', { className: 'intro-content' },
        React.createElement('h2', { className: 'intro-header' }, 'Modal Verbs: The Basics'),
        React.createElement('div', { className: 'rule-box' },
            React.createElement('h3', null, 'What are Modal Verbs?'),
            React.createElement('p', null, 'Modal verbs (Modalverben) change or add to the meaning of the main verb in a sentence. They express ability, necessity, permission, or desire.'),
            React.createElement('ul', null,
                React.createElement('li', null, React.createElement('em', null, 'Ich ', React.createElement('strong', null, 'kann'), ' schwimmen.'), ' (I ', React.createElement('strong', null, 'can'), ' swim - ability)'),
                React.createElement('li', null, React.createElement('em', null, 'Du ', React.createElement('strong', null, 'musst'), ' lernen.'), ' (You ', React.createElement('strong', null, 'must'), ' learn - necessity)')
            )
        ),
        React.createElement('div', { className: 'rule-box summary' },
            React.createElement('h3', null, 'The Golden Rule of Sentence Structure'),
            React.createElement('ol', null,
                React.createElement('li', null, 'The ', React.createElement('strong', null, 'modal verb'), ' is conjugated and goes in the ', React.createElement('strong', null, 'second position'), '.'),
                React.createElement('li', null, 'The ', React.createElement('strong', null, 'main verb'), ' goes to the ', React.createElement('strong', null, 'very end'), ' of the sentence in its original ', React.createElement('strong', null, 'infinitive'), ' form.')
            ),
            React.createElement('p', null, React.createElement('strong', null, 'Subject'), ' + ', React.createElement('strong', null, '[conjugated modal verb]'), ' + ...', React.createElement('em', null, '(rest of sentence)'), '... + ', React.createElement('strong', null, '[infinitive main verb]'), '.'),
            React.createElement('p', null, 'Example: ', React.createElement('em', null, 'Ich ', React.createElement('strong', null, 'muss'), ' heute Deutsch ', React.createElement('strong', null, 'lernen'), '.'))
        ),
        React.createElement('h3', null, 'Conjugation in Present Tense (Präsens)'),
        React.createElement('p', null, 'Note the vowel changes in singular forms, and that \'ich\' and \'er/sie/es\' have the exact same form!'),
        React.createElement('table', { className: 'modal-table' },
            React.createElement('thead', null,
                React.createElement('tr', null,
                    React.createElement('th', null, 'Pronoun'),
                    React.createElement('th', null, 'können (can)'),
                    React.createElement('th', null, 'müssen (must)'),
                    React.createElement('th', null, 'dürfen (may)'),
                    React.createElement('th', null, 'wollen (want)'),
                    React.createElement('th', null, 'sollen (should)'),
                    React.createElement('th', null, 'möchten (would like)')
                )
            ),
            React.createElement('tbody', null,
                React.createElement('tr', null, React.createElement('td', null, 'ich'), React.createElement('td', null, 'kann'), React.createElement('td', null, 'muss'), React.createElement('td', null, 'darf'), React.createElement('td', null, 'will'), React.createElement('td', null, 'soll'), React.createElement('td', null, 'möchte')),
                React.createElement('tr', null, React.createElement('td', null, 'du'), React.createElement('td', null, 'kannst'), React.createElement('td', null, 'musst'), React.createElement('td', null, 'darfst'), React.createElement('td', null, 'willst'), React.createElement('td', null, 'sollst'), React.createElement('td', null, 'möchtest')),
                React.createElement('tr', null, React.createElement('td', null, 'er/sie/es'), React.createElement('td', null, 'kann'), React.createElement('td', null, 'muss'), React.createElement('td', null, 'darf'), React.createElement('td', null, 'will'), React.createElement('td', null, 'soll'), React.createElement('td', null, 'möchte')),
                React.createElement('tr', null, React.createElement('td', null, 'wir'), React.createElement('td', null, 'können'), React.createElement('td', null, 'müssen'), React.createElement('td', null, 'dürfen'), React.createElement('td', null, 'wollen'), React.createElement('td', null, 'sollen'), React.createElement('td', null, 'möchten')),
                React.createElement('tr', null, React.createElement('td', null, 'ihr'), React.createElement('td', null, 'könnt'), React.createElement('td', null, 'müsst'), React.createElement('td', null, 'dürft'), React.createElement('td', null, 'wollt'), React.createElement('td', null, 'sollt'), React.createElement('td', null, 'möchtet')),
                React.createElement('tr', null, React.createElement('td', null, 'sie/Sie'), React.createElement('td', null, 'können'), React.createElement('td', null, 'müssen'), React.createElement('td', null, 'dürfen'), React.createElement('td', null, 'wollen'), React.createElement('td', null, 'sollen'), React.createElement('td', null, 'möchten'))
            )
        )
    )
);

const NumbersIntroContent = () => (
    React.createElement('div', { className: 'intro-content' },
        React.createElement('h2', { className: 'intro-header' }, 'Numbers & Dates: The Basics'),
        React.createElement('div', { className: 'rule-box' },
            React.createElement('h3', null, 'Cardinal Numbers (Kardinalzahlen)'),
            React.createElement('p', null, 'These are the normal counting numbers. The structure for numbers 21-99 is unique: ', React.createElement('strong', null, '(Unit)'), ' + ', React.createElement('strong', null, 'und'), ' + ', React.createElement('strong', null, '(Ten)'), '. For example, 21 is "ein', React.createElement('strong', null, 'und'), 'zwanzig" (one-and-twenty).')
        ),
        React.createElement('table', { className: 'numbers-table' },
            React.createElement('thead', null,
                React.createElement('tr', null, React.createElement('th', null, 'Number'), React.createElement('th', null, 'German'), React.createElement('th', null, 'Number'), React.createElement('th', null, 'German'))
            ),
            React.createElement('tbody', null,
                React.createElement('tr', null, React.createElement('td', null, '1'), React.createElement('td', null, 'eins'), React.createElement('td', null, '11'), React.createElement('td', null, 'elf')),
                React.createElement('tr', null, React.createElement('td', null, '2'), React.createElement('td', null, 'zwei'), React.createElement('td', null, '12'), React.createElement('td', null, 'zwölf')),
                React.createElement('tr', null, React.createElement('td', null, '3'), React.createElement('td', null, 'drei'), React.createElement('td', null, '20'), React.createElement('td', null, 'zwanzig')),
                React.createElement('tr', null, React.createElement('td', null, '4'), React.createElement('td', null, 'vier'), React.createElement('td', null, '21'), React.createElement('td', null, 'einundzwanzig')),
                React.createElement('tr', null, React.createElement('td', null, '5'), React.createElement('td', null, 'fünf'), React.createElement('td', null, '30'), React.createElement('td', null, 'dreißig')),
                React.createElement('tr', null, React.createElement('td', null, '6'), React.createElement('td', null, 'sechs'), React.createElement('td', null, '40'), React.createElement('td', null, 'vierzig')),
                React.createElement('tr', null, React.createElement('td', null, '7'), React.createElement('td', null, 'sieben'), React.createElement('td', null, '50'), React.createElement('td', null, 'fünfzig')),
                React.createElement('tr', null, React.createElement('td', null, '8'), React.createElement('td', null, 'acht'), React.createElement('td', null, '100'), React.createElement('td', null, '(ein)hundert'))
            )
        ),
        React.createElement('div', { className: 'rule-box' },
            React.createElement('h3', null, 'Ordinal Numbers (Ordinalzahlen)'),
            React.createElement('p', null, 'These numbers indicate position (first, second, third). They are essential for dates.'),
            React.createElement('ul', null,
                React.createElement('li', null, 'For numbers ', React.createElement('strong', null, '1-19'), ', add the ending ', React.createElement('strong', null, '-te'), '. (e.g., vier → vier', React.createElement('strong', null, 'te'), ')'),
                React.createElement('li', null, 'For numbers ', React.createElement('strong', null, '20 and above'), ', add the ending ', React.createElement('strong', null, '-ste'), '. (e.g., zwanzig → zwanzig', React.createElement('strong', null, 'ste'), ')'),
                React.createElement('li', null, React.createElement('strong', null, 'Exceptions:'), ' 1st = ', React.createElement('strong', null, 'erste'), ', 3rd = ', React.createElement('strong', null, 'dritte'), ', 7th = ', React.createElement('strong', null, 'siebte'), ', 8th = ', React.createElement('strong', null, 'achte'), '.')
            )
        ),
        React.createElement('div', { className: 'rule-box summary' },
            React.createElement('h3', null, 'Writing Dates (das Datum)'),
            React.createElement('p', null, 'The ending of the ordinal number changes depending on the grammar case.'),
            React.createElement('ol', null,
                React.createElement('li', null,
                    React.createElement('strong', null, 'Nominativ Case:'), ' Used after "der/die/das". The ending is usually ', React.createElement('strong', null, '-e'), '.',
                    React.createElement('ul', null, React.createElement('li', null, React.createElement('em', null, 'Heute ist ', React.createElement('strong', null, 'der erst', React.createElement('span', { className: 'change-highlight' }, 'e')), ' Mai.'), ' (Today is the first of May.)'))
                ),
                React.createElement('li', null,
                    React.createElement('strong', null, 'Dativ Case:'), ' Used after prepositions like "am" (on the). The ending is always ', React.createElement('strong', null, '-en'), '.',
                    React.createElement('ul', null, React.createElement('li', null, React.createElement('em', null, 'Ich habe ', React.createElement('strong', null, 'am erst', React.createElement('span', { className: 'change-highlight' }, 'en')), ' Mai Geburtstag.'), ' (My birthday is on the first of May.)'))
                ),
                React.createElement('li', null,
                    React.createElement('strong', null, 'Predicate Nominative:'), ' Used after "als" (as the...). The ending depends on the gender of the subject.',
                    React.createElement('ul', null, React.createElement('li', null, React.createElement('em', null, 'Er kam als Erst', React.createElement('span', { className: 'change-highlight' }, 'er'), ' ins Ziel.'), ' (He arrived as the first.)'))
                )
            ),
            React.createElement('p', null, React.createElement('strong', null, 'Remember:'), ' If you see "am", the ordinal number will end in ', React.createElement('strong', null, '-en'), '!')
        )
    )
);

const PronounsIntroContent = () => (
    React.createElement('div', { className: 'intro-content' },
        React.createElement('h2', { className: 'intro-header' }, 'Personal Pronouns: The Basics'),
        React.createElement('div', { className: 'rule-box' },
            React.createElement('h3', null, 'Who is doing what to whom?'),
            React.createElement('p', null, 'Personal pronouns change depending on their job in the sentence. This "job" is called the grammatical case.'),
            React.createElement('ul', null,
                React.createElement('li', null, React.createElement('strong', null, 'Nominativ (Subject):'), ' The person/thing DOING the action. (', React.createElement('strong', null, 'I'), ' see the dog.)'),
                React.createElement('li', null, React.createElement('strong', null, 'Akkusativ (Direct Object):'), ' The person/thing RECEIVING the action. (The dog sees ', React.createElement('strong', null, 'me'), '.)'),
                React.createElement('li', null, React.createElement('strong', null, 'Dativ (Indirect Object):'), ' The person/thing to/for whom the action is done. (I give the bone to ', React.createElement('strong', null, 'him'), '.)')
            )
        ),
        React.createElement('div', { className: 'rule-box summary' },
            React.createElement('h3', null, 'Asking the Right Question'),
            React.createElement('p', null, 'To find the correct case, ask these questions about the verb:'),
            React.createElement('ul', null,
                React.createElement('li', null, React.createElement('strong', null, 'Wer?'), ' (Who?) → Nominativ (Subject)'),
                React.createElement('li', null, React.createElement('strong', null, 'Wen?'), ' (Whom?) → Akkusativ (Direct Object)'),
                React.createElement('li', null, React.createElement('strong', null, 'Wem?'), ' (To whom?) → Dativ (Indirect Object)')
            ),
            React.createElement('p', null, 'Example: ', React.createElement('em', null, '"Er gibt mir das Buch." (He gives me the book.)')),
            React.createElement('ol', null,
                React.createElement('li', null, React.createElement('strong', null, 'Wer'), ' gibt das Buch? → ', React.createElement('strong', null, 'Er'), ' (He) → Nominativ'),
                React.createElement('li', null, React.createElement('strong', null, 'Was'), ' gibt er? → das Buch (the book) → Akkusativ'),
                React.createElement('li', null, React.createElement('strong', null, 'Wem'), ' gibt er das Buch? → ', React.createElement('strong', null, 'mir'), ' (to me) → Dativ')
            )
        ),
        React.createElement('h3', null, 'Personal Pronoun Forms'),
        React.createElement('table', { className: 'pronoun-table' },
            React.createElement('thead', null,
                React.createElement('tr', null,
                    React.createElement('th', null, 'Nominativ (Subject)'),
                    React.createElement('th', null, 'Akkusativ (Direct Object)'),
                    React.createElement('th', null, 'Dativ (Indirect Object)')
                )
            ),
            React.createElement('tbody', null,
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'ich'), ' (I)'), React.createElement('td', { className: 'change-highlight' }, React.createElement('strong', null, 'mich'), ' (me)'), React.createElement('td', { className: 'change-highlight' }, React.createElement('strong', null, 'mir'), ' (to me)')),
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'du'), ' (you)'), React.createElement('td', { className: 'change-highlight' }, React.createElement('strong', null, 'dich'), ' (you)'), React.createElement('td', { className: 'change-highlight' }, React.createElement('strong', null, 'dir'), ' (to you)')),
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'er'), ' (he)'), React.createElement('td', { className: 'change-highlight' }, React.createElement('strong', null, 'ihn'), ' (him)'), React.createElement('td', null, React.createElement('strong', null, 'ihm'), ' (to him)')),
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'sie'), ' (she)'), React.createElement('td', null, React.createElement('strong', null, 'sie'), ' (her)'), React.createElement('td', { className: 'change-highlight' }, React.createElement('strong', null, 'ihr'), ' (to her)')),
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'es'), ' (it)'), React.createElement('td', null, React.createElement('strong', null, 'es'), ' (it)'), React.createElement('td', null, React.createElement('strong', null, 'ihm'), ' (to it)')),
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'wir'), ' (we)'), React.createElement('td', null, React.createElement('strong', null, 'uns'), ' (us)'), React.createElement('td', null, React.createElement('strong', null, 'uns'), ' (to us)')),
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'ihr'), ' (you all)'), React.createElement('td', null, React.createElement('strong', null, 'euch'), ' (you all)'), React.createElement('td', null, React.createElement('strong', null, 'euch'), ' (to you all)')),
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'sie'), ' (they)'), React.createElement('td', null, React.createElement('strong', null, 'sie'), ' (them)'), React.createElement('td', { className: 'change-highlight' }, React.createElement('strong', null, 'ihnen'), ' (to them)')),
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'Sie'), ' (you, formal)'), React.createElement('td', null, React.createElement('strong', null, 'Sie'), ' (you, formal)'), React.createElement('td', { className: 'change-highlight' }, React.createElement('strong', null, 'Ihnen'), ' (to you, formal)'))
            )
        )
    )
);

const WerWenIntroContent = () => (
    React.createElement('div', { className: 'intro-content' },
        React.createElement('h2', { className: 'intro-header' }, 'Wer vs. Wen: Asking "Who?"'),
        React.createElement('div', { className: 'rule-box' },
            React.createElement('h3', null, 'Wer? (Nominativ) - The Subject'),
            React.createElement('p', null, 'Use ', React.createElement('strong', null, 'Wer'), ' to ask about the person or people who are ', React.createElement('strong', null, 'doing the action'), '. It asks for the subject of the sentence.'),
            React.createElement('ul', null,
                React.createElement('li', null, 'The answer to a "Wer?" question is in the Nominativ case.'),
                React.createElement('li', null, React.createElement('em', null, React.createElement('strong', null, 'Wer'), ' hat den Kuchen gegessen?'), ' → ', React.createElement('em', null, React.createElement('strong', null, 'Der Junge'), ' hat den Kuchen gegessen.'), ' (Who ate the cake? The boy ate the cake.)'),
                React.createElement('li', null, React.createElement('em', null, React.createElement('strong', null, 'Wer'), ' kommt zur Party?'), ' → ', React.createElement('em', null, React.createElement('strong', null, 'Meine Freunde'), ' kommen.'), ' (Who is coming to the party? My friends are coming.)')
            )
        ),
        React.createElement('div', { className: 'rule-box' },
            React.createElement('h3', null, 'Wen? (Akkusativ) - The Direct Object'),
            React.createElement('p', null, 'Use ', React.createElement('strong', null, 'Wen'), ' to ask about the person or people who are ', React.createElement('strong', null, 'receiving the action'), '. It asks for the direct object of the sentence.'),
            React.createElement('ul', null,
                React.createElement('li', null, 'The answer to a "Wen?" question is in the Akkusativ case.'),
                React.createElement('li', null, React.createElement('em', null, React.createElement('strong', null, 'Wen'), ' siehst du?'), ' → ', React.createElement('em', null, 'Ich sehe ', React.createElement('strong', null, 'den Jungen'), '.'), ' (Whom do you see? I see the boy.)'),
                React.createElement('li', null, React.createElement('em', null, React.createElement('strong', null, 'Wen'), ' besuchen wir heute?'), ' → ', React.createElement('em', null, 'Wir besuchen ', React.createElement('strong', null, 'unsere Tante'), '.'), ' (Whom are we visiting today? We are visiting our aunt.)')
            )
        ),
        React.createElement('div', { className: 'rule-box summary' },
            React.createElement('h3', null, 'The Trick'),
            React.createElement('ol', null,
                React.createElement('li', null, 'If the blank is the ', React.createElement('strong', null, 'subject'), ' (the one performing the verb), use ', React.createElement('strong', null, 'Wer'), '.'),
                React.createElement('li', null, 'If the blank is the ', React.createElement('strong', null, 'direct object'), ' (the one the verb is happening to), use ', React.createElement('strong', null, 'Wen'), '.'),
                React.createElement('li', null, 'Try answering the question. If the answer is "der Mann", use "Wer". If the answer is "den Mann", use "Wen".')
            )
        )
    )
);

const InvitationsIntroContent = () => (
    React.createElement('div', { className: 'intro-content' },
        React.createElement('h2', { className: 'intro-header' }, 'Einladen (Invitations): The Basics'),
        React.createElement('div', { className: 'rule-box' },
            React.createElement('h3', null, 'Types of Parties & Celebrations (Arten von Partys & Feiern)'),
            React.createElement('p', null, 'Here is some common vocabulary for events you might be invited to.')
        ),
        React.createElement('table', { className: 'article-table' },
            React.createElement('thead', null,
                React.createElement('tr', null, React.createElement('th', null, 'German'), React.createElement('th', null, 'English'))
            ),
            React.createElement('tbody', null,
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'die Geburtstagsfeier')), React.createElement('td', null, 'Birthday party')),
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'die Hochzeit')), React.createElement('td', null, 'Wedding')),
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'die Weihnachtsfeier')), React.createElement('td', null, 'Christmas party')),
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'die Grillparty')), React.createElement('td', null, 'Barbecue party')),
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'die Silvesterparty')), React.createElement('td', null, 'New Year\'s Eve party')),
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'das Fest')), React.createElement('td', null, 'Festival / Celebration'))
            )
        ),
        React.createElement('div', { className: 'rule-box summary' },
            React.createElement('h3', null, 'How to Invite Someone (Jemanden einladen)'),
            React.createElement('p', null, 'The most important verb is ', React.createElement('strong', null, 'einladen'), ' (to invite). It\'s a separable-prefix verb, which means the "ein-" part goes to the end of the sentence.'),
            React.createElement('ul', null,
                React.createElement('li', null, 'Ich ', React.createElement('strong', null, 'lade'), ' dich ', React.createElement('strong', null, 'ein'), '. (I invite you.)'),
                React.createElement('li', null, 'Er ', React.createElement('strong', null, 'lädt'), ' uns ', React.createElement('strong', null, 'ein'), '. (He invites us.) - Note the vowel change for er/sie/es!')
            ),
            React.createElement('h4', null, 'Common Phrases:'),
            React.createElement('ol', null,
                React.createElement('li', null, React.createElement('strong', null, 'Ich lade dich zu ... ein.'), ' (I invite you to...)',
                    React.createElement('ul', null, React.createElement('li', null, React.createElement('em', null, 'Ich lade dich zu meiner Geburtstagsfeier ein.')))
                ),
                React.createElement('li', null, React.createElement('strong', null, 'Willst du / Möchtest du zu ... kommen?'), ' (Do you want to / Would you like to come to...?)',
                    React.createElement('ul', null, React.createElement('li', null, React.createElement('em', null, 'Willst du zu meiner Grillparty kommen?')))
                ),
                React.createElement('li', null, React.createElement('strong', null, 'Kommst du zu ...?'), ' (Are you coming to...?)',
                    React.createElement('ul', null, React.createElement('li', null, React.createElement('em', null, 'Kommst du zur Hochzeit?'), ' (Note: ', React.createElement('strong', null, 'zu + der = zur'), ')'))
                )
            )
        )
    )
);

const PrepositionsIntroContent = () => (
    React.createElement('div', { className: 'intro-content' },
        React.createElement('h2', { className: 'intro-header' }, 'German Prepositions Guide'),
        React.createElement('div', { className: 'rule-box' },
            React.createElement('h3', null, 'The Three Groups of Prepositions'),
            React.createElement('p', null, 'German prepositions are tricky because they determine the case of the noun that follows. They fall into three main groups based on the case they require.')
        ),
        React.createElement('h3', null, 'Akkusativ-Only Prepositions'),
        React.createElement('p', null, 'These prepositions are always followed by the Akkusativ case. A common mnemonic is "DOG F.U.B." (Durch, Ohne, Gegen, Für, Um, Bis).'),
        React.createElement('table', { className: 'preposition-detail-table' },
            React.createElement('thead', null,
                React.createElement('tr', null,
                    React.createElement('th', null, 'Preposition'),
                    React.createElement('th', null, 'Meaning / Use'),
                    React.createElement('th', null, 'Example')
                )
            ),
            React.createElement('tbody', null,
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'durch')), React.createElement('td', null, 'through (motion), by means of'), React.createElement('td', null, React.createElement('em', null, 'Wir fahren ', React.createElement('strong', null, 'durch den'), ' Tunnel.'), ' (We drive through the tunnel.)')),
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'für')), React.createElement('td', null, 'for'), React.createElement('td', null, React.createElement('em', null, 'Das Geschenk ist ', React.createElement('strong', null, 'für dich'), '.'), ' (The gift is for you.)')),
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'gegen')), React.createElement('td', null, 'against, into (collision)'), React.createElement('td', null, React.createElement('em', null, 'Er läuft ', React.createElement('strong', null, 'gegen die'), ' Wand.'), ' (He runs into the wall.)')),
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'ohne')), React.createElement('td', null, 'without'), React.createElement('td', null, React.createElement('em', null, 'Ich gehe nicht ', React.createElement('strong', null, 'ohne meinen'), ' Schirm.'), ' (I\'m not going without my umbrella.)')),
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'um')), React.createElement('td', null, 'around, at (for time)'), React.createElement('td', null, React.createElement('em', null, 'Wir sitzen ', React.createElement('strong', null, 'um den'), ' Tisch. / Der Film beginnt ', React.createElement('strong', null, 'um'), ' 8 Uhr.'), ' (We sit around the table. / The film starts at 8.)')),
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'bis')), React.createElement('td', null, 'until, by (often used with another preposition)'), React.createElement('td', null, React.createElement('em', null, 'Der Laden ist ', React.createElement('strong', null, 'bis'), ' 18 Uhr geöffnet.'), ' (The store is open until 6 p.m.)')),
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'entlang')), React.createElement('td', null, 'along (when it follows the noun)'), React.createElement('td', null, React.createElement('em', null, 'Wir gehen ', React.createElement('strong', null, 'den'), ' Fluss ', React.createElement('strong', null, 'entlang'), '.'), ' (We are walking along the river.)'))
            )
        ),
        React.createElement('h3', null, 'Dativ-Only Prepositions'),
        React.createElement('p', null, 'These prepositions are always followed by the Dativ case.'),
        React.createElement('table', { className: 'preposition-detail-table' },
            React.createElement('thead', null,
                React.createElement('tr', null,
                    React.createElement('th', null, 'Preposition'),
                    React.createElement('th', null, 'Meaning / Use'),
                    React.createElement('th', null, 'Example')
                )
            ),
            React.createElement('tbody', null,
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'aus')), React.createElement('td', null, 'from (origin), out of'), React.createElement('td', null, React.createElement('em', null, 'Sie kommt ', React.createElement('strong', null, 'aus der'), ' Schweiz.'), ' (She comes from Switzerland.)')),
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'bei')), React.createElement('td', null, 'at, near, with (a person/company)'), React.createElement('td', null, React.createElement('em', null, 'Er wohnt ', React.createElement('strong', null, 'bei seinen'), ' Eltern.'), ' (He lives with his parents.)')),
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'mit')), React.createElement('td', null, 'with, by (means of transport)'), React.createElement('td', null, React.createElement('em', null, 'Ich fahre ', React.createElement('strong', null, 'mit dem'), ' Zug.'), ' (I\'m going by train.)')),
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'nach')), React.createElement('td', null, 'to (cities/countries), after (time)'), React.createElement('td', null, React.createElement('em', null, 'Wir fliegen ', React.createElement('strong', null, 'nach'), ' Spanien. / ', React.createElement('strong', null, 'Nach der'), ' Schule gehe ich heim.'), ' (We are flying to Spain. / After school I go home.)')),
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'seit')), React.createElement('td', null, 'since, for (a period of time)'), React.createElement('td', null, React.createElement('em', null, 'Ich lerne ', React.createElement('strong', null, 'seit einem'), ' Jahr Deutsch.'), ' (I\'ve been learning German for a year.)')),
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'von')), React.createElement('td', null, 'from, by'), React.createElement('td', null, React.createElement('em', null, 'Das ist ein Geschenk ', React.createElement('strong', null, 'von meiner'), ' Tante.'), ' (That is a gift from my aunt.)')),
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'zu')), React.createElement('td', null, 'to (people, places, general direction)'), React.createElement('td', null, React.createElement('em', null, 'Ich gehe ', React.createElement('strong', null, 'zum'), ' Arzt.'), ' (I\'m going to the doctor.)')),
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'gegenüber')), React.createElement('td', null, 'opposite, across from'), React.createElement('td', null, React.createElement('em', null, 'Die Bank ist ', React.createElement('strong', null, 'dem'), ' Bahnhof ', React.createElement('strong', null, 'gegenüber'), '.'), ' (The bank is opposite the train station.)'))
            )
        ),
        React.createElement('h3', null, 'Two-Way Prepositions (Wechselpräpositionen)'),
        React.createElement('div', { className: 'two-way-rule' },
            React.createElement('h3', null, 'The Golden Rule: Location vs. Direction'),
            React.createElement('p', null, React.createElement('strong', null, 'Wo? (Where?) → Location (static position) → DATIV')),
            React.createElement('p', null, React.createElement('strong', null, 'Wohin? (Where to?) → Direction (movement to a place) → AKKUSATIV'))
        ),
        React.createElement('table', { className: 'preposition-detail-table' },
            React.createElement('thead', null,
                React.createElement('tr', null,
                    React.createElement('th', null, 'Preposition'),
                    React.createElement('th', null, 'Meaning'),
                    React.createElement('th', null, 'Example (Dativ - Wo?)'),
                    React.createElement('th', null, 'Example (Akkusativ - Wohin?)')
                )
            ),
            React.createElement('tbody', null,
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'an')), React.createElement('td', null, 'on (vertical surface), at'), React.createElement('td', null, React.createElement('em', null, 'Das Bild hängt ', React.createElement('strong', null, 'an der'), ' Wand.'), ' (The picture hangs on the wall.)'), React.createElement('td', null, React.createElement('em', null, 'Ich hänge das Bild ', React.createElement('strong', null, 'an die'), ' Wand.'), ' (I hang the picture onto the wall.)')),
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'auf')), React.createElement('td', null, 'on (horizontal surface)'), React.createElement('td', null, React.createElement('em', null, 'Das Buch liegt ', React.createElement('strong', null, 'auf dem'), ' Tisch.'), ' (The book lies on the table.)'), React.createElement('td', null, React.createElement('em', null, 'Ich lege das Buch ', React.createElement('strong', null, 'auf den'), ' Tisch.'), ' (I lay the book onto the table.)')),
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'hinter')), React.createElement('td', null, 'behind'), React.createElement('td', null, React.createElement('em', null, 'Der Hund ist ', React.createElement('strong', null, 'hinter dem'), ' Haus.'), ' (The dog is behind the house.)'), React.createElement('td', null, React.createElement('em', null, 'Der Hund läuft ', React.createElement('strong', null, 'hinter das'), ' Haus.'), ' (The dog runs behind the house.)')),
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'in')), React.createElement('td', null, 'in, into'), React.createElement('td', null, React.createElement('em', null, 'Wir sind ', React.createElement('strong', null, 'im'), ' Kino.'), ' (We are in the cinema.)'), React.createElement('td', null, React.createElement('em', null, 'Wir gehen ', React.createElement('strong', null, 'ins'), ' Kino.'), ' (We are going into the cinema.)')),
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'neben')), React.createElement('td', null, 'next to, beside'), React.createElement('td', null, React.createElement('em', null, 'Das Auto parkt ', React.createElement('strong', null, 'neben dem'), ' Baum.'), ' (The car is parked next to the tree.)'), React.createElement('td', null, React.createElement('em', null, 'Fahr das Auto ', React.createElement('strong', null, 'neben den'), ' Baum.'), ' (Drive the car next to the tree.)')),
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'über')), React.createElement('td', null, 'over, above'), React.createElement('td', null, React.createElement('em', null, 'Die Lampe hängt ', React.createElement('strong', null, 'über dem'), ' Tisch.'), ' (The lamp hangs above the table.)'), React.createElement('td', null, React.createElement('em', null, 'Das Flugzeug fliegt ', React.createElement('strong', null, 'über die'), ' Stadt.'), ' (The plane flies over the city.)')),
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'unter')), React.createElement('td', null, 'under, below'), React.createElement('td', null, React.createElement('em', null, 'Die Katze schläft ', React.createElement('strong', null, 'unter dem'), ' Stuhl.'), ' (The cat sleeps under the chair.)'), React.createElement('td', null, React.createElement('em', null, 'Die Katze kriecht ', React.createElement('strong', null, 'unter den'), ' Stuhl.'), ' (The cat crawls under the chair.)')),
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'vor')), React.createElement('td', null, 'in front of, before (time)'), React.createElement('td', null, React.createElement('em', null, 'Er steht ', React.createElement('strong', null, 'vor der'), ' Tür.'), ' (He is standing in front of the door.)'), React.createElement('td', null, React.createElement('em', null, 'Stell dich ', React.createElement('strong', null, 'vor die'), ' Tür.'), ' (Stand in front of the door.)')),
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'zwischen')), React.createElement('td', null, 'between'), React.createElement('td', null, React.createElement('em', null, 'Der Stuhl steht ', React.createElement('strong', null, 'zwischen dem'), ' Tisch und dem Schrank.'), ' (The chair stands between the table and the closet.)'), React.createElement('td', null, React.createElement('em', null, 'Stell den Stuhl ', React.createElement('strong', null, 'zwischen den'), ' Tisch und den Schrank.'), ' (Put the chair between the table and the closet.)'))
            )
        )
    )
);

const AkkusativPrepositionsIntroContent = () => (
    React.createElement('div', { className: 'intro-content' },
        React.createElement('h2', { className: 'intro-header' }, 'Akkusativ-Only Prepositions'),
        React.createElement('div', { className: 'rule-box' },
            React.createElement('p', null, 'These prepositions are ', React.createElement('strong', null, 'always'), ' followed by the Akkusativ case. The question to find the object is still "Wen?" or "Was?", but with these words, you don\'t have to decide between location and direction.')
        ),
        React.createElement('table', { className: 'preposition-detail-table' },
            React.createElement('thead', null,
                React.createElement('tr', null,
                    React.createElement('th', null, 'Preposition'),
                    React.createElement('th', null, 'Meaning / Use'),
                    React.createElement('th', null, 'Example')
                )
            ),
            React.createElement('tbody', null,
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'durch')), React.createElement('td', null, 'through (motion), by means of'), React.createElement('td', null, React.createElement('em', null, 'Wir fahren ', React.createElement('strong', null, 'durch den'), ' Tunnel.'))),
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'für')), React.createElement('td', null, 'for'), React.createElement('td', null, React.createElement('em', null, 'Das Geschenk ist ', React.createElement('strong', null, 'für dich'), '.'))),
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'gegen')), React.createElement('td', null, 'against, into (collision)'), React.createElement('td', null, React.createElement('em', null, 'Er läuft ', React.createElement('strong', null, 'gegen die'), ' Wand.'))),
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'ohne')), React.createElement('td', null, 'without'), React.createElement('td', null, React.createElement('em', null, 'Ich gehe nicht ', React.createElement('strong', null, 'ohne meinen'), ' Schirm.'))),
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'um')), React.createElement('td', null, 'around, at (for time)'), React.createElement('td', null, React.createElement('em', null, 'Wir sitzen ', React.createElement('strong', null, 'um den'), ' Tisch. / Der Film beginnt ', React.createElement('strong', null, 'um'), ' 8 Uhr.'))),
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'bis')), React.createElement('td', null, 'until, by (often used with another preposition)'), React.createElement('td', null, React.createElement('em', null, 'Der Laden ist ', React.createElement('strong', null, 'bis'), ' 18 Uhr geöffnet.'))),
                React.createElement('tr', null, React.createElement('td', null, React.createElement('strong', null, 'entlang')), React.createElement('td', null, 'along (when it follows the noun)'), React.createElement('td', null, React.createElement('em', null, 'Wir gehen ', React.createElement('strong', null, 'den'), ' Fluss ', React.createElement('strong', null, 'entlang'), '.')))
            )
        )
    )
);


const getCorrectOrdinal = (num, context) => {
    const numberWords = {
        1: 'ein', 2: 'zwei', 3: 'drei', 4: 'vier', 5: 'fünf', 6: 'sechs', 7: 'sieben', 8: 'acht', 9: 'neun', 10: 'zehn',
        11: 'elf', 12: 'zwölf', 13: 'dreizehn', 14: 'vierzehn', 15: 'fünfzehn', 16: 'sechzehn', 17: 'siebzehn', 18: 'achtzehn', 19: 'neunzehn'
    };
    const tensWords = { 20: 'zwanzig', 30: 'dreißig' };

    let base = '';

    if (num === 1) base = 'ers';
    else if (num === 3) base = 'drit';
    else if (num === 7) base = 'sieb';
    else if (num === 8) base = 'ach';
    else if (num < 20) base = numberWords[num];
    else if (num === 20) base = tensWords[20];
    else if (num === 30) base = tensWords[30];
    else {
        const unit = num % 10;
        const ten = num - unit;
        base = `${numberWords[unit]}und${tensWords[ten] || (numberWords[ten/10] + 'zig')}`;
    }

    if (num <= 19) base += 't';
    else base += 'st';

    switch (context) {
        case 'nominativ_der':
        case 'nominativ_die':
        case 'nominativ_das':
        case 'akusativ_die':
        case 'akusativ_das':
        case 'predicative_als_fem_neu':
            return base + 'e';
        case 'dativ_am':
        case 'dativ_im':
        case 'dativ_zum':
        case 'akusativ_den':
            return base + 'en';
        case 'predicative_als_masc':
            return base + 'er';
        default:
            return base + 'e';
    }
};

const InteractiveOrdinalQuiz = ({ quiz, onBack, introContent }) => {
    const { title, data: quizData } = quiz;
    const [userInputs, setUserInputs] = useState({});
    const [showResults, setShowResults] = useState(false);

    const handleInputChange = (questionId, value) => {
        if (showResults) return;
        setUserInputs({
            ...userInputs,
            [questionId]: value,
        });
    };

    const handleCheckAnswers = () => {
        setShowResults(true);
        window.scrollTo(0, 0);
    };

    const handleRestart = () => {
        setUserInputs({});
        setShowResults(false);
    };

    const score = quizData.reduce((acc, q) => {
        const correctAnswer = getCorrectOrdinal(q.number, q.context);
        const userAnswer = (userInputs[q.id] || '').trim().toLowerCase();
        return acc + (userAnswer === correctAnswer ? 1 : 0);
    }, 0);

    return (
        React.createElement(React.Fragment, null,
            introContent,
            React.createElement('header', null,
                React.createElement('div', { className: 'page-header' },
                    React.createElement('button', { className: 'back-button', onClick: onBack }, '← Exercises'),
                    React.createElement('h1', null, title)
                ),
                React.createElement('p', { className: 'instructions' },
                    'Type the number in parentheses as a German ordinal word with the correct ending.',
                    React.createElement('br', null),
                    React.createElement('em', null, 'Schreibe die Zahl in Klammern als deutsches Ordinalzahlwort mit der richtigen Endung.')
                )
            ),
            showResults && (
                React.createElement('div', { className: 'score-summary', role: 'alert' },
                    React.createElement('h2', null, 'Your Score: ', score, ' / ', quizData.length)
                )
            ),
            React.createElement('div', { className: 'quiz' },
                quizData.map((question, index) => {
                    const correctAnswer = getCorrectOrdinal(question.number, question.context);
                    const userAnswer = (userInputs[question.id] || '').trim().toLowerCase();
                    const isCorrect = userAnswer === correctAnswer;

                    return (
                        React.createElement('div', { key: question.id, className: 'question-card' },
                            React.createElement('p', { className: 'question-sentence' },
                                React.createElement('span', { className: 'question-number' }, index + 1, '.'),
                                question.sentenceParts[0],
                                React.createElement('strong', { className: 'interactive-number' }, '(', question.number, ')'),
                                React.createElement('input', {
                                    type: 'text',
                                    className: `interactive-input ${showResults ? (isCorrect ? 'correct' : 'incorrect') : ''}`,
                                    value: userInputs[question.id] || '',
                                    onChange: (e) => handleInputChange(question.id, e.target.value),
                                    disabled: showResults,
                                    'aria-label': `Answer for question ${index + 1}`
                                }),
                                question.sentenceParts[1]
                            ),
                            showResults && (
                                React.createElement('div', { className: `feedback-text ${isCorrect ? 'correct-info' : 'incorrect'}` },
                                    isCorrect ? 'Correct! ' : React.createElement(React.Fragment, null, React.createElement('strong', null, 'Correct answer:'), ' ', correctAnswer, '. '),
                                    question.explanation
                                )
                            )
                        )
                    );
                })
            ),
            !showResults ? (
                React.createElement('button', { onClick: handleCheckAnswers, className: 'check-button' }, 'Check Answers')
            ) : (
                React.createElement('button', { onClick: handleRestart, className: 'check-button' }, 'Try Again')
            )
        )
    );
};

const InvitationQuiz = ({ quiz, onBack, introContent }) => {
    const { title, data: quizData } = quiz;
    const [userFillInAnswers, setUserFillInAnswers] = useState({});
    const [userComprehensionAnswers, setUserComprehensionAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const handleFillInSelect = (questionId, blankId, answer) => {
        if (showResults) return;
        const key = `q${questionId}-b${blankId}`;
        setUserFillInAnswers(prev => ({ ...prev, [key]: answer }));
    };

    const handleComprehensionChange = (questionId, compId, value) => {
        if (showResults) return;
        const key = `q${questionId}-c${compId}`;
        setUserComprehensionAnswers(prev => ({ ...prev, [key]: value }));
    };

    const handleCheckAnswers = () => {
        setShowResults(true);
        window.scrollTo(0, 0);
    };

    const handleRestart = () => {
        setUserFillInAnswers({});
        setUserComprehensionAnswers({});
        setShowResults(false);
    };
    
    const calculateScore = () => {
        let score = 0;
        quizData.forEach(q => {
            q.blanks.forEach(b => {
                const key = `q${q.id}-b${b.id}`;
                if (userFillInAnswers[key] === b.correctAnswer) {
                    score++;
                }
            });
            q.comprehension.forEach(c => {
                const key = `q${q.id}-c${c.id}`;
                const userAnswer = (userComprehensionAnswers[key] || '').trim().toLowerCase();
                if (userAnswer === c.correctAnswer.toLowerCase()) {
                    score++;
                }
            });
        });
        return score;
    };

    const calculateTotalPoints = () => {
        return quizData.reduce((total, q) => {
            return total + q.blanks.length + q.comprehension.length;
        }, 0);
    };

    const score = calculateScore();
    const totalPoints = calculateTotalPoints();

    const renderInvitationText = (text) => {
        const parts = text.split(/(___\(\d+\)___)/g);
        return parts.map((part, index) => {
            const match = part.match(/___\((\d+)\)___/);
            if (match) {
                const num = match[1];
                return React.createElement('span', { key: index, className: 'numbered-blank' }, `(${num})`);
            }
            return part.split('\n').map((line, i) => (
                React.createElement(React.Fragment, { key: `${index}-${i}` },
                    line,
                    i < part.split('\n').length - 1 && React.createElement('br', null)
                )
            ));
        });
    };

    return (
        React.createElement(React.Fragment, null,
            introContent,
            React.createElement('header', null,
                React.createElement('div', { className: 'page-header' },
                    React.createElement('button', { className: 'back-button', onClick: onBack }, '← Exercises'),
                    React.createElement('h1', null, title)
                ),
                React.createElement('p', { className: 'instructions' },
                    'Read the invitations, fill in the blanks, and answer the comprehension questions.',
                    React.createElement('br', null),
                    React.createElement('em', null, 'Lies die Einladungen, fülle die Lücken aus und beantworte die Verständnisfragen.')
                )
            ),

            showResults && (
                React.createElement('div', { className: 'score-summary', role: 'alert' },
                    React.createElement('h2', null, 'Your Score: ', score, ' / ', totalPoints)
                )
            ),

            React.createElement('div', { className: 'invitation-quiz' },
                quizData.map((question) => (
                    React.createElement('div', { key: question.id, className: 'invitation-card' },
                        React.createElement('div', { className: 'invitation-text-container' },
                            React.createElement('h3', null, question.invitationTitle),
                            React.createElement('p', { className: 'invitation-text' },
                                renderInvitationText(question.sentence)
                            )
                        ),
                        React.createElement('div', { className: 'fill-in-blanks-section' },
                            React.createElement('h4', null, 'Fülle die Lücken aus:'),
                            question.blanks.map(blank => {
                                const key = `q${question.id}-b${blank.id}`;
                                const userAnswer = userFillInAnswers[key];
                                const isCorrect = userAnswer === blank.correctAnswer;
                                return (
                                React.createElement('div', { key: blank.id, className: 'blank-options-group' },
                                    React.createElement('p', { className: 'blank-label' }, `Lücke (${blank.id}):`),
                                    React.createElement('div', { className: 'options', role: 'group' },
                                        blank.options.map(option => {
                                            let buttonClass = 'option-button';
                                            if (showResults) {
                                                if (option === blank.correctAnswer) buttonClass += ' correct';
                                                else if (option === userAnswer) buttonClass += ' incorrect';
                                            } else if (option === userAnswer) {
                                                buttonClass += ' selected';
                                            }
                                            return (
                                                React.createElement('button', { key: option, onClick: () => handleFillInSelect(question.id, blank.id, option), className: buttonClass, disabled: showResults },
                                                    option
                                                )
                                            );
                                        })
                                    ),
                                     showResults && userAnswer !== undefined && (
                                        React.createElement('div', { className: `feedback-text ${isCorrect ? 'correct-info' : 'incorrect'}` }, blank.explanation)
                                     )
                                )
                            )})
                        ),
                        React.createElement('div', { className: 'comprehension-section' },
                             React.createElement('h4', null, 'Beantworte die Fragen:'),
                             React.createElement('table', { className: 'comprehension-table' },
                                 React.createElement('tbody', null,
                                     question.comprehension.map(comp => {
                                         const key = `q${question.id}-c${comp.id}`;
                                         const userAnswer = (userComprehensionAnswers[key] || '').trim();
                                         const isCorrect = userAnswer.toLowerCase() === comp.correctAnswer.toLowerCase();
                                         return (
                                         React.createElement('tr', { key: comp.id },
                                             React.createElement('td', null, React.createElement('label', { htmlFor: key }, comp.question)),
                                             React.createElement('td', null,
                                                 React.createElement('input', { 
                                                    type: 'text', 
                                                    id: key,
                                                    value: userComprehensionAnswers[key] || '',
                                                    onChange: (e) => handleComprehensionChange(question.id, comp.id, e.target.value),
                                                    disabled: showResults,
                                                    className: showResults ? (isCorrect ? 'correct' : 'incorrect') : ''
                                                 }),
                                                 showResults && !isCorrect && (
                                                     React.createElement('div', { className: 'comprehension-feedback incorrect' },
                                                        React.createElement('strong', null, 'Correct answer:'), ' ', comp.correctAnswer
                                                     )
                                                 )
                                             )
                                         )
                                     )})
                                 )
                             )
                        )
                    )
                ))
            ),
            !showResults ? (
                React.createElement('button', { onClick: handleCheckAnswers, className: 'check-button' }, 'Check Answers')
            ) : (
                React.createElement('button', { onClick: handleRestart, className: 'check-button' }, 'Try Again')
            )
        )
    );
};

const Quiz = ({ quiz, onBack, introContent }) => {
  const { title, data: quizData } = quiz;
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [visibleHints, setVisibleHints] = useState({});
  const [visibleTranslations, setVisibleTranslations] = useState({});
  
  const handleAnswerSelect = (questionId, answer) => {
    if (showResults) return;
    setUserAnswers({
      ...userAnswers,
      [questionId]: answer,
    });
  };

  const toggleHint = (questionId) => {
    setVisibleHints({
      ...visibleHints,
      [questionId]: !visibleHints[questionId],
    });
  };

  const toggleTranslation = (questionId) => {
    setVisibleTranslations({
      ...visibleTranslations,
      [questionId]: !visibleTranslations[questionId],
    });
  };

  const getSentenceForSpeech = (question) => {
    if (question.sentenceParts) {
       return question.sentenceParts.join('...');
    }
    return question.sentence.replace(/___/g, '...');
  };

  const handleSpeak = (sentence) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(sentence);
      utterance.lang = 'de-DE';
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Sorry, your browser does not support text-to-speech.');
    }
  };

  const handleCheckAnswers = () => {
    setShowResults(true);
    window.scrollTo(0, 0); 
  };
  
  const handleRestart = () => {
    setUserAnswers({});
    setShowResults(false);
    setVisibleHints({});
    setVisibleTranslations({});
  }

  const calculateScore = () => {
    let correctAnswers = 0;
    quizData.forEach(question => {
        if (question.sentenceParts) { // Multi-blank
            question.blanks.forEach((blank, index) => {
                const blankId = `${question.id}-${index}`;
                if (blank.correctAnswer.includes(userAnswers[blankId])) {
                    correctAnswers++;
                }
            });
        } else { // Single-blank
            if (question.correctAnswer && question.correctAnswer.includes(userAnswers[question.id])) {
                correctAnswers++;
            }
        }
    });
    return correctAnswers;
  };

  const calculateTotalBlanks = () => {
      return quizData.reduce((total, question) => {
          return total + (question.blanks ? question.blanks.length : 1);
      }, 0);
  };
  
  const score = calculateScore();
  const totalBlanks = calculateTotalBlanks();

  return (
    React.createElement(React.Fragment, null,
      introContent,
      React.createElement('header', null,
         React.createElement('div', { className: 'page-header' },
           React.createElement('button', { className: 'back-button', onClick: onBack }, '← Exercises'),
           React.createElement('h1', null, title)
        ),
        React.createElement('p', { className: 'instructions' },
          'Choose the correct answer for each question.',
          React.createElement('br', null),
          React.createElement('em', null, 'Wähle die richtige Antwort für jede Frage.')
        )
      ),

      showResults && (
        React.createElement('div', { className: 'score-summary', role: 'alert' },
          React.createElement('h2', null, 'Your Score: ', score, ' / ', totalBlanks)
        )
      ),

      React.createElement('div', { className: 'quiz' },
        quizData.map((question, index) => {
          const isMultiBlank = !!question.sentenceParts;

          if (isMultiBlank) {
            return (
              React.createElement('div', { key: question.id, className: 'question-card', 'aria-labelledby': `question-title-${question.id}` },
                React.createElement('div', { className: 'question-header' },
                  React.createElement('h3', { id: `question-title-${question.id}`, className: 'multi-blank-title' },
                    React.createElement('span', { className: 'question-number' }, index + 1, '.'),
                    'Complete the text:'
                  ),
                  React.createElement('div', { className: 'action-buttons-container' },
                    React.createElement('button', { onClick: () => handleSpeak(getSentenceForSpeech(question)), className: 'action-button', 'aria-label': `Read question ${index + 1} aloud` }, '🔊'),
                    question.translation && React.createElement('button', { onClick: () => toggleTranslation(question.id), className: 'action-button', 'aria-label': `Translate question ${index + 1}` }, 'T'),
                    question.hint && React.createElement('button', { onClick: () => toggleHint(question.id), className: 'action-button', 'aria-label': `Show hint for question ${index + 1}`, 'aria-expanded': !!visibleHints[question.id] }, '?')
                  )
                ),

                React.createElement('div', { className: 'multi-blank-content' },
                  question.sentenceParts.map((part, i) => {
                    const blank = question.blanks[i];
                    if (!blank) {
                      return React.createElement('span', { key: i, className: 'sentence-part' }, part);
                    }

                    const blankId = `${question.id}-${i}`;
                    const userAnswer = userAnswers[blankId];
                    const isAnswered = userAnswer !== undefined;
                    const isCorrect = blank.correctAnswer.includes(userAnswer);

                    return (
                      React.createElement(React.Fragment, { key: i },
                        React.createElement('span', { className: 'sentence-part' }, part),
                        React.createElement('div', { className: 'inline-blank-section' },
                          React.createElement('div', { className: 'options', role: 'group', 'aria-label': `Options for blank ${i + 1}` },
                            blank.options.map((option) => {
                              let buttonClass = 'option-button';
                              if (showResults) {
                                if (blank.correctAnswer.includes(option)) buttonClass += ' correct';
                                else if (option === userAnswer) buttonClass += ' incorrect';
                              } else if (option === userAnswer) {
                                buttonClass += ' selected';
                              }
                              return (
                                React.createElement('button', { key: option, onClick: () => handleAnswerSelect(blankId, option), className: buttonClass, disabled: showResults, 'aria-pressed': userAnswer === option },
                                  option
                                )
                              );
                            })
                          ),
                          showResults && isAnswered && (
                            React.createElement('div', { className: `feedback-text ${isCorrect ? 'correct-info' : 'incorrect'}` },
                              blank.explanation
                            )
                          )
                        )
                      )
                    );
                  })
                ),

                visibleTranslations[question.id] && !showResults && question.translation && React.createElement('p', { className: 'translation-text' }, React.createElement('em', null, question.translation)),
                visibleHints[question.id] && !showResults && React.createElement('p', { className: 'hint-text' }, question.hint)
              )
            );
          }
          
          // Single-blank question rendering
          const userAnswer = userAnswers[question.id];
          const isAnswered = userAnswer !== undefined;
          const isCorrect = question.correctAnswer && question.correctAnswer.includes(userAnswer);
          const isIncorrect = showResults && isAnswered && !isCorrect;

          return (
            React.createElement('div', { key: question.id, className: 'question-card', 'aria-labelledby': `question-title-${question.id}` },
              React.createElement('div', { className: 'question-header' },
                React.createElement('p', { id: `question-title-${question.id}`, className: 'question-sentence' },
                  React.createElement('span', { className: 'question-number' }, index + 1, '.'),
                  question.sentence.split('___')[0],
                  React.createElement('span', { className: 'blank' }, '___'),
                  question.sentence.split('___')[1]
                ),
                React.createElement('div', { className: 'action-buttons-container' },
                  React.createElement('button', { onClick: () => handleSpeak(getSentenceForSpeech(question)), className: 'action-button', 'aria-label': `Read question ${index + 1} aloud` }, '🔊'),
                  question.translation && React.createElement('button', { onClick: () => toggleTranslation(question.id), className: 'action-button', 'aria-label': `Translate question ${index + 1}` }, 'T'),
                  question.hint && React.createElement('button', { onClick: () => toggleHint(question.id), className: 'action-button', 'aria-label': `Show hint for question ${index + 1}`, 'aria-expanded': !!visibleHints[question.id] }, '?')
                )
              ),
              React.createElement('div', { className: 'options', role: 'group', 'aria-labelledby': `question-title-${question.id}` },
                question.options.map((option) => {
                  let buttonClass = 'option-button';
                  if (showResults) {
                    if (question.correctAnswer && question.correctAnswer.includes(option)) {
                      buttonClass += ' correct';
                    } else if (option === userAnswer) {
                      buttonClass += ' incorrect';
                    }
                  } else if (option === userAnswer) {
                    buttonClass += ' selected';
                  }

                  return (
                    React.createElement('button', { key: option, onClick: () => handleAnswerSelect(question.id, option), className: buttonClass, disabled: showResults, 'aria-pressed': userAnswer === option },
                      option
                    )
                  );
                })
              ),
              visibleTranslations[question.id] && !showResults && question.translation && React.createElement('p', { className: 'translation-text' }, React.createElement('em', null, question.translation)),
              visibleHints[question.id] && !showResults && React.createElement('p', { className: 'hint-text' }, question.hint),
              
              showResults && isAnswered && (isIncorrect || (isCorrect && !question.answerDetails)) && (
                React.createElement('div', { className: `feedback-text ${isCorrect ? 'correct-info' : 'incorrect'}` },
                  React.createElement('strong', null, 'Explanation:'), ' ', question.explanation
                )
              ),
               showResults && isCorrect && question.answerDetails && (
                React.createElement('div', { className: 'feedback-text correct-info' },
                    React.createElement('strong', null, 'Good to know:'), ' Multiple articles are correct here, depending on the meaning:',
                    React.createElement('ul', null,
                        question.correctAnswer.map(ans => (
                            React.createElement('li', { key: ans },
                                React.createElement('strong', null, ans), ' — ', question.answerDetails[ans]
                            )
                        ))
                    )
                )
              )
            )
          );
        })
      ),
      
      !showResults ? (
        React.createElement('button', { onClick: handleCheckAnswers, className: 'check-button' },
          'Check Answers'
        )
      ) : (
         React.createElement('button', { onClick: handleRestart, className: 'check-button' },
          'Try Again'
        )
      )
    )
  );
};


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
        switch (page) {
            case 'home':
                return (
                    React.createElement(React.Fragment, null,
                        React.createElement('header', null,
                            React.createElement('h1', null, 'German Grammar Chapters')
                        ),
                        React.createElement('main', { className: 'menu-container' },
                            Object.keys(chapters).map((id) => (
                                React.createElement('button', { key: id, className: 'menu-button', onClick: () => handleSelectChapter(id) },
                                    chapters[id].title
                                )
                            ))
                        )
                    )
                );
            case 'topic':
                const chapter = chapters[currentChapterId];
                return (
                    React.createElement(React.Fragment, null,
                        React.createElement('header', { className: 'page-header' },
                            React.createElement('button', { className: 'back-button', onClick: () => setPage('home') }, '← Home'),
                            React.createElement('h1', null, chapter.title)
                        ),
                        React.createElement('main', { className: 'menu-container' },
                             Object.keys(chapter.quizzes).map((id) => (
                                React.createElement('button', { key: id, className: 'menu-button', onClick: () => handleSelectQuiz(id) },
                                    chapter.quizzes[id].title
                                )
                            ))
                        )
                    )
                );
            case 'quiz':
                const currentChapter = chapters[currentChapterId];
                const quizData = currentChapter.quizzes[currentQuizId];
                
                let intro = null;
                if (currentQuizId === 'ex0') {
                    intro = React.createElement(IntroContent, null);
                } else if (currentQuizId === 'modalEx0') {
                    intro = React.createElement(ModalIntroContent, null);
                } else if (currentQuizId === 'numEx0') {
                    intro = React.createElement(NumbersIntroContent, null);
                } else if (currentQuizId === 'proEx0') {
                    intro = React.createElement(PronounsIntroContent, null);
                } else if (currentQuizId === 'proEx3') {
                    intro = React.createElement(WerWenIntroContent, null);
                } else if (currentQuizId === 'invEx0' || currentQuizId === 'invEx3') {
                    intro = React.createElement(InvitationsIntroContent, null);
                } else if (currentQuizId === 'prepEx0') {
                    intro = React.createElement(PrepositionsIntroContent, null);
                } else if (currentQuizId === 'prepEx2') {
                    intro = React.createElement(AkkusativPrepositionsIntroContent, null);
                }

                if (currentQuizId === 'invEx3') {
                    return React.createElement(InvitationQuiz, { quiz: quizData, onBack: () => setPage('topic'), introContent: intro });
                }
                if (quizData.type === 'interactive_ordinal') {
                    return React.createElement(InteractiveOrdinalQuiz, { quiz: quizData, onBack: () => setPage('topic'), introContent: intro });
                }
                return React.createElement(Quiz, { quiz: quizData, onBack: () => setPage('topic'), introContent: intro });
            default:
                return React.createElement('h1', null, 'Page not found');
        }
    };

    return React.createElement('div', { className: 'container' }, renderPage());
}


const container = document.getElementById('app-container');
const root = createRoot(container);
root.render(React.createElement(App, null));