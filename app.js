var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.json({"hello": "world!"});
});

var server = app.listen(process.env.PORT || 7070, function() {
  var port = server.address().port;
  console.log('HTTP stub server listening on port: %s', port);
});

module.exports = server;

