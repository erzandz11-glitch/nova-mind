import { FrontierFaculty, CivilizationChallenge } from '../types';
import { DEEP_IT_CYBER_FACULTY } from './faculties/deepItCyberData';
import { ENERGY_ECONOMICS_FACULTY } from './faculties/energyEconomicsData';
import { BIOTECH_LONGEVITY_FACULTY } from './faculties/biotechLongevityData';
import { MINDSET_COGNITIVE_FACULTY } from './faculties/mindsetCognitiveData';
import { QUANT_FINANCE_FACULTY } from './faculties/quantFinanceData';
import { CRYPTO_DEFI_FACULTY } from './faculties/cryptoDefiData';
import { AI_SWARMS_FACULTY } from './faculties/aiSwarmData';
import { GAME_DEV_MEDIA_FACULTY } from './faculties/gameDevMediaData';
import { FULLSTACK_WEB_FACULTY } from './faculties/fullstackWebData';
import { DIGITAL_BUSINESS_FACULTY } from './faculties/digitalBusinessData';

export const FRONTIER_FACULTIES: FrontierFaculty[] = [
  DEEP_IT_CYBER_FACULTY,
  ENERGY_ECONOMICS_FACULTY,
  BIOTECH_LONGEVITY_FACULTY,
  MINDSET_COGNITIVE_FACULTY,
  QUANT_FINANCE_FACULTY,
  CRYPTO_DEFI_FACULTY,
  AI_SWARMS_FACULTY,
  GAME_DEV_MEDIA_FACULTY,
  FULLSTACK_WEB_FACULTY,
  DIGITAL_BUSINESS_FACULTY
];

export const CIVILIZATION_CHALLENGES: CivilizationChallenge[] = [
  {
    id: 'civ_deep_it_1',
    date: '2026-09-29',
    facultyId: 'deep_it_cyber',
    facultyName: 'Deep IT, Cloud & Cyber',
    facultyEmoji: '💻',
    title: 'Planetary Cluster Kernel Partition Crisis',
    tag: 'Distributed Systems & Network Partition',
    context:
      'A transatlantic undersea fiber cable severance has triggered a split-brain condition across 3 primary datacenter clusters (US-East, EU-Central, APAC-South). Raft quorum leader leases are expiring simultaneously.',
    question:
      'To prevent dual-master data corruption and Byzantine divergence under zero-trust constraints, what immediate algorithmic intervention must be committed?',
    codeSnippet: `// Raft Election Lease Check
fn enforce_leader_lease(nodes: &[NodeId], current_term: u64) -> Result<LeadershipStatus, RaftError> {
    let active_heartbeats = ping_majority_quorum(nodes)?;
    if active_heartbeats < (nodes.len() / 2 + 1) {
        return Ok(LeadershipStatus::StepDownToFollower);
    }
    Ok(LeadershipStatus::MaintainLease)
}`,
    options: [
      {
        id: 'opt_1',
        text: 'Force manual override on all 3 partitions to continue processing writes independently.',
        isOptimal: false,
        feedback: 'Violates CAP theorem and causes catastrophic data corruption and state divergence.',
        xpMultiplier: 0.2
      },
      {
        id: 'opt_2',
        text: 'Trigger strict Raft quorum step-down on minority partitions while maintaining monotonic state machine commits on the majority partition.',
        isOptimal: true,
        feedback: 'Correct. Enforces strict linearizability and safety over temporary degraded availability.',
        xpMultiplier: 1.0
      },
      {
        id: 'opt_3',
        text: 'Disable consensus checks and stream all transactions to temporary Redis caches.',
        isOptimal: false,
        feedback: 'Redis in-memory caching during a network split will still lead to split-brain writes.',
        xpMultiplier: 0.4
      }
    ],
    rewardXp: 200,
    badgeReward: 'Sovereign Distributed Architect'
  },
  {
    id: 'civ_energy_1',
    date: '2026-09-29',
    facultyId: 'energy_economics',
    facultyName: 'Energy Economics & Macro Commodities',
    facultyEmoji: '⚡',
    title: 'The Great European Winter Cold-Snap Spark Spread',
    tag: 'Grid Dispatch & Commodity Arbitrage',
    context:
      'An unprecedented arctic polar vortex has spiked regional power demand by 45% while calm wind conditions have dropped renewable output to near zero. Natural gas CCGT peaking plants face extreme fuel delivery bottlenecks.',
    question:
      'How should a macro sovereign utility optimize its dispatch stack to maintain grid synchronization (50 Hz ± 0.05 Hz) without catastrophic blackout risk?',
    options: [
      {
        id: 'opt_1',
        text: 'Max out nuclear baseload, activate synchronous grid-forming battery reserves, and execute pre-hedged firm physical gas deliverability contracts.',
        isOptimal: true,
        feedback: 'Optimal. Synchronous inertia and fast-response BESS protect frequency while physical fuel hedging secures dispatch.',
        xpMultiplier: 1.0
      },
      {
        id: 'opt_2',
        text: 'Immediately disconnect industrial manufacturing zones without warning to lower aggregate load.',
        isOptimal: false,
        feedback: 'Triggers severe legal liabilities and economic damage without resolving inertia deficits.',
        xpMultiplier: 0.3
      },
      {
        id: 'opt_3',
        text: 'Rely solely on spot market spot purchases of LNG shipments arriving in 72 hours.',
        isOptimal: false,
        feedback: 'Grid collapse occurs in seconds/minutes, not days. Spot LNG transit times are useless for instantaneous stability.',
        xpMultiplier: 0.1
      }
    ],
    rewardXp: 200,
    badgeReward: 'Grid Sovereignty Commander'
  }
];
