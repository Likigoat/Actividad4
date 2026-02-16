const express = require('express');
const router = express.Router();
const { check } = require('express-validator'); // Opcional: para validar datos de entrada
const authController = require('../controllers/authController');

// @route   POST api/auth/register

// @desc    Registrar un usuario
// @access  Público
router.post(
    '/register',
    [
        check('username', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'Agrega un email válido').isEmail(),
        check('password', 'El password debe ser de mínimo 6 caracteres').isLength({ min: 6 })
    ],
    authController.registerUser
);

// @route   POST api/auth/login
// @desc    Autenticar usuario y obtener token
// @access  Público
router.post(
    '/login',
    [
        check('email', 'Agrega un email válido').isEmail(),
        check('password', 'El password es obligatorio').exists()
    ],
    authController.loginUser
);

module.exports = router;