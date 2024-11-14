import { agregarPresupuestoService } from "../services/presupuesto.js";

export const agregarPresupuestoController = async (req, res) => {
    const presupuesto = req.body;
    try {
        const presupuestoNuevo = await agregarPresupuestoService(presupuesto);
        return res.status(201).send({ mensaje: 'Presupuesto agregado correctamente', Presupuesto: presupuestoNuevo });

    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Error al agregar el presupuesto' });
    }
}