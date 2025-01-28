<script>
    import * as fretboard from "fretboards"
    import { onMount } from "svelte";
  
    onMount( () => {
      fretboard.Fretboard.drawAll(".fb-container", {
        fretWidth: 40,
      })
    });
  
  </script>
  
  <style>
    body {
      font-family: "Open Sans", Helvetica;
    }
    p {
      padding-top: 10px;
    }
  </style>
  
  <body>
    <h1>Fretboards Library Data Options Tests</h1>
  
    <p>Scales use default line colors</p>
    <div class="fb-container"
          data-frets=14
          data-notes="a minor-blues">
    </div>
  
    <p>Even with custom fills </p>
  
    <div class="fb-container"
          data-frets=14
          data-fillColors="#ffeeee #eeffee #eeeeff"
          data-notes="a minor-blues">
    </div>
  
    <p>And even with names (note: radius set to 8)</p>
  
    <div class="fb-container"
          data-frets=14
          data-showNames="true"
          data-radius=8
          data-notes="a minor-blues">
    </div>
  
    <p>...unless otherwise specified</p>
  
    <div class="fb-container"
          data-frets=14
          data-notes="a minor-blues"
          data-fillColors="white"
          data-colors="orange indigo">
    </div>
  
    <p>Individual notes get a gray border by default.</p>
  
    <div class="fb-container"
          data-frets="5"
          data-notes="1:g4 2:d#4 3:c4">
    </div>
  
    <p>Even with names and fills (note: radius set to 9)</p>
  
    <div class="fb-container"
          data-frets="5"
          data-nameColors="red green blue"
          data-showNames="true"
          data-radius=9
          data-fillColors="#ffeeee #eeffee #eeeeff"
          data-notes="1:f#4 2:c4 3:a3">
    </div>
  
    <p>...unless otherwise specified</p>
    <div class="fb-container"
          data-frets="5"
          data-nameColors="red green blue"
          data-radius=9
          data-colors="red green blue"
          data-fillColors="#ffeeee #eeffee #eeeeff"
          data-notes="1:f#4 2:c4 3:a3">
    </div>
  
    <p>We can also specify note name color</p>
    <div class="fb-container"
          data-frets="5"
          data-nameColors="white black blue"
          data-radius=9
          data-showNames=true
          data-colors="white black"
          data-fillColors="black white orange"
          data-notes="1:gb4 2:c4 3:a3">
    </div>
  
    <p>We can overlay additional notes over a scale</p>
  
    <div class="fb-container"
          data-frets=14
          data-notes="a minor-blues"
          data-radius=7
          data-dotradius=6
          data-colors="gray"
          data-showNames="true"
          data-fillColors="white"
          data-overlay="1:g4 1:a4 2:e4 1:d5 2:c5"
          data-overlayfillcolors="#f95e2e #f95e2e #f95e2e #80cbe0 #80cbe0"
          data-overlaynamecolors="white white white black black">
    </div>

    <p> Putting it all together now. A-minor blues scale. (Note custom dot radius and color)</p>
    <div class="fb-container"
          data-frets=14
          data-notes="a minor-blues"
          data-radius=7
          data-dotradius=6
          data-dotColor="#9d6038"
          data-fillColors="#f94d30 white white #0095f2 white white white"
          data-shownames=true
          data-colors="black"
          data-nameColors="white black black white black black black">
    </div>

    <p> And the c major scale)</p>
    <div class="fb-container"
          data-frets=14
          data-notes="c major"
          data-radius=7
          data-dotradius=6
          data-dotColor="#9d6038"
          data-fillColors="#f94d30 white white white white white white"
          data-shownames=true
          data-colors="black"
          data-nameColors="white black black black black black black">
    </div>

    <p>For note collections, one color can be specified per note rather than recycling</p>
      <div class="fb-container"
            data-frets=14
            data-shownames=true
            data-namecolors="black"
            data-fillcolors= "#f95e2e #f95e2e #f95e2e #80cbe0 #80cbe0 #80cbe0 #faa336 #faa336 #faa336"
            data-notes="1:g4 2:e4 3:c4 1:c5 2:g4 3:e4 1:e5 2:c5 3:g4">
      </div>

      <p>We can specify note font size.</p>
      <div class="fb-container"
            data-frets=14
            data-radius=13
            data-nameSize=22px
            data-fretHeight=30
            data-shownames=true
            data-namecolors="black"
            data-fillcolors= "#f95e2e #f95e2e #f95e2e #80cbe0 #80cbe0 #80cbe0 #faa336 #faa336 #faa336"
            data-notes="1:g4 2:e4 3:c4 1:c5 2:g4 3:e4 1:e5 2:c5 3:g4">
      </div>

      <p>We can also specify custom string widths and string colors</p>
      <div class="fb-container"
            data-frets=14
            data-notes="c major-pentatonic"
            data-stringColors="orange green red #aaa #aaa #aaa"
            data-stringWidths="1 1 1 2 3 5">
      </div>

      <p>We can also specify fretboard color</p>
      <div class="fb-container"
            data-frets=14
            data-shownames=true
            data-notes="c major-pentatonic"
            data-radius=9
            data-colors="black"
            data-fillColors="#ffe5b8"
            data-fretboardColor="#260b00"
            data-dotColor="#ba845e"
            data-dotRadius=7
            data-stringColors="#e0e0e0 #e0e0e0 #e0e0e0 #c77b30 #c77b30 #c77b30"
            data-stringWidths="1 1 2 3 4 5">
      </div>

      <p>Same thing, left handed</p>
      <div class="fb-container"
            data-frets=14
            data-lefthanded=true
            data-shownames=true
            data-notes="c major-pentatonic"
            data-radius=9
            data-colors="black"
            data-fillColors="#ffe5b8"
            data-fretboardColor="#260b00"
            data-dotColor="#ba845e"
            data-dotRadius=7
            data-stringColors="#e0e0e0 #e0e0e0 #e0e0e0 #c77b30 #c77b30 #c77b30"
            data-stringWidths="1 1 2 3 4 5">
      </div>

      <p> Finally, let's ensure all our defaults are preserved. This should look 
            exactly like the first example at the top of this page.
      </p>
      <div class="fb-container"
      data-frets=14
      data-notes="a minor-blues">
      </div>


  </body>