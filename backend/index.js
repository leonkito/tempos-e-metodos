const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors()) // Use this after the variable declaration
app.get('/data', (req, res) => {
  res.send(data= 'Hello from the server!');
});

app.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});
