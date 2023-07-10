const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Person = require('../models/person')
const User = require("../models/user");
const {testUser, validUser} = require("./helper/data");

describe('Login test', () => {
    test('Käyttäjä kirjautuu sisään ja saa token', async () => {
        const response = await api.get('/api/users')

        console.log(response.body)

    })

    beforeAll(async () => {
        await User.deleteMany({})
        await Person.deleteMany({})
        console.log(validUser())
        const user = await User(validUser())
        //user.save()
    })

    afterAll(async () => {
        await mongoose.connection.close()
    })
})


