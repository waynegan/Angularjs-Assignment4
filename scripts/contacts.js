var http = require('http'),
url = require("url"),
path = require("path"),
 fs = require('fs');
 http.createServer(function (req, res) {
 var url2 = url.parse(req.url).pathname;

 var uri = url2.replace(/\//g, "");
if(uri==null || uri==""){
uri="contacts";
}
console.log(uri);
path.exists(uri, function(exists) {

fs.readFile(uri, 'utf8', function(error, file) {

  res.writeHead(200, 
	{ 
		'Content-Type' : 'application/json',
		'Access-Control-Allow-Origin': '*'
	}
  );

  var fileStream = fs.createReadStream('app/contacts/'+ uri +'.json');
  
  fileStream.on('open', function () {
    // This just pipes the read stream to the response object (which goes to the client)
    fileStream.pipe(res);
  });
 fileStream.on('error', function(err) {
   res.writeHeader(404, {"Content-type": "text/plain"});
res.write('Error 404: File not found');
res.end();
  });
 
});
});}
).listen(8001, '127.0.0.1');
console.log('Static file server running at\n  => http://localhost:' + 8001 + '/\nCTRL + C to shutdown');