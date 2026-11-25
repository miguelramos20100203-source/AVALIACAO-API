import * as usuariosService from"../services/usuarios.service"

export async function listarUsuarios (req,res){
    const usuarios = await usuariosService.listarUsuarios();
    res.json(usuarios);
} 
