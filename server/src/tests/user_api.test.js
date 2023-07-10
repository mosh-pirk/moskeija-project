const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const User = require('../models/user')

describe('User test', () => {

    test('User palutetaan Json muodossa ', async () => {
        await api
            .get('/api/users')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })

    test('Lisää Käyttäjä', async () => {
        const response = await addNewUser(newUser);
        expect(response.body.username).toBe(newUser.username)
        expect(response.body.username).toBe(newUser.username)
    })

    test('Voi Hakea kaikki käyttäjät', async () => {
        const { body } = await api.get('/api/users');
        expect(body[0].username).toEqual(newUser.username)
    })

    test('Käyttäjä on oltav uniiikki', async () => {
        const response = await addNewUser2(newUser)
        expect(response.body.error).toContain(' to be unique');
    })

    beforeAll(async () => {
        await User.deleteMany({})
    })

    afterAll(async () => {
        await mongoose.connection.close();
    })
})


const addNewUser = async (newUser) => {
    return  await api
        .post('/api/users')
        .send(newUser)
        .expect(201)
        .expect('Content-Type', /application\/json/)
}


const addNewUser2 = async (newUser) => {
    return await api
        .post('/api/users')
        .send(newUser)
}

const newUser = {
    username: 'Sami',
    password: '123456',
}