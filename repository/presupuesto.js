import { Presupuesto } from "./model/presupuesto.js";
import { connect } from '../database/db.js';

connect();

//Obtener todos los presupuestos
export const getPresupuestosRepository = async () => {
    try {
        return await Presupuesto.find();
    } catch (error) {
        throw new Error('Error al obtener los presupuestos', error)
    }
};

//Obtener presupuesto por id
export const getPresupuestoByIdRepository = async (id) => {
    try {
        return await Presupuesto.findById(id);
    } catch (error) {
        throw new Error('Error al obtener el presupuesto', error)
    }
};

//Crear un presupuesto
export const agregarPresupuestoRepository = async (nuevoPresupuesto) => {
    try {
        const presupuesto = new Presupuesto(nuevoPresupuesto);
        return await presupuesto.save()
    } catch (error) {
        throw new Error('Error al creac el presupuesto', error)
    }
};

//Eliminar un presupuesto 
export const eliminarPresupuestoRepository = async  (presupuesto) => {
    try {
        const presupuestoEliminado = await Presupuesto.findByIdAndDelete(presupuesto)
        if (!presupuestoEliminado) {
            throw new Error(`Presupuesto con ID ${presupuesto} no encontrado`);
        } else {
            console.log('Se eliminó el presupuesto: ' + presupuesto + 'de la lista');
            return presupuestoEliminado;
        }
    } catch (error) {
        console.error('Error en el repositorio', error);
        throw new Error(`Error al eliminar el presupuesto: ${error.message}`);
    }
}

//Editar un presupuesto
export const actualizarPresupuestoRepository = async (presupuesto, presupuestoActual) => {
    try {
        const presupuestoActualizado = await Presupuesto.findByIdAndUpdate( presupuesto,presupuestoActual, { new: true})
        return presupuestoActualizado;
    } catch (error) {
        throw new Error(`Error al editar el presupuesto`);
    }
}