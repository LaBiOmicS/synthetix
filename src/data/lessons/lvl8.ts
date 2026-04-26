import type { Lesson } from '../types';

export const level8: Lesson[] = [
  {
    id: 'lvl8-e1-c1',
    module: 'Nível 8: O Ciclo de Vida CRUD',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'create e validação',
    title: 'Etapa 1: Create com Validação',
    theory: 'Não aceite qualquer dado! Valide se o nome tem pelo menos 3 caracteres antes de adicionar na agenda.',
    initialCode: 'class Agenda:\n    def __init__(self):\n        self.contatos = []\n    def adicionar(self, nome):\n        # Se len(nome) >= 3, adicione',
    testCode: 'a = Agenda()\na.adicionar("An")\nassert len(a.contatos) == 0\na.adicionar("Ana")\nassert "Ana" in a.contatos',
    xp: 80,
    dependencies: []
  },
  {
    id: 'lvl8-e1-c2',
    module: 'Nível 8: O Ciclo de Vida CRUD',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'read avançado',
    title: 'Etapa 2: Busca por Padrão',
    theory: 'Em vez de buscar um nome exato, encontre todos os contatos que contenham uma sub-string.',
    initialCode: 'class Agenda:\n    def __init__(self):\n        self.contatos = ["Ana", "Anabela", "Bia"]\n    def buscar(self, termo):\n        # retorne lista com nomes que contêm termo',
    testCode: 'a = Agenda()\nassert "Ana" in a.buscar("An") and "Anabela" in a.buscar("An")',
    xp: 80,
    dependencies: []
  },
  {
    id: 'lvl8-e1-c3',
    module: 'Nível 8: O Ciclo de Vida CRUD',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'tratamento de erro',
    title: 'Etapa 3: Update com Segurança',
    theory: 'O que acontece se você tentar editar um nome que não existe? Use um `if` ou `try` para tratar essa falha.',
    initialCode: 'class Agenda:\n    def __init__(self):\n        self.contatos = ["Ana"]\n    def editar(self, antigo, novo):\n        # se antigo existir na lista, altere, senão retorne False',
    testCode: 'a = Agenda()\nassert a.editar("Bia", "Beatriz") is False',
    xp: 90,
    dependencies: []
  },
  {
    id: 'lvl8-e1-c4',
    module: 'Nível 8: O Ciclo de Vida CRUD',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'delete',
    title: 'Etapa 4: Delete com feedback',
    theory: 'Ao deletar, o sistema deve confirmar se o nome existia. Remova e retorne True, ou False se não encontrar.',
    initialCode: 'class Agenda:\n    def __init__(self):\n        self.contatos = ["Ana"]\n    def remover(self, nome):\n        # remova e retorne o status',
    testCode: 'a = Agenda()\nassert a.remover("Ana") is True and a.remover("Zeca") is False',
    xp: 90,
    dependencies: []
  }
];
