import * as usuariosmodel from "../models/usuarios.models"

export async function listarUsuarios() {
    return await usuariosmodel.buscarTodas()

}
