const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!7');
})

app.get('/info', (req, res) => {
    res.send('Site info');
  })

  app.get('/Contact us', (req, res) => {
    res.send('Contact uinfo');
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})