var http = require('http'),
    fs = require('fs');

http.createServer(function (req, res) {

  res.writeHead(200,  {'Content-Type' : 'application/json'});

  var fileStream = fs.createReadStream('phones.json');

  fileStream.pipe(res);

}).listen(1337, '127.0.0.1');
