import type { Lesson } from '../types';

export const level8: Lesson[] = [
  // --- ABORDAGEM SOLTA (DICIONÁRIOS) ---
  {
    id: 'lvl8-e1-c1',
    module: 'Nível 8: O Ciclo de Vida CRUD',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'crud básico (solto)',
    title: 'Etapa 1: O CRUD Solto',
    theory: 'Começamos com o CRUD "solto": apenas dicionários e listas. Crie uma lista `agenda` e uma função `adicionar(nome, telefone)` que salva um dict.',
    initialCode: 'agenda = []\ndef adicionar(nome, telefone):\n    # adicione o dict aqui',
    testCode: 'adicionar("Ana", "123")\nassert agenda[0] == {"nome": "Ana", "telefone": "123"}',
    xp: 60,
    dependencies: []
  },
  {
    id: 'lvl8-e1-c2',
    module: 'Nível 8: O Ciclo de Vida CRUD',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'read solto',
    title: 'Etapa 2: Buscando no Solto',
    theory: 'Busque o telefone de um contato pelo nome dentro da nossa lista de dicionários.',
    initialCode: 'agenda = [{"nome": "Ana", "telefone": "123"}]\ndef buscar(nome):\n    # retorne telefone ou None',
    testCode: 'assert buscar("Ana") == "123" and buscar("Bia") is None',
    xp: 60,
    dependencies: []
  },

  // --- ABORDAGEM PROFISSIONAL (DATACLASSES E INTERFACES) ---
  {
    id: 'lvl8-e2-c1',
    module: 'Nível 8: O Ciclo de Vida CRUD',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'dataclasses',
    title: 'Etapa 6: O Modelo com DataClass',
    theory: 'Agora, a abordagem profissional. Use `@dataclass` para definir o formato do seu objeto. Isso garante que todo contato tenha nome e telefone.',
    initialCode: 'from dataclasses import dataclass\n\n@dataclass\nclass Contato:\n    # defina nome: str e telefone: str',
    testCode: 'c = Contato("Ana", "123")\nassert c.nome == "Ana"',
    xp: 90,
    dependencies: []
  },
  {
    id: 'lvl8-e2-c2',
    module: 'Nível 8: O Ciclo de Vida CRUD',
    phase: 'Fase 2: Arquiteto de Software',
    concept: 'type hints/interfaces',
    title: 'Etapa 7: CRUD Estruturado',
    theory: 'A abordagem profissional usa tipos. Refaça a função `adicionar` para aceitar um objeto `Contato` e não apenas um dicionário.',
    initialCode: 'def adicionar(contato: Contato):\n    # adicione na lista tipada',
    testCode: 'c = Contato("Ana", "123")\nadicionar(c)\nassert isinstance(agenda[0], Contato)',
    xp: 90,
    dependencies: []
  }
];
