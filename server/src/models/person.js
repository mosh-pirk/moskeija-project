const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

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

module.exports = mongoose.model('Persons', personSchema)