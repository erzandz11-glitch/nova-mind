import React, { useState } from 'react';
import { Dna, Sparkles, CheckCircle2, Zap } from 'lucide-react';
import { soundEngine } from '../../lib/audio';

interface BiomarkerDiagnosticLabProps {
  onAddXp?: (amount: number) => void;
}

export const BiomarkerDiagnosticLab: React.FC<BiomarkerDiagnosticLabProps> = ({ onAddXp }) => {
  const [chronologicalAge, setChronologicalAge] = useState(42);
  const [yamanakaOSK, setYamanakaOSK] = useState(true);
  const [senolytics, setSenolytics] = useState(true);
  const [nadRepletion, setNadRepletion] = useState(true);
  const [mTorModulation, setMtorModulation] = useState(false);
  const [deepSleepOpt, setDeepSleepOpt] = useState(true);

  const [guideRNA, setGuideRNA] = useState('ACGTGCTACGTAGCTGATCG');
  const [selectedPam, setSelectedPam] = useState<'NGG' | 'NAG' | 'TTTV'>('NGG');
  const [targetGene, setTargetGene] = useState<'APOB' | 'PCSK9' | 'IL6' | 'FOXO3'>('PCSK9');

  const [claimedReward, setClaimedReward] = useState(false);

  let ageDelta = 0;
  if (yamanakaOSK) ageDelta += 7.8;
  if (senolytics) ageDelta += 3.4;
  if (nadRepletion) ageDelta += 2.8;
  if (mTorModulation) ageDelta += 3.1;
  if (deepSleepOpt) ageDelta += 2.2;

  const biologicalAge = +(chronologicalAge - ageDelta).toFixed(1);

  const isPamOptimal = selectedPam === 'NGG';
  const gcCount = (guideRNA.match(/[GCgc]/g) || []).length;
  const gcPercent = Math.round((gcCount / Math.max(1, guideRNA.length)) * 100);
  const cleavageEfficiency = isPamOptimal
    ? Math.min(99.2, Math.max(40, 75 + (gcPercent >= 40 && gcPercent <= 60 ? 22 : 8)))
    : 14.5;

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
          <h3 className="text-sm font-medium text-white">CRISPR Targeting & Epigenetic Aging</h3>
          <p className="text-xs text-zinc-400 mt-0.5">In silico sgRNA design and Horvath methylation age modeling.</p>
        </div>

        <div className="text-xs font-mono text-zinc-400">
          Biological Delta: <span className="text-cyan-400 font-medium">-{ageDelta.toFixed(1)} Years</span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.08]">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-1">
            <span>HORVATH AGE</span>
            <span className="text-cyan-400">-{ageDelta.toFixed(1)} YRS</span>
          </div>
          <div className="text-xl font-mono font-semibold text-white">
            {biologicalAge} <span className="text-xs font-normal text-zinc-500">(vs {chronologicalAge})</span>
          </div>
          <p className="text-[11px] text-zinc-500 mt-1">Methylation reset active</p>
        </div>

        <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.08]">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-1">
            <span>ON-TARGET CLEAVAGE</span>
            <span className={isPamOptimal ? 'text-cyan-400' : 'text-zinc-400'}>
              {isPamOptimal ? 'CANONICAL' : 'LOW BINDING'}
            </span>
          </div>
          <div className="text-xl font-mono font-semibold text-white">
            {cleavageEfficiency.toFixed(1)}%
          </div>
          <p className="text-[11px] text-zinc-500 mt-1">GC Content: {gcPercent}%</p>
        </div>

        <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.08]">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-1">
            <span>HS-CRP INFLAMMATION</span>
            <span className="text-cyan-400">OPTIMAL</span>
          </div>
          <div className="text-xl font-mono font-semibold text-white">
            0.35 <span className="text-xs font-normal text-zinc-500">mg/L</span>
          </div>
          <p className="text-[11px] text-zinc-500 mt-1">ApoB: 62 mg/dL</p>
        </div>

        <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.08]">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-1">
            <span>PEAK VO2 MAX</span>
            <span className="text-cyan-400">TOP 1%</span>
          </div>
          <div className="text-xl font-mono font-semibold text-white">
            54 <span className="text-xs font-normal text-zinc-500">mL/kg/min</span>
          </div>
          <p className="text-[11px] text-zinc-500 mt-1">Mitochondrial density</p>
        </div>
      </div>

      {/* Editor & Protocol Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* CRISPR Editor */}
        <div className="p-5 rounded-xl bg-zinc-900/40 border border-white/[0.08] space-y-4">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider pb-2 border-b border-white/[0.06]">
            CRISPR-Cas9 sgRNA Sequence Editor
          </div>

          <div className="space-y-3 font-mono text-xs">
            <div>
              <span className="text-zinc-400 block mb-1.5">Target Gene Locus:</span>
              <div className="grid grid-cols-4 gap-1.5">
                {(['PCSK9', 'APOB', 'IL6', 'FOXO3'] as const).map((gene) => (
                  <button
                    key={gene}
                    onClick={() => {
                      soundEngine.playClick();
                      setTargetGene(gene);
                    }}
                    className={`py-1.5 rounded text-center transition-colors ${
                      targetGene === gene
                        ? 'bg-white text-zinc-950 font-medium'
                        : 'bg-zinc-900 text-zinc-400 hover:text-white border border-white/[0.06]'
                    }`}
                  >
                    {gene}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="text-zinc-400 block mb-1.5">20-nt Protospacer Guide (5&apos; &rarr; 3&apos;):</span>
              <input
                type="text"
                value={guideRNA}
                onChange={(e) => setGuideRNA(e.target.value.toUpperCase().replace(/[^ATCG]/g, '').slice(0, 20))}
                className="w-full p-2.5 rounded bg-zinc-900 border border-white/10 text-white tracking-widest focus:outline-none focus:border-cyan-400"
              />
              <div className="flex justify-between text-[11px] text-zinc-500 mt-1">
                <span>{guideRNA.length}/20 nt</span>
                <span>GC Content: {gcPercent}%</span>
              </div>
            </div>

            <div>
              <span className="text-zinc-400 block mb-1.5">PAM Sequence:</span>
              <div className="flex gap-2">
                {(['NGG', 'NAG', 'TTTV'] as const).map((pam) => (
                  <button
                    key={pam}
                    onClick={() => {
                      soundEngine.playClick();
                      setSelectedPam(pam);
                    }}
                    className={`flex-1 py-1.5 rounded transition-colors ${
                      selectedPam === pam
                        ? 'bg-white text-zinc-950 font-medium'
                        : 'bg-zinc-900 text-zinc-400 hover:text-white border border-white/[0.06]'
                    }`}
                  >
                    5&apos;-{pam}-3&apos; {pam === 'NGG' && '(SpCas9)'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Epigenetic Protocols */}
        <div className="p-5 rounded-xl bg-zinc-900/40 border border-white/[0.08] space-y-4">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider pb-2 border-b border-white/[0.06]">
            Epigenetic Interventions
          </div>

          <div className="space-y-3 font-mono text-xs">
            <div>
              <div className="flex justify-between text-zinc-300 mb-1">
                <span>Chronological Baseline</span>
                <span className="text-white">{chronologicalAge} Years</span>
              </div>
              <input
                type="range"
                min="25"
                max="80"
                value={chronologicalAge}
                onChange={(e) => setChronologicalAge(parseInt(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            <div className="space-y-1.5 pt-1">
              {[
                { state: yamanakaOSK, setter: setYamanakaOSK, title: 'Transient Yamanaka OSK Reprogramming', rev: '-7.8 yrs' },
                { state: senolytics, setter: setSenolytics, title: 'Targeted Senolytic Clearance (D+Q & Fisetin)', rev: '-3.4 yrs' },
                { state: nadRepletion, setter: setNadRepletion, title: 'NAD+ Salvage & CD38 Inhibition', rev: '-2.8 yrs' },
                { state: mTorModulation, setter: setMtorModulation, title: 'Rapamycin mTORC1 Modulation', rev: '-3.1 yrs' },
                { state: deepSleepOpt, setter: setDeepSleepOpt, title: 'Glymphatic Flush & Deep Sleep Protocol', rev: '-2.2 yrs' }
              ].map((p, i) => (
                <div
                  key={i}
                  onClick={() => {
                    soundEngine.playClick();
                    p.setter(!p.state);
                  }}
                  className={`p-2 rounded border flex items-center justify-between cursor-pointer transition-colors ${
                    p.state
                      ? 'bg-white/[0.04] border-white/20 text-white'
                      : 'bg-zinc-900/40 border-white/[0.04] text-zinc-500'
                  }`}
                >
                  <span>{p.title}</span>
                  <span className={p.state ? 'text-cyan-400 font-medium' : 'text-zinc-600'}>{p.rev}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Claim Button Strip */}
      <div className="flex items-center justify-between p-4 rounded-xl border border-white/[0.08] bg-zinc-900/30">
        <div>
          <h4 className="text-xs font-medium text-white">Genomic Target Verification</h4>
          <p className="text-xs text-zinc-400 mt-0.5">PAM sequence and biological age reversal parameters logged.</p>
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
