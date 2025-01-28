import * as fretful from '../../src/lib/fretful.js';

describe('Notes', () => {
    it('Converts notes to number', () => {
       expect(fretful.noteToNumber("6:a4")).toEqual(46);
       expect(fretful.noteToNumber("c1")).toEqual(1);
       expect(fretful.noteToNumber("c2")).toEqual(13);
       expect(fretful.noteToNumber("e3")).toEqual(29);
       expect(fretful.noteToNumber("g4")).toEqual(44);
    });
    it('Converts numbers to notes', () => {
        expect(fretful.numberToNote(46)).toEqual("a4");
        expect(fretful.numberToNote(48)).toEqual("b4");
    });

});

describe('Frets', () => {
    const notes = "1:g4 2:d#4 3:c4";
    it('Finds the fret for a note', () => {
       expect(fretful.fret("6:f2")).toEqual(1);
    });
    it('Finds the lowest fret of a set of notes', () => {
        expect(fretful.minFret(notes)).toEqual(3);
    });
    it('Finds the highest fret of a set of notes', () => {
        expect(fretful.maxFret(notes)).toEqual(5);
    })
});


describe('Transpostion', () => {
    const notes = "1:g4 2:d#4 3:c4";
    it('Transposes a note', () => {
        expect(fretful.transpose("6:bb4", 3)).toEqual("6:c#5");
        expect(fretful.transpose("1:g4", 4)).toEqual("1:b4");
     });
    it('Transposes a set of notes', () => {
        expect(fretful.transposeAll(notes, 4)).toEqual("1:b4 2:g4 3:e4");
     });
    it('Tranposes a set of triplets', () => {
        const t = fretful.transpose_triplets(fretful.minor_triplets.top, 4, 14)
        expect(t[0]).toEqual('1:b4 2:g4 3:e4')
    });
 
})

