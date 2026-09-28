import React, { useState } from 'react';
import {
  Terminal,
  Zap,
  Dna,
  Brain,
  TrendingUp,
  Coins,
  Bot,
  Sliders
} from 'lucide-react';
import { UserGamificationState, FrontierFacultyId } from '../types';
import { FRONTIER_FACULTIES } from '../data/frontierFacultiesData';
import { DeepITTerminalSandbox } from '../components/simulators/DeepITTerminalSandbox';
import { EnergyMatrixSimulator } from '../components/simulators/EnergyMatrixSimulator';
import { BiomarkerDiagnosticLab } from '../components/simulators/BiomarkerDiagnosticLab';
import { MindsetStressTestSimulator } from '../components/simulators/MindsetStressTestSimulator';
import { QuantTradingSimulator } from '../components/simulators/QuantTradingSimulator';
import { CryptoDeFiSandbox } from '../components/simulators/CryptoDeFiSandbox';
import { AIPromptWarfareSandbox } from '../components/simulators/AIPromptWarfareSandbox';
import { soundEngine } from '../lib/audio';

interface SimulationPageProps {
  userState: UserGamificationState;
  onAddXp: (amount: number) => void;
  initialFacultyId?: FrontierFacultyId;
}

export const SimulationPage: React.FC<SimulationPageProps> = ({
  userState,
  onAddXp,
  initialFacultyId = 'deep_it_cyber'
}) => {
  const [selectedFacultyId, setSelectedFacultyId] = useState<FrontierFacultyId>(initialFacultyId);

  const activeFaculty =
    FRONTIER_FACULTIES.find((f) => f.id === selectedFacultyId) || FRONTIER_FACULTIES[0];

  const handleSelectFaculty = (id: FrontierFacultyId) => {
    soundEngine.playClick();
    setSelectedFacultyId(id);
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
        return Sliders;
    }
  };

  return (
    <div className="min-h-[calc(100vh-3.5rem)] p-6 sm:p-8 lg:p-12 space-y-8 max-w-6xl mx-auto font-sans">
      
      {/* Page Header (Clean, minimalist, no tacky badges) */}
      <div className="space-y-2 border-b border-white/[0.08] pb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
          <span>02</span>
          <span className="text-zinc-600">/</span>
          <span>INTERACTIVE SANDBOXES</span>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Simulation Studio
        </h1>
        <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed">
          Real-time interactive engines modeling bare-metal kernels, spark spreads, epigenetic clocks, stoic rationality, order books, multi-sigs, and prompt jailbreaks.
        </p>
      </div>

      {/* Sleek Segmented Control for 7 Simulators */}
      <div className="border-b border-white/[0.08] pb-3">
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          {FRONTIER_FACULTIES.map((fac, idx) => {
            const Icon = getFacultyIcon(fac.iconName);
            const isSelected = fac.id === selectedFacultyId;
            return (
              <button
                key={fac.id}
                onClick={() => handleSelectFaculty(fac.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-white/[0.08] text-white font-medium border border-white/10 shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.03]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-cyan-400' : 'text-zinc-500'}`} />
                <span>{fac.shortTitle}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Simulator Meta Banner */}
      <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
        <div className="flex items-center gap-2 text-zinc-300">
          <span className="text-cyan-400 font-medium">{activeFaculty.shortTitle}:</span>
          <span>{activeFaculty.simulatorName}</span>
        </div>
        <span>{activeFaculty.simulatorTag}</span>
      </div>

      {/* Simulator Container */}
      <div className="rounded-2xl bg-zinc-950/80 border border-white/[0.08] p-6 sm:p-8">
        {selectedFacultyId === 'deep_it_cyber' && (
          <DeepITTerminalSandbox onAddXp={onAddXp} />
        )}
        {selectedFacultyId === 'energy_economics' && (
          <EnergyMatrixSimulator onAddXp={onAddXp} />
        )}
        {selectedFacultyId === 'biotech_longevity' && (
          <BiomarkerDiagnosticLab onAddXp={onAddXp} />
        )}
        {selectedFacultyId === 'mindset_cognitive' && (
          <MindsetStressTestSimulator onAddXp={onAddXp} />
        )}
        {selectedFacultyId === 'quant_macro_finance' && (
          <QuantTradingSimulator onAddXp={onAddXp} />
        )}
        {selectedFacultyId === 'crypto_defi_web3' && (
          <CryptoDeFiSandbox onAddXp={onAddXp} />
        )}
        {selectedFacultyId === 'ai_autonomous_swarms' && (
          <AIPromptWarfareSandbox onAddXp={onAddXp} />
        )}
      </div>
    </div>
  );
};
