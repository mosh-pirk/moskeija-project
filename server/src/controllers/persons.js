const personsRouter = require('express').Router()
const Person = require('../models/person')

personsRouter.get('/', (req, res) => {
    Person.find({}).then(x => {
        res.status(200).json(x)
    })
})

personsRouter.get('/:id', (req, res, next) => {
    Person.findById(req.params.id).then(person => {
        if (person) res.json(person)
        else res.status(400).json({ error: 'id not found' })
    }).catch(error => {
        console.log(error)
        next(error)
    })
})

personsRouter.post('/', (req, res) => {
    const body = req.body;
    if (body.firstName === undefined) {
        return res.status(400).json({ error: 'firstName missing' })
    }
    const person = new Person({
        firstName: body.firstName,
        fatherName: body.fatherName,
    });

    person.save().then(savedPerson => res.status(201).json(savedPerson))
})

personsRouter.delete('/:id', (req, res, next) => {
    Person.findByIdAndRemove(req.params.id)
        .then(() => {
            req.status(204).end()
        })
        .catch(error => next(error))
})


personsRouter.put('/:id', (req, res, next) => {
    const body = req.body

    const person = {
        firstName: body.firstName,
        fatherName: body.fatherName,
    }

    Person.findByIdAndUpdate(req.params.id, person, { new: true })
        .then(updatePerson => {
            res.json(updatePerson)
        })
        .catch(error => next(error))
})


module.exports = personsRouter