require('marko/node-require');

const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const axios = require('axios');
var template = require('../src/index.marko');
var markoExpress = require('marko/express');

app.use(express.static(path.join(__dirname, '../src/public')));
app.use(markoExpress()); //enable res.marko(template, data)

app.get('/', function (req, res) {
  res.marko(template, {
    port,
    secure: false,
  });
});

app.get('/styles', (req, res) => {
  setTimeout(function () {
    res.sendFile(path.join(__dirname, '../src/public/styles.css'));
  }, 1000);
});

app.get('/cors', async (_req, res) => {
  const { data } = await axios.get('http://localhost:3001/test');

  console.log(data);

  res.send('success');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
