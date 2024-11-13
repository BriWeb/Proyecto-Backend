import { agregarCategoriaRepository, getCategoriasRepository, eliminarCategoriaRepository } from "../repository/categoria.js";

export const getCategoriasService = async () => {
    try {
        return getCategoriasRepository();
    } catch (error) {
        console.error('Error en el Servicio: ', error);
        throw new Error('Error al obteber los datos');
    }
}

export const agregarCategoriaService = async (categoria) => {
    try {
        const categoriaNueva = await agregarCategoriaRepository(categoria);

        return categoriaNueva;
    } catch (error) {
        console.error('Error en el Servicio: ', error);
        throw new Error('Error al aregegar la categoría');
    }
}

export const eliminarCategoriaService = async (id) => {
    try {
        const categoriaEliminada = await eliminarCategoriaRepository(id);
        return categoriaEliminada;

    } catch (error) {
        console.error('Error en el service', error);
        throw new Error('Error al eliminar la categoría');
    }
}