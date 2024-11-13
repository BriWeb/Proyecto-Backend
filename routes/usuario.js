import { Router } from "express";
import { getUsuariosController, getUsuarioByIdController, agregarUsuarioController ,editarUsuarioController, eliminarUsuarioController } from "../controller/usuario.js";

const router = Router();

router.get('/usuarios', getUsuariosController);
router.get('/usuario/:id', getUsuarioByIdController);
router.put('/usuario/:id', editarUsuarioController);
router.post('/usuario', agregarUsuarioController);
router.delete('/usuario/:id', eliminarUsuarioController);

export default router;