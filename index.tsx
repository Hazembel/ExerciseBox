import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { exercise0Data } from './data/exercise0';
import { exercise1Data } from './data/exercise1';
import { exercise2Data } from './data/exercise2';
import { exercise3Data } from './data/exercise3';
import { exercise4Data } from './data/exercise4';
import { exercise5Data } from './data/exercise5';
import { exercise6Data } from './data/exercise6';
import { modalExercise0Data } from './data/modalExercise0';
import { modalExercise1Data } from './data/modalExercise1';
import { modalExercise2Data } from './data/modalExercise2';
import { modalExercise3Data } from './data/modalExercise3';
import { modalExercise4Data } from './data/modalExercise4';
import { modalExercise5Data } from './data/modalExercise5';
import { interactiveOrdinalData } from './data/interactiveOrdinalData';
import { numbersExercise0Data } from './data/numbersExercise0';
import { numbersExercise1Data } from './data/numbersExercise1';
import { numbersExercise2Data } from './data/numbersExercise2';
import { numbersExercise3Data } from './data/numbersExercise3';
import { personalPronounsEx0Data } from './data/personalPronounsEx0';
import { personalPronounsEx1Data } from './data/personalPronounsEx1';
import { personalPronounsEx2Data } from './data/personalPronounsEx2';
import { personalPronounsEx3Data } from './data/personalPronounsEx3';
import { personalPronounsEx4Data } from './data/personalPronounsEx4';
import { invitationsEx0Data } from './data/invitationsEx0';
import { invitationsEx1Data } from './data/invitationsEx1';
import { invitationsEx2Data } from './data/invitationsEx2';
import { invitationsEx3Data } from './data/invitationsEx3';
import { prepositionsEx0Data } from './data/prepositionsEx0';
import { prepositionsEx1Data } from './data/prepositionsEx1';
import { prepositionsEx2Data } from './data/prepositionsEx2';
import { prepositionsEx3Data } from './data/prepositionsEx3';


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
    <div className="intro-content">
        <h2 className="intro-header">Nominativ & Akkusativ: The Basics</h2>
        <div className="rule-box">
            <h3>When to use Nominativ (Subject)</h3>
            <p>The <strong>Nominativ</strong> case is for the <strong>subject</strong> of the sentence. The subject is the person or thing doing the action. Ask <strong>Wer?</strong> (Who?) or <strong>Was?</strong> (What?) to find it.</p>
            <ul>
                <li><em>“<strong>Der Mann</strong> schläft.”</em> &rarr; <strong>Wer</strong> schläft? &rarr; Der Mann.</li>
                <li><em>“<strong>Ein Hund</strong> spielt.”</em> &rarr; <strong>Was</strong> spielt? &rarr; Ein Hund.</li>
            </ul>
        </div>
        <div className="rule-box">
            <h3>When to use Akkusativ (Direct Object)</h3>
            <p>The <strong>Akkusativ</strong> case is for the <strong>direct object</strong>. The direct object is the person or thing that receives the action. Ask <strong>Wen?</strong> (Whom?) or <strong>Was?</strong> (What?) to find it.</p>
            <ul>
                <li><em>“Ich sehe <strong>den Mann</strong>.”</em> &rarr; <strong>Wen</strong> sehe ich? &rarr; den Mann.</li>
                <li><em>“Er kauft <strong>einen Hund</strong>.”</em> &rarr; <strong>Was</strong> kauft er? &rarr; einen Hund.</li>
            </ul>
        </div>
        
        <h3>Articles Overview (Nominativ &rarr; Akkusativ)</h3>
        <table className="article-table">
            <thead>
                <tr>
                    <th>Gender</th>
                    <th>Nominativ</th>
                    <th>Akkusativ</th>
                    <th>Change?</th>
                </tr>
            </thead>
            <tbody>
                <tr className="masculine-row">
                    <td>Maskulin (m.)</td>
                    <td><strong>der / ein / kein</strong></td>
                    <td><strong>den / einen / keinen</strong></td>
                    <td className="change-highlight">Yes!</td>
                </tr>
                <tr>
                    <td>Feminin (f.)</td>
                    <td>die / eine / keine</td>
                    <td>die / eine / keine</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>Neutrum (n.)</td>
                    <td>das / ein / kein</td>
                    <td>das / ein / kein</td>
                    <td>No</td>
                </tr>
                 <tr>
                    <td>Plural</td>
                    <td>die / keine</td>
                    <td>die / keine</td>
                    <td>No</td>
                </tr>
            </tbody>
        </table>

        <div className="rule-box summary">
            <h3>Mini Rules & Tricks</h3>
            <ol>
                <li>Ask <strong>Wer/Was?</strong> for <strong>Nominativ</strong> (subject).</li>
                <li>Ask <strong>Wen/Was?</strong> for <strong>Akkusativ</strong> (direct object).</li>
                <li><strong>Only MASKULIN SINGULAR changes in Akkusativ.</strong> (der &rarr; den, ein &rarr; einen, kein &rarr; keinen).</li>
                <li>All other articles (feminine, neutral, plural) stay the same in Akkusativ.</li>
            </ol>
        </div>
    </div>
);

const ModalIntroContent = () => (
    <div className="intro-content">
        <h2 className="intro-header">Modal Verbs: The Basics</h2>
        <div className="rule-box">
            <h3>What are Modal Verbs?</h3>
            <p>Modal verbs (Modalverben) change or add to the meaning of the main verb in a sentence. They express ability, necessity, permission, or desire.</p>
            <ul>
                <li><em>Ich <strong>kann</strong> schwimmen.</em> (I <strong>can</strong> swim - ability)</li>
                <li><em>Du <strong>musst</strong> lernen.</em> (You <strong>must</strong> learn - necessity)</li>
            </ul>
        </div>
        <div className="rule-box summary">
            <h3>The Golden Rule of Sentence Structure</h3>
            <ol>
                <li>The <strong>modal verb</strong> is conjugated and goes in the <strong>second position</strong>.</li>
                <li>The <strong>main verb</strong> goes to the <strong>very end</strong> of the sentence in its original <strong>infinitive</strong> form.</li>
            </ol>
            <p><strong>Subject</strong> + <strong>[conjugated modal verb]</strong> + ...<em>(rest of sentence)</em>... + <strong>[infinitive main verb]</strong>.</p>
            <p>Example: <em>Ich <strong>muss</strong> heute Deutsch <strong>lernen</strong>.</em></p>
        </div>
        
        <h3>Conjugation in Present Tense (Präsens)</h3>
        <p>Note the vowel changes in singular forms, and that 'ich' and 'er/sie/es' have the exact same form!</p>
        <table className="modal-table">
            <thead>
                <tr>
                    <th>Pronoun</th>
                    <th>können (can)</th>
                    <th>müssen (must)</th>
                    <th>dürfen (may)</th>
                    <th>wollen (want)</th>
                    <th>sollen (should)</th>
                    <th>möchten (would like)</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>ich</td><td>kann</td><td>muss</td><td>darf</td><td>will</td><td>soll</td><td>möchte</td></tr>
                <tr><td>du</td><td>kannst</td><td>musst</td><td>darfst</td><td>willst</td><td>sollst</td><td>möchtest</td></tr>
                <tr><td>er/sie/es</td><td>kann</td><td>muss</td><td>darf</td><td>will</td><td>soll</td><td>möchte</td></tr>
                <tr><td>wir</td><td>können</td><td>müssen</td><td>dürfen</td><td>wollen</td><td>sollen</td><td>möchten</td></tr>
                <tr><td>ihr</td><td>könnt</td><td>müsst</td><td>dürft</td><td>wollt</td><td>sollt</td><td>möchtet</td></tr>
                <tr><td>sie/Sie</td><td>können</td><td>müssen</td><td>dürfen</td><td>wollen</td><td>sollen</td><td>möchten</td></tr>
            </tbody>
        </table>
    </div>
);

const NumbersIntroContent = () => (
    <div className="intro-content">
        <h2 className="intro-header">Numbers & Dates: The Basics</h2>

        {/* Cardinal Numbers */}
        <div className="rule-box">
            <h3>Cardinal Numbers (Kardinalzahlen)</h3>
            <p>These are the normal counting numbers. The structure for numbers 21-99 is unique: <strong>(Unit)</strong> + <strong>und</strong> + <strong>(Ten)</strong>. For example, 21 is "ein<strong>und</strong>zwanzig" (one-and-twenty).</p>
        </div>
        <table className="numbers-table">
            <thead>
                <tr><th>Number</th><th>German</th><th>Number</th><th>German</th></tr>
            </thead>
            <tbody>
                <tr><td>1</td><td>eins</td><td>11</td><td>elf</td></tr>
                <tr><td>2</td><td>zwei</td><td>12</td><td>zwölf</td></tr>
                <tr><td>3</td><td>drei</td><td>20</td><td>zwanzig</td></tr>
                <tr><td>4</td><td>vier</td><td>21</td><td>einundzwanzig</td></tr>
                <tr><td>5</td><td>fünf</td><td>30</td><td>dreißig</td></tr>
                <tr><td>6</td><td>sechs</td><td>40</td><td>vierzig</td></tr>
                <tr><td>7</td><td>sieben</td><td>50</td><td>fünfzig</td></tr>
                <tr><td>8</td><td>acht</td><td>100</td><td>(ein)hundert</td></tr>
            </tbody>
        </table>

        {/* Ordinal Numbers */}
        <div className="rule-box">
            <h3>Ordinal Numbers (Ordinalzahlen)</h3>
            <p>These numbers indicate position (first, second, third). They are essential for dates.</p>
            <ul>
                <li>For numbers <strong>1-19</strong>, add the ending <strong>-te</strong>. (e.g., vier &rarr; vier<strong>te</strong>)</li>
                <li>For numbers <strong>20 and above</strong>, add the ending <strong>-ste</strong>. (e.g., zwanzig &rarr; zwanzig<strong>ste</strong>)</li>
                <li><strong>Exceptions:</strong> 1st = <strong>erste</strong>, 3rd = <strong>dritte</strong>, 7th = <strong>siebte</strong>, 8th = <strong>achte</strong>.</li>
            </ul>
        </div>

        {/* Dates */}
        <div className="rule-box summary">
            <h3>Writing Dates (das Datum)</h3>
            <p>The ending of the ordinal number changes depending on the grammar case.</p>
            <ol>
                <li>
                    <strong>Nominativ Case:</strong> Used after "der/die/das". The ending is usually <strong>-e</strong>.
                    <ul><li><em>Heute ist <strong>der erst<span className="change-highlight">e</span></strong> Mai.</em> (Today is the first of May.)</li></ul>
                </li>
                <li>
                    <strong>Dativ Case:</strong> Used after prepositions like "am" (on the). The ending is always <strong>-en</strong>.
                    <ul><li><em>Ich habe <strong>am erst<span className="change-highlight">en</span></strong> Mai Geburtstag.</em> (My birthday is on the first of May.)</li></ul>
                </li>
                 <li>
                    <strong>Predicate Nominative:</strong> Used after "als" (as the...). The ending depends on the gender of the subject.
                    <ul><li><em>Er kam als Erst<span className="change-highlight">er</span> ins Ziel.</em> (He arrived as the first.)</li></ul>
                </li>
            </ol>
             <p><strong>Remember:</strong> If you see "am", the ordinal number will end in <strong>-en</strong>!</p>
        </div>
    </div>
);

const PronounsIntroContent = () => (
    <div className="intro-content">
        <h2 className="intro-header">Personal Pronouns: The Basics</h2>
        <div className="rule-box">
            <h3>Who is doing what to whom?</h3>
            <p>Personal pronouns change depending on their job in the sentence. This "job" is called the grammatical case.</p>
            <ul>
                <li><strong>Nominativ (Subject):</strong> The person/thing DOING the action. (<strong>I</strong> see the dog.)</li>
                <li><strong>Akkusativ (Direct Object):</strong> The person/thing RECEIVING the action. (The dog sees <strong>me</strong>.)</li>
                <li><strong>Dativ (Indirect Object):</strong> The person/thing to/for whom the action is done. (I give the bone to <strong>him</strong>.)</li>
            </ul>
        </div>
         <div className="rule-box summary">
            <h3>Asking the Right Question</h3>
             <p>To find the correct case, ask these questions about the verb:</p>
            <ul>
                <li><strong>Wer?</strong> (Who?) &rarr; Nominativ (Subject)</li>
                <li><strong>Wen?</strong> (Whom?) &rarr; Akkusativ (Direct Object)</li>
                <li><strong>Wem?</strong> (To whom?) &rarr; Dativ (Indirect Object)</li>
            </ul>
             <p>Example: <em>"Er gibt mir das Buch." (He gives me the book.)</em></p>
             <ol>
                <li><strong>Wer</strong> gibt das Buch? &rarr; <strong>Er</strong> (He) &rarr; Nominativ</li>
                <li><strong>Was</strong> gibt er? &rarr; das Buch (the book) &rarr; Akkusativ</li>
                <li><strong>Wem</strong> gibt er das Buch? &rarr; <strong>mir</strong> (to me) &rarr; Dativ</li>
             </ol>
        </div>
        <h3>Personal Pronoun Forms</h3>
        <table className="pronoun-table">
            <thead>
                <tr>
                    <th>Nominativ (Subject)</th>
                    <th>Akkusativ (Direct Object)</th>
                    <th>Dativ (Indirect Object)</th>
                </tr>
            </thead>
            <tbody>
                <tr><td><strong>ich</strong> (I)</td><td className="change-highlight"><strong>mich</strong> (me)</td><td className="change-highlight"><strong>mir</strong> (to me)</td></tr>
                <tr><td><strong>du</strong> (you)</td><td className="change-highlight"><strong>dich</strong> (you)</td><td className="change-highlight"><strong>dir</strong> (to you)</td></tr>
                <tr><td><strong>er</strong> (he)</td><td className="change-highlight"><strong>ihn</strong> (him)</td><td><strong>ihm</strong> (to him)</td></tr>
                <tr><td><strong>sie</strong> (she)</td><td><strong>sie</strong> (her)</td><td className="change-highlight"><strong>ihr</strong> (to her)</td></tr>
                <tr><td><strong>es</strong> (it)</td><td><strong>es</strong> (it)</td><td><strong>ihm</strong> (to it)</td></tr>
                <tr><td><strong>wir</strong> (we)</td><td><strong>uns</strong> (us)</td><td><strong>uns</strong> (to us)</td></tr>
                <tr><td><strong>ihr</strong> (you all)</td><td><strong>euch</strong> (you all)</td><td><strong>euch</strong> (to you all)</td></tr>
                <tr><td><strong>sie</strong> (they)</td><td><strong>sie</strong> (them)</td><td className="change-highlight"><strong>ihnen</strong> (to them)</td></tr>
                <tr><td><strong>Sie</strong> (you, formal)</td><td><strong>Sie</strong> (you, formal)</td><td className="change-highlight"><strong>Ihnen</strong> (to you, formal)</td></tr>
            </tbody>
        </table>
    </div>
);

const WerWenIntroContent = () => (
    <div className="intro-content">
        <h2 className="intro-header">Wer vs. Wen: Asking "Who?"</h2>
        <div className="rule-box">
            <h3>Wer? (Nominativ) - The Subject</h3>
            <p>Use <strong>Wer</strong> to ask about the person or people who are <strong>doing the action</strong>. It asks for the subject of the sentence.</p>
            <ul>
                <li>The answer to a "Wer?" question is in the Nominativ case.</li>
                <li><em><strong>Wer</strong> hat den Kuchen gegessen?</em> &rarr; <em><strong>Der Junge</strong> hat den Kuchen gegessen.</em> (Who ate the cake? The boy ate the cake.)</li>
                <li><em><strong>Wer</strong> kommt zur Party?</em> &rarr; <em><strong>Meine Freunde</strong> kommen.</em> (Who is coming to the party? My friends are coming.)</li>
            </ul>
        </div>
        <div className="rule-box">
            <h3>Wen? (Akkusativ) - The Direct Object</h3>
            <p>Use <strong>Wen</strong> to ask about the person or people who are <strong>receiving the action</strong>. It asks for the direct object of the sentence.</p>
            <ul>
                <li>The answer to a "Wen?" question is in the Akkusativ case.</li>
                <li><em><strong>Wen</strong> siehst du?</em> &rarr; <em>Ich sehe <strong>den Jungen</strong>.</em> (Whom do you see? I see the boy.)</li>
                <li><em><strong>Wen</strong> besuchen wir heute?</em> &rarr; <em>Wir besuchen <strong>unsere Tante</strong>.</em> (Whom are we visiting today? We are visiting our aunt.)</li>
            </ul>
        </div>
        <div className="rule-box summary">
            <h3>The Trick</h3>
            <ol>
                <li>If the blank is the <strong>subject</strong> (the one performing the verb), use <strong>Wer</strong>.</li>
                <li>If the blank is the <strong>direct object</strong> (the one the verb is happening to), use <strong>Wen</strong>.</li>
                <li>Try answering the question. If the answer is "der Mann", use "Wer". If the answer is "den Mann", use "Wen".</li>
            </ol>
        </div>
    </div>
);

const InvitationsIntroContent = () => (
    <div className="intro-content">
        <h2 className="intro-header">Einladen (Invitations): The Basics</h2>

        <div className="rule-box">
            <h3>Types of Parties & Celebrations (Arten von Partys & Feiern)</h3>
            <p>Here is some common vocabulary for events you might be invited to.</p>
        </div>
        <table className="article-table">
            <thead>
                <tr><th>German</th><th>English</th></tr>
            </thead>
            <tbody>
                <tr><td><strong>die Geburtstagsfeier</strong></td><td>Birthday party</td></tr>
                <tr><td><strong>die Hochzeit</strong></td><td>Wedding</td></tr>
                <tr><td><strong>die Weihnachtsfeier</strong></td><td>Christmas party</td></tr>
                <tr><td><strong>die Grillparty</strong></td><td>Barbecue party</td></tr>
                <tr><td><strong>die Silvesterparty</strong></td><td>New Year's Eve party</td></tr>
                <tr><td><strong>das Fest</strong></td><td>Festival / Celebration</td></tr>
            </tbody>
        </table>

        <div className="rule-box summary">
            <h3>How to Invite Someone (Jemanden einladen)</h3>
            <p>The most important verb is <strong>einladen</strong> (to invite). It's a separable-prefix verb, which means the "ein-" part goes to the end of the sentence.</p>
            <ul>
                <li>Ich <strong>lade</strong> dich <strong>ein</strong>. (I invite you.)</li>
                <li>Er <strong>lädt</strong> uns <strong>ein</strong>. (He invites us.) - Note the vowel change for er/sie/es!</li>
            </ul>
            <h4>Common Phrases:</h4>
            <ol>
                <li><strong>Ich lade dich zu ... ein.</strong> (I invite you to...)
                    <ul><li><em>Ich lade dich zu meiner Geburtstagsfeier ein.</em></li></ul>
                </li>
                <li><strong>Willst du / Möchtest du zu ... kommen?</strong> (Do you want to / Would you like to come to...?)
                    <ul><li><em>Willst du zu meiner Grillparty kommen?</em></li></ul>
                </li>
                <li><strong>Kommst du zu ...?</strong> (Are you coming to...?)
                     <ul><li><em>Kommst du zur Hochzeit?</em> (Note: <strong>zu + der = zur</strong>)</li></ul>
                </li>
            </ol>
        </div>
    </div>
);

const PrepositionsIntroContent = () => (
    <div className="intro-content">
        <h2 className="intro-header">German Prepositions Guide</h2>
        <div className="rule-box">
            <h3>The Three Groups of Prepositions</h3>
            <p>German prepositions are tricky because they determine the case of the noun that follows. They fall into three main groups based on the case they require.</p>
        </div>

        {/* Akkusativ Prepositions */}
        <h3>Akkusativ-Only Prepositions</h3>
        <p>These prepositions are always followed by the Akkusativ case. A common mnemonic is "DOG F.U.B." (Durch, Ohne, Gegen, Für, Um, Bis).</p>
        <table className="preposition-detail-table">
            <thead>
                <tr>
                    <th>Preposition</th>
                    <th>Meaning / Use</th>
                    <th>Example</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>durch</strong></td>
                    <td>through (motion), by means of</td>
                    <td><em>Wir fahren <strong>durch den</strong> Tunnel.</em> (We drive through the tunnel.)</td>
                </tr>
                <tr>
                    <td><strong>für</strong></td>
                    <td>for</td>
                    <td><em>Das Geschenk ist <strong>für dich</strong>.</em> (The gift is for you.)</td>
                </tr>
                <tr>
                    <td><strong>gegen</strong></td>
                    <td>against, into (collision)</td>
                    <td><em>Er läuft <strong>gegen die</strong> Wand.</em> (He runs into the wall.)</td>
                </tr>
                <tr>
                    <td><strong>ohne</strong></td>
                    <td>without</td>
                    <td><em>Ich gehe nicht <strong>ohne meinen</strong> Schirm.</em> (I'm not going without my umbrella.)</td>
                </tr>
                <tr>
                    <td><strong>um</strong></td>
                    <td>around, at (for time)</td>
                    <td><em>Wir sitzen <strong>um den</strong> Tisch. / Der Film beginnt <strong>um</strong> 8 Uhr.</em> (We sit around the table. / The film starts at 8.)</td>
                </tr>
                <tr>
                    <td><strong>bis</strong></td>
                    <td>until, by (often used with another preposition)</td>
                    <td><em>Der Laden ist <strong>bis</strong> 18 Uhr geöffnet.</em> (The store is open until 6 p.m.)</td>
                </tr>
                <tr>
                    <td><strong>entlang</strong></td>
                    <td>along (when it follows the noun)</td>
                    <td><em>Wir gehen <strong>den</strong> Fluss <strong>entlang</strong>.</em> (We are walking along the river.)</td>
                </tr>
            </tbody>
        </table>

        {/* Dativ Prepositions */}
        <h3>Dativ-Only Prepositions</h3>
        <p>These prepositions are always followed by the Dativ case.</p>
        <table className="preposition-detail-table">
            <thead>
                <tr>
                    <th>Preposition</th>
                    <th>Meaning / Use</th>
                    <th>Example</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>aus</strong></td>
                    <td>from (origin), out of</td>
                    <td><em>Sie kommt <strong>aus der</strong> Schweiz.</em> (She comes from Switzerland.)</td>
                </tr>
                <tr>
                    <td><strong>bei</strong></td>
                    <td>at, near, with (a person/company)</td>
                    <td><em>Er wohnt <strong>bei seinen</strong> Eltern.</em> (He lives with his parents.)</td>
                </tr>
                <tr>
                    <td><strong>mit</strong></td>
                    <td>with, by (means of transport)</td>
                    <td><em>Ich fahre <strong>mit dem</strong> Zug.</em> (I'm going by train.)</td>
                </tr>
                <tr>
                    <td><strong>nach</strong></td>
                    <td>to (cities/countries), after (time)</td>
                    <td><em>Wir fliegen <strong>nach</strong> Spanien. / <strong>Nach der</strong> Schule gehe ich heim.</em> (We are flying to Spain. / After school I go home.)</td>
                </tr>
                <tr>
                    <td><strong>seit</strong></td>
                    <td>since, for (a period of time)</td>
                    <td><em>Ich lerne <strong>seit einem</strong> Jahr Deutsch.</em> (I've been learning German for a year.)</td>
                </tr>
                <tr>
                    <td><strong>von</strong></td>
                    <td>from, by</td>
                    <td><em>Das ist ein Geschenk <strong>von meiner</strong> Tante.</em> (That is a gift from my aunt.)</td>
                </tr>
                <tr>
                    <td><strong>zu</strong></td>
                    <td>to (people, places, general direction)</td>
                    <td><em>Ich gehe <strong>zum</strong> Arzt.</em> (I'm going to the doctor.)</td>
                </tr>
                 <tr>
                    <td><strong>gegenüber</strong></td>
                    <td>opposite, across from</td>
                    <td><em>Die Bank ist <strong>dem</strong> Bahnhof <strong>gegenüber</strong>.</em> (The bank is opposite the train station.)</td>
                </tr>
            </tbody>
        </table>

        {/* Two-Way Prepositions */}
        <h3>Two-Way Prepositions (Wechselpräpositionen)</h3>
        <div className="two-way-rule">
            <h3>The Golden Rule: Location vs. Direction</h3>
            <p><strong>Wo? (Where?) &rarr; Location (static position) &rarr; DATIV</strong></p>
            <p><strong>Wohin? (Where to?) &rarr; Direction (movement to a place) &rarr; AKKUSATIV</strong></p>
        </div>
        <table className="preposition-detail-table">
            <thead>
                <tr>
                    <th>Preposition</th>
                    <th>Meaning</th>
                    <th>Example (Dativ - Wo?)</th>
                    <th>Example (Akkusativ - Wohin?)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>an</strong></td>
                    <td>on (vertical surface), at</td>
                    <td><em>Das Bild hängt <strong>an der</strong> Wand.</em> (The picture hangs on the wall.)</td>
                    <td><em>Ich hänge das Bild <strong>an die</strong> Wand.</em> (I hang the picture onto the wall.)</td>
                </tr>
                <tr>
                    <td><strong>auf</strong></td>
                    <td>on (horizontal surface)</td>
                    <td><em>Das Buch liegt <strong>auf dem</strong> Tisch.</em> (The book lies on the table.)</td>
                    <td><em>Ich lege das Buch <strong>auf den</strong> Tisch.</em> (I lay the book onto the table.)</td>
                </tr>
                <tr>
                    <td><strong>hinter</strong></td>
                    <td>behind</td>
                    <td><em>Der Hund ist <strong>hinter dem</strong> Haus.</em> (The dog is behind the house.)</td>
                    <td><em>Der Hund läuft <strong>hinter das</strong> Haus.</em> (The dog runs behind the house.)</td>
                </tr>
                <tr>
                    <td><strong>in</strong></td>
                    <td>in, into</td>
                    <td><em>Wir sind <strong>im</strong> Kino.</em> (We are in the cinema.)</td>
                    <td><em>Wir gehen <strong>ins</strong> Kino.</em> (We are going into the cinema.)</td>
                </tr>
                <tr>
                    <td><strong>neben</strong></td>
                    <td>next to, beside</td>
                    <td><em>Das Auto parkt <strong>neben dem</strong> Baum.</em> (The car is parked next to the tree.)</td>
                    <td><em>Fahr das Auto <strong>neben den</strong> Baum.</em> (Drive the car next to the tree.)</td>
                </tr>
                <tr>
                    <td><strong>über</strong></td>
                    <td>over, above</td>
                    <td><em>Die Lampe hängt <strong>über dem</strong> Tisch.</em> (The lamp hangs above the table.)</td>
                    <td><em>Das Flugzeug fliegt <strong>über die</strong> Stadt.</em> (The plane flies over the city.)</td>
                </tr>
                 <tr>
                    <td><strong>unter</strong></td>
                    <td>under, below</td>
                    <td><em>Die Katze schläft <strong>unter dem</strong> Stuhl.</em> (The cat sleeps under the chair.)</td>
                    <td><em>Die Katze kriecht <strong>unter den</strong> Stuhl.</em> (The cat crawls under the chair.)</td>
                </tr>
                <tr>
                    <td><strong>vor</strong></td>
                    <td>in front of, before (time)</td>
                    <td><em>Er steht <strong>vor der</strong> Tür.</em> (He is standing in front of the door.)</td>
                    <td><em>Stell dich <strong>vor die</strong> Tür.</em> (Stand in front of the door.)</td>
                </tr>
                 <tr>
                    <td><strong>zwischen</strong></td>
                    <td>between</td>
                    <td><em>Der Stuhl steht <strong>zwischen dem</strong> Tisch und dem Schrank.</em> (The chair stands between the table and the closet.)</td>
                    <td><em>Stell den Stuhl <strong>zwischen den</strong> Tisch und den Schrank.</em> (Put the chair between the table and the closet.)</td>
                </tr>
            </tbody>
        </table>
    </div>
);

const AkkusativPrepositionsIntroContent = () => (
    <div className="intro-content">
        <h2 className="intro-header">Akkusativ-Only Prepositions</h2>
        <div className="rule-box">
            <p>These prepositions are <strong>always</strong> followed by the Akkusativ case. The question to find the object is still "Wen?" or "Was?", but with these words, you don't have to decide between location and direction.</p>
        </div>
        <table className="preposition-detail-table">
            <thead>
                <tr>
                    <th>Preposition</th>
                    <th>Meaning / Use</th>
                    <th>Example</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>durch</strong></td>
                    <td>through (motion), by means of</td>
                    <td><em>Wir fahren <strong>durch den</strong> Tunnel.</em></td>
                </tr>
                <tr>
                    <td><strong>für</strong></td>
                    <td>for</td>
                    <td><em>Das Geschenk ist <strong>für dich</strong>.</em></td>
                </tr>
                <tr>
                    <td><strong>gegen</strong></td>
                    <td>against, into (collision)</td>
                    <td><em>Er läuft <strong>gegen die</strong> Wand.</em></td>
                </tr>
                <tr>
                    <td><strong>ohne</strong></td>
                    <td>without</td>
                    <td><em>Ich gehe nicht <strong>ohne meinen</strong> Schirm.</em></td>
                </tr>
                <tr>
                    <td><strong>um</strong></td>
                    <td>around, at (for time)</td>
                    <td><em>Wir sitzen <strong>um den</strong> Tisch. / Der Film beginnt <strong>um</strong> 8 Uhr.</em></td>
                </tr>
                 <tr>
                    <td><strong>bis</strong></td>
                    <td>until, by (often used with another preposition)</td>
                    <td><em>Der Laden ist <strong>bis</strong> 18 Uhr geöffnet.</em></td>
                </tr>
                <tr>
                    <td><strong>entlang</strong></td>
                    <td>along (when it follows the noun)</td>
                    <td><em>Wir gehen <strong>den</strong> Fluss <strong>entlang</strong>.</em></td>
                </tr>
            </tbody>
        </table>
    </div>
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
        <>
            {introContent}
            <header>
                <div className="page-header">
                    <button className="back-button" onClick={onBack}>&larr; Exercises</button>
                    <h1>{title}</h1>
                </div>
                <p className="instructions">
                    Type the number in parentheses as a German ordinal word with the correct ending.
                    <br />
                    <em>Schreibe die Zahl in Klammern als deutsches Ordinalzahlwort mit der richtigen Endung.</em>
                </p>
            </header>

            {showResults && (
                <div className="score-summary" role="alert">
                    <h2>Your Score: {score} / {quizData.length}</h2>
                </div>
            )}

            <div className="quiz">
                {quizData.map((question, index) => {
                    const correctAnswer = getCorrectOrdinal(question.number, question.context);
                    const userAnswer = (userInputs[question.id] || '').trim().toLowerCase();
                    const isCorrect = userAnswer === correctAnswer;

                    return (
                        <div key={question.id} className="question-card">
                            <p className="question-sentence">
                                <span className="question-number">{index + 1}.</span>
                                {question.sentenceParts[0]}
                                <strong className="interactive-number">({question.number})</strong>
                                <input
                                    type="text"
                                    className={`interactive-input ${showResults ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
                                    value={userInputs[question.id] || ''}
                                    onChange={(e) => handleInputChange(question.id, e.target.value)}
                                    disabled={showResults}
                                    aria-label={`Answer for question ${index + 1}`}
                                />
                                {question.sentenceParts[1]}
                            </p>
                            {showResults && (
                                <div className={`feedback-text ${isCorrect ? 'correct-info' : 'incorrect'}`}>
                                    {isCorrect ? 'Correct! ' : <><strong>Correct answer:</strong> {correctAnswer}. </>}
                                    {question.explanation}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            {!showResults ? (
                <button onClick={handleCheckAnswers} className="check-button">Check Answers</button>
            ) : (
                <button onClick={handleRestart} className="check-button">Try Again</button>
            )}
        </>
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
                return <span key={index} className="numbered-blank">({num})</span>;
            }
            return part.split('\n').map((line, i) => (
                <React.Fragment key={`${index}-${i}`}>
                    {line}
                    {i < part.split('\n').length - 1 && <br />}
                </React.Fragment>
            ));
        });
    };

    return (
        <>
            {introContent}
            <header>
                <div className="page-header">
                    <button className="back-button" onClick={onBack}>&larr; Exercises</button>
                    <h1>{title}</h1>
                </div>
                <p className="instructions">
                    Read the invitations, fill in the blanks, and answer the comprehension questions.
                    <br />
                    <em>Lies die Einladungen, fülle die Lücken aus und beantworte die Verständnisfragen.</em>
                </p>
            </header>

            {showResults && (
                <div className="score-summary" role="alert">
                    <h2>Your Score: {score} / {totalPoints}</h2>
                </div>
            )}

            <div className="invitation-quiz">
                {quizData.map((question) => (
                    <div key={question.id} className="invitation-card">
                        <div className="invitation-text-container">
                            <h3>{question.invitationTitle}</h3>
                            <p className="invitation-text">
                                {renderInvitationText(question.sentence)}
                            </p>
                        </div>

                        <div className="fill-in-blanks-section">
                            <h4>Fülle die Lücken aus:</h4>
                            {question.blanks.map(blank => {
                                const key = `q${question.id}-b${blank.id}`;
                                const userAnswer = userFillInAnswers[key];
                                const isCorrect = userAnswer === blank.correctAnswer;
                                return (
                                <div key={blank.id} className="blank-options-group">
                                    <p className="blank-label">Lücke ({blank.id}):</p>
                                    <div className="options" role="group">
                                        {blank.options.map(option => {
                                            let buttonClass = 'option-button';
                                            if (showResults) {
                                                if (option === blank.correctAnswer) buttonClass += ' correct';
                                                else if (option === userAnswer) buttonClass += ' incorrect';
                                            } else if (option === userAnswer) {
                                                buttonClass += ' selected';
                                            }
                                            return (
                                                <button key={option} onClick={() => handleFillInSelect(question.id, blank.id, option)} className={buttonClass} disabled={showResults}>
                                                    {option}
                                                </button>
                                            );
                                        })}
                                    </div>
                                     {showResults && userAnswer !== undefined && (
                                        <div className={`feedback-text ${isCorrect ? 'correct-info' : 'incorrect'}`}>{blank.explanation}</div>
                                     )}
                                </div>
                            )})}
                        </div>
                        
                        <div className="comprehension-section">
                             <h4>Beantworte die Fragen:</h4>
                             <table className="comprehension-table">
                                 <tbody>
                                     {question.comprehension.map(comp => {
                                         const key = `q${question.id}-c${comp.id}`;
                                         const userAnswer = (userComprehensionAnswers[key] || '').trim();
                                         const isCorrect = userAnswer.toLowerCase() === comp.correctAnswer.toLowerCase();
                                         return (
                                         <tr key={comp.id}>
                                             <td><label htmlFor={key}>{comp.question}</label></td>
                                             <td>
                                                 <input 
                                                    type="text" 
                                                    id={key}
                                                    value={userComprehensionAnswers[key] || ''}
                                                    onChange={(e) => handleComprehensionChange(question.id, comp.id, e.target.value)}
                                                    disabled={showResults}
                                                    className={showResults ? (isCorrect ? 'correct' : 'incorrect') : ''}
                                                 />
                                                 {showResults && !isCorrect && (
                                                     <div className="comprehension-feedback incorrect">
                                                        <strong>Correct answer:</strong> {comp.correctAnswer}
                                                     </div>
                                                 )}
                                             </td>
                                         </tr>
                                     )})}
                                 </tbody>
                             </table>
                        </div>
                    </div>
                ))}
            </div>

            {!showResults ? (
                <button onClick={handleCheckAnswers} className="check-button">Check Answers</button>
            ) : (
                <button onClick={handleRestart} className="check-button">Try Again</button>
            )}
        </>
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
    <>
      {introContent}
      <header>
         <div className="page-header">
           <button className="back-button" onClick={onBack}>&larr; Exercises</button>
           <h1>{title}</h1>
        </div>
        <p className="instructions">
          Choose the correct answer for each question.
          <br />
          <em>Wähle die richtige Antwort für jede Frage.</em>
        </p>
      </header>

      {showResults && (
        <div className="score-summary" role="alert">
          <h2>Your Score: {score} / {totalBlanks}</h2>
        </div>
      )}

      <div className="quiz">
        {quizData.map((question, index) => {
          const isMultiBlank = !!question.sentenceParts;

          if (isMultiBlank) {
            return (
              <div key={question.id} className="question-card" aria-labelledby={`question-title-${question.id}`}>
                <div className="question-header">
                  <h3 id={`question-title-${question.id}`} className="multi-blank-title">
                    <span className="question-number">{index + 1}.</span>
                    Complete the text:
                  </h3>
                  <div className="action-buttons-container">
                    <button onClick={() => handleSpeak(getSentenceForSpeech(question))} className="action-button" aria-label={`Read question ${index + 1} aloud`}>🔊</button>
                    {question.translation && <button onClick={() => toggleTranslation(question.id)} className="action-button" aria-label={`Translate question ${index + 1}`}>T</button>}
                    {question.hint && <button onClick={() => toggleHint(question.id)} className="action-button" aria-label={`Show hint for question ${index + 1}`} aria-expanded={!!visibleHints[question.id]}>?</button>}
                  </div>
                </div>

                <div className="multi-blank-content">
                  {question.sentenceParts.map((part, i) => {
                    const blank = question.blanks[i];
                    if (!blank) {
                      return <span key={i} className="sentence-part">{part}</span>;
                    }

                    const blankId = `${question.id}-${i}`;
                    const userAnswer = userAnswers[blankId];
                    const isAnswered = userAnswer !== undefined;
                    const isCorrect = blank.correctAnswer.includes(userAnswer);

                    return (
                      <React.Fragment key={i}>
                        <span className="sentence-part">{part}</span>
                        <div className="inline-blank-section">
                          <div className="options" role="group" aria-label={`Options for blank ${i + 1}`}>
                            {blank.options.map((option) => {
                              let buttonClass = 'option-button';
                              if (showResults) {
                                if (blank.correctAnswer.includes(option)) buttonClass += ' correct';
                                else if (option === userAnswer) buttonClass += ' incorrect';
                              } else if (option === userAnswer) {
                                buttonClass += ' selected';
                              }
                              return (
                                <button key={option} onClick={() => handleAnswerSelect(blankId, option)} className={buttonClass} disabled={showResults} aria-pressed={userAnswer === option}>
                                  {option}
                                </button>
                              );
                            })}
                          </div>
                          {showResults && isAnswered && (
                            <div className={`feedback-text ${isCorrect ? 'correct-info' : 'incorrect'}`}>
                              {blank.explanation}
                            </div>
                          )}
                        </div>
                      </React.Fragment>
                    );
                  })}
                </div>

                {visibleTranslations[question.id] && !showResults && question.translation && <p className="translation-text"><em>{question.translation}</em></p>}
                {visibleHints[question.id] && !showResults && <p className="hint-text">{question.hint}</p>}
              </div>
            );
          }
          
          // Single-blank question rendering
          const userAnswer = userAnswers[question.id];
          const isAnswered = userAnswer !== undefined;
          const isCorrect = question.correctAnswer && question.correctAnswer.includes(userAnswer);
          const isIncorrect = showResults && isAnswered && !isCorrect;

          return (
            <div key={question.id} className="question-card" aria-labelledby={`question-title-${question.id}`}>
              <div className="question-header">
                <p id={`question-title-${question.id}`} className="question-sentence">
                  <span className="question-number">{index + 1}.</span>
                  {question.sentence.split('___')[0]}
                  <span className="blank">___</span>
                  {question.sentence.split('___')[1]}
                </p>
                <div className="action-buttons-container">
                  <button onClick={() => handleSpeak(getSentenceForSpeech(question))} className="action-button" aria-label={`Read question ${index + 1} aloud`}>🔊</button>
                  {question.translation && <button onClick={() => toggleTranslation(question.id)} className="action-button" aria-label={`Translate question ${index + 1}`}>T</button>}
                  {question.hint && <button onClick={() => toggleHint(question.id)} className="action-button" aria-label={`Show hint for question ${index + 1}`} aria-expanded={!!visibleHints[question.id]}>?</button>}
                </div>
              </div>
              <div className="options" role="group" aria-labelledby={`question-title-${question.id}`}>
                {question.options.map((option) => {
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
                    <button key={option} onClick={() => handleAnswerSelect(question.id, option)} className={buttonClass} disabled={showResults} aria-pressed={userAnswer === option}>
                      {option}
                    </button>
                  );
                })}
              </div>
              {visibleTranslations[question.id] && !showResults && question.translation && <p className="translation-text"><em>{question.translation}</em></p>}
              {visibleHints[question.id] && !showResults && <p className="hint-text">{question.hint}</p>}
              
              {showResults && isAnswered && (isIncorrect || (isCorrect && !question.answerDetails)) && (
                <div className={`feedback-text ${isCorrect ? 'correct-info' : 'incorrect'}`}>
                  <strong>Explanation:</strong> {question.explanation}
                </div>
              )}
               {showResults && isCorrect && question.answerDetails && (
                <div className="feedback-text correct-info">
                    <strong>Good to know:</strong> Multiple articles are correct here, depending on the meaning:
                    <ul>
                        {question.correctAnswer.map(ans => (
                            <li key={ans}>
                                <strong>{ans}</strong> &mdash; {question.answerDetails[ans]}
                            </li>
                        ))}
                    </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      {!showResults ? (
        <button onClick={handleCheckAnswers} className="check-button">
          Check Answers
        </button>
      ) : (
         <button onClick={handleRestart} className="check-button">
          Try Again
        </button>
      )}
    </>
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
                    <>
                        <header>
                            <h1>German Grammar Chapters</h1>
                        </header>
                        <main className="menu-container">
                            {Object.keys(chapters).map((id) => (
                                <button key={id} className="menu-button" onClick={() => handleSelectChapter(id)}>
                                    {chapters[id].title}
                                </button>
                            ))}
                        </main>
                    </>
                );
            case 'topic':
                const chapter = chapters[currentChapterId];
                return (
                    <>
                        <header className="page-header">
                            <button className="back-button" onClick={() => setPage('home')}>&larr; Home</button>
                            <h1>{chapter.title}</h1>
                        </header>
                        <main className="menu-container">
                             {Object.keys(chapter.quizzes).map((id) => (
                                <button key={id} className="menu-button" onClick={() => handleSelectQuiz(id)}>
                                    {chapter.quizzes[id].title}
                                </button>
                            ))}
                        </main>
                    </>
                );
            case 'quiz':
                const currentChapter = chapters[currentChapterId];
                const quizData = currentChapter.quizzes[currentQuizId];
                
                let intro = null;
                if (currentQuizId === 'ex0') {
                    intro = <IntroContent />;
                } else if (currentQuizId === 'modalEx0') {
                    intro = <ModalIntroContent />;
                } else if (currentQuizId === 'numEx0') {
                    intro = <NumbersIntroContent />;
                } else if (currentQuizId === 'proEx0') {
                    intro = <PronounsIntroContent />;
                } else if (currentQuizId === 'proEx3') {
                    intro = <WerWenIntroContent />;
                } else if (currentQuizId === 'invEx0' || currentQuizId === 'invEx3') {
                    intro = <InvitationsIntroContent />;
                } else if (currentQuizId === 'prepEx0') {
                    intro = <PrepositionsIntroContent />;
                } else if (currentQuizId === 'prepEx2') {
                    intro = <AkkusativPrepositionsIntroContent />;
                }

                if (currentQuizId === 'invEx3') {
                    return <InvitationQuiz quiz={quizData} onBack={() => setPage('topic')} introContent={intro} />;
                }
                if (quizData.type === 'interactive_ordinal') {
                    return <InteractiveOrdinalQuiz quiz={quizData} onBack={() => setPage('topic')} introContent={intro} />;
                }
                return <Quiz quiz={quizData} onBack={() => setPage('topic')} introContent={intro} />;
            default:
                return <h1>Page not found</h1>;
        }
    };

    return <div className="container">{renderPage()}</div>;
}


const container = document.getElementById('app-container');
const root = createRoot(container!);
root.render(<App />);