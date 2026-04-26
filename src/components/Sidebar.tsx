import { useState } from 'react';
import { Code2, CheckCircle2, ChevronRight, ChevronDown, Medal } from 'lucide-react';
import type { Lesson } from '../data/lessons';
import { cn } from '../utils/cn';

interface SidebarProps {
  lessons: Lesson[];
  currentLessonIndex: number;
  completedLessons: string[];
  xp: number;
  level: number;
  progressInLevel: number;
  isOpen: boolean;
  onSelectLesson: (index: number) => void;
  onResetProgress: () => void;
}

export function Sidebar({
  lessons,
  currentLessonIndex,
  completedLessons,
  xp,
  level,
  progressInLevel,
  isOpen,
  onSelectLesson,
  onResetProgress,
}: SidebarProps) {
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({});

  const unlockedBadges = lessons
    .filter(l => l.badge && completedLessons.includes(l.id))
    .map(l => l.badge);

  const groupedLessons = lessons.reduce((acc, lesson, index) => {
    if (!acc[lesson.phase]) acc[lesson.phase] = {};
    if (!acc[lesson.phase][lesson.module]) acc[lesson.phase][lesson.module] = [];
    acc[lesson.phase][lesson.module].push({ ...lesson, originalIndex: index });
    return acc;
  }, {} as Record<string, Record<string, (Lesson & { originalIndex: number })[]>>);

  const toggleKey = (key: string) => {
    setExpandedModules(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <aside className={cn(
      "bg-slate-900 border-r border-slate-800 transition-all duration-300 flex flex-col h-full shrink-0 z-20",
      isOpen ? "w-80" : "w-0 overflow-hidden border-none"
    )}>
      <div className="p-5 border-b border-slate-800 min-w-[320px]">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/20">
            <Code2 className="text-white" size={24} />
          </div>
          <div>
            <h2 className="font-bold text-lg leading-tight uppercase tracking-tighter text-white">Synthetix</h2>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Python • Data • AI</p>
          </div>
        </div>
        <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700/50">
          <div className="flex justify-between items-end mb-2">
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">Nível {level}</span>
            <span className="text-[10px] text-slate-400 font-medium">{xp} XP</span>
          </div>
          <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 transition-all duration-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" style={{ width: `${progressInLevel}%` }} />
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="px-1 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Conquistas</h3>
          <div className="flex flex-wrap gap-2">
            {unlockedBadges.length > 0 ? (
              unlockedBadges.map(badge => (
                <div key={badge} className="flex items-center gap-1.5 bg-yellow-500/10 text-yellow-500 text-[10px] font-bold px-2 py-1 rounded-full border border-yellow-500/20">
                  <Medal size={12} />
                  <span>{badge}</span>
                </div>
              ))
            ) : (
              <p className="text-[9px] text-slate-600 italic px-1">Complete projetos para ganhar badges.</p>
            )}
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-6 min-w-[320px]">
        {Object.entries(groupedLessons).map(([phase, modules]) => (
          <div key={phase} className="space-y-4">
            <h2 className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.2em] px-2">{phase}</h2>
            <div className="space-y-2">
              {Object.entries(modules).map(([moduleName, moduleLessons]) => {
                const moduleKey = `${phase}-${moduleName}`;
                const isExpanded = !!expandedModules[moduleKey];
                const completedInModule = moduleLessons.filter(l => completedLessons.includes(l.id)).length;

                return (
                  <div key={moduleKey} className="space-y-1">
                    <button onClick={() => toggleKey(moduleKey)} className={cn("w-full flex items-center justify-between p-3 rounded-xl transition-all", isExpanded ? "bg-slate-800/60 text-slate-200" : "hover:bg-slate-800/30 text-slate-400")}>
                      <div className="flex flex-col items-start min-w-0">
                        <span className="text-[10px] font-bold uppercase truncate w-full text-left">{moduleName}</span>
                        <span className="text-[8px] font-bold text-slate-600 uppercase mt-0.5">{completedInModule} / {moduleLessons.length}</span>
                      </div>
                      {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                    </button>
                    {isExpanded && (
                      <div className="ml-4 pl-3 border-l border-slate-800 space-y-1 mt-1 animate-in fade-in duration-200">
                        {moduleLessons.map((l) => (
                          <button key={l.id} onClick={() => onSelectLesson(l.originalIndex)} className={cn("w-full text-left p-2 rounded-lg text-xs font-medium transition-all", currentLessonIndex === l.originalIndex ? "bg-blue-600/20 text-blue-100" : "text-slate-500 hover:text-slate-300")}>
                            {l.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800/50 min-w-[320px]">
        <button onClick={onResetProgress} className="w-full py-2.5 rounded-xl text-[10px] text-slate-500 hover:text-red-400 uppercase tracking-widest font-bold">
          Resetar Progresso
        </button>
      </div>
    </aside>
  );
}
