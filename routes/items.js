import { Router } from "express";
import {  getItemsController,  agregarItemController, eliminarItemController } from "../controller/items.js";

const router = Router();


router.get('/items', getItemsController);
router.post('/items', agregarItemController);
router.delete('/items/:id', eliminarItemController);

export default router;