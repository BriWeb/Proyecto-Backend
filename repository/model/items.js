import mongoose from "mongoose";

const itemsSchema = mongoose.Schema({
  descripcion: {
    type: String,
    required: true,
  },
  categoria: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categoria",
    required: true,
  },
  valor: {
    type: Number,
    required: true,
  },
});

export const Items = mongoose.model("Items", itemsSchema);
