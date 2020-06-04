const mongoose = require('mongoose');
const app = require('../index');
const supertest = require('supertest');
const request = supertest(app);
const { User } = require('./entity/');

beforeAll(async () => {
    const url = 'mongodb://127.0.0.1/testTDD';
    await mongoose.connect(url, { useNewUrlParser: true });
})

