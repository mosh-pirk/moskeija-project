const { Schema } = require("mongoose");
const { ROLE } = require("../utils/enums");
const stringRequired = (message) => ({
    type: String,
    required: [true, message],
})
const unique = (message) => ({
    type: String,
    required: [true, message],
    unique: true
})

const dateRequired = (message) => ({
    type: Date,
    required: [true, message],
})

const objectId = (ref) => ({
    type: Schema.Types.ObjectId, ref
})

const role = {
    type: String,
    enum: [ROLE.VIEWER, ROLE.MEMBER, ROLE.HEAD],
    required: [true, 'Role is required, but not add']
}

module.exports = {
    stringRequired,
    dateRequired,
    objectId,
    unique,
    role
}