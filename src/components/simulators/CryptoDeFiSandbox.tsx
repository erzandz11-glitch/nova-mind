import React, { useState } from 'react';
import { Shield, Key, CheckCircle2, Zap, Lock, Unlock } from 'lucide-react';
import { soundEngine } from '../../lib/audio';

interface CryptoDeFiSandboxProps {
  onAddXp?: (amount: number) => void;
}

interface Signer {
  id: string;
  name: string;
  address: string;
  hasSigned: boolean;
  signature?: string;
}

export const CryptoDeFiSandbox: React.FC<CryptoDeFiSandboxProps> = ({ onAddXp }) => {
  const [activeTab, setActiveTab] = useState<'multisig' | 'amm'>('multisig');
  const [threshold] = useState(3);
  const [signers, setSigners] = useState<Signer[]>([
    { id: 's1', name: 'Ledger Primary Key', address: '0x71C...49bE', hasSigned: true, signature: '0x8f2a...1e4b' },
    { id: 's2', name: 'Risk Sentinel YubiKey', address: '0x32A...8e21', hasSigned: true, signature: '0x1c99...aa31' },
    { id: 's3', name: 'Treasury MPC Node', address: '0x99F...d042', hasSigned: false },
    { id: 's4', name: 'Cold Custodian Trezor', address: '0x44B...11c9', hasSigned: false },
    { id: 's5', name: 'Hardware Enclave', address: '0xAA1...6530', hasSigned: false }
  ]);
  const [txExecuted, setTxExecuted] = useState(false);

  const [initialPrice] = useState(3400);
  const [simulatedPrice, setSimulatedPrice] = useState(4250);
  const [lowerTick] = useState(2800);
  const [upperTick] = useState(4400);
  const [claimedReward, setClaimedReward] = useState(false);

  const priceRatio = simulatedPrice / initialPrice;
  const standardILPercent = +(
    ((2 * Math.sqrt(priceRatio)) / (1 + priceRatio) - 1) *
    100
  ).toFixed(2);
  const isInRange = simulatedPrice >= lowerTick && simulatedPrice <= upperTick;

  const signCount = signers.filter((s) => s.hasSigned).length;
  const isQuorumReached = signCount >= threshold;

  const handleToggleSign = (signerId: string) => {
    soundEngine.playClick();
    setSigners((prev) =>
      prev.map((s) => {
        if (s.id === signerId) {
          const nextSigned = !s.hasSigned;
          return {
            ...s,
            hasSigned: nextSigned,
            signature: nextSigned
              ? '0x' + Math.random().toString(16).slice(2, 8) + '...' + Math.random().toString(16).slice(2, 6)
              : undefined
          };
        }
        return s;
      })
    );
  };

  const handleExecuteTx = () => {
    if (!isQuorumReached || txExecuted) return;
    soundEngine.playCorrect();
    setTxExecuted(true);
  };

  const handleClaimXp = () => {
    if (claimedReward) return;
    soundEngine.playLevelUp();
    setClaimedReward(true);
    if (onAddXp) onAddXp(150);
  };

  return (
    <div className="space-y-6 font-sans">
      {/* Top Banner */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
        <div>
          <h3 className="text-sm font-medium text-white">Cryptographic Vault & AMM Sandbox</h3>
          <p className="text-xs text-zinc-400 mt-0.5">3-of-5 multi-sig execution and concentrated tick impermanent loss.</p>
        </div>

        <div className="flex gap-1 bg-zinc-900 p-1 rounded-lg border border-white/[0.06]">
          <button
            onClick={() => setActiveTab('multisig')}
            className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
              activeTab === 'multisig' ? 'bg-white text-zinc-950 font-medium' : 'text-zinc-400 hover:text-white'
            }`}
          >
            3-of-5 Multi-Sig
          </button>
          <button
            onClick={() => setActiveTab('amm')}
            className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
              activeTab === 'amm' ? 'bg-white text-zinc-950 font-medium' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Uniswap v3 AMM
          </button>
        </div>
      </div>

      {activeTab === 'multisig' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl bg-zinc-900/40 border border-white/[0.08] space-y-4 font-mono text-xs">
            <div className="text-zinc-500 uppercase tracking-wider pb-2 border-b border-white/[0.06] flex justify-between">
              <span>Vault State</span>
              <span className="text-cyan-400">ETH L1</span>
            </div>

            <div className="space-y-2">
              <span className="text-zinc-500 text-[11px] block">Treasury Reserves:</span>
              <div className="text-xl font-semibold text-white font-mono">$4,850,000 USDC</div>
            </div>

            <div className="p-3 rounded-lg bg-black/40 border border-white/[0.06] space-y-1">
              <span className="text-[10px] text-zinc-500 block uppercase">Pending Action</span>
              <p className="text-zinc-300 text-xs leading-relaxed">
                Deploy 2,500,000 USDC to Lido Staked ETH Pool
              </p>
              <div className="text-[11px] text-zinc-400 pt-1">
                Threshold: <span className="text-white font-medium">{signCount}/{threshold} Signatures</span>
              </div>
            </div>

            <button
              onClick={handleExecuteTx}
              disabled={!isQuorumReached || txExecuted}
              className={`w-full py-2.5 rounded-lg text-xs font-medium font-mono transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                txExecuted
                  ? 'bg-zinc-800 text-zinc-400 cursor-default'
                  : isQuorumReached
                  ? 'bg-cyan-400 hover:bg-cyan-300 text-zinc-950'
                  : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
              }`}
            >
              {txExecuted ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Transaction Broadcast</span>
                </>
              ) : isQuorumReached ? (
                <>
                  <Unlock className="w-3.5 h-3.5" />
                  <span>Broadcast Multi-Sig Tx</span>
                </>
              ) : (
                <>
                  <Lock className="w-3.5 h-3.5" />
                  <span>Awaiting Signatures</span>
                </>
              )}
            </button>
          </div>

          <div className="lg:col-span-2 p-5 rounded-xl bg-zinc-900/40 border border-white/[0.08] space-y-3 font-mono text-xs">
            <div className="text-zinc-500 uppercase tracking-wider pb-2 border-b border-white/[0.06] flex justify-between">
              <span>Signer Keys</span>
              <span>ECDSA secp256k1</span>
            </div>

            <div className="space-y-2">
              {signers.map((s) => (
                <div
                  key={s.id}
                  className={`p-3 rounded-lg border flex items-center justify-between gap-3 transition-colors ${
                    s.hasSigned ? 'bg-white/[0.03] border-white/20' : 'bg-zinc-900/30 border-white/[0.04]'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${s.hasSigned ? 'bg-cyan-400' : 'bg-zinc-600'}`} />
                      <span className="font-medium text-white">{s.name}</span>
                    </div>
                    <span className="text-[11px] text-zinc-500 pl-3.5 block mt-0.5">
                      {s.address} {s.signature && <span className="text-cyan-300">· Signed</span>}
                    </span>
                  </div>

                  <button
                    onClick={() => handleToggleSign(s.id)}
                    className="px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors text-[11px]"
                  >
                    {s.hasSigned ? 'Revoke' : 'Sign'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 font-mono text-xs">
          <div className="p-5 rounded-xl bg-zinc-900/40 border border-white/[0.08] space-y-4">
            <div className="text-zinc-500 uppercase tracking-wider pb-2 border-b border-white/[0.06] flex justify-between">
              <span>Concentrated Range</span>
              <span className={isInRange ? 'text-cyan-400' : 'text-zinc-500'}>
                {isInRange ? 'IN ACTIVE RANGE' : 'OUT OF RANGE'}
              </span>
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-zinc-300 mb-1">
                  <span>Simulated ETH Price</span>
                  <span className="text-white">${simulatedPrice} USDC</span>
                </div>
                <input
                  type="range"
                  min="1800"
                  max="5500"
                  step="50"
                  value={simulatedPrice}
                  onChange={(e) => setSimulatedPrice(parseInt(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded bg-zinc-900 border border-white/[0.06]">
                  <span className="text-zinc-500 text-[10px] block">Lower Tick</span>
                  <span className="font-semibold text-white">${lowerTick}</span>
                </div>
                <div className="p-3 rounded bg-zinc-900 border border-white/[0.06]">
                  <span className="text-zinc-500 text-[10px] block">Upper Tick</span>
                  <span className="font-semibold text-white">${upperTick}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-zinc-900/40 border border-white/[0.08] space-y-4">
            <div className="text-zinc-500 uppercase tracking-wider pb-2 border-b border-white/[0.06]">
              Impermanent Loss Telemetry
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded bg-zinc-900 border border-white/[0.06]">
                <span className="text-zinc-500 text-[10px] block">Impermanent Loss</span>
                <span className="text-xl font-semibold text-white">{standardILPercent}%</span>
              </div>
              <div className="p-3.5 rounded bg-zinc-900 border border-white/[0.06]">
                <span className="text-zinc-500 text-[10px] block">Active Fee APY</span>
                <span className="text-xl font-semibold text-cyan-300">{isInRange ? '38.5%' : '0.0%'}</span>
              </div>
            </div>

            <p className="text-zinc-400 text-xs leading-relaxed">
              {isInRange
                ? 'Position is in-range, capturing swap volume with 4.2x capital concentration.'
                : 'Position has broken outside active ticks. All assets have converted into the depreciating side.'}
            </p>
          </div>
        </div>
      )}

      {/* Claim Button Strip */}
      <div className="flex items-center justify-between p-4 rounded-xl border border-white/[0.08] bg-zinc-900/30">
        <div>
          <h4 className="text-xs font-medium text-white">DeFi Sovereignty Logged</h4>
          <p className="text-xs text-zinc-400 mt-0.5">Threshold signature verification confirmed on local simulator.</p>
        </div>

        <button
          onClick={handleClaimXp}
          disabled={claimedReward}
          className={`px-4 py-2 rounded-lg font-mono text-xs transition-colors flex items-center gap-1.5 cursor-pointer ${
            claimedReward
              ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
              : 'bg-cyan-400 hover:bg-cyan-300 text-zinc-950 font-medium'
          }`}
        >
          {claimedReward ? (
            <>
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Logged (+150 XP)</span>
            </>
          ) : (
            <>
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>Verify & Claim +150 XP</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
