const express = require('express');
const router = express.Router();
const detalleVentaController = require('../controllers/detalleventasController');

router.post('/', detalleVentaController.createDetalleVenta);
router.get('/', detalleVentaController.getDetalleVentas);
router.put('/:id', detalleVentaController.updateDetalleVenta);
router.delete('/:id', detalleVentaController.deleteDetalleVenta);

module.exports = router;
