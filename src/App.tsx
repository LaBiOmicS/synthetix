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
  const currentLesson = allLessons[currentLessonIndex] || allLessons[0];

  const [code, setCode] = useState('');
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
              text: `Gere uma VARIAÇÃO de um desafio de programação Python para o conceito "${currentLesson.concept}". 
                     O objetivo é reforçar o aprendizado através de uma microconquista diferente mas com a mesma complexidade.
                     Módulo: "${currentLesson.module}".
                     Retorne APENAS um JSON no seguinte formato:
                     {
                       "id": "dyn-${Date.now()}",
                       "module": "${currentLesson.module}",
                       "concept": "${currentLesson.concept}",
                       "title": "Título Curto (Variação)",
                       "theory": "Instrução curtíssima de 1 frase",
                       "initialCode": "Código inicial para o aluno completar",
                       "testCode": "Código de teste em Python (usando assert) para validar a solução",
                       "xp": 10
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

      <main className="flex-1 flex flex-col min-w-0 relative h-full">
        <Header 
          xp={xp}
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
          <div className="w-full lg:w-[400px] xl:w-[450px] flex-shrink-0 border-b lg:border-b-0 lg:border-r border-slate-800 bg-slate-900/20 overflow-y-auto h-[40vh] lg:h-full">
            <LessonContent 
              currentLesson={currentLesson}
              isSuccess={isSuccess}
              onNextLesson={handleNextLesson}
              currentCode={code}
              lastOutput={output}
              onGeneratePractice={() => apiKey && generatePracticeChallenge(apiKey)}
              isGenerating={isGenerating}
            />
          </div>

          <div className="flex-1 flex flex-col bg-slate-950 min-h-0 overflow-hidden">
            <div className="flex-1 min-h-[300px]">
              <Editor 
                code={code}
                isRunning={isRunning}
                onChange={setCode}
                onRun={handleRun}
              />
            </div>
            <div className="h-[25vh] lg:h-1/3 min-h-[150px]">
              <Console 
                output={output}
                isSuccess={isSuccess}
                onClear={() => setOutput('')}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
