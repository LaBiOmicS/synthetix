import type { Lesson } from '../types';

export const level9: Lesson[] = [
  {
    id: 'lvl9-p1',
    module: 'Nível 9: Projeto Final',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'arquitetura e persistência',
    badge: 'Arquiteto de Software',
    title: '🛠️ PROJETO: Agenda Sistêmica',
    theory: 'Arquitetura Final! 1. Model: Classe `Contato` (@dataclass). 2. Controller: Classe `Agenda` que encapsula o CRUD. 3. Persistência: Método `salvar_json()` que usa a lib `json` para gravar em arquivo. O mentor IA vai guiar a estrutura.',
    initialCode: 'import json\nfrom dataclasses import dataclass, asdict\n\n@dataclass\nclass Contato:\n    nome: str\n    tel: str\n\nclass Agenda:\n    # ... seu CRUD estruturado e persistente aqui ...',
    testCode: 'import json\na = Agenda()\na.adicionar(Contato("Carlos", "999"))\nassert "Carlos" in a.salvar_json()',
    xp: 500,
    dependencies: ['lvl8-e1-c10']
  }
];
