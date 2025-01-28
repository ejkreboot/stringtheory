<script>
    import { onMount } from "svelte";
    import * as fretboard from "fretboards";
    import JustANote from "$lib/justanote.js";
    import NotePlayer, { frequencies } from "$lib/audio.js";

    let play, note, player, staff;

    // Notes and strings
    const strings = [
        [
            "e4", "f4", "g4", "a4", "b4", "c5", "d5", "e5", "f5", "g5"
        ],
        [
            "b3", "c4", "d4", "e4", "f4", "g4", "a4", "b4", "c5", "d5"
        ],
        [
            "g3", "a3", "b3", "c4", "d4", "e4", "f4", "g4", "a4", "b4"
        ],
        [
            "d3", "e3", "f3", "g3", "a3", "b3", "c4", "d4", "e4", "f4"
        ],
        [
            "a2", "b2", "c3", "d3", "e3", "f3", "g3", "a3", "b3", "c4"
        ],
        [
            "e2", "f2", "g2", "a2", "b2", "c3", "d3", "e3", "f3", "g3"
        ]
    ]

    var notes = [...new Set(strings)].flat();

    const getStrings = function() {
        const selected = document.querySelectorAll(".string_input");
        const strings = [...selected].reduce((a, b, i) => {return(b.checked ? [...a, i] : a)}, []);
        return(strings);
    }
    
    const getNotes = function() { // all the possible active notes on selected strings
        const active_notes_inputs = document.querySelectorAll(".note_input");
        const active_notes = [...active_notes_inputs].reduce((a, b, i) => {return(b.checked ? [...a, b.name] : a)}, []);
        let notes = getStrings().map(a => strings[a]).flat()
        notes = notes.filter(note => {
            const base_note = note.replace(/[0-9]/g, ''); 
            return active_notes.includes(base_note);
        });
        return(notes)
    }

    const getNewNote = function(p, notes) {
        let n = p;
        notes = notes ? notes : getNotes();
        // avoid repeating notes.
        while(n == p) {
            n = notes[Math.floor((Math.random()*notes.length))]
        }
        return(n);
    }

    const clearFretBoard = function(fb) {
        fb.clear();
        fb.paint();
    }


    onMount( () => {

        player = new NotePlayer();
        staff = new JustANote("staff");

        // Fretboard to show solutions (fingerings) on
        const fb = fretboard.Fretboard({
                where: "#solution",
                fretWidth: 30,
                fretHeight: 18,
                frets: 15
        });

        const getInterval = function() {
            const v = document.querySelector("#interval").value;
            return(v);
        }

        const showAnswer = function(note, fb) {
            fb.clear();
            fb.add(getStrings().map(x => (x+1) + ":" + note).join(" "));
            fb.paint();
            if(play) {
                player.playNote(2000, frequencies[note]);
            }
            window.setTimeout( () => { nextQuestion(fb) }, getInterval());
        }

        const nextQuestion = function(fb) {
            note = getNewNote(note);
            clearFretBoard(fb);
            staff.renderNote(note);
            var div = document.querySelector("#notename");
            div.innerHTML = note.toUpperCase();
            window.setTimeout( () => { showAnswer(note, fb) }, getInterval());
        }

        note = getNewNote();

        nextQuestion(fb);

        play = document.querySelector("#playnote").checked; 

        document.querySelector("#interval").addEventListener("input", (event) => {
            document.querySelector("#interval_value").textContent = event.target.value;
        });

        document.querySelector("#shownames").addEventListener("input", (event) => {
            document.querySelector("#notename").classList.toggle("hidden");
        });

        document.querySelector("#shownotes").addEventListener("input", (event) => {
            document.querySelector("#staff").classList.toggle("hidden");
        });

        document.querySelector("#playnote").addEventListener("input", (event) => {
            play = event.target.checked;
        });
    })
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');

    body {
        width: 600px;
        margin: auto;
        padding-top: 50px;
        font:
            1rem 'Fira Sans',
            sans-serif;

    }

    .padding-left-5 {
        padding-left: 5px;
    }

    .padding-top-zero {
        padding-top: 0;
    }

    .padding-left-50 {
        padding-left: 50px;
    }

    .title {
        font-family: "Libre Baskerville", Helvetica;
        font-size: 24pt;
    }

    .blue {
        color: #51bff2;
    }

    .gray {
        color: #777879;
    }

    .small {
        font-size: 10px;
    }

    .center {
        text-align: center;
    }

    input {
        margin: 0.4rem;
    }

    .col > div {
        float: left;
    }

    .label {
        padding-bottom: 10px;
    }

    .col {
        clear: both;
        float: none;
        
    }

    .col::before {
        content: " ";
        display: table;
    }

    .col::after {
        content: " ";
        clear: both;
        display: table;
    }

    #notename {
        padding-top: 60px;
        font: 3rem "Libre Baskerville"

    }

    label {
        font-family: "Libre Baskerville", Helvetica;
        font-size: 15px;
    }

    .section {
        padding-left: 0px;
        padding-top: 30px;
        text-align: left;
    }

    .center {
        text-align: center;
    }

</style>    
<body>    
    <div class="blue center title">
        Guitar Note Trainer
    </div>
    <div class="col">
        <div style="text-align: center; width: 50%; margin: auto;" id="notename">A3</div>
        <div style="text-align: center; width: 50%; margin: auto;" id="staff"></div>
    </div>
    <div class="padding-left-50">
        <div id="solution"></div>
    </div>
    <div>
        <div class="col section">
            <div class=padding-left-50 style="width: 40%;">
                <div>
                    <input type="checkbox" id="shownames" name="shownames" checked />
                    <label for="shownames">Note names</label>
                </div>
                <div>
                    <input type="checkbox" id="shownotes" name="shownotes" checked />
                    <label for="shownotes">Notes on staff</label>
                </div>
                <div>
                    <input type="checkbox" id="playnote" name="shownotes"/>
                    <label for="shownotes">Play notes</label>
                </div>
            </div>
            <div class=padding-left-50 style="width: 40%;">
                <div class="slidecontainer">
                    <label for="interval">Interval (ms)</label><br>
                    <input name="interval" 
                            type="range" 
                            min="500" 
                            max="5000" 
                            step="100"
                            value="2000" 
                            class="slider" id="interval">
                    <div id="interval_value" class="small label gray padding-left-5 padding-top-zero">2000</div>
                </div>
            </div>
        </div>
        <div class="section center">
            <div class="label">
                Strings to Study:
            </div>
            <label for="1">1</label>
            <input type="checkbox" class="string_input" name="1" checked>
            <label for="2">2</label>
            <input type="checkbox" class="string_input" name="2" checked>
            <label for="3">3</label>
            <input type="checkbox" class="string_input" name="3" checked>
            <label for="4">4</label>
            <input type="checkbox" class="string_input" name="4">
            <label for="5">5</label>
            <input type="checkbox" class="string_input" name="5">
            <label for="6">6</label>
            <input type="checkbox" class="string_input" name="6">
        </div>
        <div class="section center">
            <div class="label">
                Notes to Study:
            </div>
            <label for="C">C</label>
            <input type="checkbox" class="note_input" name="c" checked>
            <label for="D">D</label>
            <input type="checkbox" class="note_input" name="d" checked>
            <label for="E">E</label>
            <input type="checkbox" class="note_input" name="e" checked>
            <label for="F">F</label>
            <input type="checkbox" class="note_input" name="f" checked>
            <label for="G">G</label>
            <input type="checkbox" class="note_input" name="g" checked>
            <label for="A">A</label>
            <input type="checkbox" class="note_input" name="a" checked>
            <label for="B">B</label>
            <input type="checkbox" class="note_input" name="b" checked>
        </div>
    </div>
</body>
