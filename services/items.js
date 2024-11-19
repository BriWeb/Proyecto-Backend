import { getItemsRepository, getItemByIdRepository, agregarItemRepository, editarItemRepository, eliminarItemRepository } from "../repository/items.js";

//Obtener todos los items
export const getItemsService = async () => {
    try {
        return await getItemsRepository();
    } catch (error) {
        console.error('Error en el Servicio: ', error);
        throw new Error('Error al obtener los datos de los items');
    }
}

//Obtener un item por ID
export const getItemByIdService = async (id) => {
    try {
        const item = await getItemByIdRepository(id);
        return item;
    } catch (error) {
        console.error('Error en el Servicio: ', error);
        throw new Error('Error al obtener el item');
    }
}

//Agregar un item
export const agregarItemService = async (item) => {
    try {
        const nuevoItem = await agregarItemRepository(item);
        return nuevoItem;
    } catch (error) {
        console.error('Error en el Servicio: ', error);
        throw new Error('Error al agregar el item');
    }
}

//Editar un item
export const editarItemService = async (id, item) => {
    try {
        const itemEditado = await editarItemRepository(id, item);
        return itemEditado;
    } catch (error) {
        console.error('Error en el Servicio: ', error);
        throw new Error('Error al editar el item');
    }
}

//Editar un item
export const eliminarItemService = async (id) => {
    try {
        const itemEliminado = await eliminarItemRepository(id);
        return itemEliminado;
    } catch (error) {
        console.error('Error en el Servicio: ', error);
        throw new Error('Error al eliminar el item');
    }
}