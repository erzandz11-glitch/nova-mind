import React, { useState } from 'react';
import {
  Brain,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle2,
  RefreshCw,
  Copy,
  Check
} from 'lucide-react';
import { DiagnosticTest, DiagnosticResult, UserGamificationState } from '../types';
import { DIAGNOSTIC_TESTS } from '../data/gamifiedData';
import { soundEngine } from '../lib/audio';

interface DiagnosticsPageProps {
  userState: UserGamificationState;
  onSaveDiagnosticResult: (result: DiagnosticResult, xpBonus: number) => void;
}

export const DiagnosticsPage: React.FC<DiagnosticsPageProps> = ({
  userState,
  onSaveDiagnosticResult
}) => {
  const [activeTestId, setActiveTestId] = useState<'leverage_iq' | 'zero_emotion'>('leverage_iq');
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [accumulatedScore, setAccumulatedScore] = useState<number>(0);
  const [selectedOptionIdx, setSelectedOptionIdx] = useState<number | null>(null);
  const [currentTestResult, setCurrentTestResult] = useState<DiagnosticResult | null>(null);
  const [copiedShare, setCopiedShare] = useState<boolean>(false);

  const activeTest = DIAGNOSTIC_TESTS[activeTestId];
  const currentQ = activeTest.questions[questionIndex];
  const totalQuestions = activeTest.questions.length;

  const handleStartOrReset = (testId: 'leverage_iq' | 'zero_emotion') => {
    soundEngine.playActivate();
    setActiveTestId(testId);
    setQuestionIndex(0);
    setAccumulatedScore(0);
    setSelectedOptionIdx(null);
    setCurrentTestResult(null);
  };

  const handleSelectOption = (idx: number) => {
    soundEngine.playClick();
    setSelectedOptionIdx(idx);
  };

  const handleNextQuestion = () => {
    if (selectedOptionIdx === null || !currentQ) return;
    const chosenOption = currentQ.options[selectedOptionIdx];
    const newScore = accumulatedScore + chosenOption.scoreDelta;
    soundEngine.playCorrect();

    if (questionIndex + 1 < totalQuestions) {
      setAccumulatedScore(newScore);
      setQuestionIndex((prev) => prev + 1);
      setSelectedOptionIdx(null);
    } else {
      const finalScoreRound = Math.min(100, Math.round(newScore));
      const tier =
        activeTest.scoreTitleLevels.find((l) => finalScoreRound >= l.minScore) ||
        activeTest.scoreTitleLevels[activeTest.scoreTitleLevels.length - 1];

      const result: DiagnosticResult = {
        testId: activeTestId,
        score: finalScoreRound,
        maxScore: 100,
        archetype: tier.archetype,
        analysis: tier.analysis,
        date: 'Today'
      };

      setCurrentTestResult(result);
      soundEngine.playLevelUp();
      onSaveDiagnosticResult(result, 150);
    }
  };

  const handleCopyShare = () => {
    if (!currentTestResult) return;
    const shareText = `NOVA MIND Diagnostic Result: ${currentTestResult.score}% on ${activeTest.title} (${currentTestResult.archetype})`;
    navigator.clipboard.writeText(shareText);
    soundEngine.playClick();
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  return (
    <div className="min-h-[calc(100vh-3.5rem)] p-6 sm:p-8 lg:p-12 space-y-8 max-w-5xl mx-auto font-sans">
      {/* Page Header */}
      <div className="space-y-2 border-b border-white/[0.08] pb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
          <span>04</span>
          <span className="text-zinc-600">/</span>
          <span>COGNITIVE DIAGNOSTICS</span>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Psychology &amp; Leverage Assessments
        </h1>
        <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed">
          Behavioral scenario diagnostics measuring asymmetric leverage instinct and stoic rationality under high-stakes conditions.
        </p>
      </div>

      {/* Test Selector Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          onClick={() => handleStartOrReset('leverage_iq')}
          className={`p-5 rounded-xl border transition-all cursor-pointer space-y-2 ${
            activeTestId === 'leverage_iq'
              ? 'bg-zinc-900/80 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.1)]'
              : 'bg-zinc-950/60 border-white/[0.08] hover:border-white/20'
          }`}
        >
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
            <span>01 // ASYMMETRY</span>
            <span>3 Scenarios</span>
          </div>
          <h3 className="text-base font-medium text-white">Solopreneur Leverage IQ</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Test instinct for non-linear code and capital compounding over linear billable hours.
          </p>
        </div>

        <div
          onClick={() => handleStartOrReset('zero_emotion')}
          className={`p-5 rounded-xl border transition-all cursor-pointer space-y-2 ${
            activeTestId === 'zero_emotion'
              ? 'bg-zinc-900/80 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.1)]'
              : 'bg-zinc-950/60 border-white/[0.08] hover:border-white/20'
          }`}
        >
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
            <span>02 // POISE</span>
            <span>3 Scenarios</span>
          </div>
          <h3 className="text-base font-medium text-white">Zero Emotion Rationality</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Measure amygdala resistance to volatile drawdowns, public attack, and systemic panic.
          </p>
        </div>
      </div>

      {/* Playable Area */}
      <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950/80 border border-white/[0.08]">
        {!currentTestResult ? (
          <div className="space-y-6">
            <div className="space-y-2 pb-4 border-b border-white/[0.06]">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>Scenario {questionIndex + 1} of {totalQuestions}</span>
                <span>{Math.round(((questionIndex + 1) / totalQuestions) * 100)}% Complete</span>
              </div>
              <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-cyan-400 rounded-full transition-all duration-300"
                  style={{ width: `${((questionIndex + 1) / totalQuestions) * 100}%` }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">
                Scenario
              </span>
              <p className="text-sm font-medium text-white leading-relaxed">
                {currentQ?.scenario}
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              {currentQ?.options.map((opt, i) => {
                const isSelected = selectedOptionIdx === i;
                return (
                  <button
                    key={i}
                    onClick={() => handleSelectOption(i)}
                    className={`w-full p-4 rounded-xl border text-left text-xs transition-colors cursor-pointer flex items-start gap-3 ${
                      isSelected
                        ? 'bg-white/[0.06] border-cyan-400 text-white'
                        : 'bg-zinc-900/40 border-white/[0.06] hover:border-white/20 text-zinc-300'
                    }`}
                  >
                    <span className="font-mono text-zinc-500 shrink-0 mt-0.5">
                      {String.fromCharCode(65 + i)}.
                    </span>
                    <span className="leading-relaxed">{opt.text}</span>
                  </button>
                );
              })}
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={handleNextQuestion}
                disabled={selectedOptionIdx === null}
                className={`px-5 py-2.5 rounded-lg font-mono text-xs transition-colors flex items-center gap-2 cursor-pointer ${
                  selectedOptionIdx !== null
                    ? 'bg-cyan-400 hover:bg-cyan-300 text-zinc-950 font-medium'
                    : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                }`}
              >
                <span>{questionIndex + 1 === totalQuestions ? 'Complete Assessment' : 'Next Scenario'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ) : (
          /* Test Results View */
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>ASSESSMENT COMPLETE</span>
              </div>
              <button
                onClick={() => handleStartOrReset(activeTestId)}
                className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Retake</span>
              </button>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-mono font-semibold text-white">
                {currentTestResult.score}%
              </div>
              <h3 className="text-lg font-medium text-cyan-300 mt-1">
                {currentTestResult.archetype}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed p-4 rounded-xl bg-zinc-900/50 border border-white/[0.06]">
              {currentTestResult.analysis}
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-mono text-zinc-500">
                Recorded to Sovereign Registry · +150 XP Awarded
              </span>
              <button
                onClick={handleCopyShare}
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                {copiedShare ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Verdict</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
