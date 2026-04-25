import { useState } from 'react';
import { Sparkles, Key, Send, BrainCircuit, Loader2 } from 'lucide-react';
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
    { role: 'ai', text: 'Olá! Sou seu Mentor de Python. Em que posso ajudar com a lição de hoje?' }
  ]);
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState('');

  const handleSaveKey = () => {
    if (inputKey.trim()) setApiKey(inputKey.trim());
  };

  const askGemini = async () => {
    if (!question.trim() || !apiKey) return;

    const newChat = [...chat, { role: 'user', text: question }];
    setChat(newChat as any);
    setQuestion('');
    setLoading(true);

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Você é um docente especialista em Python e Engenharia de Software. 
                     Contexto da lição atual: ${currentLessonTitle}. 
                     Código atual do aluno: ${currentCode}. 
                     Última saída do console: ${lastOutput}.
                     Pergunta do aluno: ${question}
                     
                     DIRETRIZES ESPECÍFICAS:
                     1. Se for uma lição de "MISSÃO ESPECIAL", atue como um mentor de projeto, guiando passo a passo sem dar o código pronto.
                     2. Se o aluno terminar o projeto com sucesso, explique como ele pode usar o comando 'git init', 'git add' e 'git push' para subir esse projeto no seu GitHub.
                     3. Use um tom encorajador e profissional.`
            }]
          }]
        })
      });

      const data = await response.json();
      const aiText = data.candidates[0].content.parts[0].text;
      setChat([...newChat, { role: 'ai', text: aiText }] as any);
    } catch (err) {
      setChat([...newChat, { role: 'ai', text: 'Desculpe, tive um problema ao me conectar. Verifique sua chave API.' }] as any);
    } finally {
      setLoading(false);
    }
  };

  if (!isConfigured) {
    return (
      <div className="mt-8 p-6 bg-slate-800/50 border border-blue-500/30 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="text-blue-400" size={24} />
          <h3 className="font-bold text-white">Ative seu Mentor IA</h3>
        </div>
        <p className="text-sm text-slate-400 mb-4">
          Insira sua chave do Google Gemini para ter um professor particular explicando cada conceito.
        </p>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Key className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
            <input
              type="password"
              value={inputKey}
              onChange={(e) => setInputKey(e.target.value)}
              placeholder="Cole sua API Key aqui..."
              className="w-full bg-slate-900 border border-slate-700 rounded-xl py-2 pl-10 pr-4 text-sm focus:border-blue-500 outline-none transition-all"
            />
          </div>
          <button
            onClick={handleSaveKey}
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-bold transition-all"
          >
            Ativar
          </button>
        </div>
        <p className="text-[10px] text-slate-500 mt-3">
          Sua chave é salva apenas localmente no seu navegador.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8 flex flex-col bg-slate-800/30 border border-slate-700/50 rounded-2xl overflow-hidden">
      <div className="p-4 bg-slate-800/50 border-b border-slate-700/50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BrainCircuit className="text-blue-400" size={20} />
          <span className="font-bold text-sm uppercase tracking-wider">Mentor Synthetix</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-[10px] text-slate-500 font-bold uppercase">Online</span>
        </div>
      </div>

      <div className="h-64 overflow-y-auto p-4 space-y-4 bg-slate-900/20">
        {chat.map((msg, i) => (
          <div key={i} className={cn(
            "flex flex-col max-w-[85%]",
            msg.role === 'user' ? "ml-auto items-end" : "items-start"
          )}>
            <div className={cn(
              "p-3 rounded-2xl text-sm leading-relaxed",
              msg.role === 'user' 
                ? "bg-blue-600 text-white rounded-tr-none" 
                : "bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700/50"
            )}>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex items-center gap-2 text-slate-500 italic text-xs">
            <Loader2 className="animate-spin" size={14} />
            Mentor está pensando...
          </div>
        )}
      </div>

      <div className="p-4 bg-slate-900/40 border-t border-slate-700/50">
        <div className="flex gap-2">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && askGemini()}
            placeholder="Pergunte ao mentor..."
            className="flex-1 bg-slate-900 border border-slate-700 rounded-xl py-2 px-4 text-sm focus:border-blue-500 outline-none transition-all"
          />
          <button
            onClick={askGemini}
            disabled={loading || !question.trim()}
            className="bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-blue-400 p-2 rounded-xl transition-all"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
