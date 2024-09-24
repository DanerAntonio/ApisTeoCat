const mongoose = require('mongoose');

const PermisoSchema = new mongoose.Schema({
  Permiso: { type: String, required: true },
  estadoPerm: { type: Boolean, default: true }
});

module.exports = mongoose.model('Permiso', PermisoSchema);
