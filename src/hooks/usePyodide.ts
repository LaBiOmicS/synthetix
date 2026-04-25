import { useState, useEffect, useCallback } from 'react';

interface PyodideInterface {
  runPythonAsync: (code: string) => Promise<unknown>;
  loadPackage: (packages: string[]) => Promise<void>;
  pyimport: (name: string) => unknown;
}

declare global {
  interface Window {
    loadPyodide: (options: { indexURL: string }) => Promise<PyodideInterface>;
  }
}

export function usePyodide() {
  const [pyodide, setPyodide] = useState<PyodideInterface | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        if (!window.loadPyodide) {
          throw new Error('Pyodide script not loaded');
        }
        const py = await window.loadPyodide({
          indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.2/full/"
        });
        await py.loadPackage(['micropip']);
        setPyodide(py);
        setLoading(false);
      } catch (err) {
        console.error('Failed to load Pyodide:', err);
        setError('Falha ao carregar o ambiente Python.');
        setLoading(false);
      }
    }
    load();
  }, []);

  const runCode = useCallback(async (code: string) => {
    if (!pyodide) return { output: null, error: 'Pyodide não carregado' };

    try {
      // Capturar stdout
      await pyodide.runPythonAsync(`
import sys
import io
sys.stdout = io.StringIO()
      `);
      
      await pyodide.runPythonAsync(code);
      
      const stdout = await pyodide.runPythonAsync('sys.stdout.getvalue()');
      return { output: stdout as string, error: null };
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      return { output: null, error: errorMessage };
    }
  }, [pyodide]);

  return { pyodide, loading, error, runCode };
}
