import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Compass,
  Zap,
  Film,
  Brain,
  X,
  ChevronRight,
  Flame,
  Settings,
  Globe,
  ArrowLeft
} from 'lucide-react';
import { UserGamificationState, FrontierFacultyId } from '../types';
import { FRONTIER_FACULTIES } from '../data/frontierFacultiesData';
import { soundEngine } from '../lib/audio';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  userState: UserGamificationState;
  activeFacultyId?: FrontierFacultyId;
  onSelectFaculty?: (id: FrontierFacultyId) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  userState,
  activeFacultyId,
  onSelectFaculty
}) => {
  // 4 Primary Clean Navigation Tabs as requested by User
  const navTabs = [
    {
      to: '/',
      label: 'Curriculum Tracks',
      icon: Compass,
      subtitle: '7 Frontier Faculties'
    },
    {
      to: '/simulation',
      label: 'Interactive Sandboxes',
      icon: Zap,
      subtitle: 'Real-time Systems'
    },
    {
      to: '/masterclass',
      label: 'Masterclass Studio',
      icon: Film,
      subtitle: 'Cinema & AI Co-Pilot'
    },
    {
      to: '/diagnostics',
      label: 'Cognitive Diagnostics',
      icon: Brain,
      subtitle: 'Rationality Mini-Tests'
    }
  ];

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Slim, Minimalist Left Sidebar */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-40 w-64 flex flex-col justify-between bg-[#030712] border-r border-white/[0.08] transition-transform duration-200 ease-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex-1 flex flex-col overflow-y-auto scrollbar-none">
          {/* Logo: "NOVA MIND" (Clean font-mono, subtle glowing cyan dot) */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-white/[0.08]">
            <NavLink
              to="/"
              onClick={() => {
                soundEngine.playClick();
                onClose();
              }}
              className="flex items-center gap-2.5 group"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.9)] transition-all group-hover:scale-125" />
              <span className="font-mono text-sm font-semibold tracking-wider text-white">
                NOVA MIND
              </span>
            </NavLink>

            <button
              onClick={onClose}
              className="lg:hidden p-1 text-zinc-500 hover:text-white rounded-md transition-colors"
              aria-label="Close navigation"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* 4 Clean Navigation Tabs */}
          <div className="px-3 py-4 space-y-1">
            {/* Quick Return to Main NOVA Platform */}
            <a
              href="https://nova-digital-lab.vercel.app"
              onClick={() => soundEngine.playClick()}
              className="group flex items-center justify-between px-3 py-2 rounded-lg text-xs bg-cyan-950/30 hover:bg-cyan-500/20 text-cyan-300 hover:text-cyan-200 border border-cyan-500/30 hover:border-cyan-400 transition-all mb-3 shadow-[0_0_12px_rgba(6,182,212,0.15)]"
            >
              <div className="flex items-center gap-2">
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                <span className="font-semibold">Kembali ke NOVA</span>
              </div>
              <Globe className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
            </a>

            <span className="px-3 text-[10px] font-mono tracking-wider text-zinc-500 uppercase block mb-1.5 font-medium">
              Navigation
            </span>
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <NavLink
                  key={tab.to}
                  to={tab.to}
                  onClick={() => {
                    soundEngine.playClick();
                    onClose();
                  }}
                  className={({ isActive }) =>
                    `group flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-all duration-150 cursor-pointer ${
                      isActive
                        ? 'bg-white/[0.06] text-white font-medium shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.03]'
                    }`
                  }
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
                    <span>{tab.label}</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </NavLink>
              );
            })}
          </div>

          {/* Direct Tracks Sub-list */}
          <div className="px-3 py-3 border-t border-white/[0.08] flex-1">
            <span className="px-3 text-[10px] font-mono tracking-wider text-zinc-500 uppercase block mb-2 font-medium">
              Curriculum Tracks
            </span>

            <div className="space-y-0.5">
              {FRONTIER_FACULTIES.map((faculty, idx) => {
                const isSelected = faculty.id === activeFacultyId;
                return (
                  <button
                    key={faculty.id}
                    onClick={() => {
                      soundEngine.playClick();
                      if (onSelectFaculty) onSelectFaculty(faculty.id);
                      onClose();
                    }}
                    className={`w-full text-left flex items-center justify-between px-3 py-1.5 rounded-md text-xs transition-colors cursor-pointer ${
                      isSelected
                        ? 'text-cyan-300 bg-cyan-500/[0.08] font-medium'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.02]'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className="font-mono text-[10px] text-zinc-600">
                        0{idx + 1}
                      </span>
                      <span className="truncate">{faculty.shortTitle}</span>
                    </div>
                    <span className="font-mono text-[10px] text-zinc-600">
                      {faculty.completionPercent}%
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Minimalist User Card at the bottom */}
        <div className="p-4 border-t border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center font-mono text-xs text-white">
              {userState.avatarLetter}
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-white font-medium leading-none">
                {userState.displayName}
              </span>
              <span className="text-[10px] font-mono text-zinc-500 mt-0.5">
                Level {userState.level}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 font-mono text-xs text-zinc-400">
            <Flame className="w-3.5 h-3.5 text-zinc-400" />
            <span>{userState.streakDays}d</span>
          </div>
        </div>
      </aside>
    </>
  );
};
