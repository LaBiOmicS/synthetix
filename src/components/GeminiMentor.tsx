import { useState, useEffect } from 'react';
import { Sparkles, Key, Send, BrainCircuit, Loader2, User } from 'lucide-react';
import { useAI } from '../context/AIContext';
import { cn } from '../utils/cn';

interface GeminiMentorProps {
  currentLessonTitle: string;
  currentCode: string;
  lastOutput: string;
}

export function GeminiMentor({ currentLessonTitle, currentCode, lastOutput }: GeminiMentorProps) {
  const { apiKey, setApiKey, isConfigured } = useAI();
  const [inputKey, setInputKey] = useState('');
  const [chat, setChat] = useState<{ role: 'ai' | 'user'; text: string }[]>([
    { role: 'ai', text: 'Olá! Sou seu Mentor de Python. Rode seu código e eu te darei um feedback automático!' }
  ]);
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState('');

  // Feedback Proativo: Monitora mudanças na saída do console
  useEffect(() => {
    if (lastOutput && isConfigured && lastOutput !== 'Rodando...' && !lastOutput.includes('Instalando dependências')) {
      const timer = setTimeout(() => {
        const prompt = `Analise o código e o resultado abaixo e dê um feedback curto (máximo 3 frases) e pedagógico. 
                        Se houve erro, explique o porquê sem dar a resposta. 
                        Se funcionou, elogie e sugira uma pequena melhoria ou curiosidade.
                        Código: ${currentCode}
                        Resultado: ${lastOutput}`;
        askGemini(prompt, true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [lastOutput]);

  const handleSaveKey = () => {
    if (inputKey.trim()) setApiKey(inputKey.trim());
  };

  const askGemini = async (customQuestion?: string, isAuto?: boolean) => {
    const q = customQuestion || question;
    if (!q.trim() || !apiKey) return;

    if (!isAuto) {
      setChat(prev => [...prev, { role: 'user', text: q }]);
      setQuestion('');
    }
    
    setLoading(true);

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: isAuto ? q : `Você é um docente especialista em Python e Engenharia de Software. 
                     Contexto da lição atual: ${currentLessonTitle}. 
                     Código atual do aluno: ${currentCode}. 
                     Última saída do console: ${lastOutput}.
                     Pergunta do aluno: ${q}
                     
                     DIRETRIZES ESPECÍFICAS:
                     1. Se for uma lição de "MISSÃO ESPECIAL" ou "PROJETO", atue como um mentor de projeto, guiando passo a passo sem dar o código pronto.
                     2. Se o aluno terminar o projeto com sucesso, explique como ele pode usar o comando 'git init', 'git add' e 'git push' para subir esse projeto no seu GitHub.
                     3. Use um tom encorajador e profissional.`
            }]
          }]
        })
      });

      const data = await response.json();
      const aiText = data.candidates[0].content.parts[0].text;
      setChat(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (err) {
      if (!isAuto) {
        setChat(prev => [...prev, { role: 'ai', text: 'Desculpe, tive um problema ao me conectar. Verifique sua chave API.' }]);
      }
    } finally {
      setLoading(false);
    }
  };

  if (!isConfigured) {
    return (
      <div className="mt-8 p-6 bg-slate-800/50 border border-blue-500/30 rounded-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="text-blue-400" size={24} />
          <h3 className="font-bold text-white">Ative seu Mentor IA</h3>
        </div>
        <p className="text-sm text-slate-400 mb-4 leading-relaxed">
          Insira sua chave do Google Gemini para ter um professor particular explicando cada erro e sugerindo melhorias em tempo real.
        </p>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Key className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
            <input
              type="password"
              value={inputKey}
              onChange={(e) => setInputKey(e.target.value)}
              placeholder="Cole sua API Key aqui..."
              className="w-full bg-slate-900 border border-slate-700 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:border-blue-500 outline-none transition-all text-white"
            />
          </div>
          <button
            onClick={handleSaveKey}
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-bold transition-all active:scale-95 shadow-lg shadow-blue-600/20"
          >
            Ativar
          </button>
        </div>
        <p className="text-[10px] text-slate-500 mt-3 font-medium uppercase tracking-wider">
          Chave salva localmente via LocalStorage.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8 flex flex-col bg-slate-800/30 border border-slate-700/50 rounded-2xl overflow-hidden shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="p-4 bg-slate-800/50 border-b border-slate-700/50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
            <BrainCircuit className="text-blue-400" size={18} />
          </div>
          <span className="font-bold text-xs uppercase tracking-widest text-slate-200">Mentor Synthetix</span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-1 bg-green-500/10 rounded-full border border-green-500/20">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
          <span className="text-[9px] text-green-500 font-bold uppercase tracking-tight">Ativo</span>
        </div>
      </div>

      <div className="h-80 overflow-y-auto p-4 space-y-4 bg-slate-900/40 custom-scrollbar">
        {chat.map((msg, i) => (
          <div key={i} className={cn(
            "flex gap-3",
            msg.role === 'user' ? "flex-row-reverse" : "flex-row"
          )}>
            <div className={cn(
              "w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-1 shadow-sm",
              msg.role === 'user' ? "bg-blue-600" : "bg-slate-700"
            )}>
              {msg.role === 'user' ? <User size={14} className="text-white" /> : <BrainCircuit size={14} className="text-blue-400" />}
            </div>
            <div className={cn(
              "p-3.5 rounded-2xl text-[13px] leading-relaxed shadow-sm max-w-[85%]",
              msg.role === 'user' 
                ? "bg-blue-600 text-white rounded-tr-none" 
                : "bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700/50"
            )}>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex items-center gap-2 text-slate-500 italic text-xs pl-10">
            <Loader2 className="animate-spin" size={12} />
            O mentor está analisando seu código...
          </div>
        )}
      </div>

      <div className="p-4 bg-slate-900/60 border-t border-slate-700/50">
        <div className="flex gap-2">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && askGemini()}
            placeholder="Dúvida sobre o código?"
            className="flex-1 bg-slate-900 border border-slate-700 rounded-xl py-2.5 px-4 text-xs focus:border-blue-500 outline-none transition-all text-white"
          />
          <button
            onClick={() => askGemini()}
            disabled={loading || !question.trim()}
            className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:bg-slate-800 text-white p-2.5 rounded-xl transition-all active:scale-95 shadow-lg shadow-blue-600/10"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
