import mongoose from "mongoose";

const categoriaSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
  },
});

export const Categoria = mongoose.model("Categoria", categoriaSchema);
