import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Lock,
  Unlock,
  CheckCircle2,
  Sparkles,
  Zap,
  Play,
  ArrowRight,
  Shield,
  Layers,
  Clock,
  Compass,
  FileText,
  TrendingUp,
  Cpu,
  Brain,
  Check,
  X,
  Users,
  Binary,
  Microscope,
  Atom,
  GraduationCap
} from 'lucide-react';
import { SKILL_NODES, COURSES, FACULTY_DEPARTMENTS } from '../data/mockData';
import { SkillNode, NodeStatus, FacultyDiscipline } from '../types';
import { soundEngine } from '../lib/audio';
import { EnterpriseStorage } from '../lib/storage';

export const NeuralPaths: React.FC = () => {
  const navigate = useNavigate();
  const [nodes, setNodes] = useState<SkillNode[]>(() => {
    return EnterpriseStorage.getSkillNodes();
  });
  const [selectedNode, setSelectedNode] = useState<SkillNode | null>(nodes[3] || nodes[0]);
  const [facultyFilter, setFacultyFilter] = useState<FacultyDiscipline | 'all'>('all');

  // Save to storage whenever nodes change
  useEffect(() => {
    EnterpriseStorage.saveSkillNodes(nodes);
  }, [nodes]);

  // Filtered nodes based on selected faculty
  const filteredNodes = useMemo(() => {
    if (facultyFilter === 'all') return nodes;
    return nodes.filter((n) => n.facultyId === facultyFilter);
  }, [nodes, facultyFilter]);

  // Calculate overall sync percentage
  const completedNodesCount = nodes.filter((n) => n.status === 'completed').length;
  const syncPercentage = Math.round((completedNodesCount / nodes.length) * 100);

  // Group nodes by tier for the visual node-based tree
  const tier1Nodes = filteredNodes.filter((n) => n.tier === 1);
  const tier2Nodes = filteredNodes.filter((n) => n.tier === 2);
  const tier3Nodes = filteredNodes.filter((n) => n.tier === 3);
  const tier4Nodes = filteredNodes.filter((n) => n.tier === 4);

  const handleLaunchCourse = (courseId: string) => {
    soundEngine.playActivate();
    EnterpriseStorage.setActiveCourseId(courseId);
    navigate('/masterclass');
  };

  const handleToggleComplete = (nodeId: string) => {
    setNodes((prev) =>
      prev.map((node) => {
        if (node.id === nodeId) {
          const nextStatus: NodeStatus = node.status === 'completed' ? 'unlocked' : 'completed';
          const nextProgress = nextStatus === 'completed' ? 100 : 75;
          const updated: SkillNode = { ...node, status: nextStatus, progress: nextProgress };
          if (nextStatus === 'completed') {
            soundEngine.playComplete();
          } else {
            soundEngine.playClick();
          }
          if (selectedNode?.id === nodeId) {
            setSelectedNode(updated);
          }
          return updated;
        }
        return node;
      })
    );
  };

  return (
    <div className="relative min-h-[calc(100vh-5rem)] p-4 sm:p-8 lg:p-10 space-y-8 institute-noise">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-96 sm:w-[650px] h-96 bg-sky-500/10 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px]" />

      {/* Header Bar: Synced Progress & Operational Telemetry */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 p-6 sm:p-8 rounded-3xl bg-[#0C0E17]/85 backdrop-blur-xl border border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.6)]">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400">
              <Compass className="w-4 h-4" />
            </span>
            <span className="text-xs font-mono text-sky-400 tracking-wider uppercase font-semibold">
              Cognitive Curriculum Architecture
            </span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Multidisciplinary Knowledge Graph
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
            Non-linear intellectual progression across cognitive neuroscience, artificial intelligence, quantitative finance, and complex dynamical systems.
          </p>
        </div>

        {/* Global Progress Bar (75% Sync Complete) */}
        <div className="w-full lg:w-80 p-5 rounded-2xl bg-[#08090E]/90 border border-slate-850 shadow-inner flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span className="text-xs font-semibold text-slate-200 font-display">Academic Mastery</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-mono text-xl font-bold text-sky-400 tabular-nums">
                {syncPercentage}%
              </span>
              <span className="text-[11px] font-mono text-slate-400">Completed</span>
            </div>
          </div>

          <div className="h-2 w-full bg-slate-800/80 rounded-full overflow-hidden p-0.5 mb-3">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 via-sky-400 to-teal-300 rounded-full shadow-[0_0_12px_rgba(14,165,233,0.8)] transition-all duration-1000"
              style={{ width: `${syncPercentage}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              {completedNodesCount} Verified
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              {nodes.filter((n) => n.status === 'unlocked').length} Active
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-slate-600" />
              {nodes.filter((n) => n.status === 'locked').length} Locked
            </span>
          </div>
        </div>
      </div>

      {/* Faculty Discipline Selector */}
      <div className="relative z-10 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => {
            soundEngine.playClick();
            setFacultyFilter('all');
          }}
          className={`px-3.5 py-1.5 text-xs font-mono rounded-xl transition-all cursor-pointer whitespace-nowrap ${
            facultyFilter === 'all'
              ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-[0_0_15px_rgba(14,165,233,0.2)] font-semibold'
              : 'bg-[#0B0D16] text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          All Faculties ({nodes.length})
        </button>

        {FACULTY_DEPARTMENTS.map((dept) => (
          <button
            key={dept.id}
            onClick={() => {
              soundEngine.playClick();
              setFacultyFilter(dept.id);
            }}
            className={`px-3.5 py-1.5 text-xs font-mono rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
              facultyFilter === dept.id
                ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-[0_0_15px_rgba(14,165,233,0.2)] font-semibold'
                : 'bg-[#0B0D16] text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: dept.accent }} />
            <span>{dept.name.split('&')[0]}</span>
          </button>
        ))}
      </div>

      {/* Main Grid: Interactive Visual Skill Tree + Node Detail Inspector */}
      <div className="relative z-10 grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Visual Node-based Tree */}
        <div className="xl:col-span-8 p-6 sm:p-8 rounded-3xl bg-[#0B0D16]/75 backdrop-blur-xl border border-slate-800/90 relative overflow-hidden">
          
          {/* Subtle grid lines background */}
          <div className="absolute inset-0 institute-grid opacity-30 pointer-events-none" />

          {/* Tree Navigation & View Filter Controls */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase text-slate-400">Graph View</span>
              <span className="text-xs text-slate-600">/</span>
              <span className="text-xs font-mono text-sky-300">Epistemic Conduits</span>
            </div>

            <span className="text-xs font-mono text-slate-400">
              Showing {filteredNodes.length} nodes in current faculty scope
            </span>
          </div>

          {/* SVG Neural Conduit Connections */}
          <div className="relative space-y-12">

            {/* TIER 1: Foundations */}
            {tier1Nodes.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                    Tier 01: Foundational Epistemology &amp; Axioms
                  </div>
                  <span className="text-slate-400">1,240 Fellows Mastered</span>
                </div>

                <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
                  {tier1Nodes.map((node) => (
                    <SkillNodeCard
                      key={node.id}
                      node={node}
                      isSelected={selectedNode?.id === node.id}
                      onSelect={() => {
                        soundEngine.playClick();
                        setSelectedNode(node);
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Connecting Line from Tier 1 to Tier 2 */}
            {tier1Nodes.length > 0 && tier2Nodes.length > 0 && (
              <div className="flex justify-center -my-4 relative">
                <div className="w-0.5 h-8 bg-gradient-to-b from-sky-500/60 to-sky-400/90 shadow-[0_0_8px_rgba(14,165,233,0.6)]" />
                <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(14,165,233,1)]" />
              </div>
            )}

            {/* TIER 2: Core Execution & Asymmetry */}
            {tier2Nodes.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    Tier 02: Core Execution &amp; Structural Asymmetry
                  </div>
                  <span className="text-slate-400">890 Fellows Active</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {tier2Nodes.map((node) => (
                    <SkillNodeCard
                      key={node.id}
                      node={node}
                      isSelected={selectedNode?.id === node.id}
                      onSelect={() => {
                        soundEngine.playClick();
                        setSelectedNode(node);
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Branching Neural Lines to Tier 3 */}
            {tier2Nodes.length > 0 && tier3Nodes.length > 0 && (
              <div className="flex justify-center -my-4 relative">
                <div className="w-0.5 h-8 bg-gradient-to-b from-sky-400/80 to-sky-500/80 shadow-[0_0_8px_rgba(14,165,233,0.6)]" />
                <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(14,165,233,1)]" />
              </div>
            )}

            {/* TIER 3: The Pinnacle & Autonomous Swarms */}
            {tier3Nodes.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-sky-400">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
                    Tier 03: The One Person Unicorn &amp; Autonomous Swarms
                  </div>
                  <span className="text-sky-400 font-semibold">640 Fellows Researching</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {tier3Nodes.map((node) => (
                    <SkillNodeCard
                      key={node.id}
                      node={node}
                      isSelected={selectedNode?.id === node.id}
                      onSelect={() => {
                        soundEngine.playClick();
                        setSelectedNode(node);
                      }}
                      isPinnacle={node.id === 'node_one_person_unicorn'}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Connecting Line to Tier 4 */}
            {tier3Nodes.length > 0 && tier4Nodes.length > 0 && (
              <div className="flex justify-center -my-4 relative">
                <div className="w-0.5 h-8 bg-gradient-to-b from-slate-700 to-slate-800" />
                <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-slate-700" />
              </div>
            )}

            {/* TIER 4: Sovereign Mastery (Locked) */}
            {tier4Nodes.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                    Tier 04: Sovereign Transcendence &amp; Quantum Vaults
                  </div>
                  <span className="text-slate-400">Requires Fellowship Defense</span>
                </div>

                <div className="grid grid-cols-1 max-w-md mx-auto">
                  {tier4Nodes.map((node) => (
                    <SkillNodeCard
                      key={node.id}
                      node={node}
                      isSelected={selectedNode?.id === node.id}
                      onSelect={() => {
                        soundEngine.playClick();
                        setSelectedNode(node);
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Node Details Inspector / Action Launch Pad */}
        <div className="xl:col-span-4 sticky top-28 space-y-6">
          {selectedNode ? (
            <div className="p-6 sm:p-7 rounded-3xl bg-[#0B0D16]/95 backdrop-blur-xl border border-slate-800 shadow-[0_0_40px_rgba(0,0,0,0.8)] text-slate-200 space-y-6">
              
              {/* Header Badge & Title */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-semibold text-sky-400 tracking-wider">
                    {selectedNode.codename}
                  </span>
                  
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-mono font-medium px-2.5 py-1 rounded-lg ${
                      selectedNode.status === 'completed'
                        ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/80'
                        : selectedNode.status === 'unlocked'
                        ? 'bg-sky-950/80 text-sky-300 border border-sky-800/80 shadow-[0_0_15px_rgba(14,165,233,0.2)]'
                        : 'bg-slate-800/80 text-slate-400 border border-slate-700'
                    }`}
                  >
                    {selectedNode.status === 'completed' ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        Verified Complete
                      </>
                    ) : selectedNode.status === 'unlocked' ? (
                      <>
                        <Unlock className="w-3.5 h-3.5 text-sky-400" />
                        Active Stream
                      </>
                    ) : (
                      <>
                        <Lock className="w-3.5 h-3.5 text-slate-500" />
                        Locked Prerequisite
                      </>
                    )}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold tracking-tight text-white">
                  {selectedNode.title}
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  {selectedNode.category} · {selectedNode.durationHours} Hours Dedicated Research
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedNode.description}
              </p>

              {/* Performance Multipliers */}
              <div className="grid grid-cols-3 gap-2.5 p-3 rounded-2xl bg-[#08090E] border border-slate-850 text-center">
                <div className="p-2">
                  <div className="text-[10px] uppercase font-mono text-slate-400">Mental Models</div>
                  <div className="font-mono text-base font-bold text-white mt-0.5">
                    {selectedNode.metrics.mentalModels}
                  </div>
                </div>
                <div className="p-2 border-x border-slate-850">
                  <div className="text-[10px] uppercase font-mono text-slate-400">Frameworks</div>
                  <div className="font-mono text-base font-bold text-white mt-0.5">
                    {selectedNode.metrics.frameworks}
                  </div>
                </div>
                <div className="p-2">
                  <div className="text-[10px] uppercase font-mono text-slate-400">Yield ROI</div>
                  <div className="font-mono text-base font-bold text-sky-400 mt-0.5">
                    {selectedNode.metrics.roiMultiplier}
                  </div>
                </div>
              </div>

              {/* Progress Slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Node Sync Depth</span>
                  <span className="text-sky-300 font-semibold">
                    {selectedNode.progress}%
                  </span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full"
                    style={{ width: `${selectedNode.progress}%` }}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                {selectedNode.status !== 'locked' ? (
                  <button
                    onClick={() => handleLaunchCourse(selectedNode.courseId)}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(14,165,233,0.3)] transition-all active:scale-[0.98] font-display cursor-pointer"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>Launch Master Lecture</span>
                  </button>
                ) : (
                  <div className="w-full py-3 px-4 rounded-xl bg-slate-800/50 border border-slate-700/60 text-slate-400 text-xs flex items-center justify-center gap-2 cursor-not-allowed">
                    <Lock className="w-4 h-4" />
                    <span>Requires Prerequisite Thesis Completion</span>
                  </div>
                )}

                <button
                  onClick={() => handleToggleComplete(selectedNode.id)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#08090E] hover:bg-slate-850 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Check className="w-3.5 h-3.5 text-sky-400" />
                  <span>
                    {selectedNode.status === 'completed'
                      ? 'Mark as Active Research'
                      : 'Sign Off Academic Mastery'}
                  </span>
                </button>
              </div>

              <div className="text-[10px] text-slate-400 text-center font-mono">
                Cryptographic research signature anchored to user session.
              </div>
            </div>
          ) : (
            <div className="p-8 rounded-3xl bg-[#0B0D16]/60 border border-slate-800/80 text-center text-slate-400 text-xs">
              Select any node in the epistemic graph to inspect research syllabus.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Sub-component for individual Node Card in the Skill Tree
interface SkillNodeCardProps {
  node: SkillNode;
  isSelected: boolean;
  onSelect: () => void;
  isPinnacle?: boolean;
}

const SkillNodeCard: React.FC<SkillNodeCardProps> = ({
  node,
  isSelected,
  onSelect,
  isPinnacle,
}) => {
  const isCompleted = node.status === 'completed';
  const isUnlocked = node.status === 'unlocked';
  const isLocked = node.status === 'locked';

  return (
    <div
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect();
        }
      }}
      className={`group relative text-left p-5 rounded-2xl cursor-pointer transition-all duration-300 ${
        isLocked
          ? 'bg-[#08090E]/50 border border-slate-850 opacity-60 hover:opacity-80'
          : isCompleted
          ? 'bg-[#0B0D16]/80 border border-emerald-500/30 hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]'
          : 'bg-[#0B0D16]/90 border border-sky-500/40 shadow-[0_0_20px_rgba(14,165,233,0.15)] hover:border-sky-400 hover:shadow-[0_0_30px_rgba(14,165,233,0.3)]'
      } ${
        isSelected
          ? 'ring-2 ring-sky-400 ring-offset-2 ring-offset-[#08090E] shadow-[0_0_30px_rgba(14,165,233,0.4)]'
          : ''
      }`}
    >
      {/* Visual pulse corner for pinnacle node */}
      {isPinnacle && (
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-400" />
        </span>
      )}

      {/* Top Status & Tier */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-mono tracking-wider text-slate-400 font-medium">
          {node.codename}
        </span>

        {isCompleted && (
          <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>100%</span>
          </div>
        )}
        {isUnlocked && (
          <div className="flex items-center gap-1 text-[11px] font-mono text-sky-400">
            <Unlock className="w-3.5 h-3.5" />
            <span>{node.progress}%</span>
          </div>
        )}
        {isLocked && (
          <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
            <Lock className="w-3.5 h-3.5" />
            <span>Locked</span>
          </div>
        )}
      </div>

      {/* Title */}
      <h4
        className={`text-sm sm:text-base font-bold tracking-tight mb-1.5 transition-colors font-display ${
          isLocked
            ? 'text-slate-400'
            : isCompleted
            ? 'text-slate-100 group-hover:text-emerald-300'
            : 'text-white group-hover:text-sky-300'
        }`}
      >
        {node.title}
      </h4>

      {/* Description */}
      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
        {node.description}
      </p>

      {/* Bottom Footer Info */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
        <span>{node.durationHours}h Research</span>
        <span className="text-sky-400/90">{node.metrics.roiMultiplier} Yield</span>
      </div>
    </div>
  );
};
