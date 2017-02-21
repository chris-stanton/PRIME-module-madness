

var randomNumber = require('./module-one.js');
var moduleTwo = require('./module-two.js');
var finalString = require('./module-three.js');


console.log(randomNumber.randomNumber(100, 1000000));
console.log(moduleTwo(randomNumber));

var http = require("http");
http.createServer(function(req, res){
  res.writeHead(200);
  res.write(finalString);//needs to be a string
  res.end();
}).listen(3000);
