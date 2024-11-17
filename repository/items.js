import { Items } from "./model/items.js";
import { connect } from "../database/db.js";

connect();

export const getItemsRepository = async () => {
  try {
    // const items = await Items.find();
    const items = await Items.find().populate("categoria");

    return items;
  } catch (error) {
    console.error("Error en el Repositorio: ", error);
    throw new Error("Error en la consulta a la base de datos");
  }
};

export const agregarItemRepository = async (nuevoItem) => {
  try {
    const itemNuevo = new Items(nuevoItem);
    await itemNuevo.save();
    console.log("Item agregado:", itemNuevo);
    return itemNuevo;
  } catch (error) {
    console.error("Error en el Repositorio: ", error);
    throw new Error("Error al agregar el item");
  }
};

export const eliminarItemRepository = async (id) => {
  try {
    const item = await Items.findByIdAndDelete(id);
    if (!item) {
      console.log("Item no encontrado");
      return null;
    } else {
      console.log("Se eliminó el siguiente item:", item);
      return item;
    }
  } catch (error) {
    console.error("Error en el repositorio: ", error);
    throw new Error("Error al eliminar el item de la base de datos");
  }
};

export const getItemByIdRepository = async (id) => {
  try {
    const item = await Items.findById(id);
    return item;
  } catch (error) {
    console.log("Error en el Repositorio: ", error);
    throw new Error(
      "Error al consultar el item id: " + id + "en la base de datos"
    );
  }
};
