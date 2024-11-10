import { Router } from "express";
import { agregarCostosController, getCostosController } from "../controller/costo.js";

const router = Router();

router.get('/costos', getCostosController);
router.post('/costos', agregarCostosController);

export default router;