const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)

test('Persons palutetaan Json muodossa ', async () => {
    await api
        .get('/api/persons')
        .expect(200)
        .expect('Content-Type', /application\/json/)

})

test('Tietokannassa ei ole person:ita', async () => {
    const res = await api.get('/api/persons')

    expect(res.body).toHaveLength(0)
})


afterAll(async () => {
    await mongoose.connection.close()
})
