const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);

//The issue is that the server might crash without any error message if there's a problem starting up the server such as port in use, and this can make debugging difficult.