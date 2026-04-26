import type { Lesson } from '../types';

export const level7: Lesson[] = [
  {
    id: 'lvl7-e1-c1',
    module: 'Nível 7: POO Avançada',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'herança',
    title: 'Etapa 1: Herança de Poderes',
    theory: 'Herança permite que uma classe "filha" herde atributos e métodos de uma "pai". Crie uma classe `Gato` que herda de `Animal`.',
    initialCode: 'class Animal:\n    def som(self):\n        return "Som genérico"\n\nclass Gato(Animal):\n    pass',
    testCode: 'g = Gato()\nassert g.som() == "Som genérico"',
    xp: 60,
    dependencies: []
  },
  {
    id: 'lvl7-e1-c2',
    module: 'Nível 7: POO Avançada',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'polimorfismo',
    title: 'Etapa 2: Polimorfismo',
    theory: 'Polimorfismo permite que diferentes classes usem o mesmo método de formas diferentes. Sobrescreva o método `som` na classe `Gato`.',
    initialCode: 'class Animal:\n    def som(self): return "..."\n\nclass Gato(Animal):\n    # sobrescreva aqui',
    testCode: 'g = Gato()\nassert g.som() == "Miau"',
    xp: 60,
    dependencies: []
  },
  {
    id: 'lvl7-e2-c1',
    module: 'Nível 7: POO Avançada',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'encapsulamento',
    title: 'Etapa 3: Dados Privados',
    theory: 'Use `__` antes do nome do atributo para torná-lo privado (ex: `__senha`). Tente acessar `self.__segredo` e veja que ele fica escondido.',
    initialCode: 'class Cofre:\n    def __init__(self):\n        self.__segredo = 1234\n\nc = Cofre()\n# O que acontece se acessar c.__segredo?',
    testCode: 'assert "segredo" not in dir(c)',
    xp: 70,
    dependencies: []
  },
  {
    id: 'lvl7-e2-c2',
    module: 'Nível 7: POO Avançada',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'property decorator',
    title: 'Etapa 4: Getters e Setters',
    theory: 'O `@property` permite tratar métodos como atributos. Crie uma propriedade `nome_formatado` que retorna o nome em maiúsculas.',
    initialCode: 'class Usuario:\n    def __init__(self, nome):\n        self._nome = nome\n    @property\n    def nome_formatado(self):',
    testCode: 'u = Usuario("ana")\nassert u.nome_formatado == "ANA"',
    xp: 70,
    dependencies: []
  },
  {
    id: 'lvl7-e3-c1',
    module: 'Nível 7: POO Avançada',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'class method',
    title: 'Etapa 5: O Método de Classe',
    theory: '`@classmethod` recebe a classe (`cls`) em vez da instância (`self`). Crie um método de fábrica para criar usuários com nome "Anonimo".',
    initialCode: 'class Usuario:\n    def __init__(self, nome):\n        self.nome = nome\n    @classmethod\n    def criar_anonimo(cls):\n        return cls("Anonimo")',
    testCode: 'u = Usuario.criar_anonimo()\nassert u.nome == "Anonimo"',
    xp: 80,
    dependencies: []
  },
  {
    id: 'lvl7-e3-c2',
    module: 'Nível 7: POO Avançada',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'static method',
    title: 'Etapa 6: Método Estático',
    theory: '`@staticmethod` não precisa de `self` nem `cls`. É uma função solta dentro de uma classe. Crie um utilitário de validação de email.',
    initialCode: 'class Validador:\n    @staticmethod\n    def eh_email(texto):\n        return "@" in texto',
    testCode: 'assert Validador.eh_email("teste@teste.com") is True',
    xp: 60,
    dependencies: []
  },
  {
    id: 'lvl7-e4-c1',
    module: 'Nível 7: POO Avançada',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'super',
    title: 'Etapa 7: A Função super()',
    theory: '`super()` chama métodos da classe pai. Na classe `Cachorro`, chame `super().__init__(nome)` para inicializar o pai.',
    initialCode: 'class Animal:\n    def __init__(self, nome): self.nome = nome\n\nclass Cachorro(Animal):\n    def __init__(self, nome, raca):\n        super().__init__(nome)\n        self.raca = raca',
    testCode: 'c = Cachorro("Rex", "Labrador")\nassert c.nome == "Rex" and c.raca == "Labrador"',
    xp: 80,
    dependencies: []
  },
  {
    id: 'lvl7-e4-c2',
    module: 'Nível 7: POO Avançada',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'abstração',
    title: 'Etapa 8: Classes Abstratas',
    theory: 'Classes abstratas forçam filhos a implementar métodos. Use `ABC` e `@abstractmethod`. Tente implementar o método `area`.',
    initialCode: 'from abc import ABC, abstractmethod\nclass Forma(ABC):\n    @abstractmethod\n    def area(self): pass\n\nclass Quadrado(Forma):\n    def __init__(self, lado): self.lado = lado\n    # Implemente area',
    testCode: 'q = Quadrado(4)\nassert q.area() == 16',
    xp: 90,
    dependencies: []
  },
  {
    id: 'lvl7-e4-c3',
    module: 'Nível 7: POO Avançada',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'composição',
    title: 'Etapa 9: Composição sobre Herança',
    theory: 'Composição é ter um objeto dentro de outro. Crie uma classe `Carro` que contém uma instância de `Motor`.',
    initialCode: 'class Motor:\n    def ligar(self): return "Vrum!"\n\nclass Carro:\n    def __init__(self):\n        self.motor = Motor()',
    testCode: 'c = Carro()\nassert c.motor.ligar() == "Vrum!"',
    xp: 80,
    dependencies: []
  },
  {
    id: 'lvl7-p1',
    module: 'Nível 7: POO Avançada',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'projeto de arquitetura',
    badge: 'Arquiteto de Elite',
    title: '🛠️ PROJETO: Loja de Software',
    theory: 'Simule um sistema de produtos! 1. Classe base `Produto` (nome, preco). 2. Classe `Livro` herdando de `Produto` (adicionando autor). 3. Use `@property` para aplicar um desconto no preço.',
    initialCode: 'class Produto:\n    # ...\n\nclass Livro(Produto):\n    # ...',
    testCode: 'l = Livro("Python Guia", 100, "Autor X")\nl.aplicar_desconto(10)\nassert l.preco_final == 90',
    xp: 400,
    dependencies: []
  }
];
