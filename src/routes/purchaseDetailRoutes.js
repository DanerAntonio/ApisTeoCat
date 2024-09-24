const express = require('express');
const router = express.Router();
const PurchaseDetail = require('../models/purchaseDetail'); // Modelo de Detalles de Compras

// Obtener el detalle de una compra por ID
router.get('/:purchaseId', async (req, res) => {
    try {
        const purchaseDetail = await PurchaseDetail.findOne({ purchaseId: req.params.purchaseId }).populate('productId');
        if (!purchaseDetail) {
            return res.status(404).json({ error: 'Detalle de compra no encontrado' });
        }
        res.json(purchaseDetail);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
