import React from 'react';
import { Loader2 } from 'lucide-react';

export function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white p-4">
      <Loader2 className="w-12 h-12 animate-spin text-blue-500 mb-4" />
      <h1 className="text-2xl font-bold">Carregando ambiente Python...</h1>
      <p className="text-slate-400 mt-2 text-center max-w-md">
        Isso pode levar alguns segundos na primeira vez, pois estamos baixando o WebAssembly do Python.
      </p>
    </div>
  );
}
