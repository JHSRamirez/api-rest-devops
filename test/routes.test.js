const request = require('supertest');
const express = require('express');
const userRoutes = require('../routes/dataRoutes');

const app = express();
app.use(express.json()); // Para soportar JSON-encoded bodies
app.use('/api/data', userRoutes); // Monta tus rutas bajo un prefijo /api

describe('API Routes', () => {
  test('GET /api/data/trx', async () => {
    const response = await request(app).get('/api/data/trx');
    expect(response.statusCode).toBe(200);
    // Añade más expectativas según la estructura de tu respuesta
  });

  // Aquí seguirían más pruebas para POST, PUT, DELETE...
});


describe('API Routes', () => {
  test('GET /api/data/product', async () => {
    const response = await request(app).get('/api/data/product');
    expect(response.statusCode).toBe(200);
    // Añade más expectativas según la estructura de tu respuesta
  });

  // Aquí seguirían más pruebas para POST, PUT, DELETE...
});


describe('API Routes', () => {
  test('GET /api/data/clients', async () => {
    const response = await request(app).get('/api/data/clients');
    expect(response.statusCode).toBe(200);
    // Añade más expectativas según la estructura de tu respuesta
  });

  // Aquí seguirían más pruebas para POST, PUT, DELETE...
});






describe('POST /api/usuarios', () => {
  test('debería crear un nuevo usuario y responder con un status 201 y el usuario creado', async () => {
    const nuevaTrx=     {
      
      "cliente_id": 4,
      "producto_id": 3,
      "cantidad": 5
    };

    const response = await request(app)
      .post('/api/data/createTrx')
      .send(nuevaTrx);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id'); 
    expect(response.body.cliente_id).toBe(nuevaTrx.cliente_id);
    expect(response.body.producto_id).toBe(nuevaTrx.producto_id);
    
  });

  
});


describe('POST /api/data/createTrx', () => {
  test('debería crear una nueva trx y responder con un status 201 y el usuario creado', async () => {
    const nuevaTrx=     {
      
      "cliente_id": 4,
      "producto_id": 3,
      "cantidad": 5
    };

    const response = await request(app)
      .post('/api/data/createTrx')
      .send(nuevaTrx);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id'); 
    expect(response.body.cliente_id).toBe(nuevaTrx.cliente_id);
    expect(response.body.producto_id).toBe(nuevaTrx.producto_id);
    
  });

  
});


describe('POST /api/data/createClients', () => {
  test('debería crear un nuevo usuario y responder con un status 201 y el usuario creado', async () => {
    const nuevoCliente=        {
      "id": 14,
      "nombre": "Johan",
      "apellido": "Eldiver",
      "correo": "johaneldi@example.com",
      "telefono": "654-321055"
  };

    const response = await request(app)
      .post('/api/data/createClients')
      .send(nuevoCliente);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id'); 
    expect(response.body.nombre).toBe(nuevoCliente.nombre);
    expect(response.body.apellido).toBe(nuevoCliente.apellido);
    
  });

  
});
