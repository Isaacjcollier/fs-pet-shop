var express = require('express');
var pets = require('../pets.json')
var app = express();

app.get('/pets', function (request, response, next) {
  response.status(200).send(pets)
})
app.get('/pets/:pet', function (request, response, next) {
  console.log(request.params.pet);
  var petNum = request.params.pet
  if (pets[petNum]) {
    response.status(200).send(pets[petNum])
  } else {
    response.status(404).send('Not found')
  }
})
app.get('/*', function (request, response, next) {
  response.status(404).send('Not found')
})

  
app.post('/pets', function ( request, response, next) {
  var body = []
  request.on('data', function (chunk) {
    body.push(chunk.toString())
  }).on('end', function () {
    var data = JSON.parse(body.join(''))
    pets.push(data)
    response.status(201).send(pets)
  })
})
// app.post('/friends', function (req, res, next) {
//   var body = [];
//   req.on('data', function (chunk) {
//     body.push(chunk.toString());
//   }).on('end', function () {
//     var data = JSON.parse(body.join(''));
//     friends.push(data)
//     res.status(201).send(friends);
//   });
// });

app.listen(3000, function () {
  console.log('sanity check');
})
