var readlineSync = require('readline-sync');

var n = parseInt(readlineSync.question("Type a number "));

 function factorial(n) {

    var current = 1;

        for (var i = 1; i < n ; i++) {
            
         current = current * (i + 1) ;
         
        };
        return current;
};
console.log(factorial(n));

var readlineSync = require('readline-sync');

var n = parseInt(readlineSync.question("Task 2\n Type a number "));

a = 1;
b = 1;
var c = 1;

function fibo(n) {
for (var i = 3; i <= n && n !==1 && n !==2; i++) {
    c=a+b;
    a=b;
    b=c;
};
return c;
};
console.log(fibo(n));