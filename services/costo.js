import { agregarCostoRepository, getCostosRepository } from "../repository/costo.js";

export const getCostosService = async () => {
    try {
        return getCostosRepository();
    } catch (error) {
        console.error('Error en el Servicio: ', error);
        throw new Error('Error al obteber los datos');
    }
}
export const agregarCostoService = async (nuevoCosto) => {
    try {
        const costoNuevo = await agregarCostoRepository(nuevoCosto);

        return costoNuevo;
    } catch (error) {
        console.error('Error en el Servicio: ', error);
        throw new Error('Error al aregegar el costo');

    }
}