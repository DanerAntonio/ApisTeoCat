const mongoose = require('mongoose');

const DetalleVentaSchema = new mongoose.Schema({
  Id_venta: { type: String, required: true },
  Id_producto: { type: Number, required: true },
  Cantidad: { type: Number, required: true },
  Prec_unitario: { type: Number, required: true },
  Subtotal: { type: Number, required: true }
});

module.exports = mongoose.model('DetalleVentas', DetalleVentaSchema);
