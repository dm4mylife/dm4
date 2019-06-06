var readlineSync = require('readline-sync');
var length = parseInt(readlineSync.question("Type width \n"));
var width = parseInt(readlineSync.question("Type length \n"));

  
var y = [];
for ( var i = 0; i < width; i++ ) {

var x = [];

for (var k = 0; k < length; k++) {

var max = 100;

  var min = 0;

  var random =  Math.floor(Math.random() * (max-min+1) + min);

  x.push(random);
};





   y[i] = x;
  


};
console.log(y)
