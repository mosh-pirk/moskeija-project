const {ROLE} = require("../../utils/enums");
const {hash} = require("bcrypt");
const testUser = {
    username: 'Sami',
    password: '123456',
}

const validUser = async () => ({
    username: testUser.username,
    password: await hash(testUser.password, 10),
    role:ROLE.VIEWER,
    isActive: true
})




module.exports = {
    testUser,
    validUser
}