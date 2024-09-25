const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    trim: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Por favor, ingrese un email válido']
  },
  phone: { type: String, required: true, trim: true },
  address: { type: String, required: true, trim: true },
}, { timestamps: true });

// Índice para mejorar la búsqueda por email
clientSchema.index({ email: 1 });

module.exports = mongoose.model('Client', clientSchema);
