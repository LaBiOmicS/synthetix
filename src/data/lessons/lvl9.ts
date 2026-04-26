import type { Lesson } from '../types';

export const level9: Lesson[] = [
  {
    id: 'lvl9-p1',
    module: 'Nível 9: Projeto Final',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'persistência e arquitetura',
    badge: 'Arquiteto de Elite',
    title: '🛠️ PROJETO: Agenda Sistêmica',
    theory: 'Hora de unir tudo! 1. Model: Classe `Contato` (@dataclass). 2. Controller: Classe `Agenda` que gerencia uma lista de contatos. 3. Persistência: Método `salvar()` que converte seus objetos para JSON. O Mentor IA vai guiar a estrutura.',
    initialCode: 'import json\nfrom dataclasses import dataclass, asdict\n\n@dataclass\nclass Contato:\n    nome: str\n    telefone: str\n\nclass Agenda:\n    # ... seu CRUD estruturado aqui ...\n',
    testCode: 'import json\na = Agenda()\na.adicionar(Contato("Carlos", "999"))\nassert "Carlos" in a.salvar()',
    xp: 600,
    dependencies: ['lvl8-e2-c2']
  }
];
