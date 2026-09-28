import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Terminal,
  Zap,
  Dna,
  Brain,
  TrendingUp,
  Coins,
  Bot,
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
  ArrowRight
} from 'lucide-react';
import {
  RoadmapNode,
  UserGamificationState,
  FrontierFaculty,
  FrontierFacultyId,
  FrontierFacultyModule
} from '../types';
import { FRONTIER_FACULTIES } from '../data/frontierFacultiesData';
import { ActiveDecisionSpotlight } from '../components/ActiveDecisionSpotlight';
import { HolographicSkillConstellation } from '../components/HolographicSkillConstellation';
import { FrontierBentoGrid } from '../components/FrontierBentoGrid';
import { NodeQuizModal } from '../components/NodeQuizModal';
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
    mod_dit_1: true,
    mod_en_1: true,
    mod_bio_1: true,
    mod_cog_1: true,
    mod_fin_1: true,
    mod_cry_1: true,
    mod_ai_1: true
  });

  const [activeQuizNode, setActiveQuizNode] = useState<RoadmapNode | null>(null);

  const activeFaculty: FrontierFaculty =
    FRONTIER_FACULTIES.find((f) => f.id === selectedFacultyId) || FRONTIER_FACULTIES[0];

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
    // Map constellation node to appropriate faculty drill
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

      {/* 3. 7 FRONTIER FACULTIES BENTO GRID (RICH & VIBRANT) */}
      <FrontierBentoGrid
        faculties={FRONTIER_FACULTIES}
        selectedFacultyId={selectedFacultyId}
        onSelectFaculty={handleFacultyChange}
        onLaunchSimulator={handleLaunchSimulator}
      />

      {/* 4. ACTIVE FACULTY TACTICAL DRILL DECK & SYLLABUS ACCORDION */}
      <div className="rounded-3xl bg-[#06091A]/95 border border-cyan-500/30 p-6 sm:p-10 space-y-8 hud-bracket shadow-2xl">
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
              <span className="flex items-center gap-1.5 text-zinc-200">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                {activeFaculty.modules.length} Modules
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5 text-zinc-200">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                {activeFaculty.estimatedHours} Estimated Hours
              </span>
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
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 uppercase tracking-wider">
            <span className="text-cyan-400 font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> CURRICULUM SYLLABUS ACCORDION
            </span>
            <span>{activeFaculty.modules.reduce((a, m) => a + m.lessons.length, 0)} DEEP LESSONS</span>
          </div>

          <div className="space-y-3.5">
            {activeFaculty.modules.map((mod: FrontierFacultyModule) => {
              const isExpanded = expandedModules[mod.id] ?? false;

              return (
                <div
                  key={mod.id}
                  className="rounded-2xl border border-white/10 bg-[#080C22] overflow-hidden transition-all shadow-md"
                >
                  {/* Module Bar */}
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
                    <div className="border-t border-white/10 p-4 sm:p-6 space-y-4 bg-black/40">
                      {mod.lessons.map((lesson) => (
                        <div
                          key={lesson.id}
                          className="p-4 rounded-xl border border-white/10 bg-zinc-950/80 hover:border-cyan-500/40 transition-all space-y-2.5"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                              {lesson.completed ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                              ) : (
                                <Circle className="w-4 h-4 text-cyan-400 shrink-0" />
                              )}
                              <h5 className="text-xs sm:text-sm font-bold text-white">
                                {lesson.title}
                              </h5>
                            </div>
                            <span className="font-mono text-xs text-zinc-400 shrink-0 flex items-center gap-1">
                              <Clock className="w-3 h-3 text-zinc-500" />
                              {lesson.duration}
                            </span>
                          </div>

                          <p className="text-xs text-zinc-300 leading-relaxed pl-6 border-l-2 border-cyan-500/40">
                            <strong className="text-cyan-400 font-mono">TELEMETRY: </strong>
                            {lesson.keyTakeaway}
                          </p>

                          {lesson.codeSnippet && (
                            <div className="pl-6">
                              <pre className="p-3.5 rounded-xl bg-black/70 border border-white/10 font-mono text-[11px] text-cyan-300 overflow-x-auto leading-relaxed">
                                {lesson.codeSnippet}
                              </pre>
                            </div>
                          )}

                          {lesson.formula && (
                            <div className="pl-6 font-mono text-xs text-amber-300">
                              <span className="text-zinc-500 mr-2">EQUATION:</span>
                              <code>{lesson.formula}</code>
                            </div>
                          )}
                        </div>
                      ))}
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

      {/* Drill Quiz Modal */}
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
    </div>
  );
};
