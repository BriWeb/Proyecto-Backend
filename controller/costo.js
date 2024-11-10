import { agregarCostoService, getCostosService } from "../services/costo.js"


export const getCostosController = async (req, res) => {
    try {
        let costos = await getCostosService();
        if(costos.length === 0) {
            res.send('La Base de datos está vacía');
        }
        res.send(costos);
        
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error al obtener los costos' });
    }
}

export const agregarCostosController = async (req, res) => {
    const { nombre, materia_id, turno_id, comision, debe_correlativa } = req.body;
    try {
        const costoNuevo = await agregarCostoService({nombre, materia_id, turno_id, comision, debe_correlativa});
        res.status(200).send({mensaje: 'Costo agregado correctamente', Costo: costoNuevo});
        
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error al agregar el costo' });
    }
}
