# RegExpIDE

**RegExpIDE** é uma ferramenta interativa de expressão regular (regex) construída com React e TailwindCSS. Sua missão é tornar o uso de regex acessível, explicável e prático — mesmo para quem está começando.

## 🚀 Funcionalidades

- 🔍 **Testador de Regex em Tempo Real**: Insira uma expressão regular e veja os resultados aplicados ao texto instantaneamente.
- 🧠 **Explicador de Regex**: Decompõe a expressão e exibe explicações em linguagem natural sobre cada parte do padrão.
- 🧩 **Construtor Visual (Codeless)**: Crie expressões regulares clicando em botões com operadores e símbolos comuns.
- 🧪 **Modo de Teste**: Digite um texto de exemplo e veja o que a regex captura.
- 🌙 **Modo Claro/Escuro**: Interface acessível e personalizável.
- 💾 **Salvar e Carregar Regex**: Armazene padrões no navegador para reutilizar depois (via `localStorage`).

---

## 🎯 Público-alvo

Ideal para:
- Desenvolvedores que precisam testar rapidamente expressões regulares.
- Estudantes aprendendo os conceitos de regex.
- Usuários não técnicos que desejam montar expressões por cliques.

---

## 🖼 Interface

A interface é simples, dividida em:

- Campo de expressão regular com flags (`g`, `i`, `m`).
- Área para testar entradas de texto.
- Explicações automáticas da regex.
- Seção de resultados e grupos capturados.
- Construtor visual de regex com botões organizados por categorias.

---

## 🛠 Tecnologias Utilizadas

- [React](https://reactjs.org)
- [TailwindCSS](https://tailwindcss.com)
- JavaScript/TypeScript
- Web APIs (RegExp)

---

## 📦 Como Executar Localmente

```bash
# Clone o projeto
git clone https://github.com/seu-usuario/regexpide.git
cd regexpide

# Instale as dependências
npm install

# Rode localmente
npm run dev
