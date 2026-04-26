import { useState } from 'react';
import { Code2, CheckCircle2, ChevronRight, ChevronDown, Medal, Award } from 'lucide-react';
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
  const [expandedPhases, setExpandedPhases] = useState<Record<string, boolean>>({});
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({});

  const groupedLessons = lessons.reduce((acc, lesson, index) => {
    if (!acc[lesson.phase]) acc[lesson.phase] = {};
    if (!acc[lesson.phase][lesson.module]) acc[lesson.phase][lesson.module] = [];
    acc[lesson.phase][lesson.module].push({ ...lesson, originalIndex: index });
    return acc;
  }, {} as Record<string, Record<string, (Lesson & { originalIndex: number })[]>>);

  const togglePhase = (phase: string) => setExpandedPhases(prev => ({ ...prev, [phase]: !prev[phase] }));
  const toggleModule = (key: string) => setExpandedModules(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <aside className={cn(
      "bg-slate-900 border-r border-slate-800 transition-all duration-300 flex flex-col h-full shrink-0 z-20",
      isOpen ? "w-80" : "w-0 overflow-hidden border-none"
    )}>
      <div className="p-6 border-b border-slate-800 min-w-[320px]">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/20">
            <Code2 className="text-white" size={24} />
          </div>
          <div>
            <h2 className="font-bold text-lg leading-tight uppercase tracking-tighter text-white">Synthetix</h2>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Python • Data • AI</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-4 min-w-[320px]">
        {Object.entries(groupedLessons).map(([phase, modules]) => {
          const isPhaseExpanded = !!expandedPhases[phase];
          return (
            <div key={phase} className="space-y-2">
              <button 
                onClick={() => togglePhase(phase)}
                className="w-full flex items-center justify-between text-[10px] font-bold text-blue-500 uppercase tracking-[0.2em] px-2 hover:text-blue-400"
              >
                {phase}
                {isPhaseExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
              </button>

              {isPhaseExpanded && (
                <div className="space-y-2 ml-2 border-l border-slate-800 pl-3">
                  {Object.entries(modules).map(([moduleName, moduleLessons]) => {
                    const moduleKey = `${phase}-${moduleName}`;
                    const isModuleExpanded = !!expandedModules[moduleKey];
                    const completed = moduleLessons.filter(l => completedLessons.includes(l.id)).length;
                    const total = moduleLessons.length;
                    const percent = Math.round((completed / total) * 100);

                    return (
                      <div key={moduleKey} className="space-y-1">
                        <button onClick={() => toggleModule(moduleKey)} className={cn("w-full flex items-center justify-between p-2 rounded-lg transition-all", isModuleExpanded ? "bg-slate-800/60" : "hover:bg-slate-800/30")}>
                          <div className="flex flex-col items-start min-w-0">
                            <span className="text-[11px] font-bold text-slate-300 truncate w-full text-left">{moduleName}</span>
                            <div className="w-16 h-1 bg-slate-700 rounded-full mt-1 overflow-hidden">
                              <div className="h-full bg-blue-500" style={{ width: `${percent}%` }} />
                            </div>
                          </div>
                          {isModuleExpanded ? <ChevronDown size={12} className="text-slate-500" /> : <ChevronRight size={12} className="text-slate-500" />}
                        </button>
                        
                        {isModuleExpanded && (
                          <div className="ml-2 pl-2 border-l border-slate-700/50 space-y-0.5 animate-in fade-in duration-200">
                            {moduleLessons.map((l: any) => (
                              <button key={l.id} onClick={() => onSelectLesson(l.originalIndex)} className={cn("w-full text-left p-1.5 rounded-md text-[11px] font-medium transition-all flex items-center gap-2", currentLessonIndex === l.originalIndex ? "text-blue-400" : "text-slate-500 hover:text-slate-300")}>
                                {completedLessons.includes(l.id) ? <CheckCircle2 size={12} className="text-green-500" /> : <span className="w-3 h-3 border border-slate-700 rounded-full" />}
                                {l.title}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-800/50 min-w-[320px]">
        <button onClick={onResetProgress} className="w-full py-2 rounded-lg text-[9px] text-slate-600 hover:text-red-400 uppercase tracking-widest font-bold">
          Resetar Progresso
        </button>
      </div>
    </aside>
  );
}
