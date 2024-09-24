const express = require('express');
const router = express.Router();
const ventasController = require('../controllers/ventasController'); // Asegúrate de que esta ruta sea correcta

// Rutas para las ventas
router.post('/', ventasController.createventas); // Asegúrate de que el método esté definido en ventasController

module.exports = router;
