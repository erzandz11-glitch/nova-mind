import { SimulationScenario, SoulboundBadge } from '../types';

export const EXPANDED_SIMULATION_SCENARIOS: SimulationScenario[] = [
  {
    id: "sim_predatory_vc",
    title: "The Predatory VC Term Sheet",
    subtitle: "Navigate a Series A funding trap with a high-profile but predatory investor.",
    category: "Business",
    initialTelemetry: {
      revenue: 50000,
      burnRate: 85000,
      stressIndex: 75,
      asymmetryScore: 90
    },
    turns: [
      {
        id: "turn_1",
        stepNumber: 1,
        title: "Crisis Milestone 1",
        situation: "A tier-1 VC offers $5M for a 25% stake, but the term sheet includes full participating preferred liquidation preferences and board control. Your runway is 3 months.",
        urgency: "Critical",
        choices: [
          {
            id: "vc_accept_all",
            label: "Accept the terms to secure the $5M immediately.",
            description: "",
            tacticalCategory: "Yield",
            impact: {
              revenueDelta: 0,
              burnRateDelta: 0,
              stressDelta: -20,
              asymmetryDelta: -40
            },
            consequences: "Runway extended significantly, but you've surrendered autonomy. Founder dilution risk at exit is extreme.",
            feedback: "You survived, but at what cost? This investor will likely fire you if growth stalls.",
            xpBonus: 50
          },
          {
            id: "vc_negotiate_hard",
            label: "Push back on participating preferred and demand standard 1x non-participating. Risk the deal.",
            description: "",
            tacticalCategory: "Hedge",
            impact: {
              revenueDelta: 0,
              burnRateDelta: 0,
              stressDelta: 20,
              asymmetryDelta: 10
            },
            consequences: "VC threatens to walk away. You have 48 hours to find a competing term sheet.",
            feedback: "A bold move. You maintained founder leverage, but the clock is ticking.",
            xpBonus: 150
          },
          {
            id: "vc_bridge_loan",
            label: "Decline and seek a bridge loan from existing angels to hit your next revenue milestone.",
            description: "",
            tacticalCategory: "Pivot",
            impact: {
              revenueDelta: 0,
              burnRateDelta: -15000,
              stressDelta: 30,
              asymmetryDelta: 25
            },
            consequences: "Runway extended by 2 months, but burn rate forces layoffs. Control retained.",
            feedback: "You chose autonomy over easy capital. Time to prove the unit economics.",
            xpBonus: 120
          }
        ]
      },
      {
        id: "turn_2",
        stepNumber: 2,
        title: "Crisis Milestone 2",
        situation: "The VC walked, and the bridge loan closed, but a key enterprise client just churned. You need to close a $100K ARR deal this week.",
        urgency: "Critical",
        choices: [
          {
            id: "vc_desperate_discount",
            label: "Offer a 50% discount on a 2-year upfront contract to a warm prospect.",
            description: "",
            tacticalCategory: "Yield",
            impact: {
              revenueDelta: 100000,
              burnRateDelta: 0,
              stressDelta: -10,
              asymmetryDelta: -15
            },
            consequences: "Deal closed. Cash flow secured, but LTV/CAC ratio takes a hit.",
            feedback: "Pragmatic survival. You traded long-term margin for short-term oxygen.",
            xpBonus: 80
          },
          {
            id: "vc_upsell_existing",
            label: "Launch an aggressive upsell campaign to existing accounts.",
            description: "",
            tacticalCategory: "Leverage",
            impact: {
              revenueDelta: 40000,
              burnRateDelta: 5000,
              stressDelta: 10,
              asymmetryDelta: 10
            },
            consequences: "Moderate success, but didn't hit the full $100K target. Burn rate increased slightly from campaign costs.",
            feedback: "Solid operational execution, though it fell short of the full rescue.",
            xpBonus: 100
          },
          {
            id: "vc_product_pivot",
            label: "Pause sales and push a highly-requested feature to reactivate the churned client.",
            description: "",
            tacticalCategory: "Pivot",
            impact: {
              revenueDelta: 0,
              burnRateDelta: 10000,
              stressDelta: 40,
              asymmetryDelta: -10
            },
            consequences: "Engineering delayed. Client remains churned. Runway critically low.",
            feedback: "A risky bet that didn't pay off. Engineering cycles shouldn't be driven by a single churned account.",
            xpBonus: 40
          }
        ]
      }
    ],
    postMortemVerdict: {
      asymmetricOutcome: "Survival in early-stage startups often requires balancing founder control with capital needs. The optimal path maintained leverage while securing non-dilutive or fair capital.",
      keyTakeaway: "Execute sovereign risk mitigation and asymmetric positioning under acute operational crisis.",
      xpReward: 350
    }
  },
  {
    id: "sim_supabase_zero_day",
    title: "The Auth Zero-Day Vulnerability",
    subtitle: "A critical authentication bypass is discovered in your core production database.",
    category: "Web Security",
    initialTelemetry: {
      revenue: 120000,
      burnRate: 40000,
      stressIndex: 85,
      asymmetryScore: 10
    },
    turns: [
      {
        id: "turn_1",
        stepNumber: 1,
        title: "Crisis Milestone 1",
        situation: "At 2 AM on Saturday, an anonymous security researcher emails you claiming they can bypass RLS (Row Level Security) on your Supabase instance, exposing user PII.",
        urgency: "Critical",
        choices: [
          {
            id: "sec_ignore_verify",
            label: "Assume it's a bluff or bounty hunter spam. Wait until Monday to investigate.",
            description: "",
            tacticalCategory: "Hedge",
            impact: {
              revenueDelta: 0,
              burnRateDelta: 0,
              stressDelta: -30,
              asymmetryDelta: -80
            },
            consequences: "The researcher publishes the exploit on Twitter. A threat actor dumps your database.",
            feedback: "Catastrophic failure. Never ignore critical vulnerability reports.",
            xpBonus: 10
          },
          {
            id: "sec_shut_down",
            label: "Immediately take the application offline to stop potential data exfiltration.",
            description: "",
            tacticalCategory: "Pivot",
            impact: {
              revenueDelta: -15000,
              burnRateDelta: 0,
              stressDelta: 40,
              asymmetryDelta: 50
            },
            consequences: "Downtime causes SLA breaches and customer anger, but data is secure while you patch.",
            feedback: "A heavy-handed but safe approach. You stopped the bleeding but damaged trust.",
            xpBonus: 100
          },
          {
            id: "sec_hot_patch",
            label: "Engage the researcher, request the PoC, and implement a hot-patch to RLS policies live.",
            description: "",
            tacticalCategory: "Leverage",
            impact: {
              revenueDelta: 0,
              burnRateDelta: 5000,
              stressDelta: 20,
              asymmetryDelta: 80
            },
            consequences: "You quickly secure the vulnerability without downtime. The researcher is paid a bounty.",
            feedback: "Masterful crisis management. You acted decisively and kept the system online.",
            xpBonus: 200
          }
        ]
      }
    ],
    postMortemVerdict: {
      asymmetricOutcome: "Incident response requires immediate triage. Engaging white-hat researchers constructively is far superior to denial or extreme downtime measures unless absolutely necessary.",
      keyTakeaway: "Execute sovereign risk mitigation and asymmetric positioning under acute operational crisis.",
      xpReward: 350
    }
  },
  {
    id: "sim_ddos_kernel_panic",
    title: "Planetary Cluster Kernel Panic",
    subtitle: "A massive volumetric DDoS attack triggers rolling kernel panics across your primary region.",
    category: "Deep IT",
    initialTelemetry: {
      revenue: 350000,
      burnRate: 120000,
      stressIndex: 95,
      asymmetryScore: 5
    },
    turns: [
      {
        id: "turn_1",
        stepNumber: 1,
        title: "Crisis Milestone 1",
        situation: "A 2 Tbps UDP flood hits your edge network. Mitigation hardware is overwhelmed, and backend nodes are entering OOM and kernel panic states. The load balancer is flapping.",
        urgency: "Critical",
        choices: [
          {
            id: "it_scale_up",
            label: "Auto-scale backend nodes by 300% to absorb the impact.",
            description: "",
            tacticalCategory: "Yield",
            impact: {
              revenueDelta: -20000,
              burnRateDelta: 80000,
              stressDelta: 20,
              asymmetryDelta: -40
            },
            consequences: "The attack scales with you. Cloud bill skyrockets and nodes continue to panic.",
            feedback: "Throwing compute at a volumetric DDoS is a losing battle against botnets.",
            xpBonus: 40
          },
          {
            id: "it_bgp_blackhole",
            label: "Initiate BGP RTBH (Remotely Triggered Black Hole) routing for the targeted IP blocks.",
            description: "",
            tacticalCategory: "Pivot",
            impact: {
              revenueDelta: -50000,
              burnRateDelta: 0,
              stressDelta: -10,
              asymmetryDelta: 30
            },
            consequences: "Targeted services go completely dark globally, but infrastructure stabilizes.",
            feedback: "A blunt instrument. You saved the cluster but completed the attacker's objective: downtime.",
            xpBonus: 90
          },
          {
            id: "it_anycast_cdn",
            label: "Emergency shift DNS to an aggressive Anycast CDN proxy with edge rate-limiting and JS challenges.",
            description: "",
            tacticalCategory: "Leverage",
            impact: {
              revenueDelta: -5000,
              burnRateDelta: 15000,
              stressDelta: 10,
              asymmetryDelta: 85
            },
            consequences: "Traffic is scrubbed at the edge. Legitimate users face captchas, but the backend recovers.",
            feedback: "Excellent architectural defense. Pushing mitigation to the edge is the right play.",
            xpBonus: 180
          }
        ]
      },
      {
        id: "turn_2",
        stepNumber: 2,
        title: "Crisis Milestone 2",
        situation: "The volumetric attack subsides, but now you notice a slow-loris layer 7 attack targeting expensive API endpoints, bypassing the edge cache.",
        urgency: "Critical",
        choices: [
          {
            id: "it_strict_waf",
            label: "Deploy a strict WAF ruleset blocking all non-standard user agents and locking down rate limits.",
            description: "",
            tacticalCategory: "Hedge",
            impact: {
              revenueDelta: -10000,
              burnRateDelta: 5000,
              stressDelta: -5,
              asymmetryDelta: 40
            },
            consequences: "Layer 7 attack mitigated, but false positives block major B2B API integrations.",
            feedback: "Effective, but collateral damage to legitimate integrations was too high.",
            xpBonus: 100
          },
          {
            id: "it_adaptive_auth",
            label: "Implement dynamic IP reputation scoring and require valid JWTs even for public endpoints temporarily.",
            description: "",
            tacticalCategory: "Leverage",
            impact: {
              revenueDelta: 0,
              burnRateDelta: 10000,
              stressDelta: 15,
              asymmetryDelta: 70
            },
            consequences: "Attackers drop off as they cannot generate valid JWTs. Legitimate traffic flows smoothly.",
            feedback: "Smart application-layer defense. You used authentication as a weapon against bots.",
            xpBonus: 160
          },
          {
            id: "it_timeout_tune",
            label: "Tune Nginx worker connections and decrease keepalive timeouts to drop slow connections.",
            description: "",
            tacticalCategory: "Pivot",
            impact: {
              revenueDelta: 0,
              burnRateDelta: 0,
              stressDelta: 5,
              asymmetryDelta: 50
            },
            consequences: "Alleviates the connection exhaustion, but sophisticated bots adapt.",
            feedback: "Good sysadmin hygiene, but insufficient against a dedicated layer 7 adversary.",
            xpBonus: 110
          }
        ]
      }
    ],
    postMortemVerdict: {
      asymmetricOutcome: "Infrastructure resilience requires defense in depth: edge scrubbing for volumetric attacks and intelligent application-layer controls for targeted exploits.",
      keyTakeaway: "Execute sovereign risk mitigation and asymmetric positioning under acute operational crisis.",
      xpReward: 350
    }
  },
  {
    id: "sim_grid_blackout_crisis",
    title: "Arctic Vortex Spark Spread",
    subtitle: "A polar vortex freezes natural gas pipelines while you manage a regional energy trading desk.",
    category: "Energy Economics",
    initialTelemetry: {
      revenue: 1500000,
      burnRate: 500000,
      stressIndex: 80,
      asymmetryScore: 40
    },
    turns: [
      {
        id: "turn_1",
        stepNumber: 1,
        title: "Crisis Milestone 1",
        situation: "Temperatures plummet to -20F. Natural gas wellheads freeze, causing spot prices to spike 400%. You hold physical delivery obligations for electricity tomorrow.",
        urgency: "Critical",
        choices: [
          {
            id: "energy_buy_spot",
            label: "Buy gas on the spot market at a massive premium to keep peaker plants running.",
            description: "",
            tacticalCategory: "Yield",
            impact: {
              revenueDelta: -800000,
              burnRateDelta: 0,
              stressDelta: 40,
              asymmetryDelta: -30
            },
            consequences: "You fulfill obligations but take a devastating financial loss.",
            feedback: "You survived the physical crisis but failed the financial one. A classic short squeeze.",
            xpBonus: 60
          },
          {
            id: "energy_demand_response",
            label: "Activate emergency demand-response contracts, paying industrial clients to shut down operations.",
            description: "",
            tacticalCategory: "Leverage",
            impact: {
              revenueDelta: -200000,
              burnRateDelta: 0,
              stressDelta: 20,
              asymmetryDelta: 60
            },
            consequences: "Load drops significantly. You avoid buying peak gas and maintain grid stability.",
            feedback: "Brilliant use of synthetic generation. Megawatts saved are as good as megawatts produced.",
            xpBonus: 190
          },
          {
            id: "energy_default",
            label: "Declare Force Majeure and default on delivery obligations.",
            description: "",
            tacticalCategory: "Pivot",
            impact: {
              revenueDelta: -50000,
              burnRateDelta: 0,
              stressDelta: 80,
              asymmetryDelta: -80
            },
            consequences: "Lawsuits fly. Regulators strip your trading license. Grid experiences rolling blackouts.",
            feedback: "Total systemic failure. Force Majeure is rarely upheld in predictable weather events.",
            xpBonus: 20
          }
        ]
      },
      {
        id: "turn_2",
        stepNumber: 2,
        title: "Crisis Milestone 2",
        situation: "The grid stabilizes, but wind generation unexpectedly drops to zero. Spark spread volatility is extreme.",
        urgency: "Critical",
        choices: [
          {
            id: "energy_arbitrage",
            label: "Enter a rapid algorithmic arbitrage strategy between nodal pricing points.",
            description: "",
            tacticalCategory: "Leverage",
            impact: {
              revenueDelta: 400000,
              burnRateDelta: 50000,
              stressDelta: 30,
              asymmetryDelta: 40
            },
            consequences: "Highly profitable, but algorithmic risk in a fragile market is dangerously high.",
            feedback: "Profitable but risky. You played the volatility well.",
            xpBonus: 140
          },
          {
            id: "energy_hedge_forward",
            label: "Lock in forward contracts for the rest of the week at elevated but stable prices.",
            description: "",
            tacticalCategory: "Hedge",
            impact: {
              revenueDelta: 100000,
              burnRateDelta: 0,
              stressDelta: -20,
              asymmetryDelta: 20
            },
            consequences: "Reduces risk. You miss out on massive profits but guarantee survival.",
            feedback: "Prudent risk management. Survival is paramount in energy markets.",
            xpBonus: 160
          },
          {
            id: "energy_short_power",
            label: "Short the power market, betting prices will collapse as the weather warms.",
            description: "",
            tacticalCategory: "Pivot",
            impact: {
              revenueDelta: -300000,
              burnRateDelta: 0,
              stressDelta: 50,
              asymmetryDelta: -40
            },
            consequences: "Weather forecast changes. Prices stay high. Margin calls trigger liquidation.",
            feedback: "Naked directional bets in extreme weather are essentially gambling. You lost.",
            xpBonus: 30
          }
        ]
      }
    ],
    postMortemVerdict: {
      asymmetricOutcome: "Energy trading during crises requires utilizing all physical and financial levers, especially demand-side management, to avoid astronomical spot market exposure.",
      keyTakeaway: "Execute sovereign risk mitigation and asymmetric positioning under acute operational crisis.",
      xpReward: 350
    }
  },
  {
    id: "sim_crispr_lab_outbreak",
    title: "Epigenetic Trial Contamination",
    subtitle: "A phase II longevity trial shows unauthorized off-target germline edits.",
    category: "Biotech",
    initialTelemetry: {
      revenue: 5000000,
      burnRate: 2000000,
      stressIndex: 90,
      asymmetryScore: 15
    },
    turns: [
      {
        id: "turn_1",
        stepNumber: 1,
        title: "Crisis Milestone 1",
        situation: "Routine sequencing of a patient cohort reveals unexpected CRISPR-Cas9 off-target edits in reproductive cells. The FDA is unaware.",
        urgency: "Critical",
        choices: [
          {
            id: "bio_cover_up",
            label: "Quietly adjust the protocol, silence the lab tech, and hope the edits don't manifest phenotypically.",
            description: "",
            tacticalCategory: "Yield",
            impact: {
              revenueDelta: 0,
              burnRateDelta: 0,
              stressDelta: 40,
              asymmetryDelta: -90
            },
            consequences: "A whistleblower alerts the FDA. Criminal charges filed. Company implodes.",
            feedback: "Ethical and legal suicide. Never cover up severe adverse events in clinical trials.",
            xpBonus: 0
          },
          {
            id: "bio_immediate_halt",
            label: "Halt the trial globally, self-report to the FDA, and initiate full patient isolation and observation.",
            description: "",
            tacticalCategory: "Pivot",
            impact: {
              revenueDelta: -3000000,
              burnRateDelta: 500000,
              stressDelta: -10,
              asymmetryDelta: 50
            },
            consequences: "Stock tanks 60%, but regulators appreciate the transparency. Patients are safe.",
            feedback: "The only correct ethical choice. The business suffers, but trust and safety are preserved.",
            xpBonus: 180
          },
          {
            id: "bio_internal_audit",
            label: "Pause dosing but don't notify regulators yet. Conduct an emergency 72-hour internal audit.",
            description: "",
            tacticalCategory: "Hedge",
            impact: {
              revenueDelta: 0,
              burnRateDelta: 100000,
              stressDelta: 30,
              asymmetryDelta: -10
            },
            consequences: "Audit confirms edits. Regulators are furious at the 72-hour delay.",
            feedback: "Hesitation in reporting critical safety data severely damages regulatory relationships.",
            xpBonus: 80
          }
        ]
      },
      {
        id: "turn_2",
        stepNumber: 2,
        title: "Crisis Milestone 2",
        situation: "The trial is halted. The media gets wind of 'accidental designer babies'. Public relations are in freefall.",
        urgency: "Critical",
        choices: [
          {
            id: "bio_pr_spin",
            label: "Hire crisis PR to blame a third-party vector manufacturing partner.",
            description: "",
            tacticalCategory: "Yield",
            impact: {
              revenueDelta: -1000000,
              burnRateDelta: 200000,
              stressDelta: 20,
              asymmetryDelta: -30
            },
            consequences: "Manufacturer sues for defamation. The public sees through the blame-shifting.",
            feedback: "Deflecting blame destroys credibility faster than the original mistake.",
            xpBonus: 50
          },
          {
            id: "bio_open_science",
            label: "Publish the raw data, open-source the failure analysis, and invite global experts to solve the off-target mechanism.",
            description: "",
            tacticalCategory: "Leverage",
            impact: {
              revenueDelta: -500000,
              burnRateDelta: 0,
              stressDelta: -20,
              asymmetryDelta: 80
            },
            consequences: "The scientific community rallies. The stock remains low, but the company pivots to building safer delivery vectors.",
            feedback: "A masterclass in scientific integrity. You turned a disaster into a foundation for future innovation.",
            xpBonus: 200
          },
          {
            id: "bio_liquidation",
            label: "Immediately pivot to liquidating IP assets to salvage value for investors before the stock hits zero.",
            description: "",
            tacticalCategory: "Pivot",
            impact: {
              revenueDelta: 2000000,
              burnRateDelta: -2000000,
              stressDelta: -40,
              asymmetryDelta: 10
            },
            consequences: "Company is sold for scraps. Patients are left without long-term monitoring support.",
            feedback: "A purely financial exit that abandons the clinical and ethical responsibility.",
            xpBonus: 90
          }
        ]
      }
    ],
    postMortemVerdict: {
      asymmetricOutcome: "In frontier biotechnology, ethical transparency and patient safety supersede all business objectives. Radical transparency is the only viable long-term strategy.",
      keyTakeaway: "Execute sovereign risk mitigation and asymmetric positioning under acute operational crisis.",
      xpReward: 350
    }
  },
  {
    id: "sim_flash_crash_liquidity",
    title: "Black Swan Delta-Neutral Collapse",
    subtitle: "A market-wide flash crash breaks the correlations in your quantitative trading models.",
    category: "Quant Finance",
    initialTelemetry: {
      revenue: 10000000,
      burnRate: 500000,
      stressIndex: 75,
      asymmetryScore: 30
    },
    turns: [
      {
        id: "turn_1",
        stepNumber: 1,
        title: "Crisis Milestone 1",
        situation: "An algorithmic loop in the S&P 500 futures causes a 9% drop in 3 minutes. Your statistical arbitrage pairs diverge wildly, triggering margin calls.",
        urgency: "Critical",
        choices: [
          {
            id: "quant_liquidate_all",
            label: "Market sell everything to flatten the book and stop the bleeding.",
            description: "",
            tacticalCategory: "Pivot",
            impact: {
              revenueDelta: -4000000,
              burnRateDelta: 0,
              stressDelta: -30,
              asymmetryDelta: -20
            },
            consequences: "You lock in devastating losses at the absolute bottom of the flash crash.",
            feedback: "Panic selling in a liquidity vacuum guarantees maximum slippage.",
            xpBonus: 40
          },
          {
            id: "quant_hold_faith",
            label: "Override risk limits and hold positions, betting on mean reversion.",
            description: "",
            tacticalCategory: "Yield",
            impact: {
              revenueDelta: -8000000,
              burnRateDelta: 0,
              stressDelta: 50,
              asymmetryDelta: -50
            },
            consequences: "Prime broker forcibly liquidates your portfolio. Fund blows up.",
            feedback: "The market can remain irrational longer than you can remain solvent. You ignored risk limits.",
            xpBonus: 20
          },
          {
            id: "quant_hedge_tail",
            label: "Buy extremely out-of-the-money VIX calls and selectively trim the most illiquid legs.",
            description: "",
            tacticalCategory: "Hedge",
            impact: {
              revenueDelta: -1000000,
              burnRateDelta: 200000,
              stressDelta: -10,
              asymmetryDelta: 60
            },
            consequences: "The VIX hedge pays off massively as volatility spikes, offsetting the stat-arb losses.",
            feedback: "Textbook tail-risk management. You bought insurance when the house was on fire, but it saved the fund.",
            xpBonus: 180
          }
        ]
      },
      {
        id: "turn_2",
        stepNumber: 2,
        title: "Crisis Milestone 2",
        situation: "The market rebounds violently. You have capital left, but your LP investors are panicking and demanding redemptions.",
        urgency: "Critical",
        choices: [
          {
            id: "quant_gate_fund",
            label: "Implement a 'gate' freezing all LP withdrawals to protect remaining capital.",
            description: "",
            tacticalCategory: "Hedge",
            impact: {
              revenueDelta: 0,
              burnRateDelta: 0,
              stressDelta: 40,
              asymmetryDelta: -10
            },
            consequences: "LPs are furious. Lawsuits threatened. The fund survives but brand is permanently tarnished.",
            feedback: "Gating is a nuclear option. It preserves capital but destroys the franchise.",
            xpBonus: 90
          },
          {
            id: "quant_transparent_call",
            label: "Host an immediate all-hands LP call. Explain the hedge mechanism that saved the fund.",
            description: "",
            tacticalCategory: "Leverage",
            impact: {
              revenueDelta: 0,
              burnRateDelta: 0,
              stressDelta: -20,
              asymmetryDelta: 40
            },
            consequences: "Transparency calms nerves. Most LPs cancel redemption requests.",
            feedback: "Excellent stakeholder management. Institutional investors respect transparency over obfuscation.",
            xpBonus: 160
          },
          {
            id: "quant_double_down",
            label: "Leverage up on the rebound to recoup the initial flash crash losses immediately.",
            description: "",
            tacticalCategory: "Yield",
            impact: {
              revenueDelta: 2000000,
              burnRateDelta: 0,
              stressDelta: 30,
              asymmetryDelta: -30
            },
            consequences: "Revenge trading works briefly, then a secondary aftershock wipes out the gains.",
            feedback: "Revenge trading is emotional, not quantitative. You violated discipline.",
            xpBonus: 60
          }
        ]
      }
    ],
    postMortemVerdict: {
      asymmetricOutcome: "Systematic strategies fail during structural market breaks. True alpha in crises comes from disciplined tail-risk hedging and transparent LP communication.",
      keyTakeaway: "Execute sovereign risk mitigation and asymmetric positioning under acute operational crisis.",
      xpReward: 350
    }
  },
  {
    id: "sim_dao_governance_takeover",
    title: "The 51% Governance Attack",
    subtitle: "A malicious whale uses a flash loan to hijack your DeFi protocol's governance.",
    category: "Crypto",
    initialTelemetry: {
      revenue: 8000000,
      burnRate: 100000,
      stressIndex: 85,
      asymmetryScore: 10
    },
    turns: [
      {
        id: "turn_1",
        stepNumber: 1,
        title: "Crisis Milestone 1",
        situation: "An attacker uses a flash loan to borrow millions of governance tokens, proposing a vote to drain the $50M protocol treasury to their own wallet.",
        urgency: "Critical",
        choices: [
          {
            id: "dao_multisig_veto",
            label: "Use the developer multisig 'god mode' to unilaterally veto the proposal and pause the protocol.",
            description: "",
            tacticalCategory: "Pivot",
            impact: {
              revenueDelta: 0,
              burnRateDelta: 0,
              stressDelta: -10,
              asymmetryDelta: 30
            },
            consequences: "Treasury saved. However, Crypto Twitter decries the project as highly centralized.",
            feedback: "You saved the funds but broke the illusion of decentralization. A necessary evil.",
            xpBonus: 120
          },
          {
            id: "dao_counter_buy",
            label: "Attempt to buy up governance tokens on the open market to vote 'No'.",
            description: "",
            tacticalCategory: "Yield",
            impact: {
              revenueDelta: -2000000,
              burnRateDelta: 0,
              stressDelta: 40,
              asymmetryDelta: -40
            },
            consequences: "You get front-run by MEV bots. You run out of capital. Proposal passes. Treasury drained.",
            feedback: "Fighting a flash loan with spot capital is mathematically impossible.",
            xpBonus: 10
          },
          {
            id: "dao_whitehat_hack",
            label: "Deploy a whitehat counter-exploit to drain the treasury to a secure recovery vault before the proposal executes.",
            description: "",
            tacticalCategory: "Leverage",
            impact: {
              revenueDelta: 0,
              burnRateDelta: 50000,
              stressDelta: 20,
              asymmetryDelta: 80
            },
            consequences: "Funds secured in a new vault. The attacker's transaction fails. Complex legal gray area.",
            feedback: "In the dark forest of DeFi, sometimes you have to out-hack the hacker.",
            xpBonus: 180
          }
        ]
      },
      {
        id: "turn_2",
        stepNumber: 2,
        title: "Crisis Milestone 2",
        situation: "The treasury is safe in a multisig, but the community is split. Half wants the funds returned to the vulnerable smart contract; half wants a full migration to a v2.",
        urgency: "Critical",
        choices: [
          {
            id: "dao_v2_migration",
            label: "Launch a v2 token, airdrop to original holders (excluding the attacker), and migrate the liquidity.",
            description: "",
            tacticalCategory: "Leverage",
            impact: {
              revenueDelta: -500000,
              burnRateDelta: 200000,
              stressDelta: -10,
              asymmetryDelta: 60
            },
            consequences: "A clean slate. Community trust slowly rebuilds in a more secure architecture.",
            feedback: "Hard forks and migrations are painful but necessary to purge toxic structural debt.",
            xpBonus: 160
          },
          {
            id: "dao_return_funds",
            label: "Return funds to the original contract and patch the governance module.",
            description: "",
            tacticalCategory: "Hedge",
            impact: {
              revenueDelta: 0,
              burnRateDelta: 50000,
              stressDelta: 30,
              asymmetryDelta: 10
            },
            consequences: "A new zero-day in the patch is immediately exploited. Treasury drained for real.",
            feedback: "Never return funds to a compromised architecture. Patches under pressure are flawed.",
            xpBonus: 30
          },
          {
            id: "dao_rage_quit",
            label: "Enable a 'rage quit' function, allowing users to withdraw their pro-rata share of the treasury.",
            description: "",
            tacticalCategory: "Pivot",
            impact: {
              revenueDelta: -4000000,
              burnRateDelta: 0,
              stressDelta: -30,
              asymmetryDelta: 20
            },
            consequences: "TVL plummets as users exit, but legal liability is minimized.",
            feedback: "A graceful wind-down. You protected users but ended the protocol's growth.",
            xpBonus: 100
          }
        ]
      }
    ],
    postMortemVerdict: {
      asymmetricOutcome: "DeFi governance is highly susceptible to capital-as-a-weapon attacks. Timelocks, vetoes, and resilient tokenomics are required to prevent flash-loan dictatorships.",
      keyTakeaway: "Execute sovereign risk mitigation and asymmetric positioning under acute operational crisis.",
      xpReward: 350
    }
  },
  {
    id: "sim_ai_swarm_hallucination",
    title: "Multi-Agent Hallucination Cascade",
    subtitle: "Your fleet of autonomous B2B sales AI agents begins hallucinating and making impossible promises.",
    category: "Advanced AI",
    initialTelemetry: {
      revenue: 400000,
      burnRate: 150000,
      stressIndex: 70,
      asymmetryScore: 20
    },
    turns: [
      {
        id: "turn_1",
        stepNumber: 1,
        title: "Crisis Milestone 1",
        situation: "A system update causes your LLM agents to invent features that don't exist. They just closed $500K in enterprise contracts based on these hallucinations.",
        urgency: "Critical",
        choices: [
          {
            id: "ai_honor_contracts",
            label: "Command engineering to build the hallucinated features immediately to honor the contracts.",
            description: "",
            tacticalCategory: "Yield",
            impact: {
              revenueDelta: 500000,
              burnRateDelta: 400000,
              stressDelta: 50,
              asymmetryDelta: -30
            },
            consequences: "Engineering burns out. Tech debt skyrockets. The features are buggy and unusable.",
            feedback: "Letting an LLM hallucination dictate your product roadmap is a recipe for disaster.",
            xpBonus: 40
          },
          {
            id: "ai_kill_switch",
            label: "Hit the kill switch on all agents, halting all automated sales.",
            description: "",
            tacticalCategory: "Pivot",
            impact: {
              revenueDelta: -100000,
              burnRateDelta: 0,
              stressDelta: -10,
              asymmetryDelta: 40
            },
            consequences: "Revenue halts. You have to manually call clients to apologize and cancel the fake contracts.",
            feedback: "Painful but necessary. You stopped the bleeding and owned the mistake.",
            xpBonus: 140
          },
          {
            id: "ai_human_in_loop",
            label: "Downgrade agents to 'draft mode' requiring human approval before sending any message.",
            description: "",
            tacticalCategory: "Leverage",
            impact: {
              revenueDelta: 100000,
              burnRateDelta: 50000,
              stressDelta: 10,
              asymmetryDelta: 60
            },
            consequences: "Sales slow down significantly, but quality control is restored without full downtime.",
            feedback: "Excellent fallback strategy. Human-in-the-loop is the optimal failsafe for agentic workflows.",
            xpBonus: 180
          }
        ]
      },
      {
        id: "turn_2",
        stepNumber: 2,
        title: "Crisis Milestone 2",
        situation: "The immediate crisis is managed, but you must prevent future hallucinations. The foundational model is a black box.",
        urgency: "Critical",
        choices: [
          {
            id: "ai_fine_tuning",
            label: "Spend $100K on fine-tuning a custom open-source model on strict sales transcripts.",
            description: "",
            tacticalCategory: "Leverage",
            impact: {
              revenueDelta: 0,
              burnRateDelta: 100000,
              stressDelta: -10,
              asymmetryDelta: 70
            },
            consequences: "Hallucinations drop by 95%. The system becomes robust and proprietary.",
            feedback: "A heavy investment that pays off in long-term defensibility and control.",
            xpBonus: 170
          },
          {
            id: "ai_prompt_engineering",
            label: "Add massive negative prompts and system instructions to the existing model.",
            description: "",
            tacticalCategory: "Hedge",
            impact: {
              revenueDelta: 0,
              burnRateDelta: 10000,
              stressDelta: 0,
              asymmetryDelta: 20
            },
            consequences: "Agents become overly conservative and refuse to answer basic client questions.",
            feedback: "Prompt engineering has limits. Over-constraining an LLM degrades its core utility.",
            xpBonus: 90
          },
          {
            id: "ai_rag_enforcement",
            label: "Implement a strict RAG (Retrieval-Augmented Generation) pipeline and a secondary 'evaluator' LLM to check outputs.",
            description: "",
            tacticalCategory: "Leverage",
            impact: {
              revenueDelta: 0,
              burnRateDelta: 30000,
              stressDelta: -5,
              asymmetryDelta: 85
            },
            consequences: "Latency increases slightly, but accuracy is guaranteed to ground truth documents.",
            feedback: "State-of-the-art architecture. Evaluator models + RAG are the gold standard for agentic reliability.",
            xpBonus: 200
          }
        ]
      }
    ],
    postMortemVerdict: {
      asymmetricOutcome: "Agentic AI systems cannot be deployed without deterministic guardrails. Relying solely on prompt engineering is insufficient; structural RAG and human-in-the-loop failsafes are mandatory.",
      keyTakeaway: "Execute sovereign risk mitigation and asymmetric positioning under acute operational crisis.",
      xpReward: 350
    }
  },
  {
    id: "sim_indie_game_launch_day",
    title: "Viral Steam Launch Meltdown",
    subtitle: "Your indie game goes viral, but the multiplayer servers are melting and corrupting save data.",
    category: "Game Dev",
    initialTelemetry: {
      revenue: 800000,
      burnRate: 20000,
      stressIndex: 95,
      asymmetryScore: 40
    },
    turns: [
      {
        id: "turn_1",
        stepNumber: 1,
        title: "Crisis Milestone 1",
        situation: "You expected 5,000 players; you have 150,000 concurrent. The matchmaking server is crashing, and players report losing 10+ hours of progression.",
        urgency: "Critical",
        choices: [
          {
            id: "game_apology_tweet",
            label: "Tweet an apology and promise to fix it soon, while leaving the broken servers online.",
            description: "",
            tacticalCategory: "Yield",
            impact: {
              revenueDelta: -200000,
              burnRateDelta: 0,
              stressDelta: 30,
              asymmetryDelta: -40
            },
            consequences: "Steam reviews plummet to 'Overwhelmingly Negative'. Refund requests surge.",
            feedback: "Communication is good, but leaving players in a data-corrupting environment destroys trust.",
            xpBonus: 30
          },
          {
            id: "game_server_wipe",
            label: "Take servers offline, wipe all corrupted databases, and restart fresh.",
            description: "",
            tacticalCategory: "Pivot",
            impact: {
              revenueDelta: -100000,
              burnRateDelta: 5000,
              stressDelta: 10,
              asymmetryDelta: 20
            },
            consequences: "Players are furious about the wipe, but the new database schema handles the load.",
            feedback: "A harsh but necessary technical reset. You ripped the band-aid off.",
            xpBonus: 100
          },
          {
            id: "game_queue_system",
            label: "Implement a strict login queue, take servers down for emergency patching, and write a script to salvage corrupted saves.",
            description: "",
            tacticalCategory: "Leverage",
            impact: {
              revenueDelta: 0,
              burnRateDelta: 15000,
              stressDelta: -10,
              asymmetryDelta: 80
            },
            consequences: "Players wait in queues, but data is saved. Reviews stabilize to 'Mixed'.",
            feedback: "Exceptional crisis management. Queues buy time, and data recovery preserves goodwill.",
            xpBonus: 190
          }
        ]
      },
      {
        id: "turn_2",
        stepNumber: 2,
        title: "Crisis Milestone 2",
        situation: "The servers are stable via a queue, but a streamer with 100k viewers discovers a duplication glitch ruining the game's economy.",
        urgency: "Critical",
        choices: [
          {
            id: "game_ban_wave",
            label: "Auto-ban anyone using the glitch and confiscate the duplicated items.",
            description: "",
            tacticalCategory: "Hedge",
            impact: {
              revenueDelta: -50000,
              burnRateDelta: 0,
              stressDelta: 20,
              asymmetryDelta: 10
            },
            consequences: "False positives lead to innocent players being banned. PR nightmare ensues.",
            feedback: "Heavy-handed moderation without perfect logs causes unacceptable collateral damage.",
            xpBonus: 70
          },
          {
            id: "game_embrace_glitch",
            label: "Turn the glitch into a 'feature' for a weekend event, then patch it cleanly on Monday.",
            description: "",
            tacticalCategory: "Pivot",
            impact: {
              revenueDelta: 50000,
              burnRateDelta: 0,
              stressDelta: -20,
              asymmetryDelta: 70
            },
            consequences: "Players love the chaotic weekend. You patch it Monday without punishing the community.",
            feedback: "Brilliant community management. You turned a bug into a marketing event.",
            xpBonus: 170
          },
          {
            id: "game_rollback",
            label: "Roll back the entire server database by 24 hours.",
            description: "",
            tacticalCategory: "Yield",
            impact: {
              revenueDelta: -150000,
              burnRateDelta: 0,
              stressDelta: 40,
              asymmetryDelta: -30
            },
            consequences: "Legitimate players lose their weekend progress. En masse uninstalls.",
            feedback: "Rollbacks are the ultimate betrayal of player time. Economy isn't worth player retention.",
            xpBonus: 20
          }
        ]
      }
    ],
    postMortemVerdict: {
      asymmetricOutcome: "In live-ops game development, protecting player data and respecting their time are the absolute highest priorities. Technical debt always cashes in on launch day.",
      keyTakeaway: "Execute sovereign risk mitigation and asymmetric positioning under acute operational crisis.",
      xpReward: 350
    }
  },
  {
    id: "sim_burn_rate_death_spiral",
    title: "The Burn Rate Death Spiral",
    subtitle: "Your enterprise SaaS is bleeding cash, and you must pivot to self-serve or die.",
    category: "Digital Business",
    initialTelemetry: {
      revenue: 200000,
      burnRate: 350000,
      stressIndex: 85,
      asymmetryScore: -10
    },
    turns: [
      {
        id: "turn_1",
        stepNumber: 1,
        title: "Crisis Milestone 1",
        situation: "You have 4 months of runway. Your sales cycle is 6 months long. You cannot close enough enterprise deals to survive.",
        urgency: "Critical",
        choices: [
          {
            id: "biz_fire_sales",
            label: "Fire the expensive enterprise sales team immediately and cut marketing.",
            description: "",
            tacticalCategory: "Pivot",
            impact: {
              revenueDelta: -50000,
              burnRateDelta: -200000,
              stressDelta: 20,
              asymmetryDelta: 40
            },
            consequences: "Runway extended to 10 months. Morale plummets, but you have time to build a self-serve motion.",
            feedback: "Brutal but mathematically necessary. You cannot outrun a 6-month sales cycle with 4 months of cash.",
            xpBonus: 150
          },
          {
            id: "biz_hail_mary",
            label: "Spend the remaining cash on a massive conference sponsorship hoping for a whale client.",
            description: "",
            tacticalCategory: "Yield",
            impact: {
              revenueDelta: 0,
              burnRateDelta: 150000,
              stressDelta: 60,
              asymmetryDelta: -80
            },
            consequences: "You get leads, but none close in time. The company runs out of cash and goes bankrupt.",
            feedback: "Hopium is not a strategy. You gambled the company and lost.",
            xpBonus: 10
          },
          {
            id: "biz_bridge_round",
            label: "Beg existing investors for a 'down round' bridge at a 70% valuation haircut.",
            description: "",
            tacticalCategory: "Hedge",
            impact: {
              revenueDelta: 0,
              burnRateDelta: 0,
              stressDelta: -10,
              asymmetryDelta: -20
            },
            consequences: "Founders are massively diluted. Toxic cap table prevents future funding.",
            feedback: "You survived, but the company is nearly un-investable moving forward.",
            xpBonus: 80
          }
        ]
      },
      {
        id: "turn_2",
        stepNumber: 2,
        title: "Crisis Milestone 2",
        situation: "You cut the burn, but revenue is stagnant. You need to launch a $99/mo self-serve product, but the enterprise architecture is too complex for easy onboarding.",
        urgency: "Critical",
        choices: [
          {
            id: "biz_fake_it",
            label: "Launch a 'self-serve' landing page, but manually onboard users behind the scenes.",
            description: "",
            tacticalCategory: "Leverage",
            impact: {
              revenueDelta: 20000,
              burnRateDelta: 10000,
              stressDelta: 30,
              asymmetryDelta: 70
            },
            consequences: "Unscalable, but validates the pricing model and generates immediate cash flow.",
            feedback: "Do things that don't scale. Excellent Paul Graham-style hustle to validate the pivot.",
            xpBonus: 180
          },
          {
            id: "biz_rebuild",
            label: "Spend 3 months rebuilding the architecture for seamless PLG (Product-Led Growth).",
            description: "",
            tacticalCategory: "Pivot",
            impact: {
              revenueDelta: 0,
              burnRateDelta: 50000,
              stressDelta: 40,
              asymmetryDelta: 10
            },
            consequences: "You run out of runway 2 weeks before the launch.",
            feedback: "Perfection is the enemy of survival. You engineered yourself into the grave.",
            xpBonus: 40
          },
          {
            id: "biz_freemium",
            label: "Make the core product entirely free and try to monetize data.",
            description: "",
            tacticalCategory: "Yield",
            impact: {
              revenueDelta: 0,
              burnRateDelta: 0,
              stressDelta: 10,
              asymmetryDelta: -40
            },
            consequences: "User base grows, but server costs spike and data monetization fails.",
            feedback: "Freemium requires massive scale and capital. You had neither.",
            xpBonus: 50
          }
        ]
      }
    ],
    postMortemVerdict: {
      asymmetricOutcome: "When facing a burn-rate death spiral, immediate, aggressive cost-cutting combined with 'unscalable' validation of a new revenue model is the only path to survival.",
      keyTakeaway: "Execute sovereign risk mitigation and asymmetric positioning under acute operational crisis.",
      xpReward: 350
    }
  }
];

export const EXPANDED_SOULBOUND_BADGES: SoulboundBadge[] = [
  {
    id: "badge_biz_survivor",
    title: "Term Sheet Survivor",
    icon: "ShieldAlert",
    description: "Successfully navigated predatory VC terms without losing board control.",
    rarity: "Epic",
    unlocked: true,
    category: "Business",
    perk: "+10% starting runway in startup simulations."
  },
  {
    id: "badge_biz_hustler",
    title: "Concierge MVP",
    icon: "Handshake",
    description: "Validated a product pivot by doing things that don't scale.",
    rarity: "Rare",
    unlocked: false,
    category: "Digital Business",
    perk: "Unlocks hidden 'manual execution' choices in early-stage scenarios."
  },
  {
    id: "badge_dev_zero_day",
    title: "Zero-Day Architect",
    icon: "CodeXml",
    description: "Patched a critical vulnerability in production with zero downtime.",
    rarity: "Legendary",
    unlocked: true,
    category: "Web Security",
    perk: "Reduces stress index impact of technical debt by 15%."
  },
  {
    id: "badge_dev_whitehat",
    title: "Bounty Hunter",
    icon: "Bug",
    description: "Successfully collaborated with external security researchers.",
    rarity: "Common",
    unlocked: false,
    category: "Web Security",
    perk: "Slightly increases starting asymmetry score in dev scenarios."
  },
  {
    id: "badge_it_edge_lord",
    title: "Edge Lord",
    icon: "Network",
    description: "Mitigated a planetary-scale DDoS using advanced Anycast routing.",
    rarity: "Epic",
    unlocked: true,
    category: "Deep IT",
    perk: "+20% resistance to infrastructure collapse events."
  },
  {
    id: "badge_it_waf_master",
    title: "WAF Whisperer",
    icon: "ShieldCheck",
    description: "Defeated an advanced layer 7 slow-loris attack.",
    rarity: "Rare",
    unlocked: false,
    category: "Deep IT",
    perk: "Unlocks advanced firewall configuration options in IT sims."
  },
  {
    id: "badge_energy_megawatt",
    title: "Negawatt Trader",
    icon: "Zap",
    description: "Utilized demand-response to survive a grid collapse.",
    rarity: "Epic",
    unlocked: true,
    category: "Energy Economics",
    perk: "Increases yield of synthetic assets in trading simulations."
  },
  {
    id: "badge_energy_hedger",
    title: "Forward Thinker",
    icon: "TrendingUp",
    description: "Successfully hedged against extreme market volatility.",
    rarity: "Common",
    unlocked: false,
    category: "Energy Economics",
    perk: "Reduces financial penalty of wrong choices by 5%."
  },
  {
    id: "badge_bio_ethicist",
    title: "Radical Transparency",
    icon: "Dna",
    description: "Halted a clinical trial and self-reported to protect patients.",
    rarity: "Sovereign",
    unlocked: true,
    category: "Biotech",
    perk: "Massive trust multiplier. Regulators are more forgiving in all sims."
  },
  {
    id: "badge_bio_open_science",
    title: "Open Source Science",
    icon: "Microscope",
    description: "Crowdsourced a solution to a complex epigenetic failure.",
    rarity: "Epic",
    unlocked: false,
    category: "Biotech",
    perk: "Unlocks collaboration options with academic institutions."
  },
  {
    id: "badge_quant_tail_risk",
    title: "Tail Risk Manager",
    icon: "LineChart",
    description: "Bought insurance when the house was on fire, saving the fund.",
    rarity: "Legendary",
    unlocked: true,
    category: "Quant Finance",
    perk: "Prevents immediate game-over on black swan events."
  },
  {
    id: "badge_quant_communicator",
    title: "LP Whisperer",
    icon: "Users",
    description: "Prevented a bank run by transparently communicating with investors.",
    rarity: "Rare",
    unlocked: false,
    category: "Quant Finance",
    perk: "Increases grace period for capital raises."
  },
  {
    id: "badge_crypto_whitehat",
    title: "Dark Forest Ranger",
    icon: "Bitcoin",
    description: "Counter-exploited a hacker to save a DAO treasury.",
    rarity: "Epic",
    unlocked: true,
    category: "Crypto",
    perk: "Unlocks aggressive counter-measures in Web3 scenarios."
  },
  {
    id: "badge_crypto_forker",
    title: "Hard Fork Hero",
    icon: "GitBranch",
    description: "Successfully migrated a compromised community to a secure v2.",
    rarity: "Rare",
    unlocked: false,
    category: "Crypto",
    perk: "Reduces cost of pivoting business models by 10%."
  },
  {
    id: "badge_ai_evaluator",
    title: "Ground Truth",
    icon: "BrainCircuit",
    description: "Implemented rigorous evaluator LLMs to halt hallucinations.",
    rarity: "Epic",
    unlocked: true,
    category: "Advanced AI",
    perk: "Increases reliability of automated choices in AI scenarios."
  },
  {
    id: "badge_ai_human_loop",
    title: "The Human Element",
    icon: "UserCheck",
    description: "Used human-in-the-loop failsafes to save enterprise contracts.",
    rarity: "Common",
    unlocked: false,
    category: "Advanced AI",
    perk: "+5% bonus to all 'Leverage' tactical choices."
  },
  {
    id: "badge_game_queue",
    title: "Queue Simulator",
    icon: "Gamepad2",
    description: "Managed a viral launch meltdown without losing player data.",
    rarity: "Legendary",
    unlocked: true,
    category: "Game Dev",
    perk: "Grants one 'Time Stop' ability to pause stress accumulation."
  },
  {
    id: "badge_game_community",
    title: "It's Not a Bug",
    icon: "Heart",
    description: "Turned a game-breaking glitch into a beloved community event.",
    rarity: "Epic",
    unlocked: false,
    category: "Game Dev",
    perk: "Random chance to convert a negative outcome into a slight positive."
  },
  {
    id: "badge_biz_slash",
    title: "Burn Rate Slasher",
    icon: "Scissors",
    description: "Made brutal cuts to survive a runway death spiral.",
    rarity: "Rare",
    unlocked: true,
    category: "Digital Business",
    perk: "Allows operation with 0 runway for 1 extra turn."
  },
  {
    id: "badge_biz_phoenix",
    title: "The Phoenix Pivot",
    icon: "Flame",
    description: "Successfully transitioned from dying enterprise to thriving self-serve.",
    rarity: "Epic",
    unlocked: false,
    category: "Digital Business",
    perk: "Massive XP multiplier when successfully completing a Pivot strategy."
  }
];
