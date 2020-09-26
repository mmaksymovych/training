const express = require('express');
const app = express();
const path = require('path');
const port = 3001;

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

app.get('/test', (_req, res) => {
  res.json({ test: 'test' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
