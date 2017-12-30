/*This code will give you a basic server,
  the server is hosted locally on port 3000*/

//Set the server 
var express = require('express'); 

//Created an app that is used to perform different(CRUD) operations
var app = express();

//JSON Object
var data = {Message: "Hello World!"};

//Any get request to slash run this function 
app.get('/', function (req, res) {
  res.send("Hi There");
})

//Any get request to slash data run this function 
app.get('/data', function (req, res) {
  res.json(data);
})

//localhost:3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


