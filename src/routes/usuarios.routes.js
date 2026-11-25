import {Router} from 'express'
import * as usuariosController from "../controllers/usuarios.controllers";

const router = Router()


router.get("/", usuariosController.listarUsuarios);

router.post("/", usuariosController.criarUsuarios);
router.put("/:id", usuariosControllers.atulizarUsuarios);
router.delete("/:id", usuariosControllers.deletarUsuarios);
router.get("/:id", usuariosControllers.listarUsuariosPorId);

export default router;