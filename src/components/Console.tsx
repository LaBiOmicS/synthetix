import { Terminal } from 'lucide-react';
import { cn } from '../utils/cn';

interface ConsoleProps {
  output: string;
  isSuccess: boolean | null;
  onClear: () => void;
}

export function Console({ output, isSuccess, onClear }: ConsoleProps) {
  return (
    <div className="h-full flex flex-col bg-slate-900/50 border-t border-slate-800">
      <div className="flex items-center justify-between px-5 py-2.5 border-b border-slate-800/50">
        <div className="flex items-center gap-2 text-slate-400">
          <Terminal size={16} />
          <span className="font-bold uppercase tracking-wider text-[10px]">Console</span>
        </div>
        <button 
          onClick={onClear}
          className="text-[10px] text-slate-500 hover:text-slate-300 font-bold uppercase tracking-tight transition-colors"
        >
          Limpar
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-5 font-mono text-[13px] lg:text-sm">
        {output ? (
          <div className={cn(
            "whitespace-pre-wrap leading-relaxed break-words",
            isSuccess === false ? "text-red-400" : "text-slate-300"
          )}>
            {output}
          </div>
        ) : (
          <div className="text-slate-600 italic">O resultado aparecerá aqui...</div>
        )}
      </div>
    </div>
  );
}
