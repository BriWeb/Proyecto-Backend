import { getUsuariosRepository, getUsuarioByIdRepository,agregarUsuarioRepository, editarUsuarioRepository ,eliminarUsuarioRepository } from "../repository/usuario.js";

//Obtener todos los usuarios
export const getUsuariosService = async () => {
    try {
        return getUsuariosRepository();
    } catch (error) {
        console.error('Error en el Servicio: ', error);
        throw new Error('Error al obtener los usuarios');
    }
}

//Obtener usuario por id
export const getUsuarioByIdService = async (id) => {
    try {
        return getUsuarioByIdRepository(id);
    } catch (error) {
        console.log('Error en el servicio', error);
        throw new Error('Error al obtener el usuario id: ' + id);
    }
}

//Crear un usuario
export const agregarUsuarioService = async (usuario) => {
    try {
        const usuarioNuevo = await agregarUsuarioRepository(usuario);

        return usuarioNuevo;
    } catch (error) {
        console.error('Error en el Servicio: ', error);
        throw new Error('Error al aregegar el usuario');
    }
}

//Editar un usuario por id
export const editarUsuarioService = async (id, usuario) => {
    try {
        return editarUsuarioRepository(id, usuario);
    } catch (error) {
        console.error('Error en el service', error);
        throw new Error('Error al editar el usuario');        
    }
}

//Eliminar un usuario por id
export const eliminarUsuarioService = async (id) => {
    try {
        const usuarioEliminado = await eliminarUsuarioRepository(id);
        return usuarioEliminado;

    } catch (error) {
        console.error('Error en el service', error);
        throw new Error('Error al eliminar el usuario');
    }
}