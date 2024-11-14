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