
var readlineSync = require('readline-sync');

var n = parseInt(readlineSync.question("Type a number "));

function isPerfectNumber(n) {
     var a = false;
     var counter = 5;

    for (var i = 0; i < n;i++) {

        console.log(i)
       
        if ( i === 3) {
            a = true;
            counter = 10
        };
        if (!a) break;
        
    }; 
    return counter;      
}; 
console.log(isPerfectNumber(n));