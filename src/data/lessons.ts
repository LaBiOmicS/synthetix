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
  // --- FASE 1: FUNDAMENTOS DO PYTHON (ZERO AO AVANÇADO) ---

  // Módulo 1: Introdução e Tipos Primitivos
  {
    id: 'core-1',
    module: '1. Primeiros Passos',
    title: 'A Função Print',
    theory: 'Toda jornada em Python começa com a saída de dados. A função print() exibe informações no console. Tente exibir "Synthetix Ativado".',
    initialCode: 'print("")',
    testCode: 'import sys\nassert "Synthetix Ativado" in sys.stdout.getvalue()',
    xp: 10,
    dependencies: []
  },
  {
    id: 'core-2',
    module: '1. Primeiros Passos',
    title: 'Variáveis e Números',
    theory: 'Variáveis armazenam dados. Em Python, usamos o sinal de = para atribuição. Crie duas variáveis, a = 10 e b = 20, e uma terceira c que seja a soma das duas.',
    initialCode: 'a = 10\n# Defina b e c\n',
    testCode: 'assert b == 20 and c == 30',
    xp: 15,
    dependencies: []
  },
  {
    id: 'core-3',
    module: '2. Estruturas de Dados',
    title: 'Listas: O Poder das Coleções',
    theory: 'Listas são coleções ordenadas e mutáveis. Elas podem conter qualquer tipo de dado. Adicione o número 42 à lista dada usando o método .append().',
    initialCode: 'minha_lista = [1, 2, 3]\n# Adicione o 42 aqui\n',
    testCode: 'assert minha_lista == [1, 2, 3, 42]',
    xp: 20,
    dependencies: []
  },
  {
    id: 'core-4',
    module: '2. Estruturas de Dados',
    title: 'Dicionários (Chave-Valor)',
    theory: 'Dicionários mapeiam chaves a valores. São extremamente rápidos para busca. Crie um dicionário chamado "precos" onde "maça" custa 5 e "banana" custa 3.',
    initialCode: 'precos = {}',
    testCode: 'assert precos["maça"] == 5 and precos["banana"] == 3',
    xp: 25,
    dependencies: []
  },

  // Módulo 3: Controle de Fluxo
  {
    id: 'core-5',
    module: '3. Controle de Fluxo',
    title: 'Condicionais if/else',
    theory: 'Decisões no código! Verifique se a idade é maior ou igual a 18. Se for, imprima "Adulto", caso contrário, "Menor".',
    initialCode: 'idade = 20\n# Escreva seu if aqui',
    testCode: 'import sys\noutput = sys.stdout.getvalue()\nassert "Adulto" in output',
    xp: 30,
    dependencies: []
  },
  {
    id: 'core-6',
    module: '3. Controle de Fluxo',
    title: 'Loops de Repetição',
    theory: 'Use o loop for e a função range() para somar todos os números de 0 a 9 em uma variável chamada "total".',
    initialCode: 'total = 0\n# Escreva o loop aqui',
    testCode: 'assert total == sum(range(10))',
    xp: 35,
    dependencies: []
  },

  // Módulo 4: Funções e Modularização
  {
    id: 'core-7',
    module: '4. Funções e Escopo',
    title: 'Definindo Funções',
    theory: 'Funções evitam repetição de código. Crie uma função chamada "saudacao" que recebe um nome e retorna "Olá, {nome}!".',
    initialCode: 'def saudacao(nome):\n    return f""',
    testCode: 'assert saudacao("Ana") == "Olá, Ana!"',
    xp: 40,
    dependencies: []
  },

  // Módulo 5: Programação Orientada a Objetos
  {
    id: 'core-8',
    module: '5. Orientação a Objetos',
    title: 'Classes e Atributos',
    theory: 'POO permite modelar o mundo real. Crie uma classe "Robo" com um atributo "nome" definido no método __init__.',
    initialCode: 'class Robo:\n    def __init__(self, nome):\n        pass',
    testCode: 'r = Robo("R2D2")\nassert r.nome == "R2D2"',
    xp: 60,
    dependencies: []
  },

  // Módulo 6: Python Avançado
  {
    id: 'core-9',
    module: '6. Python Pro',
    title: 'List Comprehensions',
    theory: 'Crie uma lista "pares" que contenha os números pares de 0 a 20 usando apenas uma linha de código.',
    initialCode: 'pares = []',
    testCode: 'assert pares == [x for x in range(21) if x % 2 == 0]',
    xp: 70,
    dependencies: []
  },

  // --- FASE 2: BIBLIOTECAS E ECOSSISTEMA ---

  // Módulo: NumPy (Processamento Numérico)
  {
    id: 'lib-1',
    module: '7. Biblioteca NumPy',
    title: 'Arrays Matemáticos',
    theory: 'NumPy é a base da Ciência de Dados. Converta a lista Python em um array NumPy e calcule a soma.',
    initialCode: 'import numpy as np\nlista = [10, 20, 30]\narr = np.array(lista)\nsoma = 0 # Calcule a soma do array',
    testCode: 'import numpy as np\nassert isinstance(arr, np.ndarray) and soma == 60',
    xp: 50,
    dependencies: ['numpy']
  },

  // Módulo: Pandas (Análise de Dados)
  {
    id: 'lib-2',
    module: '8. Biblioteca Pandas',
    title: 'DataFrames',
    theory: 'Pandas é o Excel do Python. Crie um DataFrame a partir do dicionário "dados" e mostre a média da coluna "valor".',
    initialCode: 'import pandas as pd\ndados = {"A": [1, 2, 3], "B": [4, 5, 6]}\ndf = pd.DataFrame(dados)\nmedia = 0 # Calcule a média da coluna A',
    testCode: 'import pandas as pd\nassert media == 2.0',
    xp: 60,
    dependencies: ['pandas']
  }
];
