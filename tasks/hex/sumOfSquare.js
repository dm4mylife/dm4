var readlineSync = require('readline-sync');

var n = parseInt(readlineSync.question("Type a number "));

function sumOfSquare(n) {
    var result = 0;
    for ( var i = 1; i <= n; i++) {
        result = result + i*i;
    };
    var result2 = 0;
    for ( var j = 1; j <= n; j++) {
        result2 = result2 + j;
    };
    result2 *= result2;
    var diff = result2 - result;
    return diff
};
console.log(sumOfSquare(n));