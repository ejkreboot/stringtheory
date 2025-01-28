class NotePlayer {
    #audioContext; // Private field
    #periodicWave; // Private field
  
    constructor() {
      this.#audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const real = [0, 0, 0.02, 0.02, 0.02, 0.02, 0];
      const imag = [0, 1.4, -0.2, 0.3, -0.2, -0.1, 0];
      this.#periodicWave = this.#audioContext.createPeriodicWave(real, imag, { disableNormalization: true });
    }
  
    // Public method
    playNote(duration, frequency) {
      const pluck = this.#pluckedString(duration, frequency);
      pluck.connect(this.#audioContext.destination);
    }
  
    // Private method
    #createOscillator(frequency) {
      return new OscillatorNode(this.#audioContext, {
        channelCountMode: "explicit",
        channelCount: 1,
        frequency,
      });
    }
  
    // Private method
    #createGain(level) {
      return new GainNode(this.#audioContext, {
        gain: level,
        channelCount: 1,
        channelCountMode: "explicit",
      });
    }
  
    // Private method
    #mixSignals(signalA, signalB, dry, wet) {
      const merger = this.#audioContext.createChannelMerger();
      const dryGain = this.#createGain(dry);
      const wetGain = this.#createGain(wet);
      const monoGain = this.#audioContext.createGain();
      monoGain.channelCountMode = "explicit";
      monoGain.channelCount = 1; // Downmix to mono
  
      signalA.connect(dryGain).connect(merger, 0, 0);
      signalB.connect(wetGain).connect(merger, 0, 1);
      merger.connect(monoGain);
      return monoGain;
    }
  
    // Private method
    #pluckedString(duration, frequency) {
      const gain1 = this.#createGain(1);
      const gain2 = this.#createGain(1);
  
      const osc1 = this.#createOscillator(frequency);
      osc1.setPeriodicWave(this.#periodicWave);
      osc1.start();
      osc1.connect(gain1);
  
      gain1.gain.exponentialRampToValueAtTime(1, this.#audioContext.currentTime + 0.02);
      gain1.gain.exponentialRampToValueAtTime(0.0001, this.#audioContext.currentTime + duration / 1000);
      gain1.gain.setValueAtTime(0, this.#audioContext.currentTime + duration / 1000);
      osc1.stop(this.#audioContext.currentTime + 2 * duration);
  
      const osc2 = this.#createOscillator(frequency);
      osc2.setPeriodicWave(this.#periodicWave);
      osc2.start();
      osc2.connect(gain2);
  
      gain2.gain.linearRampToValueAtTime(1, this.#audioContext.currentTime + 0.02);
      gain2.gain.exponentialRampToValueAtTime(0.75, this.#audioContext.currentTime + 0.2);
      gain2.gain.exponentialRampToValueAtTime(0.0001, this.#audioContext.currentTime + 0.75 * (duration / 1000));
      gain2.gain.setValueAtTime(0, this.#audioContext.currentTime + duration / 1000);
      osc2.stop(this.#audioContext.currentTime + 2 * duration);
  
      return this.#mixSignals(gain1, gain2, 0.5, 0.5);
    }
  }
  
  export const frequencies = {
    "e2": 82.41, "f2": 87.31, "f#2": 92.50, "g2": 98.00, "g#2": 103.83,
    "a2": 110.00, "a#2": 116.54, "b2": 123.47, "c3": 130.81, "c#3": 138.59,
    "d3": 146.83, "d#3": 155.56, "e3": 164.81, "f3": 174.61, "f#3": 185.00,
    "g3": 196.00, "g#3": 207.65, "a3": 220.00, "a#3": 233.08, "b3": 246.94,
    "c4": 261.63, "c#4": 277.18, "d4": 293.66, "d#4": 311.13, "e4": 329.63,
    "f4": 349.23, "f#4": 369.99, "g4": 392.00, "g#4": 415.30, "a4": 440.00,
    "a#4": 466.16, "b4": 493.88, "c5": 523.25, "c#5": 554.37, "d5": 587.33,
    "d#5": 622.25, "e5": 659.25, "f5": 698.46, "f#5": 739.99, "g5": 783.99,
    "g#5": 830.61, "a5": 880.00, "a#5": 932.33, "b5": 987.77, "c6": 1046.50,
    "c#6": 1108.73, "d6": 1174.66
  };
  
  export default NotePlayer;
  