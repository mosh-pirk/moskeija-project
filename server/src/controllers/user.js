const usersRouter = require('express').Router()
const User = require('../models/user')
const { hash } = require("bcrypt");
const { ROLE } = require("../utils/enums");



usersRouter.get('/', async (req, res) => {
    const results = await User.find({})
    res.status(200).json(results)
})
usersRouter.get('/:id', async (req, res, next) => {
    try {
        const result = await User.findById(req.params.id);
        res.json(result);
    } catch (e) {
        next(e)
    }
})


usersRouter.post('/', async (req, res, next) => {
    const { username, password } = req.body
    const saltRounds = 10
    const passwordHash = await hash(password, saltRounds)

    const user = new User({
        username,
        passwordHash,
        isActive: false,
        role: ROLE.VIEWER
    })

    try {
        const savedUser = await user.save()
        res.status(201).json(savedUser)
    } catch (e) {
        next(e)
    }
})


module.exports = usersRouter