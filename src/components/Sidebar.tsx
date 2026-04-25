import { Code2, CheckCircle2, ChevronRight } from 'lucide-react';
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
  // Manter a ordem dos módulos conforme aparecem nas lições
  const moduleOrder = Array.from(new Set(lessons.map(l => l.module)));

  const modules = lessons.reduce((acc, lesson, index) => {
    if (!acc[lesson.module]) acc[lesson.module] = [];
    acc[lesson.module].push({ ...lesson, originalIndex: index });
    return acc;
  }, {} as Record<string, any[]>);

  return (
    <aside className={cn(
      "bg-slate-900 border-r border-slate-800 transition-all duration-300 flex flex-col h-full shrink-0",
      isOpen ? "w-80" : "w-0 overflow-hidden border-none"
    )}>
      <div className="p-6 border-b border-slate-800 min-w-[320px]">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/20">
            <Code2 className="text-white" size={24} />
          </div>
          <div>
            <h2 className="font-bold text-lg leading-tight uppercase tracking-tighter">Synthetix</h2>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Python • Data • AI</p>
          </div>
        </div>

        <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700/50">
          <div className="flex justify-between items-end mb-2">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Nível {level}</span>
            <span className="text-xs text-slate-400">{xp} XP Total</span>
          </div>
          <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500 transition-all duration-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              style={{ width: `${progressInLevel}%` }}
            />
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-6 min-w-[320px]">
        {moduleOrder.map((moduleName) => (
          <div key={moduleName} className="space-y-2">
            <h3 className="px-3 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-3">
              {moduleName}
            </h3>
            {modules[moduleName]?.map((lesson) => (
              <button
                key={lesson.id}
                onClick={() => onSelectLesson(lesson.originalIndex)}
                className={cn(
                  "w-full text-left p-2.5 rounded-xl transition-all flex items-center gap-3 group",
                  currentLessonIndex === lesson.originalIndex 
                    ? "bg-blue-600/20 text-blue-100 border border-blue-500/30" 
                    : "hover:bg-slate-800/50 text-slate-400"
                )}
              >
                <div className={cn(
                  "w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0",
                  completedLessons.includes(lesson.id) 
                    ? "bg-green-500/20 text-green-400" 
                    : currentLessonIndex === lesson.originalIndex ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-500"
                )}>
                  {completedLessons.includes(lesson.id) ? <CheckCircle2 size={14} /> : lesson.originalIndex + 1}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold truncate text-xs">{lesson.title}</p>
                </div>
              </button>
            ))}
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800/50 min-w-[320px]">
        <button 
          onClick={onResetProgress}
          className="w-full py-2 rounded-lg text-[10px] text-slate-600 hover:text-red-400 hover:bg-red-400/5 uppercase tracking-widest font-bold transition-all"
        >
          Resetar Progresso
        </button>
      </div>
    </aside>
  );
}
