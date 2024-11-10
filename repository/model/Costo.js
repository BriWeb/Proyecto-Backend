import mongoose from 'mongoose';

const costoSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        materia_id: {
            type: String,
            required: true
        },
        turno_id: {
            type: Number,
            required: true
        },
        comision: {
            type: String,
            required: true
        },
        debe_correlativa: {
            type: Boolean,
            required: true
        }
    }
)

export const Costos = mongoose.model('Costos', costoSchema);