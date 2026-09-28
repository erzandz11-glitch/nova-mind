import { UserGamificationState, DiagnosticResult } from '../types';
import { INITIAL_GAMIFICATION_STATE } from '../data/gamifiedData';

const STORAGE_KEY = 'novamind_polymath_galaxy_v7';

export class GamifiedStorage {
  private static cache: UserGamificationState | null = null;

  static getState(): UserGamificationState {
    if (this.cache) return this.cache;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        this.cache = parsed;
        return parsed;
      }
    } catch {
      // Fallback
    }
    this.cache = INITIAL_GAMIFICATION_STATE;
    return INITIAL_GAMIFICATION_STATE;
  }

  static saveState(state: UserGamificationState): void {
    this.cache = state;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (err) {
      console.warn('[STORAGE] LocalStorage throttled', err);
    }
  }

  static addXp(amount: number): { state: UserGamificationState; leveledUp: boolean } {
    const current = this.getState();
    const newXp = current.xp + amount;
    const newLevel = Math.floor(newXp / 300) + 1;
    const leveledUp = newLevel > current.level;

    const titles = [
      'Level 1 · Apprentice Observer',
      'Level 2 · First Principles Thinker',
      'Level 3 · Stoic Practitioner',
      'Level 4 · System Arbitrageur',
      'Level 5 · Exponential Operator',
      'Level 6 · Sovereign Architect',
      'Level 7 · Master Synthesizer',
      'Level 8 · Synthetic Commander',
      'Level 9 · Sovereign Unicorn',
      'Level 10 · Apex Sovereign Titan',
      'Level 11 · Civilization Strategist',
      'Level 12 · Sovereign Polymath',
      'Level 13 · Galactic Systems Architect',
      'Level 14 · Frontier Singularity Sage',
      'Level 15 · Omniscient Sovereign Titan'
    ];

    const updated: UserGamificationState = {
      ...current,
      xp: newXp,
      level: newLevel,
      levelTitle: titles[Math.min(newLevel - 1, titles.length - 1)],
      xpToNextLevel: newLevel * 300
    };

    this.saveState(updated);
    return { state: updated, leveledUp };
  }

  static completeDailyWorkout(xpReward: number): UserGamificationState {
    const current = this.getState();
    const newXp = current.xp + xpReward;
    const newDailyGoal = Math.min(current.dailyGoalTarget, current.dailyGoalCompleted + 1);
    const newStreak = current.streakActiveToday ? current.streakDays : current.streakDays + 1;

    const updated: UserGamificationState = {
      ...current,
      xp: newXp,
      dailyWorkoutDone: true,
      dailyGoalCompleted: newDailyGoal,
      streakDays: newStreak,
      streakActiveToday: true
    };

    this.saveState(updated);
    return updated;
  }

  static completeNode(nodeId: string, nextNodeId?: string, xpReward: number = 200): UserGamificationState {
    const current = this.getState();
    const completedSet = new Set(current.completedNodeIds);
    completedSet.add(nodeId);

    const newDailyGoal = Math.min(current.dailyGoalTarget, current.dailyGoalCompleted + 1);
    const newStreak = current.streakActiveToday ? current.streakDays : current.streakDays + 1;

    const updated: UserGamificationState = {
      ...current,
      completedNodeIds: Array.from(completedSet),
      currentNodeId: nextNodeId || current.currentNodeId,
      dailyGoalCompleted: newDailyGoal,
      streakDays: newStreak,
      streakActiveToday: true
    };

    this.saveState(updated);
    this.addXp(xpReward);
    return this.getState();
  }

  static saveDiagnosticResult(result: DiagnosticResult, xpBonus: number = 100): UserGamificationState {
    const current = this.getState();
    const updated: UserGamificationState = {
      ...current,
      diagnosticResults: {
        ...current.diagnosticResults,
        [result.testId]: result
      }
    };

    this.saveState(updated);
    this.addXp(xpBonus);
    return this.getState();
  }

  static toggleWallet(connected: boolean, address?: string): UserGamificationState {
    const current = this.getState();
    const updated: UserGamificationState = {
      ...current,
      walletConnected: connected,
      walletAddress: address
    };
    this.saveState(updated);
    return updated;
  }
}
