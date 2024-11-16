import { agregarPresupuestoService, eliminarPresupuestoServicice, actualizarPresupuestoService } from "../services/presupuesto.js";

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

export const eliminarPresupuestoController = async (req,res) => {
    const { presupuestoID } = req.params;
    try {
        const presupuestoEliminado = await eliminarPresupuestoServicice(presupuestoID);

        return res.status(200).send({mensaje: 'Presupuesto eliminado correctamente', Presupuesto: presupuestoEliminado});
    } catch (error) {
        console.error(error);
        return res.status(500).send({ mensaje: 'Error al eliminar el presupuesto' });
    }
}

export const actualizarPresupuestoController = async (req, res) => {
    const { presupuestoID } = req.params;
    const datosActualizados = req.body;

    try {
        const presupuestoActualizado = await actualizarPresupuestoService(presupuestoID, datosActualizados);
        return res.status(200).send({ mensaje: 'Presupuesto editado correctamente'});
    } catch (error) {
        console.error(error);
        return res.status(500).send({ mensaje: 'Error al editar el presupuesto'});
    }
};
