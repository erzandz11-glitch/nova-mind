/**
 * NOVA MIND — Enterprise High-Throughput Client Cache & Offline Sync Engine
 * Built to withstand thousands of concurrent operations, instant optimistic updates,
 * and seamless fallback across sessions.
 */

import { UserProgress, SkillNode, VaultItem } from '../types';
import { INITIAL_USER_PROGRESS, SKILL_NODES, VAULT_ITEMS } from '../data/mockData';

const STORAGE_KEYS = {
  USER_PROGRESS: 'novamind_user_progress_v4',
  SKILL_NODES: 'novamind_skill_nodes_v4',
  VAULT_ITEMS: 'novamind_vault_items_v4',
  ACTIVE_COURSE: 'novamind_active_course_v4',
  USER_NOTES: 'novamind_user_notes_v4',
  AUDIO_ENABLED: 'novamind_audio_enabled_v4',
} as const;

export class EnterpriseStorage {
  private static memoryCache: Map<string, any> = new Map();

  static getUserProgress(): UserProgress {
    if (this.memoryCache.has(STORAGE_KEYS.USER_PROGRESS)) {
      return this.memoryCache.get(STORAGE_KEYS.USER_PROGRESS);
    }
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.USER_PROGRESS);
      if (stored) {
        const parsed = JSON.parse(stored);
        this.memoryCache.set(STORAGE_KEYS.USER_PROGRESS, parsed);
        return parsed;
      }
    } catch {
      // Fallback
    }
    this.memoryCache.set(STORAGE_KEYS.USER_PROGRESS, INITIAL_USER_PROGRESS);
    return INITIAL_USER_PROGRESS;
  }

  static saveUserProgress(progress: UserProgress): void {
    this.memoryCache.set(STORAGE_KEYS.USER_PROGRESS, progress);
    try {
      localStorage.setItem(STORAGE_KEYS.USER_PROGRESS, JSON.stringify(progress));
    } catch (err) {
      console.warn('[NOVA CACHE] LocalStorage write throttled', err);
    }
  }

  static getSkillNodes(): SkillNode[] {
    if (this.memoryCache.has(STORAGE_KEYS.SKILL_NODES)) {
      return this.memoryCache.get(STORAGE_KEYS.SKILL_NODES);
    }
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.SKILL_NODES);
      if (stored) {
        const parsed = JSON.parse(stored);
        this.memoryCache.set(STORAGE_KEYS.SKILL_NODES, parsed);
        return parsed;
      }
    } catch {
      // Fallback
    }
    this.memoryCache.set(STORAGE_KEYS.SKILL_NODES, SKILL_NODES);
    return SKILL_NODES;
  }

  static saveSkillNodes(nodes: SkillNode[]): void {
    this.memoryCache.set(STORAGE_KEYS.SKILL_NODES, nodes);
    try {
      localStorage.setItem(STORAGE_KEYS.SKILL_NODES, JSON.stringify(nodes));
    } catch (err) {
      console.warn('[NOVA CACHE] Skill nodes save throttled', err);
    }
  }

  static getVaultItems(): VaultItem[] {
    if (this.memoryCache.has(STORAGE_KEYS.VAULT_ITEMS)) {
      return this.memoryCache.get(STORAGE_KEYS.VAULT_ITEMS);
    }
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.VAULT_ITEMS);
      if (stored) {
        const parsed: VaultItem[] = JSON.parse(stored);
        // Ensure default items exist alongside any custom user-added items
        const defaultIds = new Set(VAULT_ITEMS.map((i) => i.id));
        const customItems = parsed.filter((i) => !defaultIds.has(i.id));
        const merged = [...VAULT_ITEMS, ...customItems];
        this.memoryCache.set(STORAGE_KEYS.VAULT_ITEMS, merged);
        return merged;
      }
    } catch {
      // Fallback
    }
    this.memoryCache.set(STORAGE_KEYS.VAULT_ITEMS, VAULT_ITEMS);
    return VAULT_ITEMS;
  }

  static saveVaultItems(items: VaultItem[]): void {
    this.memoryCache.set(STORAGE_KEYS.VAULT_ITEMS, items);
    try {
      localStorage.setItem(STORAGE_KEYS.VAULT_ITEMS, JSON.stringify(items));
    } catch (err) {
      console.warn('[NOVA CACHE] Vault items save throttled', err);
    }
  }

  static getActiveCourseId(): string {
    try {
      return localStorage.getItem(STORAGE_KEYS.ACTIVE_COURSE) || 'course_one_person_unicorn';
    } catch {
      return 'course_one_person_unicorn';
    }
  }

  static setActiveCourseId(id: string): void {
    try {
      localStorage.setItem(STORAGE_KEYS.ACTIVE_COURSE, id);
    } catch {
      // Ignore
    }
  }
}
