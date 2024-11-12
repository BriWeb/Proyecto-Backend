import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    item_id: { type: String, required: true }, 
    cantidad: { type: Number, required: true },
    categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria', required: true },
    descripcion: { type: String },
  });
  
  export const Item = mongoose.model('Item', itemSchema);
  