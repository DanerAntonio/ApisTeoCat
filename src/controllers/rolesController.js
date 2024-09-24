

const Rol = require('../models/roles');

exports.crearRol = async (req, res) => {
    const { nombRol, estadoRol } = req.body;
    try {
        const nuevoRol = new Rol({ nombRol, estadoRol });
        const rolGuardado = await nuevoRol.save();
        res.status(201).json(rolGuardado);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.obtenerRoles = async (req, res) => {
    try {
        const roles = await Rol.find();
        res.status(200).json(roles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.actualizarRol = async (req, res) => {
    const { id } = req.params;
    try {
        const rolActualizado = await Rol.findByIdAndUpdate(id, req.body, { new: true });
        if (!rolActualizado) {
            return res.status(404).json({ message: 'Rol no encontrado' });
        }
        res.status(200).json(rolActualizado);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.eliminarRol = async (req, res) => {
    const { id } = req.params;
    try {
        const rolEliminado = await Rol.findByIdAndDelete(id);
        if (!rolEliminado) {
            return res.status(404).json({ message: 'Rol no encontrado' });
        }
        res.status(200).json({ message: 'Rol eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};