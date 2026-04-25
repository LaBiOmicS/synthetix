export interface Lesson {
  id: string;
  title: string;
  module: string;
  theory: string;
  initialCode: string;
  testCode: string;
  xp: number;
  dependencies: string[];
}

export const lessons: Lesson[] = [
  // --- MÓDULO 1: FUNDAMENTOS E ARQUITETURA ---
  {
    id: 'f-1',
    module: '01. Arquitetura Python',
    title: 'Dinâmica e Objetos',
    theory: 'Em Python, TUDO é um objeto. Quando você cria `x = 10`, você está criando um objeto do tipo `int` e uma referência chamada `x`. Use a função `id()` para descobrir o endereço de memória de uma variável e `type()` para seu tipo. Desafio: crie uma variável `a` com valor 5 e uma variável `b` que aponte para o mesmo ID de `a`.',
    initialCode: 'a = 5\nb = # Faça b apontar para a',
    testCode: 'assert a == 5 and b == 5 and id(a) == id(b)',
    xp: 20,
    dependencies: []
  },
  {
    id: 'f-2',
    module: '01. Arquitetura Python',
    title: 'Imutabilidade de Inteiros',
    theory: 'Python pré-aloca inteiros pequenos (interning) entre -5 e 256 para performance. Se você criar duas variáveis com valor 100, elas terão o mesmo ID. Mas e se for 300? Verifique se `x` e `y` com valor 300 são o mesmo objeto usando o operador `is`.',
    initialCode: 'x = 300\ny = 300\niguais = # use o operador is',
    testCode: 'assert iguais == (x is y)',
    xp: 30,
    dependencies: []
  },

  // --- MÓDULO 2: STRINGS E MANIPULAÇÃO DE DADOS ---
  {
    id: 's-1',
    module: '02. Strings Avançadas',
    title: 'F-Strings e Formatação',
    theory: 'F-Strings não são apenas para imprimir variáveis. Elas permitem executar expressões e formatar números. Formate o número `pi = 3.14159` para ter apenas 2 casas decimais dentro de uma f-string na variável `resultado`.',
    initialCode: 'pi = 3.14159\nresultado = f""',
    testCode: 'assert resultado == "3.14"',
    xp: 25,
    dependencies: []
  },
  {
    id: 's-2',
    module: '02. Strings Avançadas',
    title: 'Slicing Profissional',
    theory: 'O slicing `[start:stop:step]` é uma das ferramentas mais poderosas do Python. Dada a string "PythonRockstar", extraia apenas a palavra "nohtyP" (Python invertido) usando apenas slicing.',
    initialCode: 's = "PythonRockstar"\ninvertido = # use slicing',
    testCode: 'assert invertido == "nohtyP"',
    xp: 40,
    dependencies: []
  },

  // --- MÓDULO 3: LÓGICA E ESTRUTURAS ---
  {
    id: 'l-1',
    module: '03. Estruturas de Dados',
    title: 'List Methods vs Slicing',
    theory: 'Adicionar elementos no final de uma lista (`.append()`) é O(1), mas inserir no início (`.insert(0, x)`) é O(n). Remova o último elemento da lista `dados` e adicione-o no início sem usar métodos, apenas concatenação e slicing.',
    initialCode: 'dados = [1, 2, 3, 4, 5]\n# Reorganize dados',
    testCode: 'assert dados == [5, 1, 2, 3, 4]',
    xp: 50,
    dependencies: []
  },
  {
    id: 'l-2',
    module: '03. Estruturas de Dados',
    title: 'Deep Copy vs Shallow Copy',
    theory: 'Ao copiar listas aninhadas, `list.copy()` cria apenas uma cópia rasa. Se você mudar um sub-item na cópia, ele muda na original. Use o módulo `copy` para criar uma `deepcopy` de `lista_a` em `lista_b`.',
    initialCode: 'import copy\nlista_a = [[1, 2], [3, 4]]\nlista_b = # deepcopy aqui',
    testCode: 'import copy\nlista_b[0][0] = 99\nassert lista_a[0][0] == 1',
    xp: 60,
    dependencies: []
  },

  // --- MÓDULO 4: FUNÇÕES E FUNCIONAL ---
  {
    id: 'fn-1',
    module: '04. Funções Ninja',
    title: 'Args e Kwargs',
    theory: 'Funções flexíveis usam `*args` (tupla de argumentos posicionais) e `**kwargs` (dicionário de argumentos nomeados). Crie uma função `multi_soma` que some todos os números passados como argumentos posicionais.',
    initialCode: 'def multi_soma(*args):\n    pass',
    testCode: 'assert multi_soma(1, 2, 3, 4) == 10 and multi_soma(10, 20) == 30',
    xp: 50,
    dependencies: []
  },

  // --- MÓDULO 5: POO E ENGENHARIA ---
  {
    id: 'poo-1',
    module: '05. POO Avançada',
    title: 'Métodos Dunder (Mágicos)',
    theory: 'Métodos como `__str__`, `__repr__` e `__add__` permitem que suas classes se comportem como tipos nativos. Implemente o método `__len__` na classe `Playlist` para que `len(playlist)` retorne o número de músicas.',
    initialCode: 'class Playlist:\n    def __init__(self, musicas):\n        self.musicas = musicas\n    # Implemente __len__',
    testCode: 'p = Playlist(["Song 1", "Song 2"])\nassert len(p) == 2',
    xp: 80,
    dependencies: []
  }
];
