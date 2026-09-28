/**
 * NOVA MIND — Supabase Integration Mockup Client
 * 
 * Production architecture for persisting Solopreneur LMS state,
 * Neural Path progress, and Second Brain Knowledge Vault documents.
 */

import { Course, Lesson, UserProgress, SkillNode, VaultItem } from '../types';

// Supabase configuration placeholders (leave keys empty per architectural specification)
export const SUPABASE_URL = process.env.VITE_SUPABASE_URL || '';
export const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY || '';

/**
 * Supabase Database Schema Definition
 */
export interface Database {
  public: {
    Tables: {
      courses: {
        Row: Course;
        Insert: Omit<Course, 'id'> & { id?: string };
        Update: Partial<Course>;
      };
      lessons: {
        Row: Lesson;
        Insert: Omit<Lesson, 'id'> & { id?: string };
        Update: Partial<Lesson>;
      };
      user_progress: {
        Row: UserProgress;
        Insert: UserProgress;
        Update: Partial<UserProgress>;
      };
      neural_nodes: {
        Row: SkillNode;
        Insert: SkillNode;
        Update: Partial<SkillNode>;
      };
      knowledge_vault: {
        Row: VaultItem;
        Insert: Omit<VaultItem, 'id'> & { id?: string };
        Update: Partial<VaultItem>;
      };
    };
  };
}

/**
 * Mock Supabase Client implementation
 * In a fully deployed environment with keys, this delegates to `@supabase/supabase-js` createClient.
 */
class SupabaseMockClient {
  private url: string;
  private key: string;

  constructor(url: string, key: string) {
    this.url = url;
    this.key = key;
  }

  get isConfigured(): boolean {
    return Boolean(this.url && this.key);
  }

  from<T extends keyof Database['public']['Tables']>(table: T) {
    return {
      select: (query = '*') => ({
        eq: (column: string, value: unknown) => ({
          single: async (): Promise<{ data: Database['public']['Tables'][T]['Row'] | null; error: Error | null }> => {
            return { data: null, error: null };
          },
          data: async (): Promise<{ data: Database['public']['Tables'][T]['Row'][]; error: Error | null }> => {
            return { data: [], error: null };
          }
        }),
        data: async (): Promise<{ data: Database['public']['Tables'][T]['Row'][]; error: Error | null }> => {
          return { data: [], error: null };
        }
      }),
      upsert: async (payload: Database['public']['Tables'][T]['Insert']) => {
        return { data: payload, error: null };
      },
      update: (payload: Database['public']['Tables'][T]['Update']) => ({
        eq: async (column: string, value: unknown) => {
          return { data: payload, error: null };
        }
      })
    };
  }

  auth = {
    getUser: async () => ({
      data: {
        user: {
          id: 'usr_executive_9921',
          email: 'sovereign@novamind.io',
          user_metadata: {
            handle: 'Sovereign_01',
            tier: 'Executive Titan',
            wallet: '0x71C8F79B229F8aB622d1A5B4C253B8018e69882a'
          }
        }
      },
      error: null
    }),
    signOut: async () => ({ error: null })
  };
}

// Export singleton client instance
export const supabase = new SupabaseMockClient(SUPABASE_URL, SUPABASE_ANON_KEY);
