import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Sparkles, X, Minimize2, Maximize2, AlertCircle, RefreshCw } from 'lucide-react';
import { GeminiAIService, ChatMessage } from '../lib/geminiService';
import { soundEngine } from '../lib/audio';

interface NovaAICoachWidgetProps {
  topicTitle: string;
  facultyName: string;
  onRewardXp?: (amount: number) => void;
}

export const NovaAICoachWidget: React.FC<NovaAICoachWidgetProps> = ({
  topicTitle,
  facultyName,
  onRewardXp,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      content: `Salam Sovereign. Saya Master Coach AI untuk topik **${topicTitle}** (${facultyName}). Ada konsep yang ingin Anda diskusikan, perdebatkan, atau uji pemahamannya?`,
    },
  ]);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isMinimized]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userText = inputMessage.trim();
    setInputMessage('');
    soundEngine.playClick();

    const newHistory: ChatMessage[] = [...messages, { role: 'user', content: userText }];
    setMessages(newHistory);
    setIsLoading(true);

    try {
      const aiReply = await GeminiAIService.chatWithCoach(
        topicTitle,
        facultyName,
        newHistory,
        userText
      );

      setMessages((prev) => [...prev, { role: 'model', content: aiReply }]);
      soundEngine.playCorrect();

      // Give 25 XP for engaging with AI Mentor
      if (onRewardXp) {
        onRewardXp(25);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: 'model', content: 'Terjadi anomali pada transmisi neural. Silakan coba kembali.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => {
          soundEngine.playActivate();
          setIsOpen(true);
          setIsMinimized(false);
        }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-mono text-xs font-semibold shadow-[0_0_25px_rgba(6,182,212,0.4)] border border-cyan-400/40 transition-all duration-200 hover:scale-105 cursor-pointer group"
      >
        <div className="relative">
          <Bot className="w-4 h-4 text-cyan-200 group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        </div>
        <span>SPARRING AI COACH</span>
        <span className="px-1.5 py-0.5 rounded bg-black/30 text-[10px] text-cyan-300 font-bold border border-white/10">
          LIVE
        </span>
      </button>
    );
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col bg-zinc-950/95 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-2xl transition-all duration-200 overflow-hidden ${
        isMinimized ? 'w-80 h-14' : 'w-96 sm:w-[420px] h-[520px]'
      }`}
    >
      {/* Widget Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-cyan-950/60 to-zinc-900/60 border-b border-cyan-500/20 select-none">
        <div className="flex items-center gap-2 min-w-0">
          <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
            <Bot className="w-4 h-4" />
          </div>
          <div className="truncate">
            <div className="flex items-center gap-1.5">
              <h4 className="text-xs font-semibold text-white tracking-wide truncate">
                NOVA SOCRATIC COACH
              </h4>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
            <p className="text-[10px] font-mono text-cyan-400/80 truncate">{topicTitle}</p>
          </div>
        </div>

        <div className="flex items-center gap-1 text-zinc-400">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:text-white rounded hover:bg-white/5 transition-colors cursor-pointer"
            title={isMinimized ? 'Expand' : 'Minimize'}
          >
            {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:text-rose-400 rounded hover:bg-white/5 transition-colors cursor-pointer"
            title="Close"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Conversation Stream */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'model' && (
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`max-w-[85%] rounded-xl px-3.5 py-2.5 leading-relaxed text-zinc-200 ${
                    msg.role === 'user'
                      ? 'bg-cyan-600/90 text-white rounded-tr-none font-medium'
                      : 'bg-zinc-900/90 border border-white/10 rounded-tl-none font-normal'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2.5 items-center text-zinc-400 text-xs italic">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-cyan-400" />
                <span>Coach sedang menyusun tanggapan taktis...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <form
            onSubmit={handleSendMessage}
            className="p-3 bg-zinc-950/80 border-t border-white/[0.08] flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Tanya, debatkan, atau minta uji pemahaman..."
              disabled={isLoading}
              className="flex-1 bg-zinc-900/80 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim() || isLoading}
              className="p-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-md"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </>
      )}
    </div>
  );
};
