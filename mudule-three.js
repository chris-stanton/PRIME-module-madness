

var randomNumberGenerator = require("./module-one");
var currentcyFormatter = require("./module-two");


module.exports = {

functionOne: function(){
  return currentcyFormatter(randomNumberGenerator.randomNumber(100, 1000000));
}


function returnText() {
  return "Account Balance:\n" + currentcyFormatter;
}


}
