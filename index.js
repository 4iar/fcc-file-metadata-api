"use strict";
const express = require('express');
const multer  = require('multer')

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const app = express();

// let Heroku set the port
const port = process.env.PORT || 5000;

app.use(express.static('public'));

app.post('/get-file-size', upload.single('file'), (request, response) => {
  const file = request.file;

  if (file) {
    response.json({
      size: file.size,
      name: file.originalname,
      encoding: file.encoding,
      mimetype: file.mimetype
    });
  } else {
    response.json({error: "could not read file"});
  }

})

app.listen(port);
