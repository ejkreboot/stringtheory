
/**
 *  the default guitar tunings.
 * 
 *  TO DO: add additional tunings and instruments
 */
export const strings = [
    "e4",
    "b3",
    "g3",
    "d3",
    "a2",
    "e2",
];

/**
 *  The c pentatonic scale, with sharps notation
 */
export const notes_sharps=[
    'c', 
    'c#', 
    'd', 
    'd#', 
    'e', 
    'f', 
    'f#', 
    'g',
    'g#', 
    'a',
    'a#',
    'b',
];


/**
 *  The c pentatonic scale, with flats notation
 */
export const notes_flats = [
    'c', 
    'db', 
    'd', 
    'eb', 
    'e', 
    'f', 
    'gb', 
    'g',
    'ab', 
    'a',
    'bb',
    'b',
];

/**
 *  Triplets on top three and 'middle' three (2-4) strings
 */
export const triplets = {
    major_triplets: {
        top: [
            "1:e5 2:c5 3:g4",
            "1:g4 2:e4 3:c4",
            "1:c5 2:g4 3:e4"
        ],
        middle: [
            "2:c6 3:g5 4:e5",
            "2:e4 3:c4 4:g3",
            "2:g5 3:e5 4:c5"
        ]
    },
    minor_triplets: {
        top: [
            "1:eb5 2:c5 3:g4",
            "1:g4 2:eb4 3:c4",
            "1:c5 2:g4 3:eb4"
        ],
        middle: [
            "2:c6 3:g5 4:eb5",
            "2:eb4 3:c4 4:g3",
            "2:g5 3:eb5 4:c5"
        ]
    },
    diminished_triplets: {
        top: [
            "1:eb5 2:c5 3:gb4",
            "1:gb4 2:eb4 3:c4",
            "1:c5 2:gb4 3:eb4"
        ],
        middle: [
            "2:c6 3:gb5 4:eb5",
            "2:eb4 3:c4 4:gb3",
            "2:gb5 3:eb5 4:c5"
        ]
    },
    dominant7_triplets: {
        top: [
            "1:eb5 2:c5 3:g4",
            "1:g4 2:eb4 3:c4",
            "1:c5 2:g4 3:eb4"
        ],
        middle: [
            "2:c6 3:g5 4:eb5",
            "2:eb4 3:c4 4:g3",
            "2:g5 3:eb5 4:c5"
        ]
    },
    dominant7b5_triplets: {
        top: [
            "1:eb5 2:c5 3:gb4",
            "1:gb4 2:eb4 3:c4",
            "1:c5 2:gb4 3:eb4"
        ],
        middle: [
            "2:c6 3:gb5 4:eb5",
            "2:eb4 3:c4 4:gb3",
            "2:gb5 3:eb5 4:c5"
        ]
    }
};

/**
 * Convert a number to a note/octave pair. (1 = C1)
 * @param {int} n
 * @param {boolean} sharp Should we use sharp (vs. flat) notation? Default is false.
 * @returns {string} Corresponding note in "no" notation (e.g. 'a4')
 */
export function numberToNote(n, sharp) {
    sharp = sharp || false;
    let octave = Math.floor((n-1) / 12) + 1;
    let note = (n-1) % 12;
    note = sharp ? notes_sharps[note ] : notes_flats[note];
    return(note + octave);
}

/**
 * Convert a note to number (where C1 = 1)
 * @param {string} note Note in either 's:no' (e.g. '1:a#4') or just 'no' format
 * @returns {integer} The numerical index of the note. (1 = c1, 84 = c8)
 */
export function noteToNumber(note) {
    let n = note.replace(/.*:/, ""); // remove string, if present
    let o = n.slice(-1);
    n = n.slice(0, -1);
    let i = notes_sharps.indexOf(n) >= 0 ? 
                notes_sharps.indexOf(n) : 
                notes_flats.indexOf(n);
    i = i + 1 + 12 * (o - 1);
    return(i);
}

/**
 * Find the interval (in half steps) between two notes.
 * @param {string} note1 Note in either 's:no' (e.g. '1:a#4') or just 'no' format
 * @param {string} note2 Note in either 's:no' (e.g. '1:a#4') or just 'no' format
 * @returns {integer} Number of half steps between the two notes.
 */
export function interval(note1, note2) {
    const i = Math.abs(noteToNumber(note1) - noteToNumber(note2));
    return(i);
}

/**
 * Find the fret number of a given note. For now, assumes standard guitar tuning.
 * @param {string} note Note in 's:no' (e.g. '1:a#4') format
 * @returns {integer} The fret number of the specified string for the specified note
 */
export function fret(note) {
    var [string, note] = note.split(":");
    var f = interval(strings[string-1], note);
    return(f);
}

/**
 * Find the lowest fret note for a collection of notes.
 * 
 * Useful for figuring out if a given shape or note collection needs to be transposed
 * 
 * @param {string} notes One or more notes in 's:no s:no s:no' format, or an array of notes in 's:no' format
 * @returns {integer} the lowest fret represented by the notes (on any string).
 */
export function minFret(notes) {
  const n  = Array.isArray(notes) ? notes : notes.split(" ")
  var frets = n.map(x=>fret(x));
  var min = frets.reduce((a,b)=>Math.min(a,b));
  return(min);
}

/**
 * Find the higheset fret note for a collection of notes.
 * 
 * Useful for figuring out if a given shape or note collection needs to be transposed
 * 
 * @param {string} notes One or more notes in 's:no s:no s:no' format, or an array of notes in 's:no' format
 * @returns {integer} the highest fret represented by the notes (on any string).
 */
export function maxFret(notes) {
    const n  = Array.isArray(notes) ? notes : notes.split(" ")
    var frets = n.map(x=>fret(x));
    var max = frets.reduce((a,b)=>Math.max(a,b));
    return(max);
  }
  
export function steps(note) { // steps from C to specified note
    let n = note.replace(/.*:/, ""); // remove string, if present
    let index = notes.indexOf(note);
    return(index);
}

/**
 * Tranpose a note.
 * @param {string} note The note to transpose in "s:no" format
 * @param {integer} steps How many (half) steps to transpose 
 * @returns {string} transposed note in "s:no" format
 */
export function transpose(note, steps) {
    let [string, n] = note.split(":")
    n = numberToNote(noteToNumber(n) + steps);
    return(string + ":" + n)
}

/**
 * Tranpose a collection of notes.
 * @param {string} notes The note to transpose, either in "s:no s:no s:no" format or as an array of notes in 's:no' format.
 * @param {integer} steps How many (half) steps to transpose 
 * @param {integer} max optional limit to top fret of transposed note. If specified and exceeded, entire note set is
 *                          tranposed down one octave.
 * @returns {string} transposed notes in "s:no s:no s:no" format 
 */
export function transposeAll(notes, steps, max) {
    const n  = Array.isArray(notes) ? notes : notes.split(" ")
    let result = n.map(x => transpose(x, steps)).join(" ")
    while(max && maxFret(result) > max) {
        result = transposeAll(result, -12)
    }
    return(result)
}

/**
 * Tranpose a set of triplets
 * @param {[string]} t An array of triplets, each in "s:no s:no s:no" format
 * @param {integer} steps How many (half) steps to transpose 
 * @param {integer} max The maximum fret for any given triplet. Default is 14. If any given triplet exceeds this,
 *                          the triplet is tranposed down one octave.
 * @returns 
 */
export function transpose_triplets(t, steps, max=14) {
//    let result = t.map(x=>transposeAll(x, steps, max));
    let result = t.map(x=>transposeAll(x, steps, max));
    return(result);
}

export default { strings, notes_sharps, triplets, interval, transpose, transpose_triplets, transposeAll};

