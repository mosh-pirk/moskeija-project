const stringRequired = (message) => ({
    type: String,
    required: [true, message],
})

const dateRequired = (message) => ({
    type: Date,
    required: [true, message],
})


module.exports = {
    stringRequired,
    dateRequired
}