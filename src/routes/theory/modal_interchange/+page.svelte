<script>
  //import * as fretboard from "fretboards";
  import Triads from '$lib/Triads.svelte'
  import { onMount } from "svelte";
  import * as fretful from "$lib/fretful.js"

  const major_top = fretful.triplets.major_triplets.top;
  const minor_top = fretful.triplets.minor_triplets.top;

  const major_triplets = {
    strings_4_5_6: fretful.triplets.major_triplets.top,
    strings_3_4_5: fretful.triplets.major_triplets.middle,
    quatrads: fretful.triplets.major_quatrads
  };

  const minor_triplets = {
    strings_4_5_6: fretful.triplets.minor_triplets.top,
    strings_3_4_5: fretful.triplets.minor_triplets.middle,
    quatrads: fretful.triplets.minor_quatrads
  };

  const keys = [
    { label: "C", value: 0 },
    { label: "D", value: 2 },
    { label: "E", value: 4 },
    { label: "F", value: 5 },
    { label: "G", value: 7 },
    { label: "A", value: 9 },
    { label: "B", value: 11 }
  ];

  const chromaticScale = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"];

  function getChordName(root, interval) {
    const index = (root + interval) % 12;
    return chromaticScale[index];
  }

  // Reactive variable for selected value
  let selectedKey = keys[0].value;
  $: selectedKeyName = getChordName(selectedKey, 0);
  let selectedStrings = "strings_4_5_6";
  let major_triads = []; // Initialize as empty
  let modal_interchange_triads = []; // Initialize as empty

  function updateTriads() {
    // Clear the triads array (this removes components from the DOM)
    major_triads = [];
    modal_interchange_triads = [];
    setTimeout(() => { // wait a tick to allow DOM to clear
    major_triads = [
        {
          label: "Root",
          chord: getChordName(selectedKey, 0),
          scale: selectedKeyName + " major-pentatonic",
          notes: fretful.transpose_triplets(major_triplets[selectedStrings], selectedKey).join(" ")
        },
        {
          label: "Fourth",
          chord: getChordName(selectedKey, 5),
          scale: selectedKeyName + " major-pentatonic",
          notes: fretful.transpose_triplets(major_triplets[selectedStrings], selectedKey + 5).join(" ")
        },
        {
          label: "Fifth",
          chord: getChordName(selectedKey, 7),
          scale: selectedKeyName + " major",
          notes: fretful.transpose_triplets(major_triplets[selectedStrings], selectedKey + 7).join(" ")
        },
        {
          label: "Minor Sixth",
          chord: getChordName(selectedKey, 9) + " minor",
          scale: selectedKeyName + " major",
          notes: fretful.transpose_triplets(minor_triplets[selectedStrings], selectedKey + 9).join(" ")
        }
      ];
      modal_interchange_triads = [
        {
          label: "Flat Third",
          chord: getChordName(selectedKey, 3),
          scale: selectedKeyName + " major",
          notes: fretful.transpose_triplets(major_triplets[selectedStrings], selectedKey + 3).join(" ")
        },
        {
          label: "Minor Fourth",
          chord: getChordName(selectedKey, 5) + " minor",
          scale: selectedKeyName + " major",
          notes: fretful.transpose_triplets(minor_triplets[selectedStrings], selectedKey + 5).join(" ")
        },
        {
          label: "Flat Sixth",
          chord: getChordName(selectedKey, 8),
          scale: selectedKeyName + " major",
          notes: fretful.transpose_triplets(major_triplets[selectedStrings], selectedKey + 8).join(" ")
        },
        {
          label: "Flat Seventh",
          chord: getChordName(selectedKey, 10),
          scale: selectedKeyName + " major",
          notes: fretful.transpose_triplets(major_triplets[selectedStrings], selectedKey + 10).join(" ")
        }
      ];
    }, 0);
  }

  $: if (selectedKey !== undefined && selectedStrings !== undefined) {
    updateTriads();
  }
</script>

<style>
      /* some colors: #f95e2e #80cbe0 #faa336 #739afc */
      @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');

      body {
        margin-left: auto;
        margin-right: auto;
        max-width: 700px;
      }

      h1, h2, h3, h4, p, label {
        font-family: "Libre Baskerville", Helvetica;
      }

      p {
        padding-top: 0px;
        padding-bottom: 10px;
        color:rgb(45, 118, 166);
        line-height: 28px;
      }

      select {
        font-size: 1rem;
        padding: 0.2rem;
        margin-bottom: 1rem;
        margin-right: 20px;
      }

      .label {
        font-family: "Nunito";
        color: #404041;
        text-transform: uppercase;
        font-weight: 100;
        font-size: 12px;
      }

      .triad {
        padding-bottom: 20px;
      }

      .only-print {
        display: none;
      }

      @media print {
        @page {
          margin-left: 1in;
          margin-right: 1in;
        }

        .no-print {
          display: none;
        }

        .only-print {
          display: inline;
        }

        .page-break { page-break-before: always; } 
      }

</style>

<body>
  <div>
    <h1>Modal Interchange</h1>
    <h3>Theory</h3>
    <p>Recall that the chords in a major scale are:</p>
    <pre style="font: Courier;">
      I ii  iii IV V vi VII°
    </pre>
    <p>The chords of the parallel minor are:</p>
    <pre style="font: Courier;">
      i II° III♭ iv V VI♭ VII♭
    </pre>
    <p>Chords from the parallel minor can be "borrowed" to add emotion, tension, and movement 
       to your music. They can be used as "passing" chords to transition from one chord in  
       the song's key to another. Note that this results in notes being used that are 
       not in the key (as opposed to the notes in the relative minor scale).</p>

    <p>The III♭, iv, VI♭, and VII♭ chords from the parallel minor are among the most commonly used.</p>

    <h3>Example</h3>
    <p>A very common chord progression are I-V-vi-IV (sometimes starting in the "middle", such as vi–IV–I–V).
      The corresponding {selectedStrings == "quatrads" ? "quatrads" : "triads"} for the specified key are <span class="only-print">shown on the next page.</span>
      <span class="no-print">shown below. Select a different key to see triads for that key.</span>
    </p>

    <div class="no-print">
    <label for="key-select">Choose a key:</label>
    <select id="key-select" bind:value={selectedKey} style="width: 50px;">
      {#each keys as { label, value }}
        <option value={value}>{label}</option>
      {/each}
    </select>
    <label for="strings-select">Choose strings:</label>
    <select id="strings-select" bind:value={selectedStrings} style="width: 150px;">
      <option value="strings_4_5_6" selected>Strings 4, 5, 6</option>
      <option value="strings_3_4_5">Strings 3, 4, 5</option>
      <option value="quatrads">Quatrads</option>
    </select>
  </div>
  <p class="page-break">Common {selectedStrings == "quatrads" ? "quatrads" : "triads"} in the key of
  {chromaticScale[selectedKey]}:</p>
  
  <div id="major_triads">
    {#each major_triads as triad}
    <div class="triad">
      <b class="label">{triad.label} ({triad.chord}):</b>
        <div>
          <Triads scale={triad.scale} notes={triad.notes} />
        </div>
      </div>
    {/each}
  </div>
  <p class="only-print">Modal interchange {selectedStrings == "quatrads" ? "quatrads" : "triads"} are shown on the next page.</p>

  <p class="page-break">Common modal interchange {selectedStrings == "quatrads" ? "quatrads" : "triads"} borrowed from
  {chromaticScale[selectedKey]} minor:</p>
  <div id="modal_interchange">
    {#each modal_interchange_triads as triad}
      <div class="triad">
        <b class="label">{triad.label} ({triad.chord}):</b>
        <div>
          <Triads scale={triad.scale} notes={triad.notes} />
        </div>
      </div>
    {/each}
  </div>
</body>