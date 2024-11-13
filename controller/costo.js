import { agregarCostoService, getCostosService, eliminarCostoService } from "../services/costo.js"


export const getCostosController = async (req, res) => {
    try {
        let costos = await getCostosService();
        if(costos.length === 0) {
            return res.send('La Base de datos está vacía');
        }
        return res.send(costos);
        
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Error al obtener los costos' });
    }
}

export const agregarCostosController = async (req, res) => {
    const costo = req.body;
    try {
        const costoNuevo = await agregarCostoService(costo);
        return res.status(200).send({mensaje: 'Costo agregado correctamente', Costo: costoNuevo});
        
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Error al agregar el costo' });
    }
}

export const eliminarCostoController = async (req, res) => {
    const {id}= req.params
    try {
        const costoEliminado = await eliminarCostoService(id);

        if(!costoEliminado) {
            return res.status(404).send({mensaje: `No se encotró ningún costo con ID ${id}`});
        }

        return res.status(200).send({mensaje: 'El costo ha sido eliminado correctamente', Costo: costoEliminado});
    } catch (error) {
        console.error(error);
        return res.status(500).send({mensaje: 'Error al eliminar el costo'});
    }
}