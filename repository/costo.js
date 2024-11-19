import { Costos } from "./model/Costo.js";
import { Items } from "./model/items.js";
import { connect } from "../database/db.js";
import mongoose from "mongoose";

connect();

//Obtener todos los costos
export const getCostosRepository = async () => {
  try {
    const costos = await Costos.find()
      .populate("usuario")
      .populate({
        path: "items",
        populate: {
          path: "categoria",
        },
      });

    console.log(costos);

    return costos;
  } catch (error) {
    console.error("Error en el Repositorio: ", error);
    throw new Error("Error en la consulta a la base de datos");
  }
};


//Obtener costos por usuario
export const getCostosUsuarioRepository = async (id) => {
  try {
    //Validar que el ID del usuario sea válido
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("El ID del usuario no es válido");
    }
    //Convertir usuarioId a ObjectId
    const costosUsuario = await Costos.find({ usuario: new mongoose.Types.ObjectId(id) })
      .populate("usuario")
      .populate({
        path: "items",
        populate: {
          path: "categoria",
        },
      });
    console.log("Costos filtrados por usuario:", costosUsuario);
    return costosUsuario;

  } catch (error) {
    console.error("Error en el Repositorio: ", error);
    throw new Error("Error en la consulta a la base de datos");
  }
};

export const agregarCostoRepository = async (nuevoCosto) => {
  try {
    let item_id = nuevoCosto.items;
    const itemEncontrado = await Items.findById(item_id);
    if (!itemEncontrado) {
      console.log("No existen un item de ese tipo.");
      return false;
    }

    nuevoCosto.monto = itemEncontrado.valor * nuevoCosto.cantidad;
    const costoNuevo = new Costos(nuevoCosto);
    await costoNuevo.save();
    return nuevoCosto;
  } catch (error) {
    console.error("Error en el Repositorio: ", error);
    throw new Error("Error al agregar costo");
  }
};

export const eliminarCostoRepository = async (id) => {
  try {
    const costo = await Costos.findByIdAndDelete(id);
    if (!costo) {
      console.log("Costo no encontrado");
    } else {
      console.log("Se eliminó el siguiente costo de la lista");
      return costo;
    }
  } catch (error) {
    console.error("Error en el repositorio", error);
    throw new Error("Error al eliminar el costo de la base de datos");
  }
};
