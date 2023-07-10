const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)


const closeMongooseConnection = () => mongoose.connection.close()
const API = () => api;

module.exports = {
    API,
    closeMongooseConnection
}