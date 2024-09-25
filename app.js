const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// Cargar variables de entorno
dotenv.config();

// Crear la aplicación de Express
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Middleware para servir archivos estáticos
app.use(express.static('public'));

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, {
    /*useNewUrlParser: true,
    useUnifiedTopology: true,*/
})
.then(() => console.log('MongoDB connected'))
.catch((err) => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
});

// Rutas de autenticación
const AuthRoutes = require('./src/routes/AuthRoutes');
app.use('/api/auth', AuthRoutes);

// Rutas del carrito de compras
const cartRoutes = require('./src/routes/cart');
app.use('/api/cart', cartRoutes);

// Rutas de clientes
const clientRoutes = require('./src/routes/clientRoutes');
app.use('/api/clients', clientRoutes);

// Rutas de permisos
const permisosRoutes = require('./src/routes/permisosRoutes');
app.use('/api/permisos', permisosRoutes);

// Rutas de compras (purchase)
const purchaseRoutes = require('./src/routes/purchaseRoutes'); // Módulo de compras
app.use('/api/purchases', purchaseRoutes);

// Rutas de detalles de compras (purchaseDetail)
const purchaseDetailRoutes = require('./src/routes/purchaseDetailRoutes');
app.use('/api/purchase-details', purchaseDetailRoutes);

// Rutas de registro
const registerRoutes = require('./src/routes/registerRoutes');
app.use('/api/register', registerRoutes);

// Rutas de roles
const rolRoutes = require('./src/routes/rolRoutes');
app.use('/api/roles', rolRoutes);

// Rutas de usuarios
const userRoutes = require('./src/routes/userRoutes');
app.use('/api/users', userRoutes);

// Rutas adicionales para usuarios
const usuariosRoutes = require('./src/routes/usuariosRoutes');
app.use('/api/usuarios', usuariosRoutes);

// Rutas de ventas
const ventasRoutes = require('./src/routes/ventasRoutes');
app.use('/api/ventas', ventasRoutes);

// Rutas para detalles de ventas
const detalleVentasRoutes = require('./src/routes/detalleVentasRoutes');
app.use('/api/detalle-ventas', detalleVentasRoutes);

const proveedorRoutes = require('./src/routes/proveedorRoutes');

app.use('/api/proveedor', proveedorRoutes);

// Ruta principal (opcional)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Ruta para formulario de registro de compra
app.get('/registrarCompra.html', (req, res) => {
    res.sendFile(__dirname + '/public/registrarCompra.html');
});

// Ruta para pedidos
const pedidoRoutes = require('./src/routes/pedidoRoutes');
app.use('/api/pedidos', pedidoRoutes);

// Puerto del servidor
const PORT = process.env.PORT || 5000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//aqui esta lo de proveedor

