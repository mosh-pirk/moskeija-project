const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Person = require('../models/person')
const User = require("../models/user");
const {testUser} = require("./helper/data");

describe('Login test', () => {

    test('käyttäjä rekistroi järjestelmään onnistueesti', async () => {
        const user = await api.post('/api/users').send(testUser).expect(201)
        expect(user.body.username).toBe(testUser.username)
    })
    test('Käyttäjä kirjautuu sisään ja saa token', async () => {
        const response = await api.post('/api/login').send(testUser)

        expect(response.body.token).toBeTruthy()
        expect(response.body.username).toEqual(testUser.username)

    })

    beforeAll(async () => {
        await User.deleteMany({})
        await Person.deleteMany({})
    })

    afterAll(async () => {
        await mongoose.connection.close()
    })
})


