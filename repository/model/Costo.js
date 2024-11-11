import mongoose from 'mongoose';

const costoSchema = mongoose.Schema(
    {
        monto: {
            type: String,
            required: true
        },
        categoria: {
            type: String,
            required: true
        },
    }
)

export const Costos = mongoose.model('Costos', costoSchema);