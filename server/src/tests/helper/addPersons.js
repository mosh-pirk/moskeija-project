const axios = require('axios');
const {persons} = require("./data");




const apiEndpoint = 'http://localhost:3001/api/persons'; // Replace with your Express API endpoint URL



persons.forEach(person => {
    axios.post(apiEndpoint, person)
        .then(response => {
            console.log('Person added successfully:', response.data);
        })
        .catch(error => {
            console.error('Error adding person:', error.response ? error.response.data : error.message);
        });
})
