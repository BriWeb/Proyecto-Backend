import { getCategoriasService, getCategoriaByIdService, agregarCategoriaService, eliminarCategoriaService, actualizarCategoriaService } from "../services/categoria.js"

//Obtener todos los categorias
export const getCategoriasController = async (req, res) => {
    try {
        let categorias = await getCategoriasService();
        if (categorias.length === 0) {
            return res.send('La Base de datos está vacía');
        }
        return res.send(categorias);

    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Error al obtener los categorias' });
    }
}

//Obtener categoria por id
export const getCategoriaByIdController = async (req, res) => {
    const { id } = req.params
    try {
        const categoria = await getCategoriaByIdService(id);
        if (!categoria) {
            return res.status(404).send({ mensaje: `No se encontró ninguna categoría con ID ${id}` });
        }
        return res.status(200).send(categoria);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ mensaje: 'Error al obtener la categoría' });
    }
};

//Agregar una categoria
export const agregarCategoriasController = async (req, res) => {
    const categoria = req.body;
    try {
        const categoriaNueva = await agregarCategoriaService(categoria);
        return res.status(200).send({ mensaje: 'Categoría agregada correctamente', Categoria: categoriaNueva });

    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Error al agregar la categoría' });
    }
}

//Eliminar una categoria
export const eliminarCategoriaController = async (req, res) => {
    const { id } = req.params
    try {
        const categoriaEliminada = await eliminarCategoriaService(id);

        if (!categoriaEliminada) {
            return res.status(404).send({ mensaje: `No se encotró ningún categoria con ID ${id}` });
        }

        return res.status(200).send({ mensaje: 'La categoría ha sido eliminada correctamente', Categoria: categoriaEliminada });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ mensaje: 'Error al eliminar la categoría' });
    }
}

//Actualizar una categoria
export const actualizarCategoriaController = async (req, res) => {
    const { id } = req.params
    const categoriaActualizada = req.body;
    try {
        const categoria = await actualizarCategoriaService(id, categoriaActualizada);
        if (!categoria) {
            return res.status(404).send({ mensaje: `No se encontró ninguna categoría con ID ${id}` });
        }
        return res.status(200).send({ mensaje: 'Categoría actualizada correctamente', Categoria: categoria });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ mensaje: 'Error al actualizar la categoría' });
    }
}