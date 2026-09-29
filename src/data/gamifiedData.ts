import {
  RoadmapNode,
  DailyWorkout,
  DiagnosticTest,
  LeaderboardFellow,
  UserGamificationState,
  MasterclassCourse
} from '../types';

export const INITIAL_GAMIFICATION_STATE: UserGamificationState = {
  userId: 'user_polymath_77',
  displayName: 'Apex Polymath',
  avatarLetter: 'P',
  streakDays: 21,
  streakActiveToday: true,
  xp: 3850,
  level: 12,
  levelTitle: 'Level 12 · Sovereign Polymath',
  xpToNextLevel: 4200,
  energy: 95,
  maxEnergy: 100,
  dailyGoalCompleted: 3,
  dailyGoalTarget: 4,
  dailyWorkoutDone: false,
  completedNodeIds: ['node_1_zero_emotion', 'node_it_kernel', 'node_energy_grid', 'node_crispr_base'],
  currentNodeId: 'node_2_outsmart_system',
  diagnosticResults: {},
  walletConnected: false,
  walletAddress: undefined
};

export const DAILY_WORKOUT_TODAY: DailyWorkout = {
  id: 'workout_2026_09_26',
  date: 'Today',
  title: "Today's Asymmetric Case Study (Bonus +50 XP)",
  tag: 'ASYMMETRIC LEVERAGE',
  context: 'A legacy enterprise client offers you $25,000 for bespoke consulting, but requires 45 hours of synchronous weekly Zoom meetings and custom one-off delivery with full exclusivity.',
  question: 'What is the highest long-term leverage solopreneur move?',
  options: [
    {
      id: 'opt_1',
      text: 'Accept immediately; $25,000 cash flow in the bank guarantees short-term security.',
      isOptimal: false,
      feedback: 'Linear trap: You trade your non-renewable cognitive focus for linear labor. Zero intellectual compounding.',
      xpMultiplier: 0.2
    },
    {
      id: 'opt_2',
      text: 'Politely decline or counter-offer: Productize the solution into an automated agent workflow at $4,999, retaining all intellectual property to sell to 20 other firms.',
      isOptimal: true,
      feedback: 'Spot on! Decoupling hours from capital compounding unlocks infinite upside while preserving your sovereign bandwidth.',
      xpMultiplier: 1.0
    },
    {
      id: 'opt_3',
      text: 'Accept the contract, hire 2 freelance subcontractors to do the meetings, and pocket the difference.',
      isOptimal: false,
      feedback: 'Agency entropy: Subcontractor management introduces human synchronization friction and quality risk.',
      xpMultiplier: 0.5
    }
  ],
  rewardXp: 50
};

export const DIAGNOSTIC_TESTS: Record<string, DiagnosticTest> = {
  leverage_iq: {
    id: 'leverage_iq',
    title: 'Solopreneur Leverage IQ Test',
    badgeName: 'Exponential Leverage Architect',
    description: 'A 3-scenario diagnostic testing your instinct for capital, code, media distribution, and asymmetric opportunity.',
    questions: [
      {
        id: 'liq_q1',
        scenario: 'You have built an internal script that automates client proposal auditing. A competitor asks to buy the script code for a $10,000 one-off fee. What do you do?',
        options: [
          {
            text: 'Sell the code for $10,000 cash; take guaranteed capital now.',
            scoreDelta: 10,
            dimension: 'Linear Extraction',
            rationale: 'Selling proprietary intellectual property for a one-off fee terminates your future compounding rights.'
          },
          {
            text: 'Refuse to sell; keep it as a private secret weapon.',
            scoreDelta: 22,
            dimension: 'Protective Moat',
            rationale: 'Decent defensive thinking, but leaves the distribution monetization untapped.'
          },
          {
            text: 'Package it into a self-serve API with a $99/mo subscription, launching publicly to their entire user base.',
            scoreDelta: 33.34,
            dimension: 'Asymmetric Distribution',
            rationale: 'Pure leverage: Converting an internal tool into continuous recurring revenue with near-zero marginal replication cost.'
          }
        ]
      },
      {
        id: 'liq_q2',
        scenario: 'Your client acquisition funnel dries up. You have 3 hours of uninterrupted focus today. Where do you allocate your cognitive horsepower?',
        options: [
          {
            text: 'Manually cold-DM 50 prospects on LinkedIn one by one.',
            scoreDelta: 10,
            dimension: 'Low Leverage Effort',
            rationale: 'High friction, linear output. The moment you stop sending manual DMs, revenue collapses.'
          },
          {
            text: 'Write an authoritative, empirical teardown breakdown with free code templates that syndicates across networks.',
            scoreDelta: 33.33,
            dimension: 'Permissionless Media Leverage',
            rationale: 'High-signal technical content works 24/7/365 on your behalf, pulling high-intent inbound clients indefinitely.'
          },
          {
            text: 'Lower your prices by 30% to attract budget-conscious buyers.',
            scoreDelta: 5,
            dimension: 'Race to the Bottom',
            rationale: 'Price slashing destroys brand equity and attracts high-maintenance, low-margin clientele.'
          }
        ]
      },
      {
        id: 'liq_q3',
        scenario: 'An unexpected technical outage crashes your service on a Sunday morning. How is your response structured?',
        options: [
          {
            text: 'Panic, log into the server manually, and live-patch bugs on production.',
            scoreDelta: 5,
            dimension: 'Fragile Reactive',
            rationale: 'Emotional urgency leads to cascading regressions and operator burnout.'
          },
          {
            text: 'Trigger an automated failover script, issue an honest status memo, and conduct a deterministic post-mortem tomorrow.',
            scoreDelta: 33.33,
            dimension: 'Antifragile Systems',
            rationale: 'You treat every outage as an invariant bug in your operating system, building autonomous self-healing loops.'
          },
          {
            text: 'Ignore it until Monday morning so you do not ruin your weekend.',
            scoreDelta: 12,
            dimension: 'Avoidant Stance',
            rationale: 'Unacknowledged failure erodes stakeholder trust without resolving structural vulnerabilities.'
          }
        ]
      }
    ],
    scoreTitleLevels: [
      {
        minScore: 85,
        title: 'Master Leverage Architect',
        color: '#34d399',
        archetype: 'The 1-Person Unicorn Tier',
        analysis: 'You view work exclusively through the lens of zero marginal cost of reproduction. You decouple time from income with precision.'
      },
      {
        minScore: 60,
        title: 'System Arbitrageur',
        color: '#38bdf8',
        archetype: 'High-Efficiency Operator',
        analysis: 'You have solid instincts for automation, but occasionally fall back into linear trading of time for guaranteed short-term cash.'
      },
      {
        minScore: 0,
        title: 'Linear Hustler',
        color: '#f59e0b',
        archetype: 'Industrial Paradigm',
        analysis: 'You are working exceptionally hard, but your leverage multiplier is capped. Focus on asset building, code, and permissionless distribution.'
      }
    ]
  },

  zero_emotion: {
    id: 'zero_emotion',
    title: 'The Zero Emotion Rationality Test',
    badgeName: 'Stoic Rationalist Vanguard',
    description: 'Measure your biological amygdala resistance to volatile drawdowns, public critique, and systemic stress.',
    questions: [
      {
        id: 'ze_q1',
        scenario: 'You wake up to find your main payment processor has frozen $35,000 for 90 days due to automated risk flags. What is your immediate physiological reaction?',
        options: [
          {
            text: 'Heart racing, frantic angry emails to support, and venting on X/Twitter.',
            scoreDelta: 8,
            dimension: 'Amygdala Hijack',
            rationale: 'High sympathetic adrenal surge. Panic communications reduce negotiation leverage.'
          },
          {
            text: 'Mild anxiety, but you wait a few hours before responding calmly.',
            scoreDelta: 22,
            dimension: 'Moderate Regulation',
            rationale: 'Acceptable regulation, though still allowing biological stress to dictate morning cognitive bandwidth.'
          },
          {
            text: 'Execute a pre-written redundancy protocol: Switch traffic to backup merchant rail B, submit compliance documents dispassionately.',
            scoreDelta: 33.34,
            dimension: 'Zero Emotion Protocol',
            rationale: 'Complete decoupling. You already accounted for platform risk with pre-built rails. Zero cortisol spent.'
          }
        ]
      },
      {
        id: 'ze_q2',
        scenario: 'A prominent competitor publicly criticizes your new product launch, calling it "overhyped and derivative". How do you respond?',
        options: [
          {
            text: 'Write an aggressive 10-tweet thread defending yourself and attacking their past failures.',
            scoreDelta: 5,
            dimension: 'Ego Reaction',
            rationale: 'You gift them free attention, drag your brand into petty conflict, and waste vital focus.'
          },
          {
            text: 'Bookmark their critique, objectively extract any valid technical points to improve the product, and ignore the emotion.',
            scoreDelta: 33.33,
            dimension: 'Empirical Inversion',
            rationale: 'Total emotional mastery: Using adversarial hostility as free quality assurance data.'
          },
          {
            text: 'Feel demotivated, delete the launch post, and doubt your competence.',
            scoreDelta: 10,
            dimension: 'Imposter Collapse',
            rationale: 'External validation reliance is catastrophic for solopreneur longevity.'
          }
        ]
      },
      {
        id: 'ze_q3',
        scenario: 'Crypto and tech markets crash 35% in 48 hours. Your liquid treasury value takes a sharp hit on paper.',
        options: [
          {
            text: 'Check portfolio every 5 minutes in dread, lose sleep, and sell at the bottom.',
            scoreDelta: 5,
            dimension: 'Loss Aversion Panic',
            rationale: 'Classic behavioral economics trap: Selling low out of visceral physiological discomfort.'
          },
          {
            text: 'Remind yourself of your 5-year investment thesis, close market tabs, and double down on building cash-flowing products.',
            scoreDelta: 33.33,
            dimension: 'Long Horizon Stoicism',
            rationale: 'You recognize short-term volatility as noise, exploiting discounted assets calmly.'
          },
          {
            text: 'Panic-hedge with high-leverage short contracts to try and make back the money immediately.',
            scoreDelta: 10,
            dimension: 'Gambler Fallacy',
            rationale: 'Emotional revenge trading is the fastest route to total liquidation.'
          }
        ]
      }
    ],
    scoreTitleLevels: [
      {
        minScore: 85,
        title: 'Apex Stoic Rationalist',
        color: '#34d399',
        archetype: 'Biological Circuit Breaker Active',
        analysis: 'You possess rare physiological resilience. Market shocks and crisis events fail to trigger impulsive amygdala overrides.'
      },
      {
        minScore: 60,
        title: 'Balanced Practitioner',
        color: '#38bdf8',
        archetype: 'Developing Amygdala Armor',
        analysis: 'You manage stress well under ordinary conditions, but volatile drawdowns still generate internal cognitive noise.'
      },
      {
        minScore: 0,
        title: 'Reactive Vulnerable',
        color: '#f87171',
        archetype: 'High Sensitivity to Noise',
        analysis: 'Your decision making is heavily influenced by immediate emotional inputs and external friction. Inoculate with pre-commitment rules.'
      }
    ]
  }
};

export const ROADMAP_NODES: RoadmapNode[] = [
  {
    id: 'node_1_zero_emotion',
    title: 'The Zero Emotion (Stoic Mindset)',
    subtitle: 'Biological Down-regulation & Rationality Under Drawdown',
    tier: 1,
    iconName: 'Shield',
    category: 'Mindset & Stoicism',
    status: 'completed',
    xpReward: 150,
    estimatedMinutes: 4,
    questionsCount: 3,
    badgeUnlocked: 'Stoic Vanguard',
    quizQuestions: [
      {
        id: 'q_ze_1',
        prompt: 'What physiological mechanism primarily overrides rational prefrontal cortex decision making during sudden financial crisis?',
        options: [
          'Prefrontal cortex glucose over-saturation',
          'Acute amygdalar sympathetic adrenal cascade',
          'Vagus nerve hyper-tonus',
          'Endorphin receptor depletion'
        ],
        correctIndex: 1,
        explanation: 'When acute volatility strikes, the amygdala triggers cortisol and adrenaline within 250ms, suppressing prefrontal rational vetoes unless checked by deliberate down-regulation.'
      },
      {
        id: 'q_ze_2',
        prompt: 'Which breathing protocol is clinically proven to rapidly restore parasympathetic tone in under 60 seconds?',
        options: [
          'Rapid hyperventilation breathing',
          'The physiological sigh (double nasal inhale + prolonged oral exhale)',
          'Breath holding until dizzy',
          'Shallow chest breathing'
        ],
        correctIndex: 1,
        explanation: 'The physiological sigh reinflates collapsed lung alveoli and triggers vagal nerve stimulation to slow heart rate immediately.'
      },
      {
        id: 'q_ze_3',
        prompt: 'In stoic solopreneur decision architecture, what should you do immediately after experiencing an unexpected setback?',
        options: [
          'Immediately post an apology thread publicly',
          'Enforce a mandatory 30-minute freeze on external communications and ledger writes',
          'Offer immediate discounts to all customers',
          'Work 18 hours straight through the night'
        ],
        correctIndex: 1,
        explanation: 'Enforcing a moratorium breaks the emotional stimulus-response loop, preventing reactive decisions made under sympathetic agitation.'
      }
    ]
  },
  {
    id: 'node_2_outsmart_system',
    title: 'Outsmart The System',
    subtitle: 'Asymmetric Legal, Tax & Regulatory Engineering',
    tier: 2,
    iconName: 'Zap',
    category: 'Systems & Arbitrage',
    status: 'current',
    xpReward: 200,
    estimatedMinutes: 5,
    questionsCount: 3,
    badgeUnlocked: 'Sovereign Arbitrageur',
    quizQuestions: [
      {
        id: 'q_ots_1',
        prompt: 'What is the core premise of modern digital "Flag Theory"?',
        options: [
          'Flying a company flag in every city you visit',
          'Separating personal residence, corporate tax domicile, banking rails, and compute hosting across independent jurisdictions',
          'Registering trademarks in 150 countries at once',
          'Paying 50% tax in your birth country voluntarily'
        ],
        correctIndex: 1,
        explanation: 'Flag Theory removes single-point-of-failure sovereign risk. No single government or entity can arbitrarily seize or disable your enterprise.'
      },
      {
        id: 'q_ots_2',
        prompt: 'Why do sovereign software creators domicile intellectual property (IP) in specialized jurisdictions like Zurich or Zug?',
        options: [
          'Because they love skiing in the Swiss Alps',
          'Beneficial IP Patent Box regimes with effective tax rates often under 9% for verified technological R&D',
          'They do not allow foreign customers',
          'Software patents are prohibited there'
        ],
        correctIndex: 1,
        explanation: 'Swiss Cantonal Patent Box rules provide legitimate, OECD-compliant tax mitigation for proprietary software code bases.'
      },
      {
        id: 'q_ots_3',
        prompt: 'How does an autonomous solopreneur eliminate single-custodian banking risk?',
        options: [
          'Keep $1,000,000 in physical cash under a mattress',
          'Maintain redundant banking rails with on-chain stablecoin multisig treasuries (e.g. Safe on Ethereum/Base)',
          'Only use one local bank account',
          'Never keep any savings at all'
        ],
        correctIndex: 1,
        explanation: 'Smart contract multisig vaults ensure you can route payroll and server bills even if a centralized legacy bank halts processing.'
      }
    ]
  },
  {
    id: 'node_3_one_person_unicorn',
    title: 'One Person Unicorn',
    subtitle: 'The 8-Figure Solopreneur Architecture with Zero Headcount',
    tier: 3,
    iconName: 'Sparkles',
    category: 'Exponential Leverage',
    status: 'locked',
    xpReward: 300,
    estimatedMinutes: 6,
    questionsCount: 3,
    badgeUnlocked: '1-Person Unicorn',
    quizQuestions: [
      {
        id: 'q_opu_1',
        prompt: 'What separates an 8-figure sovereign solopreneur from a traditional freelance contractor?',
        options: [
          'The solopreneur works 100 hours per week instead of 40',
          'The solopreneur builds code and media assets that compound without requiring linear hours to replicate',
          'The solopreneur charges by the exact minute',
          'The solopreneur takes no vacations'
        ],
        correctIndex: 1,
        explanation: 'Naval Ravikant leverage law: Code and media are permissionless leverage with zero marginal cost of replication.'
      },
      {
        id: 'q_opu_2',
        prompt: 'In a zero-headcount enterprise, what replaces human middle managers?',
        options: [
          'Endless sticky notes on a wall',
          'Deterministic state machines, JSON schema validators, and autonomous agent loops',
          'Hiring part-time interns',
          'Ignoring all customer support tickets'
        ],
        correctIndex: 1,
        explanation: 'Automated agent pipelines with strict schema guarantees handle triage, error-correction, and dispatch without managerial friction.'
      },
      {
        id: 'q_opu_3',
        prompt: 'What is the "Zero Entropy" operational invariant?',
        options: [
          'Working in absolute zero temperatures',
          'Zero synchronous status meetings: all internal and partner decisions happen asynchronously in structured RFCs',
          'Deleting all your files every Friday',
          'Refusing to answer emails'
        ],
        correctIndex: 1,
        explanation: 'Synchronous meetings destroy deep flow blocks and introduce thermodynamic entropy. Asynchronous documentation scales infinitely.'
      }
    ]
  },
  {
    id: 'node_4_ai_swarms',
    title: 'Autonomous AI Swarms',
    subtitle: 'Multi-Agent Graphs, Recursive Self-Correction & LangGraph',
    tier: 4,
    iconName: 'Cpu',
    category: 'Autonomous AI',
    status: 'locked',
    xpReward: 350,
    estimatedMinutes: 7,
    questionsCount: 3,
    badgeUnlocked: 'Synthetic General',
    quizQuestions: [
      {
        id: 'q_ai_1',
        prompt: 'Why should you never deploy an LLM agent with direct, unverified write access to production databases?',
        options: [
          'Because LLMs are too slow',
          'Because probabilistic token generators occasionally hallucinate or misinterpret edge constraints',
          'Databases do not support AI',
          'It costs too many tokens'
        ],
        correctIndex: 1,
        explanation: 'An independent deterministic validator node must verify data types and invariants before committing state.'
      },
      {
        id: 'q_ai_2',
        prompt: 'What pattern allows an agent to fix its own bugs before returning an answer?',
        options: [
          'Recursive retry loop with compilation compiler errors fed back as prompt context',
          'Increasing the temperature to 2.0',
          'Asking the user to rewrite the prompt',
          'Deleting the system prompt'
        ],
        correctIndex: 0,
        explanation: 'Feeding compiler diffs and test results back to the agent enables automated self-correction.'
      },
      {
        id: 'q_ai_3',
        prompt: 'What is a supervisor-worker topology in agent architectures?',
        options: [
          'A boss watching workers on webcams',
          'One router agent delegates specialized sub-tasks to dedicated worker agents, synthesizing outputs',
          'An agent that only works 9 to 5',
          'A single monolithic prompt for everything'
        ],
        correctIndex: 1,
        explanation: 'Specialized modular agents with narrow system prompts drastically outperform bloated monolithic agents.'
      }
    ]
  },
  {
    id: 'node_5_capital_matrix',
    title: 'Quantum Capital Matrix',
    subtitle: 'Tail-Risk Hedging, Convexity & Infinite Compounding',
    tier: 5,
    iconName: 'TrendingUp',
    category: 'Exponential Leverage',
    status: 'locked',
    xpReward: 500,
    estimatedMinutes: 8,
    questionsCount: 3,
    badgeUnlocked: 'Capital Sovereign',
    quizQuestions: [
      {
        id: 'q_cap_1',
        prompt: 'What is a convex payoff structure?',
        options: [
          'A curved graph on a wall',
          'A scenario where your downside is strictly limited, while your upside is exponential or unbounded',
          'A structure where you can lose everything at any moment',
          'A guaranteed 2% bank interest yield'
        ],
        correctIndex: 1,
        explanation: 'Convexity allows you to survive 90% of failures while one massive outlier provides 100x payoff.'
      },
      {
        id: 'q_cap_2',
        prompt: 'How does a solopreneur maintain tail-risk defense in volatile macro cycles?',
        options: [
          'Holding 90% in safe, liquid sovereign debt/stable yield, and 10% in asymmetric high-conviction exponential bets',
          '100% all-in on speculative meme assets',
          'Borrowing 5x leverage on margin',
          'Holding only physical gold bars in a safe'
        ],
        correctIndex: 0,
        explanation: 'The Barbell Strategy (Nassim Taleb) guarantees survival while capturing extreme positive black swans.'
      },
      {
        id: 'q_cap_3',
        prompt: 'What is the ultimate metric of sovereign wealth for a modern creator?',
        options: [
          'Net worth number on Forbes list',
          'Freedom of physical location, calendar autonomy, and ownership of un-cancellable IP cash flows',
          'Owning a private jet with debt',
          'Managing 5,000 employees'
        ],
        correctIndex: 1,
        explanation: 'True wealth is control over your time and creative coordinates, not vanity headcount.'
      }
    ]
  }
];

export const LEADERBOARD_FELLOWS: LeaderboardFellow[] = [
  {
    rank: 1,
    handle: 'dr_alex_vance',
    name: 'Dr. Alexis Vance',
    avatarLetter: 'A',
    avatarBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    xp: 4820,
    streak: 42,
    league: 'Emerald Sovereign'
  },
  {
    rank: 2,
    handle: 'elena_rostova',
    name: 'Elena Rostova',
    avatarLetter: 'E',
    avatarBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    xp: 4190,
    streak: 35,
    league: 'Emerald Sovereign'
  },
  {
    rank: 3,
    handle: 'marcus_quant',
    name: 'Marcus Thorne',
    avatarLetter: 'M',
    avatarBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    xp: 3870,
    streak: 28,
    league: 'Emerald Sovereign'
  },
  {
    rank: 4,
    handle: 'apex_polymath',
    name: 'You (Apex Polymath)',
    avatarLetter: 'P',
    avatarBg: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    xp: 3850,
    streak: 21,
    league: 'Emerald Sovereign',
    isCurrentUser: true
  },
  {
    rank: 5,
    handle: 'ken_sato',
    name: 'Kenji Sato',
    avatarLetter: 'K',
    avatarBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    xp: 1380,
    streak: 12,
    league: 'Diamond Architect'
  },
  {
    rank: 6,
    handle: 'croft_sarah',
    name: 'Sarah Croft',
    avatarLetter: 'S',
    avatarBg: 'bg-teal-500/20 text-teal-400 border-teal-500/30',
    xp: 1120,
    streak: 9,
    league: 'Diamond Architect'
  },
  {
    rank: 7,
    handle: 'zack_crypto',
    name: 'Zackariah B.',
    avatarLetter: 'Z',
    avatarBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
    xp: 940,
    streak: 7,
    league: 'Gold Operator'
  }
];

export { EXPANDED_MASTERCLASSES as MASTERCLASSES } from './expandedMasterclassesData';
