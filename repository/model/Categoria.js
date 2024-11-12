import mongoose from 'mongoose';

const categoriaSchema = new mongoose.Schema({
    categoria_id: { type: String, required: true },
    nombre: { type: String, required: true },
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
});

export const Categoria = mongoose.model('Categoria', categoriaSchema);
