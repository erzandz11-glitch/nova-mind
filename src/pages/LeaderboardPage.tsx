import React, { useState } from 'react';
import {
  Trophy,
  Flame,
  Zap,
  Crown,
  Medal,
  Sparkles,
  ArrowUp,
  Shield,
  Clock,
  Award,
  CheckCircle2,
  Lock,
  Share2,
  Check,
  Star
} from 'lucide-react';
import { LEADERBOARD_FELLOWS } from '../data/gamifiedData';
import { SOULBOUND_BADGES } from '../data/megaTracksData';
import { UserGamificationState, SoulboundBadge } from '../types';
import { soundEngine } from '../lib/audio';

interface LeaderboardPageProps {
  userState: UserGamificationState;
}

export const LeaderboardPage: React.FC<LeaderboardPageProps> = ({ userState }) => {
  const [selectedBadge, setSelectedBadge] = useState<SoulboundBadge | null>(null);
  const [copiedBadge, setCopiedBadge] = useState<boolean>(false);

  // Merge live user XP and streak into the leaderboard
  const fellows = LEADERBOARD_FELLOWS.map((f) => {
    if (f.isCurrentUser) {
      return {
        ...f,
        xp: userState.xp,
        streak: userState.streakDays
      };
    }
    return f;
  }).sort((a, b) => b.xp - a.xp);

  const top3 = fellows.slice(0, 3);
  const remaining = fellows.slice(3);

  // Streak Multiplier Table
  const streakMultipliers = [
    { days: '3 Days', mult: '1.2x', active: userState.streakDays >= 3 },
    { days: '7 Days', mult: '1.5x', active: userState.streakDays >= 7 },
    { days: '14 Days', mult: '2.0x', active: userState.streakDays >= 14 },
    { days: '30 Days', mult: '3.0x', active: userState.streakDays >= 30 }
  ];

  const handleInspectBadge = (badge: SoulboundBadge) => {
    soundEngine.playClick();
    setSelectedBadge(badge);
  };

  const handleShareBadge = () => {
    soundEngine.playCorrect();
    navigator.clipboard.writeText(`Soulbound Sovereign Badge: ${selectedBadge?.title} · Verified on NOVA MIND`);
    setCopiedBadge(true);
    setTimeout(() => setCopiedBadge(false), 2000);
  };

  return (
    <div className="relative min-h-[calc(100vh-5rem)] p-4 sm:p-6 lg:p-10 space-y-10 arena-grid max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#140E2A] via-[#0C1024] to-[#0A182C] border border-amber-500/40 shadow-[0_0_40px_rgba(245,158,11,0.15)] flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <Trophy className="w-4 h-4" />
            </span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
              GLOBAL XP ARENA & SOULBOUND BADGES
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Emerald Sovereign League
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
            Compete with the top 1% of global solopreneurs and cyber architects. Top 3 gain sovereign certification rights and +500 XP multipliers.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-[#050714] p-3.5 rounded-2xl border border-slate-800 shrink-0">
          <Clock className="w-4 h-4 text-amber-400" />
          <div className="flex flex-col font-mono text-xs">
            <span className="text-slate-400">ROUND RESETS IN:</span>
            <span className="text-amber-300 font-extrabold text-sm">3d 14h 22m</span>
          </div>
        </div>
      </div>

      {/* Daily Streak Multiplier Matrix */}
      <div className="p-5 rounded-3xl bg-[#080B1E] border border-slate-800 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase">
            <Flame className="w-4 h-4 fill-amber-400" />
            Active Streak Multiplier Matrix
          </div>
          <span className="text-xs font-mono text-slate-400">
            Current: <strong className="text-white">{userState.streakDays} Days Consecutive</strong>
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {streakMultipliers.map((m, idx) => (
            <div
              key={idx}
              className={`p-3.5 rounded-2xl border transition-all text-center space-y-1 ${
                m.active
                  ? 'bg-amber-500/15 border-amber-500/40 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                  : 'bg-[#050712] border-slate-800/80 text-slate-500'
              }`}
            >
              <span className="text-xs font-mono block">{m.days}</span>
              <span className="text-lg font-extrabold font-mono block">{m.mult} XP</span>
              <span className="text-[10px] block font-mono font-bold">
                {m.active ? 'ACTIVE BONUS' : 'LOCKED'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Top 3 Podium Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-end pt-4">
        {/* Rank 2 (Silver) */}
        {top3[1] && (
          <div
            onClick={() => soundEngine.playClick()}
            className="p-6 rounded-3xl bg-gradient-to-t from-[#0C1226] to-[#0A1838] border border-slate-700/80 hover:border-slate-500 text-center space-y-3 cursor-pointer transition-all hover:-translate-y-1 shadow-[0_0_30px_rgba(148,163,184,0.15)] order-2 md:order-1"
          >
            <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-800 border-2 border-slate-400 text-slate-200 font-extrabold text-xl mx-auto shadow-lg">
              {top3[1].avatarLetter}
              <span className="absolute -top-2.5 -right-2 px-2 py-0.5 rounded-full bg-slate-300 text-black text-[10px] font-mono font-black">
                #2
              </span>
            </div>
            <div>
              <h3 className="font-extrabold text-base text-white">{top3[1].name}</h3>
              <span className="text-xs font-mono text-slate-400">@{top3[1].handle}</span>
            </div>
            <div className="pt-2 border-t border-slate-800 flex items-center justify-center gap-3 text-xs font-mono font-bold">
              <span className="text-cyan-400">{top3[1].xp.toLocaleString()} XP</span>
              <span className="text-amber-400 flex items-center gap-0.5">
                <Flame className="w-3 h-3 fill-amber-400" /> {top3[1].streak}d
              </span>
            </div>
          </div>
        )}

        {/* Rank 1 (Gold - Center) */}
        {top3[0] && (
          <div
            onClick={() => soundEngine.playClick()}
            className="p-8 rounded-3xl bg-gradient-to-t from-[#15112E] to-[#1F174A] border-2 border-amber-400 text-center space-y-4 cursor-pointer transition-all hover:-translate-y-2 shadow-[0_0_50px_rgba(245,158,11,0.3)] order-1 md:order-2 scale-105"
          >
            <div className="inline-block relative">
              <Crown className="w-6 h-6 text-amber-400 mx-auto mb-1 animate-bounce" />
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-tr from-amber-400 to-amber-200 text-black font-black text-2xl shadow-[0_0_30px_rgba(245,158,11,0.5)]">
                {top3[0].avatarLetter}
                <span className="absolute -top-3 -right-2 px-2.5 py-0.5 rounded-full bg-amber-400 text-black text-[11px] font-mono font-black shadow">
                  #1
                </span>
              </div>
            </div>
            <div>
              <h3 className="font-extrabold text-lg text-white">{top3[0].name}</h3>
              <span className="text-xs font-mono text-amber-300">@{top3[0].handle}</span>
            </div>
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-center gap-4 text-xs font-mono font-extrabold">
              <span className="text-amber-400 text-sm">{top3[0].xp.toLocaleString()} XP</span>
              <span className="text-emerald-400 flex items-center gap-0.5">
                <Flame className="w-3.5 h-3.5 fill-emerald-400" /> {top3[0].streak}d
              </span>
            </div>
          </div>
        )}

        {/* Rank 3 (Bronze) */}
        {top3[2] && (
          <div
            onClick={() => soundEngine.playClick()}
            className="p-6 rounded-3xl bg-gradient-to-t from-[#1A1215] to-[#181024] border border-amber-800/60 hover:border-amber-600 text-center space-y-3 cursor-pointer transition-all hover:-translate-y-1 shadow-[0_0_30px_rgba(180,83,9,0.15)] order-3"
          >
            <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-950/80 border-2 border-amber-600 text-amber-300 font-extrabold text-xl mx-auto shadow-lg">
              {top3[2].avatarLetter}
              <span className="absolute -top-2.5 -right-2 px-2 py-0.5 rounded-full bg-amber-600 text-black text-[10px] font-mono font-black">
                #3
              </span>
            </div>
            <div>
              <h3 className="font-extrabold text-base text-white">{top3[2].name}</h3>
              <span className="text-xs font-mono text-slate-400">@{top3[2].handle}</span>
            </div>
            <div className="pt-2 border-t border-slate-800 flex items-center justify-center gap-3 text-xs font-mono font-bold">
              <span className="text-cyan-400">{top3[2].xp.toLocaleString()} XP</span>
              <span className="text-amber-400 flex items-center gap-0.5">
                <Flame className="w-3 h-3 fill-amber-400" /> {top3[2].streak}d
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Full Leaderboard Table */}
      <div className="p-6 rounded-3xl bg-[#080B1E] border border-slate-800 space-y-4 shadow-xl">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
            All Sovereign Fellows Ranking
          </h2>
          <span className="text-xs font-mono text-slate-400">Updated Real-Time</span>
        </div>

        <div className="space-y-2">
          {fellows.map((fellow, idx) => {
            const isUser = fellow.isCurrentUser;
            const rank = idx + 1;
            return (
              <div
                key={fellow.handle}
                className={`p-3.5 sm:p-4 rounded-2xl border transition-all flex items-center justify-between gap-4 ${
                  isUser
                    ? 'bg-gradient-to-r from-emerald-500/15 via-cyan-500/15 to-[#0B0F24] border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/30'
                    : 'bg-[#050714] border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <span
                    className={`w-6 text-center font-mono font-bold text-xs ${
                      rank === 1
                        ? 'text-amber-400 font-black'
                        : rank === 2
                        ? 'text-slate-300'
                        : rank === 3
                        ? 'text-amber-600'
                        : 'text-slate-500'
                    }`}
                  >
                    #{rank}
                  </span>

                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs border ${fellow.avatarBg}`}>
                    {fellow.avatarLetter}
                  </div>

                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-white flex items-center gap-2">
                      {fellow.name}
                      {isUser && (
                        <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
                          YOU
                        </span>
                      )}
                    </h4>
                    <span className="text-[10px] font-mono text-slate-400">@{fellow.handle}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 sm:gap-6 font-mono text-xs">
                  <div className="flex items-center gap-1 text-amber-400">
                    <Flame className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{fellow.streak}d</span>
                  </div>

                  <div className="font-extrabold text-white text-right min-w-[70px]">
                    {fellow.xp.toLocaleString()} <span className="text-[10px] text-slate-400">XP</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Soulbound Achievement Badges Gallery */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#080B1E] border border-slate-800 space-y-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <h2 className="text-xl font-bold text-white tracking-tight">
                Soulbound Achievement Badges
              </h2>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Cryptographically verified accolades representing permanent sovereign milestone completions.
            </p>
          </div>

          <span className="text-xs font-mono text-emerald-400 font-bold">
            {SOULBOUND_BADGES.filter((b) => b.unlocked).length} of {SOULBOUND_BADGES.length} Badges Unlocked
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SOULBOUND_BADGES.map((badge) => (
            <div
              key={badge.id}
              onClick={() => handleInspectBadge(badge)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between h-48 ${
                badge.unlocked
                  ? 'bg-gradient-to-br from-[#0B0F28] to-[#0A1838] border-amber-500/40 hover:border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.15)] hover:-translate-y-1'
                  : 'bg-[#050714] border-slate-800/80 opacity-60 hover:opacity-80'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{badge.icon}</span>
                  {badge.unlocked ? (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold">
                      UNLOCKED
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-500 flex items-center gap-1 font-bold">
                      <Lock className="w-2.5 h-2.5" /> LOCKED
                    </span>
                  )}
                </div>

                <h3 className="font-extrabold text-sm text-white">{badge.title}</h3>
                <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                  {badge.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>{badge.rarity.split(' ')[0]}</span>
                <span className="text-cyan-400">{badge.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Badge Inspect Modal */}
      {selectedBadge && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-md p-6 rounded-3xl bg-[#090D24] border border-amber-500/40 shadow-[0_0_50px_rgba(245,158,11,0.25)] space-y-5">
            <div className="text-center space-y-2">
              <span className="text-5xl block animate-bounce">{selectedBadge.icon}</span>
              <h3 className="text-xl font-extrabold text-white">{selectedBadge.title}</h3>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 inline-block font-bold">
                {selectedBadge.rarity}
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed text-center font-sans">
              {selectedBadge.description}
            </p>

            <div className="p-3.5 rounded-2xl bg-[#050714] border border-slate-800 text-xs font-mono space-y-1">
              <span className="text-slate-400 block text-[10px]">SOULBOUND PERK:</span>
              <span className="text-emerald-400 font-bold block">{selectedBadge.perk}</span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={handleShareBadge}
                className="flex-1 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                {copiedBadge ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                {copiedBadge ? 'Badge Copied' : 'Share Proof'}
              </button>

              <button
                onClick={() => setSelectedBadge(null)}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
