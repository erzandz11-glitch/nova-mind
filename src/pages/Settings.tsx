import React, { useState } from 'react';
import {
  Settings as SettingsIcon,
  Volume2,
  VolumeX,
  Shield,
  Wallet,
  Sparkles,
  Save,
  Check,
  User,
  Bell
} from 'lucide-react';
import { UserGamificationState } from '../types';
import { soundEngine } from '../lib/audio';

interface SettingsProps {
  userState: UserGamificationState;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onUpdateDisplayName: (name: string) => void;
  onOpenWalletModal: () => void;
}

export const Settings: React.FC<SettingsProps> = ({
  userState,
  soundEnabled,
  onToggleSound,
  onUpdateDisplayName,
  onOpenWalletModal
}) => {
  const [nameInput, setNameInput] = useState(userState.displayName);
  const [savedToast, setSavedToast] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    soundEngine.playCorrect();
    onUpdateDisplayName(nameInput.trim() || 'Titan Architect');
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 2000);
  };

  return (
    <div className="relative min-h-[calc(100vh-5rem)] p-4 sm:p-6 lg:p-10 space-y-8 arena-grid max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#090D22]/85 border border-slate-800 backdrop-blur-xl space-y-2">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <SettingsIcon className="w-4 h-4" />
          </span>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
            ARENA PREFERENCES
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          System &amp; Audio Settings
        </h1>
        <p className="text-xs sm:text-sm text-slate-300">
          Personalize your dopamine chimes, streak reminders, and sovereign identity credentials.
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        
        {/* Profile Details */}
        <div className="p-6 rounded-3xl bg-[#080B1C]/90 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
            <User className="w-4 h-4 text-emerald-400" />
            <h3 className="font-extrabold text-sm text-white">Sovereign Profile</h3>
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
              Display Call-Sign / Architect Name
            </label>
            <input
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-[#050714] border border-slate-800 text-white font-bold text-sm focus:outline-none focus:border-emerald-400 transition-colors"
              placeholder="e.g. Sovereign Titan"
            />
          </div>
        </div>

        {/* Audio Design */}
        <div className="p-6 rounded-3xl bg-[#080B1C]/90 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
            <Volume2 className="w-4 h-4 text-cyan-400" />
            <h3 className="font-extrabold text-sm text-white">Dopamine Audio Feedback</h3>
          </div>

          <div className="flex items-center justify-between p-4 rounded-2xl bg-[#050714] border border-slate-850">
            <div className="space-y-0.5">
              <h4 className="text-sm font-bold text-white">Synthesized Web Audio Chimes</h4>
              <p className="text-xs text-slate-400">
                Play Duolingo-style positive triad sounds upon correct answers and streak promotions.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                onToggleSound();
                if (!soundEnabled) soundEngine.playLevelUp();
              }}
              className={`tactile-btn px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                soundEnabled
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                  : 'bg-slate-850 text-slate-400 border border-slate-700'
              }`}
            >
              {soundEnabled ? 'ACTIVE (CHIMES ON)' : 'MUTED'}
            </button>
          </div>
        </div>

        {/* Cryptographic Ledger */}
        <div className="p-6 rounded-3xl bg-[#080B1C]/90 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
            <Wallet className="w-4 h-4 text-purple-400" />
            <h3 className="font-extrabold text-sm text-white">Sovereign Ledger Binding</h3>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#050714] border border-slate-850">
            <div>
              <span className="text-xs font-mono text-slate-400">STATUS:</span>
              <p className="text-sm font-bold text-white font-mono mt-0.5">
                {userState.walletConnected ? `Connected (${userState.walletAddress})` : 'No Hardware Ledger Bound'}
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenWalletModal}
              className="tactile-btn px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-white font-bold text-xs border border-slate-700 cursor-pointer"
            >
              {userState.walletConnected ? 'Manage Session' : 'Bind Hardware Ledger'}
            </button>
          </div>
        </div>

        {/* Save CTA */}
        <div className="flex items-center justify-end gap-3 pt-2">
          {savedToast && (
            <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
              <Check className="w-4 h-4" /> Preferences Saved!
            </span>
          )}

          <button
            type="submit"
            className="tactile-btn flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-500 hover:brightness-110 text-black font-extrabold text-xs shadow-[0_0_20px_rgba(16,185,129,0.3)] cursor-pointer"
          >
            <Save className="w-4 h-4" />
            <span>Save Preferences</span>
          </button>
        </div>

      </form>

    </div>
  );
};
