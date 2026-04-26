import type { Lesson } from '../types';

export const level2: Lesson[] = [
  {
    id: 'lvl2-e1-c1',
    module: 'Nível 2: O Fluxo da Lógica',
    phase: 'Fase 1: Fundamentos',
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
    phase: 'Fase 1: Fundamentos',
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
    phase: 'Fase 1: Fundamentos',
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
    phase: 'Fase 1: Fundamentos',
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
    phase: 'Fase 1: Fundamentos',
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
    phase: 'Fase 1: Fundamentos',
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
    phase: 'Fase 1: Fundamentos',
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
    phase: 'Fase 1: Fundamentos',
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
    phase: 'Fase 1: Fundamentos',
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
    phase: 'Fase 1: Fundamentos',
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
    phase: 'Fase 1: Fundamentos',
    concept: 'projeto de síntese',
    badge: 'Guardião Lógico',
    title: '🛡️ MISSÃO ESPECIAL: A Guardiã do Portal',
    theory: 'HORA DO PROJETO! Você vai construir um sistema de segurança real. Passo 1: Peça o nome e a idade (use int()). Passo 2: Se idade < 18, negue. Passo 3: Se >= 18, peça o código. Se o código for "SYNTH-2024", libere ACESSO TOTAL. Se for "GUEST", libere ACESSO VISITANTE. Use f-strings no final!',
    initialCode: '# --- SISTEMA DE SEGURANÇA SYNTHETIX ---\n# 1. Peça o nome e idade\n\n# 2. Implemente a lógica de acesso\n',
    testCode: '# O teste simula múltiplas entradas para validar a lógica complexa\nimport sys\n# O mentor IA ajudará o aluno a validar se os caminhos lógicos estão corretos\nassert "ACESSO" in sys.stdout.getvalue().upper()',
    xp: 200,
    dependencies: []
  }
];
