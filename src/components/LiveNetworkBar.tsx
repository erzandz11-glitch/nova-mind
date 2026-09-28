import React, { useState, useEffect } from 'react';
import {
  Globe,
  Radio,
  Volume2,
  VolumeX,
  Activity,
  Users,
  Cpu,
  ChevronRight
} from 'lucide-react';
import { DEFAULT_CLUSTER_STATUS, LIVE_PEER_ACTIVITIES } from '../data/mockData';
import { soundEngine } from '../lib/audio';

interface LiveNetworkBarProps {
  onOpenBenchmark?: () => void;
}

export const LiveNetworkBar: React.FC<LiveNetworkBarProps> = ({ onOpenBenchmark }) => {
  const [peerCount, setPeerCount] = useState<number>(DEFAULT_CLUSTER_STATUS.activeSovereignPeers);
  const [activityIndex, setActivityIndex] = useState<number>(0);
  const [audioEnabled, setAudioEnabled] = useState<boolean>(true);

  // Subtle live pulse updating active solopreneur count periodically
  useEffect(() => {
    const timer = setInterval(() => {
      setPeerCount((prev) => {
        const delta = Math.floor(Math.random() * 5) - 2; // -2 to +2
        return Math.max(1820, prev + delta);
      });
    }, 6000);

    const activityTimer = setInterval(() => {
      setActivityIndex((prev) => (prev + 1) % LIVE_PEER_ACTIVITIES.length);
    }, 4500);

    return () => {
      clearInterval(timer);
      clearInterval(activityTimer);
    };
  }, []);

  const toggleAudio = () => {
    const next = !audioEnabled;
    setAudioEnabled(next);
    soundEngine.enabled = next;
    if (next) soundEngine.playClick();
  };

  const currentActivity = LIVE_PEER_ACTIVITIES[activityIndex];

  return (
    <div className="w-full bg-[#08090E]/95 border-b border-slate-800/80 px-4 sm:px-8 py-2 flex items-center justify-between text-[11px] font-mono text-slate-400 select-none overflow-hidden">
      {/* Left: Global Edge Health & Peer Count */}
      <div className="flex items-center gap-4 sm:gap-6 shrink-0">
        <div className="flex items-center gap-2 text-slate-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-slate-200 font-semibold tabular-nums">
            {peerCount.toLocaleString()}
          </span>
          <span className="hidden sm:inline text-slate-400">Research Fellows Online</span>
        </div>

        <div className="hidden md:flex items-center gap-2 text-slate-400 border-l border-slate-800 pl-4">
          <Radio className="w-3 h-3 text-sky-400 animate-pulse" />
          <span>Observatory Nodes: Zurich · Cambridge · Tokyo · Singapore</span>
          <span className="text-sky-400 font-semibold tabular-nums">
            {DEFAULT_CLUSTER_STATUS.globalLatencyMs}ms
          </span>
        </div>
      </div>

      {/* Center: Live Peer Activity Stream */}
      <div className="hidden lg:flex items-center gap-2 overflow-hidden mx-4 text-xs">
        <span className="text-slate-500 shrink-0">DISPATCH:</span>
        <div className="truncate text-slate-300 animate-fadeIn">
          <span className="text-sky-400 font-semibold">{currentActivity.handle}</span>{' '}
          <span className="text-slate-400">{currentActivity.action}</span>{' '}
          <span className="text-slate-200">"{currentActivity.target}"</span>{' '}
          <span className="text-slate-400">({currentActivity.location} · {currentActivity.timestamp})</span>
        </div>
      </div>

      {/* Right: Audio FX toggle & Scale Invariant status */}
      <div className="flex items-center gap-3 shrink-0">
        <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-emerald-400">
          <Cpu className="w-3 h-3" />
          <span>18.4k RPS Edge SLA</span>
        </div>

        <button
          onClick={toggleAudio}
          className="flex items-center gap-1.5 p-1 rounded hover:bg-slate-900 text-slate-400 hover:text-sky-300 transition-colors cursor-pointer"
          title={audioEnabled ? 'Mute Institute Audio Feedback' : 'Enable Institute Audio Feedback'}
          aria-label="Toggle audio"
        >
          {audioEnabled ? (
            <Volume2 className="w-3.5 h-3.5 text-sky-400" />
          ) : (
            <VolumeX className="w-3.5 h-3.5 text-slate-400" />
          )}
          <span className="hidden sm:inline text-[10px]">
            {audioEnabled ? 'ACOUSTIC FX: ON' : 'MUTED'}
          </span>
        </button>
      </div>
    </div>
  );
};
