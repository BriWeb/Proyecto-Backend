import { agregarUsuarioService, getUsuariosService, eliminarUsuarioService } from "../services/usuario.js"


export const getUsuariosController = async (req, res) => {
    try {
        let usuarios = await getUsuariosService();
        if (usuarios.length === 0) {
            return res.send('La Base de datos está vacía');
        }
        return res.send(usuarios);

    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Error al obtener los usuarios' });
    }
}

export const agregarUsuariosController = async (req, res) => {
    const usuario = req.body;
    try {
        const usuarioNuevo = await agregarUsuarioService(usuario);
        return res.status(200).send({ mensaje: 'Usuario agregado correctamente', Usuario: usuarioNuevo });

    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Error al agregar el usuario' });
    }
}

export const eliminarUsuarioController = async (req, res) => {
    const { id } = req.params
    try {
        const usuarioEliminado = await eliminarUsuarioService(id);

        if (!usuarioEliminado) {
            return res.status(404).send({ mensaje: `No se encotró ningún usuario con ID ${id}` });
        }

        return res.status(200).send({ mensaje: 'El usuario ha sido eliminado correctamente', Usuario: usuarioEliminado });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ mensaje: 'Error al eliminar la categoría' });
    }
}