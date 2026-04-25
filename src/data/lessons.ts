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
  // --- NÍVEL 1: FUNDAMENTOS E INTERAÇÃO (O DESPERTAR) ---
  
  // Etapa: Olá, Mundo!
  {
    id: 'lvl1-e1-c1',
    module: 'Nível 1: O Despertar',
    title: 'Etapa 1: A Voz do Código',
    theory: 'Tudo começa com a função `print()`. Ela é a voz do seu computador. Use-a para exibir seu primeiro nome entre aspas.',
    initialCode: '# Exiba seu nome abaixo\n',
    testCode: 'import sys\noutput = sys.stdout.getvalue().strip()\nassert len(output) > 0',
    xp: 5,
    dependencies: []
  },
  {
    id: 'lvl1-e1-c2',
    module: 'Nível 1: O Despertar',
    title: 'Etapa 2: Citando Textos',
    theory: 'Em Python, textos são chamados de "Strings". Eles precisam de aspas. Exiba a frase "Python é vida!".',
    initialCode: 'print("")',
    testCode: 'import sys\nassert "Python é vida!" in sys.stdout.getvalue()',
    xp: 5,
    dependencies: []
  },
  {
    id: 'lvl1-e1-c3',
    module: 'Nível 1: O Despertar',
    title: 'Etapa 3: Números Puros',
    theory: 'Números não precisam de aspas. Tente imprimir o número 2024 diretamente.',
    initialCode: 'print()',
    testCode: 'import sys\nassert "2024" in sys.stdout.getvalue()',
    xp: 5,
    dependencies: []
  },

  // Etapa: Variáveis e Memória
  {
    id: 'lvl1-e2-c1',
    module: 'Nível 1: O Despertar',
    title: 'Etapa 4: Criando Gavetas',
    theory: 'Variáveis são como gavetas com etiquetas. Crie uma variável chamada `nome` e coloque seu nome nela.',
    initialCode: 'nome = ""',
    testCode: 'assert len(nome) > 0',
    xp: 10,
    dependencies: []
  },
  {
    id: 'lvl1-e2-c2',
    module: 'Nível 1: O Despertar',
    title: 'Etapa 5: Guardando Números',
    theory: 'Agora crie uma variável chamada `xp` e dê o valor 100 a ela.',
    initialCode: 'xp = ',
    testCode: 'assert xp == 100',
    xp: 10,
    dependencies: []
  },
  {
    id: 'lvl1-e2-c3',
    module: 'Nível 1: O Despertar',
    title: 'Etapa 6: Somando Forças',
    theory: 'Você pode somar variáveis! Crie `a = 5`, `b = 5` e depois `c = a + b`.',
    initialCode: 'a = 5\n# crie b e c abaixo\n',
    testCode: 'assert c == 10',
    xp: 10,
    dependencies: []
  },

  // Etapa: Interação
  {
    id: 'lvl1-e3-c1',
    module: 'Nível 1: O Despertar',
    title: 'Etapa 7: O Scanner de Dados',
    theory: 'A função `input()` permite que o usuário fale com o código. Salve o que o usuário digitar em uma variável `resposta`.',
    initialCode: '# resposta = input("Qual seu desejo? ")',
    testCode: 'assert "resposta" in locals()',
    xp: 15,
    dependencies: []
  },
  {
    id: 'lvl1-e3-c2',
    module: 'Nível 1: O Despertar',
    title: 'Etapa 8: F-Strings Mágicas',
    theory: 'Use f-strings para misturar texto e variáveis: `f"Oi {nome}"`. Exiba "Nível 1" usando uma variável `n = 1`.',
    initialCode: 'n = 1\nprint(f"")',
    testCode: 'import sys\nassert "Nível 1" in sys.stdout.getvalue()',
    xp: 15,
    dependencies: []
  },
  {
    id: 'lvl1-e3-c3',
    module: 'Nível 1: O Despertar',
    title: 'Etapa 9: Multiplicador de Texto',
    theory: 'Sabia que pode multiplicar strings? Exiba "Ha" multiplicado por 3.',
    initialCode: 'print("Ha" * 3)',
    testCode: 'import sys\nassert "HaHaHa" in sys.stdout.getvalue()',
    xp: 10,
    dependencies: []
  },
  {
    id: 'lvl1-e3-c4',
    module: 'Nível 1: O Despertar',
    title: 'Etapa 10: O Final do Despertar',
    theory: 'Parabéns! Você completou o primeiro nível. Imprima "Mestre do Nível 1" para selar sua conquista.',
    initialCode: '',
    testCode: 'import sys\nassert "Mestre do Nível 1" in sys.stdout.getvalue()',
    xp: 50,
    dependencies: []
  }
];
