import { Terminal } from 'lucide-react';
import { cn } from '../utils/cn';

interface ConsoleProps {
  output: string;
  isSuccess: boolean | null;
  onClear: () => void;
}

export function Console({ output, isSuccess, onClear }: ConsoleProps) {
  return (
    <div className="h-1/3 flex flex-col bg-slate-900/50">
      <div className="flex items-center justify-between px-6 py-3 border-b border-slate-800">
        <div className="flex items-center gap-2 text-slate-400">
          <Terminal size={18} />
          <span className="font-bold uppercase tracking-wider text-xs">Console</span>
        </div>
        <button 
          onClick={onClear}
          className="text-xs text-slate-500 hover:text-slate-300 font-medium"
        >
          Limpar
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-6 font-mono text-sm">
        {output ? (
          <div className={cn(
            "whitespace-pre-wrap leading-relaxed",
            isSuccess === false ? "text-red-400" : "text-slate-300"
          )}>
            {output}
          </div>
        ) : (
          <div className="text-slate-600 italic">O resultado da execução aparecerá aqui...</div>
        )}
      </div>
    </div>
  );
}
