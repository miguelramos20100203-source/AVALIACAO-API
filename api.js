const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let usuarios = [];
let projetos = [];
let tarefas = [];

let proximoUsuarioId = 1;
let proximoProjetoId = 1;
let proximaTarefaId = 1;

app.get("/", (req, res) => {
    res.json({
        mensagem: "API de gerenciamento de tarefas funcionando!"
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});