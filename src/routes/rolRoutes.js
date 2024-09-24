const express = require('express');
const { crearRol, obtenerRoles, actualizarRol, eliminarRol } = require('../controllers/rolesController');

const router = express.Router();

router.post('/', crearRol);
router.get('/', obtenerRoles);
router.put('/:id', actualizarRol);
router.delete('/:id', eliminarRol);

module.exports = router;