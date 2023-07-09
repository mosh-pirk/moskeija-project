require('dotenv').config()

// eslint-disable-next-line
let PORT = process.env.PORT

// eslint-disable-next-line
const IS_TEST_ENVIROMENT = process.env.NODE_ENV === 'test';
// eslint-disable-next-line
const MONGODB_URI = IS_TEST_ENVIROMENT ? process.env.TEST_MONGODB_URI : process.env.MONGODB_URI

module.exports = {
    MONGODB_URI,
    PORT,
    IS_TEST_ENVIROMENT,
}