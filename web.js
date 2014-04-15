
var express = require('express');
var app = express();
var fs = require('fs');
var buf = new Buffer(fs.readFileSync('index.html', 'utf-8'), "utf-8");
//buf.write(fs.readFileSync('index.html', 'utf-8'), "utf-8");
app.use(express.logger());

app.get('/', function(request, response) {
  response.send(buf.toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
