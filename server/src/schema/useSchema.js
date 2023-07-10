const { stringRequired, objectId, role, unique } = require("./common");
const UserSchema = {
    username: unique('usename is required'),
    passwordHash: stringRequired('password is required'),
    role: role,
    isActive: Boolean,
    personId: objectId('Persons')
}

module.exports = UserSchema