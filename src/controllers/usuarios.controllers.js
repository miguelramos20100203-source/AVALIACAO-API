const usuariosService = require("../services/usuarios.service");

function listarUsuarios (req,res){
    const usuarios = usuariosService.listarUsuarios();
    res.json(usuarios);
} 
module.exports={ listarUsuarios };