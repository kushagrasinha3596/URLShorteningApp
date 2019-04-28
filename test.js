var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(req.name);
    res.end("Hello Kushagra");
  }).listen(8080);