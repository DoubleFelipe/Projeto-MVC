# Projeto-MVC

[![Node.js version](https://img.shields.io/badge/node-%3E%3D18-brightgreen)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/express-%5E5.2.1-lightgrey)](https://expressjs.com/)
[![Repo Size](https://img.shields.io/github/repo-size/DoubleFelipe/Projeto-MVC)](https://github.com/DoubleFelipe/Projeto-MVC)

## Descrição

Aplicação web construída em Node.js e Express para gerenciar um catálogo simples de produtos utilizando o padrão arquitetural MVC. O sistema demonstra criação, edição, exclusão e listagem de produtos, além de autenticação de sessão e rotas protegidas.

## Stack Tecnológica

- Node.js
- Express
- EJS
- express-session
- body-parser

## Funcionalidades

- Login com sessão de usuário
- Listagem de produtos
- Cadastro de novos produtos
- Edição e exclusão de produtos
- Rotas protegidas por autenticação

## Instalação

Clone o repositório:

```bash
git clone https://github.com/DoubleFelipe/Projeto-MVC.git
cd Projeto-MVC
```

Instale as dependências:

```bash
npm install
```

## Execução

Execute a aplicação em modo de desenvolvimento:

```bash
npm start
```

Acesse o sistema em:

```text
http://localhost:3000
```

## Login de Demonstração

- E-mail: `admin@admin.com`
- Senha: `1234`

## Variáveis de Ambiente

Configure as variáveis abaixo em um arquivo `.env` ou no seu ambiente de execução:

```text
PORT=3000
SESSION_SECRET=minhaChaveSecreta
NODE_ENV=development
```

> Não inclua segredos reais em arquivos versionados. Use valores seguros em produção.

## Observações

Este projeto serve como base para estudos e demonstração de conceitos MVC em Node.js com documentação interna via JSDoc e treinamento de boas práticas de repositório no GitHub.