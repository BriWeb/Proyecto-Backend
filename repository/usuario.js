import { Usuario } from './model/Usuario.js';
import { connect } from '../database/db.js';

connect();

export const getUsuariosRepository = async () => {
    try {
        const usuario = await Usuario.find();

        console.log(usuario);

        return usuario;

    } catch (error) {
        console.error('Error en el Repositorio: ', error);
        throw new Error('Error en la consulta a la base de datos');
    }
}

export const agregarUsuarioRepository = async (nuevoUsuario) => {
    try {
        const usuarioNuevo = new Usuario(nuevoUsuario);
        await usuarioNuevo.save();
        console.log(usuarioNuevo);

    } catch (error) {
        console.error('Error en el Repositorio: ', error);
        throw new Error('Error al agregar costo');
    }
}

export const eliminarUsuarioRepository = async (id) => {

    try {
        const usuario = await Usuario.findByIdAndDelete(id);
        if (!usuario) {
            console.log('Usuario no encontrado');
        } else {
            console.log('Se eliminó el siguiente Usuario de la lista');
            return Usuario;
        }
    } catch (error) {
        console.error('Error en el repositorio', error);
        throw new Error('Error al eliminar el costo de la base de datos');
    }
}