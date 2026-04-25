import { createContext, useContext, useState, type ReactNode } from 'react';

interface AIContextType {
  apiKey: string | null;
  setApiKey: (key: string) => void;
  isConfigured: boolean;
}

const AIContext = createContext<AIContextType | undefined>(undefined);

export function AIProvider({ children }: { children: ReactNode }) {
  const [apiKey, setApiKey] = useState<string | null>(() => localStorage.getItem('gemini_api_key'));

  const handleSetApiKey = (key: string) => {
    setApiKey(key);
    localStorage.setItem('gemini_api_key', key);
  };

  return (
    <AIContext.Provider value={{ apiKey, setApiKey: handleSetApiKey, isConfigured: !!apiKey }}>
      {children}
    </AIContext.Provider>
  );
}

export const useAI = () => {
  const context = useContext(AIContext);
  if (!context) throw new Error('useAI must be used within AIProvider');
  return context;
};
