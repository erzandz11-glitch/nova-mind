import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Play, Cpu, Activity, CheckCircle2, Zap } from 'lucide-react';
import { soundEngine } from '../../lib/audio';

interface DeepITTerminalSandboxProps {
  onAddXp?: (amount: number) => void;
}

interface CommandLog {
  id: string;
  command: string;
  output: string | React.ReactNode;
  status: 'ok' | 'warn' | 'error';
  timestamp: string;
}

export const DeepITTerminalSandbox: React.FC<DeepITTerminalSandboxProps> = ({ onAddXp }) => {
  const [inputVal, setInputVal] = useState('');
  const [ioUringEnabled, setIoUringEnabled] = useState(true);
  const [ebpfActive, setEbpfActive] = useState(true);
  const [ringConcurrency, setRingConcurrency] = useState<'10k' | '100k' | '1M'>('100k');
  const [isStressTesting, setIsStressTesting] = useState(false);
  const [throughputRps, setThroughputRps] = useState(148500);
  const [latencyUs, setLatencyUs] = useState(12);
  const [claimedReward, setClaimedReward] = useState(false);

  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: 'log_init',
      command: 'uname -srm; uptime',
      output: 'Linux 6.9.4-sovereign-hardened x86_64\n14:02:19 up 42 days, 18:31, 1 user, load average: 0.12, 0.08, 0.04',
      status: 'ok',
      timestamp: '14:02:19'
    },
    {
      id: 'log_status',
      command: 'sysctl net.core.somaxconn net.ipv4.tcp_max_syn_backlog',
      output: 'net.core.somaxconn = 65535\nnet.ipv4.tcp_max_syn_backlog = 32768\nio_uring zero-copy submission queue: 4096 entries mapped.',
      status: 'ok',
      timestamp: '14:02:20'
    }
  ]);

  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleExecuteCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;
    soundEngine.playClick();

    const timestamp = new Date().toTimeString().slice(0, 8);
    let output = '';
    const lower = trimmed.toLowerCase();

    if (lower === 'clear') {
      setLogs([]);
      setInputVal('');
      return;
    } else if (lower.includes('help')) {
      output = `COMMANDS:
  cat /proc/cpuinfo       Display CPU architecture & cache lines
  sysctl -a               Check kernel socket & network ring buffers
  k8s get pods -A         List distributed agent cluster pods
  perf top                Profile live CPU cycles
  rustc -O kernel.rs      Compile lock-free ring-buffer pipeline
  iptables -L             Inspect zero-trust packet drop rules
  clear                   Clear terminal buffer`;
    } else if (lower.includes('cpuinfo')) {
      output = `processor       : 64
model name      : AMD EPYC 9654 96-Core Processor @ 3.70GHz
flags           : fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx avx avx2 avx512f
cache size      : 384 MB L3 Cache (Cache Line: 64 bytes)`;
    } else if (lower.includes('k8s') || lower.includes('pod')) {
      output = `NAMESPACE       NAME                                READY   STATUS    RESTARTS   AGE
sovereign-core  consensus-raft-leader-0             1/1     Running   0          42d
sovereign-core  consensus-raft-peer-1               1/1     Running   0          42d
sovereign-net   ebpf-xdp-packet-firewall-4x9l2      1/1     Running   0          19d
sovereign-ai    swarm-orchestrator-alpha-7b98f      1/1     Running   0          3d`;
    } else if (lower.includes('perf')) {
      output = `Samples: 142K of event 'cycles', 4000 Hz
Overhead  Symbol
  28.42%  __io_uring_submit
  18.15%  copy_user_enhanced_fast_string
  12.04%  ring_buffer::submit_lockfree
   8.41%  xdp_do_redirect_core`;
    } else if (lower.includes('rustc')) {
      output = `   Compiling sovereign-kernel-core v2.4.0
    Checking [repr(align(64))] atomic ring-buffer bounds... verified.
    Finished release [optimized + lto] in 0.84s`;
    } else if (lower.includes('iptables')) {
      output = `Chain INPUT (policy DROP 0 packets, 0 bytes)
 pkts bytes target     prot source               destination         
 8.4M 640M ACCEPT     tcp  0.0.0.0/0            0.0.0.0/0            tcp dpt:443
 3.1M 180M DROP       tcp  0.0.0.0/0            0.0.0.0/0            tcp dpt:22 /* ZERO_TRUST_SSH_BLOCKED */`;
    } else if (lower.includes('sysctl')) {
      output = `net.core.somaxconn = 65535
net.ipv4.tcp_tw_reuse = 1
net.ipv4.tcp_congestion_control = bbr`;
    } else {
      output = `Executed: ${trimmed}\n[Exit code: 0] Completed.`;
    }

    setLogs((prev) => [
      ...prev,
      {
        id: 'cmd_' + Date.now(),
        command: trimmed,
        output,
        status: 'ok',
        timestamp
      }
    ]);
    setInputVal('');
  };

  const handleRunStressTest = () => {
    soundEngine.playActivate();
    setIsStressTesting(true);

    const base = ringConcurrency === '10k' ? 45000 : ringConcurrency === '100k' ? 148500 : 890000;
    const mult = ioUringEnabled ? 1.0 : 0.42;

    setTimeout(() => {
      const finalRps = Math.round(base * mult);
      const finalLat = ioUringEnabled ? 8 : 46;
      setThroughputRps(finalRps);
      setLatencyUs(finalLat);
      setIsStressTesting(false);
      soundEngine.playCorrect();

      setLogs((prev) => [
        ...prev,
        {
          id: 'stress_' + Date.now(),
          command: `stress-test --concurrency=${ringConcurrency} --io-uring=${ioUringEnabled}`,
          output: `BENCHMARK RESULTS:
  Throughput: ${finalRps.toLocaleString()} req/s
  p99 Latency: ${finalLat} µs
  Zero-Copy Efficiency: ${ioUringEnabled ? '99.4%' : '38.2% (Context Switch Bottleneck)'}`,
          status: 'ok',
          timestamp: new Date().toTimeString().slice(0, 8)
        }
      ]);
    }, 800);
  };

  const handleClaimXp = () => {
    if (claimedReward) return;
    soundEngine.playLevelUp();
    setClaimedReward(true);
    if (onAddXp) onAddXp(150);
  };

  return (
    <div className="space-y-6 font-sans">
      {/* Metrics Row (Linear-style clean stat boxes) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.08]">
          <div className="flex items-center justify-between text-xs text-zinc-500 font-mono mb-1">
            <span>THROUGHPUT</span>
            <span className="text-cyan-400">ACTIVE</span>
          </div>
          <div className="text-xl font-mono font-semibold text-white">
            {throughputRps.toLocaleString()} <span className="text-xs text-zinc-500 font-normal">req/s</span>
          </div>
          <p className="text-[11px] text-zinc-500 mt-1">Zero-copy ring buffer</p>
        </div>

        <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.08]">
          <div className="flex items-center justify-between text-xs text-zinc-500 font-mono mb-1">
            <span>P99 LATENCY</span>
            <span className="text-zinc-400">SUB-MICRO</span>
          </div>
          <div className="text-xl font-mono font-semibold text-cyan-300">
            {latencyUs} <span className="text-xs text-zinc-500 font-normal">µs</span>
          </div>
          <p className="text-[11px] text-zinc-500 mt-1">POSIX bypass enabled</p>
        </div>

        <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.08] flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>io_uring</span>
            <button
              onClick={() => {
                soundEngine.playClick();
                setIoUringEnabled(!ioUringEnabled);
              }}
              className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                ioUringEnabled ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'bg-zinc-800 text-zinc-500'
              }`}
            >
              {ioUringEnabled ? 'ENABLED' : 'DISABLED'}
            </button>
          </div>
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mt-2">
            <span>eBPF Filter</span>
            <button
              onClick={() => {
                soundEngine.playClick();
                setEbpfActive(!ebpfActive);
              }}
              className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                ebpfActive ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'bg-zinc-800 text-zinc-500'
              }`}
            >
              {ebpfActive ? 'ACTIVE' : 'BYPASS'}
            </button>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.08] flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
            <span>CONCURRENCY</span>
            <div className="flex gap-1">
              {(['10k', '100k', '1M'] as const).map((tier) => (
                <button
                  key={tier}
                  onClick={() => {
                    soundEngine.playClick();
                    setRingConcurrency(tier);
                  }}
                  className={`px-1.5 py-0.5 rounded text-[10px] font-mono transition-colors ${
                    ringConcurrency === tier ? 'bg-white text-zinc-950 font-semibold' : 'text-zinc-500 hover:text-white'
                  }`}
                >
                  {tier}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={handleRunStressTest}
            disabled={isStressTesting}
            className="w-full mt-2 py-1.5 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-colors cursor-pointer disabled:opacity-50"
          >
            {isStressTesting ? 'Running...' : 'Run Load Benchmark'}
          </button>
        </div>
      </div>

      {/* Quick Command Shortcuts */}
      <div className="flex items-center gap-2 overflow-x-auto text-xs font-mono scrollbar-none">
        <span className="text-zinc-600 text-[11px] shrink-0">Syscalls:</span>
        {[
          'sysctl net.core.somaxconn',
          'cat /proc/cpuinfo',
          'k8s get pods -A',
          'perf top',
          'rustc -O kernel.rs',
          'iptables -L',
          'clear'
        ].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleExecuteCommand(cmd)}
            className="px-2.5 py-1 rounded bg-zinc-900 border border-white/[0.06] hover:border-cyan-500/40 text-zinc-400 hover:text-white transition-colors text-[11px] shrink-0"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Viewport */}
      <div className="rounded-xl border border-white/[0.08] bg-black/60 overflow-hidden font-mono text-xs">
        <div className="flex items-center justify-between px-4 py-2 bg-zinc-900/60 border-b border-white/[0.08] text-zinc-500 text-[11px]">
          <span>sovereign-kernel-01 (x86_64)</span>
          <button
            onClick={() => {
              setLogs([]);
              soundEngine.playClick();
            }}
            className="hover:text-zinc-300 transition-colors"
          >
            clear
          </button>
        </div>

        <div className="p-4 sm:p-5 max-h-[340px] min-h-[220px] overflow-y-auto space-y-3">
          {logs.map((log) => (
            <div key={log.id} className="space-y-1">
              <div className="flex items-center gap-2 text-zinc-400">
                <span className="text-cyan-400 font-semibold">$</span>
                <span className="text-white">{log.command}</span>
                <span className="text-[10px] text-zinc-600 ml-auto">{log.timestamp}</span>
              </div>
              <pre className="text-zinc-300 whitespace-pre-wrap leading-relaxed pl-3.5 border-l border-white/10 text-[11px]">
                {log.output}
              </pre>
            </div>
          ))}
          <div ref={endRef} />
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleExecuteCommand(inputVal);
          }}
          className="flex items-center gap-2 p-2.5 bg-zinc-900/40 border-t border-white/[0.08]"
        >
          <span className="text-cyan-400 font-semibold pl-2">$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type command (e.g., 'cat /proc/cpuinfo', 'help')..."
            className="flex-1 bg-transparent text-white font-mono text-xs focus:outline-none placeholder:text-zinc-600"
          />
          <button
            type="submit"
            className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-colors"
          >
            Exec
          </button>
        </form>
      </div>

      {/* Clean XP Claim Strip */}
      <div className="flex items-center justify-between p-4 rounded-xl border border-white/[0.08] bg-zinc-900/30">
        <div>
          <h4 className="text-xs font-medium text-white">Kernel Diagnostic Verification</h4>
          <p className="text-xs text-zinc-400 mt-0.5">
            Zero-copy ring buffer verified. Claim completion score to update research registry.
          </p>
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
              <span>Verified (+150 XP)</span>
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
