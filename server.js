var express = require('express')
var app = express()


app.get ('/', function(req, res) {
  res.send("<h1>Header Info Parser</h1>")
})
app.get('/whoami', function (req, res) {
  var ip = req.connection.remoteAddress;
  var lang = req.headers["accept-language"];
  var os = req.headers["user-agent"];
  
  var data = {"ip": ip, "lang": lang, "Operating System": os};
  
  res.send(data)
})

app.listen(8080, function () {
  console.log('Example app listening on port 3000!')
})
