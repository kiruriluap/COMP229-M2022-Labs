const express = require('express');
const app = express();
const port = 3000;

.get('/', (req, res) => {
  res.send('Hello World!7');
})app

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})