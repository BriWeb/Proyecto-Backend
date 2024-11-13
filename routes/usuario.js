import { Router } from "express";
import { agregarUsuariosController, getUsuariosController, eliminarUsuarioController } from "../controller/usuario.js";

const router = Router();

router.get('/usuarios', getUsuariosController);
router.post('/usuario', agregarUsuariosController);
router.delete('/usuario/:id', eliminarUsuarioController);

export default router;