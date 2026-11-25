import {Router} from "express";
import * as projetosRoutes from "./controllers/projetos.controllers.js";

const router = Router()

router.get("/", projetosControllers.listarProjetos);

router.post("/", projetosControllers.criarProjetos);
router.put("/:id", projetosControllers.atulizarProjetos);
router.delete("/:id", projetosControllers.deletarProjetos);
router.get("/:id", projetosControllers.listarProjetosPorId);
 
export default router