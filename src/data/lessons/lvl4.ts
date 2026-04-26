import type { Lesson } from '../types';

export const level4: Lesson[] = [
  {
    id: 'lvl4-e1-c1',
    module: 'Nível 4: O Arquiteto de Funções',
    phase: 'Fase 1: Fundamentos',
    concept: 'definição de funções',
    title: 'Etapa 1: A Primeira Planta Baixa',
    theory: 'Funções são blocos de código reutilizáveis. Use `def` para criar uma função `ola_mundo` que imprima "Olá, Mundo!".',
    initialCode: 'def ola_mundo():\n    ',
    testCode: 'import sys\nola_mundo()\nassert "Olá, Mundo!" in sys.stdout.getvalue()',
    xp: 20,
    dependencies: []
  },
  {
    id: 'lvl4-e1-c2',
    module: 'Nível 4: O Arquiteto de Funções',
    phase: 'Fase 1: Fundamentos',
    concept: 'retorno de valores',
    title: 'Etapa 2: Devolvendo o Tesouro',
    theory: 'Funções podem devolver valores com `return`. Crie a função `dar_xp` que retorna o número 100.',
    initialCode: 'def dar_xp():\n    ',
    testCode: 'assert dar_xp() == 100',
    xp: 20,
    dependencies: []
  },
  {
    id: 'lvl4-e2-c1',
    module: 'Nível 4: O Arquiteto de Funções',
    phase: 'Fase 1: Fundamentos',
    concept: 'argumentos posicionais',
    title: 'Etapa 3: Argumentos Obrigatórios',
    theory: 'Funções recebem dados via argumentos. Crie `soma(a, b)` que retorne a soma dos dois números.',
    initialCode: 'def soma(a, b):\n    ',
    testCode: 'assert soma(10, 5) == 15',
    xp: 25,
    dependencies: []
  },
  {
    id: 'lvl4-e2-c2',
    module: 'Nível 4: O Arquiteto de Funções',
    phase: 'Fase 1: Fundamentos',
    concept: 'argumentos com valor padrão',
    title: 'Etapa 4: Parâmetros Opcionais',
    theory: 'Defina um valor padrão para um argumento (ex: `saudacao="Olá"`). Crie `saudar(nome, msg="Oi")` que retorne a f-string.',
    initialCode: 'def saudar(nome, msg="Oi"):\n    ',
    testCode: 'assert saudar("Ana") == "Oi, Ana" and saudar("Leo", msg="E aí")',
    xp: 30,
    dependencies: []
  },
  {
    id: 'lvl4-e2-c3',
    module: 'Nível 4: O Arquiteto de Funções',
    phase: 'Fase 1: Fundamentos',
    concept: '*args',
    title: 'Etapa 5: A Caixa de Ferramentas',
    theory: '`*args` permite passar um número variável de argumentos. Crie `media(*numeros)` que calcule a média de todos os números recebidos.',
    initialCode: 'def media(*numeros):\n    ',
    testCode: 'assert media(10, 20, 30) == 20',
    xp: 40,
    dependencies: []
  },
  {
    id: 'lvl4-e3-c1',
    module: 'Nível 4: O Arquiteto de Funções',
    phase: 'Fase 1: Fundamentos',
    concept: 'funções lambda',
    title: 'Etapa 6: O Poder do Lambda',
    theory: 'Lambdas são pequenas funções anônimas. Crie uma lambda chamada `dobro` que recebe `x` e retorna `x * 2`.',
    initialCode: 'dobro = lambda x: ',
    testCode: 'assert dobro(5) == 10',
    xp: 35,
    dependencies: []
  },
  {
    id: 'lvl4-e3-c2',
    module: 'Nível 4: O Arquiteto de Funções',
    phase: 'Fase 1: Fundamentos',
    concept: 'escopo de variáveis',
    title: 'Etapa 7: Protegendo o Núcleo',
    theory: 'Variáveis criadas dentro de uma função são locais. Crie `x = 10` (global) e uma função `teste()` que cria `x = 5` (local).',
    initialCode: 'x = 10\ndef teste():\n    x = 5\nteste()',
    testCode: 'assert x == 10',
    xp: 30,
    dependencies: []
  },
  {
    id: 'lvl4-e3-c3',
    module: 'Nível 4: O Arquiteto de Funções',
    phase: 'Fase 1: Fundamentos',
    concept: 'recursão',
    title: 'Etapa 8: O Segredo da Recursão',
    theory: 'Recursão é uma função que chama a si mesma. Crie uma função `fatorial(n)` que retorne 1 se n=0, senão `n * fatorial(n-1)`.',
    initialCode: 'def fatorial(n):\n    ',
    testCode: 'assert fatorial(5) == 120',
    xp: 50,
    dependencies: []
  },
  {
    id: 'lvl4-e4-c1',
    module: 'Nível 4: O Arquiteto de Funções',
    phase: 'Fase 1: Fundamentos',
    concept: 'type hints',
    title: 'Etapa 9: Type Hinting Profissional',
    theory: 'Adicione "type hints" para documentar sua função. Crie `divisao(a: int, b: int) -> float`.',
    initialCode: 'def divisao(a: int, b: int) -> float:\n    ',
    testCode: 'assert divisao(10, 2) == 5.0',
    xp: 35,
    dependencies: []
  },
  {
    id: 'lvl4-p1',
    module: 'Nível 4: O Arquiteto de Funções',
    phase: 'Fase 1: Fundamentos',
    concept: 'projeto de modularização',
    badge: 'Arquiteto Python',
    title: '🛠️ PROJETO: Calculadora Modular',
    theory: 'Construa uma calculadora! Crie 4 funções (`somar`, `subtrair`, etc) e uma função principal `calcular(op, n1, n2)` que chama a função correta.',
    initialCode: '# Crie as 4 funções aqui...\n\ndef calcular(op, n1, n2):\n    ',
    testCode: 'assert calcular("somar", 1, 2) == 3 and calcular("multiplicar", 2, 5) == 10',
    xp: 300,
    dependencies: []
  }
];
