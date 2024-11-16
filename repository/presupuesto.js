import { Presupuesto } from "./model/presupuesto.js";
import { connect } from '../database/db.js';

connect();

export const agregarPresupuestoRepository = async (nuevoPresupuesto) => {
    try {
        const presupuesto = new Presupuesto(nuevoPresupuesto);
        return await presupuesto.save()
    } catch (error) {
        throw new Error('Error al creac el presupuesto', error)
    }
};

export const eliminarPresupuestoRepository = async  (presupuesto) => {
    try {
        const presupuestoEliminado = await Presupuesto.findByIdAndDelete(presupuesto)
        if (!presupuestoEliminado) {
            throw new Error(`Presupuesto con ID ${presupuestoID} no encontrado`);
        }
        return presupuestoEliminado;
    } catch (error) {
        throw new Error(`Error al eliminar el presupuesto: ${error.message}`);
    }
}

export const actualizarPresupuestoRepository = async (presupuesto, presupuestoActual) => {
    try {
        const presupuestoActualizado = await Presupuesto.findByIdAndUpdate( presupuesto,presupuestoActual, { new: true})
        return presupuestoActualizado;
    } catch (error) {
        throw new Error(`Error al editar el presupuesto`);
    }
}