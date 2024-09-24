const Permiso = require('../models/permisos');

// Crear un permiso
// permisosController.js

exports.createPermiso = (req, res) => {
  // Lógica para manejar la creación de permisos
  res.status(200).send('Permiso creado exitosamente');
};


// Obtener todos los permisos
exports.getpermisos = async (req, res) => {
  try {
    const permisos = await Permiso.find();
    res.status(200).json(permisos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un permiso
exports.updatepermiso = async (req, res) => {
  try {
    const permiso = await Permiso.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(permiso);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un permiso
exports.deletepermiso = async (req, res) => {
  try {
    await Permiso.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Permiso eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
