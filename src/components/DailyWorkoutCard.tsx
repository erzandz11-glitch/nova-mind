import React, { useState } from 'react';
import {
  Sparkles,
  Zap,
  Play,
  CheckCircle2,
  AlertCircle,
  X,
  ArrowRight,
  Flame,
  Award
} from 'lucide-react';
import { DailyWorkout, UserGamificationState } from '../types';
import { soundEngine } from '../lib/audio';

interface DailyWorkoutCardProps {
  workout: DailyWorkout;
  userState: UserGamificationState;
  onCompleteWorkout: (rewardXp: number) => void;
}

export const DailyWorkoutCard: React.FC<DailyWorkoutCardProps> = ({
  workout,
  userState,
  onCompleteWorkout
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const selectedOption = workout.options.find((o) => o.id === selectedOptionId);

  const handleStart = () => {
    soundEngine.playActivate();
    setSelectedOptionId(null);
    setSubmitted(false);
    setIsOpen(true);
  };

  const handleSubmit = () => {
    if (!selectedOption) return;
    setSubmitted(true);
    if (selectedOption.isOptimal) {
      soundEngine.playCorrect();
    } else {
      soundEngine.playIncorrect();
    }
  };

  const handleClaimReward = () => {
    soundEngine.playLevelUp();
    const finalXp = selectedOption?.isOptimal ? workout.rewardXp : Math.round(workout.rewardXp * (selectedOption?.xpMultiplier || 0.5));
    onCompleteWorkout(finalXp);
    setIsOpen(false);
  };

  return (
    <>
      {/* 2. "DAILY BRAIN WORKOUT" HERO WIDGET */}
      <div className="relative overflow-hidden p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0C1226] via-[#091024] to-[#0A162B] border border-emerald-500/40 shadow-[0_0_40px_rgba(16,185,129,0.15)] group">
        
        {/* Glow ambient background orbs */}
        <div className="pointer-events-none absolute -top-12 -right-12 w-64 h-64 bg-emerald-500/15 rounded-full blur-[80px]" />
        <div className="pointer-events-none absolute -bottom-12 left-1/3 w-64 h-64 bg-cyan-500/15 rounded-full blur-[80px]" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-mono font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                DAILY BRAIN WORKOUT
              </span>
              <span className="px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 text-xs font-mono font-bold flex items-center gap-1">
                <Flame className="w-3 h-3 fill-amber-400" /> +50 XP BONUS
              </span>
              {userState.dailyWorkoutDone && (
                <span className="px-2.5 py-1 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-800 text-xs font-mono font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Completed Today
                </span>
              )}
            </div>

            <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
              {workout.title}
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
              Sharpen your real-world solopreneur intuition in under 120 seconds. Master high-order capital allocation, stoic crisis down-regulation, and zero-headcount scaling.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              onClick={handleStart}
              className="tactile-btn flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-400 via-emerald-500 to-cyan-500 hover:brightness-110 text-slate-950 font-extrabold text-sm shadow-[0_0_30px_rgba(16,185,129,0.35)] cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current ml-0.5" />
              <span>
                {userState.dailyWorkoutDone ? 'Replay Workout' : 'Start 2-Minute Brain Workout'}
              </span>
            </button>
          </div>
        </div>

      </div>

      {/* Interactive Workout Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#090D1F] border border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(16,185,129,0.25)] text-slate-100 max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <Zap className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                    {workout.tag} · SPEED DRILL
                  </span>
                  <h3 className="font-extrabold text-lg text-white">Daily Asymmetric Case</h3>
                </div>
              </div>

              <button
                onClick={() => {
                  soundEngine.playClick();
                  setIsOpen(false);
                }}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scenario Body */}
            <div className="mt-6 space-y-6">
              <div className="p-4 rounded-2xl bg-[#060A17] border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                  REAL-WORLD SCENARIO:
                </span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                  {workout.context}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-sm sm:text-base text-white mb-3">
                  {workout.question}
                </h4>

                {/* Interactive Decision Options */}
                <div className="space-y-3">
                  {workout.options.map((option) => {
                    const isSelected = selectedOptionId === option.id;
                    let optionClasses = 'bg-[#060A17] border-slate-800 hover:border-slate-700 text-slate-200';

                    if (submitted) {
                      if (option.isOptimal) {
                        optionClasses = 'bg-emerald-950/40 border-emerald-500 text-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.2)]';
                      } else if (isSelected && !option.isOptimal) {
                        optionClasses = 'bg-rose-950/40 border-rose-500 text-rose-200';
                      } else {
                        optionClasses = 'opacity-40 border-slate-850';
                      }
                    } else if (isSelected) {
                      optionClasses = 'bg-emerald-500/10 border-emerald-400 text-white shadow-[0_0_20px_rgba(16,185,129,0.15)]';
                    }

                    return (
                      <button
                        key={option.id}
                        disabled={submitted}
                        onClick={() => {
                          soundEngine.playClick();
                          setSelectedOptionId(option.id);
                        }}
                        className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-start gap-3 ${optionClasses}`}
                      >
                        <div className="w-6 h-6 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs">
                          {isSelected ? '✓' : '•'}
                        </div>
                        <span className="leading-relaxed">{option.text}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Immediate Feedback Reveal */}
              {submitted && selectedOption && (
                <div
                  className={`p-4 rounded-2xl border animate-fadeIn space-y-2 ${
                    selectedOption.isOptimal
                      ? 'bg-emerald-950/30 border-emerald-500/50 text-emerald-200'
                      : 'bg-amber-950/30 border-amber-500/50 text-amber-200'
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold text-sm">
                    {selectedOption.isOptimal ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        <span className="text-emerald-400">Optimal Leverage Strategy (+50 XP)!</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-5 h-5 text-amber-400" />
                        <span className="text-amber-400">Sub-Optimal Choice (+25 XP)</span>
                      </>
                    )}
                  </div>
                  <p className="text-xs leading-relaxed">{selectedOption.feedback}</p>
                </div>
              )}

              {/* Action button */}
              <div className="flex justify-end pt-4 border-t border-slate-800">
                {!submitted ? (
                  <button
                    disabled={!selectedOptionId}
                    onClick={handleSubmit}
                    className="tactile-btn px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-500 hover:brightness-110 disabled:opacity-40 text-black font-extrabold text-xs cursor-pointer shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  >
                    Lock In Decision
                  </button>
                ) : (
                  <button
                    onClick={handleClaimReward}
                    className="tactile-btn px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-emerald-400 hover:brightness-110 text-black font-extrabold text-xs cursor-pointer flex items-center gap-2 shadow-[0_0_25px_rgba(245,158,11,0.3)]"
                  >
                    <Award className="w-4 h-4" />
                    <span>Claim XP &amp; Complete Workout</span>
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
