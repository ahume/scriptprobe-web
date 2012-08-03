var express = require('express');
var probe = require('./probe.js');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World!');
  console.log(probe);
  probe.makeRequest();
  probe.testBrowser();
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});