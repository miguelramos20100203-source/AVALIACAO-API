import * as usuariosmodel from "../models/usuarios.model"

export async function listarUsuarios() {
    return await usuariosmodel.buscarTodas()

}
