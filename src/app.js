import express from 'express'

import usuariosRoutes from './routes/usuarios.routes.js'

const app= express();

app.use(express.json());

 app.use("/usuarios", usuariosRoutes);
 app.use("/tarefas", tarefasRoutes);
 app.use("/projetos", projetosRoutes);
 app.get("/", (req, res) => {
    res.json({
        mensagem: "gerenciamento de tarefas"
    })
 })

export default app;
