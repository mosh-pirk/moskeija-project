const mongoose = require('mongoose')
const UserSchema = require("../schema/useSchema");
const uniqueValidator = require('mongoose-unique-validator')
mongoose.set('strictQuery', false)

const usersModel = new mongoose.Schema(UserSchema).set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

usersModel.plugin(uniqueValidator)

module.exports = mongoose.model('Users', usersModel.plugin(uniqueValidator))