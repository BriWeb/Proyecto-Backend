import mongoose from 'mongoose';

const costoSchema = new mongoose.Schema({
    costo_id: { type: String, required: true },
    precio: { type: Number, required: true },
    item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
    fecha: { type: String },
  });

export const Costos = mongoose.model('Costos', costoSchema);