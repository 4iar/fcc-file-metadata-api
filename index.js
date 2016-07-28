"use strict";
const express = require('express');
const app = express();

// let Heroku set the port
const port = process.env.PORT || 5000;

app.get('/', (request, response) => {
  response.json({hello: "world"})
});

app.listen(port);
