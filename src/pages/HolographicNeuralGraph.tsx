import React, { useState } from 'react';
import {
  Sparkles,
  Zap,
  Lock,
  Unlock,
  CheckCircle2,
  Layers,
  ArrowRight,
  TrendingUp,
  Cpu,
  Brain,
  Shield,
  Activity,
  Award,
  Filter,
  X
} from 'lucide-react';
import {
  HOLOGRAPHIC_NODES,
  HOLOGRAPHIC_LINKS,
  MEGA_TRACKS
} from '../data/megaTracksData';
import {
  HolographicSkillNode,
  MegaTrackId,
  UserGamificationState
} from '../types';
import { soundEngine } from '../lib/audio';

interface HolographicNeuralGraphProps {
  userState: UserGamificationState;
  onAddXp: (amount: number) => void;
}

export const HolographicNeuralGraph: React.FC<HolographicNeuralGraphProps> = ({
  userState,
  onAddXp
}) => {
  const [nodes, setNodes] = useState<HolographicSkillNode[]>(HOLOGRAPHIC_NODES);
  const [selectedNode, setSelectedNode] = useState<HolographicSkillNode | null>(nodes[0]);
  const [filterTrack, setFilterTrack] = useState<MegaTrackId | 'all'>('all');
  const [isInspectorOpen, setIsInspectorOpen] = useState<boolean>(true);

  // Active filter
  const visibleNodes = filterTrack === 'all' ? nodes : nodes.filter((n) => n.trackId === filterTrack);

  const handleSelectNode = (node: HolographicSkillNode) => {
    soundEngine.playClick();
    setSelectedNode(node);
    setIsInspectorOpen(true);
  };

  const handleToggleMastery = (nodeId: string) => {
    soundEngine.playLevelUp();
    setNodes((prev) =>
      prev.map((n) => {
        if (n.id === nodeId) {
          const nextStatus = n.status === 'completed' ? 'unlocked' : 'completed';
          if (nextStatus === 'completed') {
            onAddXp(75);
          }
          const updated = { ...n, status: nextStatus as any };
          if (selectedNode?.id === nodeId) {
            setSelectedNode(updated);
          }
          return updated;
        }
        return n;
      })
    );
  };

  const completedCount = nodes.filter((n) => n.status === 'completed').length;
  const syncPercentage = Math.round((completedCount / nodes.length) * 100);

  return (
    <div className="relative min-h-[calc(100vh-5rem)] p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-10 left-1/3 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[160px]" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px]" />

      {/* Header Bar */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-3xl bg-[#080B1A]/90 backdrop-blur-xl border border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.6)]">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Sparkles className="w-5 h-5" />
            </span>
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
              Knowledge Constellation
            </span>
          </div>
          <h1 className="mt-1 font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
            Holographic Neural Skill Tree
          </h1>
          <p className="text-sm text-slate-400">
            Interactive multidimensional constellation connecting frontier faculties with real-time laser conduits.
          </p>
        </div>

        {/* Global Sync Gauge */}
        <div className="flex items-center gap-4 p-3 rounded-2xl bg-[#0B0F24] border border-slate-800">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-400 to-cyan-500 flex items-center justify-center font-extrabold text-black text-sm shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            {syncPercentage}%
          </div>
          <div>
            <div className="text-xs font-mono text-slate-400">Constellation Sync</div>
            <div className="text-xs font-bold text-white">
              {completedCount} of {nodes.length} Nodes Mastered
            </div>
          </div>
        </div>
      </div>

      {/* Faculty Filter Bar */}
      <div className="relative z-10 flex flex-wrap items-center gap-2">
        <span className="text-xs font-mono uppercase text-slate-400 font-bold flex items-center gap-1.5 mr-2">
          <Filter className="w-3.5 h-3.5" />
          Faculty:
        </span>
        <button
          onClick={() => {
            soundEngine.playClick();
            setFilterTrack('all');
          }}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium border transition-all cursor-pointer ${
            filterTrack === 'all'
              ? 'bg-slate-200 text-black border-white shadow-lg'
              : 'bg-[#090D22] text-slate-400 border-slate-800 hover:text-white'
          }`}
        >
          All 5 Faculties
        </button>
        {MEGA_TRACKS.map((t) => (
          <button
            key={t.id}
            onClick={() => {
              soundEngine.playClick();
              setFilterTrack(t.id);
            }}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium border transition-all cursor-pointer ${
              filterTrack === t.id
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                : 'bg-[#090D22] text-slate-400 border-slate-800 hover:text-white'
            }`}
          >
            <span>{t.icon}</span>
            <span>{t.title}</span>
          </button>
        ))}
      </div>

      {/* Holographic Canvas Area + Slide-out Inspector */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Holographic Interactive SVG Constellation (8 or 12 cols) */}
        <div
          className={`${
            isInspectorOpen && selectedNode ? 'lg:col-span-8' : 'lg:col-span-12'
          } rounded-3xl bg-[#060814]/90 border border-slate-800/80 p-6 relative overflow-hidden min-h-[560px] flex items-center justify-center shadow-2xl`}
        >
          {/* Subtle grid background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}
          />

          {/* SVG Laser Links */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 950 780">
            <defs>
              <linearGradient id="laserBeamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.8" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {HOLOGRAPHIC_LINKS.map((link, idx) => {
              const src = nodes.find((n) => n.id === link.source);
              const tgt = nodes.find((n) => n.id === link.target);
              if (!src || !tgt) return null;

              const isConnectedActive = src.status === 'completed' && tgt.status === 'completed';

              return (
                <g key={idx}>
                  {/* Background laser conduit */}
                  <line
                    x1={src.x}
                    y1={src.y}
                    x2={tgt.x}
                    y2={tgt.y}
                    stroke={isConnectedActive ? 'url(#laserBeamGrad)' : '#1e293b'}
                    strokeWidth={isConnectedActive ? 2.5 : 1.2}
                    strokeDasharray={isConnectedActive ? '6, 6' : undefined}
                    filter={isConnectedActive ? 'url(#glow)' : undefined}
                    className={isConnectedActive ? 'animate-pulse' : undefined}
                  />
                </g>
              );
            })}
          </svg>

          {/* Render Nodes */}
          <div className="absolute inset-0 w-full h-full">
            {visibleNodes.map((node) => {
              const isSelected = selectedNode?.id === node.id;
              const isCompleted = node.status === 'completed';
              const isCurrent = node.status === 'current';
              const isLocked = node.status === 'locked';

              return (
                <div
                  key={node.id}
                  onClick={() => handleSelectNode(node)}
                  style={{
                    left: `${(node.x / 950) * 100}%`,
                    top: `${(node.y / 780) * 100}%`
                  }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer transition-all duration-300 z-20`}
                >
                  {/* Glowing halo for active/mastered nodes */}
                  {isCompleted && (
                    <div
                      className="absolute inset-0 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: node.facultyColor }}
                    />
                  )}

                  {/* Pulsing indicator for current in-progress node */}
                  {isCurrent && (
                    <div className="absolute -inset-2 rounded-full border border-cyan-400 animate-ping opacity-60 pointer-events-none" />
                  )}

                  {/* Node Circle */}
                  <div
                    className={`relative w-14 h-14 rounded-2xl flex flex-col items-center justify-center p-1 transition-all ${
                      isSelected
                        ? 'scale-125 ring-2 ring-white shadow-[0_0_35px_rgba(255,255,255,0.4)]'
                        : 'group-hover:scale-110'
                    } ${
                      isCompleted
                        ? 'bg-[#0B1226] border-2 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                        : isLocked
                        ? 'bg-[#070914] border border-slate-800 text-slate-600'
                        : 'bg-[#0A1024] border border-cyan-500/50 text-cyan-300'
                    }`}
                    style={{
                      borderColor: isCompleted ? node.facultyColor : undefined
                    }}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    ) : isLocked ? (
                      <Lock className="w-5 h-5 text-slate-500" />
                    ) : (
                      <Zap className="w-5 h-5 text-cyan-400 animate-pulse" />
                    )}
                    <span className="text-[9px] font-mono font-bold mt-0.5 tracking-tighter">
                      {node.codename}
                    </span>
                  </div>

                  {/* Label tooltip underneath */}
                  <div className="absolute top-16 left-1/2 -translate-x-1/2 w-36 text-center pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-bold text-slate-200 block truncate drop-shadow-md">
                      {node.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Node Inspector Drawer (4 cols) */}
        {isInspectorOpen && selectedNode && (
          <div className="lg:col-span-4 p-6 rounded-3xl bg-[#090D22] border border-slate-800 space-y-6 shadow-2xl relative animate-fadeIn">
            {/* Close Button for mobile */}
            <button
              onClick={() => setIsInspectorOpen(false)}
              className="lg:hidden absolute top-4 right-4 p-2 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header with Faculty Badge */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span
                  className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase border"
                  style={{
                    color: selectedNode.facultyColor,
                    borderColor: `${selectedNode.facultyColor}40`,
                    backgroundColor: `${selectedNode.facultyColor}15`
                  }}
                >
                  {selectedNode.codename} · TIER {selectedNode.tier}
                </span>

                <span
                  className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full ${
                    selectedNode.status === 'completed'
                      ? 'bg-emerald-500/20 text-emerald-300'
                      : selectedNode.status === 'locked'
                      ? 'bg-slate-800 text-slate-400'
                      : 'bg-cyan-500/20 text-cyan-300'
                  }`}
                >
                  {selectedNode.status.toUpperCase()}
                </span>
              </div>

              <h2 className="text-xl font-extrabold text-white tracking-tight">{selectedNode.label}</h2>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">{selectedNode.description}</p>
            </div>

            {/* Telemetry Metrics */}
            <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-[#050711] border border-slate-800/80 text-xs font-mono">
              <div>
                <span className="text-slate-400 block text-[10px]">Mental Models</span>
                <span className="font-bold text-white text-sm">
                  {selectedNode.metrics.mentalModels} Frameworks
                </span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">Asymmetric Multiplier</span>
                <span className="font-bold text-amber-400 text-sm">
                  {selectedNode.metrics.roiMultiplier} Compounding
                </span>
              </div>
            </div>

            {/* Prerequisites */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-slate-400 font-bold uppercase">
                Prerequisite Nodes:
              </span>
              {selectedNode.prerequisites.length > 0 ? (
                <div className="space-y-1">
                  {selectedNode.prerequisites.map((prereqId) => {
                    const prereqNode = nodes.find((n) => n.id === prereqId);
                    const isPrereqDone = prereqNode?.status === 'completed';
                    return (
                      <div
                        key={prereqId}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-[#070A18] border border-slate-800 text-xs"
                      >
                        <span className="text-slate-300">{prereqNode?.label || prereqId}</span>
                        {isPrereqDone ? (
                          <span className="text-emerald-400 text-[10px] font-mono flex items-center gap-1 font-bold">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Satisfied
                          </span>
                        ) : (
                          <span className="text-rose-400 text-[10px] font-mono flex items-center gap-1 font-bold">
                            <Lock className="w-3.5 h-3.5" /> Required
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-xs text-emerald-400/80 font-mono">
                  ✓ Foundational Anchor Node (No prior prerequisites required)
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <button
                onClick={() => handleToggleMastery(selectedNode.id)}
                className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  selectedNode.status === 'completed'
                    ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
                    : 'bg-gradient-to-r from-emerald-400 to-cyan-400 text-black hover:opacity-95 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                }`}
              >
                {selectedNode.status === 'completed' ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Mastery Confirmed (Toggle to Incomplete)
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    Verify Mastery & Claim +75 XP
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
