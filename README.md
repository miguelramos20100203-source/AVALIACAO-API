# AVALIACAO-API
# API de Tarefas

Este projeto é uma API REST feita com Node.js e Express para organizar usuários, projetos e tarefas. A API permite cadastrar, consultar, editar e excluir usuários e projetos, além de criar tarefas ligadas a um usuário e a um projeto.

As tarefas seguem uma regra de status: a fazer → em andamento → concluída. Não é permitido pular diretamente de "a fazer" para "concluída".

Para rodar o projeto, use:

npm install

node server.js

A API funciona na porta 3000.

Rotas principais:
- /usuarios
- /projetos
- /tarefas

Autor: Miguel