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
  // Módulo 1: Fundamentos
  {
    id: 'f-1',
    module: 'Fundamentos',
    title: 'O Início de Tudo',
    theory: 'Python é uma linguagem de alto nível, interpretada e de tipagem dinâmica. Comece aprendendo a exibir informações usando a função `print()`. Imprima a mensagem "Mundo, aqui vou eu!".',
    initialCode: '# Use a função print\n',
    testCode: 'import sys\nassert "Mundo, aqui vou eu!" in sys.stdout.getvalue()',
    xp: 10,
    dependencies: []
  },
  {
    id: 'f-2',
    module: 'Fundamentos',
    title: 'Memória e Variáveis',
    theory: 'Variáveis são nomes que apontam para valores na memória. Em Python, não precisamos declarar o tipo. Crie uma variável chamada `idade` e atribua o valor 25.',
    initialCode: '# Crie a variável aqui\n',
    testCode: 'assert idade == 25',
    xp: 15,
    dependencies: []
  },
  // Módulo 2: Controle de Fluxo
  {
    id: 'c-1',
    module: 'Controle de Fluxo',
    title: 'Tomada de Decisão (if/else)',
    theory: 'O comando `if` permite que o código tome decisões. Verifique se o valor de `x` é maior que 10 e imprima "Maior".',
    initialCode: 'x = 15\n# Escreva o bloco if aqui\n',
    testCode: 'import sys\nassert "Maior" in sys.stdout.getvalue()',
    xp: 25,
    dependencies: []
  },
  {
    id: 'c-2',
    module: 'Controle de Fluxo',
    title: 'A Força do Loop (for)',
    theory: 'Loops servem para repetir tarefas. Use um loop `for` e a função `range(5)` para imprimir os números de 0 a 4.',
    initialCode: '# Escreva o loop aqui\n',
    testCode: 'import sys\noutput = sys.stdout.getvalue()\nassert all(str(i) in output for i in range(5))',
    xp: 30,
    dependencies: []
  },
  // Módulo 3: Avançado
  {
    id: 'a-1',
    module: 'Python Avançado',
    title: 'List Comprehensions',
    theory: 'Uma forma elegante de criar listas. Crie uma lista chamada `quadrados` que contenha o quadrado de cada número de 0 a 9.',
    initialCode: '# Use list comprehension\n',
    testCode: 'assert quadrados == [x**2 for x in range(10)]',
    xp: 50,
    dependencies: []
  },
  {
    id: 'a-2',
    module: 'Python Avançado',
    title: 'Decoradores',
    theory: 'Decoradores são funções que modificam o comportamento de outras funções. Eles são fundamentais em frameworks modernos.',
    initialCode: 'def meu_decorador(func):\n    def envelope():\n        print("Algo antes")\n        func()\n        print("Algo depois")\n    return envelope\n\n@meu_decorador\ndef diga_oi():\n    print("Oi!")\n\ndiga_oi()',
    testCode: 'import sys\noutput = sys.stdout.getvalue()\nassert "Algo antes" in output and "Oi!" in output',
    xp: 100,
    dependencies: []
  }
];
