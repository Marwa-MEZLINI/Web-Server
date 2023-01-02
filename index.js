const express = require('express');
const app = express();

app.get('/marwa', (req, res) => {
  res.send('Hello, Marwa!');
});

app.listen(3001, () => {
  console.log('Web server listening on port 3001');
});
