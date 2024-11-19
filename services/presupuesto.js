import { getPresupuestosRepository,getPresupuestoByIdRepository,agregarPresupuestoRepository, eliminarPresupuestoRepository, actualizarPresupuestoRepository } from "../repository/presupuesto.js";


//Obtener todos los presupuestos
export const getPresupuestosService = async () => {
    try {
        return getPresupuestosRepository();
    } catch (error) {
        console.error('Error en el Servicio: ', error);
        throw new Error('Error al obtener los presupuestos');
    }
};

//Obtener presupuesto por id
export const getPresupuestoByIdService = async (id) => {
    try {
        return await getPresupuestoByIdRepository(id);
    } catch (error) {
        console.log('Error en el servicio', error);
        throw new Error('Error al obtener el presupuesto id: ' + id);
    }
};


//Crear un presupuesto
export const agregarPresupuestoService = async (presupuesto) => {
    try {
        const presupuestoNuevo = await agregarPresupuestoRepository(presupuesto);
        return presupuestoNuevo;
    } catch (error) {
        console.error('Error en el Servicio: ', error);
        throw new Error('Error al agregar el presupuesto');
    }
};

//Eliminar un presupuesto
export const eliminarPresupuestoServicice = async (presupuesto) => {
    try {
        return await eliminarPresupuestoRepository(presupuesto)
    } catch (error) {
        throw new Error(`Error en el servicio de eliminación.`);
    }    
};

//Editar un presupuesto
export const actualizarPresupuestoService = async (presupuestoID, datosActualizados) => {
    try {
        return await actualizarPresupuestoRepository(presupuestoID, datosActualizados);
    } catch (error) {
        throw new Error(`Error en el servicio de edición: ${error.message}`);
    }
};

