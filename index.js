const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
 
  const parsedUrl = url.parse(req.url, true);

  if (req.method === 'GET' && parsedUrl.pathname === '/marwa') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, Marwa!');
  }
});

server.listen(3001, () => {
  console.log('Web server listening on port 3001');
});
