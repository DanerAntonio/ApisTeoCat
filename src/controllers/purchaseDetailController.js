const PurchaseDetail = require('../models/purchaseDetail');

// Crear un detalle de compra
exports.createPurchaseDetail = async (req, res) => {
  try {
    const newPurchaseDetail = new PurchaseDetail(req.body);
    await newPurchaseDetail.save();
    res.status(201).json(newPurchaseDetail);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos los detalles de compra
exports.getPurchaseDetails = async (req, res) => {
  try {
    const details = await PurchaseDetail.find().populate('purchaseId');
    res.status(200).json(details);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un detalle de compra
exports.updatePurchaseDetail = async (req, res) => {
  try {
    const detail = await PurchaseDetail.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(detail);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un detalle de compra
exports.deletePurchaseDetail = async (req, res) => {
  try {
    await PurchaseDetail.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Detalle de compra eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
