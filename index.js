const createServer = require('http').createServer ;

const server = createServer((req, res) => {
    if (req.method === 'POST') {
        const body = JSON.parse(req.body);
    } 
    else if (req.method === 'GET') {
        const name = req.query.name;
    }
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello, world!' }));
});

server.listen(3001, () => {
  console.log('Web server listening on port 3001');
});