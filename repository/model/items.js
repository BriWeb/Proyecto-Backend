import mongoose from 'mongoose';

const itemsSchema = mongoose.Schema(
    {
         cantidad: {
         type: Number,
          required: true
         },
          descripcion: { 
         type: String,
         required: true
         }
});

export const Items = mongoose.model('Items', itemsSchema);