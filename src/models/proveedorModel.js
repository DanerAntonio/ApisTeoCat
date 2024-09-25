// src/models/Proveedor.js

const mongoose = require('mongoose');

const proveedorSchema = new mongoose.Schema({
    nombre_compania: { type: String, required: true },
    persona_contacto: { type: String, required: true },
    correo: { type: String, required: true },
    telefono: { type: String, required: true },
    direccion1: { type: String, required: true },
    direccion2: { type: String },
    ciudad: { type: String, required: true },
    estado: { type: String, required: true },
    codigo_postal: { type: String, required: true },
    nit: { type: String, required: true },
});

const Proveedor = mongoose.model('Proveedor', proveedorSchema);
module.exports = Proveedor;
