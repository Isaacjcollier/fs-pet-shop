var http = require('http')
var port = 3000
var fs = require('fs');

http.createServer(function(req,res) {
  fs.readFile('../pets.json', 'utf8', function(err, data) {
    data = JSON.parse(data)

    if (req.url === '/pets') {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/plain')
      res.end(JSON.stringify(data))
    }
    else if (req.url === '/pets/0') {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/plain')
      res.end(JSON.stringify(data[0]))
    }
    else if (req.url === '/pets/1') {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/plain')
      res.end(JSON.stringify(data[1]))
    } else {
      console.log('else')
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('NOT FOUND');
    }
  })
}).listen(port)
