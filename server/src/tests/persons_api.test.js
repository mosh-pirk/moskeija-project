const mongoose = require('mongoose')
const supertest = require('supertest')
const Person = require('../models/person')
const app = require('../app')
const { persons } = require("./helper/person");
const api = supertest(app)

describe('Persons test', () => {
    test('Persons palutetaan Json muodossa ', async () => {
        await api
            .get('/api/persons')
            .expect(200)
            .expect('Content-Type', /application\/json/)

    })

    test('Tietokannassa ei ole person:ita', async () => {
        const res = await api.get('/api/persons')

        expect(res.body).toHaveLength(1)
    })


    beforeAll(async () => {
        await Person.deleteMany({})
        await Person(persons[0]).save()
    })

    afterAll(async () => {
        await mongoose.connection.close()
    })
})


