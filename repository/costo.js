import { Costos } from './model/Costo.js';
import { connect } from '../database/db.js';

connect();

export const getCostosRepository = async () => {
    try {
        const costos = await Costos.find();

        console.log(costos);

        return costos;

    } catch (error) {
        console.error('Error en el Repositorio: ', error);
        throw new Error('Error en la consulta a la base de datos');
    }
}

export const agregarCostoRepository = async (nuevoCosto) => {
    try {
        const costoNuevo = new Costos(nuevoCosto);
        await costoNuevo.save();
        console.log(costoNuevo);

    } catch (error) {
        console.error('Error en el Repositorio: ', error);
        throw new Error('Error al agregar costo');
    }
}