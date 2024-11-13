import { Router } from "express";
import { actualizarCategoriaController, agregarCategoriasController, getCategoriasController, eliminarCategoriaController } from "../controller/categoria.js";

const router = Router();

router.get('/categorias', getCategoriasController);
router.post('/categorias', agregarCategoriasController);
router.delete('/categorias/:id', eliminarCategoriaController);
router.put('/categorias/:id', actualizarCategoriaController);

export default router;