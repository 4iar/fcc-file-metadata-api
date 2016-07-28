"use strict";
const express = require('express');
const app = express();

// let Heroku set the port
const port = process.env.PORT || 5000;

app.use(express.static('public'));

app.get('/', (request, response) => {
  response.json({hello: "world"})
});

app.listen(port);
