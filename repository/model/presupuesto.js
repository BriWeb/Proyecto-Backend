import mongoose from 'mongoose';

const presupuestoSchema = new mongoose.Schema({
    usuarioID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Usuario',
        required: true,
    },
    descripcion: {
        type: String
    },
    montoLimite:{
        type: Number,
        required: true,
    },
    fechaInicio:{
        type:Date,
        required: true,
    },
    fechaFin:{
        type:Date,
        required: true,
    },
    alerta:{
        type:Boolean,
        default: false,
    },
})

export const Presupuesto = mongoose.model('Presupuesto', presupuestoSchema);
