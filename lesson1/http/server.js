const http = require('http'); // require http module
const port = 8080;

// creating a http server
const server = http.Server();

server.on('request', function(req, res) {
    console.log('server take request');
    res.end(); // complete answer
});
server.listen(port);