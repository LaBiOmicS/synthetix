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
    <div className="flex-1 relative border-b border-slate-800">
      <div className="absolute top-4 right-6 z-10">
        <button
          onClick={onRun}
          disabled={isRunning}
          className={cn(
            "flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold transition-all shadow-lg",
            isRunning 
              ? "bg-slate-800 text-slate-500 cursor-not-allowed" 
              : "bg-blue-600 text-white hover:bg-blue-500 hover:scale-105 active:scale-95 shadow-blue-600/20"
          )}
        >
          {isRunning ? <Loader2 className="animate-spin" size={20} /> : <Code2 size={20} />}
          {isRunning ? 'Executando...' : 'Rodar Código'}
        </button>
      </div>
      <div className="h-full pt-2">
        <CodeMirror
          value={code}
          height="100%"
          theme="dark"
          extensions={[python()]}
          onChange={onChange}
          className="text-lg"
          style={{ fontSize: '16px' }}
        />
      </div>
    </div>
  );
}
