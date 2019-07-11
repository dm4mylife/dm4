var fs = require('fs');
var JSON5 = require('json5');
var obj2 = { nick : 1 }
console.log(obj2.winner)
var player1 = 'nick'
var consta = player1;
for (var key in obj2) {
if ( key === consta) {
  console.log('yeah');
} else {
  console.log('sux')
}
}
var c;
var a = 1;
var b =2 ;
c = a;
console.log(c)
c = b 
console.log(c)
c = !b
console.log(c)
/* console.log(JSON5.stringify(obj2)); */

/* var dataObj = JSON5.parse(obj2) */
/* console.log(dataObj) */
/*  fs.writeFileSync('something.txt', obj2, function(err,data) { 
console.log(data+'Secc')});

var data = fs.readFileSync('something.txt');
var dataObj = JSON5.parse(data)
console.log(dataObj);
  */

