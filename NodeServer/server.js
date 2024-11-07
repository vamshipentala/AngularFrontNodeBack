const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());
app.get('/api/data', (req, res) => {
  //res.json({ message: 'Hello from Node.js backend!' });
  res.setHeader('Content-Type', 'text/plain');
  res.send('test');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});