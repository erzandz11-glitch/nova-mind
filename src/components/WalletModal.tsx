import React, { useState } from 'react';
import { X, ShieldCheck, Wallet, ArrowUpRight, RefreshCw, CheckCircle2 } from 'lucide-react';
import { soundEngine } from '../lib/audio';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
  isConnected: boolean;
  walletAddress?: string;
  onConnect: (address: string) => void;
  onDisconnect: () => void;
}

export const WalletModal: React.FC<WalletModalProps> = ({
  isOpen,
  onClose,
  isConnected,
  walletAddress,
  onConnect,
  onDisconnect,
}) => {
  const [connectingProvider, setConnectingProvider] = useState<string | null>(null);

  if (!isOpen) return null;

  const providers = [
    { id: 'ledger', name: 'Ledger Hardware', icon: '🛡️', desc: 'Cold Sovereign Storage Vault', popular: true },
    { id: 'metamask', name: 'MetaMask', icon: '🦊', desc: 'EVM & Arbitrage Networks' },
    { id: 'phantom', name: 'Phantom', icon: '👻', desc: 'Solana & Multi-Chain' },
    { id: 'coinbase', name: 'Coinbase Wallet', icon: '🔵', desc: 'Smart Contract Escrow' },
  ];

  const handleProviderClick = (id: string) => {
    soundEngine.playClick();
    setConnectingProvider(id);
    setTimeout(() => {
      soundEngine.playLevelUp();
      const mockAddr = `0x71C...${Math.floor(1000 + Math.random() * 9000)}`;
      onConnect(mockAddr);
      setConnectingProvider(null);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-md p-6 bg-[#090D22] border border-emerald-500/40 rounded-3xl shadow-[0_0_60px_rgba(16,185,129,0.2)] text-slate-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <Wallet className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-extrabold tracking-tight text-white">
                {isConnected ? 'Sovereign Ledger Vault' : 'Bind Hardware Ledger'}
              </h2>
              <p className="text-xs text-slate-400">
                {isConnected ? 'Active signing session' : 'Sign zero-knowledge graduation credentials'}
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              soundEngine.playClick();
              onClose();
            }}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {isConnected ? (
          <div className="mt-5 space-y-4">
            <div className="p-4 rounded-2xl bg-[#050714] border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1 font-mono">
                <span>CONNECTED LEDGER</span>
                <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Ethereum Mainnet
                </span>
              </div>
              <p className="font-mono text-sm text-white break-all font-bold py-1">
                {walletAddress || '0x71C...4921'}
              </p>
              <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Vault Balance</span>
                <span className="font-bold text-emerald-300">14.85 ETH</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 text-xs text-emerald-300 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                Your sovereign ledger cryptographically signs masterclass completion badges into non-transferrable proof of knowledge.
              </span>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => {
                  soundEngine.playClick();
                  onDisconnect();
                  onClose();
                }}
                className="tactile-btn w-full py-2.5 px-4 text-xs font-bold text-rose-300 bg-rose-950/30 border border-rose-900/50 rounded-xl hover:bg-rose-900/40 transition-colors cursor-pointer"
              >
                Disconnect Session
              </button>
              <button
                onClick={() => {
                  soundEngine.playClick();
                  onClose();
                }}
                className="tactile-btn w-full py-2.5 px-4 text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-5 space-y-2.5">
            {providers.map((p) => (
              <button
                key={p.id}
                onClick={() => handleProviderClick(p.id)}
                disabled={connectingProvider !== null}
                className="tactile-btn w-full flex items-center justify-between p-3.5 rounded-2xl bg-[#050714] border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900/50 transition-all group text-left cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{p.icon}</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {p.name}
                      </span>
                      {p.popular && (
                        <span className="text-[10px] uppercase font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-950 border border-emerald-800 text-emerald-400">
                          Recommended
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-slate-400">{p.desc}</span>
                  </div>
                </div>
                {connectingProvider === p.id ? (
                  <RefreshCw className="w-4 h-4 text-emerald-400 animate-spin" />
                ) : (
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-transform" />
                )}
              </button>
            ))}

            <div className="pt-3 text-center">
              <p className="text-[11px] text-slate-400 font-mono">
                Zero-knowledge signature. NOVA MIND never stores private keys.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
