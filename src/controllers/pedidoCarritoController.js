const PedidoCarrito = require('../models/pedidoCarritoModel');

// Crear un nuevo pedido desde carrito
exports.crearPedidoCarrito = async (req, res) => {
  try {
    const nuevoPedidoCarrito = new PedidoCarrito(req.body);
    await nuevoPedidoCarrito.save();
    res.status(201).json(nuevoPedidoCarrito);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el pedido desde carrito', error: error.message });
  }
};

// Obtener todos los pedidos de carrito
exports.obtenerPedidosCarrito = async (req, res) => {
  try {
    const pedidosCarrito = await PedidoCarrito.find().populate('usuarioId carritoId');
    res.status(200).json(pedidosCarrito);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los pedidos desde carrito', error: error.message });
  }
};

// Obtener un pedido de carrito por ID
exports.obtenerPedidoCarritoPorId = async (req, res) => {
  try {
    const pedidoCarrito = await PedidoCarrito.findById(req.params.id).populate('usuarioId carritoId');
    if (!pedidoCarrito) {
      return res.status(404).json({ mensaje: 'Pedido desde carrito no encontrado' });
    }
    res.status(200).json(pedidoCarrito);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el pedido desde carrito', error: error.message });
  }
};

// Actualizar un pedido de carrito
exports.actualizarPedidoCarrito = async (req, res) => {
  try {
    const pedidoCarritoActualizado = await PedidoCarrito.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!pedidoCarritoActualizado) {
      return res.status(404).json({ mensaje: 'Pedido desde carrito no encontrado' });
    }
    res.status(200).json(pedidoCarritoActualizado);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar el pedido desde carrito', error: error.message });
  }
};

// Eliminar un pedido de carrito
exports.eliminarPedidoCarrito = async (req, res) => {
  try {
    const pedidoCarritoEliminado = await PedidoCarrito.findByIdAndDelete(req.params.id);
    if (!pedidoCarritoEliminado) {
      return res.status(404).json({ mensaje: 'Pedido desde carrito no encontrado' });
    }
    res.status(200).json({ mensaje: 'Pedido desde carrito eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el pedido desde carrito', error: error.message });
  }
};
