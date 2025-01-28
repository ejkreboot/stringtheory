<script>
    import { onMount } from "svelte";
    import * as fretboard from "fretboards";
    let note;
    let getStrings;
  
    onMount(() => {
      const fb = fretboard.Fretboard({
        where: "#fretboard",
        fretWidth: 25,
        fretHeight: 15,
        frets: 15
      });
  
      fb.clear();
      fb.add(getStrings().map((string) => `${string + 1}:${note}`).join(" "));
      fb.paint();
    });
  </script>
  
  <div id="fretboard"></div>