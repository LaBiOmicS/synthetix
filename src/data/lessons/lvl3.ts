import type { Lesson } from '../types';

export const level3: Lesson[] = [
  {
    id: 'lvl3-e1-c1',
    module: 'Nível 3: O Domínio da Repetição',
    phase: 'Fase 1: Fundamentos',
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
    phase: 'Fase 1: Fundamentos',
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
    phase: 'Fase 1: Fundamentos',
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
    phase: 'Fase 1: Fundamentos',
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
    phase: 'Fase 1: Fundamentos',
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
    phase: 'Fase 1: Fundamentos',
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
    phase: 'Fase 1: Fundamentos',
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
    phase: 'Fase 1: Fundamentos',
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
    phase: 'Fase 1: Fundamentos',
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
    phase: 'Fase 1: Fundamentos',
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
    phase: 'Fase 1: Fundamentos',
    concept: 'projeto de análise de dados',
    badge: 'Analista de Dados',
    title: '📊 PROJETO: Radar de Inteligência',
    theory: 'HORA DO PROJETO! Você vai processar dados reais. 1. Crie uma lista "leituras" com [0.85, 0.4, 0.9, 0.72, 0.3]. 2. Use um loop para criar uma lista "filtradas" apenas com valores > 0.7. 3. Calcule a média das filtradas. 4. Crie um dicionário "relatorio" com as chaves: "total", "validos" e "media". Exiba tudo!',
    initialCode: '# --- RADAR DE INTELIGÊNCIA SYNTHETIX ---\n# 1. Lista de leituras\nleituras = [0.85, 0.4, 0.9, 0.72, 0.3]\n\n# 2. Filtragem e Processamento\n',
    testCode: 'import sys\nassert "relatorio" in locals()\nassert len(filtradas) == 3\nassert relatorio["validos"] == 3\nassert "media" in relatorio',
    xp: 250,
    dependencies: []
  }
];
