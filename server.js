require('dotenv').config(); // 1. Cargar variables de entorno primero
const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// 2. Conectar a la base de datos
connectDB();

// 3. Middlewares esenciales
app.use(express.json()); // Permite recibir JSON en el cuerpo de las peticiones
app.use(express.urlencoded({ extended: false }));

// 4. Servir archivos estáticos (el frontend en la carpeta public)
app.use(express.static(path.join(__dirname, 'public')));

// 5. Definir Rutas
// IMPORTANTE: Asegúrate de que estos archivos tengan "module.exports = router" al final
const authRoutes = require('./routes/authroutes');
const productRoutes = require('./routes/productRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// 6. Manejo de errores básico para rutas no encontradas
app.use((req, res, next) => {
    res.status(404).json({ msg: 'Ruta no encontrada' });
});

// 7. Configuración del puerto
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
    console.log(`📡 MongoDB intentando conectar...`);
});

// 8. Exportar para que Jest (Pruebas) pueda usarlo
module.exports = app;