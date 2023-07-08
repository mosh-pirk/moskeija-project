const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
const config = require('dotenv').config()
const url = config.parsed.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url)
    .then(() => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })


const personSchema = new mongoose.Schema({
    firstName: String,
    fatherName: String,
    grandfatherName: String,
    motherName: String,
    sureName: String,
    birthday: Date,
    address: {
        country: String,
        city: String,
        post: String,
        street: String
    },

    isActive: Boolean
}).set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Person = mongoose.model('Persons', personSchema)

module.exports = Person

