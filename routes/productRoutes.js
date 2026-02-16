const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth'); // El guardia que revisa el Token

// @route   GET api/products
// @desc    Obtener todos los productos (Ruta protegida)
router.get('/', auth, (req, res) => {
    res.json({ msg: "Lista de productos cargada (Aquí vendrán tus datos de Mongo)" });
});

// @route   POST api/products
// @desc    Crear un producto (Ruta protegida)
router.post('/', auth, (req, res) => {
    res.json({ msg: "Producto creado con éxito" });
});

module.exports = router;