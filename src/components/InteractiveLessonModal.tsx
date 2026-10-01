import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Zap,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Code2,
  Sparkles,
  HelpCircle,
  Clock,
  RotateCcw
} from 'lucide-react';
import { FrontierFacultyLesson, FrontierFaculty } from '../types';
import { soundEngine } from '../lib/audio';

interface InteractiveLessonModalProps {
  lesson: FrontierFacultyLesson;
  faculty: FrontierFaculty;
  moduleTitle: string;
  isOpen: boolean;
  onClose: () => void;
  onCompleteLesson: (lessonId: string, xpReward: number) => void;
  onNextLesson?: () => void;
  onPrevLesson?: () => void;
  hasNextLesson?: boolean;
  hasPrevLesson?: boolean;
  isCompleted?: boolean;
}

export const InteractiveLessonModal: React.FC<InteractiveLessonModalProps> = ({
  lesson,
  faculty,
  moduleTitle,
  isOpen,
  onClose,
  onCompleteLesson,
  onNextLesson,
  onPrevLesson,
  hasNextLesson = false,
  hasPrevLesson = false,
  isCompleted = false
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'content' | 'drill'>('content');

  // Reset states when lesson changes
  useEffect(() => {
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setIsCopied(false);
    setActiveTab('content');
  }, [lesson.id]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const drill = lesson.drillQuestion;
  const isCorrect = selectedOption !== null && drill && selectedOption === drill.correctIndex;

  const handleCopyCode = () => {
    if (lesson.codeSnippet) {
      navigator.clipboard.writeText(lesson.codeSnippet);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || !drill) return;
    setIsAnswerSubmitted(true);

    if (selectedOption === drill.correctIndex) {
      soundEngine.playCorrect();
      onCompleteLesson(lesson.id, 35);
    } else {
      soundEngine.playIncorrect();
    }
  };

  const handleRetry = () => {
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Modal Card */}
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-[#050816] border border-white/15 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden z-10 font-sans">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <span className="text-xl">{faculty.emoji}</span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                  {faculty.shortTitle}
                </span>
                <span className="text-zinc-600">/</span>
                <span className="text-[10px] font-mono text-zinc-400 truncate max-w-[200px] sm:max-w-xs">
                  {moduleTitle}
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight mt-0.5">
                {lesson.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-zinc-400 flex items-center gap-1 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/5">
              <Clock className="w-3 h-3 text-zinc-500" />
              {lesson.duration}
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-white/10 bg-black/20 text-xs font-mono">
          <button
            onClick={() => setActiveTab('content')}
            className={`flex items-center gap-2 px-4 py-2 border-b-2 font-medium transition-colors cursor-pointer ${
              activeTab === 'content'
                ? 'border-cyan-400 text-cyan-300 bg-cyan-500/10'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Materi & Insight</span>
          </button>

          {drill && (
            <button
              onClick={() => setActiveTab('drill')}
              className={`flex items-center gap-2 px-4 py-2 border-b-2 font-medium transition-colors cursor-pointer ${
                activeTab === 'drill'
                  ? 'border-amber-400 text-amber-300 bg-amber-500/10'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Interactive Drill</span>
              {isCompleted ? (
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                  ✓ Selesai
                </span>
              ) : (
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">
                  +35 XP
                </span>
              )}
            </button>
          )}
        </div>

        {/* Modal Body Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-zinc-700">
          
          {activeTab === 'content' && (
            <div className="space-y-6">
              {/* Telemetry Core Takeaway */}
              <div className="p-4 sm:p-5 rounded-xl bg-cyan-950/20 border border-cyan-500/30 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>CORE INTEL & TELEMETRY</span>
                </div>
                <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-sans">
                  {lesson.keyTakeaway}
                </p>
              </div>

              {/* Code Snippet Box */}
              {lesson.codeSnippet && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                      TECHNICAL IMPLEMENTATION / CODE SPEC
                    </span>
                    <button
                      onClick={handleCopyCode}
                      className="flex items-center gap-1 text-[11px] font-mono text-zinc-400 hover:text-cyan-300 bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded transition-colors cursor-pointer"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Tersalin!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Code</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-4 rounded-xl bg-black/80 border border-white/10 font-mono text-xs text-cyan-300 overflow-x-auto leading-relaxed shadow-inner">
                    {lesson.codeSnippet}
                  </pre>
                </div>
              )}

              {/* Formula Equation Box */}
              {lesson.formula && (
                <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 space-y-1.5">
                  <span className="text-[11px] font-mono text-amber-400 font-bold uppercase tracking-wider block">
                    MATHEMATICAL / ASYMMETRIC FORMULA:
                  </span>
                  <div className="font-mono text-sm sm:text-base text-amber-200 bg-black/40 p-3 rounded-lg border border-amber-500/20">
                    <code>{lesson.formula}</code>
                  </div>
                </div>
              )}

              {/* Call-to-action to drill */}
              {drill && !isCompleted && (
                <div className="pt-2">
                  <button
                    onClick={() => setActiveTab('drill')}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 hover:from-amber-500/30 hover:to-orange-500/30 border border-amber-500/40 text-amber-300 font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Zap className="w-4 h-4 fill-current" />
                    <span>Uji Pemahaman: Kerjakan Interactive Drill (+35 XP)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}

          {activeTab === 'drill' && drill && (
            <div className="space-y-6">
              {/* Question Box */}
              <div className="p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-amber-400 font-bold flex items-center gap-1.5">
                    <Zap className="w-4 h-4 fill-current" />
                    SOCRATIC EVALUATION DRILL
                  </span>
                  <span className="text-zinc-500">Pilih 1 jawaban yang paling tepat</span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
                  {drill.prompt}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                {drill.options.map((opt, idx) => {
                  const isSelected = selectedOption === idx;
                  let optionStyles = 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05] text-zinc-300';

                  if (isAnswerSubmitted) {
                    if (idx === drill.correctIndex) {
                      optionStyles = 'border-emerald-500/60 bg-emerald-500/20 text-emerald-200 font-medium';
                    } else if (isSelected && !isCorrect) {
                      optionStyles = 'border-red-500/60 bg-red-500/20 text-red-200 font-medium';
                    } else {
                      optionStyles = 'border-white/5 bg-black/20 text-zinc-600 opacity-60';
                    }
                  } else if (isSelected) {
                    optionStyles = 'border-cyan-500/60 bg-cyan-500/15 text-cyan-200 shadow-[0_0_15px_rgba(6,182,212,0.15)] font-medium';
                  }

                  return (
                    <button
                      key={idx}
                      disabled={isAnswerSubmitted}
                      onClick={() => setSelectedOption(idx)}
                      className={`w-full text-left p-4 rounded-xl border transition-all duration-150 flex items-start gap-3 cursor-pointer ${optionStyles}`}
                    >
                      <span className="w-6 h-6 rounded-md bg-black/40 border border-white/10 font-mono text-xs flex items-center justify-center shrink-0 mt-0.5 text-zinc-400">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="text-sm leading-relaxed flex-1">
                        {opt}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Feedback and Explanation Box */}
              {isAnswerSubmitted && (
                <div
                  className={`p-4 sm:p-5 rounded-xl border space-y-2 animate-fadeIn ${
                    isCorrect
                      ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200'
                      : 'bg-red-950/30 border-red-500/40 text-red-200'
                  }`}
                >
                  <div className="flex items-center gap-2 font-mono text-xs font-bold">
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-300">JAWABAN BENAR! (+35 XP)</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-4 h-4 text-red-400" />
                        <span className="text-red-300">JAWABAN BELUM TEPAT</span>
                      </>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed font-sans opacity-90">
                    {drill.explanation}
                  </p>
                </div>
              )}

              {/* Submit / Retry Actions */}
              <div className="flex items-center gap-3 pt-2">
                {!isAnswerSubmitted ? (
                  <button
                    disabled={selectedOption === null}
                    onClick={handleSubmitAnswer}
                    className={`w-full py-3 rounded-xl font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                      selectedOption !== null
                        ? 'bg-cyan-400 hover:bg-cyan-300 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)] cursor-pointer'
                        : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                    }`}
                  >
                    <Check className="w-4 h-4" />
                    <span>Periksa Jawaban & Klaim XP</span>
                  </button>
                ) : (
                  <div className="w-full flex items-center gap-3">
                    {!isCorrect && (
                      <button
                        onClick={handleRetry}
                        className="flex-1 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <RotateCcw className="w-4 h-4" />
                        <span>Coba Lagi</span>
                      </button>
                    )}
                    {hasNextLesson && (
                      <button
                        onClick={onNextLesson}
                        className="flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                      >
                        <span>Lanjut ke Lesson Berikutnya</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

        </div>

        {/* Footer Navigation Bar */}
        <div className="px-6 py-3.5 border-t border-white/10 flex items-center justify-between bg-black/40 text-xs font-mono">
          <button
            disabled={!hasPrevLesson}
            onClick={onPrevLesson}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
              hasPrevLesson
                ? 'text-zinc-300 hover:text-white hover:bg-white/5 cursor-pointer'
                : 'text-zinc-600 cursor-not-allowed opacity-50'
            }`}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Prev Lesson</span>
          </button>

          <div className="flex items-center gap-2 text-zinc-400">
            {isCompleted ? (
              <span className="flex items-center gap-1 text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Mastered</span>
              </span>
            ) : (
              <span className="text-zinc-500">Belum Selesai</span>
            )}
          </div>

          <button
            disabled={!hasNextLesson}
            onClick={onNextLesson}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
              hasNextLesson
                ? 'text-zinc-300 hover:text-white hover:bg-white/5 cursor-pointer'
                : 'text-zinc-600 cursor-not-allowed opacity-50'
            }`}
          >
            <span>Next Lesson</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
