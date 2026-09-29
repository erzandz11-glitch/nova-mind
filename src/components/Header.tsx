import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Menu,
  Search,
  Flame,
  Zap,
  Wallet,
  Volume2,
  VolumeX,
  Command,
  Activity,
  Award,
  Globe,
  ArrowLeft
} from 'lucide-react';
import { UserGamificationState, FrontierFacultyId } from '../types';
import { soundEngine } from '../lib/audio';
import { SkillPassportModal } from './SkillPassportModal';

interface HeaderProps {
  userState: UserGamificationState;
  onToggleSidebar: () => void;
  onOpenWalletModal: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  activeFacultyId?: FrontierFacultyId;
  onSelectFaculty?: (id: FrontierFacultyId) => void;
}

export const Header: React.FC<HeaderProps> = ({
  userState,
  onToggleSidebar,
  onOpenWalletModal,
  soundEnabled,
  onToggleSound,
  activeFacultyId
}) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showXpTooltip, setShowXpTooltip] = useState(false);
  const [isPassportOpen, setIsPassportOpen] = useState(false);

  const xpCurrentTier = userState.xp % 300;
  const xpProgressPercent = Math.min(100, Math.round((xpCurrentTier / 300) * 100));

  return (
    <>
    <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 bg-[#030712]/85 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
      {/* Left: Mobile Toggle & Cyber Logo */}
      <div className="flex items-center gap-3 sm:gap-6 flex-1 max-w-lg">
        <button
          onClick={() => {
            soundEngine.playClick();
            onToggleSidebar();
          }}
          className="lg:hidden p-2 rounded-xl text-zinc-400 hover:text-white bg-zinc-900/60 border border-white/10 hover:border-cyan-500/40 transition-all cursor-pointer"
          aria-label="Toggle navigation"
        >
          <Menu className="w-4 h-4" />
        </button>

        {/* Brand Logo with Cyber Beacon */}
        <div
          onClick={() => {
            soundEngine.playClick();
            navigate('/');
          }}
          className="hidden sm:flex items-center gap-2.5 cursor-pointer group shrink-0"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full p-[1px] bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_15px_rgba(6,182,212,0.35)] group-hover:scale-105 transition-transform overflow-hidden">
            <img src="/nova-logo.jpg" alt="NOVA Logo" className="w-full h-full object-cover rounded-full scale-105" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 font-mono text-sm font-bold tracking-wider text-white">
              <span>NOVA MIND</span>
              <span className="text-[9px] px-1 py-0.2 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-semibold">
                HUD v7.2
              </span>
            </div>
          </div>
        </div>

        {/* Quick Return to Main NOVA Platform */}
        <a
          href="https://nova-digital-lab.vercel.app"
          onClick={() => soundEngine.playClick()}
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-950/40 hover:bg-cyan-500/20 text-cyan-300 hover:text-cyan-200 border border-cyan-500/30 hover:border-cyan-400 font-mono text-xs font-semibold shadow-[0_0_12px_rgba(6,182,212,0.15)] transition-all shrink-0"
          title="Kembali ke Platform Utama NOVA"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>NOVA</span>
        </a>

        {/* Desktop Command Bar Trigger */}
        <div 
          onClick={() => {
            soundEngine.playClick();
            window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }));
          }}
          className="hidden md:flex relative items-center w-full max-w-xs sm:max-w-sm cursor-pointer group"
        >
          <Search className="w-3.5 h-3.5 text-cyan-400 absolute left-3 pointer-events-none group-hover:scale-110 transition-transform" />
          <div className="w-full pl-8 pr-12 py-1.5 rounded-lg bg-zinc-900/60 border border-white/10 group-hover:border-cyan-400/60 text-xs text-zinc-400 group-hover:text-zinc-200 transition-all shadow-inner truncate">
            Search faculties, neural labs...
          </div>
          <div className="absolute right-2.5 flex items-center gap-0.5 text-[10px] font-mono text-zinc-400 bg-zinc-800/80 px-1.5 py-0.5 rounded border border-white/5 pointer-events-none">
            <Command className="w-2.5 h-2.5" />
            <span>K</span>
          </div>
        </div>
      </div>

      {/* Right: Gamification & Telemetry Dashboard Ribbon */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Mobile Command Trigger (P0) */}
        <button
          onClick={() => {
            soundEngine.playClick();
            window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }));
          }}
          className="md:hidden flex items-center justify-center p-2 rounded-xl bg-zinc-900/60 border border-white/10 text-cyan-400 hover:text-white cursor-pointer transition-all"
          title="Open Command Search (⌘K)"
        >
          <Search className="w-4 h-4" />
        </button>

        {/* 1. ⚡ XP Level Bar (Interactive telemetry) */}
        <div
          onMouseEnter={() => setShowXpTooltip(true)}
          onMouseLeave={() => setShowXpTooltip(false)}
          onClick={() => soundEngine.playClick()}
          className="relative cursor-pointer flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-950/40 to-zinc-900/60 border border-cyan-500/30 hover:border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all"
        >
          <div className="w-5 h-5 rounded-md bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
            <Zap className="w-3 h-3 fill-current" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-white leading-none">
              <span className="text-cyan-300">{userState.xp.toLocaleString()}</span>
              <span className="text-[10px] text-zinc-500 font-normal">XP</span>
            </div>
            
            <div className="flex items-center gap-2 mt-1">
              <div className="w-14 sm:w-20 h-1 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full transition-all duration-500"
                  style={{ width: `${xpProgressPercent}%` }}
                />
              </div>
              <span className="text-[9px] font-mono text-zinc-400 font-medium whitespace-nowrap">
                Lvl {userState.level}
              </span>
            </div>
          </div>

          {/* Hover Tooltip */}
          {showXpTooltip && (
            <div className="absolute right-0 top-full mt-2 w-52 p-3 bg-zinc-950 border border-cyan-500/40 rounded-xl shadow-2xl z-50 text-xs font-mono space-y-1.5 animate-fadeIn pointer-events-none">
              <div className="flex justify-between text-zinc-400">
                <span>Tier Rank:</span>
                <span className="text-cyan-400 font-bold">Polymath Master</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Next Rank In:</span>
                <span className="text-white font-bold">{300 - xpCurrentTier} XP</span>
              </div>
              <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden mt-1">
                <div
                  className="h-full bg-cyan-400"
                  style={{ width: `${xpProgressPercent}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* 2. 🔥 21d Streak */}
        <div
          onClick={() => soundEngine.playStreak()}
          className="group cursor-pointer flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-950/40 to-orange-950/20 border border-amber-500/30 hover:border-amber-400/80 shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all active:scale-95"
          title="Daily Learning Streak"
        >
          <Flame className="w-4 h-4 text-amber-400 fill-amber-400 animate-pulse group-hover:scale-110 transition-transform" />
          <span className="font-mono text-xs font-bold text-amber-300">
            {userState.streakDays}d
          </span>
        </div>

        {/* 3. Subtle Web3 Ledger Indicator */}
        <button
          onClick={() => {
            soundEngine.playClick();
            onOpenWalletModal();
          }}
          className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900/60 hover:bg-zinc-900 border border-white/10 hover:border-cyan-500/40 font-mono text-xs text-zinc-300 hover:text-white transition-all cursor-pointer"
        >
          <Wallet className="w-3.5 h-3.5 text-cyan-400" />
          <span>
            {userState.walletConnected
              ? `${userState.walletAddress?.slice(0, 5)}...${userState.walletAddress?.slice(-3)}`
              : 'Ledger'}
          </span>
          {userState.walletConnected && (
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
          )}
        </button>

        {/* 4. Sovereign Skill Passport / Certificate Modal Trigger */}
        <button
          onClick={() => {
            soundEngine.playActivate();
            setIsPassportOpen(true);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 font-mono text-xs text-cyan-300 font-semibold shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all cursor-pointer"
          title="Open Sovereign Proof of Mastery Passport"
        >
          <Award className="w-3.5 h-3.5 text-cyan-400" />
          <span className="hidden sm:inline">PASSPORT</span>
        </button>

        {/* 5. Acoustic SFX Feedback Toggle */}
        <button
          onClick={() => {
            soundEngine.playClick();
            onToggleSound();
          }}
          className="p-2 rounded-xl bg-zinc-900/60 hover:bg-zinc-850 border border-white/10 hover:border-cyan-500/40 text-zinc-400 hover:text-cyan-300 transition-all cursor-pointer"
          title={soundEnabled ? 'Acoustic audio synthesis enabled' : 'Muted'}
        >
          {soundEnabled ? (
            <Volume2 className="w-4 h-4 text-cyan-400" />
          ) : (
            <VolumeX className="w-4 h-4 text-zinc-600" />
          )}
        </button>
      </div>
    </header>

    {/* Skill Passport Modal */}
    <SkillPassportModal
      isOpen={isPassportOpen}
      onClose={() => setIsPassportOpen(false)}
      userState={userState}
    />

    {/* Context Breadcrumbs Sub-Bar */}
    <div className="border-b border-cyan-900/30 bg-[#02050c]/90 px-4 sm:px-6 lg:px-8 py-1.5 flex items-center overflow-x-auto no-scrollbar gap-1.5 text-[11px] font-mono text-zinc-400">
      <span className="text-zinc-600 shrink-0 font-bold">NOVA OS</span>
      <span className="text-zinc-700 shrink-0">/</span>
      <span className="text-sky-400 font-semibold shrink-0">MIND</span>
      <span className="text-zinc-700 shrink-0">/</span>
      <span className="text-zinc-200 font-semibold shrink-0 uppercase">
        {activeFacultyId ? activeFacultyId.replace(/_/g, ' ') : 'CORE CURRICULUM'}
      </span>
      <span className="text-zinc-700 shrink-0">/</span>
      <span className="text-zinc-400 shrink-0">ARENA</span>
    </div>
    </>
  );
};
