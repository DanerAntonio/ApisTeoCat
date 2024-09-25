const express = require('express');
const router = express.Router();
 // Importar el modelo de Cliente
const { createClient, getClients, updateClient, deleteClient } = require('../controllers/clientController'); // Asegúrate de importar el controlador

// Obtener todos los clientes
router.get('/', getClients);

// Ruta para registrar un cliente
router.post('/', createClient);

// Actualizar un cliente
router.put('/:id', updateClient);

// Eliminar un cliente
router.delete('/:id', deleteClient);

module.exports = router;
