// Sample node.js web app for Docker and Kubernetes Fundamentals
'use strict';

var express = require('express'),
  app = express();

app.set('views', 'views');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('home', {
  });
});

app.listen(8080);
module.exports.getApp = app;
