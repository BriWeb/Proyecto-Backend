import { Router } from "express";
import { agregarCostosController, getCostosController, eliminarCostoController } from "../controller/costo.js";

const router = Router();

router.get('/costos', getCostosController);
router.post('/costos', agregarCostosController);
router.delete('/costos/:id', eliminarCostoController);

export default router;