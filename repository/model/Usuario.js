import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
    usuario_id: { type: String, required: true },
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
});

export const Usuario = mongoose.model('Usuario', usuarioSchema);