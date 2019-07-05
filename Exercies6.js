var http = require('http');
var uc = require('upper-case');
http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.write(uc("Uki is the best place to learn programming!"));
 res.end();
}).listen(8080);
var events = require('events');
var eventEmitter = new events.EventEmitter();var myEventHandler = function () {
 console.log('I bark when I see strangers !');
}eventEmitter.on('bark', myEventHandler);eventEmitter.emit('bark');
