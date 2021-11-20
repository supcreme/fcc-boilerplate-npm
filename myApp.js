var express = require('express');
var app = express();

app.get('/', function(req, res) {
  let absolutePath = __dirname +
      '/views/index.html';
  res.sendFile(absolutePath);
});

app.use('/public', express.static(__dirname + '/public'));

module.exports = app;

console.log('Hello World');

// EXERCISES FFC
/*
app.get('/json', function(req, res) {
  let obj = {'message': 'Hello json'};
  res.json(obj);
});

app.get('/', function(req, res) {
  let absolutePath = __dirname +
      '/views/index.html';
  res.sendFile(absolutePath);
});
*/
