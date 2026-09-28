import React, { useState } from 'react';
import { Sparkles, Zap, CheckCircle2, ArrowRight, Shield, Award, HelpCircle } from 'lucide-react';
import { CivilizationChallenge, UserGamificationState } from '../types';
import { soundEngine } from '../lib/audio';

interface DailyCivilizationChallengeProps {
  challenge: CivilizationChallenge;
  userState: UserGamificationState;
  onCompleteChallenge: (rewardXp: number, badgeName?: string) => void;
}

export const DailyCivilizationChallengeCard: React.FC<DailyCivilizationChallengeProps> = ({
  challenge,
  userState,
  onCompleteChallenge
}) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const selectedOption = challenge.options.find((o) => o.id === selectedOptionId);

  const handleSelectOption = (optId: string) => {
    if (hasSubmitted) return;
    soundEngine.playClick();
    setSelectedOptionId(optId);
  };

  const handleSubmit = () => {
    if (!selectedOptionId || hasSubmitted) return;
    setHasSubmitted(true);

    if (selectedOption?.isOptimal) {
      soundEngine.playCorrect();
      setIsCompleted(true);
      onCompleteChallenge(challenge.rewardXp, challenge.badgeReward);
    } else {
      soundEngine.playIncorrect();
      // Partial XP
      const partial = Math.round(challenge.rewardXp * (selectedOption?.xpMultiplier || 0.3));
      onCompleteChallenge(partial);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B0F2A] via-[#090D22] to-[#040614] border border-cyan-500/30 p-5 sm:p-7 shadow-[0_0_40px_rgba(6,182,212,0.15)] group transition-all duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      {/* Top Header Row */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-extrabold uppercase tracking-wider text-cyan-400">
                {challenge.tag}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                {challenge.facultyEmoji} {challenge.facultyName}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-white tracking-tight mt-0.5">
              {challenge.title}
            </h3>
          </div>
        </div>

        {/* Bonus Badge Pill */}
        <div className="flex items-center gap-2 self-start sm:self-auto font-mono text-xs">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/30 text-amber-300">
            <Zap className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="font-bold">+{challenge.rewardXp} XP</span>
          </div>
          {challenge.badgeReward && (
            <div className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[11px]">
              <Award className="w-3.5 h-3.5" />
              <span>Badge: {challenge.badgeReward}</span>
            </div>
          )}
        </div>
      </div>

      {/* Scenario & Context Body */}
      <div className="relative z-10 py-4 space-y-3">
        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
          {challenge.context}
        </p>

        {challenge.codeSnippet && (
          <div className="rounded-xl bg-[#040614] border border-slate-800/80 p-3 font-mono text-[11px] text-cyan-300/90 overflow-x-auto">
            <pre>{challenge.codeSnippet}</pre>
          </div>
        )}

        <div className="text-xs font-semibold text-cyan-200 flex items-center gap-1.5 pt-1">
          <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
          <span>{challenge.question}</span>
        </div>
      </div>

      {/* Options List */}
      <div className="relative z-10 space-y-2.5">
        {challenge.options.map((opt, index) => {
          const isSelected = selectedOptionId === opt.id;
          const showFeedback = hasSubmitted && isSelected;

          return (
            <div key={opt.id} className="space-y-1.5">
              <button
                onClick={() => handleSelectOption(opt.id)}
                disabled={hasSubmitted}
                className={`w-full p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-200 flex items-start gap-3 cursor-pointer ${
                  isSelected
                    ? hasSubmitted
                      ? opt.isOptimal
                        ? 'bg-emerald-500/20 border-emerald-500/80 text-white shadow-[0_0_25px_rgba(16,185,129,0.25)]'
                        : 'bg-rose-500/20 border-rose-500/80 text-white shadow-[0_0_25px_rgba(244,63,94,0.25)]'
                      : 'bg-cyan-500/15 border-cyan-400 text-white shadow-[0_0_20px_rgba(6,182,212,0.2)]'
                    : hasSubmitted
                    ? 'opacity-50 bg-slate-900/40 border-slate-800 text-slate-400 cursor-not-allowed'
                    : 'bg-slate-900/60 hover:bg-slate-850 border-slate-800/80 hover:border-cyan-500/40 text-slate-300'
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-lg font-mono font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5 border ${
                    isSelected
                      ? hasSubmitted
                        ? opt.isOptimal
                          ? 'bg-emerald-400 text-black border-emerald-400'
                          : 'bg-rose-400 text-black border-rose-400'
                        : 'bg-cyan-400 text-black border-cyan-400'
                      : 'bg-slate-800 text-slate-300 border-slate-700'
                  }`}
                >
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="text-xs sm:text-sm font-medium leading-snug">
                  {opt.text}
                </span>
              </button>

              {/* Instant Animated Feedback */}
              {showFeedback && (
                <div
                  className={`p-3 rounded-xl border text-xs leading-relaxed font-sans animate-fadeIn ${
                    opt.isOptimal
                      ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
                      : 'bg-rose-950/60 border-rose-500/40 text-rose-300'
                  }`}
                >
                  <div className="flex items-center gap-1.5 font-bold mb-0.5">
                    {opt.isOptimal ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Sovereign Optimal Move (+{challenge.rewardXp} XP)</span>
                      </>
                    ) : (
                      <>
                        <Shield className="w-4 h-4 text-rose-400" />
                        <span>System Vulnerability Triggered</span>
                      </>
                    )}
                  </div>
                  <p>{opt.feedback}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer Submit / Completed Status */}
      <div className="relative z-10 pt-4 mt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-800/80">
        <span className="text-[11px] text-slate-400 font-mono text-center sm:text-left">
          {hasSubmitted
            ? isCompleted
              ? '✓ Today\'s Civilization Challenge Conquered! Daily Research Target Updated.'
              : 'Evaluated. Review tactical feedback to sharpen civilization telemetry.'
            : 'Select the optimal sovereign strategy, then commit your answer.'}
        </span>

        {!hasSubmitted ? (
          <button
            onClick={handleSubmit}
            disabled={!selectedOptionId}
            className={`w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold font-mono text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
              selectedOptionId
                ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-black shadow-[0_0_20px_rgba(6,182,212,0.3)] active:scale-95'
                : 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed'
            }`}
          >
            <span>Commit Strategy</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
            <span>Challenge Logged</span>
          </div>
        )}
      </div>
    </div>
  );
};
