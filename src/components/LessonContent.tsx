import { BookOpen, CheckCircle2, Sparkles, Loader2 } from 'lucide-react';
import type { Lesson } from '../data/lessons';
import { GeminiMentor } from './GeminiMentor';

interface LessonContentProps {
  currentLesson: Lesson;
  isSuccess: boolean | null;
  onNextLesson: () => void;
  currentCode: string;
  lastOutput: string;
  onGeneratePractice: () => void;
  isGenerating: boolean;
}

export function LessonContent({ 
  currentLesson, 
  isSuccess, 
  onNextLesson,
  currentCode,
  lastOutput,
  onGeneratePractice,
  isGenerating
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
            <div className="flex-1">
              <h4 className="font-bold text-green-400">Excelente Trabalho!</h4>
              <p className="text-sm text-green-400/80 mb-4">
                Você dominou esse passo. Quer reforçar o conceito de <strong>{currentLesson.concept}</strong> com um desafio extra ou avançar?
              </p>
              <div className="flex flex-wrap gap-2">
                <button 
                  onClick={onGeneratePractice}
                  disabled={isGenerating}
                  className="px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-500 transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20 active:scale-95"
                >
                  {isGenerating ? <Loader2 className="animate-spin" size={18} /> : <Sparkles size={18} />}
                  Gerar Variação (+{currentLesson.xp} XP)
                </button>
                <button 
                  onClick={onNextLesson}
                  className="px-5 py-2.5 bg-slate-800 text-slate-300 rounded-xl text-sm font-bold hover:bg-slate-700 transition-colors active:scale-95"
                >
                  Próxima Etapa
                </button>
              </div>
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
