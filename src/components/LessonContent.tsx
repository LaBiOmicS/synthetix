import { BookOpen, CheckCircle2 } from 'lucide-react';
import type { Lesson } from '../data/lessons';
import { GeminiMentor } from './GeminiMentor';

interface LessonContentProps {
  currentLesson: Lesson;
  isSuccess: boolean | null;
  onNextLesson: () => void;
  currentCode: string;
  lastOutput: string;
}

export function LessonContent({ 
  currentLesson, 
  isSuccess, 
  onNextLesson,
  currentCode,
  lastOutput
}: LessonContentProps) {
  return (
    <div className="w-1/3 border-r border-slate-800 flex flex-col bg-slate-900/20">
      <div className="p-8 overflow-y-auto">
        <div className="flex items-center gap-2 text-blue-400 mb-4">
          <BookOpen size={20} />
          <span className="font-bold uppercase tracking-wider text-xs">Instruções</span>
        </div>
        <h1 className="text-2xl font-bold mb-6 text-white">{currentLesson.title}</h1>
        <div className="prose prose-invert prose-slate max-w-none">
          <p className="text-slate-300 leading-relaxed text-lg">
            {currentLesson.theory}
          </p>
        </div>
        
        {isSuccess && (
          <div className="mt-8 p-4 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-start gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <CheckCircle2 className="text-green-500 shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-green-400">Missão Cumprida!</h4>
              <p className="text-sm text-green-400/80">Você ganhou {currentLesson.xp} XP. Pronto para o próximo desafio?</p>
              <button 
                onClick={onNextLesson}
                className="mt-3 px-4 py-2 bg-green-500 text-white rounded-xl text-sm font-bold hover:bg-green-600 transition-colors"
              >
                Próxima Lição
              </button>
            </div>
          </div>
        )}

        <GeminiMentor 
          currentLessonTitle={currentLesson.title}
          currentCode={currentCode}
          lastOutput={lastOutput}
        />
      </div>
    </div>
  );
}
