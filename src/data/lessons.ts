export interface Lesson {
  id: string;
  title: string;
  module: string;
  theory: string;
  initialCode: string;
  testCode: string; // Python code to validate the user's code
  xp: number;
  dependencies: string[];
}

export const lessons: Lesson[] = [
  {
    id: 'intro-1',
    module: 'Básico',
    title: 'Olá, BioPython!',
    theory: 'Bem-vindo! Vamos começar com o básico. Python é a linguagem favorita para bioinformática. Tente imprimir "Olá Bio" no console.',
    initialCode: '# Escreva seu código aqui\nprint("Olá Bio")',
    testCode: 'import sys\nassert "Olá Bio" in sys.stdout.getvalue()',
    xp: 10,
    dependencies: []
  },
  {
    id: 'intro-2',
    module: 'Básico',
    title: 'Variáveis e Sequências',
    theory: 'Em bioinformática, representamos sequências de DNA como strings. Crie uma variável chamada `dna` com a sequência "ATGC".',
    initialCode: '# Crie a variável dna\ndna = "ATGC"',
    testCode: 'assert dna == "ATGC"',
    xp: 20,
    dependencies: []
  },
  {
    id: 'biopython-1',
    module: 'BioPython',
    title: 'Usando o Seq',
    theory: 'O objeto Seq do BioPython é a base para manipular sequências. Ele se comporta como uma string, mas possui métodos biológicos específicos. Crie uma sequência "GATCGATGGGCCTATATAGGATCGAAAATC" e calcule seu reverso complementar.',
    initialCode: 'from Bio.Seq import Seq\n# Crie a sequência\nseq = Seq("GATCGATGGGCCTATATAGGATCGAAAATC")\n# Calcule o reverso complementar em rev_seq\nrev_seq = seq.reverse_complement()\nprint(rev_seq)',
    testCode: 'from Bio.Seq import Seq\nassert rev_seq == Seq("GATTTTCGATCCTATATAGGCCCATCGATC")',
    xp: 50,
    dependencies: ['biopython']
  },
  {
    id: 'biopython-2',
    module: 'BioPython',
    title: 'Transcrição e Tradução',
    theory: 'A transcrição converte DNA em RNA (T -> U). A tradução converte RNA em proteína. Use os métodos .transcribe() e .translate() na sequência de DNA fornecida.',
    initialCode: 'from Bio.Seq import Seq\ndna = Seq("ATGGCCATTGTAATGGGCCGCTGAAAGGGTGCCCGATAG")\n# Transcreva para rna\nrna = dna.transcribe()\n# Traduza para proteina\nproteina = rna.translate()\nprint(f"RNA: {rna}")\nprint(f"Proteína: {proteina}")',
    testCode: 'assert str(rna).startswith("AUG")\nassert str(proteina).endswith("*")',
    xp: 60,
    dependencies: ['biopython']
  },
  {
    id: 'biopython-3',
    module: 'BioPython',
    title: 'Conteúdo GC',
    theory: 'O conteúdo GC é a porcentagem de bases G e C em uma sequência de DNA. É um indicador importante da estabilidade térmica. Calcule o conteúdo GC usando a função gc_fraction do Bio.SeqUtils.',
    initialCode: 'from Bio.Seq import Seq\nfrom Bio.SeqUtils import gc_fraction\ndna = Seq("GATCGATGGGCCTATATAGGATCGAAAATC")\n# Calcule a fração GC\ngc = gc_fraction(dna) * 100\nprint(f"Conteúdo GC: {gc:.2f}%")',
    testCode: 'import numpy as np\nassert np.isclose(gc, 46.666, atol=0.1)',
    xp: 50,
    dependencies: ['biopython']
  },
  {
    id: 'numpy-1',
    module: 'Data Science',
    title: 'Arrays com NumPy',
    theory: 'NumPy é a base para computação científica. Crie um array com os valores [1, 2, 3] e calcule a média.',
    initialCode: 'import numpy as np\na = np.array([1, 2, 3])\nmedia = a.mean()\nprint(media)',
    testCode: 'import numpy as np\nassert np.isclose(media, 2.0)',
    xp: 30,
    dependencies: ['numpy']
  },
  {
    id: 'pandas-1',
    module: 'Data Science',
    title: 'DataFrames com Pandas',
    theory: 'Pandas é essencial para manipular tabelas de dados genômicos. Crie um DataFrame com colunas "gene" e "expressao".',
    initialCode: 'import pandas as pd\ndata = {"gene": ["BRCA1", "TP53", "EGFR"], "expressao": [10.5, 8.2, 12.1]}\ndf = pd.DataFrame(data)\n# Calcule a expressão média\nmedia_exp = df["expressao"].mean()\nprint(df)\nprint(f"Média: {media_exp}")',
    testCode: 'import pandas as pd\nassert "BRCA1" in df["gene"].values\nassert media_exp > 10',
    xp: 40,
    dependencies: ['pandas']
  }
];
