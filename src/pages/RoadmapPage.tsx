import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Terminal,
  Zap,
  Dna,
  Brain,
  TrendingUp,
  Coins,
  Bot,
  Gamepad2,
  Globe,
  Briefcase,
  Play,
  Layers,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Circle,
  Clock,
  Sparkles,
  Shield,
  Activity,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Award
} from 'lucide-react';
import {
  RoadmapNode,
  UserGamificationState,
  FrontierFaculty,
  FrontierFacultyId,
  FrontierFacultyModule,
  FrontierFacultyLesson
} from '../types';
import { FRONTIER_FACULTIES } from '../data/frontierFacultiesData';
import { ActiveDecisionSpotlight } from '../components/ActiveDecisionSpotlight';
import { HolographicSkillConstellation } from '../components/HolographicSkillConstellation';
import { FrontierBentoGrid } from '../components/FrontierBentoGrid';
import { NodeQuizModal } from '../components/NodeQuizModal';
import { InteractiveLessonModal } from '../components/InteractiveLessonModal';
import { NovaAICoachWidget } from '../components/NovaAICoachWidget';
import { soundEngine } from '../lib/audio';

interface RoadmapPageProps {
  userState: UserGamificationState;
  onCompleteWorkout: (rewardXp: number, badgeName?: string) => void;
  onCompleteNode: (nodeId: string, xpReward: number) => void;
  activeFacultyId?: FrontierFacultyId;
  onSelectFaculty?: (id: FrontierFacultyId) => void;
}

export const RoadmapPage: React.FC<RoadmapPageProps> = ({
  userState,
  onCompleteWorkout,
  onCompleteNode,
  activeFacultyId = 'deep_it_cyber',
  onSelectFaculty
}) => {
  const navigate = useNavigate();
  const [selectedFacultyId, setSelectedFacultyId] = useState<FrontierFacultyId>(activeFacultyId);

  React.useEffect(() => {
    setSelectedFacultyId(activeFacultyId);
  }, [activeFacultyId]);

  // Expand all modules by default for instant visibility of all lessons
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({});

  // Active Lesson Modal State
  const [activeLessonModal, setActiveLessonModal] = useState<{
    lesson: FrontierFacultyLesson;
    moduleTitle: string;
    moduleIndex: number;
    lessonIndex: number;
  } | null>(null);

  const [activeQuizNode, setActiveQuizNode] = useState<RoadmapNode | null>(null);

  const activeFaculty: FrontierFaculty =
    FRONTIER_FACULTIES.find((f) => f.id === selectedFacultyId) || FRONTIER_FACULTIES[0];

  // Helper to check if a module is expanded (default true)
  const isModuleExpanded = (modId: string) => {
    return expandedModules[modId] !== undefined ? expandedModules[modId] : true;
  };

  // Flattened list of lessons for smooth next/prev navigation
  const allFacultyLessons = useMemo(() => {
    const result: {
      lesson: FrontierFacultyLesson;
      moduleTitle: string;
      moduleIndex: number;
      lessonIndex: number;
    }[] = [];

    activeFaculty.modules.forEach((mod, mIdx) => {
      mod.lessons.forEach((les, lIdx) => {
        result.push({
          lesson: les,
          moduleTitle: mod.title,
          moduleIndex: mIdx,
          lessonIndex: lIdx
        });
      });
    });

    return result;
  }, [activeFaculty]);

  const currentLessonFlatIndex = activeLessonModal
    ? allFacultyLessons.findIndex((item) => item.lesson.id === activeLessonModal.lesson.id)
    : -1;

  const handleNextLesson = () => {
    if (currentLessonFlatIndex >= 0 && currentLessonFlatIndex < allFacultyLessons.length - 1) {
      const next = allFacultyLessons[currentLessonFlatIndex + 1];
      setActiveLessonModal({
        lesson: next.lesson,
        moduleTitle: next.moduleTitle,
        moduleIndex: next.moduleIndex,
        lessonIndex: next.lessonIndex
      });
    }
  };

  const handlePrevLesson = () => {
    if (currentLessonFlatIndex > 0) {
      const prev = allFacultyLessons[currentLessonFlatIndex - 1];
      setActiveLessonModal({
        lesson: prev.lesson,
        moduleTitle: prev.moduleTitle,
        moduleIndex: prev.moduleIndex,
        lessonIndex: prev.lessonIndex
      });
    }
  };

  const handleToggleModule = (modId: string) => {
    setExpandedModules((prev) => ({
      ...prev,
      [modId]: !isModuleExpanded(modId)
    }));
  };

  const handleToggleAllModules = () => {
    const allCurrentlyOpen = activeFaculty.modules.every((m) => isModuleExpanded(m.id));
    const nextState = !allCurrentlyOpen;
    const updated: Record<string, boolean> = {};
    activeFaculty.modules.forEach((m) => {
      updated[m.id] = nextState;
    });
    setExpandedModules(updated);
  };

  const handleFacultyChange = (id: FrontierFacultyId) => {
    setSelectedFacultyId(id);
    if (onSelectFaculty) onSelectFaculty(id);
  };

  const handleLaunchSimulator = (id: FrontierFacultyId) => {
    if (onSelectFaculty) onSelectFaculty(id);
    navigate('/simulation');
  };

  const getFacultyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal':
        return Terminal;
      case 'Zap':
        return Zap;
      case 'Dna':
        return Dna;
      case 'Brain':
        return Brain;
      case 'TrendingUp':
        return TrendingUp;
      case 'Coins':
        return Coins;
      case 'Bot':
        return Bot;
      case 'Gamepad2':
        return Gamepad2;
      case 'Globe':
        return Globe;
      case 'Briefcase':
        return Briefcase;
      default:
        return Layers;
    }
  };

  const ActiveIcon = getFacultyIcon(activeFaculty.iconName);
  const totalFacultyLessons = activeFaculty.modules.reduce((a, m) => a + m.lessons.length, 0);

  return (
    <div className="relative min-h-[calc(100vh-4rem)] p-4 sm:p-6 lg:p-10 space-y-12 max-w-7xl mx-auto font-sans">
      
      {/* 1. PRIMARY SECTION: ACTIVE FACULTY SYLLABUS & LESSONS (RIGHT AT THE TOP) */}
      <div id="curriculum-deck" className="rounded-3xl bg-[#070b19]/95 border border-cyan-500/30 p-6 sm:p-10 space-y-8 shadow-2xl">
        
        {/* 10 Fast Switcher Tabs */}
        <div className="space-y-3 pb-3 border-b border-white/10">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>PILIH FAKULTAS PEMBELAJARAN (10 FRONTIER DISCIPLINES):</span>
            </span>
            <span className="text-xs font-mono text-zinc-500 hidden sm:inline">
              519 Pelajaran Lengkap & Kuis
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-cyan-900/50">
            {FRONTIER_FACULTIES.map((fac, idx) => {
              const Icon = getFacultyIcon(fac.iconName);
              const isSelected = fac.id === selectedFacultyId;
              const lessonCount = fac.modules.reduce((a, m) => a + m.lessons.length, 0);

              return (
                <button
                  key={fac.id}
                  onClick={() => handleFacultyChange(fac.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono shrink-0 transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] font-bold'
                      : 'bg-white/[0.03] text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.08] border border-white/10'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-zinc-500'}`} />
                  <span>{idx < 9 ? '0' : ''}{idx + 1}. {fac.shortTitle}</span>
                  <span className="text-[11px] px-1.5 py-0.5 rounded bg-black/40 text-zinc-400 font-semibold">
                    {lessonCount}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Domain Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-2.5 max-w-3xl">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider">
              <ActiveIcon className="w-4 h-4 text-cyan-400" />
              <span>FAKULTAS AKTIF · {activeFaculty.difficulty} · +{activeFaculty.totalXp} XP</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              {activeFaculty.name}
            </h1>
            
            <p className="text-sm sm:text-base text-cyan-200/90 font-medium">
              {activeFaculty.headline}
            </p>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
              {activeFaculty.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 pt-1">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                {activeFaculty.estimatedHours} Jam Materi
              </span>
              <span>·</span>
              <span>{activeFaculty.modules.length} Modul Terstruktur</span>
              <span>·</span>
              <span>{totalFacultyLessons} Pelajaran</span>
              <span>·</span>
              <span className="text-emerald-400 font-bold">
                {activeFaculty.completionPercent}% Dikuasai
              </span>
            </div>
          </div>

          {/* Quick Launch Simulator Button */}
          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={() => handleLaunchSimulator(activeFaculty.id)}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black font-bold font-mono text-xs transition-all shadow-[0_0_25px_rgba(6,182,212,0.4)] flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <Play className="w-4 h-4 fill-black" />
              <span>Buka Sandbox {activeFaculty.shortTitle}</span>
            </button>
          </div>
        </div>

        {/* Modules & Deep Lessons */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-zinc-400 uppercase tracking-wider">
            <span className="text-cyan-400 font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>SILABUS LENGKAP ({totalFacultyLessons} PELAJARAN)</span>
            </span>
            
            <div className="flex items-center gap-3">
              <span className="text-zinc-400 text-xs">Klik pelajaran apa pun untuk mulai belajar</span>
              <button
                onClick={handleToggleAllModules}
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-cyan-300 border border-white/15 transition-colors cursor-pointer text-xs font-semibold"
              >
                {activeFaculty.modules.every((m) => isModuleExpanded(m.id))
                  ? 'Tutup Semua Modul'
                  : 'Buka Semua Modul'}
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {activeFaculty.modules.map((mod: FrontierFacultyModule, mIdx: number) => {
              const isExpanded = isModuleExpanded(mod.id);

              return (
                <div
                  key={mod.id}
                  className="rounded-2xl border border-white/10 bg-[#080d24] overflow-hidden transition-all shadow-md"
                >
                  {/* Module Header Bar */}
                  <div
                    onClick={() => handleToggleModule(mod.id)}
                    className="flex items-center justify-between p-4 sm:p-5 hover:bg-white/[0.04] cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                        {mod.code}
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                          {mod.title}
                        </h3>
                        <p className="text-xs text-zinc-400 mt-0.5 font-sans">
                          {mod.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs font-mono text-zinc-400 hidden sm:inline">
                        {mod.lessons.length} Pelajaran
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-cyan-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-zinc-400" />
                      )}
                    </div>
                  </div>

                  {/* Expanded Lessons */}
                  {isExpanded && (
                    <div className="border-t border-white/10 p-4 sm:p-6 space-y-3.5 bg-black/40">
                      {mod.lessons.map((lesson: FrontierFacultyLesson, lIdx: number) => {
                        const isCompleted =
                          userState.completedNodeIds.includes(lesson.id) || lesson.completed;

                        return (
                          <div
                            key={lesson.id}
                            onClick={() => {
                              setActiveLessonModal({
                                lesson,
                                moduleTitle: mod.title,
                                moduleIndex: mIdx,
                                lessonIndex: lIdx
                              });
                            }}
                            className="p-4 sm:p-5 rounded-xl border border-white/10 bg-zinc-950/90 hover:border-cyan-400/60 hover:bg-cyan-950/20 transition-all space-y-3 cursor-pointer group shadow-sm"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                              <div className="flex items-center gap-3">
                                {isCompleted ? (
                                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                ) : (
                                  <Circle className="w-5 h-5 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform" />
                                )}
                                <div>
                                  <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                                    {lesson.title}
                                  </h4>
                                  <span className="text-[11px] font-mono text-zinc-400">
                                    Pelajaran {lIdx + 1} dari {mod.lessons.length}
                                  </span>
                                </div>
                              </div>

                              <div className="flex items-center gap-3 shrink-0">
                                <span className="font-mono text-xs text-zinc-400 flex items-center gap-1 bg-black/40 px-2.5 py-1 rounded-md border border-white/5">
                                  <Clock className="w-3 h-3 text-zinc-500" />
                                  {lesson.duration}
                                </span>

                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveLessonModal({
                                      lesson,
                                      moduleTitle: mod.title,
                                      moduleIndex: mIdx,
                                      lessonIndex: lIdx
                                    });
                                  }}
                                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                                    isCompleted
                                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30'
                                      : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.2)]'
                                  }`}
                                >
                                  <BookOpen className="w-3.5 h-3.5" />
                                  <span>{isCompleted ? 'Pelajari Ulang' : 'Buka Pelajaran & Kuis'}</span>
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>

                            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pl-8 border-l-2 border-cyan-500/40 font-sans">
                              <strong className="text-cyan-400 font-mono text-xs">RINGKASAN: </strong>
                              {lesson.keyTakeaway}
                            </p>

                            {lesson.codeSnippet && (
                              <div className="pl-8">
                                <pre className="p-3 rounded-lg bg-black/70 border border-white/10 font-mono text-[11px] text-cyan-300 overflow-x-auto leading-relaxed">
                                  {lesson.codeSnippet.length > 150
                                    ? lesson.codeSnippet.slice(0, 150) + '\n// ... klik kartu untuk membuka kode lengkap'
                                    : lesson.codeSnippet}
                                </pre>
                              </div>
                            )}

                            {lesson.formula && (
                              <div className="pl-8 font-mono text-xs text-amber-300">
                                <span className="text-zinc-500 mr-2">FORMULA:</span>
                                <code>{lesson.formula}</code>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. SECONDARY SECTION: TANTANGAN HARIAN & EKSPLORASI BENTO GRID */}
      <div className="pt-6 border-t border-white/10 space-y-10">
        
        {/* Section Title */}
        <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>AREA EKSPLORASI & TANTANGAN HARIAN</span>
        </div>

        {/* Daily Decision Challenge Spotlight */}
        <ActiveDecisionSpotlight
          onAddXp={(amount) => {
            onCompleteWorkout(amount);
          }}
        />

        {/* 10 Frontier Faculties Bento Grid */}
        <FrontierBentoGrid
          faculties={FRONTIER_FACULTIES}
          selectedFacultyId={selectedFacultyId}
          onSelectFaculty={handleFacultyChange}
          onLaunchSimulator={handleLaunchSimulator}
        />

        {/* Holographic Constellation Map */}
        <HolographicSkillConstellation
          onLaunchNode={(nodeId) => {
            if (nodeId === 'node_kernel') handleFacultyChange('deep_it_cyber');
            if (nodeId === 'node_smr') handleFacultyChange('energy_economics');
            if (nodeId === 'node_crispr') handleFacultyChange('biotech_longevity');
            if (nodeId === 'node_stoic') handleFacultyChange('mindset_cognitive');
            if (nodeId === 'node_macro') handleFacultyChange('quant_macro_finance');
            if (nodeId === 'node_vector') handleFacultyChange('ai_autonomous_swarms');
          }}
        />
      </div>

      {/* Interactive Lesson Modal (For studying all 519 lessons & interactive quizzes) */}
      {activeLessonModal && (
        <InteractiveLessonModal
          lesson={activeLessonModal.lesson}
          faculty={activeFaculty}
          moduleTitle={activeLessonModal.moduleTitle}
          isOpen={true}
          onClose={() => setActiveLessonModal(null)}
          onCompleteLesson={(lessonId, xpReward) => {
            onCompleteNode(lessonId, xpReward);
          }}
          onNextLesson={handleNextLesson}
          onPrevLesson={handlePrevLesson}
          hasNextLesson={
            currentLessonFlatIndex >= 0 &&
            currentLessonFlatIndex < allFacultyLessons.length - 1
          }
          hasPrevLesson={currentLessonFlatIndex > 0}
          isCompleted={
            userState.completedNodeIds.includes(activeLessonModal.lesson.id) ||
            activeLessonModal.lesson.completed
          }
        />
      )}

      {/* Drill Quiz Modal (For certification nodes) */}
      {activeQuizNode && (
        <NodeQuizModal
          node={activeQuizNode}
          isOpen={true}
          onClose={() => setActiveQuizNode(null)}
          onCompleteNode={(nodeId, xpReward) => {
            onCompleteNode(nodeId, xpReward);
            setActiveQuizNode(null);
          }}
        />
      )}

      {/* Floating Gemini AI Socratic Sparring Coach */}
      <NovaAICoachWidget
        topicTitle={activeFaculty.headline}
        facultyName={activeFaculty.name}
        onRewardXp={(xp) => onCompleteWorkout(xp)}
      />
    </div>
  );
};
