import { useState, useEffect, useMemo } from 'react';
import { usePyodide } from './hooks/usePyodide';
import { lessons } from './data/lessons';
import { LoadingScreen } from './components/LoadingScreen';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { LessonContent } from './components/LessonContent';
import { Editor } from './components/Editor';
import { Console } from './components/Console';

import { useAI } from './context/AIContext';

export default function App() {
  const { pyodide, loading, runCode } = usePyodide();
  const { apiKey } = useAI();
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [customLessons, setCustomLessons] = useState<any[]>([]);
  
  // Mesclar lições estáticas com customizadas
  const allLessons = useMemo(() => [...lessons, ...customLessons], [customLessons]);
  const currentLesson = allLessons[currentLessonIndex];

  const [code, setCode] = useState(currentLesson?.initialCode || '');
  const [output, setOutput] = useState('');
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [xp, setXp] = useState(() => Number(localStorage.getItem('xp') || 0));
  const [completedLessons, setCompletedLessons] = useState<string[]>(() => 
    JSON.parse(localStorage.getItem('completedLessons') || '[]')
  );
  const [isRunning, setIsRunning] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (currentLesson) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCode(currentLesson.initialCode);
      setOutput('');
      setIsSuccess(null);
    }
  }, [currentLesson]);

  const level = useMemo(() => Math.floor(xp / 100) + 1, [xp]);
  const progressInLevel = useMemo(() => xp % 100, [xp]);

  const handleRun = async () => {
    setIsRunning(true);
    setOutput('Rodando...');
    
    if (currentLesson.dependencies.length > 0 && pyodide) {
      setOutput(`Instalando dependências: ${currentLesson.dependencies.join(', ')}...`);
      const micropip = pyodide.pyimport('micropip') as { install: (pkg: string) => Promise<void> };
      for (const dep of currentLesson.dependencies) {
        await micropip.install(dep);
      }
    }

    const result = await runCode(code);
    
    if (result.error) {
      setOutput(result.error);
      setIsSuccess(false);
    } else {
      setOutput(result.output || 'Código executado com sucesso (sem saída).');
      
      try {
        const testResult = await runCode(code + '\n' + currentLesson.testCode);
        if (testResult.error) {
          setIsSuccess(false);
          setOutput(prev => prev + '\n\n❌ Teste falhou: ' + testResult.error);
        } else {
          setIsSuccess(true);
          setOutput(prev => prev + '\n\n✅ Parabéns! Objetivo alcançado.');
          
          if (!completedLessons.includes(currentLesson.id)) {
            const newXp = xp + currentLesson.xp;
            setXp(newXp);
            localStorage.setItem('xp', String(newXp));
            
            const newCompleted = [...completedLessons, currentLesson.id];
            setCompletedLessons(newCompleted);
            localStorage.setItem('completedLessons', JSON.stringify(newCompleted));
          }
        }
      } catch {
        setIsSuccess(false);
      }
    }
    setIsRunning(false);
  };

  const handleResetProgress = () => {
    if(confirm('Limpar todo o progresso?')) {
      localStorage.clear();
      window.location.reload();
    }
  };

  const handleNextLesson = () => {
    setCurrentLessonIndex(prev => Math.min(prev + 1, allLessons.length - 1));
  };

  const generatePracticeChallenge = async (apiKey: string) => {
    setIsGenerating(true);
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Gere um novo desafio de programação Python inédito para o módulo "${currentLesson.module}". 
                     O desafio deve ser diferente do atual ("${currentLesson.title}").
                     Retorne APENAS um JSON no seguinte formato:
                     {
                       "id": "dyn-${Date.now()}",
                       "module": "${currentLesson.module}",
                       "title": "Título do Desafio",
                       "theory": "Explicação curta",
                       "initialCode": "Código inicial",
                       "testCode": "Código de teste usando assert",
                       "xp": 50
                     }`
            }]
          }],
          generationConfig: { response_mime_type: "application/json" }
        })
      });

      const data = await response.json();
      const newLesson = JSON.parse(data.candidates[0].content.parts[0].text);
      setCustomLessons(prev => [...prev, newLesson]);
      setCurrentLessonIndex(allLessons.length); // Ir para a nova lição
    } catch (err) {
      alert('Erro ao gerar desafio. Verifique sua chave API.');
    } finally {
      setIsGenerating(false);
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden font-sans">
      <Sidebar 
        lessons={allLessons}
        currentLessonIndex={currentLessonIndex}
        completedLessons={completedLessons}
        xp={xp}
        level={level}
        progressInLevel={progressInLevel}
        isOpen={isSidebarOpen}
        onSelectLesson={setCurrentLessonIndex}
        onResetProgress={handleResetProgress}
      />

      <main className="flex-1 flex flex-col min-w-0 relative">
        <Header 
          xp={xp}
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        <div className="flex-1 flex overflow-hidden">
          <LessonContent 
            currentLesson={currentLesson}
            isSuccess={isSuccess}
            onNextLesson={handleNextLesson}
            currentCode={code}
            lastOutput={output}
            onGeneratePractice={() => apiKey && generatePracticeChallenge(apiKey)}
            isGenerating={isGenerating}
          />

          <div className="flex-1 flex flex-col bg-slate-950">
            <Editor 
              code={code}
              isRunning={isRunning}
              onChange={setCode}
              onRun={handleRun}
            />
            <Console 
              output={output}
              isSuccess={isSuccess}
              onClear={() => setOutput('')}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
