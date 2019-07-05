var http = require('http');
var dt = require('./Exercies');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("sum: " + dt.sum(123,321)+"<br>"+"avg: " + dt.avg(123,321));
  res.end();
}).listen(8080);
