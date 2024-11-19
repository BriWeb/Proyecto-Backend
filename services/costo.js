import { getCostosUsuarioRepository, agregarCostoRepository, getCostosRepository, eliminarCostoRepository } from "../repository/costo.js";

//Obtener todos los costos
export const getCostosService = async () => {
    try {
        return getCostosRepository();
    } catch (error) {
        console.error('Error en el Servicio: ', error);
        throw new Error('Error al obteber los datos');
    }
}

//Obtener los costos de un usuario
export const getCostosUsuarioService = async (id) => {
    console.log('Id recibido en el servicio:', id);
    try {
        return await getCostosUsuarioRepository(id);
    } catch (error) {
        console.error('Error en el Servicio: ', error);
        throw new Error('Error al obtener los datos');
    }
}

//Agregar un costo
export const agregarCostoService = async (costo) => {
    try {
        const costoNuevo = await agregarCostoRepository(costo);

        return costoNuevo;
    } catch (error) {
        console.error('Error en el Servicio: ', error);
        throw new Error('Error al aregegar el costo');

    }
}
//Eliminar un costo
export const eliminarCostoService = async (id) => {
    try {
        const costoEliminado = await eliminarCostoRepository(id);
        return costoEliminado;

    } catch (error) {
        console.error('Error en el service', error);
        throw new Error('Error al eliminar el costo');
    }
}