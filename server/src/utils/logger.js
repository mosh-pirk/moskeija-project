const { IS_TEST_ENVIROMENT } = require('./config');

const info = (...params) => {
    if (!IS_TEST_ENVIROMENT) console.log(...params)
}

const warn = (...params) => {
    if (!IS_TEST_ENVIROMENT) console.warn(...params)
}

const error = (...params) => {
    if (!IS_TEST_ENVIROMENT) console.error(...params)
}

module.exports = {
    info, warn, error
}