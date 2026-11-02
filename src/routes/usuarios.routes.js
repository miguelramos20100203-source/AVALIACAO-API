const express = require("express");
const router = express.Router();

const usuariosController = require("../controllers/usuarios.controllers");

router.get("/", usuariosController.listarUsuarios);
module.exports = router;