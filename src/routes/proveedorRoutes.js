// src/routes/proveedorRoutes.js
const express = require('express');
const Proveedor = require('../models/proveedorModel');

const router = express.Router();

// Ruta para obtener todos los proveedores
router.get('/', async (req, res) => {
    try {
        const proveedores = await proveedor.find();
        res.json(proveedores);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Ruta para crear un nuevo proveedor
router.post('/', async (req, res) => {
    const proveedor = new Proveedor(req.body);
    try {
        const nuevoProveedor = await proveedor.save();
        res.status(201).json(nuevoProveedor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Otras rutas para Proveedor...
module.exports = router;
