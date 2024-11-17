import { Usuario } from "./model/Usuario.js";
import { connect } from "../database/db.js";

connect();

//Obtener todos los usuarios
export const getUsuariosRepository = async () => {
  try {
    const usuarios = await Usuario.find();
    return usuarios;
  } catch (error) {
    console.error("Error en el Repositorio: ", error);
    throw new Error(
      'Error al consultar por la coleccion "usuarios" en la base de datos'
    );
  }
};

//Obtener un usuario por id
export const getUsuarioByIdRepository = async (id) => {
  try {
    const usuario = await Usuario.findById(id);
    return usuario;
  } catch (error) {
    console.log("Error en el Repositorio: ", error);
    throw new Error(
      "Error al consultar el usuario id: " + id + "en la base de datos"
    );
  }
};

//Crear un usuario
export const agregarUsuarioRepository = async (nuevoUsuario) => {
  try {
    const usuarioNuevo = new Usuario(nuevoUsuario);
    await usuarioNuevo.save();
    return usuarioNuevo;
  } catch (error) {
    console.error("Error en el Repositorio: ", error);
    throw new Error("Error al agregar el usuario: a la base de datos");
  }
};

//Editar un usuario por id
export const editarUsuarioRepository = async (id, usuario) => {
  try {
    const usuarioEditado = await Usuario.findByIdAndUpdate(id, usuario, {
      new: true,
    });
    if (!usuarioEditado) {
      console.log("Usuario no encontrado");
    } else {
      console.log("Se editó el usuario: " + id + "en la lista");
      console.log(usuarioEditado);
      return usuarioEditado;
    }
  } catch (error) {
    console.log("Error en el repositorio", error);
    throw new Error(
      "Error al editar el usuario: " + id + "en la base de datos"
    );
  }
};

//Eliminar un usuario por id
export const eliminarUsuarioRepository = async (id) => {
  try {
    const usuario = await Usuario.findByIdAndDelete(id);
    if (!usuario) {
      console.log("Usuario no encontrado");
    } else {
      console.log("Se eliminó el usuario: " + id + "de la lista");
      return Usuario;
    }
  } catch (error) {
    console.error("Error en el repositorio", error);
    throw new Error(
      "Error al eliminar el usuario: " + id + "de la base de datos"
    );
  }
};
