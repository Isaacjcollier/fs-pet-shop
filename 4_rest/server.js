// get express
var express = require('express')
var app = express()
var pets = require('../pets.json')

// dependencies
app.use(require('morgan')('dev'));
app.use(require('body-parser').json());

// GET All pets
app.get('/pets', function (request, response, next) {
  response.status(200).send(pets)
})
// GET a Single Pet
app.get('/pets/:index', function (request, response, next) {
  if (pets[request.params.index]) {
    response.status(200).send(pets[request.params.index])
  } else {
  response.contentType('text/plain'),
  response.status(404).send('Not Found')
  }
})
// GET anything other than "/pets" will not be found
app.get('/*', function (request, response, next) {
  (response.status(404).send('Not Found'))
})
// POST the pet if all fields are valid
app.post('/pets',function (request, response, next) {
  let body = request.body
  if(!body.name || !body.kind || !body.age) {
    response.contentType('text/plain')
    response.status(400).send('Bad Request')
  } else {
    pets.push(body)
    response.status(201).send(pets)
  }
})

// PUT a pet at a index that already exists (replace)
app.put('/pets/:index', function (request, response) {
  let index = Number.parseInt(request.params.index);
  let pet = request.body;
  // validate the inputted index exist
  if (typeof Number(index) || index < 0 || index >= pets.length) {
    return response.status(404).send({
      message: 'Index of pets not found',
      data: index
    });
  }
  if (!pet) {
    return response.sendStatus(404);
  }
  response.send(pet[index]);
})
// DELETE a pet at the specified index
app.delete('/pets/:index', function (request, response) {
  let index = Number.parseInt(request.params.index);
  let pet = pets.splice(index, 1)[0];
  // validate the index inputted exists
  if (Number.isNaN(index) || index < 0 || index >= pets.length) {
    return response.sendStatus(404);
  }
  response.send(pet);
})
// establish Port 3000
app.listen(3000, () => {
  console.log('listening on 3000');
})
