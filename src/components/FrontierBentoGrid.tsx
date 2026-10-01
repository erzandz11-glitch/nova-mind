import React from 'react';
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
  ArrowRight,
  Sparkles,
  Layers,
  Clock,
  Play
} from 'lucide-react';
import { FrontierFaculty, FrontierFacultyId } from '../types';
import { soundEngine } from '../lib/audio';

interface FrontierBentoGridProps {
  faculties: FrontierFaculty[];
  selectedFacultyId: FrontierFacultyId;
  onSelectFaculty: (id: FrontierFacultyId) => void;
  onLaunchSimulator: (id: FrontierFacultyId) => void;
}

export const FrontierBentoGrid: React.FC<FrontierBentoGridProps> = ({
  faculties,
  selectedFacultyId,
  onSelectFaculty,
  onLaunchSimulator
}) => {
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

  // Custom colors matching exact faculty branding
  const getCardTheme = (id: FrontierFacultyId) => {
    switch (id) {
      case 'deep_it_cyber':
        return {
          glowBorder: 'hover:border-cyan-400 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]',
          headerBg: 'bg-cyan-950/40 text-cyan-400 border-cyan-500/30',
          accentText: 'text-cyan-400',
          ringStroke: '#06b6d4',
          badgeText: 'Kernel Bare-Metal'
        };
      case 'energy_economics':
        return {
          glowBorder: 'hover:border-amber-400 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.25)]',
          headerBg: 'bg-amber-950/40 text-amber-400 border-amber-500/30',
          accentText: 'text-amber-400',
          ringStroke: '#f59e0b',
          badgeText: 'Thermodynamics'
        };
      case 'biotech_longevity':
        return {
          glowBorder: 'hover:border-emerald-400 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]',
          headerBg: 'bg-emerald-950/40 text-emerald-400 border-emerald-500/30',
          accentText: 'text-emerald-400',
          ringStroke: '#10b981',
          badgeText: 'Synthetic Genomics'
        };
      case 'mindset_cognitive':
        return {
          glowBorder: 'hover:border-violet-400 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]',
          headerBg: 'bg-violet-950/40 text-violet-400 border-violet-500/30',
          accentText: 'text-violet-400',
          ringStroke: '#8b5cf6',
          badgeText: 'Stoic Armor'
        };
      case 'quant_macro_finance':
        return {
          glowBorder: 'hover:border-sky-400 group-hover:shadow-[0_0_30px_rgba(14,165,233,0.25)]',
          headerBg: 'bg-sky-950/40 text-sky-400 border-sky-500/30',
          accentText: 'text-sky-400',
          ringStroke: '#0ea5e9',
          badgeText: 'Order Flow & GEX'
        };
      case 'crypto_defi_web3':
        return {
          glowBorder: 'hover:border-rose-400 group-hover:shadow-[0_0_30px_rgba(244,63,94,0.25)]',
          headerBg: 'bg-rose-950/40 text-rose-400 border-rose-500/30',
          accentText: 'text-rose-400',
          ringStroke: '#f43f5e',
          badgeText: 'Multi-Sig Vaults'
        };
      case 'ai_autonomous_swarms':
        return {
          glowBorder: 'hover:border-indigo-400 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.25)]',
          headerBg: 'bg-indigo-950/40 text-indigo-400 border-indigo-500/30',
          accentText: 'text-indigo-400',
          ringStroke: '#6366f1',
          badgeText: 'Autonomous DAG'
        };
      case 'game_dev_media':
        return {
          glowBorder: 'hover:border-fuchsia-400 group-hover:shadow-[0_0_30px_rgba(217,70,239,0.25)]',
          headerBg: 'bg-fuchsia-950/40 text-fuchsia-400 border-fuchsia-500/30',
          accentText: 'text-fuchsia-400',
          ringStroke: '#d946ef',
          badgeText: 'Godot & Shaders'
        };
      case 'fullstack_web_mobile':
        return {
          glowBorder: 'hover:border-teal-400 group-hover:shadow-[0_0_30px_rgba(20,184,166,0.25)]',
          headerBg: 'bg-teal-950/40 text-teal-400 border-teal-500/30',
          accentText: 'text-teal-400',
          ringStroke: '#14b8a6',
          badgeText: 'Edge & Full-Stack'
        };
      case 'digital_business':
        return {
          glowBorder: 'hover:border-orange-400 group-hover:shadow-[0_0_30px_rgba(249,115,22,0.25)]',
          headerBg: 'bg-orange-950/40 text-orange-400 border-orange-500/30',
          accentText: 'text-orange-400',
          ringStroke: '#f97316',
          badgeText: 'Solopreneur Moats'
        };
      default:
        return {
          glowBorder: 'hover:border-cyan-400',
          headerBg: 'bg-cyan-950/40 text-cyan-400 border-cyan-500/30',
          accentText: 'text-cyan-400',
          ringStroke: '#06b6d4',
          badgeText: 'Frontier'
        };
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1">
        <div>
          <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> 10 FRONTIER FACULTIES BENTO GRID
          </span>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-0.5">
            Polymath Curriculum Matrix
          </h3>
        </div>
        <span className="font-mono text-xs text-zinc-400">
          Click any faculty to explore syllabus · 519 interactive lessons
        </span>
      </div>


      {/* Asymmetric Rich Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {faculties.map((fac, idx) => {
          const Icon = getFacultyIcon(fac.iconName);
          const theme = getCardTheme(fac.id);
          const isSelected = fac.id === selectedFacultyId;
          const totalLessons = fac.modules.reduce((acc, m) => acc + m.lessons.length, 0);

          // SVG radial ring math (radius 18, circumference 2 * pi * 18 = 113.1)
          const radius = 18;
          const circumference = 2 * Math.PI * radius;
          const strokeDashoffset = circumference - (fac.completionPercent / 100) * circumference;

          return (
            <div
              key={fac.id}
              onClick={() => {
                soundEngine.playClick();
                onSelectFaculty(fac.id);
              }}
              className={`group relative rounded-3xl bg-[#070B1C]/90 border p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between cursor-pointer hud-bracket ${
                isSelected
                  ? 'border-cyan-400 shadow-[0_0_35px_rgba(6,182,212,0.3)] bg-[#0C122C]'
                  : `border-white/10 ${theme.glowBorder} hover:bg-[#0B1028]`
              }`}
            >
              <div>
                {/* Glowing Colored Header Tag & Radial Ring */}
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <div
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-mono font-bold border shadow-sm ${theme.headerBg}`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span className="uppercase text-[11px]">{fac.shortTitle}</span>
                  </div>

                  {/* Dynamic Progress Radial Ring */}
                  <div className="relative w-11 h-11 flex items-center justify-center shrink-0">
                    <svg className="w-full h-full -rotate-90">
                      <circle
                        cx="22"
                        cy="22"
                        r={radius}
                        className="stroke-zinc-800"
                        strokeWidth="3"
                        fill="transparent"
                      />
                      <circle
                        cx="22"
                        cy="22"
                        r={radius}
                        stroke={theme.ringStroke}
                        strokeWidth="3.5"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        fill="transparent"
                        className="transition-all duration-700"
                        style={{ filter: `drop-shadow(0 0 4px ${theme.ringStroke})` }}
                      />
                    </svg>
                    <span className="absolute font-mono text-[10px] font-bold text-white">
                      {fac.completionPercent}%
                    </span>
                  </div>
                </div>

                {/* Faculty Title & Description */}
                <div className="pt-3 space-y-2">
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span
                        className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                        style={{ backgroundColor: theme.ringStroke }}
                      />
                      <span
                        className="relative inline-flex rounded-full h-2 w-2"
                        style={{ backgroundColor: theme.ringStroke }}
                      />
                    </span>
                    <span className={`font-mono text-[10px] font-bold uppercase tracking-wider ${theme.accentText}`}>
                      {theme.badgeText}
                    </span>
                  </div>

                  <h4 className="font-extrabold text-base text-white group-hover:text-cyan-300 transition-colors">
                    {fac.name}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                    {fac.headline}
                  </p>
                </div>
              </div>

              {/* Bottom Metadata & Sandbox Trigger */}
              <div className="pt-5 mt-3 border-t border-white/5 space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span className="flex items-center gap-1 text-zinc-300">
                    <Layers className="w-3 h-3 text-cyan-400" />
                    {fac.modules.length} Modules · {totalLessons} Lessons
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-zinc-500" />
                    {fac.estimatedHours}h
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      soundEngine.playActivate();
                      onLaunchSimulator(fac.id);
                    }}
                    className="w-full py-2.5 px-3 rounded-xl bg-white/5 hover:bg-cyan-500/20 text-zinc-200 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/40 font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer shadow-sm group-hover:border-cyan-500/30"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Enter Sandbox</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
