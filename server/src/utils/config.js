require('dotenv').config()

// eslint-disable-next-line
let PORT = process.env.PORT
// eslint-disable-next-line
let MONGODB_URI = process.env.MONGODB_URI

module.exports = {
    MONGODB_URI,
    PORT
}