import { agregarPresupuestoRepository, eliminarPresupuestoRepository, actualizarPresupuestoRepository } from "../repository/presupuesto.js";

export const agregarPresupuestoService = async (presupuesto) => {
    try {
        const presupuestoNuevo = await agregarPresupuestoRepository(presupuesto);
        return presupuestoNuevo;
    } catch (error) {
        console.error('Error en el Servicio: ', error);
        throw new Error('Error al agregar el presupuesto');
    }
}

export const eliminarPresupuestoServicice = async (presupuesto) => {
    try {
        return await eliminarPresupuestoRepository(presupuesto)
    } catch (error) {
        throw new Error(`Error en el servicio de eliminación.`);
    }    
}

export const actualizarPresupuestoService = async (presupuestoID, datosActualizados) => {
    try {
        return await actualizarPresupuestoRepository(presupuestoID, datosActualizados);
    } catch (error) {
        throw new Error(`Error en el servicio de edición: ${error.message}`);
    }
}

