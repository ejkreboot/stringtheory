<script>
    import { onMount } from "svelte";
    import * as fretboards from "fretboards"; // Assuming the library provides this class
  
    export let scale = ""; // Scale name, e.g., "C Major"
    export let notes = ""; // Notes for the triad as a space-separated string, e.g., "C E G"
  
    let fretboardElement; // Reference to the DOM element for the fretboard
    let overlayFillColors;

    if(notes.split(" ").length == 9) {
      overlayFillColors = ["#faa336", "#faa336", "#faa336", 
                                "#80cbe0", "#80cbe0","#80cbe0",
                                "#f95e2e", "#f95e2e", "#f95e2e"]
    } else {
      overlayFillColors = ["#faa336", "#faa336", "#faa336", "#faa336", 
                                "#80cbe0", "#80cbe0","#80cbe0", "#80cbe0",
                                "#f95e2e", "#f95e2e", "#f95e2e", "#f95e2e"]

    }

    let id = "fb_" + Math.floor(10000 * Math.random());
    onMount(() => {
      const config = {
        frets: 15,
        fretWidth: 38,
        fretHeight: 18,
        where: "#" + id,
        showNames: true,
        nameColors: "#777",
        fillColors: "#ddd",
        colors: "#ccc",
        stringThickness: 12,
        radius: 7,
        overlayFillColors,
        overlayNameColors: "#000",
        dotColor: "black",
        dotRadius: 5
      }
      fretboardElement = fretboards.Fretboard(config);
      fretboardElement.add(scale);
      fretboardElement.addOverlay(notes.split(" "));
      fretboardElement.paint();
    });
  
  </script>
  
  <style>  
    .scale-label {
      font-family: "Libre Baskerville", sans-serif;
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 10px;
      color: rgb(45, 118, 166);
    }
  </style>
  
  <div class="fretboard-container">
    <div id="{id}"></div>
  </div>