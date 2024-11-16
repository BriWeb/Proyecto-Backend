import { Router } from "express";
import { agregarPresupuestoController, eliminarPresupuestoController,actualizarPresupuestoController } from "../controller/presupuesto.js";

const router = Router();

router.post('/presupuesto', agregarPresupuestoController);
router.delete('/presupuesto', eliminarPresupuestoController);
router.put('/presupuesto',actualizarPresupuestoController);

export default router;