const { stringRequired, dateRequired } = require("./common");


const PersonSchema = {
    firstName: stringRequired('First name is required'),
    fatherName: stringRequired('First name is required'),
    grandfatherName: stringRequired('First name is required'),
    motherName: String,
    sureName: String,
    birthday: dateRequired('Birthday is required'),
    address: {
        country: String,
        city: String,
        post: String,
        street: String
    },

    isActive: Boolean
}


module.exports = PersonSchema;