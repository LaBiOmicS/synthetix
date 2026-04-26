import type { Lesson } from '../types';

export const level9: Lesson[] = [
  {
    id: 'lvl9-p1',
    module: 'Nível 9: Projeto Final',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'persistência de dados',
    badge: 'Mestre do CRUD',
    title: '🛠️ PROJETO FINAL: Agenda Sistêmica',
    theory: 'Hora de unir tudo! 1. Crie a classe `Agenda`. 2. Implemente o CRUD. 3. Adicione um método `salvar()` que usa `json.dumps()` para converter a lista em string (simulando salvar num arquivo).',
    initialCode: 'import json\n\nclass Agenda:\n    def __init__(self):\n        self.contatos = []\n    # Implemente CRUD e salvar()\n',
    testCode: 'import json\na = Agenda()\na.adicionar("Carlos")\nassert "Carlos" in a.salvar()',
    xp: 600,
    dependencies: ['lvl8-e1-c4']
  }
];
