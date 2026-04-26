import type { Lesson } from '../types';

export const level9: Lesson[] = [
  {
    id: 'lvl9-p1',
    module: 'Nível 9: Projeto Final',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'arquitetura de software',
    badge: 'Mestre do CRUD',
    title: '🛠️ PROJETO: Agenda Sistêmica',
    theory: 'Vamos arquitetar o sistema! 1. Model: A classe Agenda com o CRUD que criamos. 2. Persistência: Método `salvar_json` usando `json` para gravar em arquivo. 3. Controller: Um loop principal que pergunta ao usuário o que fazer (Adicionar, Listar, Sair).',
    initialCode: 'import json\n\nclass Agenda:\n    # ... seu CRUD aqui ...\n\n# Loop principal de controle',
    testCode: 'import json\na = Agenda()\na.adicionar("Carlos")\nassert "Carlos" in a.salvar_json()',
    xp: 600,
    dependencies: ['lvl8-e1-c4']
  }
];
