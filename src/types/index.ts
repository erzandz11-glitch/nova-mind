export type NodeStatus = 'completed' | 'current' | 'locked' | 'unlocked';

export interface QuizQuestion {
  id: string;
  prompt: string;
  codeSnippet?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface RoadmapNode {
  id: string;
  title: string;
  subtitle: string;
  tier: number;
  iconName: string;
  category: 'Mindset & Stoicism' | 'Systems & Arbitrage' | 'Exponential Leverage' | 'Autonomous AI';
  status: NodeStatus;
  xpReward: number;
  estimatedMinutes: number;
  questionsCount: number;
  quizQuestions: QuizQuestion[];
  badgeUnlocked?: string;
}

export interface DailyWorkout {
  id: string;
  date: string;
  title: string;
  tag: string;
  context: string;
  question: string;
  options: {
    id: string;
    text: string;
    isOptimal: boolean;
    feedback: string;
    xpMultiplier: number;
  }[];
  rewardXp: number;
}

export interface DiagnosticOption {
  text: string;
  scoreDelta: number; // 0 to 33.3
  dimension: string;
  rationale: string;
}

export interface DiagnosticQuestion {
  id: string;
  scenario: string;
  options: DiagnosticOption[];
}

export interface DiagnosticTest {
  id: 'leverage_iq' | 'zero_emotion';
  title: string;
  badgeName: string;
  description: string;
  questions: DiagnosticQuestion[];
  scoreTitleLevels: {
    minScore: number;
    title: string;
    color: string;
    analysis: string;
    archetype: string;
  }[];
}

export interface DiagnosticResult {
  testId: string;
  score: number;
  maxScore: number;
  archetype: string;
  analysis: string;
  date: string;
}

export interface LeaderboardFellow {
  rank: number;
  handle: string;
  name: string;
  avatarLetter: string;
  avatarBg: string;
  xp: number;
  streak: number;
  league: 'Emerald Sovereign' | 'Diamond Architect' | 'Gold Operator';
  isCurrentUser?: boolean;
}

export interface UserGamificationState {
  userId: string;
  displayName: string;
  avatarLetter: string;
  streakDays: number;
  streakActiveToday: boolean;
  xp: number;
  level: number;
  levelTitle: string;
  xpToNextLevel: number;
  energy: number; // Max 100
  maxEnergy: number;
  dailyGoalCompleted: number;
  dailyGoalTarget: number;
  dailyWorkoutDone: boolean;
  completedNodeIds: string[];
  currentNodeId: string;
  diagnosticResults: Record<string, DiagnosticResult>;
  walletConnected: boolean;
  walletAddress?: string;
}

export interface MasterclassLesson {
  id: string;
  title: string;
  duration: string;
  durationSeconds: number;
  completed: boolean;
  videoUrl?: string;
  takeaway: string;
}

export interface MasterclassCourse {
  id: string;
  title: string;
  instructor: string;
  role: string;
  thumbnail: string;
  lessons: MasterclassLesson[];
  totalXp: number;
}

/* Backward-compatible types for legacy repository modules */
export type NodeType = 'foundation' | 'core' | 'advanced' | 'mastery';

export type FacultyDiscipline = 'all' | 'ai' | 'neuroscience' | 'finance' | 'productivity' | 'complex_systems';

export interface FacultyDepartment {
  id: FacultyDiscipline;
  name: string;
  code: string;
  chair: string;
  focus: string;
  description: string;
  activeResearchers: number;
  coursesCount: number;
  codicesCount: number;
  accent: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  durationSeconds: number;
  completed: boolean;
  summary: string;
  keyTakeaway: string;
  mathematicalBasis?: string;
  resources?: {
    title: string;
    type: string;
    size: string;
  }[];
}

export interface Module {
  id: string;
  title: string;
  duration: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  facultyId: FacultyDiscipline;
  instructor: {
    name: string;
    role: string;
    bio: string;
    avatar: string;
    affiliation?: string;
  };
  thumbnail: string;
  category: string;
  level: string;
  rating: number;
  enrolledCount: number;
  progressPercent: number;
  prerequisites: string[];
  modules: Module[];
  instructorNotes: string;
}

export interface SkillNode {
  id: string;
  title: string;
  codename: string;
  category: string;
  facultyId: FacultyDiscipline;
  description: string;
  type: NodeType;
  status: NodeStatus;
  progress: number;
  tier: number;
  position: { x: number; y: number };
  dependencies: string[];
  courseId: string;
  durationHours: number;
  metrics: {
    mentalModels: number;
    frameworks: number;
    roiMultiplier: string;
  };
}

export interface VaultItem {
  id: string;
  title: string;
  facultyId: FacultyDiscipline;
  category: string;
  description: string;
  content: string;
  tags: string[];
  executionTime: string;
  updatedAt: string;
  rating: number;
  downloads: number;
  isBookmarked?: boolean;
  author: string;
  doi?: string;
}

export interface UserProgress {
  userId: string;
  completedNodeIds: string[];
  unlockedNodeIds: string[];
  currentCourseId: string;
  currentLessonId: string;
  totalHoursInvested: number;
  neuralSyncPercentage: number;
  vaultSavedCount: number;
  streakDays: number;
  lastActiveDate: string;
}

export interface WalletState {
  isConnected: boolean;
  address: string | null;
  network: string;
  balanceETH: string;
}

export interface LivePeerActivity {
  id: string;
  handle: string;
  action: string;
  target: string;
  location: string;
  timestamp: string;
  avatarLetter: string;
}

export interface ClusterStatus {
  activeSovereignPeers: number;
  globalLatencyMs: number;
  clusterUptime: string;
  throughputRps: number;
  edgeRegions: string[];
}

export type FrontierFacultyId =
  | 'deep_it_cyber'
  | 'energy_economics'
  | 'biotech_longevity'
  | 'mindset_cognitive'
  | 'quant_macro_finance'
  | 'crypto_defi_web3'
  | 'ai_autonomous_swarms';

export interface FrontierFacultyLesson {
  id: string;
  title: string;
  duration: string;
  durationSeconds: number;
  completed: boolean;
  keyTakeaway: string;
  codeSnippet?: string;
  formula?: string;
  drillQuestion?: QuizQuestion;
}

export interface FrontierFacultyModule {
  id: string;
  code: string;
  title: string;
  description: string;
  lessons: FrontierFacultyLesson[];
}

export interface FrontierFaculty {
  id: FrontierFacultyId;
  name: string;
  shortTitle: string;
  iconName: string;
  emoji: string;
  themeColor: 'cyan' | 'amber' | 'emerald' | 'violet' | 'sky' | 'rose' | 'indigo';
  accentHex: string;
  glowClass: string;
  borderClass: string;
  bgLightClass: string;
  badgeClass: string;
  headline: string;
  description: string;
  estimatedHours: number;
  totalXp: number;
  completionPercent: number;
  difficulty: 'Foundational' | 'Tactical' | 'Intermediate' | 'Hardcore Tactical' | 'Elite Sovereign' | 'Production Grade' | 'Civilization Scale';
  simulatorName: string;
  simulatorTag: string;
  modules: FrontierFacultyModule[];
  drillNodes: RoadmapNode[];
}

export interface CivilizationChallenge {
  id: string;
  date: string;
  facultyId: FrontierFacultyId;
  facultyName: string;
  facultyEmoji: string;
  title: string;
  tag: string;
  context: string;
  question: string;
  codeSnippet?: string;
  options: {
    id: string;
    text: string;
    isOptimal: boolean;
    feedback: string;
    xpMultiplier: number;
  }[];
  rewardXp: number;
  badgeReward?: string;
}

export type MegaTrackId =
  | 'unicorn_solopreneur'
  | 'ai_prompt_warfare'
  | 'godot_game_eng'
  | 'zero_emotion'
  | 'micro_saas';

export interface MegaTrackLesson {
  id: string;
  title: string;
  duration: string;
  durationSeconds: number;
  completed: boolean;
  keyTakeaway: string;
  codeSnippet?: string;
  drillQuestion?: QuizQuestion;
}

export interface MegaTrackModule {
  id: string;
  title: string;
  description: string;
  lessons: MegaTrackLesson[];
}

export interface MegaTrack {
  id: MegaTrackId;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  accentBorder: string;
  accentGlow: string;
  difficulty: 'Foundational' | 'Tactical' | 'Intermediate' | 'Hardcore Tactical' | 'Elite Sovereign' | 'Production Grade';
  estimatedHours: number;
  totalXp: number;
  completionPercent: number;
  description: string;
  modules: MegaTrackModule[];
  drillNodes: RoadmapNode[];
}

export interface SimulationChoice {
  id: string;
  label: string;
  description: string;
  tacticalCategory: string;
  impact: {
    revenueDelta: number;
    burnRateDelta: number;
    stressDelta: number;
    asymmetryDelta: number;
  };
  consequences: string;
  feedback: string;
  xpBonus: number;
}

export interface SimulationTurn {
  id: string;
  stepNumber: number;
  title: string;
  situation: string;
  urgency: 'Low' | 'Medium' | 'Critical';
  choices: SimulationChoice[];
}

export interface SimulationScenario {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  initialTelemetry: {
    revenue: number;
    burnRate: number;
    stressIndex: number;
    asymmetryScore: number;
  };
  turns: SimulationTurn[];
  postMortemVerdict: {
    asymmetricOutcome: string;
    keyTakeaway: string;
    xpReward: number;
  };
}

export interface PromptPlaygroundTemplate {
  id: string;
  title: string;
  category: string;
  systemPrompt: string;
  userPrompt: string;
  mockResponse: string;
  reasoningSteps: string[];
  metrics: {
    latencyMs: number;
    tokenUsage: number;
    safetyScore: number;
    asymmetryRating: string;
  };
}

export interface HolographicSkillNode {
  id: string;
  trackId: MegaTrackId;
  label: string;
  codename: string;
  tier: number;
  x: number;
  y: number;
  status: NodeStatus;
  facultyColor: string;
  prerequisites: string[];
  description: string;
  category: string;
  metrics: {
    mentalModels: number;
    roiMultiplier: string;
  };
  drillQuestion?: QuizQuestion;
}

export interface HolographicLink {
  source: string;
  target: string;
}

export interface SoulboundBadge {
  id: string;
  title: string;
  icon: string;
  description: string;
  rarity: string;
  unlocked: boolean;
  dateUnlocked?: string;
  category: string;
  perk: string;
}

export interface AICopilotMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  videoTimestamp?: number;
  codeBlock?: string;
}
