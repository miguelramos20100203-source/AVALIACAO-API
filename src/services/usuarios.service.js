const usuariosmodel = require("../models/usuarios.model");

function listarUsuarios() {
    return usuariosmodel.listarUsuarios()

}
module.exports = { listarUsuarios};