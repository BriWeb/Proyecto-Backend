import { Router } from "express";
import { getItemsController, getItemByIdController, agregarItemController, editarItemController, eliminarItemController } from "../controller/items.js";

const router = Router();


router.get('/items', getItemsController);
router.get('/item/:id', getItemByIdController);
router.post('/items', agregarItemController);
router.put('/item/:id', editarItemController);
router.delete('/items/:id', eliminarItemController);

export default router;