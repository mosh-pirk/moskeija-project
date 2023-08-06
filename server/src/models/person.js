const mongoose = require('mongoose')
const PersonSchema = require("../schema/personSchema");
mongoose.set('strictQuery', false)

const personSchema = new mongoose.Schema(PersonSchema).set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Persons', personSchema)