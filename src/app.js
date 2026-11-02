const express = require("express");

const app= express();

app.use(express.json());
 const usuariosRoutes = require("./routes/usuarios.routes");

 app.use("/usuarios", usuariosRoutes);
 app.get("/", (req, res) => {
    res.json({
        mensagem: "gerenciamento de tarefas"
    })
 })

module.exports = app;
