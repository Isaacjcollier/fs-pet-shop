var fs = require('fs');
var createPet = {}

fs.readFile('../pets.json', 'utf8', function (err, data) {


  if (process.argv[2] === 'create' && typeof process.argv[3] === 'undefined' || typeof process.argv[4] === 'undefined' || typeof process.argv[5] === 'undefined') {
    console.log('Usage: node pets.js create AGE KIND NAME');
  }

  else if (process.argv[2] === 'create') {
      createPet.age = parseInt(process.argv[3])
      createPet.kind = process.argv[4]
      createPet.name = process.argv[5]
      console.log(createPet);
  }

  else if (process.argv.length === 2) {
    console.log('Usage: node pets.js [read | create | update | destroy]');
    return true
  }
  else if (process.argv[3] === '0' && process.argv[2] === 'read') {
      data = JSON.parse(data)
      console.log(data[0]);
  }
  else if (process.argv[3] === '1' && process.argv[2] === 'read') {
      data = JSON.parse(data)
      console.log(data[1]);
  }
  else if (process.argv[2] === 'read' && typeof process.argv[3] === 'undefined' ) {
      data = JSON.parse(data)
      console.log(data);
  } else{
    console.log('Usage: node pets.js read INDEX');
  }
});
// fs.readFile('../pets.json', 'utf8', function(err, data) {
//     data = JSON.parse(data)
//
//     if (req.url === '/pets') {
//       res.statusCode = 200
//       res.setHeader('Content-Type', 'text/plain')
//       res.end(JSON.stringify(data))
//     }
