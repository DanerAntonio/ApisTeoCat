const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

// Rutas CRUD para los pedidos
router.post('/', pedidoController.crearPedido);
router.get('/', pedidoController.obtenerPedidos);
router.get('/:id', pedidoController.obtenerPedidoPorId);
router.put('/:id', pedidoController.actualizarPedido);
router.delete('/:id', pedidoController.eliminarPedido);

module.exports = router;
