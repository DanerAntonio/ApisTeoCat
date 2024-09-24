const Cart = require('../models/cart');

// Crear un carrito
exports.createCart = async (req, res) => {
  try {
    const newCart = new Cart(req.body);
    await newCart.save();
    res.status(201).json(newCart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos los carritos
exports.getCarts = async (req, res) => {
  try {
    const carts = await Cart.find().populate('clientId');
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un carrito
exports.updateCart = async (req, res) => {
  try {
    const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un carrito
exports.deleteCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Carrito eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
