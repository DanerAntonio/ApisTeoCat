const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
  usuarioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UsuarioModel',  // Referencia al modelo de Usuario
    required: true
  },
  productos: [
    {
      productoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductoModel',  // Referencia al modelo de Producto
        required: true
      },
      cantidad: {
        type: Number,
        required: true,
        min: 1
      },
      precio: {
        type: Number,
        required: true
      }
    }
  ],
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

module.exports = mongoose.model('PedidoModel', pedidoSchema);
