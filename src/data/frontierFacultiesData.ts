import { FrontierFaculty, CivilizationChallenge } from '../types';

export const FRONTIER_FACULTIES: FrontierFaculty[] = [
  // 1. FACULTY OF DEEP IT, CLOUD & CYBER INFRASTRUCTURE
  {
    id: 'deep_it_cyber',
    name: 'Faculty of Deep IT, Cloud & Cyber Infrastructure',
    shortTitle: 'Deep IT & Cyber',
    iconName: 'Terminal',
    emoji: '💻',
    themeColor: 'cyan',
    accentHex: '#06b6d4',
    glowClass: 'shadow-[0_0_35px_rgba(6,182,212,0.25)]',
    borderClass: 'border-cyan-500/30 hover:border-cyan-400/60',
    bgLightClass: 'bg-cyan-500/10 text-cyan-400',
    badgeClass: 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30',
    headline: 'Distributed Systems, Bare-Metal Kernels & Zero-Trust Defense',
    description:
      'Master the silicon, kernel space, high-throughput network topologies, and distributed Byzantine fault tolerance powering planetary-scale computational infrastructure.',
    estimatedHours: 42,
    totalXp: 1250,
    completionPercent: 58,
    difficulty: 'Hardcore Tactical',
    simulatorName: 'Linux/Terminal Code & Security Sandbox',
    simulatorTag: 'Live Syscall & Kernel Shell',
    modules: [
      {
        id: 'mod_dit_1',
        code: '1.1',
        title: 'Distributed Systems, High-Concurrency Kernels & Rust/C++ Performance',
        description: 'Bypassing OS overhead with io_uring, lock-free ring buffers, and zero-copy memory pipelines.',
        lessons: [
          {
            id: 'dit_l1',
            title: '01. Zero-Copy I/O & Linux io_uring Ring Architecture',
            duration: '24 min',
            durationSeconds: 1440,
            completed: true,
            keyTakeaway:
              'Eliminate context switches between user-space and kernel-space by submitting batch ring-buffer queues directly to hardware queues.',
            codeSnippet: `// Rust io_uring Zero-Copy Ring Buffer
use io_uring::{opcode, IoUring};
let mut ring = IoUring::new(4096)?;
let read_e = opcode::Read::new(types::Fd(fd), buf.as_mut_ptr(), len).build();
unsafe { ring.submission().push(&read_e)?; }
ring.submit_and_wait(1)?;`,
            drillQuestion: {
              id: 'q_dit_1',
              prompt: 'Why does io_uring dramatically outperform epoll under 100k+ concurrent connections?',
              options: [
                'It runs in a separate thread pool automatically',
                'It avoids syscall context-switches by utilizing shared memory submission/completion rings',
                'It encrypts packets at layer 2',
                'It compresses network frames inside CPU L1 cache'
              ],
              correctIndex: 1,
              explanation:
                'io_uring creates two ring buffers in memory shared between the kernel and application, allowing asynchronous batch submission without per-operation syscalls.'
            }
          },
          {
            id: 'dit_l2',
            title: '02. Cache Line Alignment & False Sharing in Lock-Free Concurrency',
            duration: '28 min',
            durationSeconds: 1680,
            completed: true,
            keyTakeaway:
              'Align atomic variables to 64-byte L1 cache boundaries (align64) to prevent MESI cache coherence protocol bus storms.',
            codeSnippet: `#[repr(align(64))]
pub struct CacheAlignedAtomic<T> {
    pub value: std::sync::atomic::AtomicU64,
    _pad: [u8; 56],
}`
          },
          {
            id: 'dit_l3',
            title: '03. Raft vs Paxos Consensus & Byzantine Fault Tolerance',
            duration: '32 min',
            durationSeconds: 1920,
            completed: false,
            keyTakeaway:
              'Quorum slicing and leader leases prevent split-brain partitions across multi-region datacenters during undersea cable cuts.'
          }
        ]
      },
      {
        id: 'mod_dit_2',
        code: '1.2',
        title: 'Cloud DevOps, Kubernetes Cluster Orchestration & Serverless Runtime',
        description: 'Multi-tenant control plane resilience, eBPF telemetry, and sub-millisecond cold starts.',
        lessons: [
          {
            id: 'dit_l4',
            title: '04. eBPF Kernel Probing for Microsecond Latency Tracing',
            duration: '22 min',
            durationSeconds: 1320,
            completed: true,
            keyTakeaway:
              'Deploy sandboxed bytecode inside the Linux kernel to trace socket lifecycles and drop malicious SYN floods before socket allocation.',
            codeSnippet: `SEC("kprobe/tcp_v4_connect")
int BPF_KPROBE(trace_tcp_connect, struct sock *sk) {
    u32 pid = bpf_get_current_pid_tgid() >> 32;
    bpf_printk("TCP Connect PID: %d\\n", pid);
    return 0;
}`
          },
          {
            id: 'dit_l5',
            title: '05. High-Density Kubernetes Autoscaling & Pod Topology Spread',
            duration: '26 min',
            durationSeconds: 1560,
            completed: false,
            keyTakeaway:
              'Configure custom HPA metrics via Prometheus vector queries to scale replicas on queue backlog rather than raw CPU lag.'
          }
        ]
      },
      {
        id: 'mod_dit_3',
        code: '1.3',
        title: 'Zero-Trust Cyber Defense, Penetration Testing & Hardware Security',
        description: 'Post-quantum cryptographic handshakes, memory-safe enclave isolation, and TPM verification.',
        lessons: [
          {
            id: 'dit_l6',
            title: '06. Mutual TLS (mTLS) with SPIFFE/SPIRE Ephemeral Identities',
            duration: '30 min',
            durationSeconds: 1800,
            completed: false,
            keyTakeaway:
              'Issue short-lived (15-minute) X.509 SVID credentials to containers based on kernel cgroup attestation, eradicating static API keys.'
          },
          {
            id: 'dit_l7',
            title: '07. Memory Safety Exploits: ROP Chains to ASLR/DEP Bypass',
            duration: '34 min',
            durationSeconds: 2040,
            completed: false,
            keyTakeaway:
              'Understand return-oriented programming gadgets to engineer compiler-enforced memory safe boundaries (Rust/Zig) in critical modules.'
          }
        ]
      },
      {
        id: 'mod_dit_4',
        code: '1.4',
        title: 'GPU Compute Clusters & High-Throughput Database Sharding',
        description: 'RoCE v2 RDMA networks, tensor-parallel NVLink, and consensus-sharded distributed storage.',
        lessons: [
          {
            id: 'dit_l8',
            title: '08. InfiniBand & RDMA GPU-Direct Transfer Mechanics',
            duration: '25 min',
            durationSeconds: 1500,
            completed: false,
            keyTakeaway:
              'Transfer tensor activations directly between GPU HBM3 memory across server nodes without CPU or host RAM bottlenecks.'
          },
          {
            id: 'dit_l9',
            title: '09. Consistent Hashing & Geo-Partitioned Spanner DB Topologies',
            duration: '27 min',
            durationSeconds: 1620,
            completed: false,
            keyTakeaway:
              'Atomic clock synchronized TrueTime APIs guarantee linearizability across continents without deadlocking read transactions.'
          }
        ]
      }
    ],
    drillNodes: [
      {
        id: 'drill_dit_1',
        title: 'Kernel Ring Diagnostics',
        subtitle: 'Diagnose lock-free ring-buffer buffer overrun',
        tier: 1,
        iconName: 'Terminal',
        category: 'Systems & Arbitrage',
        status: 'completed',
        xpReward: 120,
        estimatedMinutes: 4,
        questionsCount: 2,
        quizQuestions: [
          {
            id: 'q_d1_1',
            prompt: 'In a lock-free single-producer single-consumer ring buffer, which memory ordering is strictly required for the write pointer update?',
            options: ['Relaxed', 'Release', 'Consume', 'Sequential Consistency with global mutex'],
            correctIndex: 1,
            explanation:
              'MemoryOrder::Release ensures all preceding memory writes (the buffer payload) become visible to the consumer before the index update is published.'
          },
          {
            id: 'q_d1_2',
            prompt: 'Which Linux tool inspects hardware performance counters for L1 data cache misses directly in live production?',
            options: ['perf stat -e L1-dcache-load-misses', 'ps aux | grep cache', 'ping -c 10 localhost', 'netstat -tulnp'],
            correctIndex: 0,
            explanation: 'The Linux `perf` subsystem interfaces directly with CPU Performance Monitoring Units (PMUs).'
          }
        ]
      },
      {
        id: 'drill_dit_2',
        title: 'Zero-Trust Enclave Defense',
        subtitle: 'Stop lateral privilege escalation attack vector',
        tier: 2,
        iconName: 'Shield',
        category: 'Systems & Arbitrage',
        status: 'current',
        xpReward: 150,
        estimatedMinutes: 5,
        questionsCount: 2,
        quizQuestions: [
          {
            id: 'q_d1_3',
            prompt: 'If an adversary compromises a pod running with CAP_SYS_ADMIN, what is the primary threat to the Kubernetes node?',
            options: [
              'Container breakout to host namespace via cgroups/procfs mount',
              'Increased RAM heating',
              'Slow DNS lookups',
              'Immediate GPU shutdown'
            ],
            correctIndex: 0,
            explanation:
              'CAP_SYS_ADMIN provides broad kernel capabilities, allowing root inside the container to mount host filesystems and escape container isolation.'
          },
          {
            id: 'q_d1_4',
            prompt: 'What architectural shift prevents credential harvesting from stolen container disk images?',
            options: [
              'Ephemeral mTLS credentials via SPIFFE Workload API with 15-minute TTL',
              'Hardcoding API keys in environment variables',
              'Adding more logging to stdout',
              'Restarting the container every 24 hours'
            ],
            correctIndex: 0,
            explanation: 'Ephemeral workload identity attestation eliminates persistent secrets at rest.'
          }
        ]
      }
    ]
  },

  // 2. FACULTY OF ENERGY ECONOMICS & MACRO COMMODITIES
  {
    id: 'energy_economics',
    name: 'Faculty of Energy Economics & Macro Commodities',
    shortTitle: 'Energy & Commodities',
    iconName: 'Zap',
    emoji: '⚡',
    themeColor: 'amber',
    accentHex: '#f59e0b',
    glowClass: 'shadow-[0_0_35px_rgba(245,158,11,0.25)]',
    borderClass: 'border-amber-500/30 hover:border-amber-400/60',
    bgLightClass: 'bg-amber-500/10 text-amber-400',
    badgeClass: 'bg-amber-500/10 text-amber-300 border border-amber-500/30',
    headline: 'Nuclear SMRs, Geopolitical Hydrocarbons & Grid Storage Arbitrage',
    description:
      'Analyze the fundamental thermodynamic currency of civilization: power grids, uranium enrichment, LNG choke points, battery raw materials, and multi-gigawatt arbitrage.',
    estimatedHours: 36,
    totalXp: 1100,
    completionPercent: 45,
    difficulty: 'Civilization Scale',
    simulatorName: 'Global Energy Flow & Commodity Price Matrix Simulator',
    simulatorTag: 'Spark Spread & Grid Resilience Matrix',
    modules: [
      {
        id: 'mod_en_1',
        code: '2.1',
        title: 'Global Energy Grids, SMR Nuclear Power & Fusion Economics',
        description: 'Levelized Cost of Energy (LCOE), Gen IV Small Modular Reactors, and base-load thermodynamics.',
        lessons: [
          {
            id: 'en_l1',
            title: '01. Base-Load Reliability vs Intermittent Curtailment Curves',
            duration: '22 min',
            durationSeconds: 1320,
            completed: true,
            keyTakeaway:
              'Without dense base-load power, grid frequency stability drops below 50/60 Hz under peak industrial inductive loads, causing cascading blackouts.',
            formula: 'Spark Spread = P_electricity - (Heat_rate * P_gas) - Carbon_tax'
          },
          {
            id: 'en_l2',
            title: '02. Small Modular Reactors (SMR): High-Temperature Gas & Molten Salt',
            duration: '28 min',
            durationSeconds: 1680,
            completed: false,
            keyTakeaway:
              'Factory-manufactured SMR modules decouple nuclear deployment from catastrophic multi-billion dollar bespoke civil engineering delays.'
          },
          {
            id: 'en_l3',
            title: '03. Magnetically Confined Tokamaks & Q-factor Economics',
            duration: '26 min',
            durationSeconds: 1560,
            completed: false,
            keyTakeaway:
              'Net energy gain (Q > 10) in burning plasma reactors requires high-temperature superconducting magnets operating at liquid nitrogen temperatures.'
          }
        ]
      },
      {
        id: 'mod_en_2',
        code: '2.2',
        title: 'Geopolitical Oil, Natural Gas & Rare-Earth Supply Chains',
        description: 'Strait of Hormuz, Malacca Chokepoint, refining crack spreads, and Neodymium magnet dominance.',
        lessons: [
          {
            id: 'en_l4',
            title: '04. The 3:2:1 Refinery Crack Spread Calculation',
            duration: '20 min',
            durationSeconds: 1200,
            completed: false,
            keyTakeaway:
              'Refinery economics dictate that for every 3 barrels of crude, refineries produce 2 barrels of gasoline and 1 barrel of diesel distillate.',
            formula: 'Crack Spread ($/bbl) = (2 * P_gasoline + 1 * P_diesel - 3 * P_crude) / 3'
          },
          {
            id: 'en_l5',
            title: '05. Strategic Petroleum Reserves & Tanker Freight Spot Arbitrage',
            duration: '24 min',
            durationSeconds: 1440,
            completed: false,
            keyTakeaway:
              'VLCC supertanker charter rates dynamically shift maritime oil flows between the Atlantic and Pacific basins depending on geographic price spreads.'
          }
        ]
      },
      {
        id: 'mod_en_3',
        code: '2.3',
        title: 'Battery Chemistry, Lithium/Nickel Supply & Green Grid Storage',
        description: 'LFP vs NMC energy densities, solid-state electrolytes, and 4-hour utility peaker economics.',
        lessons: [
          {
            id: 'en_l6',
            title: '06. Lithium Iron Phosphate (LFP) vs Nickel Manganese Cobalt (NMC)',
            duration: '25 min',
            durationSeconds: 1500,
            completed: false,
            keyTakeaway:
              'LFP offers 3x cycle life (4,000+ cycles) and zero thermal runaway risk, making it the supreme choice for stationary grid storage.'
          },
          {
            id: 'en_l7',
            title: '07. Pumped Hydro vs Grid-Scale Battery Pack CapEx Depreciation',
            duration: '23 min',
            durationSeconds: 1380,
            completed: false,
            keyTakeaway:
              'Battery degradation curves require 2-hour arbitrage cycles during negative midday wholesale price events to amortize pack costs.'
          }
        ]
      },
      {
        id: 'mod_en_4',
        code: '2.4',
        title: 'Macro Energy Arbitrage & Carbon Credit Trading Matrix',
        description: 'European ETS allowance mechanisms, locational marginal pricing (LMP), and synthetic fuels.',
        lessons: [
          {
            id: 'en_l8',
            title: '08. Locational Marginal Pricing (LMP) in Texas ERCOT & CAISO Grids',
            duration: '27 min',
            durationSeconds: 1620,
            completed: false,
            keyTakeaway:
              'Transmission congestion creates negative power prices in wind corridors while urban demand nodes pay $5,000/MWh during peak heat waves.'
          }
        ]
      }
    ],
    drillNodes: [
      {
        id: 'drill_en_1',
        title: 'Spark Spread Calculation Drill',
        subtitle: 'Evaluate gas peaker plant profitability',
        tier: 1,
        iconName: 'Zap',
        category: 'Systems & Arbitrage',
        status: 'current',
        xpReward: 110,
        estimatedMinutes: 4,
        questionsCount: 2,
        quizQuestions: [
          {
            id: 'q_en_1',
            prompt: 'If electricity is $95/MWh, natural gas is $3.50/MMBtu, and plant heat rate is 7.2 MMBtu/MWh, what is the spark spread?',
            options: ['$69.80 / MWh', '$24.50 / MWh', '$112.00 / MWh', '$48.10 / MWh'],
            correctIndex: 0,
            explanation: 'Spark Spread = $95 - (7.2 * $3.50) = $95 - $25.20 = $69.80/MWh.'
          },
          {
            id: 'q_en_2',
            prompt: 'Which factor causes electricity prices to turn negative in the ERCOT or German power grid?',
            options: [
              'Sudden plant shutdowns',
              'Excess renewable generation with transmission bottleneck constraints and high shutdown costs of thermal plants',
              'Low consumer demand on holidays only',
              'High coal prices'
            ],
            correctIndex: 1,
            explanation:
              'Nuclear and coal plants prefer paying to export power for short periods rather than incurring massive shut-down and re-start thermal stress costs.'
          }
        ]
      }
    ]
  },

  // 3. FACULTY OF BIOTECHNOLOGY, LONGEVITY & SYNTHETIC BIOLOGY
  {
    id: 'biotech_longevity',
    name: 'Faculty of Biotechnology, Longevity & Synthetic Biology',
    shortTitle: 'Biotech & Longevity',
    iconName: 'Dna',
    emoji: '🧬',
    themeColor: 'emerald',
    accentHex: '#10b981',
    glowClass: 'shadow-[0_0_35px_rgba(16,185,129,0.25)]',
    borderClass: 'border-emerald-500/30 hover:border-emerald-400/60',
    bgLightClass: 'bg-emerald-500/10 text-emerald-400',
    badgeClass: 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30',
    headline: 'Epigenetic Reprogramming, CRISPR Editing & Peak Biomarker Telemetry',
    description:
      'Engineer biological longevity, master synthetic genomics, reverse cellular senescence via Yamanaka factors, and optimize metabolic biomarker homeostasis.',
    estimatedHours: 38,
    totalXp: 1200,
    completionPercent: 52,
    difficulty: 'Elite Sovereign',
    simulatorName: 'Interactive DNA & Biomarker Diagnostic Simulator',
    simulatorTag: 'CRISPR Target & Epigenetic Clock',
    modules: [
      {
        id: 'mod_bio_1',
        code: '3.1',
        title: 'Cellular Reprogramming, Epigenetics & Longevity Biohacking Protocols',
        description: 'DNA methylation clocks, NAD+ salvage pathways, senolytics, and telomeric attrition.',
        lessons: [
          {
            id: 'bio_l1',
            title: '01. Yamanaka Factors (OSKM) & Partial Reprogramming',
            duration: '26 min',
            durationSeconds: 1560,
            completed: true,
            keyTakeaway:
              'Transient expression of Oct4, Sox2, and Klf4 resets epigenetic Horvath age without erasing cell identity into teratomas.',
            formula: 'Biological Age = \\sum (w_i * MethylationLevel_i) + Offset'
          },
          {
            id: 'bio_l2',
            title: '02. Senolytic Clearances: Dasatinib + Quercetin & Fisetin',
            duration: '22 min',
            durationSeconds: 1320,
            completed: false,
            keyTakeaway:
              'Selectively triggering apoptosis in senescent (zombie) cells reduces systemic pro-inflammatory SASP cytokines.'
          },
          {
            id: 'bio_l3',
            title: '03. Sirtuin Activation, NAD+ Depletion & CD38 Inhibition',
            duration: '24 min',
            durationSeconds: 1440,
            completed: false,
            keyTakeaway:
              'NAD+ levels halve every 20 years; blocking CD38 ecto-enzymes preserves intracellular NAD+ stores needed by SIRT1 and PARP DNA repair.'
          }
        ]
      },
      {
        id: 'mod_bio_2',
        code: '3.2',
        title: 'CRISPR-Cas9 Gene Editing, mRNA Platforms & Synthetic Genomics',
        description: 'Single-guide RNA design, prime editing, base transitions, and lipid nanoparticle (LNP) delivery.',
        lessons: [
          {
            id: 'bio_l4',
            title: '04. Prime Editing: Search-and-Replace Genomic Modification',
            duration: '28 min',
            durationSeconds: 1680,
            completed: false,
            keyTakeaway:
              'Combining Cas9 nickase with engineered reverse transcriptase writes new genetic code without requiring lethal double-strand breaks.'
          },
          {
            id: 'bio_l5',
            title: '05. Ionizable Lipid Nanoparticles (LNPs) for Targeted Organ Delivery',
            duration: '24 min',
            durationSeconds: 1440,
            completed: false,
            keyTakeaway:
              'Varying helper lipid ratios and cholesterol conjugates redirects mRNA cargo away from liver clearance toward heart or immune cells.'
          }
        ]
      },
      {
        id: 'mod_bio_3',
        code: '3.3',
        title: 'Computational Biology, Protein Folding & AI-Driven Drug Discovery',
        description: 'AlphaFold 3 conformational dynamics, de novo binder design, and molecular docking.',
        lessons: [
          {
            id: 'bio_l6',
            title: '06. AlphaFold Structural Ensembles & Pocket Binding Free Energy',
            duration: '30 min',
            durationSeconds: 1800,
            completed: false,
            keyTakeaway:
              'Predict binding affinities (ΔG) across billions of candidate small molecules in silico before synthesizing wet-lab compounds.'
          }
        ]
      },
      {
        id: 'mod_bio_4',
        code: '3.4',
        title: 'Neurobiology of Peak Cognitive Performance & Biomarker Optimization',
        description: 'Continuous Glucose Monitors (CGM), Heart Rate Variability (HRV), and deep sleep architecture.',
        lessons: [
          {
            id: 'bio_l7',
            title: '07. Glycemic Variability & Brain-Derived Neurotrophic Factor (BDNF)',
            duration: '25 min',
            durationSeconds: 1500,
            completed: false,
            keyTakeaway:
              'Spike-and-crash blood glucose fluctuations starve hippocampal astrocytes, suppressing neurogenesis and executive processing.'
          }
        ]
      }
    ],
    drillNodes: [
      {
        id: 'drill_bio_1',
        title: 'CRISPR Guide Target Diagnostic',
        subtitle: 'Select optimal 20-nt guide sequence with NGG PAM',
        tier: 1,
        iconName: 'Dna',
        category: 'Mindset & Stoicism',
        status: 'current',
        xpReward: 130,
        estimatedMinutes: 4,
        questionsCount: 2,
        quizQuestions: [
          {
            id: 'q_bio_1',
            prompt: 'What Protospacer Adjacent Motif (PAM) sequence does SpCas9 recognize on the non-target DNA strand?',
            options: ['5\'-NGG-3\'', '5\'-TTTV-3\'', '5\'-AAAA-3\'', '5\'-CCCA-3\''],
            correctIndex: 0,
            explanation: 'SpCas9 strictly requires the canonical 5\'-NGG-3\' PAM sequence immediately adjacent to the 20-nucleotide guide target.'
          },
          {
            id: 'q_bio_2',
            prompt: 'Which epigenetic marker is measured to quantify Horvath biological age across mammalian tissues?',
            options: ['DNA Cytosine-phosphate-Guanine (CpG) Methylation', 'Hemoglobin A1c', 'Creatinine clearance', 'Red blood cell count'],
            correctIndex: 0,
            explanation: 'DNA methylation patterns at specific CpG sites reliably predict cellular and chronological biological age.'
          }
        ]
      }
    ]
  },

  // 4. FACULTY OF HIGH-ORDER MINDSET & COGNITIVE WARFARE
  {
    id: 'mindset_cognitive',
    name: 'Faculty of High-Order Mindset & Cognitive Warfare',
    shortTitle: 'Mindset & Warfare',
    iconName: 'Brain',
    emoji: '🧠',
    themeColor: 'violet',
    accentHex: '#8b5cf6',
    glowClass: 'shadow-[0_0_35px_rgba(139,92,246,0.25)]',
    borderClass: 'border-violet-500/30 hover:border-violet-400/60',
    bgLightClass: 'bg-violet-500/10 text-violet-400',
    badgeClass: 'bg-violet-500/10 text-violet-300 border border-violet-500/30',
    headline: 'Stoic Crisis Invariance, Cognitive Shielding & Strategic Game Theory',
    description:
      'Fortify cognitive sovereignty against psychological manipulation, eliminate emotional friction during existential crises, and execute game-theoretic dominance.',
    estimatedHours: 30,
    totalXp: 950,
    completionPercent: 78,
    difficulty: 'Elite Sovereign',
    simulatorName: 'Rationality & Emotional Bias Stress-Test Simulator',
    simulatorTag: 'Crisis Poise & Bias Detection Arena',
    modules: [
      {
        id: 'mod_cog_1',
        code: '4.1',
        title: '"The Zero Emotion" — Stoic Decision Matrix Under Extreme Crisis',
        description: 'Decoupling amygdala panic response from executive prefrontal cortex execution.',
        lessons: [
          {
            id: 'cog_l1',
            title: '01. The Dichotomy of Control in Existential Calamity',
            duration: '20 min',
            durationSeconds: 1200,
            completed: true,
            keyTakeaway:
              'Suffering equals reality minus expectation. Categorize every event into binary buckets: within your agency or outside your agency.',
            formula: 'Suffering = Attachment \\times (Reality - Expectation)'
          },
          {
            id: 'cog_l2',
            title: '02. Premeditatio Malorum & Inverse Decision Trees',
            duration: '22 min',
            durationSeconds: 1320,
            completed: true,
            keyTakeaway:
              'Mentally rehearsing total bankruptcy and reputation devastation eliminates surprise, leaving only cold tactical maneuvers.'
          }
        ]
      },
      {
        id: 'mod_cog_2',
        code: '4.2',
        title: 'Neuroplasticity Engineering, Dopamine Fasting & Deep Flow States',
        description: 'Rebuilding dopamine receptor density, eradicating digital addiction loops, and 4-hour uninterrupted flow.',
        lessons: [
          {
            id: 'cog_l3',
            title: '03. Baseline Dopamine Homeostasis vs Tonic-Phasic Ratios',
            duration: '24 min',
            durationSeconds: 1440,
            completed: true,
            keyTakeaway:
              'Chasing rapid dopamine spikes (notifications, markets) creates reciprocal crashes beneath your previous baseline, destroying sustained focus.'
          },
          {
            id: 'cog_l4',
            title: '04. The 90-Minute Ultradian Cognitive Sprint Protocol',
            duration: '21 min',
            durationSeconds: 1260,
            completed: false,
            keyTakeaway:
              'Align intense creative output to natural 90-minute biological ultradian rhythms followed by complete sensory downregulation.'
          }
        ]
      },
      {
        id: 'mod_cog_3',
        code: '4.3',
        title: 'Strategic Game Theory, Asymmetric Negotiation & Power Dynamics',
        description: 'Nash equilibria, Schelling focal points, credible threats, and asymmetric information bargaining.',
        lessons: [
          {
            id: 'cog_l5',
            title: '05. The Best Alternative to a Negotiated Agreement (BATNA)',
            duration: '26 min',
            durationSeconds: 1560,
            completed: false,
            keyTakeaway:
              'He who can walk away from the table without flinching holds 95% of bargaining leverage regardless of enterprise scale.'
          }
        ]
      },
      {
        id: 'mod_cog_4',
        code: '4.4',
        title: 'Psychological Antifragility & Building Sovereign Immunity to Distraction',
        description: 'Transforming stress into biological signal strength, memetic hygiene, and high-agency execution.',
        lessons: [
          {
            id: 'cog_l6',
            title: '06. Memetic Filtering & Eradication of Outrage Feeds',
            duration: '23 min',
            durationSeconds: 1380,
            completed: false,
            keyTakeaway:
              'Algorithms monetize rage. Consuming sensationalized current events damages executive discernment without providing actionable edge.'
          }
        ]
      }
    ],
    drillNodes: [
      {
        id: 'drill_cog_1',
        title: 'Crisis Rationality Stress Test',
        subtitle: 'Identify and neutralize cognitive bias under pressure',
        tier: 1,
        iconName: 'Brain',
        category: 'Mindset & Stoicism',
        status: 'completed',
        xpReward: 140,
        estimatedMinutes: 5,
        questionsCount: 2,
        quizQuestions: [
          {
            id: 'q_cog_1',
            prompt: 'You have invested $120,000 into a software product. New market regulations make profitable monetization impossible. What is the rational response?',
            options: [
              'Continue funding because abandoning it wastes the $120,000 already spent',
              'Immediately terminate funding and reallocate remaining capital based purely on future expected value (EV)',
              'Double marketing spend to recover the sunk cost',
              'Complain publicly on social media'
            ],
            correctIndex: 1,
            explanation:
              'The Sunk Cost Fallacy traps non-rational operators into bleeding future resources on unrecoverable historical expenditures.'
          },
          {
            id: 'q_cog_2',
            prompt: 'During high-stakes negotiations, what confers the highest asymmetric power?',
            options: [
              'Aggressive vocal tone',
              'A credible, self-sufficient Walk-Away alternative (Superior BATNA)',
              'Making the first concession',
              'Bringing a larger delegation'
            ],
            correctIndex: 1,
            explanation:
              'Power in negotiation stems from indifference to the deal taking place; a superior outside alternative renders intimidation useless.'
          }
        ]
      }
    ]
  },

  // 5. FACULTY OF STOCKS & QUANTITATIVE MACRO FINANCE
  {
    id: 'quant_macro_finance',
    name: 'Faculty of Stocks & Quantitative Macro Finance',
    shortTitle: 'Quant & Macro Finance',
    iconName: 'TrendingUp',
    emoji: '📈',
    themeColor: 'sky',
    accentHex: '#0ea5e9',
    glowClass: 'shadow-[0_0_35px_rgba(14,165,233,0.25)]',
    borderClass: 'border-sky-500/30 hover:border-sky-400/60',
    bgLightClass: 'bg-sky-500/10 text-sky-400',
    badgeClass: 'bg-sky-500/10 text-sky-300 border border-sky-500/30',
    headline: 'Macro Liquidity Cycles, Order Flow Mechanics & Volatility Convexity',
    description:
      'Decode the Federal Reserve balance sheet, reverse repos, Treasury yield curves, market microstructure, Level 2 tape reading, and asymmetric tail-risk option payoffs.',
    estimatedHours: 40,
    totalXp: 1300,
    completionPercent: 35,
    difficulty: 'Production Grade',
    simulatorName: 'Interactive Candlestick & Trade Execution Simulator',
    simulatorTag: 'Live Order Book & VWAP Microstructure',
    modules: [
      {
        id: 'mod_fin_1',
        code: '5.1',
        title: 'Macro Liquidity Cycles, Federal Reserve Policy & Yield Curves',
        description: 'TGA drawdown mechanics, Reverse Repo (RRP) drains, SOFR spreads, and inverted 2s10s yield curves.',
        lessons: [
          {
            id: 'fin_l1',
            title: '01. The Net Liquidity Formula: Fed Balance Sheet - TGA - RRP',
            duration: '25 min',
            durationSeconds: 1500,
            completed: true,
            keyTakeaway:
              'Asset valuations expand not on corporate earnings optimism, but on commercial bank reserves injected via central bank operations.',
            formula: 'Net Liquidity = Fed Total Assets - Treasury General Account (TGA) - Reverse Repo (ON RRP)'
          },
          {
            id: 'fin_l2',
            title: '02. Inverted 10Y-2Y Treasury Yield Spreads & Recession Lag Times',
            duration: '28 min',
            durationSeconds: 1680,
            completed: false,
            keyTakeaway:
              'The danger to risk assets peaks not when the curve inverts, but when it rapidly un-inverts as the central bank initiates emergency rate cuts.'
          }
        ]
      },
      {
        id: 'mod_fin_2',
        code: '5.2',
        title: 'Institutional Order Flow, Tape Reading & Volatility Arbitrage',
        description: 'Market-maker delta/gamma hedging, dark pool execution, VWAP bands, and implied volatility surfaces.',
        lessons: [
          {
            id: 'fin_l3',
            title: '03. Market Maker Gamma Exposure (GEX) & Volatility Pinning',
            duration: '32 min',
            durationSeconds: 1920,
            completed: false,
            keyTakeaway:
              'When dealer gamma is positive, market makers buy dips and sell rips, compressing volatility; negative gamma triggers violent runaway liquidations.',
            codeSnippet: `// Dealer Net Gamma Exposure calculation
function calculateNetGEX(optionChain) {
  return optionChain.reduce((acc, opt) => {
    const sign = opt.type === 'call' ? 1 : -1;
    return acc + (opt.gamma * opt.openInterest * 100 * opt.spotPrice * sign);
  }, 0);
}`
          },
          {
            id: 'fin_l4',
            title: '04. Volume Weighted Average Price (VWAP) & Institutional Liquidity Slicing',
            duration: '24 min',
            durationSeconds: 1440,
            completed: false,
            keyTakeaway:
              'Pension funds slice 9-figure orders into TWAP/VWAP algorithms to avoid tipping the order book to predatory high-frequency traders.'
          }
        ]
      },
      {
        id: 'mod_fin_3',
        code: '5.3',
        title: 'Balance Sheet Forensics & Asymmetric Value Investing',
        description: 'Beneish M-Score manipulation detection, Altman Z-Score distress metrics, and owner earnings.',
        lessons: [
          {
            id: 'fin_l5',
            title: '05. The Beneish M-Score: Detecting Fraudulent Revenue Recognition',
            duration: '27 min',
            durationSeconds: 1620,
            completed: false,
            keyTakeaway:
              'An M-Score greater than -1.78 indicates a high mathematical probability of accounting manipulation before public restatements.'
          }
        ]
      }
    ],
    drillNodes: [
      {
        id: 'drill_fin_1',
        title: 'Net Liquidity & Gamma Drill',
        subtitle: 'Forecast index volatility regime shift',
        tier: 1,
        iconName: 'TrendingUp',
        category: 'Systems & Arbitrage',
        status: 'current',
        xpReward: 125,
        estimatedMinutes: 4,
        questionsCount: 2,
        quizQuestions: [
          {
            id: 'q_fin_1',
            prompt: 'When the Treasury General Account (TGA) balance drops significantly, what is the net effect on financial market liquidity?',
            options: [
              'Liquidity increases because government cash balances are spent back into the commercial banking system',
              'Liquidity decreases because taxes are rising',
              'Zero impact',
              'Inflation immediately drops to 0%'
            ],
            correctIndex: 0,
            explanation:
              'When the US Treasury drains its account at the Fed to make disbursements, those funds flow directly into commercial bank reserves.'
          },
          {
            id: 'q_fin_2',
            prompt: 'In options market microstructure, what behavior does a Negative Gamma regime force market-making dealers to execute?',
            options: [
              'Sell stock as the market falls and buy stock as the market rallies, amplifying volatility',
              'Hold cash and close all accounts',
              'Buy stock as the market falls, damping volatility',
              'Convert options into physical gold'
            ],
            correctIndex: 0,
            explanation:
              'In negative gamma, dealers must hedge dynamically by selling into market declines and buying into market rallies, exacerbating market crashes.'
          }
        ]
      }
    ]
  },

  // 6. FACULTY OF CRYPTO, DEFI & WEB3 SOVEREIGNTY
  {
    id: 'crypto_defi_web3',
    name: 'Faculty of Crypto, DeFi & Web3 Sovereignty',
    shortTitle: 'Crypto & DeFi Sovereignty',
    iconName: 'Coins',
    emoji: '🪙',
    themeColor: 'rose',
    accentHex: '#f43f5e',
    glowClass: 'shadow-[0_0_35px_rgba(244,63,94,0.25)]',
    borderClass: 'border-rose-500/30 hover:border-rose-400/60',
    bgLightClass: 'bg-rose-500/10 text-rose-400',
    badgeClass: 'bg-rose-500/10 text-rose-300 border border-rose-500/30',
    headline: 'On-Chain Forensics, Concentrated Liquidity & Smart Contract Security',
    description:
      'Harness non-custodial capital sovereignty, inspect Ethereum/Solana mempools, audit Solidity bytecode for reentrancy, and engineer zero-loss automated market making.',
    estimatedHours: 35,
    totalXp: 1150,
    completionPercent: 60,
    difficulty: 'Hardcore Tactical',
    simulatorName: 'On-Chain Multi-Sig & Liquidity Pool Sandbox',
    simulatorTag: 'Concentrated AMM & Multi-Sig Vault',
    modules: [
      {
        id: 'mod_cry_1',
        code: '6.1',
        title: 'Bitcoin Halving Dynamics & On-Chain Whale Forensics',
        description: 'Stock-to-Flow dynamics, UTXO age bands, spent volume analysis, and exchange reserve outflows.',
        lessons: [
          {
            id: 'cry_l1',
            title: '01. UTXO Realized Price vs Market Price Divergence',
            duration: '22 min',
            durationSeconds: 1320,
            completed: true,
            keyTakeaway:
              'MVRV (Market Value to Realized Value) ratios identify long-term generational accumulation and exhaustion cycles with mathematical precision.',
            formula: 'MVRV = Market Capitalization / Realized Capitalization'
          },
          {
            id: 'cry_l2',
            title: '02. Hash Ribbon Indicators & Miner Capitulation Bottoms',
            duration: '24 min',
            durationSeconds: 1440,
            completed: false,
            keyTakeaway:
              'When the 30-day moving average of hash rate crosses above the 60-day MA following a capitulation phase, historical upside convexity exceeds 85%.'
          }
        ]
      },
      {
        id: 'mod_cry_2',
        code: '6.2',
        title: 'DeFi Yield Architecture, Liquidity Pools & Lending Engines',
        description: 'Uniswap v3 concentrated tick ranges, impermanent loss formulas, and flash loan collateralization.',
        lessons: [
          {
            id: 'cry_l3',
            title: '03. Concentrated Liquidity Mathematics & Impermanent Loss Risk',
            duration: '29 min',
            durationSeconds: 1740,
            completed: true,
            keyTakeaway:
              'Narrow tick ranges multiply trading fee APY by 50x, but expose liquidity providers to accelerated impermanent loss if prices exit the band.',
            formula: 'IL = \\frac{2 \\sqrt{k}}{1 + k} - 1, \\quad \\text{where } k = \\frac{P_{new}}{P_{old}}'
          },
          {
            id: 'cry_l4',
            title: '04. Aave Flash Loans & Single-Block Atomic Arbitrage',
            duration: '26 min',
            durationSeconds: 1560,
            completed: false,
            keyTakeaway:
              'Borrow $50,000,000 with zero collateral, execute multi-DEX price discrepancy swaps, and repay the principal plus 0.05% fee within a single Ethereum transaction.'
          }
        ]
      },
      {
        id: 'mod_cry_3',
        code: '6.3',
        title: 'Smart Contract Security (Solidity/Rust) & Tokenomics Engineering',
        description: 'Cross-function reentrancy vectors, flash loan oracle manipulation, and ERC-4337 Account Abstraction.',
        lessons: [
          {
            id: 'cry_l5',
            title: '05. Checks-Effects-Interactions Pattern to Prevent Reentrancy',
            duration: '27 min',
            durationSeconds: 1620,
            completed: false,
            keyTakeaway:
              'Always update internal balances before making external contract calls to defeat state-manipulating fallback exploits.',
            codeSnippet: `// Checks-Effects-Interactions Pattern
function withdraw(uint256 amount) external nonReentrant {
  require(balances[msg.sender] >= amount, "Insufficient"); // Checks
  balances[msg.sender] -= amount;                          // Effects
  (bool success, ) = msg.sender.call{value: amount}("");   // Interactions
  require(success, "Transfer failed");
}`
          }
        ]
      }
    ],
    drillNodes: [
      {
        id: 'drill_cry_1',
        title: 'Impermanent Loss & AMM Drill',
        subtitle: 'Quantify liquidity pool divergence risk',
        tier: 1,
        iconName: 'Coins',
        category: 'Systems & Arbitrage',
        status: 'completed',
        xpReward: 115,
        estimatedMinutes: 4,
        questionsCount: 2,
        quizQuestions: [
          {
            id: 'q_cry_1',
            prompt: 'If asset A doubles in price relative to asset B in a standard 50/50 constant-product AMM (x * y = k), what is the impermanent loss compared to holding?',
            options: ['~5.7%', '~12.5%', '0%', '~25.0%'],
            correctIndex: 0,
            explanation:
              'Plugging k = 2 into the standard IL formula 2*sqrt(2)/(1+2) - 1 gives ~0.9428 - 1 = -5.72% loss compared to pure holding.'
          },
          {
            id: 'q_cry_2',
            prompt: 'Why are spot DEX liquidity pool balances vulnerable when using them directly as price oracles in lending protocols?',
            options: [
              'Gas costs fluctuate',
              'Adversaries can manipulate the spot reserve ratio within a single block via flash loans',
              'Smart contracts cannot read arrays',
              'Validators ban DEX queries'
            ],
            correctIndex: 1,
            explanation:
              'Flash loans enable massive capital injections that warp instantaneous spot AMM prices within one block unless Time-Weighted Average Prices (TWAP) or decentralized oracles like Chainlink are used.'
          }
        ]
      }
    ]
  },

  // 7. FACULTY OF ADVANCED AI & AUTONOMOUS SWARMS
  {
    id: 'ai_autonomous_swarms',
    name: 'Faculty of Advanced AI & Autonomous Swarms',
    shortTitle: 'AI & Autonomous Swarms',
    iconName: 'Bot',
    emoji: '🤖',
    themeColor: 'indigo',
    accentHex: '#6366f1',
    glowClass: 'shadow-[0_0_35px_rgba(99,102,241,0.25)]',
    borderClass: 'border-indigo-500/30 hover:border-indigo-400/60',
    bgLightClass: 'bg-indigo-500/10 text-indigo-400',
    badgeClass: 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/30',
    headline: 'Frontier LLM Architectures, Vector RAG & Zero-Headcount Swarms',
    description:
      'Deploy autonomous multi-agent task DAGs, engineer vector embedding retrieval pipelines, prevent prompt injection vulnerabilities, and scale zero-headcount AI micro-SaaS.',
    estimatedHours: 45,
    totalXp: 1400,
    completionPercent: 82,
    difficulty: 'Production Grade',
    simulatorName: 'Live In-Browser AI Prompt Warfare Sandbox',
    simulatorTag: 'Prompt Jailbreak & Swarm DAG Playground',
    modules: [
      {
        id: 'mod_ai_1',
        code: '7.1',
        title: 'Frontier LLM Architectures, Vector Databases & RAG Pipelines',
        description: 'Multi-head latent attention, semantic chunking, HyDE retrieval, and re-ranking algorithms.',
        lessons: [
          {
            id: 'ai_l1',
            title: '01. Hypothetical Document Embeddings (HyDE) & Cross-Encoder Reranking',
            duration: '28 min',
            durationSeconds: 1680,
            completed: true,
            keyTakeaway:
              'Generating a hypothetical answer before embedding search queries elevates semantic match accuracy from 64% to 94% on domain-specific corpora.',
            codeSnippet: `// HyDE Vector Search Pipeline
const hypotheticalAnswer = await llm.generate("Draft ideal answer to: " + userQuery);
const denseVector = await embeddingModel.embed(hypotheticalAnswer);
const rawMatches = await vectorDB.query({ vector: denseVector, topK: 25 });
const rankedResults = await crossEncoder.rerank(userQuery, rawMatches, { topN: 5 });`
          },
          {
            id: 'ai_l2',
            title: '02. Context Window Compaction & KV Cache Memory Optimizations',
            duration: '26 min',
            durationSeconds: 1560,
            completed: true,
            keyTakeaway:
              'PagedAttention and FlashAttention-3 avoid contiguous GPU VRAM allocations, multiplying agent concurrency capacity by 4x.'
          }
        ]
      },
      {
        id: 'mod_ai_2',
        code: '7.2',
        title: 'Autonomous Multi-Agent Swarms for Zero-Headcount Companies',
        description: 'Hierarchical orchestrators, critic feedback loops, tool-calling determinism, and state machines.',
        lessons: [
          {
            id: 'ai_l3',
            title: '03. Dual-Loop Critic Validation: Preventing Swarm Hallucination Drift',
            duration: '34 min',
            durationSeconds: 2040,
            completed: true,
            keyTakeaway:
              'Pair every generative agent with an adversarial critic agent armed with a static linter and unit-test runner before releasing artifacts.',
            codeSnippet: `// Agentic Loop with Deterministic Critic
while (!approved && retries < 3) {
  const proposal = await generatorAgent.act(task);
  const evaluation = await criticAgent.evaluate(proposal, testSuite);
  if (evaluation.passesAll) approved = true;
  else task.amendWithFeedback(evaluation.errors);
}`
          },
          {
            id: 'ai_l4',
            title: '04. Stateful Directed Acyclic Graphs (DAGs) with LangGraph',
            duration: '30 min',
            durationSeconds: 1800,
            completed: false,
            keyTakeaway:
              'Model agent swarms as deterministic state machines with checkpoints rather than chaotic conversational chat rooms.'
          }
        ]
      },
      {
        id: 'mod_ai_3',
        code: '7.3',
        title: 'Monopolistic AI Micro-SaaS Blueprint & Automation Workflows',
        description: 'Defensible data moats, webhook event fabrics, usage metering, and 98% gross margins.',
        lessons: [
          {
            id: 'ai_l5',
            title: '05. The Proprietary Evaluation Moat vs Generic Wrapper Trap',
            duration: '27 min',
            durationSeconds: 1620,
            completed: false,
            keyTakeaway:
              'Commodity AI models shift value to proprietary telemetry and human-in-the-loop correction data flywheel loops.'
          }
        ]
      }
    ],
    drillNodes: [
      {
        id: 'drill_ai_1',
        title: 'Autonomous Swarm Orchestration Drill',
        subtitle: 'Resolve agent deadlocks & prompt security exploits',
        tier: 1,
        iconName: 'Bot',
        category: 'Autonomous AI',
        status: 'completed',
        xpReward: 160,
        estimatedMinutes: 5,
        questionsCount: 2,
        quizQuestions: [
          {
            id: 'q_ai_1',
            prompt: 'In autonomous agent design, why does an adversarial Critic agent prevent catastrophic hallucination drift?',
            options: [
              'It forces an independent validation pass using strict unit tests and factual constraints before side-effects execute',
              'It lowers API cost by deleting tokens',
              'It translates text into French',
              'It runs on cheaper CPU instances'
            ],
            correctIndex: 0,
            explanation:
              'Separating generation from evaluation breaks self-reinforcing hallucination feedback loops by subjecting outputs to objective tests.'
          },
          {
            id: 'q_ai_2',
            prompt: 'Which security layer best defends against indirect prompt injection hidden inside scraped web pages?',
            options: [
              'Treating retrieved context as untrusted data and isolating it from system control instructions with strict XML tags & delimiters',
              'Increasing temperature to 1.0',
              'Removing all system instructions',
              'Using shorter prompts'
            ],
            correctIndex: 0,
            explanation:
              'Strict structural isolation (e.g. `<context>` boundaries) and explicit model instructions preventing execution of context commands mitigates indirect injection.'
          }
        ]
      }
    ]
  }
];

export const CIVILIZATION_CHALLENGES: CivilizationChallenge[] = [
  {
    id: 'civ_deep_it_1',
    date: 'Today',
    facultyId: 'deep_it_cyber',
    facultyName: 'Deep IT, Cloud & Cyber Infrastructure',
    facultyEmoji: '💻',
    title: 'Planetary Cluster Kernel Partition Crisis',
    tag: 'CIVILIZATION CHALLENGE · +100 XP',
    context:
      'A transatlantic optical subsea cable severance cuts your primary distributed database cluster into two equal halves (split-brain condition). 65,000 writes/sec are hitting both sides simultaneously.',
    question: 'How do you preserve total financial ledger consistency without permanent corruptive state divergence?',
    codeSnippet: `// Raft Cluster Heartbeat Telemetry
LeaderLease: EXPIRED (RTT > 1200ms)
Region_A Nodes: [1, 2] (Available)
Region_B Nodes: [3, 4] (Available)
Tiebreaker Node_5: UNREACHABLE`,
    options: [
      {
        id: 'opt_cit_1',
        text: 'Allow both partitions to accept writes independently; merge all transactions using timestamp-last-write-wins when connectivity restores.',
        isOptimal: false,
        feedback: 'Catastrophic failure: Last-write-wins destroys double-spend protections and creates unreconcilable balances.',
        xpMultiplier: 0.2
      },
      {
        id: 'opt_cit_2',
        text: 'Enforce strict Paxos/Raft Quorum (N/2 + 1): Because neither partition has 3 of 5 nodes, immediately reject writes in both regions, preserving consistency over availability (CP mode).',
        isOptimal: true,
        feedback: 'Flawless engineering! According to the CAP theorem, in a network partition you must sacrifice availability to guarantee absolute mathematical data integrity.',
        xpMultiplier: 1.0
      },
      {
        id: 'opt_cit_3',
        text: 'Elect Node 1 as arbitrary sovereign master and force all global DNS traffic to Region A regardless of node consensus.',
        isOptimal: false,
        feedback: 'Dangerous: Region B clients will continue executing local writes, guaranteeing severe silent divergence.',
        xpMultiplier: 0.4
      }
    ],
    rewardXp: 100,
    badgeReward: 'Planetary Systems Architect'
  },
  {
    id: 'civ_energy_1',
    date: 'Tomorrow',
    facultyId: 'energy_economics',
    facultyName: 'Energy Economics & Macro Commodities',
    facultyEmoji: '⚡',
    title: 'The Great European Winter Cold-Snap Spark Spread',
    tag: 'GRID EQUILIBRIUM · +100 XP',
    context:
      'A catastrophic polar vortex halts wind production across Northern Europe while temperatures plunge to -18°C. Spot gas prices surge to $45/MMBtu and wholesale grid power hits €1,200/MWh.',
    question: 'As chief operator of a 500MW fast-response gas turbine fleet with 30-day LNG storage, what is your optimal economic and humanitarian move?',
    options: [
      {
        id: 'opt_en_1',
        text: 'Fire up all peakers at maximum capacity, capture the €1,200/MWh wholesale peak spread, and lock in forward spark-spread hedges on 50% of capacity.',
        isOptimal: true,
        feedback: 'Masterful execution! You provide critical inductive grid stabilization to prevent catastrophic blackouts while generating immense economic surplus.',
        xpMultiplier: 1.0
      },
      {
        id: 'opt_en_2',
        text: 'Shut down the turbines to conserve LNG for next month when gas might be even more expensive.',
        isOptimal: false,
        feedback: 'Destructive: Withholding power during a critical freeze triggers rolling blackouts and severe regulatory sanctions.',
        xpMultiplier: 0.1
      }
    ],
    rewardXp: 100,
    badgeReward: 'Grid Titan'
  }
];
