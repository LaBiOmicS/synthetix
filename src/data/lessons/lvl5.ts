import type { Lesson } from '../types';

export const level5: Lesson[] = [
  {
    id: 'lvl5-e1-c1',
    module: 'Nível 5: O Arsenal do Engenheiro',
    phase: 'Fase 1: Fundamentos',
    concept: 'formatação de código',
    title: 'Etapa 1: O Organizador `black`',
    theory: '`black` é um formatador de código que garante um estilo consistente. A teoria é: "Código bem formatado é mais legível". Desafio: reescreva `x=1+2` para `x = 1 + 2`. Embora o Pyodide não rode o black, a prática de espaçamento é fundamental.',
    initialCode: 'x=1+2',
    testCode: 'assert "x = 1 + 2" in source_code',
    xp: 20,
    dependencies: []
  },
  {
    id: 'lvl5-e1-c2',
    module: 'Nível 5: O Arsenal do Engenheiro',
    phase: 'Fase 1: Fundamentos',
    concept: 'linting',
    title: 'Etapa 2: O Detetive `ruff`',
    theory: 'Linters como `ruff` ou `pylint` encontram erros antes de você rodar. Um erro comum é uma variável não usada. Crie uma função que declara `a=10` mas não a usa. O Mentor IA explicará por que um linter apontaria isso.',
    initialCode: 'def func():\n    # Crie a variável não usada',
    testCode: 'assert "a=10" or "a = 10" in source_code',
    xp: 20,
    dependencies: []
  },
  {
    id: 'lvl5-e2-c1',
    module: 'Nível 5: O Arsenal do Engenheiro',
    phase: 'Fase 1: Fundamentos',
    concept: 'docstrings',
    title: 'Etapa 3: Documentando o Saber',
    theory: 'Docstrings (`"""..."""`) explicam o que uma função faz. Crie uma função `soma` e adicione a docstring "Soma dois números.".',
    initialCode: 'def soma(a, b):\n    """Sua docstring aqui."""\n    return a + b',
    testCode: 'assert soma.__doc__ == "Soma dois números."',
    xp: 25,
    dependencies: []
  },
  {
    id: 'lvl5-e2-c2',
    module: 'Nível 5: O Arsenal do Engenheiro',
    phase: 'Fase 1: Fundamentos',
    concept: 'gerenciamento de dependências',
    title: 'Etapa 4: O `requirements.txt`',
    theory: 'Este arquivo lista as bibliotecas que seu projeto precisa. Desafio: crie uma string multilinha que simule um requirements.txt com `numpy` e `pandas`.',
    initialCode: 'deps = """\n"""',
    testCode: 'assert "numpy" in deps and "pandas" in deps',
    xp: 20,
    dependencies: []
  },
  {
    id: 'lvl5-e3-c1',
    module: 'Nível 5: O Arsenal do Engenheiro',
    phase: 'Fase 1: Fundamentos',
    concept: 'variáveis de ambiente',
    title: 'Etapa 5: O Cofre de Segredos',
    theory: 'Nunca coloque senhas no código! Use variáveis de ambiente. Simule a leitura de uma com `os.environ.get("API_KEY")`.',
    initialCode: 'import os\n\n# Em um ambiente real, a chave estaria no sistema\n# Aqui, vamos simular que ela não existe\napi_key = os.environ.get("API_KEY", "default_key")',
    testCode: 'assert api_key == "default_key"',
    xp: 30,
    dependencies: []
  },
  {
    id: 'lvl5-e3-c2',
    module: 'Nível 5: O Arsenal do Engenheiro',
    phase: 'Fase 1: Fundamentos',
    concept: 'argumentos de linha de comando',
    title: 'Etapa 6: O `sys.argv`',
    theory: '`sys.argv` é uma lista que contém os argumentos passados no terminal. O primeiro (`[0]`) é sempre o nome do script. Verifique isso.',
    initialCode: 'import sys\n\n# No Pyodide, o nome do script é simulado\nnome_script = sys.argv[0]',
    testCode: 'assert nome_script is not None',
    xp: 30,
    dependencies: []
  },
  {
    id: 'lvl5-e3-c3',
    module: 'Nível 5: O Arsenal do Engenheiro',
    phase: 'Fase 1: Fundamentos',
    concept: 'ferramentas de CLI',
    title: 'Etapa 7: O `click` Profissional',
    theory: 'Bibliotecas como `click` facilitam a criação de CLIs. A estrutura básica usa o decorador `@click.command()`. Simule a criação de uma função `hello` decorada.',
    initialCode: '# import click - não funciona no Pyodide, será conceitual\n\n# @click.command()\n# @click.option("--nome", default="Mundo")\n# def hello(nome):\n#     print(f"Olá, {nome}!")\n\nconceito = "Entendido"',
    testCode: 'assert conceito == "Entendido"',
    xp: 35,
    dependencies: []
  },
  {
    id: 'lvl5-e4-c1',
    module: 'Nível 5: O Arsenal do Engenheiro',
    phase: 'Fase 1: Fundamentos',
    concept: 'testes automatizados',
    title: 'Etapa 8: O Guardião `pytest`',
    theory: '`pytest` é um framework de testes. Funções de teste devem começar com `test_`. Crie uma função `test_soma` que usa `assert` para verificar se `1 + 1 == 2`.',
    initialCode: 'def test_soma():\n    # Escreva seu assert aqui',
    testCode: 'assert "assert 1 + 1 == 2" in source_code or "assert 2 == 1 + 1" in source_code',
    xp: 40,
    dependencies: []
  },
  {
    id: 'lvl5-e4-c2',
    module: 'Nível 5: O Arsenal do Engenheiro',
    phase: 'Fase 1: Fundamentos',
    concept: 'empacotamento',
    title: 'Etapa 9: O `pyproject.toml`',
    theory: 'Este arquivo define como seu projeto é construído e distribuído. Ele contém seções como `[build-system]` e `[project]`. Simule a criação de uma string com essas seções.',
    initialCode: 'config = """\n"""',
    testCode: 'assert "[build-system]" in config and "[project]" in config',
    xp: 40,
    dependencies: []
  },
  {
    id: 'lvl5-p1',
    module: 'Nível 5: O Arsenal do Engenheiro',
    phase: 'Fase 1: Fundamentos',
    concept: 'projeto de engenharia de software',
    badge: 'Engenheiro Python',
    title: '🔧 PROJETO: Pacote Distribuível',
    theory: 'Vamos empacotar sua calculadora! 1. Crie um arquivo `calculadora.py` (simulado em uma string). 2. Crie uma docstring para o módulo. 3. Crie um `pyproject.toml` (em outra string) que dê um nome e versão ao seu pacote. O Mentor IA vai guiar!',
    initialCode: 'calculadora_py = """\n# Suas funções de calculadora aqui\n"""\n\npyproject_toml = """\n# TOML do seu projeto aqui\n"""',
    testCode: 'assert "def somar" in calculadora_py and "[project]" in pyproject_toml',
    xp: 400,
    dependencies: []
  }
];
