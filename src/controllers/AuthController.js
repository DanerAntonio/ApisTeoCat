// src/controller/AuthController.js

const login = (req, res) => {
  // Lógica de inicio de sesión
  res.send('Inicio de sesión exitoso');
};

const register = (req, res) => {
  // Lógica de registro
  res.send('Registro exitoso');
};

module.exports = { login, register };
