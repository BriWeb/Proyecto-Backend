import mongoose from 'mongoose';

const costoSchema = mongoose.Schema(
    {
        monto: {
            type: String,
            required: true
        },
        // categoria: {
        //     type: String,
        //     required: true
        // },
        categoria: {
            type: mongoose.Schema.Types.ObjectId, //este
            // type: mongoose.ObjectId, //o este
            ref: 'Categoria',
            required: true
        },
    }
)

export const Costos = mongoose.model('Costos', costoSchema);