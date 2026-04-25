import { Menu, Trophy } from 'lucide-react';

interface HeaderProps {
  xp: number;
  onToggleSidebar: () => void;
}

export function Header({ xp, onToggleSidebar }: HeaderProps) {
  return (
    <header className="h-16 border-b border-slate-800 flex items-center justify-between px-6 bg-slate-900/50 backdrop-blur-sm z-10">
      <button 
        onClick={onToggleSidebar}
        className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 transition-colors"
      >
        <Menu size={20} />
      </button>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-yellow-500/10 text-yellow-500 rounded-full border border-yellow-500/20 text-sm font-bold">
          <Trophy size={16} />
          <span>{xp} XP</span>
        </div>
      </div>
    </header>
  );
}
