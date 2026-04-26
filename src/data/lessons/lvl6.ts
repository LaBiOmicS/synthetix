import type { Lesson } from '../types';

export const level6: Lesson[] = [
  {
    id: 'lvl6-e1-c1',
    module: 'Nível 6: O Modelo do Mundo',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'classe',
    title: 'Etapa 1: Definindo o Molde',
    theory: 'Classes são como moldes para objetos. Use a palavra `class` para criar uma classe vazia chamada `Usuario`.',
    initialCode: 'class Usuario:\n    pass',
    testCode: 'assert Usuario() is not None',
    xp: 30,
    dependencies: []
  },
  {
    id: 'lvl6-e1-c2',
    module: 'Nível 6: O Modelo do Mundo',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'instanciação',
    title: 'Etapa 2: Criando o Objeto',
    theory: 'Agora que temos o molde `Usuario`, crie uma instância dele chamada `user1`.',
    initialCode: 'class Usuario:\n    pass\nuser1 = ',
    testCode: 'assert isinstance(user1, Usuario)',
    xp: 30,
    dependencies: []
  },
  {
    id: 'lvl6-e2-c1',
    module: 'Nível 6: O Modelo do Mundo',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'construtor init',
    title: 'Etapa 3: O Construtor',
    theory: 'O método `__init__` é chamado ao criar o objeto. Ele inicializa os atributos. Adicione `self.nome` ao `__init__`.',
    initialCode: 'class Usuario:\n    def __init__(self, nome):\n        self.nome = nome',
    testCode: 'u = Usuario("Ana")\nassert u.nome == "Ana"',
    xp: 40,
    dependencies: []
  },
  {
    id: 'lvl6-e2-c2',
    module: 'Nível 6: O Modelo do Mundo',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'método de instância',
    title: 'Etapa 4: Ensinando Ações',
    theory: 'Métodos são funções dentro de classes. Adicione um método `dizer_ola(self)` que retorne "Olá!".',
    initialCode: 'class Usuario:\n    def __init__(self, nome):\n        self.nome = nome\n    def dizer_ola(self):\n        return "Olá!"',
    testCode: 'u = Usuario("Ana")\nassert u.dizer_ola() == "Olá!"',
    xp: 40,
    dependencies: []
  },
  {
    id: 'lvl6-e3-c1',
    module: 'Nível 6: O Modelo do Mundo',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'acesso a atributos',
    title: 'Etapa 5: O `self` em Ação',
    theory: 'O `self` referencia o objeto atual. Use-o para acessar o nome do usuário no método `apresentar`.',
    initialCode: 'class Usuario:\n    def __init__(self, nome):\n        self.nome = nome\n    def apresentar(self):\n        return f"Eu sou {self.nome}"',
    testCode: 'u = Usuario("Pedro")\nassert u.apresentar() == "Eu sou Pedro"',
    xp: 40,
    dependencies: []
  },
  {
    id: 'lvl6-e3-c2',
    module: 'Nível 6: O Modelo do Mundo',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'múltiplos atributos',
    title: 'Etapa 6: O Objeto Complexo',
    theory: 'Um objeto pode ter vários atributos. Adicione `self.idade` ao `__init__` da classe `Usuario`.',
    initialCode: 'class Usuario:\n    def __init__(self, nome, idade):\n        self.nome = nome\n        # adicione idade',
    testCode: 'u = Usuario("Ana", 25)\nassert u.idade == 25',
    xp: 45,
    dependencies: []
  },
  {
    id: 'lvl6-e4-c1',
    module: 'Nível 6: O Modelo do Mundo',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'modificação de estado',
    title: 'Etapa 7: Mudando o Estado',
    theory: 'Objetos podem mudar seus valores internos. Adicione um método `aniversario(self)` que incrementa a `idade`.',
    initialCode: 'class Usuario:\n    def __init__(self, nome, idade):\n        self.nome = nome\n        self.idade = idade\n    def aniversario(self):\n        # incremente idade',
    testCode: 'u = Usuario("Ana", 25)\nu.aniversario()\nassert u.idade == 26',
    xp: 50,
    dependencies: []
  },
  {
    id: 'lvl6-e4-c2',
    module: 'Nível 6: O Modelo do Mundo',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'listas de objetos',
    title: 'Etapa 8: Coleção de Objetos',
    theory: 'Você pode ter uma lista cheia de objetos! Crie uma lista `usuarios` com duas instâncias da classe `Usuario`.',
    initialCode: 'class Usuario:\n    def __init__(self, nome):\n        self.nome = nome\nusuarios = [Usuario("A"), Usuario("B")]',
    testCode: 'assert len(usuarios) == 2 and usuarios[0].nome == "A"',
    xp: 50,
    dependencies: []
  },
  {
    id: 'lvl6-e5-c1',
    module: 'Nível 6: O Modelo do Mundo',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'interação entre objetos',
    title: 'Etapa 9: Objetos Colaborando',
    theory: 'Um objeto pode usar outro. Crie uma classe `Conta` com `saldo` e um método `transferir(self, valor, destino).',
    initialCode: 'class Conta:\n    def __init__(self, saldo):\n        self.saldo = saldo\n    def transferir(self, valor, destino):\n        self.saldo -= valor\n        destino.saldo += valor',
    testCode: 'c1 = Conta(100)\nc2 = Conta(50)\nc1.transferir(20, c2)\nassert c1.saldo == 80 and c2.saldo == 70',
    xp: 80,
    dependencies: []
  },
  {
    id: 'lvl6-p1',
    module: 'Nível 6: O Modelo do Mundo',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'projeto de modelagem',
    badge: 'Modelador de Objetos',
    title: '🛠️ PROJETO: Sistema de RPG',
    theory: 'Vamos criar um RPG! 1. Classe `Personagem` (nome, vida). 2. Método `atacar(self, outro_personagem)` que reduz a vida do alvo em 10. 3. Crie dois personagens e simule uma batalha.',
    initialCode: 'class Personagem:\n    # Implemente __init__ e atacar\n',
    testCode: 'p1 = Personagem("Heroi", 100)\np2 = Personagem("Monstro", 100)\np1.atacar(p2)\nassert p2.vida == 90',
    xp: 350,
    dependencies: []
  }
];
