import type { Lesson } from '../types';

export const level8: Lesson[] = [
  // --- NÍVEL 8: O CICLO DE VIDA DO CRUD ---
  {
    id: 'lvl8-e1-c1',
    module: 'Nível 8: O Ciclo de Vida CRUD',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'create',
    title: 'Etapa 1: Create Básico',
    theory: 'Crie uma classe Agenda e um método adicionar() que coloca um dict na lista.',
    initialCode: 'class Agenda:\n    def __init__(self):\n        self.contatos = []\n    def adicionar(self, nome, tel):\n        # crie dict e adicione',
    testCode: 'a = Agenda()\na.adicionar("Ana", "123")\nassert a.contatos[0] == {"nome": "Ana", "tel": "123"}',
    xp: 40,
    dependencies: []
  },
  {
    id: 'lvl8-e1-c2',
    module: 'Nível 8: O Ciclo de Vida CRUD',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'create validado',
    title: 'Etapa 2: Create com Validação',
    theory: 'Não aceite contatos sem telefone. Se len(tel) < 5, não adicione.',
    initialCode: 'class Agenda:\n    def __init__(self):\n        self.contatos = []\n    def adicionar(self, nome, tel):\n        # valide o tel',
    testCode: 'a = Agenda()\na.adicionar("Ana", "12")\nassert len(a.contatos) == 0',
    xp: 50,
    dependencies: []
  },
  {
    id: 'lvl8-e1-c3',
    module: 'Nível 8: O Ciclo de Vida CRUD',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'read',
    title: 'Etapa 3: Listando Tudo',
    theory: 'Crie um método `listar()` que imprime todos os contatos da lista.',
    initialCode: 'class Agenda:\n    def __init__(self):\n        self.contatos = [{"nome": "Ana", "tel": "123"}]\n    def listar(self):\n        # print todos',
    testCode: 'import sys\na = Agenda()\na.listar()\nassert "Ana" in sys.stdout.getvalue()',
    xp: 40,
    dependencies: []
  },
  {
    id: 'lvl8-e1-c4',
    module: 'Nível 8: O Ciclo de Vida CRUD',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'read avançado',
    title: 'Etapa 4: Busca por Nome',
    theory: 'Encontre um contato pelo nome exato.',
    initialCode: 'class Agenda:\n    def __init__(self):\n        self.contatos = [{"nome": "Ana", "tel": "123"}]\n    def buscar(self, nome):\n        # return o contato ou None',
    testCode: 'a = Agenda()\nassert a.buscar("Ana")["tel"] == "123"',
    xp: 50,
    dependencies: []
  },
  {
    id: 'lvl8-e1-c5',
    module: 'Nível 8: O Ciclo de Vida CRUD',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'update',
    title: 'Etapa 5: Atualizando Telefone',
    theory: 'Encontre o contato pelo nome e altere seu telefone.',
    initialCode: 'class Agenda:\n    def __init__(self):\n        self.contatos = [{"nome": "Ana", "tel": "123"}]\n    def editar(self, nome, novo_tel):\n        # ache e altere',
    testCode: 'a = Agenda()\na.editar("Ana", "999")\nassert a.contatos[0]["tel"] == "999"',
    xp: 60,
    dependencies: []
  },
  {
    id: 'lvl8-e1-c6',
    module: 'Nível 8: O Ciclo de Vida CRUD',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'delete',
    title: 'Etapa 6: Removendo Contato',
    theory: 'Remova um contato pelo nome.',
    initialCode: 'class Agenda:\n    def __init__(self):\n        self.contatos = [{"nome": "Ana"}]\n    def remover(self, nome):\n        # remova da lista',
    testCode: 'a = Agenda()\na.remover("Ana")\nassert len(a.contatos) == 0',
    xp: 60,
    dependencies: []
  },
  {
    id: 'lvl8-e1-c7',
    module: 'Nível 8: O Ciclo de Vida CRUD',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'tratamento de erros',
    title: 'Etapa 7: Tratando Erros no Delete',
    theory: 'Se o nome não existir no remover, imprima "Contato não encontrado".',
    initialCode: 'class Agenda:\n    def __init__(self):\n        self.contatos = []\n    def remover(self, nome):\n        # trate o erro',
    testCode: 'import sys\na = Agenda()\na.remover("Ana")\nassert "não encontrado" in sys.stdout.getvalue()',
    xp: 70,
    dependencies: []
  },
  {
    id: 'lvl8-e1-c8',
    module: 'Nível 8: O Ciclo de Vida CRUD',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'dataclasses',
    title: 'Etapa 8: Refatorando com DataClass',
    theory: 'Use `@dataclass` para estruturar o Contato.',
    initialCode: 'from dataclasses import dataclass\n@dataclass\nclass Contato:\n    nome: str\n    tel: str',
    testCode: 'c = Contato("Ana", "123")\nassert c.nome == "Ana"',
    xp: 80,
    dependencies: []
  },
  {
    id: 'lvl8-e1-c9',
    module: 'Nível 8: O Ciclo de Vida CRUD',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'crud com objetos',
    title: 'Etapa 9: CRUD com Objetos',
    theory: 'Agora a agenda guarda objetos `Contato` em vez de dicionários.',
    initialCode: 'class Agenda:\n    def __init__(self):\n        self.contatos = []\n    def adicionar(self, c: Contato):\n        self.contatos.append(c)',
    testCode: 'a = Agenda()\na.adicionar(Contato("Ana", "123"))\nassert isinstance(a.contatos[0], Contato)',
    xp: 80,
    dependencies: []
  },
  {
    id: 'lvl8-e1-c10',
    module: 'Nível 8: O Ciclo de Vida CRUD',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'desafio final',
    title: 'Etapa 10: O Mestre do CRUD',
    theory: 'Refatore o buscar para retornar o objeto Contato e não o dicionário.',
    initialCode: 'def buscar(self, nome):\n    # retorne o objeto Contato',
    testCode: 'a = Agenda()\na.adicionar(Contato("Ana", "123"))\nassert a.buscar("Ana").tel == "123"',
    xp: 100,
    dependencies: []
  }
];
