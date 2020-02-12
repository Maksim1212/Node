const http = require('http');

const req = http.request({
    host: '127.0.0.1',
    port: 8080
});

req.on('response', function() {
    console.log('Hello World)');
});
req.end();