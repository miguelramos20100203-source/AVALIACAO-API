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
app.post("/usuarios", (req, res) => {
    const { nome, email } = req.body;

    if (!nome || !email) {
        return res.status(400).json({
            erro: "Nome e email são obrigatórios."
        });
    }

    const usuario = {
        id: proximoUsuarioId++,
        nome,
        email
    };

    usuarios.push(usuario);

    res.status(201).json(usuario);
});

app.get("/usuarios", (req, res) => {
    res.json(usuarios);
});

app.get("/usuarios/:id", (req, res) => {
    const id = Number(req.params.id);

    const usuario = usuarios.find(usuario => usuario.id === id);

    if (!usuario) {
        return res.status(404).json({
            erro: "Usuário não encontrado."
        });
    }

    res.json(usuario);
});

app.put("/usuarios/:id", (req, res) => {
    const id = Number(req.params.id);

    const usuario = usuarios.find(usuario => usuario.id === id);

    if (!usuario) {
        return res.status(404).json({
            erro: "Usuário não encontrado."
        });
    }

    const { nome, email } = req.body;

    if (nome) {
        usuario.nome = nome;
    }

    if (email) {
        usuario.email = email;
    }

    res.json(usuario);
});

app.delete("/usuarios/:id", (req, res) => {
    const id = Number(req.params.id);

    const indice = usuarios.findIndex(usuario => usuario.id === id);

    if (indice === -1) {
        return res.status(404).json({
            erro: "Usuário não encontrado."
        });
    }

    usuarios.splice(indice, 1);

    res.json({
        mensagem: "Usuário excluído com sucesso."
    });
});