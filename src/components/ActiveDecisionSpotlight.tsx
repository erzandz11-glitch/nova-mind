import React, { useState, useEffect } from 'react';
import {
  Brain,
  Zap,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  RotateCcw,
  Activity,
  ShieldCheck
} from 'lucide-react';
import { soundEngine } from '../lib/audio';

interface ActiveDecisionSpotlightProps {
  onAddXp: (amount: number) => void;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
}

export const ActiveDecisionSpotlight: React.FC<ActiveDecisionSpotlightProps> = ({ onAddXp }) => {
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | 'C' | null>(null);
  const [hasCommitted, setHasCommitted] = useState<boolean>(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);

  // 60-second countdown
  useEffect(() => {
    if (!isTimerRunning || hasCommitted) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsTimerRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isTimerRunning, hasCommitted]);

  const handleSelectOption = (opt: 'A' | 'B' | 'C') => {
    if (hasCommitted) return;
    setSelectedOption(opt);
    setHasCommitted(true);

    if (opt === 'A') {
      soundEngine.playCorrect();
      onAddXp(50);

      // Trigger celebratory particle burst
      const burst: Particle[] = [];
      const colors = ['#06b6d4', '#10b981', '#38bdf8', '#34d399', '#f59e0b', '#a78bfa'];
      for (let i = 0; i < 32; i++) {
        burst.push({
          id: i,
          x: (Math.random() - 0.5) * 260,
          y: (Math.random() - 0.5) * 200,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      setParticles(burst);
      setTimeout(() => setParticles([]), 1600);
    } else {
      soundEngine.playIncorrect();
      onAddXp(15);
    }
  };

  const handleReset = () => {
    soundEngine.playClick();
    setSelectedOption(null);
    setHasCommitted(false);
    setTimeLeft(60);
    setIsTimerRunning(true);
    setParticles([]);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-950/40 via-zinc-900 to-black border-2 border-cyan-500/40 shadow-[0_0_50px_rgba(6,182,212,0.2)] p-6 sm:p-8 hud-bracket">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/15 rounded-full blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/15 rounded-full blur-[100px]" />

      {/* Particle Burst Overlay */}
      {particles.length > 0 && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-50 overflow-hidden">
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute w-2.5 h-2.5 rounded-full animate-particle"
              style={{
                backgroundColor: p.color,
                boxShadow: `0 0 14px ${p.color}`,
                transform: `translate(${p.x}px, ${p.y}px)`
              }}
            />
          ))}
        </div>
      )}

      {/* Header Row */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.35)] shrink-0">
            <Brain className="w-6 h-6 animate-pulse text-cyan-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> SPOTLIGHT DECISION DRILL
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-semibold">
                60s Active Drill
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white mt-0.5">
              🧠 Daily Asymmetric Decision Drill (Level 12)
            </h2>
          </div>
        </div>

        {/* Live 60-Second Countdown & XP Pill */}
        <div className="flex items-center gap-3 self-start sm:self-auto font-mono text-xs">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/60 border border-cyan-500/30 text-cyan-300 shadow-inner">
            <Clock className={`w-3.5 h-3.5 ${timeLeft <= 10 ? 'text-rose-400 animate-ping' : 'text-cyan-400'}`} />
            <span className={timeLeft <= 10 ? 'text-rose-400 font-bold' : 'font-bold'}>
              {timeLeft}s
            </span>
          </div>

          <div className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/10 border border-amber-500/40 text-amber-300 font-bold shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>+50 XP</span>
          </div>
        </div>
      </div>

      {/* Scenario Context */}
      <div className="relative z-10 py-5 space-y-2">
        <div className="text-[11px] font-mono text-cyan-400/90 font-semibold tracking-wider flex items-center gap-1.5 uppercase">
          <Activity className="w-3.5 h-3.5" /> LIVE TELEMETRY INGESTION:
        </div>
        <p className="text-sm sm:text-base text-zinc-100 font-medium leading-relaxed bg-black/40 p-4 rounded-2xl border border-white/10 shadow-inner">
          &ldquo;Your AI cluster detects an unhedged liquidity squeeze in Quantum Computing supply chains. Global fabrication lead times jump 8x overnight. What is your move?&rdquo;
        </p>
      </div>

      {/* 3 Clickable Tactical Options (A, B, C) */}
      <div className="relative z-10 space-y-3">
        {[
          {
            key: 'A' as const,
            text: 'Hedge via synthetic hardware futures and flash-lease alternative GPU compute clusters to preserve model training throughput.',
            optimal: true,
            payoff: '+50 XP · +4% Rationality Score · +6% Asymmetry'
          },
          {
            key: 'B' as const,
            text: 'Liquidate AI model training workloads immediately to hold 100% stablecoins and wait for hardware prices to fall.',
            optimal: false,
            payoff: 'Linear Capital Drain · Lost Market Dominance (-2% Rationality)'
          },
          {
            key: 'C' as const,
            text: 'Double down on margin borrowing to order 10x hardware allocations, hoping supplier delivery times normalize.',
            optimal: false,
            payoff: 'Catastrophic Leverage Trap · Insolvency Risk (-5% Rationality)'
          }
        ].map((opt) => {
          const isSelected = selectedOption === opt.key;

          return (
            <button
              key={opt.key}
              onClick={() => handleSelectOption(opt.key)}
              disabled={hasCommitted}
              className={`w-full p-4 rounded-2xl border text-left transition-all duration-200 flex items-start gap-3.5 cursor-pointer ${
                isSelected
                  ? opt.optimal
                    ? 'bg-emerald-950/70 border-emerald-400 text-white shadow-[0_0_30px_rgba(16,185,129,0.4)] scale-[1.01]'
                    : 'bg-rose-950/70 border-rose-400 text-white shadow-[0_0_25px_rgba(244,63,94,0.35)] scale-[1.01]'
                  : hasCommitted
                  ? 'opacity-40 bg-zinc-950/40 border-white/5 text-zinc-500 cursor-not-allowed'
                  : 'bg-zinc-950/60 hover:bg-zinc-900 border-white/10 hover:border-cyan-500/40 text-zinc-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]'
              }`}
            >
              <span
                className={`w-7 h-7 rounded-lg font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border transition-colors ${
                  isSelected
                    ? opt.optimal
                      ? 'bg-emerald-400 text-black border-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.8)]'
                      : 'bg-rose-400 text-black border-rose-400 shadow-[0_0_12px_rgba(244,63,94,0.8)]'
                    : 'bg-zinc-900 text-zinc-400 border-white/10'
                }`}
              >
                {opt.key}
              </span>
              
              <div className="space-y-1.5 flex-1">
                <span className="text-xs sm:text-sm font-medium leading-relaxed block">
                  {opt.text}
                </span>

                {hasCommitted && isSelected && (
                  <div
                    className={`text-xs font-mono font-bold pt-1 flex items-center gap-1.5 animate-fadeIn ${
                      opt.optimal ? 'text-emerald-300' : 'text-rose-300'
                    }`}
                  >
                    {opt.optimal ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>REAL-TIME PAYOFF: {opt.payoff}</span>
                      </>
                    ) : (
                      <>
                        <AlertTriangle className="w-4 h-4 text-rose-400" />
                        <span>VULNERABILITY DETECTED: {opt.payoff}</span>
                      </>
                    )}
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Action Footer Bar */}
      <div className="relative z-10 pt-5 mt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10">
        <div className="text-xs font-mono text-zinc-400 flex items-center gap-2">
          {hasCommitted ? (
            <span className="text-emerald-400 flex items-center gap-1.5 font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Real-time score recorded: {selectedOption === 'A' ? '+50 XP · +4% Rationality Score' : '+15 XP · Sub-optimal Move'}
            </span>
          ) : (
            <span className="text-cyan-300/80">Click option A, B, or C to instantly compute asymmetric payoff.</span>
          )}
        </div>

        <div className="flex items-center gap-2.5">
          {hasCommitted && (
            <button
              onClick={handleReset}
              className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-xs font-mono text-cyan-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer shadow-md active:scale-95"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retry Drill</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
