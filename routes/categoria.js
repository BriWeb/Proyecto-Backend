import { Router } from "express";
import { agregarCategoriasController, getCategoriasController, eliminarCategoriaController } from "../controller/categoria.js";

const router = Router();

router.get('/categorias', getCategoriasController);
router.post('/categorias', agregarCategoriasController);
router.delete('/categorias/:id', eliminarCategoriaController);

export default router;