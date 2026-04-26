import type { Lesson } from '../types';

export const level5: Lesson[] = [
  // --- INFRAESTRUTURA E AMBIENTES (NOVAS LIÇÕES) ---
  {
    id: 'lvl5-inf-1',
    module: 'Nível 5: O Arsenal do Engenheiro',
    phase: 'Fase 1: Fundamentos',
    concept: 'pip e pypi',
    title: 'Etapa 1: O Poder do PIP',
    theory: 'O PIP é o gerenciador de pacotes padrão do Python. Ele busca pacotes no PyPI (Python Package Index). Desafio: Simule o comando para instalar a biblioteca "requests".',
    initialCode: '# comando para instalar requests',
    testCode: 'assert "pip install requests" in source_code.lower()',
    xp: 20,
    dependencies: []
  },
  {
    id: 'lvl5-inf-2',
    module: 'Nível 5: O Arsenal do Engenheiro',
    phase: 'Fase 1: Fundamentos',
    concept: 'ambientes virtuais',
    title: 'Etapa 2: Ambientes Virtuais (Venv)',
    theory: 'O `venv` isola as dependências do seu projeto. É a regra de ouro: "nunca instale nada no Python global". Crie um ambiente chamado `.venv`.',
    initialCode: '# comando para criar venv',
    testCode: 'assert "python -m venv .venv" in source_code',
    xp: 20,
    dependencies: []
  },
  {
    id: 'lvl5-inf-3',
    module: 'Nível 5: O Arsenal do Engenheiro',
    phase: 'Fase 1: Fundamentos',
    concept: 'pyenv',
    title: 'Etapa 3: Versões com Pyenv',
    theory: 'O `pyenv` permite ter várias versões do Python instaladas simultaneamente sem conflitos. Comande a troca para a versão 3.10.0.',
    initialCode: '# comando pyenv',
    testCode: 'assert "pyenv local 3.10.0" in source_code',
    xp: 30,
    dependencies: []
  },
  {
    id: 'lvl5-inf-4',
    module: 'Nível 5: O Arsenal do Engenheiro',
    phase: 'Fase 1: Fundamentos',
    concept: 'conda/mamba',
    title: 'Etapa 4: O Mundo Conda',
    theory: 'Em Data Science, Conda/Mamba são os reis, pois gerenciam dependências binárias complexas. Crie um ambiente chamado "ds_env".',
    initialCode: '# comando conda',
    testCode: 'assert "conda create --name ds_env" in source_code or "mamba create -n ds_env" in source_code',
    xp: 30,
    dependencies: []
  },
  // --- (conteúdo anterior mantido abaixo) ---
  {
    id: 'lvl5-e1-c1',
    module: 'Nível 5: O Arsenal do Engenheiro',
    phase: 'Fase 1: Fundamentos',
    concept: 'formatação de código',
    title: 'Etapa 5: O Organizador `black`',
    theory: '`black` é um formatador de código que garante um estilo consistente. A teoria é: "Código bem formatado é mais legível". Desafio: reescreva `x=1+2` para `x = 1 + 2`.',
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
    title: 'Etapa 6: O Detetive `ruff`',
    theory: 'Linters como `ruff` ou `pylint` encontram erros antes de você rodar. Um erro comum é uma variável não usada. Crie uma função que declara `a=10` mas não a usa.',
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
    title: 'Etapa 7: Documentando o Saber',
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
    title: 'Etapa 8: O `requirements.txt`',
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
    title: 'Etapa 9: O Cofre de Segredos',
    theory: 'Nunca coloque senhas no código! Use variáveis de ambiente. Simule a leitura de uma com `os.environ.get("API_KEY")`.',
    initialCode: 'import os\n\n# Em um ambiente real, a chave estaria no sistema\n# Aqui, vamos simular que ela não existe\napi_key = os.environ.get("API_KEY", "default_key")',
    testCode: 'assert api_key == "default_key"',
    xp: 30,
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
