const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!7');
})

app.get('/info', (req, res) => {
    res.send('Site info');
  })

  app.get('/info', (req, res) => {
    res.send('Site info');
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})