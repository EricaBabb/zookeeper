//must require express to use express.js
const express = require('express');
//requiring the animal data
const { animals } = require('./data/animals');

const PORT = process.env.PORT || 3001;
const app = express();

function filterByQuery(query, animalsArray) {
    let filteredResults = animalsArray;
    if (query.diet) {
      filteredResults = filteredResults.filter(animal => animal.diet === query.diet);
    }
    if (query.species) {
      filteredResults = filteredResults.filter(animal => animal.species === query.species);
    }
    if (query.name) {
      filteredResults = filteredResults.filter(animal => animal.name === query.name);
    }
    return filteredResults;
  }

//route
// the get() method requires two arguments. The first is a string that describes the route the client will have to fetch from. The second is a callback function that will execute every time that route is accessed with a GET request.
//we are using the send() method from the res parameter (short for response) to send the animal json to our client.
app.get('/api/animals', (req, res) => {
    let results = animals;
    if (req.query) {
      results = filterByQuery(req.query, results);
    }
    res.json(results);
});

app.get('/api/animals/:id', (req, res) => {
    const result = findById(req.params.id, animals);
    if (result) {
      res.json(result);
    } else {
        //sends 404 request
      res.send(404);
    }
});

  //Port
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});