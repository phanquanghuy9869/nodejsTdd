const app = require('../index');
const supertest = require('supertest');
const request = supertest(app);

describe('Test ping api get', () => {
    test('should respond pong when get', async (done) => {
        const response = await request.get('/ping');
        const body = response.body;
        expect(response.status).toBe(200);
        expect(body).toMatchObject({ isSuccess: true, data: { name: 'huy', job: 'developer' } });
        done();
    })

})

describe('Test ping api post', () => {

    test('should respond 400 when post without body', async (done) => {
        const response = await request.post('/ping');
        const body = response.body;
        expect(response.status).toBe(400);
        done();
    })

    test('should respond 200 and input name', async (done) => {
        const response = await request.post('/ping').send({ name: 'Huy' });
        expect(response.status).toBe(200);
        expect(response.body).toMatchObject({ input: 'Huy' });
        done();
    })
})


// jest.setup.js
// jest.setTimeout(30000)