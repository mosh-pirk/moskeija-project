const personsRouter = require('express').Router()
const Person = require('../models/person')

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

function initPerson(body) {
    const person = new Person({
        firstName: body.firstName,
        fatherName: body.fatherName,
        grandfatherName: body.grandfatherName,
        motherName: body.motherName,
        sureName: body.sureName,
        birthday: new Date(body.birthday),
        address: {
            country: body.address.country,
            city: body.address.city,
            post: body.address.post,
            street: body.address.street
        },
        isActive: body.isActive
    });
    return person;
}

personsRouter.post('/', async (req, res, next) => {
    try {
        const person = initPerson(req.body);

        const savedPerson = await person.save();
        res.status(201).json(savedPerson);
    } catch (error) {
        next(error);
    }
});

personsRouter.delete('/:id', async (req, res, next) => {
    try {
        await Person.findByIdAndRemove(req.params.id)
        req.status(204).end()
    } catch (e) {
        next(e)
    }
})


personsRouter.put('/:id', async (req, res, next) => {
    const person = initPerson(req.body);
    try {
        const updated = await Person.findByIdAndUpdate(req.params.id, person, { new: true });
        return res.json(updated)
    } catch (e) {
        next(e)
    }
})


module.exports = personsRouter