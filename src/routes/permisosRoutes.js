const express = require('express');
const router = express.Router();
const permisosController = require('../controllers/permisosController'); // Verifica la ruta

// Asegúrate de que la función createPermiso esté definida en permisosController
router.post('/permiso', permisosController.createPermiso); 

module.exports = router;
