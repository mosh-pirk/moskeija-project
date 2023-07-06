const {v4: uuidv4} = require('uuid');
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.static('build'))
const morgan = require('morgan')
//const logger = morgan(':method :url :status :res[content-length] - :response-time ms')
const logger = morgan('tiny')
app.use(express.json())
app.use(logger)
let persons = [
    {
        id: '61b61f66-e04f-4fdb-8508-5da3c512e053',
        firstName: "HTML is easy",
        father: '',
        grandfather: '',
        mother: '',
        sureName: '',
        birthday: new Date(1980, 1, 15),
        address: {
            country: '',
            city: '',
            post: '',
            street: ''
        },
    },
    {
        id: '17db7e1b-61bb-4d21-a220-744ed205877f',
        firstName: "HTML is easy",
        father: '',
        grandfather: '',
        mother: '',
        sureName: '',
        birthday: new Date(1990, 4, 11),
        address: {
            country: '',
            city: '',
            post: '',
            street: ''
        },
    },
    {
        id: '909ad818-957a-427f-8811-9c739a1b163e',
        firstName: "HTML is easy",
        father: '',
        grandfather: '',
        mother: '',
        sureName: '',
        birthday: new Date(2003, 12, 1),
        address: {
            country: '',
            city: '',
            post: '',
            street: ''
        },
    }
]

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res) => {
    res.status(200).json(persons)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const note = persons.find(note => note.id === id)

    if (note) {
        res.json(note)
    } else {
        res.status(404).end()
    }
})

app.post('/api/persons', (req, res) => {
    const person = req.body;
    person.id = {...person, id: uuidv4()}
    persons.concat(person);
    res.json(person)

})

const unknownEndpoint = (request, response) => {
    response.status(404).send({error: 'unknown endpoint'})
}

app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})