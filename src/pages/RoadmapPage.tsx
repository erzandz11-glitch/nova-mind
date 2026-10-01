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
  BookOpen
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

  // Keep first module expanded
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({
    mod_dist_systems: true,
    mod_grid_nuclear: true,
    mod_cellular_epigenetics: true,
    mod_stoic_crisis: true,
    mod_macro_liquidity: true,
    mod_btc_halving: true,
    mod_llm_rag: true,
    mod_godot_fundamentals: true,
    mod_html_css_responsive: true,
    mod_biz_model_lean: true
  });

  const [activeQuizNode, setActiveQuizNode] = useState<RoadmapNode | null>(null);

  // Active Lesson Modal State
  const [activeLessonModal, setActiveLessonModal] = useState<{
    lesson: FrontierFacultyLesson;
    moduleTitle: string;
    moduleIndex: number;
    lessonIndex: number;
  } | null>(null);

  const activeFaculty: FrontierFaculty =
    FRONTIER_FACULTIES.find((f) => f.id === selectedFacultyId) || FRONTIER_FACULTIES[0];

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
    soundEngine.playClick();
    setExpandedModules((prev) => ({ ...prev, [modId]: !prev[modId] }));
  };

  const handleFacultyChange = (id: FrontierFacultyId) => {
    soundEngine.playClick();
    setSelectedFacultyId(id);
    if (onSelectFaculty) onSelectFaculty(id);
  };

  const handleLaunchSimulator = (id: FrontierFacultyId) => {
    soundEngine.playActivate();
    if (onSelectFaculty) onSelectFaculty(id);
    navigate('/simulation');
  };

  const handleLaunchConstellationNode = (nodeId: string) => {
    if (nodeId === 'node_kernel') {
      handleFacultyChange('deep_it_cyber');
      const drill = FRONTIER_FACULTIES[0].drillNodes[0];
      if (drill) setActiveQuizNode(drill);
    } else if (nodeId === 'node_smr') {
      handleFacultyChange('energy_economics');
      const drill = FRONTIER_FACULTIES[1].drillNodes[0];
      if (drill) setActiveQuizNode(drill);
    } else if (nodeId === 'node_crispr') {
      handleFacultyChange('biotech_longevity');
      const drill = FRONTIER_FACULTIES[2].drillNodes[0];
      if (drill) setActiveQuizNode(drill);
    } else if (nodeId === 'node_stoic') {
      handleFacultyChange('mindset_cognitive');
      const drill = FRONTIER_FACULTIES[3].drillNodes[0];
      if (drill) setActiveQuizNode(drill);
    } else if (nodeId === 'node_macro') {
      handleFacultyChange('quant_macro_finance');
      const drill = FRONTIER_FACULTIES[4].drillNodes[0];
      if (drill) setActiveQuizNode(drill);
    } else if (nodeId === 'node_vector') {
      handleFacultyChange('ai_autonomous_swarms');
      const drill = FRONTIER_FACULTIES[6].drillNodes[0];
      if (drill) setActiveQuizNode(drill);
    }
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

  return (
    <div className="relative min-h-[calc(100vh-4rem)] p-4 sm:p-6 lg:p-10 space-y-12 max-w-7xl mx-auto cyber-grid">
      
      {/* 1. HERO SPOTLIGHT: ACTIVE PLAYABLE 60-SECOND ASYMMETRIC DECISION CHALLENGE */}
      <ActiveDecisionSpotlight
        onAddXp={(amount) => {
          onCompleteWorkout(amount);
        }}
      />

      {/* 2. HOLOGRAPHIC SKILL CONSTELLATION (VISUAL ROADMAP WITH SVG LASERS & ORBS) */}
      <HolographicSkillConstellation
        onLaunchNode={handleLaunchConstellationNode}
      />

      {/* 3. 10 FRONTIER FACULTIES BENTO GRID (RICH & VIBRANT) */}
      <FrontierBentoGrid
        faculties={FRONTIER_FACULTIES}
        selectedFacultyId={selectedFacultyId}
        onSelectFaculty={handleFacultyChange}
        onLaunchSimulator={handleLaunchSimulator}
      />

      {/* 4. ACTIVE FACULTY TACTICAL DRILL DECK & SYLLABUS ACCORDION */}
      <div id="curriculum-deck" className="rounded-3xl bg-[#06091A]/95 border border-cyan-500/30 p-6 sm:p-10 space-y-8 hud-bracket shadow-2xl scroll-mt-20">
        
        {/* Fast 10 Faculty Tabs at Top of Curriculum Deck */}
        <div className="space-y-2 pb-2">
          <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider block">
            PILIH FAKULTAS PEMBELAJARAN (10 FRONTIER DOMAINS):
          </span>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-cyan-900/50">
            {FRONTIER_FACULTIES.map((fac, idx) => {
              const Icon = getFacultyIcon(fac.iconName);
              const isSelected = fac.id === selectedFacultyId;
              return (
                <button
                  key={fac.id}
                  onClick={() => handleFacultyChange(fac.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono shrink-0 transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.25)] font-bold'
                      : 'bg-white/[0.03] text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.07] border border-white/10'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-cyan-400' : 'text-zinc-500'}`} />
                  <span>{idx < 9 ? '0' : ''}{idx + 1}. {fac.shortTitle}</span>
                  <span className="text-[10px] opacity-70">({fac.modules.reduce((a, m) => a + m.lessons.length, 0)})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Domain Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider">
              <ActiveIcon className="w-4 h-4 text-cyan-400" />
              <span>ACTIVE DOMAIN · {activeFaculty.difficulty} · +{activeFaculty.totalXp} TOTAL XP</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              {activeFaculty.name}
            </h2>
            
            <p className="text-xs sm:text-sm text-cyan-200/90 font-mono font-medium">
              {activeFaculty.headline}
            </p>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {activeFaculty.description}
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-zinc-400 pt-2">
              <span>{activeFaculty.estimatedHours}h Estimated Effort</span>
              <span>·</span>
              <span>{activeFaculty.modules.length} Tactical Modules</span>
              <span>·</span>
              <span className="text-emerald-400 font-bold">
                {activeFaculty.completionPercent}% Mastered
              </span>
            </div>
          </div>

          {/* Quick Launch Simulator Button */}
          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={() => handleLaunchSimulator(activeFaculty.id)}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black font-extrabold font-mono text-xs transition-all shadow-[0_0_25px_rgba(6,182,212,0.4)] flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <Play className="w-4 h-4 fill-black" />
              <span>Launch {activeFaculty.shortTitle} Sandbox</span>
            </button>
          </div>
        </div>

        {/* Modules & Deep Lessons */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
            <span className="text-cyan-400 font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> CURRICULUM SYLLABUS ({activeFaculty.modules.reduce((a, m) => a + m.lessons.length, 0)} LESSONS)
            </span>
            <div className="flex items-center gap-3 text-zinc-400 text-xs">
              <span className="text-zinc-500">Klik materi untuk belajar & kuis</span>
              <button
                onClick={() => {
                  const allExpanded = activeFaculty.modules.every((m) => expandedModules[m.id]);
                  const updated: Record<string, boolean> = { ...expandedModules };
                  activeFaculty.modules.forEach((m) => {
                    updated[m.id] = !allExpanded;
                  });
                  setExpandedModules(updated);
                }}
                className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-cyan-300 border border-white/10 transition-colors cursor-pointer text-[11px]"
              >
                {activeFaculty.modules.every((m) => expandedModules[m.id]) ? 'Collapse All' : 'Buka Semua Modul'}
              </button>
            </div>
          </div>


          <div className="space-y-3.5">
            {activeFaculty.modules.map((mod: FrontierFacultyModule, mIdx: number) => {
              const isExpanded = expandedModules[mod.id] ?? false;

              return (
                <div
                  key={mod.id}
                  className="rounded-2xl border border-white/10 bg-[#080C22] overflow-hidden transition-all shadow-md"
                >
                  {/* Module Header Bar */}
                  <div
                    onClick={() => handleToggleModule(mod.id)}
                    className="flex items-center justify-between p-4 sm:p-5 hover:bg-white/[0.04] cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                        {mod.code}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white tracking-tight">
                          {mod.title}
                        </h4>
                        <p className="text-xs text-zinc-400 mt-0.5 font-mono">
                          {mod.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs font-mono text-zinc-400 hidden sm:inline">
                        {mod.lessons.length} lessons
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
                    <div className="border-t border-white/10 p-4 sm:p-6 space-y-3 bg-black/40">
                      {mod.lessons.map((lesson: FrontierFacultyLesson, lIdx: number) => {
                        const isCompleted =
                          userState.completedNodeIds.includes(lesson.id) || lesson.completed;

                        return (
                          <div
                            key={lesson.id}
                            onClick={() => {
                              soundEngine.playClick();
                              setActiveLessonModal({
                                lesson,
                                moduleTitle: mod.title,
                                moduleIndex: mIdx,
                                lessonIndex: lIdx
                              });
                            }}
                            className="p-4 sm:p-5 rounded-xl border border-white/10 bg-zinc-950/80 hover:border-cyan-400/60 hover:bg-cyan-950/15 transition-all space-y-3 cursor-pointer group shadow-sm"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                              <div className="flex items-center gap-3">
                                {isCompleted ? (
                                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                ) : (
                                  <Circle className="w-5 h-5 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform" />
                                )}
                                <div>
                                  <h5 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                                    {lesson.title}
                                  </h5>
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
                                    soundEngine.playClick();
                                    setActiveLessonModal({
                                      lesson,
                                      moduleTitle: mod.title,
                                      moduleIndex: mIdx,
                                      lessonIndex: lIdx
                                    });
                                  }}
                                  className="px-3.5 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                                >
                                  <BookOpen className="w-3.5 h-3.5" />
                                  <span>{isCompleted ? 'Pelajari Ulang' : 'Buka Pelajaran'}</span>
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>

                            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pl-8 border-l-2 border-cyan-500/40 font-sans">
                              <strong className="text-cyan-400 font-mono">TELEMETRY: </strong>
                              {lesson.keyTakeaway}
                            </p>

                            {lesson.codeSnippet && (
                              <div className="pl-8">
                                <pre className="p-3 rounded-lg bg-black/70 border border-white/10 font-mono text-[11px] text-cyan-300 overflow-x-auto leading-relaxed">
                                  {lesson.codeSnippet.length > 150
                                    ? lesson.codeSnippet.slice(0, 150) + '\n// ... klik untuk melihat kode lengkap'
                                    : lesson.codeSnippet}
                                </pre>
                              </div>
                            )}

                            {lesson.formula && (
                              <div className="pl-8 font-mono text-xs text-amber-300">
                                <span className="text-zinc-500 mr-2">EQUATION:</span>
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

        {/* Verification Drill Nodes */}
        {activeFaculty.drillNodes && activeFaculty.drillNodes.length > 0 && (
          <div className="pt-6 border-t border-white/10 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 uppercase">
              <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                <Shield className="w-4 h-4" /> FACULTY CERTIFICATION DRILLS
              </span>
              <span>INTERACTIVE QUIZ PROTOCOLS</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeFaculty.drillNodes.map((drill) => (
                <div
                  key={drill.id}
                  className="p-5 rounded-2xl border border-white/10 bg-[#080C22] hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-3"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-emerald-400 font-bold uppercase tracking-wider">
                        Tier {drill.tier} Drill · {drill.category}
                      </span>
                      <span className="text-amber-400 font-bold flex items-center gap-1">
                        <Zap className="w-3.5 h-3.5 fill-current" />
                        +{drill.xpReward} XP
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white mt-1.5">
                      {drill.title}
                    </h4>
                    <p className="text-xs text-zinc-400 mt-1">
                      {drill.subtitle}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      soundEngine.playActivate();
                      setActiveQuizNode(drill);
                    }}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 hover:from-emerald-500/30 hover:to-cyan-500/30 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Launch Certification Quiz ({drill.questionsCount} Questions)</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
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
