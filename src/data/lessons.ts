export interface Lesson {
  id: string;
  title: string;
  module: string;
  concept: string; // Novo campo para guiar a IA
  theory: string;
  initialCode: string;
  testCode: string;
  xp: number;
  dependencies: string[];
}

export const lessons: Lesson[] = [
  // --- NÍVEL 1: FUNDAMENTOS E INTERAÇÃO ---
  {
    id: 'lvl1-e1-c1',
    module: 'Nível 1: O Despertar',
    concept: 'função print',
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
    concept: 'strings',
    title: 'Etapa 2: Citando Textos',
    theory: 'Em Python, textos são chamados de "Strings". Eles precisam de aspas. Exiba a frase "Python é vida!".',
    initialCode: 'print("")',
    testCode: 'import sys\nassert "Python é vida!" in sys.stdout.getvalue()',
    xp: 5,
    dependencies: []
  },
  {
    id: 'lvl1-e2-c1',
    module: 'Nível 1: O Despertar',
    concept: 'variáveis',
    title: 'Etapa 3: Criando Gavetas',
    theory: 'Variáveis são como gavetas com etiquetas. Crie uma variável chamada `nome` e coloque seu nome nela.',
    initialCode: 'nome = ""',
    testCode: 'assert len(nome) > 0',
    xp: 10,
    dependencies: []
  },
  {
    id: 'lvl1-e2-c2',
    module: 'Nível 1: O Despertar',
    concept: 'tipos numéricos',
    title: 'Etapa 4: Guardando Números',
    theory: 'Agora crie uma variável chamada `xp` e dê o valor 100 a ela.',
    initialCode: 'xp = ',
    testCode: 'assert xp == 100',
    xp: 10,
    dependencies: []
  },
  {
    id: 'lvl1-e3-c1',
    module: 'Nível 1: O Despertar',
    concept: 'input de dados',
    title: 'Etapa 5: O Scanner de Dados',
    theory: 'A função `input()` permite que o usuário fale com o código. Salve o que o usuário digitar em uma variável `resposta`.',
    initialCode: '# resposta = input("Qual seu desejo? ")',
    testCode: 'assert "resposta" in locals()',
    xp: 15,
    dependencies: []
  }
];
