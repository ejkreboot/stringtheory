import { Renderer, Stave, StaveNote, Voice, Formatter, Accidental } from "vexflow";

class JustANote {
  constructor(containerId, width = 150, height = 150) {
    this.container = document.getElementById(containerId);
    if (!this.container) {
      throw new Error(`Container with id '${containerId}' not found.`);
    }

    // Initialize VexFlow Renderer
    this.renderer = new Renderer(this.container, Renderer.Backends.SVG);
    this.renderer.resize(width, height);
    this.context = this.renderer.getContext();
    this.context.setFont("Arial", 10);

    // Group for easy clearing
    this.group = null;
  }

  // Clears the current group (if any)
  clearGroup() {
    if (this.group) {
      this.context.svg.removeChild(this.group);
      this.group = null;
    }
  }

  // Renders a note on the stave
  renderNote(note, options = {}) {
    const { clef = "treble", duration = "q" } = options;

    // Clear previous rendering
    this.clearGroup();

    // Create a new group for this note
    this.group = this.context.openGroup();

    // Create the stave
    const stave = new Stave(20, 20, 100);
    stave.addClef(clef).setContext(this.context).draw();

    // Define the note
    const stemDirection = note.substring(1, 2) > 4 ? -1 : 1;
    const staveNote = new StaveNote({
      keys: [`${note[0]}/${note[1]}`],
      duration,
      stem_direction: stemDirection,
    });

    // Add accidental if present
    if (note.includes("#")) {
      staveNote.addModifier(new Accidental("#"), 0);
    } else if (note.includes("b")) {
      staveNote.addModifier(new Accidental("b"), 0);
    }

    // Create a voice and formatter
    const voice = new Voice({ num_beats: 1, beat_value: 4 });
    voice.addTickables([staveNote]);
    new Formatter().joinVoices([voice]).format([voice], 50);

    // Draw the voice
    voice.draw(this.context, stave);

    // Close the group
    this.context.closeGroup();
  }
}

export default JustANote;