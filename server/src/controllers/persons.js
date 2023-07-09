const personsRouter = require('express').Router()
const Person = require('../models/person')
const { error } = require("../utils/logger");

personsRouter.get('/', async (req, res) => {
    const results = await Person.find({})
    res.status(200).json(results)
})

personsRouter.get('/:id', async (req, res, next) => {
    try {
        const result = await Person.findById(req.params.id);
        res.json(result);
    } catch (e) {
        next(e)
    }
})

personsRouter.post('/', async (req, res, next) => {
    // todo add validation
    const body = req.body;
    if (body.firstName === undefined) {
        return res.status(400).json({ error: 'firstName missing' })
    }
    const person = new Person({
        firstName: body.firstName,
        fatherName: body.fatherName,
    });

    try {
        const saved = await person.save();
        res.status(201).json(saved)
    } catch (e) {
        next(e)
    }

})

personsRouter.delete('/:id', async (req, res, next) => {
    try {
        await Person.findByIdAndRemove(req.params.id)
        req.status(204).end()
    } catch (e) {
        next(error)
    }
})


personsRouter.put('/:id', async (req, res, next) => {
    const body = req.body

    const person = {
        firstName: body.firstName,
        fatherName: body.fatherName,
    }

    try {
        const updated = await Person.findByIdAndUpdate(req.params.id, person, { new: true });
        return res.json(updated)
    } catch (e) {
        next(e)
    }
})


module.exports = personsRouter