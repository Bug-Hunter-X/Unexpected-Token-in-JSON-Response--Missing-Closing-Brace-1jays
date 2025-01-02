const http = require('http');

const server = http.createServer((req, res) => {
  // Corrected: Valid JSON response
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end('{ "message": "Hello, world!" }'); // Added closing brace
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});