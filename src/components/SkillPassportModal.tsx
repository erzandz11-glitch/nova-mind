import React, { useRef, useState } from 'react';
import { Award, Share2, Download, Check, Sparkles, X, Shield, Terminal, Zap, Brain } from 'lucide-react';
import { UserGamificationState, FrontierFaculty } from '../types';
import { soundEngine } from '../lib/audio';

interface SkillPassportModalProps {
  isOpen: boolean;
  onClose: () => void;
  userState: UserGamificationState;
  faculty?: FrontierFaculty;
}

export const SkillPassportModal: React.FC<SkillPassportModalProps> = ({
  isOpen,
  onClose,
  userState,
  faculty,
}) => {
  const [copied, setCopied] = useState<boolean>(false);
  const passportRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const issueDate = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const facultyTitle = faculty?.name || 'Sovereign Cognitive Frontier';
  const facultyColor = faculty?.accentHex || '#06b6d4';

  const handleShare = () => {
    soundEngine.playActivate();
    const shareText = `Saya baru saja menyelesaikan pelatihan tingkat tinggi "${facultyTitle}" di Nova Mind Academy! 🚀\nLevel: ${userState.level} | Total XP: ${userState.xp} XP | Streak: ${userState.streakDays} Hari 🔥\n\nCek portofolio belajar saya di Nova Mind.`;
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-zinc-950 border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(6,182,212,0.2)] overflow-hidden font-sans">
        
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d40a_1px,transparent_1px),linear-gradient(to_bottom,#06b6d40a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={() => {
            soundEngine.playClick();
            onClose();
          }}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Passport Certificate Card */}
        <div
          ref={passportRef}
          className="relative rounded-2xl bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 border border-cyan-500/40 p-6 sm:p-8 space-y-6"
        >
          {/* Top Seal */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center text-cyan-400 font-bold">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-mono tracking-widest text-cyan-400 font-semibold uppercase">
                  NOVA MIND SOVEREIGN PASSPORT
                </h3>
                <p className="text-[10px] font-mono text-zinc-500">
                  DECENTRALIZED PROOF OF MASTERY
                </p>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[10px] font-mono text-zinc-500 block">ISSUED</span>
              <span className="text-xs font-mono text-zinc-300 font-bold">{issueDate}</span>
            </div>
          </div>

          {/* Certificate Body */}
          <div className="space-y-4 text-center sm:text-left">
            <p className="text-xs font-mono text-zinc-400">
              THIS IS TO CERTIFY THAT SOVEREIGN FELLOW:
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-cyan-300">
              {userState.displayName || 'Sovereign Pioneer'}
            </h2>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Telah berhasil menyelesaikan simulasi kognitif, evaluasi taktis, dan kurikulum frontier tingkat tinggi pada bidang:
            </p>
            <div className="inline-block px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold">
              {facultyTitle}
            </div>
          </div>

          {/* Metrics Matrix */}
          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/[0.08] text-center">
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-[10px] font-mono text-zinc-500 block">COGNITIVE LEVEL</span>
              <span className="text-lg font-bold text-white font-mono">Lv. {userState.level}</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-[10px] font-mono text-zinc-500 block">TOTAL ACCUMULATED XP</span>
              <span className="text-lg font-bold text-amber-400 font-mono">{userState.xp.toLocaleString()} XP</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-[10px] font-mono text-zinc-500 block">DAILY STREAK</span>
              <span className="text-lg font-bold text-rose-400 font-mono">{userState.streakDays} Days 🔥</span>
            </div>
          </div>

          {/* Cryptographic Footprint */}
          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-600 pt-2">
            <span>HASH: 0xNV_{Math.random().toString(36).substring(2, 10).toUpperCase()}</span>
            <span className="flex items-center gap-1 text-emerald-400/80">
              <Shield className="w-3 h-3" /> VERIFIED ON NOVA OS
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-6">
          <button
            onClick={handleShare}
            className="flex-1 py-3 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
            <span>{copied ? 'Tersalin ke Clipboard!' : 'Share Proof of Mastery'}</span>
          </button>
          
          <button
            onClick={() => {
              soundEngine.playClick();
              onClose();
            }}
            className="py-3 px-6 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 font-mono text-xs transition-colors cursor-pointer"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
};
