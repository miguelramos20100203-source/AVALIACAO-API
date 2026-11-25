import {Router} from 'express'
import * as usuariosController from "../controllers/usuarios.controllers";

const router = Router()


router.get("/", usuariosController.listarUsuarios);
export default router;