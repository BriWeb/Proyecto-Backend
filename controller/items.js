import { agregarItemService, getItemsService, eliminarItemService } from "../services/items.js";

export const getItemsController = async (req, res) => {
    try {
        const items = await getItemsService(); 
        if (items.length === 0) {
            return res.send('La base de datos está vacía');
        }
        return res.send(items); 

    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Error al obtener los items' });
    }
};

export const agregarItemController = async (req, res) => {
    const item = req.body; 
    try {
        const nuevoItem = await agregarItemService(item); 
        console.log(nuevoItem);
        return res.status(200).send({ mensaje: 'Item agregado correctamente', item: nuevoItem });

    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Error al agregar el item' });
    }
};


export const eliminarItemController = async (req, res) => {
    const { id } = req.params; 
    try {
        const itemEliminado = await eliminarItemService(id); 

        if (!itemEliminado) {
            return res.status(404).send({ mensaje: `No se encontró ningún item con ID ${id}` });
        }

        return res.status(200).send({ mensaje: 'El item ha sido eliminado correctamente', item: itemEliminado });

    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Error al eliminar el item' });
    }
};