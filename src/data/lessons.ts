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
  },

  // --- NÍVEL 2: O FLUXO DA LÓGICA (O DESPERTAR DA INTELIGÊNCIA) ---
  {
    id: 'lvl2-e1-c1',
    module: 'Nível 2: O Fluxo da Lógica',
    concept: 'tipo booleano',
    title: 'Etapa 1: Verdade ou Falso?',
    theory: 'O computador entende o mundo como Verdadeiro (True) ou Falso (False). Crie uma variável `ligado` e defina como True.',
    initialCode: 'ligado = ',
    testCode: 'assert ligado is True',
    xp: 10,
    dependencies: ['lvl1-e3-c1']
  },
  {
    id: 'lvl2-e1-c2',
    module: 'Nível 2: O Fluxo da Lógica',
    concept: 'operador de igualdade',
    title: 'Etapa 2: A Balança do Código',
    theory: 'Usamos `==` para comparar se dois valores são iguais. Verifique se 10 é igual a 10 e guarde em `resultado`.',
    initialCode: 'resultado = 10 == 10',
    testCode: 'assert resultado is True',
    xp: 10,
    dependencies: []
  },
  {
    id: 'lvl2-e1-c3',
    module: 'Nível 2: O Fluxo da Lógica',
    concept: 'operador de diferença',
    title: 'Etapa 3: Notando a Diferença',
    theory: 'O operador `!=` verifica se os valores são diferentes. Verifique se "Python" é diferente de "Java".',
    initialCode: 'diferente = "Python" != "Java"',
    testCode: 'assert diferente is True',
    xp: 10,
    dependencies: []
  },
  {
    id: 'lvl2-e2-c1',
    module: 'Nível 2: O Fluxo da Lógica',
    concept: 'operadores de comparação',
    title: 'Etapa 4: Medindo Grandezas',
    theory: 'Use `>` para maior e `<` para menor. Verifique se sua idade (ex: 25) é maior que 18.',
    initialCode: 'maioridade = 25 > 18',
    testCode: 'assert maioridade is True',
    xp: 10,
    dependencies: []
  },
  {
    id: 'lvl2-e2-c2',
    module: 'Nível 2: O Fluxo da Lógica',
    concept: 'condicional if',
    title: 'Etapa 5: A Encruzilhada',
    theory: 'O `if` executa código apenas se a condição for real. Se `chuva` for True, imprima "Levar guarda-chuva".',
    initialCode: 'chuva = True\nif chuva:\n    ',
    testCode: 'import sys\nassert "Levar guarda-chuva" in sys.stdout.getvalue()',
    xp: 20,
    dependencies: []
  },
  {
    id: 'lvl2-e2-c3',
    module: 'Nível 2: O Fluxo da Lógica',
    concept: 'condicional else',
    title: 'Etapa 6: O Plano B',
    theory: 'O `else` roda quando o `if` falha. Se `sol` for True, imprima "Praia", senão, "Casa".',
    initialCode: 'sol = False\nif sol:\n    print("Praia")\nelse:\n    ',
    testCode: 'import sys\nassert "Casa" in sys.stdout.getvalue()',
    xp: 20,
    dependencies: []
  },
  {
    id: 'lvl2-e3-c1',
    module: 'Nível 2: O Fluxo da Lógica',
    concept: 'condicional elif',
    title: 'Etapa 7: Múltiplas Escolhas',
    theory: 'Use `elif` para testar várias condições. Se `ponto` for 10 imprima "A", elif 5 imprima "B", else "C".',
    initialCode: 'ponto = 5\nif ponto == 10:\n    print("A")\nelif ponto == 5:\n    ',
    testCode: 'import sys\nassert "B" in sys.stdout.getvalue()',
    xp: 25,
    dependencies: []
  },
  {
    id: 'lvl2-e3-c2',
    module: 'Nível 2: O Fluxo da Lógica',
    concept: 'operador lógico and',
    title: 'Etapa 8: Exigência Dupla',
    theory: 'O `and` exige que as DUAS coisas sejam verdadeiras. Verifique se `tem_chave` e `conhece_senha` são True.',
    initialCode: 'tem_chave = True\nconhece_senha = True\nacesso = tem_chave and conhece_senha',
    testCode: 'assert acesso is True',
    xp: 20,
    dependencies: []
  },
  {
    id: 'lvl2-e3-c3',
    module: 'Nível 2: O Fluxo da Lógica',
    concept: 'operador lógico or',
    title: 'Etapa 9: Uma ou Outra',
    theory: 'O `or` aceita se pelo menos UMA for verdadeira. Verifique se é `sabado` ou `domingo`.',
    initialCode: 'sabado = True\ndomingo = False\nfim_de_semana = sabado or domingo',
    testCode: 'assert fim_de_semana is True',
    xp: 20,
    dependencies: []
  },
  {
    id: 'lvl2-e3-c4',
    module: 'Nível 2: O Fluxo da Lógica',
    concept: 'desafio de lógica',
    title: 'Etapa 10: O Mestre da Lógica',
    theory: 'Combine tudo! Se `idade >= 18` e `tem_ingresso`, imprima "Entrada Liberada".',
    initialCode: 'idade = 20\ntem_ingresso = True\n# Seu código aqui',
    testCode: 'import sys\nassert "Entrada Liberada" in sys.stdout.getvalue()',
    xp: 50,
    dependencies: []
  },
  {
    id: 'lvl2-p1',
    module: 'Nível 2: O Fluxo da Lógica',
    concept: 'projeto de síntese',
    title: '🛡️ MISSÃO ESPECIAL: A Guardiã do Portal',
    theory: 'HORA DO PROJETO! Você vai construir um sistema de segurança real. Passo 1: Peça o nome e a idade (use int()). Passo 2: Se idade < 18, negue. Passo 3: Se >= 18, peça o código. Se o código for "SYNTH-2024", libere ACESSO TOTAL. Se for "GUEST", libere ACESSO VISITANTE. Use f-strings no final!',
    initialCode: '# --- SISTEMA DE SEGURANÇA SYNTHETIX ---\n# 1. Peça o nome e idade\n\n# 2. Implemente a lógica de acesso\n',
    testCode: '# O teste simula múltiplas entradas para validar a lógica complexa\nimport sys\n# O mentor IA ajudará o aluno a validar se os caminhos lógicos estão corretos\nassert "ACESSO" in sys.stdout.getvalue().upper()',
    xp: 200,
    dependencies: ['lvl2-e3-c4']
  }
];
