// server.js
const http = require('http');

const hostname = '0.0.0.0'; // Binding to all interfaces for Docker
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, How Are You Team good !\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
