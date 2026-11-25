import * as usuariosService from"../services/usuariosService"

export async function listarUsuarios (req,res){
    const usuarios = await usuariosService.listarUsuarios();
    res.json(usuarios);
} 

 
export async function criarUsuarios(req, res){

}

export async function atualizarUsuarios(req, res){

}

export async function deletarUsuarios(req, res) {
    
}

export async function listarUsuariosPorId(req, res){
    
}