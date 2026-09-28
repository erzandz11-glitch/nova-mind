import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  RotateCcw,
  CheckCircle2,
  Circle,
  FileText,
  Download,
  Share2,
  Sparkles,
  ArrowRight,
  Shield,
  Layers,
  Award,
  Zap,
  Check,
  Bot,
  Send,
  Bookmark,
  ListChecks,
  Clock,
  Code,
  Terminal,
  ChevronDown
} from 'lucide-react';
import { MASTERCLASSES } from '../data/gamifiedData';
import {
  MasterclassCourse,
  MasterclassLesson,
  UserGamificationState,
  AICopilotMessage
} from '../types';
import { soundEngine } from '../lib/audio';

interface VideoPlayerProps {
  userState: UserGamificationState;
  onAddXp: (amount: number) => void;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ userState, onAddXp }) => {
  const [courses, setCourses] = useState<MasterclassCourse[]>(MASTERCLASSES);
  const [selectedCourseId, setSelectedCourseId] = useState<string>(MASTERCLASSES[0].id);

  const activeCourse = courses.find((c) => c.id === selectedCourseId) || courses[0];
  const [activeLesson, setActiveLesson] = useState<MasterclassLesson>(activeCourse.lessons[0]);

  // Player state
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(142);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(85);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.25);
  const [isTheaterMode, setIsTheaterMode] = useState<boolean>(false);
  const totalDuration = activeLesson.durationSeconds || 1200;

  // Bottom Tabs
  const [activeBottomTab, setActiveBottomTab] = useState<'bookmarks' | 'blueprints' | 'exercises'>('bookmarks');

  // Exercise checklist state
  const [exercises, setExercises] = useState([
    { id: 'ex_1', label: 'Eradicate synchronous billable hours contract', done: true, xp: 40 },
    { id: 'ex_2', label: 'Draft un-cancellable IP licensing agreement', done: true, xp: 50 },
    { id: 'ex_3', label: 'Deploy automated webhook retry queue', done: false, xp: 60 },
    { id: 'ex_4', label: 'Audit customer concentration to under 15% revenue', done: false, xp: 50 }
  ]);

  // AI Co-Pilot State
  const [copilotMessages, setCopilotMessages] = useState<AICopilotMessage[]>([
    {
      id: 'msg_0',
      sender: 'assistant',
      text: `Greetings, ${userState.displayName}. I am your dedicated AI Learning Co-Pilot for "${activeCourse.title}". Ask me about any architectural pattern, request code snippets, or query specific video timestamps.`,
      timestamp: 'Just now'
    }
  ]);
  const [userQuery, setUserQuery] = useState<string>('');
  const [isCopilotTyping, setIsCopilotTyping] = useState<boolean>(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Sync active lesson on course switch
  useEffect(() => {
    if (activeCourse.lessons[0]) {
      setActiveLesson(activeCourse.lessons[0]);
      setCurrentTime(0);
      setIsPlaying(false);
      setCopilotMessages([
        {
          id: 'msg_init_' + activeCourse.id,
          sender: 'assistant',
          text: `Now streaming: "${activeCourse.title}" led by ${activeCourse.instructor}. Ask me anything about this faculty curriculum!`,
          timestamp: 'Just now'
        }
      ]);
    }
  }, [selectedCourseId]);

  // Video ticker simulation
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= totalDuration) {
            setIsPlaying(false);
            soundEngine.playLevelUp();
            handleCompleteLesson(activeLesson.id);
            return totalDuration;
          }
          return prev + 1;
        });
      }, 1000 / playbackSpeed);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, playbackSpeed, totalDuration, activeLesson]);

  // Auto-scroll AI chat
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [copilotMessages, isCopilotTyping]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleLessonSelect = (lesson: MasterclassLesson) => {
    soundEngine.playClick();
    setActiveLesson(lesson);
    setCurrentTime(0);
    setIsPlaying(true);
  };

  const handleCompleteLesson = (lessonId: string) => {
    soundEngine.playCorrect();
    setCourses((prev) =>
      prev.map((c) => {
        if (c.id === selectedCourseId) {
          return {
            ...c,
            lessons: c.lessons.map((l) => (l.id === lessonId ? { ...l, completed: true } : l))
          };
        }
        return c;
      })
    );
    onAddXp(60);
  };

  const handleSeek = (seconds: number) => {
    soundEngine.playClick();
    setCurrentTime(Math.min(totalDuration, Math.max(0, seconds)));
    setIsPlaying(true);
  };

  const handleToggleExercise = (id: string, xpReward: number) => {
    setExercises((prev) =>
      prev.map((ex) => {
        if (ex.id === id) {
          const nextDone = !ex.done;
          if (nextDone) {
            soundEngine.playCorrect();
            onAddXp(xpReward);
          } else {
            soundEngine.playClick();
          }
          return { ...ex, done: nextDone };
        }
        return ex;
      })
    );
  };

  // Co-Pilot Chat Interactions
  const handleSendCopilotQuery = (queryText: string) => {
    if (!queryText.trim() || isCopilotTyping) return;
    soundEngine.playClick();

    const userMsg: AICopilotMessage = {
      id: 'usr_' + Date.now(),
      sender: 'user',
      text: queryText,
      timestamp: formatTime(currentTime)
    };
    setCopilotMessages((prev) => [...prev, userMsg]);
    setUserQuery('');
    setIsCopilotTyping(true);

    setTimeout(() => {
      let responseText = '';
      let codeSnippet: string | undefined = undefined;

      const lower = queryText.toLowerCase();
      if (lower.includes('asymmetry') || lower.includes('formula')) {
        responseText = `At ${formatTime(currentTime)}, Julian Vance explains the Asymmetric Payoff Law: P_asym = (Capital * Code) / (Labor^1.8). The objective is to keep downside strictly capped at your recurring burn rate while capturing open-ended compounding upside.`;
        codeSnippet = `// Asymmetry Evaluation Kernel\nfunction evaluateConvexity(downsideRisk: number, potentialUpside: number): boolean {\n  return (potentialUpside / downsideRisk) >= 10.0; // Minimum 10x convexity threshold\n}`;
      } else if (lower.includes('supabase') || lower.includes('rls') || lower.includes('security')) {
        responseText = `In Supabase, Row-Level Security must enforce cryptographic tenant separation directly inside PostgreSQL. Never rely on frontend filtering!`;
        codeSnippet = `CREATE POLICY "tenant_isolation" ON documents\nFOR ALL USING (tenant_id = auth.jwt() ->> 'tenant_id');`;
      } else if (lower.includes('prompt') || lower.includes('claude') || lower.includes('armor')) {
        responseText = `To prevent prompt injections in production, encapsulate all untrusted user payloads in explicit XML boundary tags and validate JSON output schemas with Zod.`;
        codeSnippet = `<system>\nYou are a hardened parser.\n<untrusted_input>{{payload}}</untrusted_input>\n</system>`;
      } else if (lower.includes('godot') || lower.includes('fsm') || lower.includes('state')) {
        responseText = `In Godot 4.3 GDScript 2.0, state machines are implemented as decoupled child Node classes that emit signals upon state exit, keeping your physics tick free of nested if-else ladders.`;
        codeSnippet = `class_name CombatState extends State\nfunc enter() -> void:\n    actor.play_animation("slash")`;
      } else {
        responseText = `Analyzing your query against the lecture material at timestamp ${formatTime(currentTime)}: The key principle is to replace synchronous human bottlenecks with deterministic, permissionless software leverage.`;
      }

      const aiMsg: AICopilotMessage = {
        id: 'ai_' + Date.now(),
        sender: 'assistant',
        text: responseText,
        timestamp: 'Just now',
        codeBlock: codeSnippet
      };

      setCopilotMessages((prev) => [...prev, aiMsg]);
      setIsCopilotTyping(false);
      soundEngine.playComplete();
    }, 700);
  };

  const completedExercisesCount = exercises.filter((e) => e.done).length;

  return (
    <div className="min-h-[calc(100vh-3.5rem)] p-6 sm:p-8 lg:p-12 space-y-8 max-w-6xl mx-auto font-sans">
      {/* Header Bar & Course Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span>03</span>
            <span className="text-zinc-600">/</span>
            <span>MASTERCLASS STUDIO</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            {activeCourse.title}
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400">
            Led by <span className="text-white font-medium">{activeCourse.instructor}</span> · {activeCourse.role}
          </p>
        </div>

        {/* Course Dropdown Picker */}
        <div className="relative">
          <select
            value={selectedCourseId}
            onChange={(e) => {
              soundEngine.playClick();
              setSelectedCourseId(e.target.value);
            }}
            className="w-full sm:w-auto px-3.5 py-2 rounded-lg bg-zinc-900 border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-cyan-400 cursor-pointer appearance-none pr-9"
          >
            {courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.title.split(':')[0]} ({course.lessons.length} Lessons)
              </option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-zinc-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      {/* 2-Column Grid: 16:9 Cinema Player & Bottom Tabs (8 cols) + AI Co-Pilot (4 cols) */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (8 cols): Video Player & Bottom Panels */}
        <div className={`${isTheaterMode ? 'lg:col-span-12' : 'lg:col-span-8'} space-y-6`}>
          {/* 16:9 Cinema Container */}
          <div className="relative w-full aspect-video rounded-3xl bg-black border border-slate-800 overflow-hidden shadow-2xl group flex flex-col justify-between">
            {/* Background Thumbnail Art */}
            <img
              src={activeCourse.thumbnail}
              alt={activeLesson.title}
              className="absolute inset-0 w-full h-full object-cover opacity-35 filter brightness-75 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
            />

            {/* Video overlay ambient glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/70 pointer-events-none" />

            {/* Top Bar inside Cinema */}
            <div className="relative z-10 p-5 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30 font-bold">
                  4K ULTRA HD
                </span>
                <span className="text-slate-300 font-bold truncate max-w-xs">{activeLesson.title}</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsTheaterMode(!isTheaterMode)}
                  className="p-2 rounded-xl bg-black/60 hover:bg-black/90 text-slate-300 hover:text-white transition-colors cursor-pointer border border-slate-800"
                  title="Toggle Theater Mode"
                >
                  <Maximize className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Center Big Play/Pause Button */}
            <div className="relative z-10 flex items-center justify-center">
              <button
                onClick={() => {
                  soundEngine.playClick();
                  setIsPlaying(!isPlaying);
                }}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-500 p-0.5 shadow-[0_0_40px_rgba(16,185,129,0.5)] hover:scale-110 transition-transform cursor-pointer flex items-center justify-center group/btn"
              >
                <div className="w-full h-full bg-[#080B1A] rounded-full flex items-center justify-center">
                  {isPlaying ? (
                    <Pause className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-400" />
                  ) : (
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-400 translate-x-0.5 fill-emerald-400" />
                  )}
                </div>
              </button>
            </div>

            {/* Bottom Scrubber & Controls Bar */}
            <div className="relative z-10 p-5 space-y-3 bg-gradient-to-t from-black via-black/80 to-transparent">
              {/* Progress Scrubber */}
              <div
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  const ratio = clickX / rect.width;
                  handleSeek(Math.floor(ratio * totalDuration));
                }}
                className="h-2 w-full bg-slate-800 rounded-full cursor-pointer relative group/scrub overflow-hidden"
              >
                <div
                  className="h-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 rounded-full transition-all duration-200"
                  style={{ width: `${(currentTime / totalDuration) * 100}%` }}
                />
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => {
                      soundEngine.playClick();
                      setIsPlaying(!isPlaying);
                    }}
                    className="hover:text-emerald-400 transition-colors cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                  </button>

                  <button
                    onClick={() => handleSeek(currentTime - 15)}
                    className="hover:text-cyan-400 transition-colors cursor-pointer"
                    title="-15s"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>

                  <div className="text-slate-300 font-bold">
                    <span>{formatTime(currentTime)}</span>
                    <span className="text-slate-500"> / {formatTime(totalDuration)}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="hover:text-white transition-colors cursor-pointer"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={isMuted ? 0 : volume}
                      onChange={(e) => setVolume(parseInt(e.target.value))}
                      className="w-16 accent-emerald-400 cursor-pointer hidden sm:block"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* Playback Speed */}
                  <div className="flex items-center gap-1 bg-slate-900/80 px-2 py-1 rounded-lg border border-slate-800">
                    {[1.0, 1.25, 1.5, 2.0].map((spd) => (
                      <button
                        key={spd}
                        onClick={() => setPlaybackSpeed(spd)}
                        className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                          playbackSpeed === spd ? 'bg-emerald-500 text-black' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {spd}x
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => handleCompleteLesson(activeLesson.id)}
                    className="px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold hover:bg-emerald-500/30 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Complete Lesson (+60 XP)
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Tabbed Panels */}
          <div className="p-6 rounded-3xl bg-[#080B1A]/90 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
              <button
                onClick={() => {
                  soundEngine.playClick();
                  setActiveBottomTab('bookmarks');
                }}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeBottomTab === 'bookmarks'
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Bookmark className="w-4 h-4" />
                Chapter Bookmarks
              </button>
              <button
                onClick={() => {
                  soundEngine.playClick();
                  setActiveBottomTab('blueprints');
                }}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeBottomTab === 'blueprints'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Download className="w-4 h-4" />
                Downloadable Blueprints
              </button>
              <button
                onClick={() => {
                  soundEngine.playClick();
                  setActiveBottomTab('exercises');
                }}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeBottomTab === 'exercises'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <ListChecks className="w-4 h-4" />
                Exercise Checklist ({completedExercisesCount}/{exercises.length})
              </button>
            </div>

            {/* TAB: BOOKMARKS */}
            {activeBottomTab === 'bookmarks' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div
                  onClick={() => handleSeek(75)}
                  className="p-3.5 rounded-2xl bg-[#050711] border border-slate-800/80 hover:border-purple-500/50 cursor-pointer space-y-1 transition-all"
                >
                  <span className="text-[10px] font-mono text-purple-400 font-bold block">01:15</span>
                  <h4 className="text-xs font-bold text-white">The Asymmetric Ratio Principle</h4>
                  <p className="text-[11px] text-slate-400">Decoupling inputs from non-linear outputs.</p>
                </div>

                <div
                  onClick={() => handleSeek(380)}
                  className="p-3.5 rounded-2xl bg-[#050711] border border-slate-800/80 hover:border-purple-500/50 cursor-pointer space-y-1 transition-all"
                >
                  <span className="text-[10px] font-mono text-purple-400 font-bold block">06:20</span>
                  <h4 className="text-xs font-bold text-white">Autonomous Agent Invariants</h4>
                  <p className="text-[11px] text-slate-400">Replacing human sync with automated state machines.</p>
                </div>

                <div
                  onClick={() => handleSeek(720)}
                  className="p-3.5 rounded-2xl bg-[#050711] border border-slate-800/80 hover:border-purple-500/50 cursor-pointer space-y-1 transition-all"
                >
                  <span className="text-[10px] font-mono text-purple-400 font-bold block">12:00</span>
                  <h4 className="text-xs font-bold text-white">98% Gross Margin Defensive Moat</h4>
                  <p className="text-[11px] text-slate-400">Zero-marginal cost software distribution stack.</p>
                </div>
              </div>
            )}

            {/* TAB: BLUEPRINTS */}
            {activeBottomTab === 'blueprints' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-[#050711] border border-slate-800/80 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-white">Sovereign Architecture Blueprint.pdf</span>
                    <span className="text-[10px] font-mono text-slate-400 block">4.2 MB · Architectural Schematic</span>
                  </div>
                  <button
                    onClick={() => {
                      soundEngine.playCorrect();
                      alert('Blueprint downloaded: Sovereign Architecture Blueprint.pdf');
                    }}
                    className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 transition-colors cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-[#050711] border border-slate-800/80 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-white">Claude 3.5 System Prompt Armor.md</span>
                    <span className="text-[10px] font-mono text-slate-400 block">18 KB · Hardened Production Prompt</span>
                  </div>
                  <button
                    onClick={() => {
                      soundEngine.playCorrect();
                      alert('Blueprint downloaded: Claude 3.5 System Prompt Armor.md');
                    }}
                    className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 transition-colors cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* TAB: EXERCISES */}
            {activeBottomTab === 'exercises' && (
              <div className="space-y-2">
                {exercises.map((ex) => (
                  <div
                    key={ex.id}
                    onClick={() => handleToggleExercise(ex.id, ex.xp)}
                    className="p-3.5 rounded-2xl bg-[#050711] border border-slate-800/80 hover:border-slate-700 flex items-center justify-between cursor-pointer transition-all"
                  >
                    <div className="flex items-center gap-3">
                      {ex.done ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      ) : (
                        <Circle className="w-5 h-5 text-slate-600 shrink-0" />
                      )}
                      <span className={`text-xs font-medium ${ex.done ? 'text-slate-300 line-through' : 'text-white'}`}>
                        {ex.label}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      +{ex.xp} XP
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Column (4 cols): Persistent AI Learning Co-Pilot */}
        <div className="lg:col-span-4 rounded-3xl bg-[#070A1A]/95 border border-slate-800 flex flex-col justify-between shadow-2xl h-[780px]">
          {/* Co-Pilot Header */}
          <div className="p-4 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-400 to-indigo-500 flex items-center justify-center text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-white flex items-center gap-1.5">
                  AI Learning Co-Pilot
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                </h3>
                <span className="text-[10px] font-mono text-slate-400">Context: {formatTime(currentTime)}</span>
              </div>
            </div>

            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
              GPT-4o / Claude 3.5
            </span>
          </div>

          {/* Quick Prompt Chips */}
          <div className="p-3 border-b border-slate-800/80 bg-[#050711] space-y-1.5">
            <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">Smart Inquiries:</div>
            <div className="flex flex-wrap gap-1.5">
              {[
                'Explain Asymmetry formula at 04:12',
                'How do I implement Supabase RLS?',
                'Neutralize prompt jailbreak',
                'Generate GDScript State code'
              ].map((chip) => (
                <button
                  key={chip}
                  onClick={() => handleSendCopilotQuery(chip)}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[10px] font-mono text-slate-300 hover:text-cyan-300 transition-colors cursor-pointer text-left"
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Stream Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 font-sans">
            {copilotMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col space-y-1 ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                } animate-fadeIn`}
              >
                <div
                  className={`p-3 rounded-2xl text-xs leading-relaxed max-w-[88%] ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-semibold'
                      : 'bg-[#0B0F24] border border-slate-800 text-slate-200'
                  }`}
                >
                  <p>{msg.text}</p>

                  {msg.codeBlock && (
                    <div className="mt-2 p-2.5 rounded-xl bg-[#04060E] border border-slate-800/80 font-mono text-[11px] text-cyan-300 overflow-x-auto">
                      <pre className="whitespace-pre-wrap">{msg.codeBlock}</pre>
                    </div>
                  )}
                </div>
                <span className="text-[9px] font-mono text-slate-500 px-1">{msg.timestamp}</span>
              </div>
            ))}

            {isCopilotTyping && (
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-[#0B0F24] border border-slate-800 text-xs text-slate-400 w-fit">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
                <span className="text-[10px] font-mono">Synthesizing lecture insight...</span>
              </div>
            )}
            <div ref={chatBottomRef} />
          </div>

          {/* User Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendCopilotQuery(userQuery);
            }}
            className="p-3 border-t border-slate-800 bg-[#060814] flex items-center gap-2"
          >
            <input
              type="text"
              value={userQuery}
              onChange={(e) => setUserQuery(e.target.value)}
              placeholder="Ask Co-Pilot about this lecture..."
              className="flex-1 p-2.5 rounded-xl bg-[#0B0F24] border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 font-sans"
            />
            <button
              type="submit"
              disabled={!userQuery.trim() || isCopilotTyping}
              className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-black hover:opacity-90 disabled:opacity-40 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
