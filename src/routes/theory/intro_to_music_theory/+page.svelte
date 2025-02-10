<script>
  import Question from "$lib/Question.svelte";
</script>

<body>
  <div>
    <h1>Intro To Music Theory</h1>
    <h3>Scales</h3>
    <p>
      Scales are comprised of half steps (e.g. A to A#, or E to F) and whole
      steps (two half steps, e.g. A to B or E to F#). A half step is one fret on
      the guitar fretboard, and a whole step is two frets. The major scale is
      constructed as follow:
    </p>
    <pre style="font: Courier;">
           W W H W W W H
      </pre>
    <p>
      If you have ever played a c-scale on a piano (all "white keys"), you can
      see this same pattern of whole steps (skipping a black key) and half steps
      (no black key):<br /><br />
      <center>
        <img alt="keyboard" src="/images/keyboard.png" width="300" />
      </center>
    </p>
    <p>
      The minor scale actually has the same intervals, only shifted two notes:
    </p>
    <pre style="font: Courier;">
        Major:      W W H W W W H
        Minor:  W H W W H W W
      </pre>
    <p>
      For a given scale, the starting note is referred to as "the tonic". So for
      a C major scale, the tonic is C. The minor scale created with the same
      notes as a major scale but starting two notes (three half steps) below the
      tonic is called the relative minor. For example, here is the D major
      scale:
    </p>
    <pre>
             D  E  F# G  A  B  C#
     </pre>
    <p>
      The relative minor uses the same notes, but starts two notes below the
      tonic:
    </p>
    <pre>
       B  C# D  E  F# G  A
     </pre>
    <p>
      Take a moment to verify that these two scales have the intervals described
      above for major and minor scales.
    </p>

    <div class="callout callout-question">
      <p><Question question="What are the notes of the G major scale?"
                answer="G A B C D E F#"></Question></p>
      <p><Question question="What are the notes of the A major scale?"
        answer="A B C# D E F# G#"></Question></p>
    </div>

    <h3>A brief diversion about modes</h3>
    <p>
      Many people seem intimidated by "modes" in music theory. But have I got
      good news for you! We are, what, 5 minutes into music theory? And you have
      already learned two modes! The major scale above is the "Ionian mode". The
      Ionian mode starts on the tonic, or first degree, of the scale and has the
      W-W-H-W-W-W-H intervals we learned earlier.
    </p>
    <p>
      But we don't have to start our scale on the first degree. Above we took
      the same notes, but started on the 6th degree of the scale (two notes
      below the tonic). As we saw above, we refer to this as "B minor".
      Technically it is the natural minor (because there are other minor scales
      that we will encounter later). But even more technically, this is the
      "Aeolian mode"—the mode that starts on the 6th note of the relative major
      scale.
    </p>
    <p>
      That's all modes are—scales starting at different notes within the
      relative major scale. If you play the notes in the D major scale seven
      times, each time starting on a different note (or different "degree" of
      the scale), you have played all the modes of that scale. Each mode has a
      fancy name, but we will worry about that later.
    </p>
    <p>
      There. You know all about modes. Well, not <b>all</b> about modes...there is
      more to say particularly in the context of different styles and emotional affect
      of music. But for now, you know plenty about modes to breathe easy and move
      on with your life.
    </p>
    <h3>Chords</h3>

    <p>
      Chords are three or four notes taken from a particular scale played
      together. The "root" of the chord is the note on which the chord is built
      and the note that give the chord its name. (For example, the root of a C
      major chord is C). Common chords include
    </p>
    <ul>
      <li>Major chord: Root, major 3rd, 5th</li>
      <li>Minor chord: Root, minor 3rd, 5th</li>
      <li>Major seventh: Root, major 3rd, 5th, major 7th.</li>
      <li>Minor seventh: Root, minor 3rd, 5th, minor 7th.</li>
      <li>(Dominant) Seventh: Root, major 3rd, 5th, minor 7th.</li>
      <li>Diminished chord: Root, minor 3rd, and diminished 5th</li>
    </ul>

    <div class="callout callout-exercise">
      <p>
        Grab a piece of paper and write out the intervals for the following 
        chords: Major, Minor, Major 7th, Minor 7th, Dominant 7th, and Diminished.
      </p>
    </div>

    <p>
      The list of chords above raises several questions. First of all, what is a major 3rd vs.
      a minor 3rd? A major 3rd is 4 half steps above the root (e.g., E in a C
      major chord). A minor third is 3 half steps above the root (e.g. E♭ in a C
      minor chord).
    </p>

    <p>
      Next, what is a 5th? A 5th is 7 half steps above the root (e.g. F in a C
      major or minor chord). A diminished 5th is 6 half steps above the root.
      (When we say "5th", we are technically referring to a "perfect 5th")
    </p>

    <p>
      The next question you may have is what is a major 7th and a minor 7th. A
      minor 7th is two half steps below the root (B♭ in a C minor 7th chord). A
      major 7th is one half step below the root (B in a C major 7th chord).
    </p>

    <p>
      Finally, the notation can be confusing. In general, when we talk about "a
      7th chord" (e.g. C7), we mean the dominant seventh. If a major or minor
      7th is desired, that will be specified explicitly (Cmaj7 or Cmin7). Just
      to keep us on our toes, sometimes Cmaj7 is notated as CΔ, CΔ7, or CM7. And
      Cmin7 might be notated as Cm7.
    </p>
    <div class="callout callout-question">
      <p><Question question="What is a minor third?"
                answer="Two notes three half steps apart."></Question>
      </p>
      <p><Question question="What is a major third?"
        answer="Two notes four half steps apart."></Question>
      </p>
      <p><Question question="What is a (perfect) fifth?"
        answer="Two notes seven half steps apart."></Question>
      </p>
      <p><Question question="What is a minor 7th?"
        answer="Two notes ten half steps apart (two half steps below the root)."></Question>
      </p>
      <p><Question question="What is a major 7th?"
        answer="Two notes elevent half steps apart (one half steps below the root)."></Question>
      </p>
    </div>
    <p>
      <b>Now comes an important point.</b> We said above that a C minor chord is
      comprised of C, E♭, and F. But the C major scale is C, D, E, F, G, A and B.
      There is no E♭ in that scale. So the C minor chord is not in the key of C,
      but the C major chord (C, E, F) is.
    </p>
    <p>
      What if we want to construct a chord with a root of D in the key of C
      major? We would use D, F (the third), and A (the fifth). But is F a major
      third or a minor third? It is three half steps above D, so it is a minor
      third. So the D chord in the key of C is D minor.
    </p>
    <p>
      If we continue to work out the chords using each note in the key of C
      major as the root, we would find that the chords in the key of C major
      are:
    </p>
    <ul>
      <li>C Major</li>
      <li>D minor</li>
      <li>E minor</li>
      <li>F Major</li>
      <li>G Major</li>
      <li>A minor</li>
      <li>B diminished</li>
    </ul>
    <div class="callout callout-exercise">
      <p>
        As an exercise, write out the chords (root, third, fifth) using each of
        the notes in the C major scale as the root. Verify that the resulting
        chords (using only notes in the scale for the third and fifth)
        correspond to those in the list above. The first one is worked out
        below.
      </p>
      <p>
        <b>D chord:</b> D (root), F (third), A (fifth). F is 3 half steps above
        D, so it is a minor third. So the D chord in the key of C is
        <b>D minor</b>.
      </p>
    </div>
    <p>This pattern of chords holds for any major scale:</p>
    <pre>
      Major, minor, minor, Major, Major, minor, diminished.
    </pre>
    <p>We can write this in terms of "degrees" of the scale:</p>
    <pre>
      I   ii  iii IV  V   vi  VII°
    </pre>

    <p>
      Here, capital roman numeral indicate major chords, and lower case roman
      numerals indicate minor chords. And the little circle after the VII
      indicates the diminished chord. So, for example, the chords that are in
      the D major scale (D E F# G A B C#) are as follows:
    </p>

    <pre>
      I   ii  iii IV  V   vi  VII°
      D   Em  F#m G   A   Bm  C#°
    </pre>

    <p>
      If you play those chords, you are in the key of D major. You can play
      other chords, but then you are "out of the key". Sometimes this works. For
      example, you can pick chords from the parallel minor key (D minor in our
      example). This is called "modal interchange", and is a topic for <a
        href="/theory/modal_interchange">another day</a>.
    </p>

    <h3>Putting it all together: the circle of fifths.</h3>
    <p>
      Ok, so suppose you want to write a song in A major. (Because A major fits 
      your vocal range, or because you know from experience you like the way it 
      sounds, or because your instructor told you to.) You want to use the I, 
      IV, V, and vi chords. But is the IV D major, or D♭ major? Or D major? 
      And is it F minor, or F# minor? You have a few ways to figure this out:
    </p>
    <ul>
      <li>Use the W-W-H-W-W-W-H pattern to figure it out.</li>
      <li>Gain a bunch of experience so you just know from memory.</li>
      <li>Use the circle of fifths.</li>
    </ul>
    <p>
      The circle of fifths sorts the keys into ascending order based on the number of 
      sharps in the key (clockwise) or flats in the key (counter clockwise). It is called 
      the circle of fifths because the "next" key (in terms of number of sharps or flats) 
      happens to be a perfect fifth (7 half steps) away from the previous key. You can also 
      tell what the sharps and flats are with the circle of fifths—either with a little 
      quick math, or by using a version of the circle of fifths that calls this information
      out for you, such as the one below.
    </p>
    <center><img width="100%" alt="Circle Of Fifths" src="/images/circle_of_fifths@0.5x.webp"></center>
    <p>
      If you understand how the circle of fifths works, you can recreate it (in your head 
      or on paper) whenever you need to figure out the "key signature" (the sharps or flats 
      in a given key) of the key you are interested in. Alternatively, 
      you can memorize the circle of fifths for rapid recall, or just keep it handy for 
      reference. A hybrid approach (which is the most practical), is to memorize a section 
      of the circle of fifths that includes the most common keys for your preferred genre 
      of music, and then learn the rest over time as you gain experience (and keeping a 
      printout handy in the mean time).
    </p>
    <p>
      In the version above, the bolded major keys (F,C, G, D, A ) and their corresponding 
      relative minor keys account for roughly half of popular music. (At least according to 
      a 2015 analysis of 30 million songs in the spotify database by Spotify "Data Storyteller"
      and musician Eliot Van Buskirk. His 2015 blog post has since been taken down, but the
      song key pie chart he constructed is available <a href="/images/buskirk_piechart.png">here</a>.)
    </p>
  </div>
</body>

<style>
  /* some colors: #f95e2e #80cbe0 #faa336 #739afc */
  @import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap");
  @import "/style/callout.css";

  body {
    margin-left: auto;
    margin-right: auto;
    max-width: 700px;
  }

  h1,
  h2,
  h3,
  h4,
  p,
  label {
    font-family: "Libre Baskerville", Helvetica;
  }

  p,
  ul,
  li {
    padding-top: 0px;
    padding-bottom: 10px;
    color: rgb(45, 118, 166);
    line-height: 28px;
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

    .page-break {
      page-break-before: always;
    }
  }
</style>
