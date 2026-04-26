import { Trophy, Star, ArrowRight, Share2 } from 'lucide-react';
import { cn } from '../utils/cn';

interface CelebrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  xp: number;
}

export function CelebrationModal({ isOpen, onClose, title, xp }: CelebrationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-slate-900 border border-blue-500/30 rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl shadow-blue-500/20 animate-in zoom-in-95 duration-300">
        <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6 relative">
          <Trophy className="text-yellow-500 w-10 h-10" />
          <Star className="absolute -top-1 -right-1 text-yellow-400 w-6 h-6 animate-pulse" />
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-2">Missão Concluída!</h2>
        <p className="text-slate-400 text-sm mb-6">
          Você finalizou o projeto <span className="text-blue-400 font-bold">{title}</span> e subiu de patamar.
        </p>

        <div className="bg-slate-800 rounded-2xl p-4 mb-8 flex justify-between items-center">
          <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Recompensa</span>
          <span className="text-yellow-500 font-bold">+{xp} XP</span>
        </div>

        <div className="space-y-3">
          <button 
            onClick={onClose}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
          >
            Continuar Jornada <ArrowRight size={18} />
          </button>
          <button 
            className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-sm"
          >
            <Share2 size={16} /> Compartilhar no GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
