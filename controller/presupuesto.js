import { getPresupuestosService, getPresupuestoByIdService, agregarPresupuestoService, eliminarPresupuestoServicice, actualizarPresupuestoService } from "../services/presupuesto.js";
import mongoose from 'mongoose';


//Obtener todos los presupuestos
export const getPresupuestosController = async (req, res) => {
    try {
        let presupuestos = await getPresupuestosService();
        if (presupuestos.length === 0) {
            return res.status(200).send('La Base de datos está vacía');
        }
        return res.status(200).send(presupuestos);

    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Error al obtener los presupuestos' });
    }
}

//Obtener un presupuesto por id
export const getPresupuestoByIdController = async (req, res) => {
    const { id } = req.params;

    //Validar si el id es un ObjectId de mongoose de 24 caracteres
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ mensaje: 'ID inválido, debe contener 24 caracteres' });
    }

    try {
        let presupuesto = await getPresupuestoByIdService(req.params.id);
        if (!presupuesto) {
            return res.status(404).send({ message: 'No se encontró ningún presupuesto con ID ' + req.params.id });
        }
        return res.status(200).send(presupuesto);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Error al obtener el presupuesto id: ' + id });
    }
}

//Crear un presupuesto
export const agregarPresupuestoController = async (req, res) => {
    const presupuesto = req.body;
    try {
        const presupuestoNuevo = await agregarPresupuestoService(presupuesto);
        return res.status(201).send({ mensaje: 'Presupuesto agregado correctamente', Presupuesto: presupuestoNuevo });

    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Error al agregar el presupuesto' });
    }
}

//Eliminar un presupuesto por id
export const eliminarPresupuestoController = async (req, res) => {
    const { id } = req.params
    
    //Validar si el id es un ObjectId de mongoose de 24 caracteres
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ mensaje: 'ID inválido, debe contener 24 caracteres' });
    }
    try {
        const presupuestoEliminado = await eliminarPresupuestoServicice(id);

        if (!presupuestoEliminado) {
            return res.status(404).send({ mensaje: `No se encotró ningún presupuesto con ID ${id}` });
        }
        return res.status(200).send({ mensaje: 'Presupuesto eliminado correctamente', Presupuesto: presupuestoEliminado });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ mensaje: 'Error al eliminar el presupuesto' });
    }
}

//Editar un presupuesto por id
export const actualizarPresupuestoController = async (req, res) => {
    const { id } = req.params;
    const presupuestoActual = req.body;

    //Validar si el id es un ObjectId de mongoose de 24 caracteres
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ mensaje: 'ID inválido, debe contener 24 caracteres' });
    }

    try {
        const presupuestoActualizado = await actualizarPresupuestoService(id, presupuestoActual);
        if (!presupuestoActualizado) {
            return res.status(404).send({ message: 'No se encontró ningún presupuesto con ID ' + id });
        }
        return res.status(200).send({ mensaje: 'Presupuesto actualizado correctamente', Presupuesto: presupuestoActualizado });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ mensaje: 'Error al editar el presupuesto' });
    }
};
