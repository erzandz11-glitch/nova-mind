import React, { useState, useEffect } from 'react';
import { Shield, CheckCircle2, Zap, ArrowRight, AlertCircle } from 'lucide-react';
import { soundEngine } from '../../lib/audio';

interface MindsetStressTestSimulatorProps {
  onAddXp?: (amount: number) => void;
}

interface CrisisChoice {
  id: string;
  label: string;
  reactionType: string;
  impact: {
    amygdalaDelta: number;
    stoicPoiseDelta: number;
    rationalityDelta: number;
  };
  feedback: string;
  isOptimal: boolean;
}

interface CrisisCase {
  id: string;
  title: string;
  scenario: string;
  countdownSeconds: number;
  choices: CrisisChoice[];
}

export const MindsetStressTestSimulator: React.FC<MindsetStressTestSimulatorProps> = ({ onAddXp }) => {
  const cases: CrisisCase[] = [
    {
      id: 'case_1',
      title: 'Sudden 85% Valuation Collapse & Co-Founder Ultimatum',
      scenario:
        'Your lead investor withdraws a $15M term sheet due to macro liquidity freezing, leaving 2 weeks of runway. Your co-founder panics, storms your office, and threatens to resign publicly unless you hand over 80% equity control.',
      countdownSeconds: 20,
      choices: [
        {
          id: 'c1_1',
          label: 'Cave to the ultimatum immediately to keep the company from dying today.',
          reactionType: 'Panic Conciliation',
          impact: { amygdalaDelta: +25, stoicPoiseDelta: -30, rationalityDelta: -35 },
          feedback:
            'Violates Dichotomy of Control: Conciliating emotional blackmail destroys long-term sovereignty and creates catastrophic governance deadlock.',
          isOptimal: false
        },
        {
          id: 'c1_2',
          label: 'Execute Premeditatio Malorum: Take a deep breath, calmly accept his resignation if offered, cut non-essential burn to zero within 4 hours, and offer clients a prepaid 2-year enterprise license to secure bridge cash flow.',
          reactionType: 'Stoic Poise',
          impact: { amygdalaDelta: -20, stoicPoiseDelta: +35, rationalityDelta: +40 },
          feedback:
            'Decoupling emotional terror from tactical execution unlocks asymmetric survival leverage.',
          isOptimal: true
        },
        {
          id: 'c1_3',
          label: 'Hire an aggressive corporate litigation attorney to threaten him with lawsuits.',
          reactionType: 'Ego Retaliation',
          impact: { amygdalaDelta: +15, stoicPoiseDelta: -15, rationalityDelta: -20 },
          feedback:
            'Ego trap: Burning your remaining 2 weeks of liquid cash on lawyers guarantees total insolvency.',
          isOptimal: false
        }
      ]
    },
    {
      id: 'case_2',
      title: 'Targeted Memetic Smear Campaign on Global Media',
      scenario:
        'A competitor finances a coordinated smear campaign accusing your core infrastructure of data theft. The topic is trending and clients are inquiring for explanations.',
      countdownSeconds: 20,
      choices: [
        {
          id: 'c2_1',
          label: 'Post an angry, emotional 20-tweet rebuttal defending your honor and attacking the competitor CEO.',
          reactionType: 'Reactive Defensiveness',
          impact: { amygdalaDelta: +30, stoicPoiseDelta: -25, rationalityDelta: -30 },
          feedback:
            'Emotional public defensiveness feeds the algorithm and amplifies your adversary’s smear attack.',
          isOptimal: false
        },
        {
          id: 'c2_2',
          label: 'Publish an immutable cryptographic third-party security audit log, open-source the data flow code, and send a calm, factual memo to enterprise client CTOs with verified proofs.',
          reactionType: 'Stoic Poise',
          impact: { amygdalaDelta: -15, stoicPoiseDelta: +30, rationalityDelta: +35 },
          feedback:
            'Irrefutable cryptographic transparency destroys false narratives without burning cognitive bandwidth.',
          isOptimal: true
        }
      ]
    }
  ];

  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<CrisisChoice | null>(null);
  const [amygdalaLevel, setAmygdalaLevel] = useState(68);
  const [stoicPoise, setStoicPoise] = useState(72);
  const [rationalityScore, setRationalityScore] = useState(75);
  const [timeLeft, setTimeLeft] = useState(cases[0].countdownSeconds);
  const [claimedReward, setClaimedReward] = useState(false);

  const activeCase = cases[activeCaseIndex];

  useEffect(() => {
    if (selectedChoice) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [activeCaseIndex, selectedChoice]);

  const handleMakeChoice = (choice: CrisisChoice) => {
    setSelectedChoice(choice);
    if (choice.isOptimal) {
      soundEngine.playCorrect();
    } else {
      soundEngine.playIncorrect();
    }

    setAmygdalaLevel((prev) => Math.max(10, Math.min(100, prev + choice.impact.amygdalaDelta)));
    setStoicPoise((prev) => Math.max(10, Math.min(100, prev + choice.impact.stoicPoiseDelta)));
    setRationalityScore((prev) => Math.max(10, Math.min(100, prev + choice.impact.rationalityDelta)));
  };

  const handleNextCase = () => {
    soundEngine.playClick();
    const nextIdx = (activeCaseIndex + 1) % cases.length;
    setActiveCaseIndex(nextIdx);
    setSelectedChoice(null);
    setTimeLeft(cases[nextIdx].countdownSeconds);
  };

  const handleClaimXp = () => {
    if (claimedReward) return;
    soundEngine.playLevelUp();
    setClaimedReward(true);
    if (onAddXp) onAddXp(150);
  };

  return (
    <div className="space-y-6 font-sans">
      {/* Top Banner */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
        <div>
          <h3 className="text-sm font-medium text-white">Cognitive Crisis Invariance</h3>
          <p className="text-xs text-zinc-400 mt-0.5">Stress-test stoic poise under extreme asymmetric shocks.</p>
        </div>

        <div className="text-xs font-mono text-zinc-500">
          Case {activeCaseIndex + 1} of {cases.length}
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.08]">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-1">
            <span>AMYGDALA AROUSAL</span>
            <span className={amygdalaLevel > 70 ? 'text-zinc-400' : 'text-cyan-400'}>
              {amygdalaLevel > 70 ? 'ELEVATED' : 'CONTROLLED'}
            </span>
          </div>
          <div className="text-xl font-mono font-semibold text-white">
            {amygdalaLevel} <span className="text-xs text-zinc-500 font-normal">/ 100</span>
          </div>
          <div className="w-full h-1 bg-zinc-800 rounded-full mt-2 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-300 ${
                amygdalaLevel > 70 ? 'bg-zinc-400' : 'bg-cyan-400'
              }`}
              style={{ width: `${amygdalaLevel}%` }}
            />
          </div>
        </div>

        <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.08]">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-1">
            <span>STOIC POISE</span>
            <span className="text-cyan-400">UNSHAKABLE</span>
          </div>
          <div className="text-xl font-mono font-semibold text-white">
            {stoicPoise}%
          </div>
          <div className="w-full h-1 bg-zinc-800 rounded-full mt-2 overflow-hidden">
            <div
              className="h-full bg-cyan-400 rounded-full transition-all duration-300"
              style={{ width: `${stoicPoise}%` }}
            />
          </div>
        </div>

        <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.08]">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-1">
            <span>RATIONALITY QUOTIENT</span>
            <span className="text-cyan-400">OPTIMAL</span>
          </div>
          <div className="text-xl font-mono font-semibold text-white">
            {rationalityScore}%
          </div>
          <div className="w-full h-1 bg-zinc-800 rounded-full mt-2 overflow-hidden">
            <div
              className="h-full bg-cyan-400 rounded-full transition-all duration-300"
              style={{ width: `${rationalityScore}%` }}
            />
          </div>
        </div>
      </div>

      {/* Scenario & Choices */}
      <div className="p-5 sm:p-6 rounded-xl border border-white/[0.08] bg-zinc-900/30 space-y-4">
        <div className="flex items-center justify-between text-xs font-mono text-zinc-500 pb-2 border-b border-white/[0.06]">
          <span>SCENARIO</span>
          <span>Window: {timeLeft}s</span>
        </div>

        <h4 className="text-base font-medium text-white">{activeCase.title}</h4>
        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{activeCase.scenario}</p>

        <div className="space-y-2 pt-2">
          {activeCase.choices.map((choice) => {
            const isChosen = selectedChoice?.id === choice.id;
            return (
              <button
                key={choice.id}
                onClick={() => handleMakeChoice(choice)}
                disabled={selectedChoice !== null}
                className={`w-full p-3.5 rounded-lg border text-left text-xs transition-colors cursor-pointer ${
                  isChosen
                    ? choice.isOptimal
                      ? 'bg-cyan-500/10 border-cyan-400 text-white'
                      : 'bg-white/5 border-white/20 text-white'
                    : selectedChoice !== null
                    ? 'opacity-40 border-white/[0.04] text-zinc-500'
                    : 'bg-zinc-900/60 hover:bg-zinc-900 border-white/[0.06] text-zinc-300'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span>{choice.label}</span>
                  <span className="font-mono text-[10px] text-zinc-500 shrink-0">
                    {choice.reactionType}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {selectedChoice && (
          <div className="p-4 rounded-lg bg-zinc-900 border border-white/10 text-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-cyan-400 font-medium">Tactical Debrief</span>
              <button
                onClick={handleNextCase}
                className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>Next Scenario</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
            <p className="text-zinc-300 leading-relaxed">{selectedChoice.feedback}</p>
          </div>
        )}
      </div>

      {/* Claim Button Strip */}
      <div className="flex items-center justify-between p-4 rounded-xl border border-white/[0.08] bg-zinc-900/30">
        <div>
          <h4 className="text-xs font-medium text-white">Cognitive Invariance Verified</h4>
          <p className="text-xs text-zinc-400 mt-0.5">Stoic composure maintained under simulated pressure.</p>
        </div>

        <button
          onClick={handleClaimXp}
          disabled={claimedReward}
          className={`px-4 py-2 rounded-lg font-mono text-xs transition-colors flex items-center gap-1.5 cursor-pointer ${
            claimedReward
              ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
              : 'bg-cyan-400 hover:bg-cyan-300 text-zinc-950 font-medium'
          }`}
        >
          {claimedReward ? (
            <>
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Logged (+150 XP)</span>
            </>
          ) : (
            <>
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>Verify & Claim +150 XP</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
