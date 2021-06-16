//must require express to use express.js
const express = require('express');
//requiring the animal data
const { animals } = require('./data/animals');

//route
// the get() method requires two arguments. The first is a string that describes the route the client will have to fetch from. The second is a callback function that will execute every time that route is accessed with a GET request.
//we are using the send() method from the res parameter (short for response) to send the animal json to our client.
app.get('/api/animals', (req, res) => {
    res.json(animals);
  });

  //Port
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });