import React, { useState } from 'react';
import {
  Zap,
  Bot,
  TrendingUp,
  Terminal,
  Dna,
  Lock,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Play,
  Layers,
  Shield,
  Activity,
  X
} from 'lucide-react';
import { soundEngine } from '../lib/audio';

interface ConstellationNode {
  id: string;
  label: string;
  faculty: string;
  icon: any;
  status: 'completed' | 'current' | 'locked';
  x: number;
  y: number;
  tier: number;
  xpReward: number;
  description: string;
  mentalModel: string;
  prerequisite?: string;
}

interface HolographicSkillConstellationProps {
  onLaunchNode: (nodeId: string) => void;
}

export const HolographicSkillConstellation: React.FC<HolographicSkillConstellationProps> = ({
  onLaunchNode
}) => {
  const nodes: ConstellationNode[] = [
    {
      id: 'node_stoic',
      label: 'Stoic Crisis Armor',
      faculty: 'High-Order Mindset',
      icon: Zap,
      status: 'completed',
      x: 120,
      y: 130,
      tier: 1,
      xpReward: 120,
      description: 'Dichotomy of control & emotional decoupling during existential crisis.',
      mentalModel: 'Dichotomy of Control (Epictetus)'
    },
    {
      id: 'node_kernel',
      label: 'Kernel Bare-Metal',
      faculty: 'Deep IT & Cyber',
      icon: Terminal,
      status: 'completed',
      x: 280,
      y: 70,
      tier: 2,
      xpReward: 140,
      description: 'io_uring ring buffers, 64-byte L1 cache alignment, and lock-free concurrency.',
      mentalModel: 'Zero-Copy Asynchrony'
    },
    {
      id: 'node_vector',
      label: 'Vector RAG Swarms',
      faculty: 'Advanced AI',
      icon: Bot,
      status: 'current',
      x: 450,
      y: 150,
      tier: 3,
      xpReward: 160,
      description: 'HyDE semantic retrieval, adversarial critic verification, and LangGraph DAGs.',
      mentalModel: 'Dual-Loop Critic Feedback',
      prerequisite: 'Kernel Bare-Metal'
    },
    {
      id: 'node_smr',
      label: 'SMR Nuclear Grid',
      faculty: 'Energy Economics',
      icon: Zap,
      status: 'current',
      x: 610,
      y: 80,
      tier: 3,
      xpReward: 130,
      description: 'Factory-manufactured Small Modular Reactors & Spark Spread arbitrage.',
      mentalModel: 'Base-Load Thermodynamics',
      prerequisite: 'Kernel Bare-Metal'
    },
    {
      id: 'node_macro',
      label: 'Macro Liquidity Flow',
      faculty: 'Quant Finance',
      icon: TrendingUp,
      status: 'locked',
      x: 770,
      y: 150,
      tier: 4,
      xpReward: 150,
      description: 'Fed Net Liquidity (Assets − TGA − RRP) and dealer gamma exposure (GEX).',
      mentalModel: 'Microstructure Convexity',
      prerequisite: 'Vector RAG Swarms'
    },
    {
      id: 'node_crispr',
      label: 'CRISPR Epigenetics',
      faculty: 'Biotech & Longevity',
      icon: Dna,
      status: 'locked',
      x: 910,
      y: 90,
      tier: 4,
      xpReward: 150,
      description: 'SpCas9 PAM targeting and Horvath methylation age reversal protocols.',
      mentalModel: 'Partial Epigenetic Reset',
      prerequisite: 'SMR Nuclear Grid'
    }
  ];

  const links = [
    { from: 'node_stoic', to: 'node_kernel' },
    { from: 'node_kernel', to: 'node_vector' },
    { from: 'node_kernel', to: 'node_smr' },
    { from: 'node_vector', to: 'node_macro' },
    { from: 'node_smr', to: 'node_crispr' }
  ];

  const [activeNode, setActiveNode] = useState<ConstellationNode | null>(nodes[2]); // Vector RAG active by default
  const [hoveredNode, setHoveredNode] = useState<ConstellationNode | null>(null);

  const handleOrbClick = (node: ConstellationNode) => {
    soundEngine.playClick();
    setActiveNode(node);
  };

  const handleLaunch = () => {
    if (!activeNode) return;
    soundEngine.playActivate();
    onLaunchNode(activeNode.id);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#05091C] via-[#030614] to-[#02040D] border border-cyan-500/30 p-6 sm:p-8 space-y-6 hud-bracket shadow-2xl">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px]" />

      {/* Header Bar */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              <Sparkles className="w-4 h-4" />
            </span>
            <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest">
              HOLOGRAPHIC SKILL CONSTELLATION
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-1">
            Multidisciplinary Knowledge Neural Graph
          </h2>
          <p className="text-xs text-zinc-400">
            Interactive node-based skill constellation. Click any node orb to inspect prerequisite neural pathways.
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 font-mono text-xs text-zinc-400 self-start sm:self-auto bg-black/40 px-3.5 py-1.5 rounded-xl border border-white/10">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            <span className="text-zinc-200">Mastered</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)] animate-pulse" />
            <span className="text-zinc-200">In Progress</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
            <span className="text-zinc-500">Locked</span>
          </div>
        </div>
      </div>

      {/* Interactive Visual Graph Canvas */}
      <div className="relative z-10 w-full overflow-x-auto scrollbar-none py-4">
        <div className="relative min-w-[960px] h-[260px] select-none">
          {/* SVG Connector Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="laserGradActive" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="laserGradLocked" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#52525b" stopOpacity="0.3" />
              </linearGradient>
            </defs>

            {links.map((link, idx) => {
              const fromNode = nodes.find((n) => n.id === link.from);
              const toNode = nodes.find((n) => n.id === link.to);
              if (!fromNode || !toNode) return null;

              const isConnectedActive =
                fromNode.status === 'completed' && toNode.status !== 'locked';

              return (
                <g key={idx}>
                  {/* Subtle glow under-line */}
                  <line
                    x1={fromNode.x}
                    y1={fromNode.y}
                    x2={toNode.x}
                    y2={toNode.y}
                    stroke={isConnectedActive ? '#06b6d4' : '#27272a'}
                    strokeWidth={isConnectedActive ? '4' : '2'}
                    strokeOpacity={isConnectedActive ? '0.3' : '0.4'}
                    strokeLinecap="round"
                  />
                  {/* Animated laser conduit line */}
                  <line
                    x1={fromNode.x}
                    y1={fromNode.y}
                    x2={toNode.x}
                    y2={toNode.y}
                    stroke={
                      isConnectedActive
                        ? 'url(#laserGradActive)'
                        : 'url(#laserGradLocked)'
                    }
                    strokeWidth={isConnectedActive ? '2' : '1.5'}
                    strokeDasharray={isConnectedActive ? '6 4' : '4 4'}
                    className={isConnectedActive ? 'animate-laser' : ''}
                  />
                </g>
              );
            })}
          </svg>

          {/* Interactive Holographic Node Orbs */}
          {nodes.map((node) => {
            const Icon = node.icon;
            const isSelected = activeNode?.id === node.id;
            const isHovered = hoveredNode?.id === node.id;

            let orbStyles = '';
            let ringStyles = '';
            let beaconColor = '';

            if (node.status === 'completed') {
              orbStyles =
                'bg-gradient-to-tr from-emerald-950 via-emerald-900 to-zinc-900 border-2 border-emerald-400 text-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.5)]';
              ringStyles = 'border-emerald-500/40 animate-ping opacity-30';
              beaconColor = 'bg-emerald-400';
            } else if (node.status === 'current') {
              orbStyles =
                'bg-gradient-to-tr from-cyan-950 via-cyan-900 to-zinc-900 border-2 border-cyan-400 text-cyan-300 shadow-[0_0_30px_rgba(6,182,212,0.6)] scale-105';
              ringStyles = 'border-cyan-400/60 animate-ping opacity-50';
              beaconColor = 'bg-cyan-400';
            } else {
              orbStyles =
                'bg-zinc-950 border border-zinc-700/60 text-zinc-500 shadow-inner opacity-75';
              ringStyles = 'hidden';
              beaconColor = 'bg-zinc-600';
            }

            return (
              <div
                key={node.id}
                style={{
                  left: `${node.x}px`,
                  top: `${node.y}px`,
                  transform: 'translate(-50%, -50%)'
                }}
                className="absolute z-20 flex flex-col items-center group cursor-pointer"
                onClick={() => handleOrbClick(node)}
                onMouseEnter={() => setHoveredNode(node)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                {/* Node Orb with Outer Glowing Ring */}
                <div className="relative">
                  {node.status !== 'locked' && (
                    <span
                      className={`absolute -inset-2 rounded-full border ${ringStyles}`}
                    />
                  )}

                  <div
                    className={`relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 transform group-hover:scale-115 ${orbStyles} ${
                      isSelected ? 'ring-4 ring-cyan-400/40 ring-offset-2 ring-offset-black scale-110' : ''
                    }`}
                  >
                    <Icon className="w-6 h-6" />

                    {/* Badge Icon (Completed Check / Locked Padlock) */}
                    <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-black border border-white/20 flex items-center justify-center text-[10px]">
                      {node.status === 'completed' && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      )}
                      {node.status === 'current' && (
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      )}
                      {node.status === 'locked' && (
                        <Lock className="w-3 h-3 text-zinc-400" />
                      )}
                    </span>
                  </div>
                </div>

                {/* Hover Popover with Skill Details, Rewards, and Launch Lesson Button */}
                {isHovered && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute -top-36 z-50 w-64 p-3.5 rounded-2xl bg-zinc-950/95 border-2 border-cyan-400 shadow-[0_0_35px_rgba(6,182,212,0.5)] backdrop-blur-xl space-y-2 pointer-events-auto animate-fadeIn"
                  >
                    <div className="flex items-center justify-between font-mono text-[10px]">
                      <span className="text-cyan-400 font-bold uppercase truncate max-w-[140px]">{node.faculty}</span>
                      <span className="text-amber-400 font-bold bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/30">
                        +{node.xpReward} XP
                      </span>
                    </div>

                    <div>
                      <h4 className="font-extrabold text-xs text-white leading-tight">
                        {node.label}
                      </h4>
                      <p className="text-[11px] text-zinc-300 line-clamp-2 mt-1 leading-snug">
                        {node.description}
                      </p>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (node.status === 'locked') return;
                        soundEngine.playActivate();
                        onLaunchNode(node.id);
                      }}
                      disabled={node.status === 'locked'}
                      className={`w-full py-1.5 px-2.5 rounded-xl font-mono text-[11px] font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                        node.status === 'locked'
                          ? 'bg-zinc-800 text-zinc-500 border border-white/5 cursor-not-allowed'
                          : 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-black shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:brightness-110 active:scale-95'
                      }`}
                    >
                      <Play className="w-3 h-3 fill-black" />
                      <span>{node.status === 'locked' ? 'Node Locked' : 'Launch Lesson'}</span>
                    </button>
                  </div>
                )}

                {/* Node Label Below Orb */}
                <div className="mt-2 flex flex-col items-center text-center whitespace-nowrap pointer-events-none">
                  <span
                    className={`font-mono text-xs font-bold transition-colors ${
                      isSelected
                        ? 'text-cyan-300'
                        : node.status === 'locked'
                        ? 'text-zinc-500'
                        : 'text-zinc-200 group-hover:text-white'
                    }`}
                  >
                    {node.label}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500">
                    Tier {node.tier} · +{node.xpReward} XP
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Node Details Inspector Card */}
      {activeNode && (
        <div className="relative z-10 p-5 rounded-2xl bg-[#070B1E] border border-cyan-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4 animate-fadeIn">
          <div className="space-y-1 max-w-2xl">
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="text-cyan-400 font-bold uppercase">{activeNode.faculty}</span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400">Mental Model: <strong className="text-zinc-200">{activeNode.mentalModel}</strong></span>
              {activeNode.prerequisite && (
                <>
                  <span className="text-zinc-600">·</span>
                  <span className="text-zinc-400">Prerequisite: <strong className="text-cyan-300">{activeNode.prerequisite}</strong></span>
                </>
              )}
            </div>

            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span>{activeNode.label}</span>
              <span className="font-mono text-xs font-normal text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                +{activeNode.xpReward} XP
              </span>
            </h3>

            <p className="text-xs text-zinc-300 leading-relaxed">
              {activeNode.description}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={handleLaunch}
              disabled={activeNode.status === 'locked'}
              className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                activeNode.status === 'locked'
                  ? 'bg-zinc-800 text-zinc-500 border border-white/5 cursor-not-allowed'
                  : 'bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-black shadow-[0_0_20px_rgba(6,182,212,0.3)] active:scale-95'
              }`}
            >
              <Play className="w-3.5 h-3.5 fill-black" />
              <span>{activeNode.status === 'completed' ? 'Re-Drill Lesson' : 'Launch Node Lesson'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
