/**
 * NOVA MIND — Audio Engine
 * Completely silenced / disabled per user request.
 */

class GamifiedAudioEngine {
  public enabled: boolean = false;

  public playClick(): void {
    // Disabled / Silent
  }

  public playCorrect(): void {
    // Disabled / Silent
  }

  public playIncorrect(): void {
    // Disabled / Silent
  }

  public playLevelUp(): void {
    // Disabled / Silent
  }

  public playStreak(): void {
    // Disabled / Silent
  }

  public playComplete(): void {
    // Disabled / Silent
  }

  public playActivate(): void {
    // Disabled / Silent
  }
}

export const soundEngine = new GamifiedAudioEngine();
