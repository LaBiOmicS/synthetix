import type { Lesson } from '../types';

export const level8: Lesson[] = [
  {
    id: 'lvl8-e1-c1',
    module: 'Nível 8: O Ciclo de Vida CRUD',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'create',
    title: 'Etapa 1: Create (Criando)',
    theory: 'CRUD começa com o Create. Vamos criar uma classe `Agenda` e um método `adicionar(contato)` que coloca um contato na lista.',
    initialCode: 'class Agenda:\n    def __init__(self):\n        self.contatos = []\n    def adicionar(self, nome):\n        # adicione nome na lista',
    testCode: 'a = Agenda()\na.adicionar("Ana")\nassert a.contatos == ["Ana"]',
    xp: 60,
    dependencies: []
  },
  {
    id: 'lvl8-e1-c2',
    module: 'Nível 8: O Ciclo de Vida CRUD',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'read',
    title: 'Etapa 2: Read (Lendo)',
    theory: 'O Read busca dados. Crie um método `listar()` que retorna a lista de contatos.',
    initialCode: 'class Agenda:\n    def __init__(self):\n        self.contatos = ["Ana", "Bia"]\n    def listar(self):\n        # retorne a lista',
    testCode: 'a = Agenda()\nassert a.listar() == ["Ana", "Bia"]',
    xp: 60,
    dependencies: []
  },
  {
    id: 'lvl8-e1-c3',
    module: 'Nível 8: O Ciclo de Vida CRUD',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'update',
    title: 'Etapa 3: Update (Atualizando)',
    theory: 'O Update altera dados. Crie um método `editar(antigo, novo)` que troca o nome antigo pelo novo na lista.',
    initialCode: 'class Agenda:\n    def __init__(self):\n        self.contatos = ["Ana"]\n    def editar(self, antigo, novo):\n        # troque o nome',
    testCode: 'a = Agenda()\na.editar("Ana", "Beatriz")\nassert a.contatos == ["Beatriz"]',
    xp: 80,
    dependencies: []
  },
  {
    id: 'lvl8-e1-c4',
    module: 'Nível 8: O Ciclo de Vida CRUD',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'delete',
    title: 'Etapa 4: Delete (Removendo)',
    theory: 'O Delete remove dados. Crie um método `remover(nome)` que retira o nome da lista.',
    initialCode: 'class Agenda:\n    def __init__(self):\n        self.contatos = ["Ana", "Bia"]\n    def remover(self, nome):\n        # remova',
    testCode: 'a = Agenda()\na.remover("Ana")\nassert a.contatos == ["Bia"]',
    xp: 80,
    dependencies: []
  }
];
