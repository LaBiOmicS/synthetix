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
    <div className="p-5 lg:p-8 space-y-6">
      <div className="flex items-center gap-2 text-blue-400">
        <BookOpen size={18} className="lg:w-5 lg:h-5" />
        <span className="font-bold uppercase tracking-wider text-[10px] lg:text-xs">Instruções</span>
      </div>
      
      <h1 className="text-xl lg:text-2xl font-bold text-white tracking-tight leading-tight">
        {currentLesson.title}
      </h1>

      <div className="prose prose-invert prose-slate max-w-none">
        <p className="text-slate-300 leading-relaxed text-sm lg:text-base">
          {currentLesson.theory}
        </p>
      </div>
      
      {isSuccess && (
        <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-start gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <CheckCircle2 className="text-green-500 shrink-0 mt-1 w-5 h-5" />
          <div className="flex-1">
            <h4 className="font-bold text-green-400 text-sm lg:text-base">Excelente Trabalho!</h4>
            <p className="text-xs lg:text-sm text-green-400/80 mb-4">
              Você dominou esse passo.
            </p>
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={onGeneratePractice}
                disabled={isGenerating}
                className="px-4 py-2 bg-blue-600 text-white rounded-xl text-[10px] lg:text-xs font-bold hover:bg-blue-500 transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20"
              >
                {isGenerating ? <Loader2 className="animate-spin" size={14} /> : <Sparkles size={14} />}
                Gerar Variação
              </button>
              <button 
                onClick={onNextLesson}
                className="px-4 py-2 bg-slate-800 text-slate-300 rounded-xl text-[10px] lg:text-xs font-bold hover:bg-slate-700 transition-colors"
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
  );
}
