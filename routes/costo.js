import { Router } from "express";
import { agregarCostosController, getCostosUsuarioController, getCostosController, eliminarCostoController } from "../controller/costo.js";

const router = Router();

router.get('/costos', getCostosController);  //devuelve un objeto con item, suma total y usuario asociado a item
router.get('/costos/usuario/:id', getCostosUsuarioController);
router.post('/costos', agregarCostosController); //agregaba idusuario con iditem
router.delete('/costos/:id', eliminarCostoController);

export default router;