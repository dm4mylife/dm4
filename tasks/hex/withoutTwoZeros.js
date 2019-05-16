var readlineSync = require('readline-sync');

var n = parseInt(readlineSync.question("Type a first number "));
var m = parseInt(readlineSync.question("Type a second number "));

var n0 = '0';
var n1 = '1';

function withoutTwoZeros(n,m) {

    var firstLine = '';
    for ( var i = 0; i < n; i++) {
        firstLine = firstLine + n0;
    };
    console.log(firstLine);
    var secondLine = '';
    for ( var i = 0; i < m; i++) {
        secondLine = secondLine + n1;
    };
    console.log(secondLine);

 for ( var k = 0; k < )


};
console.log(withoutTwoZeros(n,m));
