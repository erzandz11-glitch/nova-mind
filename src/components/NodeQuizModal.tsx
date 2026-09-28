import React, { useState } from 'react';
import {
  X,
  Zap,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Sparkles,
  Award,
  Shield,
  HelpCircle,
  Check
} from 'lucide-react';
import { RoadmapNode, QuizQuestion } from '../types';
import { soundEngine } from '../lib/audio';

interface NodeQuizModalProps {
  node: RoadmapNode;
  isOpen: boolean;
  onClose: () => void;
  onCompleteNode: (nodeId: string, xpReward: number) => void;
}

export const NodeQuizModal: React.FC<NodeQuizModalProps> = ({
  node,
  isOpen,
  onClose,
  onCompleteNode
}) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState<boolean>(false);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentQuestion: QuizQuestion | undefined = node.quizQuestions[currentIdx];
  const totalQuestions = node.quizQuestions.length;
  const progressPercent = Math.round(((currentIdx + 1) / totalQuestions) * 100);

  const handleSelectOption = (idx: number) => {
    if (isAnswerChecked) return;
    soundEngine.playClick();
    setSelectedOption(idx);
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null || !currentQuestion) return;
    setIsAnswerChecked(true);

    if (selectedOption === currentQuestion.correctIndex) {
      soundEngine.playCorrect();
      setCorrectCount((prev) => prev + 1);
    } else {
      soundEngine.playIncorrect();
    }
  };

  const handleNext = () => {
    soundEngine.playClick();
    if (currentIdx + 1 < totalQuestions) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerChecked(false);
    } else {
      soundEngine.playLevelUp();
      setIsFinished(true);
    }
  };

  const handleFinish = () => {
    onCompleteNode(node.id, node.xpReward);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#090D1F] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(6,182,212,0.25)] text-slate-100 max-h-[90vh] overflow-y-auto">
        
        {/* Header with Progress bar */}
        <div className="space-y-4 pb-4 border-b border-slate-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                <Zap className="w-4 h-4 fill-current" />
              </span>
              <div>
                <h3 className="font-bold text-sm sm:text-base text-white">{node.title}</h3>
                <span className="text-[11px] font-mono text-cyan-400">
                  Interactive Brilliant-Style Drill · +{node.xpReward} XP
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                soundEngine.playClick();
                onClose();
              }}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {!isFinished && (
            <div className="space-y-1">
              <div className="flex justify-between text-[11px] font-mono text-slate-400">
                <span>Challenge {currentIdx + 1} of {totalQuestions}</span>
                <span className="text-cyan-400 font-bold">{progressPercent}%</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-500 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Question View or Finished Screen */}
        {!isFinished && currentQuestion ? (
          <div className="mt-6 space-y-6">
            
            {/* Question Prompt */}
            <div className="space-y-3">
              <h4 className="text-base sm:text-lg font-extrabold text-white leading-snug">
                {currentQuestion.prompt}
              </h4>

              {currentQuestion.codeSnippet && (
                <pre className="p-4 rounded-xl bg-[#060814] border border-slate-800 font-mono text-xs text-cyan-300 overflow-x-auto">
                  {currentQuestion.codeSnippet}
                </pre>
              )}
            </div>

            {/* Tactile Option Cards */}
            <div className="space-y-3">
              {currentQuestion.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === currentQuestion.correctIndex;
                let cardStyle = 'bg-[#060A17] border-slate-800 hover:border-slate-700 text-slate-200';

                if (isAnswerChecked) {
                  if (isCorrect) {
                    cardStyle = 'bg-emerald-950/40 border-emerald-500 text-emerald-100 shadow-[0_0_20px_rgba(16,185,129,0.25)]';
                  } else if (isSelected && !isCorrect) {
                    cardStyle = 'bg-rose-950/40 border-rose-500 text-rose-100';
                  } else {
                    cardStyle = 'opacity-40 border-slate-850';
                  }
                } else if (isSelected) {
                  cardStyle = 'bg-cyan-500/10 border-cyan-400 text-white shadow-[0_0_20px_rgba(6,182,212,0.2)]';
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswerChecked}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-between ${cardStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center font-mono text-xs shrink-0 text-slate-300">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="leading-relaxed">{opt}</span>
                    </div>

                    {isAnswerChecked && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 ml-2" />
                    )}
                    {isAnswerChecked && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-400 shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation box after check */}
            {isAnswerChecked && (
              <div
                className={`p-4 rounded-2xl border animate-fadeIn space-y-1.5 ${
                  selectedOption === currentQuestion.correctIndex
                    ? 'bg-emerald-950/30 border-emerald-500/50 text-emerald-200'
                    : 'bg-rose-950/30 border-rose-500/50 text-rose-200'
                }`}
              >
                <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider">
                  {selectedOption === currentQuestion.correctIndex ? (
                    <span className="text-emerald-400 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> EXACT COGNITIVE REASONING!
                    </span>
                  ) : (
                    <span className="text-rose-400 flex items-center gap-1">
                      <HelpCircle className="w-3.5 h-3.5" /> INSIGHT CORRECTION:
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm leading-relaxed">
                  {currentQuestion.explanation}
                </p>
              </div>
            )}

            {/* Bottom Actions */}
            <div className="flex justify-end pt-4 border-t border-slate-800">
              {!isAnswerChecked ? (
                <button
                  disabled={selectedOption === null}
                  onClick={handleCheckAnswer}
                  className="tactile-btn px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 hover:brightness-110 disabled:opacity-40 text-black font-extrabold text-xs cursor-pointer shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                >
                  Check Answer
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="tactile-btn flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 hover:brightness-110 text-black font-extrabold text-xs cursor-pointer shadow-[0_0_25px_rgba(16,185,129,0.35)]"
                >
                  <span>{currentIdx + 1 === totalQuestions ? 'Complete Lesson' : 'Continue'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>
        ) : (
          /* Finished Celebration Screen */
          <div className="mt-8 text-center space-y-6 py-6 animate-fadeIn">
            <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-tr from-emerald-400 via-cyan-400 to-amber-400 p-1 shadow-[0_0_50px_rgba(16,185,129,0.4)]">
              <div className="w-full h-full bg-[#050711] rounded-[22px] flex items-center justify-center">
                <Award className="w-12 h-12 text-emerald-400 animate-bounce" />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Node Synchronized!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                You scored <span className="text-emerald-400 font-bold">{correctCount}/{totalQuestions} correct</span>. Your mental models for <span className="text-white font-semibold">{node.title}</span> are permanently locked into your sovereign second brain!
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 py-2">
              <div className="px-4 py-2 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>+{node.xpReward} XP Earned</span>
              </div>
              {node.badgeUnlocked && (
                <div className="px-4 py-2 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs font-bold flex items-center gap-2">
                  <Shield className="w-4 h-4 text-amber-400" />
                  <span>Badge: {node.badgeUnlocked}</span>
                </div>
              )}
            </div>

            <div className="pt-4">
              <button
                onClick={handleFinish}
                className="tactile-btn px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 hover:brightness-110 text-black font-extrabold text-sm shadow-[0_0_35px_rgba(16,185,129,0.4)] cursor-pointer"
              >
                Claim XP &amp; Advance Roadmap
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
