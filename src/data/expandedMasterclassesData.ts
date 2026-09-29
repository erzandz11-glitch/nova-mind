import { MasterclassCourse } from '../types';

export const EXPANDED_MASTERCLASSES: MasterclassCourse[] = [
  {
    id: 'mc_one_person_unicorn',
    title: 'One Person Unicorn',
    instructor: 'Julian Vance',
    role: 'Solopreneur & Visionary',
    thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
    totalXp: 400,
    lessons: [
      {
        id: 'opu_1',
        title: 'The Myth of Teams',
        duration: '15:20',
        durationSeconds: 920,
        completed: false,
        takeaway: 'Leverage automation to replace traditional headcount.'
      },
      {
        id: 'opu_2',
        title: 'Asymmetric Leverage',
        duration: '22:15',
        durationSeconds: 1335,
        completed: false,
        takeaway: 'Focus only on tasks with 100x return on time invested.'
      },
      {
        id: 'opu_3',
        title: 'AI Swarm Assembly',
        duration: '18:45',
        durationSeconds: 1125,
        completed: false,
        takeaway: 'Orchestrate AI agents to handle entire departments.'
      },
      {
        id: 'opu_4',
        title: 'The Exit Horizon',
        duration: '20:10',
        durationSeconds: 1210,
        completed: false,
        takeaway: 'Build the asset to be acquired without founder dependency.'
      }
    ]
  },
  {
    id: 'mc_ai_prompt_warfare',
    title: 'AI Prompt Warfare & Swarm Orchestration',
    instructor: 'Dr. Kaelen Voss',
    role: 'AI Researcher',
    thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop',
    totalXp: 350,
    lessons: [
      {
        id: 'aipw_1',
        title: 'Prompt Injection Defense',
        duration: '14:30',
        durationSeconds: 870,
        completed: false,
        takeaway: 'Secure LLM applications against adversarial inputs.'
      },
      {
        id: 'aipw_2',
        title: 'Multi-Agent Consensus',
        duration: '25:00',
        durationSeconds: 1500,
        completed: false,
        takeaway: 'Design autonomous swarms that verify their own outputs.'
      },
      {
        id: 'aipw_3',
        title: 'Context Window Optimization',
        duration: '19:45',
        durationSeconds: 1185,
        completed: false,
        takeaway: 'Compress knowledge to maximize LLM reasoning capacity.'
      }
    ]
  },
  {
    id: 'mc_godot_game_eng',
    title: 'Godot 4 Cyber Game Engineering',
    instructor: 'Aria Sterling',
    role: 'Lead Technical Artist',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop',
    totalXp: 300,
    lessons: [
      {
        id: 'gge_1',
        title: 'GDScript Mastery',
        duration: '16:45',
        durationSeconds: 1005,
        completed: false,
        takeaway: 'Write performant GDScript for complex physics simulations.'
      },
      {
        id: 'gge_2',
        title: 'Cyberpunk Shader Pipelines',
        duration: '24:20',
        durationSeconds: 1460,
        completed: false,
        takeaway: 'Build custom neon and rain shaders in Godot 4.'
      },
      {
        id: 'gge_3',
        title: 'State Machine Architecture',
        duration: '21:15',
        durationSeconds: 1275,
        completed: false,
        takeaway: 'Implement robust player controllers using hierarchical state machines.'
      }
    ]
  },
  {
    id: 'mc_zero_emotion',
    title: 'The Zero Emotion Rationality Protocol',
    instructor: 'Dr. Alexis Sterling',
    role: 'Behavioral Economist',
    thumbnail: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2000&auto=format&fit=crop',
    totalXp: 320,
    lessons: [
      {
        id: 'zerp_1',
        title: 'Cognitive Bias Elimination',
        duration: '18:10',
        durationSeconds: 1090,
        completed: false,
        takeaway: 'Identify and neutralize the 5 most expensive human biases.'
      },
      {
        id: 'zerp_2',
        title: 'Expected Value Frameworks',
        duration: '22:30',
        durationSeconds: 1350,
        completed: false,
        takeaway: 'Quantify every decision using probability mapping.'
      },
      {
        id: 'zerp_3',
        title: 'Stoic Detachment Execution',
        duration: '19:00',
        durationSeconds: 1140,
        completed: false,
        takeaway: 'Execute optimal strategies even during market panic.'
      }
    ]
  },
  {
    id: 'mc_micro_saas',
    title: 'Full-Stack Micro-SaaS Architecture',
    instructor: 'Marcus Thorne',
    role: 'Serial Founder',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop',
    totalXp: 380,
    lessons: [
      {
        id: 'fmsa_1',
        title: 'Database Schema Design',
        duration: '20:15',
        durationSeconds: 1215,
        completed: false,
        takeaway: 'Design scalable relational schemas for multi-tenant apps.'
      },
      {
        id: 'fmsa_2',
        title: 'Edge Authentication',
        duration: '17:40',
        durationSeconds: 1060,
        completed: false,
        takeaway: 'Implement zero-trust auth at the edge.'
      },
      {
        id: 'fmsa_3',
        title: 'Stripe Billing Integration',
        duration: '26:50',
        durationSeconds: 1610,
        completed: false,
        takeaway: 'Handle complex subscription tiers and webhooks.'
      }
    ]
  },
  {
    id: 'mc_linux_kernel',
    title: 'Linux Kernel Mastery & Low-Level Systems',
    instructor: 'Kai Mercer',
    role: 'Principal Systems Engineer',
    thumbnail: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=2000&auto=format&fit=crop',
    totalXp: 450,
    lessons: [
      {
        id: 'lkm_1',
        title: 'Process Scheduling Deep Dive',
        duration: '28:00',
        durationSeconds: 1680,
        completed: false,
        takeaway: 'Understand the Completely Fair Scheduler mechanics.'
      },
      {
        id: 'lkm_2',
        title: 'Memory Management',
        duration: '31:15',
        durationSeconds: 1875,
        completed: false,
        takeaway: 'Navigate page tables, virtual memory, and slab allocators.'
      },
      {
        id: 'lkm_3',
        title: 'Writing Device Drivers',
        duration: '25:40',
        durationSeconds: 1540,
        completed: false,
        takeaway: 'Develop a character device driver from scratch.'
      },
      {
        id: 'lkm_4',
        title: 'eBPF Tracing',
        duration: '22:20',
        durationSeconds: 1340,
        completed: false,
        takeaway: 'Use eBPF for zero-overhead system observability.'
      }
    ]
  },
  {
    id: 'mc_energy_trader',
    title: 'The Macro Energy Trader\'s Playbook',
    instructor: 'Elena Volkov',
    role: 'Commodities Strategist',
    thumbnail: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2000&auto=format&fit=crop',
    totalXp: 420,
    lessons: [
      {
        id: 'et_1',
        title: 'Global Supply Chains',
        duration: '19:30',
        durationSeconds: 1170,
        completed: false,
        takeaway: 'Map geopolitical events to immediate supply chain disruptions.'
      },
      {
        id: 'et_2',
        title: 'Crude Oil Arbitrage',
        duration: '24:10',
        durationSeconds: 1450,
        completed: false,
        takeaway: 'Exploit price differentials between Brent and WTI.'
      },
      {
        id: 'et_3',
        title: 'Renewables Grid Dynamics',
        duration: '21:45',
        durationSeconds: 1305,
        completed: false,
        takeaway: 'Trade the volatility introduced by renewable intermittency.'
      },
      {
        id: 'et_4',
        title: 'Options on Futures',
        duration: '26:00',
        durationSeconds: 1560,
        completed: false,
        takeaway: 'Structure asymmetric bets using complex options strategies.'
      }
    ]
  },
  {
    id: 'mc_biohacking_brain',
    title: 'Biohacking Neurobiology: Sleep, Focus & Longevity',
    instructor: 'Dr. Rena Okafor',
    role: 'Neuroscientist',
    thumbnail: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2000&auto=format&fit=crop',
    totalXp: 400,
    lessons: [
      {
        id: 'bhb_1',
        title: 'Circadian Optimization',
        duration: '17:15',
        durationSeconds: 1035,
        completed: false,
        takeaway: 'Align light exposure with your endogenous clock for peak energy.'
      },
      {
        id: 'bhb_2',
        title: 'Nootropic Stacks',
        duration: '20:30',
        durationSeconds: 1230,
        completed: false,
        takeaway: 'Engineer chemical protocols for sustained deep work.'
      },
      {
        id: 'bhb_3',
        title: 'HRV and Stress Metrics',
        duration: '15:40',
        durationSeconds: 940,
        completed: false,
        takeaway: 'Quantify recovery and adapt training loads dynamically.'
      },
      {
        id: 'bhb_4',
        title: 'Cellular Senescence',
        duration: '23:10',
        durationSeconds: 1390,
        completed: false,
        takeaway: 'Apply longevity protocols to delay cognitive decline.'
      }
    ]
  },
  {
    id: 'mc_antifragile_mind',
    title: 'Antifragile Operating Systems Under Chaos',
    instructor: 'Marcus Vance',
    role: 'Crisis Architect',
    thumbnail: 'https://images.unsplash.com/photo-1498677237077-d0d57183e298?q=80&w=2000&auto=format&fit=crop',
    totalXp: 380,
    lessons: [
      {
        id: 'am_1',
        title: 'Embracing Volatility',
        duration: '18:50',
        durationSeconds: 1130,
        completed: false,
        takeaway: 'Design systems that gain from disorder rather than break.'
      },
      {
        id: 'am_2',
        title: 'Barbell Strategies',
        duration: '22:15',
        durationSeconds: 1335,
        completed: false,
        takeaway: 'Balance extreme risk aversion with aggressive upside exposure.'
      },
      {
        id: 'am_3',
        title: 'Information Diets',
        duration: '16:30',
        durationSeconds: 990,
        completed: false,
        takeaway: 'Filter signal from noise to prevent cognitive overload.'
      },
      {
        id: 'am_4',
        title: 'Red Teaming Your Life',
        duration: '24:45',
        durationSeconds: 1485,
        completed: false,
        takeaway: 'Systematically attack your own plans to find vulnerabilities.'
      }
    ]
  },
  {
    id: 'mc_options_mastery',
    title: 'Options Trading: Volatility Arbitrage & Greeks',
    instructor: 'Victor Sato',
    role: 'Quantitative Trader',
    thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2000&auto=format&fit=crop',
    totalXp: 460,
    lessons: [
      {
        id: 'om_1',
        title: 'Delta Neutral Portfolios',
        duration: '21:00',
        durationSeconds: 1260,
        completed: false,
        takeaway: 'Hedge directional risk to focus purely on volatility.'
      },
      {
        id: 'om_2',
        title: 'Trading the Gamma Squeeze',
        duration: '27:30',
        durationSeconds: 1650,
        completed: false,
        takeaway: 'Identify and front-run dealer hedging requirements.'
      },
      {
        id: 'om_3',
        title: 'Vega and Volatility Smiles',
        duration: '23:45',
        durationSeconds: 1425,
        completed: false,
        takeaway: 'Exploit mispriced implied volatility across strikes.'
      },
      {
        id: 'om_4',
        title: 'Theta Decay Dynamics',
        duration: '19:20',
        durationSeconds: 1160,
        completed: false,
        takeaway: 'Optimize short option portfolios for maximum time decay.'
      }
    ]
  },
  {
    id: 'mc_defi_architect',
    title: 'DeFi Protocol Architecture & Smart Contract Security',
    instructor: 'Zara Nakamura',
    role: 'Smart Contract Auditor',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f4ec651?q=80&w=2000&auto=format&fit=crop',
    totalXp: 500,
    lessons: [
      {
        id: 'da_1',
        title: 'AMM Mechanics',
        duration: '25:15',
        durationSeconds: 1515,
        completed: false,
        takeaway: 'Design capital-efficient automated market makers.'
      },
      {
        id: 'da_2',
        title: 'Flash Loan Exploits',
        duration: '29:40',
        durationSeconds: 1780,
        completed: false,
        takeaway: 'Analyze and defend against atomic transaction attacks.'
      },
      {
        id: 'da_3',
        title: 'Reentrancy Defense',
        duration: '22:10',
        durationSeconds: 1330,
        completed: false,
        takeaway: 'Implement the checks-effects-interactions pattern flawlessly.'
      },
      {
        id: 'da_4',
        title: 'Governance Tokenomics',
        duration: '26:30',
        durationSeconds: 1590,
        completed: false,
        takeaway: 'Structure incentives to prevent voting cartels.'
      }
    ]
  },
  {
    id: 'mc_ai_product_builder',
    title: 'AI Micro-SaaS: From Zero to $10K MRR',
    instructor: 'Anya Chen',
    role: 'Growth Engineer',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop',
    totalXp: 350,
    lessons: [
      {
        id: 'apb_1',
        title: 'Finding the API Wrapper Wedge',
        duration: '15:20',
        durationSeconds: 920,
        completed: false,
        takeaway: 'Identify high-value workflows to wrap LLMs around.'
      },
      {
        id: 'apb_2',
        title: 'Rapid MVP Architecture',
        duration: '21:45',
        durationSeconds: 1305,
        completed: false,
        takeaway: 'Ship production-ready AI apps in a weekend.'
      },
      {
        id: 'apb_3',
        title: 'Cost Control Strategies',
        duration: '18:10',
        durationSeconds: 1090,
        completed: false,
        takeaway: 'Optimize token usage to protect profit margins.'
      },
      {
        id: 'apb_4',
        title: 'Programmatic SEO for AI Tools',
        duration: '24:00',
        durationSeconds: 1440,
        completed: false,
        takeaway: 'Generate automated landing pages for long-tail keywords.'
      }
    ]
  },
  {
    id: 'mc_sovereign_solopreneur',
    title: 'The Sovereign Solopreneur Blueprint',
    instructor: 'Julian Vance',
    role: 'Solopreneur & Visionary',
    thumbnail: 'https://images.unsplash.com/photo-1556761175-5973dc0f32a7?q=80&w=2000&auto=format&fit=crop',
    totalXp: 390,
    lessons: [
      {
        id: 'ss_1',
        title: 'Jurisdictional Arbitrage',
        duration: '20:15',
        durationSeconds: 1215,
        completed: false,
        takeaway: 'Structure entities to minimize global tax liability.'
      },
      {
        id: 'ss_2',
        title: 'Digital Real Estate',
        duration: '17:30',
        durationSeconds: 1050,
        completed: false,
        takeaway: 'Acquire and monetize high-traffic digital assets.'
      },
      {
        id: 'ss_3',
        title: 'Outsourcing the Mundane',
        duration: '19:45',
        durationSeconds: 1185,
        completed: false,
        takeaway: 'Build an operational team of offshore VAs.'
      },
      {
        id: 'ss_4',
        title: 'Personal Brand Moats',
        duration: '23:20',
        durationSeconds: 1400,
        completed: false,
        takeaway: 'Leverage attention to lower customer acquisition costs to zero.'
      }
    ]
  },
  {
    id: 'mc_fullstack_nextjs',
    title: 'Full-Stack Mastery: Next.js, Supabase & Edge Runtime',
    instructor: 'Dev Patel',
    role: 'Staff Software Engineer',
    thumbnail: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2000&auto=format&fit=crop',
    totalXp: 410,
    lessons: [
      {
        id: 'fsn_1',
        title: 'Server Components Architecture',
        duration: '22:10',
        durationSeconds: 1330,
        completed: false,
        takeaway: 'Optimize rendering strategies for maximum Web Vitals.'
      },
      {
        id: 'fsn_2',
        title: 'RLS with Supabase',
        duration: '26:30',
        durationSeconds: 1590,
        completed: false,
        takeaway: 'Implement complex Row Level Security policies.'
      },
      {
        id: 'fsn_3',
        title: 'Edge Functions',
        duration: '19:15',
        durationSeconds: 1155,
        completed: false,
        takeaway: 'Deploy low-latency logic to the CDN edge.'
      },
      {
        id: 'fsn_4',
        title: 'Optimistic UI Patterns',
        duration: '24:00',
        durationSeconds: 1440,
        completed: false,
        takeaway: 'Build zero-latency perception user interfaces.'
      }
    ]
  },
  {
    id: 'mc_game_dev_speedrun',
    title: 'Indie Game Architecture: Ship Your First Game',
    instructor: 'Leo Tanaka',
    role: 'Indie Studio Lead',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2000&auto=format&fit=crop',
    totalXp: 370,
    lessons: [
      {
        id: 'gds_1',
        title: 'Scope Control',
        duration: '16:45',
        durationSeconds: 1005,
        completed: false,
        takeaway: 'Cut features ruthlessly to guarantee a shipped product.'
      },
      {
        id: 'gds_2',
        title: 'Core Loop Design',
        duration: '21:20',
        durationSeconds: 1280,
        completed: false,
        takeaway: 'Iterate on the 30-second gameplay loop until it is perfect.'
      },
      {
        id: 'gds_3',
        title: 'Asset Pipeline Automation',
        duration: '18:30',
        durationSeconds: 1110,
        completed: false,
        takeaway: 'Speed up art integration using procedural tools.'
      },
      {
        id: 'gds_4',
        title: 'Steam Page SEO',
        duration: '19:50',
        durationSeconds: 1190,
        completed: false,
        takeaway: 'Optimize metadata to maximize wishlist conversion.'
      }
    ]
  },
  {
    id: 'mc_prompt_eng_bible',
    title: 'Frontier Prompt Engineering & Context Caching',
    instructor: 'Dr. Kaelen Voss',
    role: 'AI Researcher',
    thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop',
    totalXp: 440,
    lessons: [
      {
        id: 'peb_1',
        title: 'Few-Shot Chain of Thought',
        duration: '20:00',
        durationSeconds: 1200,
        completed: false,
        takeaway: 'Elicit expert reasoning from base models.'
      },
      {
        id: 'peb_2',
        title: 'Retrieval Augmented Generation',
        duration: '28:15',
        durationSeconds: 1695,
        completed: false,
        takeaway: 'Build precise RAG pipelines with semantic search.'
      },
      {
        id: 'peb_3',
        title: 'Context Caching Strategies',
        duration: '22:40',
        durationSeconds: 1360,
        completed: false,
        takeaway: 'Reduce API costs dramatically on repetitive queries.'
      },
      {
        id: 'peb_4',
        title: 'Eval Frameworks',
        duration: '25:30',
        durationSeconds: 1530,
        completed: false,
        takeaway: 'Systematically test prompt reliability at scale.'
      }
    ]
  },
  {
    id: 'mc_onchain_forensics',
    title: 'On-Chain Whale Analytics & Forensic Accounting',
    instructor: 'Shadow Analyst',
    role: 'Crypto Investigator',
    thumbnail: 'https://images.unsplash.com/photo-1640161704729-cbe966a08476?q=80&w=2000&auto=format&fit=crop',
    totalXp: 430,
    lessons: [
      {
        id: 'of_1',
        title: 'Wallet Clustering',
        duration: '23:10',
        durationSeconds: 1390,
        completed: false,
        takeaway: 'De-anonymize entity networks using heuristic analysis.'
      },
      {
        id: 'of_2',
        title: 'Tornado Cash Tracing',
        duration: '27:45',
        durationSeconds: 1665,
        completed: false,
        takeaway: 'Follow illicit funds through mixing services.'
      },
      {
        id: 'of_3',
        title: 'Smart Money Tracking',
        duration: '21:20',
        durationSeconds: 1280,
        completed: false,
        takeaway: 'Copy-trade insider wallets systematically.'
      },
      {
        id: 'of_4',
        title: 'MEV Extraction Analytics',
        duration: '25:00',
        durationSeconds: 1500,
        completed: false,
        takeaway: 'Identify and front-run sandwich attackers.'
      }
    ]
  },
  {
    id: 'mc_high_stakes_negotiation',
    title: 'High-Stakes Negotiation & Asymmetric Game Theory',
    instructor: 'Prof. Sterling',
    role: 'Game Theorist',
    thumbnail: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2000&auto=format&fit=crop',
    totalXp: 390,
    lessons: [
      {
        id: 'hsn_1',
        title: 'Anchoring and Framing',
        duration: '18:30',
        durationSeconds: 1110,
        completed: false,
        takeaway: 'Control the perceived value of any deal instantly.'
      },
      {
        id: 'hsn_2',
        title: 'BATNA Optimization',
        duration: '21:15',
        durationSeconds: 1275,
        completed: false,
        takeaway: 'Strengthen your walk-away position to dominate terms.'
      },
      {
        id: 'hsn_3',
        title: 'Hostage Negotiation Tactics',
        duration: '24:50',
        durationSeconds: 1490,
        completed: false,
        takeaway: 'Use tactical empathy to disarm hostile counterparts.'
      },
      {
        id: 'hsn_4',
        title: 'Nash Equilibriums in Business',
        duration: '22:00',
        durationSeconds: 1320,
        completed: false,
        takeaway: 'Structure agreements where cheating is mathematically irrational.'
      }
    ]
  },
  {
    id: 'mc_python_algo_trading',
    title: 'Python for Quantitative Algorithmic Trading',
    instructor: 'Aria Sterling',
    role: 'Quantitative Trader',
    thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2000&auto=format&fit=crop',
    totalXp: 470,
    lessons: [
      {
        id: 'pat_1',
        title: 'Pandas for Time Series',
        duration: '20:45',
        durationSeconds: 1245,
        completed: false,
        takeaway: 'Clean and resample tick-level financial data efficiently.'
      },
      {
        id: 'pat_2',
        title: 'Backtesting Infrastructure',
        duration: '26:20',
        durationSeconds: 1580,
        completed: false,
        takeaway: 'Build vectorised backtesters to avoid look-ahead bias.'
      },
      {
        id: 'pat_3',
        title: 'Statistical Arbitrage Models',
        duration: '29:10',
        durationSeconds: 1750,
        completed: false,
        takeaway: 'Implement cointegration pairs trading algorithms.'
      },
      {
        id: 'pat_4',
        title: 'Execution Automation',
        duration: '23:30',
        durationSeconds: 1410,
        completed: false,
        takeaway: 'Connect to IBKR API for low-latency trade routing.'
      }
    ]
  },
  {
    id: 'mc_content_empire',
    title: 'Permissionless Media Empire & Programmatic Distribution',
    instructor: 'Nova Creative',
    role: 'Media Strategist',
    thumbnail: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2000&auto=format&fit=crop',
    totalXp: 360,
    lessons: [
      {
        id: 'ce_1',
        title: 'Viral Hooks Formula',
        duration: '16:00',
        durationSeconds: 960,
        completed: false,
        takeaway: 'Engineer the first 3 seconds of content to maximize retention.'
      },
      {
        id: 'ce_2',
        title: 'Omnichannel Syndication',
        duration: '19:45',
        durationSeconds: 1185,
        completed: false,
        takeaway: 'Write once, distribute programmatically across 10 platforms.'
      },
      {
        id: 'ce_3',
        title: 'Algorithmic Arbitrage',
        duration: '21:30',
        durationSeconds: 1290,
        completed: false,
        takeaway: 'Exploit temporary platform mechanics for organic reach.'
      },
      {
        id: 'ce_4',
        title: 'Monetizing Attention',
        duration: '24:15',
        durationSeconds: 1455,
        completed: false,
        takeaway: 'Convert views into a high-LTV email newsletter.'
      }
    ]
  }
];
