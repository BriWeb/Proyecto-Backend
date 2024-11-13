import { agregarItemRepository, getItemsRepository, eliminarItemRepository } from "../repository/items.js";


export const getItemsService = async () => {
    try {
        return await getItemsRepository();  
    } catch (error) {
        console.error('Error en el Servicio: ', error);
        throw new Error('Error al obtener los datos de los items');
    }
}


export const agregarItemService = async (item) => {
    try {
        const nuevoItem = await agregarItemRepository(item); 
        return nuevoItem;
    } catch (error) {
        console.error('Error en el Servicio: ', error);
        throw new Error('Error al agregar el item');
    }
}

export const eliminarItemService = async (id) => {
    try {
        const itemEliminado = await eliminarItemRepository(id);
        return itemEliminado;
    } catch (error) {
        console.error('Error en el Servicio: ', error);
        throw new Error('Error al eliminar el item');
    }
}