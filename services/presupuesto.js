import { agregarPresupuestoRepository } from "../repository/presupuesto.js";

export const agregarPresupuestoService = async (presupuesto) => {
    try {
        const presupuestoNuevo = await agregarPresupuestoRepository(presupuesto);
        return presupuestoNuevo;
    } catch (error) {
        console.error('Error en el Servicio: ', error);
        throw new Error('Error al agregar el presupuesto');
    }
}