var express = require('express')
//var nocache = require('nocache')
var path = require('path')
var http = require('http')
var app = express()
var morgan = require('morgan');
app.use(express.static(path.join(__dirname, 'dist')));

app.use(morgan('dev'));
//app.use(nocache())
app.use('/static', function (req, res) {
  // let value = req.params.id;
  return res.redirect('http://localhost:3001/static' + req.path)
});
app.use('*', function (req, res) {
  return res.sendFile(path.join(__dirname, '/dist/index.html'))
});

var server = http.createServer(app);

server.listen(3010);
