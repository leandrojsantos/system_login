

<h1 align="center">
    <a href="#" alt="">Mini System Login</a>
</h1>



<h4 align="center">
	🚧   Em produção 🚀 🚧
</h4>

Tabela de conteúdos
=================
<!--ts-->
* [Sobre o projeto](#-sobre-o-projeto)
* [Como executar o projeto](#-como-executar-o-projeto)
  * [Pré-requisitos](#pré-requisitos)
  * [Rodando o Backend (servidor)](#user-content--rodando-o-backend-servidor)
  * [Rodando a aplicação web (Frontend)](#user-content--rodando-a-aplicação-web-frontend)   
<!--te-->


## 💻 Sobre o projeto

Projeto mini system login onde, não pode acessar as outras partes sem estar logado, 

modelo do projeto arquitectura de mvc onde cada pasta é um módulo:

config = e na onde esta o arquivo de configuração, para o banco de dados. (congif do mvc)

migrations = para as migrations de dados para o banco de dados (model do mvc)

views = para as views ou pages do projeto (view do mvc)

#### ⚙️ Funcionalidades

- [x] Login
- [x] Criação de usuário
- [ ] Listagem de usuário
- [ ] Exclusão de usuário


---

## 🚀 Como executar o projeto
### Pré-requisitos
* ter intalado o nodejs e mysql/workbench (ou se preferir o outro banco de dados que não seja mysql, é so alterar o arquivo de configuração)

* insomnia para testar o projeto

* algum browser para testar o projeto


#### 🎲 Rodando o Backend (servidor)
```bash
  abrir o terminal na pasta do projeto :
     intalar as dependencias: npm install
     alterar o arquivo de configuração e .env: com as suas credenciais de acesso ao banco de dados
     migrar os dados: npx sequelize db:migrate
     apos isso executar o servidor: npm start ou npm dev

```


#### 🧭 Rodando a aplicação web (Frontend)
```bash
  esta na pasta views como index.html e somente abrir o aquivo index.html

```

---
