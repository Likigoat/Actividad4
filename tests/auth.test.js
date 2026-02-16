require('dotenv').config();
const request = require('supertest');
const app = require('../server'); // Importamos tu server.js
const mongoose = require('mongoose');
const User = require('../models/User');

describe('Pruebas de Autenticación', () => {
    // Limpiar la base de datos de prueba antes de empezar
    beforeAll(async () => {
        await User.deleteMany({});
    });

    // Cerrar conexión a la base de datos al terminar
    afterAll(async () => {
        await mongoose.connection.close();
    });

    test('Debería registrar un nuevo usuario exitosamente', async () => {
        const res = await request(app)
            .post('/api/auth/register')
            .send({
                username: 'testuser',
                email: 'test@gmail.com',
                password: 'password123'
            });
        
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('token');
    });

    test('No debería dejar registrar un usuario con email duplicado', async () => {
        const res = await request(app)
            .post('/api/auth/register')
            .send({
                username: 'testuser2',
                email: 'test@gmail.com', // Mismo email que el anterior
                password: 'password123'
            });
        
        expect(res.statusCode).toEqual(400);
    });
});