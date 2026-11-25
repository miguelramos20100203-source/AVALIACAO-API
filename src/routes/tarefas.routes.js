import {Router} from "experess";
import * as tarefasRoutes from "./controllers/tarefas.controllers.js";

const router = Router()

router.get("/", tarefasConstrollers.listarTarefas);

router.post("/", tarefasControllers.criarTarefas);
router.put("/:id", tarefasControllers.atualizarTarefas);
router.delete("/:id", tarefasControllers.deletarTarefas);
router.get("/:id", tarefasControllers.listarTarefasPorId);

export default router

