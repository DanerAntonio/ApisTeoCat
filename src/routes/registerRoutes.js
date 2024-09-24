// src/routes/registerRoutes.js
const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController'); // Asegúrate de que esta ruta sea correcta

router.post('/register', registerController.handleRegister); // Ejemplo de una ruta que use el controlador

module.exports = router;
