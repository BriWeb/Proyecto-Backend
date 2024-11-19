import {
  getItemsService,
  getItemByIdService,
  agregarItemService,
  editarItemService,
  eliminarItemService,
} from "../services/items.js";

//Obtener todos los items
export const getItemsController = async (req, res) => {
  try {
    const items = await getItemsService();
    if (items.length === 0) {
      return res.send("La base de datos está vacía");
    }
    return res.send(items);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Error al obtener los items" });
  }
};

//Obtener un item por ID
export const getItemByIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await getItemByIdService(id);
    if (!item) {
      return res
        .status(404)
        .send({ mensaje: `No se encontró ningún item con ID ${id}` });
    }
    return res.send(item);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Error al obtener el item" });
  }
}

//Agregar un item
export const agregarItemController = async (req, res) => {
  const item = req.body;
  try {
    const nuevoItem = await agregarItemService(item);
    return res
      .status(200)
      .send({ mensaje: "Item agregado correctamente", item: nuevoItem });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Error al agregar el item" });
  }
};

//Editar un item
export const editarItemController = async (req, res) => {
  const { id } = req.params;
  const item = req.body;
  try {
    const itemEditado = await editarItemService(id, item);

    if (!itemEditado) {
      return res
        .status(404)
        .send({ mensaje: `No se encontró ningún item con ID ${id}` });
    }

    return res
      .status(200)
      .send({
        mensaje: "El item ha sido editado correctamente",
        item: itemEditado,
      });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Error al editar el item" });
  }
};

//Eliminar un item
export const eliminarItemController = async (req, res) => {
  const { id } = req.params;
  try {
    const itemEliminado = await eliminarItemService(id);

    if (!itemEliminado) {
      return res
        .status(404)
        .send({ mensaje: `No se encontró ningún item con ID ${id}` });
    }

    return res
      .status(200)
      .send({
        mensaje: "El item ha sido eliminado correctamente",
        item: itemEliminado,
      });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Error al eliminar el item" });
  }
};
