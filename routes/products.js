const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const productController = require('../controllers/productController');

// Solo usuarios autenticados pueden ver productos
router.get('/', auth, productController.getProducts);

module.exports = router;