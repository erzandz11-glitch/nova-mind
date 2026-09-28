import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Atom,
  Brain,
  Zap,
  Play,
  ArrowRight,
  Database,
  Flame,
  Sparkles,
  TrendingUp,
  Cpu,
  Layers,
  Clock,
  Copy,
  Check,
  CheckCircle2,
  FileCode,
  ShieldAlert,
  ArrowUpRight,
  Activity,
  Gauge,
  Radio,
  Server,
  Users,
  Compass,
  BookOpen,
  Binary,
  Microscope,
  TrendingDown
} from 'lucide-react';
import { SKILL_NODES, COURSES, VAULT_ITEMS, INITIAL_USER_PROGRESS, LIVE_PEER_ACTIVITIES, FACULTY_DEPARTMENTS } from '../data/mockData';
import { soundEngine } from '../lib/audio';
import { EnterpriseStorage } from '../lib/storage';
import { KnowledgeInsights } from '../components/KnowledgeInsights';
import { FacultyDiscipline } from '../types';

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeCourseId, setActiveCourseId] = useState<string>(() => {
    return EnterpriseStorage.getActiveCourseId();
  });
  const activeCourse = COURSES[activeCourseId] || COURSES.course_one_person_unicorn;
  const recentVaultItems = VAULT_ITEMS.slice(0, 4);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Scalability / Stress test simulation state
  const [isBenchmarkRunning, setIsBenchmarkRunning] = useState(false);
  const [simulatedUsers, setSimulatedUsers] = useState(1842);
  const [benchmarkedRps, setBenchmarkedRps] = useState(18400);
  const [benchmarkedLatency, setBenchmarkedLatency] = useState(14);
  const [benchmarkResult, setBenchmarkResult] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    soundEngine.playClick();
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const runScalabilityBenchmark = () => {
    soundEngine.playClick();
    setIsBenchmarkRunning(true);
    setBenchmarkResult(null);

    let progress = 0;
    const interval = setInterval(() => {
      progress += 20;
      setSimulatedUsers((prev) => prev + 350);
      setBenchmarkedRps((prev) => prev + 2400);
      setBenchmarkedLatency((prev) => Math.max(11, prev + (Math.random() > 0.5 ? 1 : -1)));

      if (progress >= 100) {
        clearInterval(interval);
        setIsBenchmarkRunning(false);
        soundEngine.playComplete();
        setBenchmarkResult('Distributed Edge Cluster Verified: 5,000+ Concurrent Research Fellows Sustained (p99 < 15ms).');
      }
    }, 400);
  };

  const getFacultyIcon = (id: FacultyDiscipline) => {
    switch (id) {
      case 'ai':
        return <Binary className="w-4 h-4 text-cyan-400" />;
      case 'neuroscience':
        return <Brain className="w-4 h-4 text-sky-400" />;
      case 'finance':
        return <TrendingUp className="w-4 h-4 text-indigo-400" />;
      case 'productivity':
        return <Zap className="w-4 h-4 text-emerald-400" />;
      case 'complex_systems':
        return <Microscope className="w-4 h-4 text-amber-400" />;
      default:
        return <Atom className="w-4 h-4 text-sky-400" />;
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-5rem)] p-4 sm:p-8 lg:p-10 space-y-8 institute-noise">
      {/* Background ambient radial gradients */}
      <div className="pointer-events-none absolute top-10 left-1/4 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[160px]" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[160px]" />

      {/* Hero Executive Welcome Banner */}
      <div className="relative z-10 p-6 sm:p-8 rounded-3xl bg-[#0C0E17]/85 backdrop-blur-xl border border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.6)] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400">
              <Atom className="w-4 h-4" />
            </span>
            <span className="text-xs font-mono text-sky-400 tracking-wider uppercase font-semibold">
              The Grand Hall · Academic Year 2026
            </span>
          </div>

          <h1 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            NOVA Institute of Advanced Sciences
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            A unified frontier platform mastering high-order cognition, artificial intelligence, quantitative economics, and complex physical systems. 
            Currently supporting <span className="text-sky-300 font-semibold">{simulatedUsers.toLocaleString()} active research fellows</span> across five multidisciplinary faculties.
          </p>
        </div>

        {/* Quick Launch CTA to Lecture Hall & Knowledge Graph */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <Link
            to="/masterclass"
            onClick={() => soundEngine.playClick()}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold text-xs shadow-[0_0_25px_rgba(14,165,233,0.3)] transition-all active:scale-95 whitespace-nowrap cursor-pointer font-display"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Enter Lecture Hall</span>
          </Link>
          <Link
            to="/neural-paths"
            onClick={() => soundEngine.playClick()}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#090A10] hover:bg-slate-900 border border-slate-800 text-slate-300 hover:text-white font-medium text-xs transition-colors whitespace-nowrap cursor-pointer font-display"
          >
            <Compass className="w-4 h-4 text-sky-400" />
            <span>Explore Cognitive Map</span>
          </Link>
        </div>
      </div>

      {/* Multidisciplinary Faculty Matrix Strip (Extensible Knowledge Departments) */}
      <div className="relative z-10 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-sky-400" />
            <h2 className="font-display text-base font-bold text-white tracking-tight">
              Multidisciplinary Scientific Faculties
            </h2>
          </div>
          <Link
            to="/knowledge-vault"
            onClick={() => soundEngine.playClick()}
            className="text-xs font-mono text-sky-400 hover:text-sky-300 flex items-center gap-1 cursor-pointer"
          >
            <span>Inspect All Codices &amp; Papers</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {FACULTY_DEPARTMENTS.map((dept) => (
            <Link
              key={dept.id}
              to={`/knowledge-vault?faculty=${dept.id}`}
              onClick={() => soundEngine.playClick()}
              className="p-4 rounded-2xl bg-[#0B0D16]/80 backdrop-blur-xl border border-slate-800/80 hover:border-sky-500/40 hover:-translate-y-0.5 transition-all group flex flex-col justify-between space-y-3 cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 group-hover:border-sky-500/30 transition-colors">
                    {getFacultyIcon(dept.id)}
                  </div>
                  <span className="font-mono text-[9px] text-slate-400 group-hover:text-sky-400">
                    {dept.code}
                  </span>
                </div>

                <h3 className="font-display text-xs font-bold text-white group-hover:text-sky-300 transition-colors line-clamp-1">
                  {dept.name}
                </h3>
                <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                  {dept.focus}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-850 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>{dept.codicesCount} Papers &amp; Models</span>
                <span className="text-slate-400 group-hover:text-sky-400 flex items-center gap-0.5">
                  Explore <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Key Academic & Research Telemetry Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* Metric 1 */}
        <div className="p-5 rounded-2xl bg-[#0B0D16]/75 backdrop-blur-xl border border-slate-800/80 hover:border-sky-500/30 transition-colors">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
            <span>NEURAL SYNC DEPTH</span>
            <Sparkles className="w-4 h-4 text-sky-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-3xl font-extrabold text-white tabular-nums">
              75.0%
            </span>
            <span className="text-xs font-mono text-sky-400 font-medium">+12.4% MoM</span>
          </div>
          <div className="mt-3 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-sky-400 rounded-full" style={{ width: '75%' }} />
          </div>
        </div>

        {/* Metric 2 */}
        <div className="p-5 rounded-2xl bg-[#0B0D16]/75 backdrop-blur-xl border border-slate-800/80 hover:border-indigo-500/30 transition-colors">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
            <span>DEEP STUDY HOURS</span>
            <Clock className="w-4 h-4 text-indigo-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-3xl font-extrabold text-white tabular-nums">
              64.5h
            </span>
            <span className="text-xs font-mono text-emerald-400 font-medium">Verified Active</span>
          </div>
          <div className="mt-3 text-[11px] font-mono text-slate-400">
            24 consecutive days streak
          </div>
        </div>

        {/* Metric 3 */}
        <div className="p-5 rounded-2xl bg-[#0B0D16]/75 backdrop-blur-xl border border-slate-800/80 hover:border-sky-500/30 transition-colors">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
            <span>SCIENTIFIC CODICES</span>
            <Database className="w-4 h-4 text-sky-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-3xl font-extrabold text-white tabular-nums">
              54
            </span>
            <span className="text-xs font-mono text-slate-400">Papers &amp; Models</span>
          </div>
          <div className="mt-3 text-[11px] font-mono text-slate-400">
            Across 5 frontier faculties
          </div>
        </div>

        {/* Metric 4 */}
        <div className="p-5 rounded-2xl bg-[#0B0D16]/75 backdrop-blur-xl border border-slate-800/80 hover:border-emerald-500/30 transition-colors">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
            <span>COGNITIVE LEVERAGE INDEX</span>
            <TrendingUp className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-3xl font-extrabold text-emerald-400 tabular-nums">
              18.4x
            </span>
            <span className="text-xs font-mono text-slate-400">Multiplier</span>
          </div>
          <div className="mt-3 text-[11px] font-mono text-slate-400">
            Output per nominal research hour
          </div>
        </div>

      </div>

      {/* D3-based Learning Velocity & Completion Dynamics */}
      <div className="relative z-10">
        <KnowledgeInsights />
      </div>

      {/* Main 2-Column Split: Active Master Lecture & Recent Scientific Codices */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Active Lecture in Progress */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-base font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              Active Lecture in Progress
            </h2>
            <Link
              to="/masterclass"
              onClick={() => soundEngine.playClick()}
              className="text-xs font-mono text-sky-400 hover:text-sky-300 flex items-center gap-1 cursor-pointer"
            >
              <span>Full Screen Lecture Hall</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-6 rounded-3xl bg-[#0B0D16]/85 backdrop-blur-xl border border-sky-500/30 shadow-[0_0_35px_rgba(14,165,233,0.1)] space-y-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono text-sky-400 uppercase tracking-wider font-semibold">
                  FACULTY OF {activeCourse.category.toUpperCase()} · MODULE 01
                </span>
                <h3 className="font-display text-xl font-bold text-white mt-1">
                  {activeCourse.modules[0]?.lessons[1]?.title || activeCourse.modules[0]?.lessons[0]?.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                  {activeCourse.subtitle}
                </p>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-[#090A10] border border-sky-500/40 flex items-center justify-center shrink-0 text-sky-400 shadow-[0_0_20px_rgba(14,165,233,0.2)]">
                <Play className="w-6 h-6 fill-current ml-0.5" />
              </div>
            </div>

            {/* Progress indicator */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Total Curriculum: {activeCourse.modules.length} Modules</span>
                <span className="text-sky-300">Synchronized State</span>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full" style={{ width: '45%' }} />
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-xs">
              <span className="text-slate-400 font-mono">Chair: {activeCourse.instructor.name}</span>
              <Link
                to="/masterclass"
                onClick={() => soundEngine.playClick()}
                className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs transition-colors shadow-[0_0_15px_rgba(14,165,233,0.25)] flex items-center gap-1.5 cursor-pointer font-display"
              >
                <span>Launch Stream</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* High-Scale Cluster Load & Verification Terminal */}
          <div className="p-6 rounded-3xl bg-[#0B0D16]/60 backdrop-blur-xl border border-slate-800/80 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4 text-sky-400" />
                <h3 className="font-display text-sm font-bold text-white tracking-tight">
                  High-Throughput Academic Computing Cluster
                </h3>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/60">
                10,000+ FELLOWS CONCURRENCY
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              NOVA MIND employs decentralized edge replicas across Zurich, Tokyo, Cambridge, and Singapore, decoupled state caching, and synthesized Web Audio threads to guarantee zero-latency execution across global student cohorts.
            </p>

            <div className="grid grid-cols-3 gap-3 p-3 rounded-2xl bg-[#08090E] border border-slate-850 text-center font-mono">
              <div>
                <div className="text-[10px] text-slate-500">ACTIVE RESEARCHERS</div>
                <div className="text-sm sm:text-base font-bold text-white mt-0.5 tabular-nums">
                  {simulatedUsers.toLocaleString()}
                </div>
              </div>
              <div className="border-x border-slate-850">
                <div className="text-[10px] text-slate-500">CLUSTER CAPACITY</div>
                <div className="text-sm sm:text-base font-bold text-sky-400 mt-0.5 tabular-nums">
                  {benchmarkedRps.toLocaleString()} RPS
                </div>
              </div>
              <div>
                <div className="text-[10px] text-slate-500">GLOBAL P99</div>
                <div className="text-sm sm:text-base font-bold text-emerald-400 mt-0.5 tabular-nums">
                  {benchmarkedLatency}ms
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <button
                onClick={runScalabilityBenchmark}
                disabled={isBenchmarkRunning}
                className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-xs font-mono text-slate-200 transition-colors disabled:opacity-50 cursor-pointer flex items-center gap-2"
              >
                <Activity className={`w-3.5 h-3.5 ${isBenchmarkRunning ? 'animate-spin text-sky-400' : 'text-sky-400'}`} />
                <span>{isBenchmarkRunning ? 'Synthesizing 5,000 Peer Handshakes...' : 'Verify Cluster Resilience'}</span>
              </button>

              {benchmarkResult && (
                <span className="text-[11px] font-mono text-emerald-400 animate-fadeIn">
                  {benchmarkResult}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Knowledge Vault Quick Capture & Top Artifacts */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-base font-bold text-white">
              Recent Scientific Codices
            </h2>
            <Link
              to="/knowledge-vault"
              onClick={() => soundEngine.playClick()}
              className="text-xs font-mono text-sky-400 hover:text-sky-300 flex items-center gap-1 cursor-pointer"
            >
              <span>View All 54</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-3">
            {recentVaultItems.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-[#0B0D16]/75 backdrop-blur-xl border border-slate-800 hover:border-sky-500/40 transition-all flex items-start justify-between gap-4 group"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-sky-400 uppercase">
                      {item.category}
                    </span>
                    <span className="text-slate-600">·</span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {item.executionTime}
                    </span>
                    {item.doi && (
                      <>
                        <span className="text-slate-600">·</span>
                        <span className="text-[9px] font-mono text-slate-400">{item.doi}</span>
                      </>
                    )}
                  </div>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-sky-300 transition-colors line-clamp-1 font-display">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 line-clamp-1">
                    {item.description}
                  </p>
                </div>

                <button
                  onClick={() => handleCopy(item.id, item.content)}
                  className="p-2 rounded-xl bg-[#08090E] border border-slate-800 text-slate-400 hover:text-sky-400 transition-colors shrink-0 cursor-pointer"
                  title="Copy payload"
                >
                  {copiedId === item.id ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* Live Peer Activity Stream Widget */}
          <div className="p-5 rounded-2xl bg-[#0B0D16]/50 border border-slate-800/80 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">OBSERVATORY DISPATCH</span>
              <span className="text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                SYNCHRONIZED
              </span>
            </div>

            <div className="space-y-2.5">
              {LIVE_PEER_ACTIVITIES.slice(0, 3).map((act) => (
                <div key={act.id} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-slate-900 border border-slate-800 text-sky-400 flex items-center justify-center font-bold text-[10px] font-display">
                      {act.avatarLetter}
                    </div>
                    <div>
                      <span className="font-semibold text-slate-200">{act.handle}</span>{' '}
                      <span className="text-slate-400">{act.action}</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">{act.timestamp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
