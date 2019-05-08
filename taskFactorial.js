var readlineSync = require('readline-sync');

var n = parseInt(readlineSync.question("Type a number "));

 function factorial(n) {

    var current = 1;

        for (var i = 1; i < n ; i++) {
            
         current = current * (i + 1) ;
         console.log(current);
        };
        return current;
};
console.log(factorial(n));

if ( n ===1 )
factorial(n-1)