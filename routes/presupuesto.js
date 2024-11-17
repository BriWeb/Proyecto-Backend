import { Router } from "express";
import { getPresupuestosController, getPresupuestoByIdController,agregarPresupuestoController, eliminarPresupuestoController,actualizarPresupuestoController } from "../controller/presupuesto.js";

const router = Router();

router.get('/presupuestos', getPresupuestosController);
router.get('/presupuesto/:id', getPresupuestoByIdController);
router.post('/presupuesto', agregarPresupuestoController);
router.delete('/presupuesto/:id', eliminarPresupuestoController);
router.put('/presupuesto/:id',actualizarPresupuestoController);

export default router;