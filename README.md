# 🔍 GitHub Profile Search

Aplicação web simples que permite buscar perfis públicos do GitHub através de um nome de usuário. Construída com foco em boas práticas de organização de código, reutilização de componentes e consumo de API com autenticação.

---

**LINK DÁ PAGINA WEB**: [CLIQUE AQUI!](https://git-hub-profile-search-five.vercel.app/)

---

## ✨ Funcionalidades

- 🔎 Busca de perfis do GitHub via API
- 📋 Validação e observação de formulários com React Hook Form
- 🎨 Estilização com styled-components
- 🔄 Compartilhamento de dados com Context API
- ⏳ Simulação de carregamento com delay

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia        | Motivo da Escolha                                                                 |
|-------------------|----------------------------------------------------------------------------------|
| **React**         | Biblioteca leve e eficiente para construção de interfaces.              |
| **TypeScript**    | Adiciona tipagem estática ao JavaScript, prevenindo erros e melhorando a manutenibilidade.     |
| **Vite**          | Ferramenta de build moderna, extremamente rápida para desenvolvimento local.     |
| **Styled-components** | Permite escrever CSS no JavaScript com escopo de componente, ideal para projetos pequenos e médios. |
| **React Hook Form** | Facilita a manipulação, validação e observação de entradas de formulário.        |
| **Axios**         | Cliente HTTP mais prático e robusto que o `fetch`, com melhor tratamento de erros.|
| **Context API (useContext)** | Ideal para compartilhar dados globais (como perfil buscado) sem prop drilling.      |
| **useState (React Hook)** | Utilizado para controlar os estados de fluxo da aplicação, como loading e exibição.   |

---

### Padrão de Design de Organização por pastas

```
src/
├── components/         # Componentes reutilizáveis
├── context/            # Contexto global com useContext
├── lib/                # Instância configurada do Axios
├── pages/              # Componentes principais da UI
├── styles/             # Estilização com styled-components
└── App.tsx             # Componente raiz da aplicação
```


---

## 📦 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/Ianalas/GitHub-Profile-Search.git
```
### 2. Acesse o diretório
```bash
cd GitHub-Profile-Search
```
### 3. Instale as dependências
```npm
npm install
```
### 4. Crie um arquivo .env na raiz do projeto com seu token do GitHub

```
VITE_GITHUB_TOKEN=seu_token_aqui
```

### 5. Inicie o projeto

```bash
npm run dev
```

## 📄 Licença
Este projeto está sob a licença MIT.

# Desenvolvido com 💙 por Ian Alas
