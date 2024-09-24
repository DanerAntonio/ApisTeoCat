const mongoose = require('mongoose');

// Definición del esquema del carrito
const cartSchema = new mongoose.Schema({
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
  products: [
    {
      productId: { type: String, required: true },
      quantity: { type: Number, required: true, default: 1 },
      price: { type: Number, required: true },
    }
  ],
  total: { type: Number, required: true }
}, { timestamps: true });

// Exportar el modelo del carrito
module.exports = mongoose.model('Cart', cartSchema);
