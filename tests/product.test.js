require('dotenv').config();
const request = require('supertest');
const app = require('../server');

describe('Pruebas de Productos (Rutas Protegidas)', () => {
    
    test('Debería denegar acceso a productos si no hay token', async () => {
        const res = await request(app).get('/api/products');
        
        // Esperamos un 401 porque el middleware de auth debería detenerlo
        expect(res.statusCode).toEqual(401);
        expect(res.body.msg).toBe('No hay token, permiso denegado');
    });

    // Aquí podrías agregar una prueba que sí envíe un token válido
});