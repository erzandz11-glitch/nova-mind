import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Search,
  Filter,
  Copy,
  Check,
  Bookmark,
  BookmarkCheck,
  Download,
  Terminal,
  BookOpen,
  FileCode,
  Layers,
  Sparkles,
  Plus,
  X,
  ExternalLink,
  Clock,
  ArrowUpRight,
  Database,
  Users,
  Binary,
  Brain,
  TrendingUp,
  Zap,
  Microscope,
  Atom,
  Quote,
  FileSpreadsheet
} from 'lucide-react';
import { VAULT_ITEMS, FACULTY_DEPARTMENTS } from '../data/mockData';
import { VaultItem, FacultyDiscipline } from '../types';
import { soundEngine } from '../lib/audio';
import { EnterpriseStorage } from '../lib/storage';

export const KnowledgeVault: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const facultyParam = searchParams.get('faculty') as FacultyDiscipline | null;

  const [items, setItems] = useState<VaultItem[]>(() => {
    return EnterpriseStorage.getVaultItems();
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyDiscipline | 'all'>(facultyParam || 'all');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<VaultItem | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);

  // Sync URL search params
  useEffect(() => {
    if (facultyParam && facultyParam !== selectedFaculty) {
      setSelectedFaculty(facultyParam);
    }
  }, [facultyParam]);

  // New item form state
  const [newTitle, setNewTitle] = useState('');
  const [newFaculty, setNewFaculty] = useState<FacultyDiscipline>('ai');
  const [newCategory, setNewCategory] = useState<VaultItem['category']>('Research Papers');
  const [newDesc, setNewDesc] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newTags, setNewTags] = useState('Frontier Science, Model');

  const categories = [
    'All',
    'Research Papers',
    'Mathematical Models',
    'Frameworks',
    'Prompts',
    'Scripts',
    'E-books'
  ] as const;

  // Persist items to storage
  useEffect(() => {
    EnterpriseStorage.saveVaultItems(items);
  }, [items]);

  // Filter items based on faculty, category, and search query
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesFaculty =
        selectedFaculty === 'all' || item.facultyId === selectedFaculty;
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.doi && item.doi.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesFaculty && matchesCategory && matchesSearch;
    });
  }, [items, selectedFaculty, selectedCategory, searchQuery]);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    soundEngine.playClick();
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleToggleBookmark = (id: string) => {
    soundEngine.playClick();
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isBookmarked: !item.isBookmarked } : item
      )
    );
    if (activeItem?.id === id) {
      setActiveItem((prev) =>
        prev ? { ...prev, isBookmarked: !prev.isBookmarked } : null
      );
    }
  };

  const handleCreateNew = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    soundEngine.playComplete();
    const newItem: VaultItem = {
      id: `vault_${newFaculty}_${Date.now()}`,
      title: newTitle.trim(),
      facultyId: newFaculty,
      category: newCategory,
      description: newDesc.trim() || 'Empirical monograph and framework registered in NOVA institute codex.',
      content: newContent.trim(),
      tags: newTags.split(',').map((t) => t.trim()).filter(Boolean),
      executionTime: 'Self-Paced Research',
      updatedAt: 'Just now',
      rating: 5.0,
      downloads: 1,
      isBookmarked: true,
      author: 'Senior Fellow (You)',
      doi: `10.nova/${newFaculty}.2026.${Math.floor(100 + Math.random() * 900)}`
    };

    setItems([newItem, ...items]);
    setIsCreatingNew(false);
    setNewTitle('');
    setNewDesc('');
    setNewContent('');
  };

  const getCategoryIcon = (category: VaultItem['category']) => {
    switch (category) {
      case 'Research Papers':
        return <BookOpen className="w-4 h-4 text-sky-400" />;
      case 'Mathematical Models':
        return <FileSpreadsheet className="w-4 h-4 text-indigo-400" />;
      case 'Prompts':
        return <Terminal className="w-4 h-4 text-cyan-400" />;
      case 'Frameworks':
        return <Layers className="w-4 h-4 text-emerald-400" />;
      case 'Scripts':
        return <FileCode className="w-4 h-4 text-amber-400" />;
      case 'E-books':
        return <Quote className="w-4 h-4 text-teal-400" />;
      default:
        return <BookOpen className="w-4 h-4 text-sky-400" />;
    }
  };

  const getFacultyName = (id: FacultyDiscipline) => {
    const found = FACULTY_DEPARTMENTS.find((d) => d.id === id);
    return found ? found.name : 'Multidisciplinary';
  };

  return (
    <div className="relative min-h-[calc(100vh-5rem)] p-4 sm:p-8 lg:p-10 space-y-8 institute-noise">
      {/* Background ambient glows */}
      <div className="pointer-events-none absolute top-12 right-20 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-12 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px]" />

      {/* Top Header: Scientific Repository Banner */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 sm:p-8 rounded-3xl bg-[#0C0E17]/85 backdrop-blur-xl border border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.6)]">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400">
              <Database className="w-4 h-4" />
            </span>
            <span className="text-xs font-mono text-sky-400 tracking-wider uppercase font-semibold">
              The Sovereign Codex Repository
            </span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Faculty Codices &amp; Research Vault
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
            Curated mathematical formulations, autonomous AI pipelines, cognitive neuro-protocols, tax arbitrage structures, and complex systems teardowns.
          </p>
        </div>

        {/* Quick Capture / Register New Codice CTA */}
        <button
          onClick={() => {
            soundEngine.playClick();
            setIsCreatingNew(true);
          }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-medium text-xs shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all active:scale-95 whitespace-nowrap self-start md:self-auto cursor-pointer font-display"
        >
          <Plus className="w-4 h-4" />
          <span>Publish New Codice</span>
        </button>
      </div>

      {/* Faculty Track Bar */}
      <div className="relative z-10 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        <button
          onClick={() => {
            soundEngine.playClick();
            setSelectedFaculty('all');
            setSearchParams({});
          }}
          className={`px-3.5 py-1.5 text-xs font-mono rounded-xl transition-all cursor-pointer whitespace-nowrap ${
            selectedFaculty === 'all'
              ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-[0_0_15px_rgba(14,165,233,0.2)] font-semibold'
              : 'bg-[#0B0D16] text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          All Faculties ({items.length})
        </button>

        {FACULTY_DEPARTMENTS.map((dept) => (
          <button
            key={dept.id}
            onClick={() => {
              soundEngine.playClick();
              setSelectedFaculty(dept.id);
              setSearchParams({ faculty: dept.id });
            }}
            className={`px-3.5 py-1.5 text-xs font-mono rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
              selectedFaculty === dept.id
                ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-[0_0_15px_rgba(14,165,233,0.2)] font-semibold'
                : 'bg-[#0B0D16] text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: dept.accent }} />
            <span>{dept.name.split('&')[0]}</span>
          </button>
        ))}
      </div>

      {/* Filter and Search Bar Section */}
      <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#0B0D16]/80 backdrop-blur-xl border border-slate-800">
        
        {/* Search input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search papers, mathematical models, code, DOI..."
            className="w-full pl-10 pr-4 py-2 bg-[#08090E] border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:border-sky-500/60 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundEngine.playClick();
                setSelectedCategory(cat);
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-xl whitespace-nowrap transition-all cursor-pointer font-mono ${
                selectedCategory === cat
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-[0_0_15px_rgba(14,165,233,0.15)] font-semibold'
                  : 'bg-[#08090E] text-slate-400 hover:text-slate-200 border border-slate-850 hover:bg-slate-850'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Content Section: Responsive Grid (grid-cols-1 md:grid-cols-3) */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              soundEngine.playClick();
              setActiveItem(item);
            }}
            className="group relative flex flex-col justify-between p-6 rounded-2xl bg-[#0B0D16]/85 backdrop-blur-xl border border-slate-800/80 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(14,165,233,0.25)] hover:border-sky-500/40"
          >
            {/* Top row: Category icon, execution time, and bookmark button */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-[#08090E] border border-slate-800 group-hover:border-sky-500/30 transition-colors">
                    {getCategoryIcon(item.category)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-sky-400 font-medium">
                      {item.category}
                    </span>
                    <span className="text-[9px] font-mono text-slate-400">
                      {getFacultyName(item.facultyId).split('&')[0]}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {item.executionTime}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleBookmark(item.id);
                    }}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-sky-400 hover:bg-slate-800 transition-colors cursor-pointer"
                    title={item.isBookmarked ? 'Remove bookmark' : 'Bookmark artifact'}
                  >
                    {item.isBookmarked ? (
                      <BookmarkCheck className="w-4 h-4 text-sky-400 fill-sky-400/20" />
                    ) : (
                      <Bookmark className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Title with tracking-tight */}
              <h3 className="font-display text-sm sm:text-base font-bold tracking-tight text-white group-hover:text-sky-300 transition-colors mb-2 line-clamp-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4">
                {item.description}
              </p>
            </div>

            {/* Bottom Row: Tags & Quick Action Button */}
            <div className="pt-4 border-t border-slate-800/80 space-y-3">
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono text-slate-400 bg-[#08090E] px-2 py-0.5 rounded border border-slate-850"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                  <Users className="w-3 h-3 text-slate-400" />
                  {item.downloads} peer reads
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-sky-400 group-hover:text-sky-300 font-display">
                  <span>Inspect</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="p-12 text-center rounded-3xl bg-[#0B0D16]/50 border border-slate-800">
          <Database className="w-8 h-8 text-slate-600 mx-auto mb-3" />
          <h4 className="font-display text-base font-semibold text-slate-300">No Codices Found in Faculty</h4>
          <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
            Try switching faculty disciplines or clear your search query to inspect other departments.
          </p>
        </div>
      )}

      {/* Item Detail / Preview Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-[#0D0F18] border border-slate-800 rounded-3xl shadow-[0_0_60px_rgba(14,165,233,0.2)] text-slate-100 overflow-hidden">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#08090E] border border-slate-800 text-sky-400">
                  {getCategoryIcon(activeItem.category)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-sky-400 uppercase">
                      {activeItem.category}
                    </span>
                    <span className="text-slate-600">·</span>
                    <span className="text-xs font-mono text-slate-400">
                      {getFacultyName(activeItem.facultyId)}
                    </span>
                    {activeItem.doi && (
                      <>
                        <span className="text-slate-600">·</span>
                        <span className="text-[10px] font-mono text-slate-400">{activeItem.doi}</span>
                      </>
                    )}
                  </div>
                  <h3 className="font-display text-lg font-bold tracking-tight text-white mt-0.5">
                    {activeItem.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleToggleBookmark(activeItem.id)}
                  className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-sky-400 transition-colors cursor-pointer"
                  title="Bookmark"
                >
                  {activeItem.isBookmarked ? (
                    <BookmarkCheck className="w-4 h-4 text-sky-400 fill-sky-400/20" />
                  ) : (
                    <Bookmark className="w-4 h-4" />
                  )}
                </button>
                <button
                  onClick={() => {
                    soundEngine.playClick();
                    setActiveItem(null);
                  }}
                  className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body / Scrollable Content */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 mb-1.5">
                  Scientific Abstract &amp; Context
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeItem.description}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-mono uppercase text-slate-400">
                    Codex Content &amp; Mathematical Payload
                  </h4>
                  <button
                    onClick={() => handleCopy(activeItem.id, activeItem.content)}
                    className="flex items-center gap-1.5 text-xs font-medium text-sky-400 hover:text-sky-300 transition-colors cursor-pointer font-mono"
                  >
                    {copiedId === activeItem.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied to Clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Formula / Payload</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="relative p-4 rounded-2xl bg-[#08090E] border border-slate-850 font-mono text-xs text-slate-200 leading-relaxed overflow-x-auto max-h-72">
                  <pre className="whitespace-pre-wrap">{activeItem.content}</pre>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs font-mono text-slate-400 border-t border-slate-800/80">
                <span>AUTHOR: {activeItem.author}</span>
                <span>REGISTERED: {activeItem.updatedAt}</span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 px-6 bg-[#090A10] border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => {
                  soundEngine.playClick();
                  const blob = new Blob([activeItem.content], { type: 'text/markdown' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = `${activeItem.title.replace(/\s+/g, '_').toLowerCase()}.md`;
                  a.click();
                  URL.revokeObjectURL(url);
                }}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-pointer font-mono"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Monograph (.md)</span>
              </button>

              <button
                onClick={() => handleCopy(activeItem.id, activeItem.content)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-medium text-xs shadow-[0_0_15px_rgba(14,165,233,0.3)] transition-all cursor-pointer font-display"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Deploy to Workspace</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Capture New Item to Brain Modal */}
      {isCreatingNew && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-xl bg-[#0D0F18] border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-[0_0_50px_rgba(14,165,233,0.2)] text-slate-100">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-sky-400" />
                <div>
                  <h3 className="font-display text-base font-bold text-white">Publish to Institute Codex</h3>
                  <p className="text-[11px] text-slate-400 font-mono">Register new research monograph or operational framework</p>
                </div>
              </div>
              <button
                onClick={() => {
                  soundEngine.playClick();
                  setIsCreatingNew(false);
                }}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Template Fill Buttons */}
            <div className="mt-4 p-3 rounded-2xl bg-[#08090E] border border-slate-850 space-y-2">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                Quick Preset Discipline Templates:
              </span>
              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => {
                    soundEngine.playClick();
                    setNewTitle('Autonomous Multi-Agent Supervisor Loop Protocol');
                    setNewFaculty('ai');
                    setNewCategory('Scripts');
                    setNewDesc('Formal TypeScript supervisor graph verifying tool execution invariants before database mutation.');
                    setNewContent('// AI Multi-Agent Invariant Validator\nexport async function validateAgentOutput(draft: string) {\n  const parsed = schema.safeParse(JSON.parse(draft));\n  if (!parsed.success) throw new InvariantViolation("Schema mismatch");\n  return parsed.data;\n}');
                    setNewTags('Autonomous AI, LangGraph, Schema Validation');
                  }}
                  className="px-2 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[10px] font-mono text-sky-300 transition-colors"
                >
                  + AI Swarm
                </button>

                <button
                  type="button"
                  onClick={() => {
                    soundEngine.playClick();
                    setNewTitle('The Cortisol Inversion & High-Beta Decision Protocol');
                    setNewFaculty('neuroscience');
                    setNewCategory('Frameworks');
                    setNewDesc('Somatic vagus down-regulation during enterprise drawdown to maintain prefrontal cortex dominance.');
                    setNewContent('## Cortisol Inversion Protocol\n1. Double-inhalation physiological sigh (2x depth).\n2. 20-degree upward gaze to deactivate anxiety reflex.\n3. Mandatory 30-minute freeze on external communications.');
                    setNewTags('Neuroscience, Amygdala, Stoicism, Deep Flow');
                  }}
                  className="px-2 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[10px] font-mono text-cyan-300 transition-colors"
                >
                  + Neuro Protocol
                </button>

                <button
                  type="button"
                  onClick={() => {
                    soundEngine.playClick();
                    setNewTitle('Multi-Jurisdictional Tax Arbitrage & IP Ring-Fencing');
                    setNewFaculty('finance');
                    setNewCategory('Research Papers');
                    setNewDesc('Structuring Swiss IP holding companies and Estonian operational entities for zero-entropy global cash flow.');
                    setNewContent('### Tax Arbitrage Formulation\nEffective_Tax = Sum(Income_j * Rate_j) -> Minimize subject to Bilateral Tax Treaties.\nIP Box Rate: 8.8% Swiss Cantonal.\nEstonia: 0% on reinvested earnings.');
                    setNewTags('Quantitative Finance, Tax Law, Flag Theory');
                  }}
                  className="px-2 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[10px] font-mono text-indigo-300 transition-colors"
                >
                  + Quant Finance
                </button>

                <button
                  type="button"
                  onClick={() => {
                    soundEngine.playClick();
                    setNewTitle('The Zero-Entropy Solopreneur Operating Loop (Z-EOS)');
                    setNewFaculty('productivity');
                    setNewCategory('Frameworks');
                    setNewDesc('Scaling an 8-figure revenue run-rate with zero employees using asynchronous RFCs and automated webhook pipelines.');
                    setNewContent('### Z-EOS Core Laws:\n1. Zero Synchronous Meetings Invariant: All decisions documented in RFC.\n2. Ephemeral Context: Working memory purged every 60 seconds into automated cron queues.\n3. Leverage Multiplier: 1 Founder -> 10,000 synthetic worker hours/day.');
                    setNewTags('Productivity, Z-EOS, High-Output, Asymmetric Ops');
                  }}
                  className="px-2 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[10px] font-mono text-emerald-300 transition-colors"
                >
                  + High-Output Ops
                </button>

                <button
                  type="button"
                  onClick={() => {
                    soundEngine.playClick();
                    setNewTitle('Thermodynamics of Context Switching: Landauer Entropy in Teams');
                    setNewFaculty('complex_systems');
                    setNewCategory('Mathematical Models');
                    setNewDesc('Calculating the irreversible energy dissipation Delta Q >= k_B * T * ln(2) caused by cognitive fragmentation.');
                    setNewContent('### Landauer Limit Formulation:\nDelta_Q = k_B * T * ln(2)\nContext switching forces irreversible memory register flushes, accelerating physiological burnout.\nRule: Enforce batch processing for all asynchronous streams.');
                    setNewTags('Complex Systems, Physics, Thermodynamics, Cybernetics');
                  }}
                  className="px-2 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[10px] font-mono text-amber-300 transition-colors"
                >
                  + Complex Systems
                </button>
              </div>
            </div>

            <form onSubmit={handleCreateNew} className="mt-4 space-y-4 text-xs">
              <div>
                <label className="block text-slate-400 font-mono mb-1.5">Monograph / Model Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Asymmetric Macro Risk Inversion Protocol"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#08090E] border border-slate-800 text-slate-200 placeholder-slate-400 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 font-mono mb-1.5">Scientific Faculty</label>
                  <select
                    value={newFaculty}
                    onChange={(e) => setNewFaculty(e.target.value as FacultyDiscipline)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#08090E] border border-slate-800 text-slate-200 focus:outline-none focus:border-sky-500"
                  >
                    <option value="ai">AI &amp; Synthetic Computation</option>
                    <option value="neuroscience">Cognitive Neuroscience</option>
                    <option value="finance">Quantitative Finance</option>
                    <option value="productivity">High-Output Systems &amp; Ops</option>
                    <option value="complex_systems">Frontier Complex Systems</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 font-mono mb-1.5">Category Format</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#08090E] border border-slate-800 text-slate-200 focus:outline-none focus:border-sky-500"
                  >
                    <option value="Research Papers">Research Papers</option>
                    <option value="Mathematical Models">Mathematical Models</option>
                    <option value="Frameworks">Frameworks</option>
                    <option value="Prompts">Prompts</option>
                    <option value="Scripts">Scripts</option>
                    <option value="E-books">E-books</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-400 font-mono mb-1.5">Executive Abstract</label>
                <input
                  type="text"
                  placeholder="Concise 1-sentence scientific hypothesis or purpose"
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#08090E] border border-slate-800 text-slate-200 placeholder-slate-400 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-slate-400 font-mono mb-1.5">Mathematical / Code Payload</label>
                <textarea
                  required
                  rows={6}
                  placeholder="Paste mathematical proofs, TypeScript agents, or LaTeX equations..."
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-[#08090E] border border-slate-800 text-slate-200 placeholder-slate-400 font-mono focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-slate-400 font-mono mb-1.5">Tags (Comma-separated)</label>
                <input
                  type="text"
                  placeholder="Neuroscience, Deep Flow, Formula"
                  value={newTags}
                  onChange={(e) => setNewTags(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#08090E] border border-slate-800 text-slate-200 placeholder-slate-400 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="flex gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => {
                    soundEngine.playClick();
                    setIsCreatingNew(false);
                  }}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white text-xs font-semibold shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all cursor-pointer font-display"
                >
                  Register Codice
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
