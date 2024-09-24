const mongoose = require('mongoose');

const pedidoCarritoSchema = new mongoose.Schema({
  usuarioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UsuarioModel',  // Referencia al modelo de Usuario
    required: true
  },
  carritoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CarritoModel',  // Referencia al modelo de Carrito
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  estado: {
    type: String,
    enum: ['pendiente', 'procesando', 'enviado', 'entregado'],
    default: 'pendiente'
  },
  fechaCreacion: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('PedidoCarritoModel', pedidoCarritoSchema);
