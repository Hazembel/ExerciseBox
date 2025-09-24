import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { chapters } from './chapters.js';


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

const WerWenWemIntroContent = () => (
    <div className="intro-content">
        <h2 className="intro-header">Wer vs. Wen vs. Wem: Asking "Who?"</h2>
        <div className="rule-box">
            <h3>Wer? (Nominativ) - The Subject</h3>
            <p>Use <strong>Wer</strong> to ask about the person who is <strong>doing the action</strong>. It asks for the subject of the sentence.</p>
            <ul>
                <li>The answer to a "Wer?" question is in the Nominativ case.</li>
                <li><em><strong>Wer</strong> kommt zur Party?</em> &rarr; <em><strong>Meine Freunde</strong> kommen.</em></li>
            </ul>
        </div>
        <div className="rule-box">
            <h3>Wen? (Akkusativ) - The Direct Object</h3>
            <p>Use <strong>Wen</strong> to ask about the person who is <strong>receiving the action</strong>. It asks for the direct object.</p>
            <ul>
                <li>The answer to a "Wen?" question is in the Akkusativ case.</li>
                <li><em><strong>Wen</strong> siehst du?</em> &rarr; <em>Ich sehe <strong>den Jungen</strong>.</em></li>
            </ul>
        </div>
        <div className="rule-box">
            <h3>Wem? (Dativ) - The Indirect Object</h3>
            <p>Use <strong>Wem</strong> to ask about the person who is <strong>indirectly affected</strong> by the action, often the recipient. It asks for the indirect object.</p>
            <ul>
                <li>The answer to a "Wem?" question is in the Dativ case.</li>
                <li><em><strong>Wem</strong> gehört das Auto?</em> &rarr; <em>Das Auto gehört <strong>dem Mann</strong>.</em></li>
                <li><em><strong>Wem</strong> hilfst du?</em> &rarr; <em>Ich helfe <strong>meiner Schwester</strong>.</em></li>
            </ul>
        </div>
        <div className="rule-box summary">
            <h3>The Trick</h3>
            <ol>
                <li>Ask about the verb. Is someone <strong>doing</strong> it? &rarr; Use <strong>Wer</strong>.</li>
                <li>Is someone <strong>receiving</strong> the action directly? &rarr; Use <strong>Wen</strong>.</li>
                <li>Is someone the <strong>recipient</strong> or beneficiary? Is it a Dativ verb/preposition? &rarr; Use <strong>Wem</strong>.</li>
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

const InvitationsResponseIntroContent = () => (
    <div className="intro-content">
        <h2 className="intro-header">Responding to Invitations (Auf Einladungen antworten)</h2>
        <p>Knowing how to accept or decline an invitation politely is an important skill. Here are some key phrases.</p>
        
        <div className="rule-box summary">
            <h3>Accepting an Invitation (Zusagen / Annehmen)</h3>
            <p>To accept, you can use enthusiastic and positive words.</p>
            <ul>
                <li><strong>Ja, gern / gerne!</strong> (Yes, gladly!)</li>
                <li><strong>Vielen Dank für die Einladung.</strong> (Many thanks for the invitation.)</li>
                <li><strong>Ich komme sehr gerne.</strong> (I'd love to come.)</li>
                <li><strong>Das klingt super!</strong> (That sounds great!)</li>
                <li><strong>Ich bin dabei!</strong> (I'm in! / I'll be there!)</li>
                <li><strong>Ich freue mich darauf.</strong> (I'm looking forward to it.)</li>
            </ul>
            <p className="example-sentence"><em>"Ja, vielen Dank für die Einladung, ich komme gern!"</em></p>
        </div>

        <div className="rule-box decline">
            <h3>Declining an Invitation (Absagen / Ablehnen)</h3>
            <p>When declining, it's polite to thank the person and give a soft reason.</p>
            <ul>
                <li><strong>Leider kann ich nicht.</strong> (Unfortunately, I can't.)</li>
                <li><strong>Schade!</strong> (What a shame! / Too bad!)</li>
                <li><strong>Es tut mir leid, aber...</strong> (I'm sorry, but...)</li>
                <li><strong>Ich habe schon etwas vor.</strong> (I already have plans.)</li>
                <li><strong>Vielleicht klappt es beim nächsten Mal.</strong> (Maybe it will work out next time.)</li>
            </ul>
            <p className="example-sentence"><em>"Vielen Dank für die Einladung, aber leider habe ich schon etwas vor. Schade!"</em></p>
        </div>
    </div>
);

const GiftsIntroContent = () => (
    <div className="intro-content">
        <h2 className="intro-header">Gift-Giving in Germany (Schenken)</h2>
        <div className="rule-box">
            <h3>Useful Phrases</h3>
            <ul>
                <li><strong>Für dich/Sie:</strong> For you.</li>
                <li><strong>Hier ist eine Kleinigkeit für dich.</strong> (Here's a little something for you.)</li>
                <li><strong>Ich hoffe, es gefällt dir.</strong> (I hope you like it.)</li>
                <li><strong>Vielen Dank für das tolle Geschenk!</strong> (Many thanks for the great gift!)</li>
                <li><strong>Das wäre doch nicht nötig gewesen!</strong> (You really shouldn't have!) - A common polite phrase.</li>
            </ul>
        </div>
        <div className="rule-box summary">
            <h3>Common Gifts (Häufige Geschenke)</h3>
            <p>Here are some typical gifts you might give or receive in Germany. Pay attention to their genders!</p>
        </div>
        <table className="preposition-detail-table">
            <thead>
                <tr>
                    <th>Emoji</th>
                    <th>German Word (with article)</th>
                    <th>English Translation</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>🎁</td><td><strong>das</strong> Geschenk</td><td>The gift</td></tr>
                <tr><td>💐</td><td><strong>die</strong> Blumen (pl.)</td><td>The flowers</td></tr>
                <tr><td>📖</td><td><strong>das</strong> Buch</td><td>The book</td></tr>
                <tr><td>🍾</td><td><strong>die</strong> Flasche Wein</td><td>The bottle of wine</td></tr>
                <tr><td>🍫</td><td><strong>die</strong> Schokolade</td><td>The chocolate</td></tr>
                <tr><td>💶</td><td><strong>das</strong> Geld</td><td>The money</td></tr>
                <tr><td>🎟️</td><td><strong>der</strong> Gutschein</td><td>The voucher / gift card</td></tr>
                <tr><td>🧸</td><td><strong>das</strong> Spielzeug</td><td>The toy</td></tr>
                <tr><td>💍</td><td><strong>der</strong> Schmuck</td><td>The jewelry</td></tr>
            </tbody>
        </table>
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

const OneWayPrepositionsIntroContent = () => (
    <div className="intro-content">
        <h2 className="intro-header">One-Way Prepositions</h2>
        <div className="rule-box">
            <p>Some prepositions are easy: they <strong>always</strong> take the same case. You just need to memorize them and their meanings.</p>
        </div>
        <div className="verb-case-columns">
            <div>
                <h3><span className="change-highlight">Akkusativ</span> Prepositions (Direction / Movement)</h3>
                <table className="preposition-detail-table">
                    <thead><tr><th>Preposition</th><th>Meaning</th></tr></thead>
                    <tbody>
                        <tr><td><strong>durch</strong></td><td>through</td></tr>
                        <tr><td><strong>für</strong></td><td>for</td></tr>
                        <tr><td><strong>gegen</strong></td><td>against</td></tr>
                        <tr><td><strong>ohne</strong></td><td>without</td></tr>
                        <tr><td><strong>um</strong></td><td>around / at (time)</td></tr>
                        <tr><td><strong>bis</strong></td><td>until</td></tr>
                        <tr><td><strong>entlang</strong></td><td>along</td></tr>
                    </tbody>
                </table>
                 <p className="example-sentence">Example: <em>Ich gehe <strong>durch den</strong> Park.</em></p>
            </div>
            <div>
                <h3><span className="change-highlight">Dativ</span> Prepositions (Location / Static)</h3>
                 <table className="preposition-detail-table">
                    <thead><tr><th>Preposition</th><th>Meaning</th></tr></thead>
                    <tbody>
                        <tr><td><strong>aus</strong></td><td>from / out of</td></tr>
                        <tr><td><strong>bei</strong></td><td>at / with</td></tr>
                        <tr><td><strong>mit</strong></td><td>with</td></tr>
                        <tr><td><strong>nach</strong></td><td>to / after</td></tr>
                        <tr><td><strong>seit</strong></td><td>since / for</td></tr>
                        <tr><td><strong>von</strong></td><td>from / by</td></tr>
                        <tr><td><strong>zu</strong></td><td>to</td></tr>
                        <tr><td><strong>gegenüber</strong></td><td>opposite</td></tr>
                    </tbody>
                </table>
                 <p className="example-sentence">Example: <em>Ich wohne <strong>bei meinen</strong> Eltern.</em></p>
            </div>
        </div>
         <div className="rule-box summary">
            <h3>Special Case: als / wie</h3>
            <p><strong>als</strong> (as) and <strong>wie</strong> (like) are prepositions that take the Nominativ case when they are used for comparisons with the subject.</p>
            <p className="example-sentence">Example: <em>Er arbeitet <strong>als Lehrer</strong>.</em></p>
        </div>
    </div>
);

const VerbCaseIntroContent = () => (
    <div className="intro-content">
        <h2 className="intro-header">Case-Triggering Verbs</h2>
        <div className="rule-box">
            <h3>Verbs with a Fixed Case</h3>
            <p>Some verbs are shortcuts! They almost always take an object in a specific case. Memorizing them makes choosing the right article much easier.</p>
        </div>
        <div className="verb-case-columns">
             <div>
                <h3>Verbs with <span className="change-highlight">Akkusativ</span></h3>
                <p>These verbs describe a direct action on something. The noun answering "Wen?" or "Was?" (Whom? or What?) will be in the Akkusativ case.</p>
                <ul>
                    <li><strong>haben</strong> (to have)</li>
                    <li><strong>sehen</strong> (to see)</li>
                    <li><strong>fragen</strong> (to ask)</li>
                    <li><strong>brauchen</strong> (to need)</li>
                    <li><strong>kaufen</strong> (to buy)</li>
                    <li><strong>suchen</strong> (to look for)</li>
                    <li><strong>finden</strong> (to find)</li>
                    <li><strong>anrufen</strong> (to call)</li>
                    <li><strong>lieben</strong> (to love)</li>
                    <li><strong>mögen</strong> (to like)</li>
                </ul>
             </div>
             <div>
                 <h3>Verbs with <span className="change-highlight">Dativ</span></h3>
                <p>These verbs often involve a recipient or someone being affected indirectly. The noun answering "Wem?" (To whom?) will be in the Dativ case.</p>
                 <ul>
                    <li><strong>helfen</strong> (to help)</li>
                    <li><strong>danken</strong> (to thank)</li>
                    <li><strong>gefallen</strong> (to please)</li>
                    <li><strong>gehören</strong> (to belong to)</li>
                    <li><strong>antworten</strong> (to answer)</li>
                    <li><strong>glauben</strong> (to believe)</li>
                    <li><strong>folgen</strong> (to follow)</li>
                    <li><strong>passen</strong> (to fit)</li>
                    <li><strong>schmecken</strong> (to taste good to)</li>
                    <li><strong>zuhören</strong> (to listen to)</li>
                </ul>
             </div>
        </div>
         <div className="rule-box summary">
            <p><strong>Remember:</strong> If you see a verb from the Dativ list, its object will almost always be Dativ, even if it feels like a direct object in English (e.g., "I help <strong>him</strong>" &rarr; "Ich helfe <strong>ihm</strong>").</p>
        </div>
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
                const pronounQuizIds = ['ex24', 'ex25', 'ex26', 'ex27'];
                const oneWayPrepositionQuizIds = ['ex28', 'ex29', 'ex30'];
                const verbCaseQuizIds = ['ex31', 'ex32'];
                const invitationResponseQuizIds = ['invEx4', 'invEx5'];


                if (currentQuizId === 'ex0') {
                    intro = <IntroContent />;
                } else if (currentChapterId === 'nomAkk' && (currentQuizId === 'ex2' || currentQuizId === 'ex3')) {
                    intro = <WerWenWemIntroContent />;
                } else if (currentQuizId === 'modalEx0') {
                    intro = <ModalIntroContent />;
                } else if (currentQuizId === 'numEx0') {
                    intro = <NumbersIntroContent />;
                } else if (currentChapterId === 'nomAkk' && pronounQuizIds.includes(currentQuizId)) {
                    intro = <PronounsIntroContent />;
                } else if (currentQuizId === 'invEx0' || currentQuizId === 'invEx3') {
                    intro = <InvitationsIntroContent />;
                } else if (invitationResponseQuizIds.includes(currentQuizId)) {
                    intro = <InvitationsResponseIntroContent />;
                } else if (currentQuizId === 'invEx6') {
                    intro = <GiftsIntroContent />;
                } else if (currentQuizId === 'prepEx0') {
                    intro = <PrepositionsIntroContent />;
                } else if (currentQuizId === 'prepEx2') {
                    intro = <AkkusativPrepositionsIntroContent />;
                } else if (currentChapterId === 'nomAkk' && oneWayPrepositionQuizIds.includes(currentQuizId)) {
                    intro = <OneWayPrepositionsIntroContent />;
                } else if (currentChapterId === 'nomAkk' && verbCaseQuizIds.includes(currentQuizId)) {
                    intro = <VerbCaseIntroContent />;
                }

                const invitationQuizIds = ['invEx3', 'invEx4', 'invEx5'];
                if (invitationQuizIds.includes(currentQuizId)) {
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