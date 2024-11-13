import { agregarUsuarioRepository, getUsuariosRepository, eliminarUsuarioRepository } from "../repository/usuario.js";

export const getUsuariosService = async () => {
    try {
        return getUsuariosRepository();
    } catch (error) {
        console.error('Error en el Servicio: ', error);
        throw new Error('Error al obteber los datos');
    }
}

export const agregarUsuarioService = async (usuario) => {
    try {
        const usuarioNuevo = await agregarUsuarioRepository(usuario);

        return usuarioNuevo;
    } catch (error) {
        console.error('Error en el Servicio: ', error);
        throw new Error('Error al aregegar el usuario');
    }
}

export const eliminarUsuarioService = async (id) => {
    try {
        const usuarioEliminado = await eliminarUsuarioRepository(id);
        return usuarioEliminado;

    } catch (error) {
        console.error('Error en el service', error);
        throw new Error('Error al eliminar el usuario');
    }
}