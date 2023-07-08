const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.static('build'))
const morgan = require('morgan')
const Person = require("./services/mongo");
const logger = morgan('tiny')
app.use(express.json())
app.use(logger)

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res) => {
    Person.find({}).then(x => {
        res.status(200).json(x)
    })
})

app.get('/api/persons/:id', (req, res, next) => {
    Person.findById(req.params.id).then(person => {
        if (person) res.json(person)
        else res.status(400).json({ error: 'id not found' })
    }).catch(error => {
        console.log(error)
        next(error)
    })
})

app.post('/api/persons', (req, res) => {
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

app.delete('/api/persons/:id', (req, res, next) => {
    Person.findByIdAndRemove(req.params.id)
        .then(() => {
            req.status(204).end()
        })
        .catch(error => next(error))
})


app.put('/api/persons/:id', (req, res, next) => {
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

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
    console.error(error.message)

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }


    next(error)
}


app.use(errorHandler)

// eslint-disable-next-line
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})