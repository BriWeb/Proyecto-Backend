import { Router } from "express";
import { getCategoriasController, getCategoriaByIdController, agregarCategoriasController, actualizarCategoriaController, eliminarCategoriaController } from "../controller/categoria.js";

const router = Router();

router.get('/categorias', getCategoriasController);
router.get('/categoria/:id', getCategoriaByIdController);
router.post('/categorias', agregarCategoriasController);
router.delete('/categorias/:id', eliminarCategoriaController);
router.put('/categorias/:id', actualizarCategoriaController);

export default router;