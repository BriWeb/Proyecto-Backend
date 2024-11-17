import {
  getUsuariosService,
  getUsuarioByIdService,
  agregarUsuarioService,
  editarUsuarioService,
  eliminarUsuarioService,
} from "../services/usuario.js";
import mongoose from "mongoose";

//Obtener todos los usuarios
export const getUsuariosController = async (req, res) => {
  try {
    let usuarios = await getUsuariosService();
    if (usuarios.length === 0) {
      return res.status(200).send("La Base de datos está vacía");
    }
    return res.status(200).send(usuarios);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Error al obtener los usuarios" });
  }
};

//Obtener un usuario por id
export const getUsuarioByIdController = async (req, res) => {
  const { id } = req.params;

  //Validar si el id es un ObjectId de mongoose de 24 caracteres
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ mensaje: "ID inválido, debe contener 24 caracteres" });
  }

  try {
    let usuario = await getUsuarioByIdService(req.params.id);
    if (!usuario) {
      return res.status(404).send({
        message: "No se encontró ningún usuario con ID " + req.params.id,
      });
    }
    return res.status(200).send(usuario);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ message: "Error al obtener el usuario id: " + id });
  }
};

//Crear un usuario
export const agregarUsuarioController = async (req, res) => {
  const usuario = req.body;
  try {
    const usuarioNuevo = await agregarUsuarioService(usuario);
    return res.status(201).send({
      mensaje: "Usuario agregado correctamente",
      Usuario: usuarioNuevo,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Error al agregar el usuario" });
  }
};

//Editar un usuario por id
export const editarUsuarioController = async (req, res) => {
  const usuario = req.body;
  const { id } = req.params;

  //Validar si el id es un ObjectId de mongoose de 24 caracteres
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ mensaje: "ID inválido, debe contener 24 caracteres" });
  }

  try {
    const usuarioEditado = await editarUsuarioService(id, usuario);

    if (!usuarioEditado) {
      return res
        .status(404)
        .send({ mensaje: `No se encontró ningún usuario con ID ${id}` });
    }

    return res.status(200).send({
      mensaje: "El usuario ha sido editado correctamente",
      Usuario: usuarioEditado,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ mensaje: "Error al editar la categoría" });
  }
};

//Eliminar un usuario por id
export const eliminarUsuarioController = async (req, res) => {
  const { id } = req.params;

  //Validar si el id es un ObjectId de mongoose de 24 caracteres
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ mensaje: "ID inválido, debe contener 24 caracteres" });
  }

  try {
    const usuarioEliminado = await eliminarUsuarioService(id);

    if (!usuarioEliminado) {
      return res
        .status(404)
        .send({ mensaje: `No se encotró ningún usuario con ID ${id}` });
    }

    return res.status(200).send({
      mensaje: "El usuario ha sido eliminado correctamente",
      Usuario: usuarioEliminado,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ mensaje: "Error al eliminar la categoría" });
  }
};
