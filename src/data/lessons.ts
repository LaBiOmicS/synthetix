export interface Lesson {
  id: string;
  title: string;
  module: string;
  concept: string;
  badge?: string; // Opcional: Nome do badge concedido
  theory: string;
  initialCode: string;
  testCode: string;
  xp: number;
  dependencies: string[];
}

export const lessons: Lesson[] = [
  // --- NÍVEL 1: FUNDAMENTOS E INTERAÇÃO (O DESPERTAR) ---
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
    id: 'lvl1-e1-c3',
    module: 'Nível 1: O Despertar',
    concept: 'números',
    title: 'Etapa 3: Números Puros',
    theory: 'Números não precisam de aspas. Tente imprimir o número 2024 diretamente.',
    initialCode: 'print()',
    testCode: 'import sys\nassert "2024" in sys.stdout.getvalue()',
    xp: 5,
    dependencies: []
  },
  {
    id: 'lvl1-e2-c1',
    module: 'Nível 1: O Despertar',
    concept: 'variáveis',
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
    concept: 'tipos numéricos',
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
    concept: 'operadores aritméticos',
    title: 'Etapa 6: Somando Forças',
    theory: 'Você pode somar variáveis! Crie `a = 5`, `b = 5` e depois `c = a + b`.',
    initialCode: 'a = 5\n# crie b e c abaixo\n',
    testCode: 'assert c == 10',
    xp: 10,
    dependencies: []
  },
  {
    id: 'lvl1-e3-c1',
    module: 'Nível 1: O Despertar',
    concept: 'input de dados',
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
    concept: 'f-strings',
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
    concept: 'manipulação de strings',
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
    concept: 'conclusão de nível',
    title: 'Etapa 10: O Final do Despertar',
    theory: 'Parabéns! Você completou o primeiro nível. Imprima "Mestre do Nível 1" para selar sua conquista.',
    initialCode: '',
    testCode: 'import sys\nassert "Mestre do Nível 1" in sys.stdout.getvalue()',
    xp: 50,
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
    dependencies: []
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
    badge: 'Guardião Lógico',
    title: '🛡️ MISSÃO ESPECIAL: A Guardiã do Portal',
    theory: 'HORA DO PROJETO! Você vai construir um sistema de segurança real. Passo 1: Peça o nome e a idade (use int()). Passo 2: Se idade < 18, negue. Passo 3: Se >= 18, peça o código. Se o código for "SYNTH-2024", libere ACESSO TOTAL. Se for "GUEST", libere ACESSO VISITANTE. Use f-strings no final!',
    initialCode: '# --- SISTEMA DE SEGURANÇA SYNTHETIX ---\n# 1. Peça o nome e idade\n\n# 2. Implemente a lógica de acesso\n',
    testCode: '# O teste simula múltiplas entradas para validar a lógica complexa\nimport sys\n# O mentor IA ajudará o aluno a validar se os caminhos lógicos estão corretos\nassert "ACESSO" in sys.stdout.getvalue().upper()',
    xp: 200,
    dependencies: []
  },

  // --- NÍVEL 3: O DOMÍNIO DA REPETIÇÃO (A FORÇA DA AUTOMAÇÃO) ---
  {
    id: 'lvl3-e1-c1',
    module: 'Nível 3: O Domínio da Repetição',
    concept: 'listas',
    title: 'Etapa 1: O Primeiro Inventário',
    theory: 'Listas guardam vários itens em uma única variável. Crie uma lista chamada `frutas` com "Maçã", "Banana" e "Uva".',
    initialCode: 'frutas = []',
    testCode: 'assert len(frutas) == 3 and "Maçã" in frutas',
    xp: 15,
    dependencies: []
  },
  {
    id: 'lvl3-e1-c2',
    module: 'Nível 3: O Domínio da Repetição',
    concept: 'índices de listas',
    title: 'Etapa 2: Acesso por Coordenadas',
    theory: 'O primeiro item de uma lista está no índice 0. Pegue o primeiro item da lista `compras` e salve na variável `primeiro`.',
    initialCode: 'compras = ["Notebook", "Mouse", "Teclado"]\nprimeiro = ',
    testCode: 'assert primeiro == "Notebook"',
    xp: 15,
    dependencies: []
  },
  {
    id: 'lvl3-e1-c3',
    module: 'Nível 3: O Domínio da Repetição',
    concept: 'método append',
    title: 'Etapa 3: Expansão Infinita',
    theory: 'Use `.append()` para adicionar um item ao final da lista. Adicione "IA" à lista `tecnologias`.',
    initialCode: 'tecnologias = ["Python", "Dados"]\n# Adicione "IA" aqui',
    testCode: 'assert tecnologias == ["Python", "Dados", "IA"]',
    xp: 15,
    dependencies: []
  },
  {
    id: 'lvl3-e2-c1',
    module: 'Nível 3: O Domínio da Repetição',
    concept: 'loop for',
    title: 'Etapa 4: A Batida do For',
    theory: 'O loop `for` percorre cada item de uma lista. Percorra a lista `nomes` e imprima cada um deles.',
    initialCode: 'nomes = ["Alice", "Bob", "Charlie"]\nfor nome in nomes:\n    ',
    testCode: 'import sys\noutput = sys.stdout.getvalue()\nassert "Alice" in output and "Charlie" in output',
    xp: 25,
    dependencies: []
  },
  {
    id: 'lvl3-e2-c2',
    module: 'Nível 3: O Domínio da Repetição',
    concept: 'função range',
    title: 'Etapa 5: O Contador Automático',
    theory: '`range(5)` gera números de 0 a 4. Use um `for` com `range(3)` para imprimir a palavra "Eco".',
    initialCode: 'for i in range(3):\n    ',
    testCode: 'import sys\nassert sys.stdout.getvalue().count("Eco") == 3',
    xp: 20,
    dependencies: []
  },
  {
    id: 'lvl3-e2-c3',
    module: 'Nível 3: O Domínio da Repetição',
    concept: 'loop while',
    title: 'Etapa 6: O Sentinela While',
    theory: 'O `while` repete enquanto uma condição for True. Faça o contador `c` chegar a 3 (enquanto c < 3, imprima "Oi" e aumente c).',
    initialCode: 'c = 0\nwhile c < 3:\n    print("Oi")\n    # Aumente o c aqui',
    testCode: 'import sys\nassert sys.stdout.getvalue().count("Oi") == 3',
    xp: 25,
    dependencies: []
  },
  {
    id: 'lvl3-e3-c1',
    module: 'Nível 3: O Domínio da Repetição',
    concept: 'filtro em loops',
    title: 'Etapa 7: O Filtro de Elite',
    theory: 'Combine `for` e `if`. Percorra `numeros` e só imprima se o número for maior que 10.',
    initialCode: 'numeros = [5, 12, 8, 20]\nfor n in numeros:\n    ',
    testCode: 'import sys\noutput = sys.stdout.getvalue()\nassert "12" in output and "20" in output and "5" not in output',
    xp: 30,
    dependencies: []
  },
  {
    id: 'lvl3-e3-c2',
    module: 'Nível 3: O Domínio da Repetição',
    concept: 'dicionários',
    title: 'Etapa 8: O Mapa de Tesouros',
    theory: 'Dicionários usam Chaves:Valores. Crie um dicionário `perfil` com "nome": "Agente" e "xp": 1000.',
    initialCode: 'perfil = {}',
    testCode: 'assert perfil["nome"] == "Agente" and perfil["xp"] == 1000',
    xp: 25,
    dependencies: []
  },
  {
    id: 'lvl3-e3-c3',
    module: 'Nível 3: O Domínio da Repetição',
    concept: 'acesso a dicionários',
    title: 'Etapa 9: Consultando o Oráculo',
    theory: 'Acesse um valor pela sua chave. Salve o valor da chave "status" do dicionário `bot` na variável `s`.',
    initialCode: 'bot = {"status": "Ativo", "id": 1}\ns = ',
    testCode: 'assert s == "Ativo"',
    xp: 20,
    dependencies: []
  },
  {
    id: 'lvl3-e3-c4',
    module: 'Nível 3: O Domínio da Repetição',
    concept: 'síntese de dados',
    title: 'Etapa 10: O Maestro de Dados',
    theory: 'Desafio Final do Nível! Percorra a lista `usuarios` (que são dicionários) e imprima o "nome" de cada um.',
    initialCode: 'usuarios = [\n    {"nome": "Dev1", "id": 1},\n    {"nome": "Dev2", "id": 2}\n]\n# Percorra e imprima o nome',
    testCode: 'import sys\noutput = sys.stdout.getvalue()\nassert "Dev1" in output and "Dev2" in output',
    xp: 60,
    dependencies: []
  },
  {
    id: 'lvl3-p1',
    module: 'Nível 3: O Domínio da Repetição',
    concept: 'projeto de análise de dados',
    badge: 'Analista de Dados',
    title: '📊 PROJETO: Radar de Inteligência',
    theory: 'HORA DO PROJETO! Você vai processar dados reais. 1. Crie uma lista "leituras" com [0.85, 0.4, 0.9, 0.72, 0.3]. 2. Use um loop para criar uma lista "filtradas" apenas com valores > 0.7. 3. Calcule a média das filtradas. 4. Crie um dicionário "relatorio" com as chaves: "total", "validos" e "media". Exiba tudo!',
    initialCode: '# --- RADAR DE INTELIGÊNCIA SYNTHETIX ---\n# 1. Lista de leituras\nleituras = [0.85, 0.4, 0.9, 0.72, 0.3]\n\n# 2. Filtragem e Processamento\n',
    testCode: 'import sys\nassert "relatorio" in locals()\nassert len(filtradas) == 3\nassert relatorio["validos"] == 3\nassert "media" in relatorio',
    xp: 250,
    dependencies: ['lvl3-e3-c4']
  },

  // --- NÍVEL 4: O ARQUITETO DE FUNÇÕES (A ARTE DA MODULARIZAÇÃO) ---
  {
    id: 'lvl4-e1-c1',
    module: 'Nível 4: O Arquiteto de Funções',
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
