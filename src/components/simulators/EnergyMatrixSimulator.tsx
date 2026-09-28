import React, { useState } from 'react';
import { Zap, Flame, Shield, CheckCircle2 } from 'lucide-react';
import { soundEngine } from '../../lib/audio';

interface EnergyMatrixSimulatorProps {
  onAddXp?: (amount: number) => void;
}

export const EnergyMatrixSimulator: React.FC<EnergyMatrixSimulatorProps> = ({ onAddXp }) => {
  const [brentCrude, setBrentCrude] = useState(82.5);
  const [naturalGas, setNaturalGas] = useState(3.4);
  const [uraniumU3O8, setUraniumU3O8] = useState(88.0);
  const [lithiumTonne, setLithiumTonne] = useState(16500);

  const [smrNuclearGW, setSmrNuclearGW] = useState(24);
  const [gasPeakerGW, setGasPeakerGW] = useState(18);
  const [renewableGW, setRenewableGW] = useState(32);
  const [batteryGWh, setBatteryGWh] = useState(48);
  const [embargoActive, setEmbargoActive] = useState(false);
  const [claimedReward, setClaimedReward] = useState(false);

  const effectiveGas = embargoActive ? naturalGas * 2.2 : naturalGas;
  const effectiveCrude = embargoActive ? brentCrude * 1.6 : brentCrude;

  const powerPriceMWh = Math.round(
    32 + effectiveGas * 7.5 + (renewableGW < 20 ? 45 : 0) + (embargoActive ? 85 : 0)
  );
  const sparkSpread = +(powerPriceMWh - 7.2 * effectiveGas).toFixed(2);

  const totalFirm = smrNuclearGW + gasPeakerGW + batteryGWh / 4;
  const totalGen = smrNuclearGW + gasPeakerGW + renewableGW;
  const firmRatio = totalGen > 0 ? totalFirm / totalGen : 0.5;
  const resilienceScore = Math.min(
    99,
    Math.max(12, Math.round(firmRatio * 90 + (smrNuclearGW > 20 ? 10 : 0) - (embargoActive ? 22 : 0)))
  );

  const applyPreset = (preset: 'baseline' | 'vortex' | 'chokepoint' | 'nuclear_future') => {
    soundEngine.playClick();
    if (preset === 'baseline') {
      setBrentCrude(82.5);
      setNaturalGas(3.4);
      setUraniumU3O8(88.0);
      setSmrNuclearGW(24);
      setGasPeakerGW(18);
      setRenewableGW(32);
      setBatteryGWh(48);
      setEmbargoActive(false);
    } else if (preset === 'vortex') {
      setNaturalGas(12.8);
      setRenewableGW(8);
      setGasPeakerGW(34);
      setEmbargoActive(false);
    } else if (preset === 'chokepoint') {
      setEmbargoActive(true);
      setBrentCrude(135.0);
      setNaturalGas(9.5);
    } else if (preset === 'nuclear_future') {
      setSmrNuclearGW(65);
      setBatteryGWh(120);
      setGasPeakerGW(6);
      setEmbargoActive(false);
    }
  };

  const handleClaimXp = () => {
    if (claimedReward) return;
    soundEngine.playLevelUp();
    setClaimedReward(true);
    if (onAddXp) onAddXp(150);
  };

  return (
    <div className="space-y-6 font-sans">
      {/* Top Presets Row */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
        <div>
          <h3 className="text-sm font-medium text-white">Commodity Price & Energy Grid Flow</h3>
          <p className="text-xs text-zinc-400 mt-0.5">Thermodynamic clearing prices and spark spread margins.</p>
        </div>

        <div className="flex items-center gap-1.5 flex-wrap">
          {(
            [
              ['baseline', 'Baseline'],
              ['vortex', 'Polar Vortex'],
              ['chokepoint', 'Hormuz Chokepoint'],
              ['nuclear_future', 'SMR Nuclear Base']
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              onClick={() => applyPreset(key)}
              className="px-2.5 py-1 rounded bg-zinc-900 border border-white/[0.08] hover:border-white/20 text-zinc-400 hover:text-white text-xs font-mono transition-colors"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards (Clean Obsidian) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.08]">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-1">
            <span>WHOLESALE POWER</span>
            <span className="text-zinc-400">PJM / ERCOT</span>
          </div>
          <div className="text-xl font-mono font-semibold text-white">
            ${powerPriceMWh} <span className="text-xs font-normal text-zinc-500">/ MWh</span>
          </div>
          <p className="text-[11px] text-zinc-500 mt-1">Marginal clearing price</p>
        </div>

        <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.08]">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-1">
            <span>SPARK SPREAD</span>
            <span className={sparkSpread > 30 ? 'text-cyan-400' : 'text-zinc-400'}>
              {sparkSpread > 30 ? 'EXPANDED' : 'TIGHT'}
            </span>
          </div>
          <div className="text-xl font-mono font-semibold text-white">
            ${sparkSpread} <span className="text-xs font-normal text-zinc-500">/ MWh</span>
          </div>
          <p className="text-[11px] text-zinc-500 mt-1">Power minus heat rate fuel</p>
        </div>

        <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.08]">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-1">
            <span>GRID FREQUENCY</span>
            <span className="text-cyan-400">60.02 HZ</span>
          </div>
          <div className="text-xl font-mono font-semibold text-white">
            {resilienceScore}% <span className="text-xs font-normal text-zinc-500">Stability</span>
          </div>
          <div className="w-full h-1 bg-zinc-800 rounded-full mt-2 overflow-hidden">
            <div
              className="h-full bg-cyan-400 rounded-full transition-all duration-300"
              style={{ width: `${resilienceScore}%` }}
            />
          </div>
        </div>

        <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.08] flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
            <span>CHOKEPOINT FLOW</span>
            <span className={embargoActive ? 'text-zinc-300' : 'text-cyan-400'}>
              {embargoActive ? 'SEVERED' : 'CLEAR'}
            </span>
          </div>
          <button
            onClick={() => {
              soundEngine.playClick();
              setEmbargoActive(!embargoActive);
            }}
            className="w-full mt-2 py-1.5 rounded bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-colors"
          >
            {embargoActive ? 'Restore Flow' : 'Simulate Chokepoint Cut'}
          </button>
        </div>
      </div>

      {/* Sliders: Commodities & Generation Mix */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-5 rounded-xl bg-zinc-900/40 border border-white/[0.08] space-y-4">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider pb-2 border-b border-white/[0.06]">
            Spot Commodities Pricing
          </div>

          <div className="space-y-4 text-xs font-mono">
            <div>
              <div className="flex justify-between text-zinc-300 mb-1">
                <span>Henry Hub Gas</span>
                <span className="text-white">${effectiveGas.toFixed(2)} / MMBtu</span>
              </div>
              <input
                type="range"
                min="1.5"
                max="16.0"
                step="0.1"
                value={naturalGas}
                onChange={(e) => setNaturalGas(parseFloat(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-zinc-300 mb-1">
                <span>Brent Crude Oil</span>
                <span className="text-white">${effectiveCrude.toFixed(1)} / bbl</span>
              </div>
              <input
                type="range"
                min="45"
                max="160"
                step="1"
                value={brentCrude}
                onChange={(e) => setBrentCrude(parseFloat(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-zinc-300 mb-1">
                <span>Uranium U3O8</span>
                <span className="text-white">${uraniumU3O8} / lb</span>
              </div>
              <input
                type="range"
                min="40"
                max="180"
                step="1"
                value={uraniumU3O8}
                onChange={(e) => setUraniumU3O8(parseFloat(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-zinc-300 mb-1">
                <span>Lithium Hydroxide</span>
                <span className="text-white">${lithiumTonne.toLocaleString()} / t</span>
              </div>
              <input
                type="range"
                min="8000"
                max="45000"
                step="500"
                value={lithiumTonne}
                onChange={(e) => setLithiumTonne(parseFloat(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-zinc-900/40 border border-white/[0.08] space-y-4">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider pb-2 border-b border-white/[0.06]">
            Generation Dispatch Mix
          </div>

          <div className="space-y-4 text-xs font-mono">
            <div>
              <div className="flex justify-between text-zinc-300 mb-1">
                <span>SMR Nuclear Base Load</span>
                <span className="text-white">{smrNuclearGW} GW</span>
              </div>
              <input
                type="range"
                min="0"
                max="80"
                step="2"
                value={smrNuclearGW}
                onChange={(e) => setSmrNuclearGW(parseInt(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-zinc-300 mb-1">
                <span>Gas Peakers</span>
                <span className="text-white">{gasPeakerGW} GW</span>
              </div>
              <input
                type="range"
                min="0"
                max="60"
                step="2"
                value={gasPeakerGW}
                onChange={(e) => setGasPeakerGW(parseInt(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-zinc-300 mb-1">
                <span>Intermittent Wind & Solar</span>
                <span className="text-white">{renewableGW} GW</span>
              </div>
              <input
                type="range"
                min="0"
                max="80"
                step="2"
                value={renewableGW}
                onChange={(e) => setRenewableGW(parseInt(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-zinc-300 mb-1">
                <span>Utility Battery Storage</span>
                <span className="text-white">{batteryGWh} GWh</span>
              </div>
              <input
                type="range"
                min="0"
                max="160"
                step="4"
                value={batteryGWh}
                onChange={(e) => setBatteryGWh(parseInt(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Claim Button Strip */}
      <div className="flex items-center justify-between p-4 rounded-xl border border-white/[0.08] bg-zinc-900/30">
        <div>
          <h4 className="text-xs font-medium text-white">Grid Equilibrium Solved</h4>
          <p className="text-xs text-zinc-400 mt-0.5">Thermodynamic balance verified under current dispatch parameters.</p>
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
