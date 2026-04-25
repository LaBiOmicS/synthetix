# Synthetix

**Synthetix** é uma plataforma de aprendizado interativa e gamificada focada em **Python, Data Science e Inteligência Artificial**. Com um ambiente de execução Python integrado diretamente no navegador (via WebAssembly), a plataforma permite que usuários aprendam e pratiquem conceitos complexos sem a necessidade de instalar nada localmente.

![Synthetix Logo](public/favicon.svg)

## 🚀 Funcionalidades

- **Ambiente In-Browser**: Execute código Python real usando Pyodide.
- **Aprendizado Gamificado**: Ganhe XP e complete missões em diferentes módulos.
- **Feedback em Tempo Real**: Console integrado e testes automáticos para validação de exercícios.
- **Foco Técnico**: Lições que cobrem desde o básico de Python até manipulação avançada de dados com Pandas, NumPy e lógica de IA.

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React + TypeScript + Tailwind CSS
- **Motor Python**: [Pyodide](https://pyodide.org/) (Python 3.12 no navegador)
- **Editor**: [CodeMirror](https://codemirror.net/) com suporte a sintaxe Python
- **Ícones**: Lucide React

## 📦 Como rodar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/LaBiOmicS/synthetix.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## 🌐 Deploy no GitHub Pages

Este projeto está configurado para ser hospedado facilmente no GitHub Pages.

1. Altere o `base` no `vite.config.ts` para o nome do seu repositório.
2. Execute o deploy:
   ```bash
   npm run deploy
   ```

---
Desenvolvido por [Seu Nome/Link]
