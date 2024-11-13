import { Categoria } from './model/Categoria.js';
import { connect } from '../database/db.js';

connect();

export const getCategoriasRepository = async () => {
    try {
        const categoria = await Categoria.find();

        console.log(categoria);

        return categoria;

    } catch (error) {
        console.error('Error en el Repositorio: ', error);
        throw new Error('Error en la consulta a la base de datos');
    }
}

export const agregarCategoriaRepository = async (nuevaCategoria) => {
    try {
        const categoriaNueva = new Categoria(nuevaCategoria);
        await categoriaNueva.save();
        console.log(categoriaNueva);

    } catch (error) {
        console.error('Error en el Repositorio: ', error);
        throw new Error('Error al agregar costo');
    }
}

export const eliminarCategoriaRepository = async (id) => {

    try {
        const categoria = await Categoria.findByIdAndDelete(id);
        if(!categoria) {
            console.log('Categoría no encontrado');
        }else {
            console.log('Se eliminó la siguiente categoría de la lista');
            return categoria;
        }
    } catch (error) {
        console.error('Error en el repositorio', error);
        throw new Error('Error al eliminar el costo de la base de datos');
    }
}

export const actualizarCatRepository = async (id, cat) => {
    try {
        const categoria = await Categoria.findByIdAndUpdate(id, cat, { new: true });
        
        if(!cat){
            console.log('Categoria no encontrada');
            return null;
        }else{
            console.log('Categoria actualizada:', cat);
            return cat;
        }
    } catch (error) {
        console.error('Error en el repositorio', error);
        throw new Error('Error al actualizar la categoria de la base de datos');
    }
}