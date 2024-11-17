import mongoose from "mongoose";

const costoSchema = mongoose.Schema({
  monto: {
    type: Number,
    required: false,
  },
  cantidad: {
    type: Number,
    required: true,
  },
  items: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Items",
    required: true,
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
});

export const Costos = mongoose.model("Costos", costoSchema);
