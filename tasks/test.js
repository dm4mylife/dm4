
var readlineSync = require('readline-sync');

var n = parseInt(readlineSync.question("Type a number "));

function isPerfectNumber(n) {

var divisor = 0;
    for ( var i = 0; i < n; i++ ) {
    
        if ( n % i === 0 ) {
        divisor = divisor + i;
        console.log(divisor)
        };
    };   
    if ( divisor === n) {
        console.log('Success');
        return true;
    }  else {
        console.log('Failed');
        return false;
    };
};
isPerfectNumber(n);