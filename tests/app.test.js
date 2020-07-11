const app = require('../src/app');
const request = require('supertest');

test('Health check', async() => {
    const response = await request(app)
        .get('/')
        .send()
        .expect(200);
    expect(response.body).toBe('App us running...');
});

test('Not existent route', async() => {
    const response = await request(app)
        .get('/not-existent-route')
        .send()
        .expect(404);
});