import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { Code2, Loader2 } from 'lucide-react';
import { cn } from '../utils/cn';

interface EditorProps {
  code: string;
  isRunning: boolean;
  onChange: (value: string) => void;
  onRun: () => void;
}

export function Editor({ code, isRunning, onChange, onRun }: EditorProps) {
  return (
    <div className="h-full flex flex-col relative group">
      <div className="absolute top-4 right-4 z-20 transition-opacity duration-300 opacity-90 group-hover:opacity-100">
        <button
          onClick={onRun}
          disabled={isRunning}
          className={cn(
            "flex items-center gap-2 px-4 py-2 lg:px-6 lg:py-2.5 rounded-xl font-bold transition-all shadow-xl",
            isRunning 
              ? "bg-slate-800 text-slate-500 cursor-not-allowed" 
              : "bg-blue-600 text-white hover:bg-blue-500 hover:scale-105 active:scale-95 shadow-blue-600/20"
          )}
        >
          {isRunning ? <Loader2 className="animate-spin" size={18} /> : <Code2 size={18} />}
          <span className="text-xs lg:text-sm">{isRunning ? 'Rodando...' : 'Rodar Código'}</span>
        </button>
      </div>
      <div className="flex-1 overflow-hidden pt-2">
        <CodeMirror
          value={code}
          height="100%"
          theme="dark"
          extensions={[python()]}
          onChange={onChange}
          className="text-sm lg:text-base h-full"
          style={{ 
            fontSize: 'var(--editor-font-size, 15px)',
            height: '100%'
          }}
        />
      </div>
    </div>
  );
}
