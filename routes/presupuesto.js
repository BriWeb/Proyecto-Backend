import { Router } from "express";
import { agregarPresupuestoController } from "../controller/presupuesto.js";

const router = Router();

router.post('/presupuesto', agregarPresupuestoController);

export default router;