const express = require('express');
const router = express.Router();
const pedidoCarritoController = require('./controllers/pedidoCarritoController');

// Rutas CRUD para pedidos de carrito
router.post('/', pedidoCarritoController.crearPedidoCarrito);
router.get('/', pedidoCarritoController.obtenerPedidosCarrito);
router.get('/:id', pedidoCarritoController.obtenerPedidoCarritoPorId);
router.put('/:id', pedidoCarritoController.actualizarPedidoCarrito);
router.delete('/:id', pedidoCarritoController.eliminarPedidoCarrito);

module.exports = router;
