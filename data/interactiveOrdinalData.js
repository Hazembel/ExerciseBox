export const interactiveOrdinalData = [
  {
    id: 701,
    sentenceParts: ['Heute ist der ', ' Januar.'],
    number: 1,
    context: 'nominativ_der',
    explanation: 'For dates with "der", the ordinal number takes an -e ending. The ordinal for 1 is an exception: "erste".',
    translation: 'Today is the 1st of January.'
  },
  {
    id: 702,
    sentenceParts: ['Mein Geburtstag ist am ', ' Mai.'],
    number: 10,
    context: 'dativ_am',
    explanation: 'After the preposition "am" (an dem), we use the Dativ case, so the ordinal number always gets an -en ending.',
    translation: 'My birthday is on the 10th of May.'
  },
  {
    id: 703,
    sentenceParts: ['Er kam als ', ' ins Ziel.'],
    number: 3,
    context: 'predicative_als_masc',
    explanation: 'When describing the position of a masculine subject with "als", the ordinal number takes an -er ending. The ordinal for 3 is an exception: "dritter".',
    translation: 'He came in third.'
  },
  {
    id: 704,
    sentenceParts: ['Sie gewann den ', ' Platz.'],
    number: 2,
    context: 'akusativ_den',
    explanation: 'Here, "Platz" is a masculine direct object in the Akkusativ case ("den"). Therefore, the ordinal number takes an -en ending.',
    translation: 'She won the 2nd place.'
  },
  {
    id: 705,
    sentenceParts: ['Weihnachten ist am ', ' Dezember.'],
    number: 25,
    context: 'dativ_am',
    explanation: 'After "am", we use the Dativ case. For numbers over 19, we add -ste, and for Dativ, we add the -n ending, making it "-sten".',
    translation: 'Christmas is on the 25th of December.'
  },
  {
    id: 706,
    sentenceParts: ['Das ist die ', ' Lektion.'],
    number: 7,
    context: 'nominativ_die',
    explanation: 'For "die" (nominative feminine), the ordinal takes an -e ending. The ordinal for 7 is an exception: "siebte".',
    translation: 'This is the 7th lesson.'
  },
  {
    id: 707,
    sentenceParts: ['Ich wohne im ', ' Stock.'],
    number: 8,
    context: 'dativ_im',
    explanation: 'After "im" (in dem), we use the Dativ case, so the ordinal gets an -en ending. The ordinal for 8 is an exception: "achten".',
    translation: 'I live on the 8th floor.'
  },
  {
    id: 708,
    sentenceParts: ['Jeder ', ' Kunde gewinnt.'],
    number: 100,
    context: 'nominativ_der',
    explanation: 'After "jeder", which acts like "der", the ordinal adjective takes an -e ending. For numbers over 19, the base is -ste.',
    translation: 'Every 100th customer wins.'
  },
  {
    id: 709,
    sentenceParts: ['Wir feiern am ', ' Juni.'],
    number: 21,
    context: 'dativ_am',
    explanation: 'After "am" (Dativ), the ordinal always ends in -en. The base for 21 is "einundzwanzigste".',
    translation: 'We celebrate on the 21st of June.'
  },
  {
    id: 710,
    sentenceParts: ['Das ', ' Auto gehört mir.'],
    number: 4,
    context: 'nominativ_das',
    explanation: 'For "das" (nominative neuter), the ordinal number takes an -e ending.',
    translation: 'The 4th car belongs to me.'
  },
  {
    id: 711,
    sentenceParts: ['Sie kam als ', ' ins Ziel.'],
    number: 1,
    context: 'predicative_als_fem_neu',
    explanation: 'When describing the position of a feminine subject ("sie") with "als", the ordinal takes an -e ending.',
    translation: 'She came in first.'
  },
  {
    id: 712,
    sentenceParts: ['Die Party ist am ', ' Februar.'],
    number: 13,
    context: 'dativ_am',
    explanation: 'After the preposition "am", we always use the Dativ case, so the ending must be -en.',
    translation: 'The party is on the 13th of February.'
  }
];