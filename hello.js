// Import the top-level function of express
const express = require('express');
// Creates an Express application using the top-level function
const app = express();
// Define port number as 3000
const port = 3000;
// Routes HTTP GET requests to the specified path "/" with the specified callback function
app.get('/', function(request, response) {
response.send('Hello, World!');
});
// Make the app listen on port 3000
app.listen(port, function() {
console.log('Server listening on http://localhost:' + port);
});

/////////////////////////////////////////////////////////////////////////////////

const http = require('http');
var routes = {
    '/': function index (request, response) {
    response.writeHead(200);
    response.end('Hello, World!');
    },
    //if you type '/foo' after url then the function wil be call
    '/foo': function foo (request, response) {
    response.writeHead(200);
    response.end('You are now viewing "foo"');
    }
    }

    http.createServer(function (request, response) {
        if (request.url in routes) {
        return routes[request.url](request, response);
        }
        response.writeHead(404);
        response.end(http.STATUS_CODES[404]);
        }).listen(3000);