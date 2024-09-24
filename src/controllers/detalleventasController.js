const DetalleVenta = require('../models/detalleVentas');

// Crear un detalle de venta
exports.createDetalleVenta = async (req, res) => {
  try {
    const newDetalleVenta = new DetalleVenta(req.body);
    await newDetalleVenta.save();
    res.status(201).json(newDetalleVenta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos los detalles de venta
exports.getDetalleVentas = async (req, res) => {
  try {
    const details = await DetalleVenta.find();
    res.status(200).json(details);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un detalle de venta
exports.updateDetalleVenta = async (req, res) => {
  try {
    const detail = await DetalleVenta.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(detail);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un detalle de venta
exports.deleteDetalleVenta = async (req, res) => {
  try {
    await DetalleVenta.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Detalle de venta eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
