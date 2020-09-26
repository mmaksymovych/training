require('marko/node-require');

const express = require('express');
const spdy = require('spdy');
const fs = require('fs');
const path = require('path');
var template = require('../src/index.marko');
var markoExpress = require('marko/express');

const app = express();
const PORT = 4000;

app.use(express.static(path.join(__dirname, '../src/public')));
app.use(markoExpress());

app.get('/', function (req, res) {
  res.marko(template, {
    port: PORT,
    secure: true,
  });
});

app.get('/styles', (req, res) => {
  setTimeout(function () {
    res.sendFile(path.join(__dirname, '../src/public/styles.css'));
  }, 1000);
});

const options = {
  key: fs.readFileSync(path.join(__dirname, '../certificate/localhost.key')),
  cert: fs.readFileSync(path.join(__dirname, '../certificate/localhost.crt')),
};

spdy.createServer(options, app).listen(PORT, (err) => {
  if (err) {
    throw new Error(err);
  }

  console.log('Listening on port: ' + PORT + '.');
});
