const express = require('express');
const router = express.Router();

    /* GET  => Counter home page. */

router.get('/', (request, response) => {
    console.log('getting to index');
    response.render('index', { title: 'Star Wars Wiki - API Assignment' });
});

// ... other server code
const axios = require('axios');
const swapiPeopleUrl = 'https://swapi.co/api/people';
const swapiPlanetUrl = 'https://swapi.co/api/planets';

router.get('/people', function(request, response){
    // use the axios .get() method - provide a url and chain the .then() and .catch() methods
    axios.get(swapiUrl)
    .then(data => {
        // log the data before moving on! 
        console.log("got the data", data.data);
        response.send(data.data);
        // rather than rendering, just send back the json data!
        response.json(data);
    })
    .catch(error => {
     // log the error before moving on!
        console.log(error);
        response.json(error);
    })
});

router.get('/planets', function(request, response){
    axios.get(swapiPlanetUrl)
    .then(data => {
        // log the data before moving on! 
        console.log("got the data", data.data);
        response.send(data.data);
        // rather than rendering, just send back the json data!
        response.json(data);
    })
    .catch(error => {
         // log the error before moving on!
        console.log(error);
        response.json(error);
    })
});


module.exports = router;