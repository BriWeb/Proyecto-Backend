import { agregarCostoRepository, getCostosRepository, eliminarCostoRepository } from "../repository/costo.js";

export const getCostosService = async () => {
    try {
        return getCostosRepository();
    } catch (error) {
        console.error('Error en el Servicio: ', error);
        throw new Error('Error al obteber los datos');
    }
}

export const agregarCostoService = async (costo) => {
    try {
        const costoNuevo = await agregarCostoRepository(costo);

        return costoNuevo;
    } catch (error) {
        console.error('Error en el Servicio: ', error);
        throw new Error('Error al aregegar el costo');

    }
}

export const eliminarCostoService = async (id) => {
    try {
        const costoEliminado = await eliminarCostoRepository(id);
        return costoEliminado;

    } catch (error) {
        console.error('Error en el service', error);
        throw new Error('Error al eliminar el costo');
    }
}