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
  // Estado para controlar quais módulos/níveis estão expandidos
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({});

  // Manter a ordem dos módulos (Níveis) conforme aparecem nas lições
  const moduleOrder = Array.from(new Set(lessons.map(l => l.module)));

  // Extrair badges desbloqueados
  const unlockedBadges = lessons
    .filter(l => l.badge && completedLessons.includes(l.id))
    .map(l => l.badge);

  // Agrupar lições por módulo
  const modules = lessons.reduce((acc, lesson, index) => {
    if (!acc[lesson.module]) acc[lesson.module] = [];
    acc[lesson.module].push({ ...lesson, originalIndex: index });
    return acc;
  }, {} as Record<string, any[]>);

  const toggleModule = (moduleName: string) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleName]: !prev[moduleName]
    }));
  };

  return (
    <aside className={cn(
      "bg-slate-900 border-r border-slate-800 transition-all duration-300 flex flex-col h-full shrink-0 z-20",
      isOpen ? "w-80" : "w-0 overflow-hidden border-none"
    )}>
      {/* Brand & Progress Section */}
      <div className="p-5 border-b border-slate-800 min-w-[320px]">
        {/* ... Brand ... */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/20">
            <Code2 className="text-white" size={24} />
          </div>
          <div>
            <h2 className="font-bold text-lg leading-tight uppercase tracking-tighter text-white">Synthetix</h2>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Python • Data • AI</p>
          </div>
        </div>

        {/* Progress */}
        <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700/50">
          <div className="flex justify-between items-end mb-2">
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">Nível {level}</span>
            <span className="text-[10px] text-slate-400 font-medium">{xp} XP</span>
          </div>
          <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500 transition-all duration-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"
              style={{ width: `${progressInLevel}%` }}
            />
          </div>
        </div>

        {/* Conquistas */}
        <div className="mt-6">
          <h3 className="px-1 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
            Conquistas
          </h3>
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

      {/* Accordion Menu */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-2 min-w-[320px]">
        {moduleOrder.map((moduleName) => {
          const isExpanded = !!expandedModules[moduleName];
          const moduleLessons = modules[moduleName] || [];
          const completedInModule = moduleLessons.filter(l => completedLessons.includes(l.id)).length;

          return (
            <div key={moduleName} className="space-y-1">
              <button
                onClick={() => toggleModule(moduleName)}
                className={cn(
                  "w-full flex items-center justify-between p-3 rounded-xl transition-all group",
                  isExpanded ? "bg-blue-600/10 text-blue-100" : "hover:bg-slate-800/50 text-slate-400"
                )}
              >
                <div className="flex flex-col items-start min-w-0">
                  <h3 className={cn(
                    "text-xs font-bold uppercase tracking-wider truncate w-full text-left transition-colors",
                    isExpanded ? "text-blue-400" : "text-slate-300 group-hover:text-slate-100"
                  )}>
                    {moduleName}
                  </h3>
                  <p className="text-[9px] font-medium text-slate-500 uppercase mt-0.5">
                    {completedInModule} / {moduleLessons.length} Completos
                  </p>
                </div>
                {isExpanded ? (
                  <ChevronDown size={16} className="text-blue-400" />
                ) : (
                  <ChevronRight size={16} className="text-slate-600 group-hover:text-slate-400" />
                )}
              </button>
              
              {isExpanded && (
                <div className="space-y-1 mt-1 ml-4 border-l border-slate-800 pl-3 animate-in fade-in slide-in-from-top-1 duration-200">
                  {moduleLessons.map((lesson) => (
                    <button
                      key={lesson.id}
                      onClick={() => onSelectLesson(lesson.originalIndex)}
                      className={cn(
                        "w-full text-left p-2.5 rounded-lg transition-all flex items-center gap-3 group",
                        currentLessonIndex === lesson.originalIndex 
                          ? "bg-blue-600/20 text-blue-100" 
                          : "hover:bg-slate-800/40 text-slate-500"
                      )}
                    >
                      <div className={cn(
                        "w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold shrink-0",
                        completedLessons.includes(lesson.id) 
                          ? "bg-green-500/20 text-green-400" 
                          : currentLessonIndex === lesson.originalIndex ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-500"
                      )}>
                        {completedLessons.includes(lesson.id) ? <CheckCircle2 size={12} /> : lesson.originalIndex + 1}
                      </div>
                      <span className="truncate text-xs font-medium tracking-tight">
                        {lesson.title}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Footer / Reset */}
      <div className="p-4 border-t border-slate-800/50 min-w-[320px]">
        <button 
          onClick={onResetProgress}
          className="w-full py-2.5 rounded-xl text-[10px] text-slate-500 hover:text-red-400 hover:bg-red-400/5 uppercase tracking-widest font-bold transition-all border border-transparent hover:border-red-400/20"
        >
          Resetar Todo o Progresso
        </button>
      </div>
    </aside>
  );
}
