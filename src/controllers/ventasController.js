// Asegúrate de que la ruta sea correcta


// Crear una venta
// src/controllers/ventasController.js
// src/controllers/ventasController.js
const Venta = require('../models/ventas'); // Asegúrate de que este sea el nombre correcto de tu modelo

// Lógica para el controlador
exports.createventas = (req, res) => {
    const nuevaVenta = new Venta(req.body);
    nuevaVenta.save()
        .then(() => res.status(201).send('Venta creada'))
        .catch(err => res.status(500).send(err.message));
};


// Obtener todas las ventas
exports.getVentas = async (req, res) => {
  try {
    const ventas = await Venta.find();
    res.status(200).json(ventas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar una venta
exports.updateVenta = async (req, res) => {
  try {
    const venta = await Venta.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(venta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar una venta
exports.deleteVenta = async (req, res) => {
  try {
    await Venta.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Venta eliminada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
