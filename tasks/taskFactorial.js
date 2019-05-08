
var readlineSync = require('readline-sync');


var n = parseInt(readlineSync.question("Factorial in for\n Type a number "));
console.log('');
 function factorial(n) {

    var current = 1;

        for (var i = 1; i < n ; i++) {
            
         current = current * (i + 1) ;
        };
        return current;
};
console.log(factorial(n))
console.log('');


n = parseInt(readlineSync.question("Factorial in iter.process\n Type a number "));
console.log('');
 function factorial1(n) {
    
   if ( n === 1 ) {
       return 1;
   } else {
       var a = n * factorial1(n-1)
   };
   return a;
};
console.log(factorial1(n));
console.log('');


n = parseInt(readlineSync.question("Task 1 Fibonacci in for \nType a number "));
a=1;
b=1;
var c=1;
console.log('');
function fibo(n) {
    
for (var i = 3; i <= n && n !==1 && n !==2; i++) {
    c=a+b;
    a=b;
    b=c;
};
return c;
};
console.log(fibo(n));
console.log('');


n = parseInt(readlineSync.question("Task 2 Fibonacci in iter.process \nType a number "));
a=1;
b=1;
var c=1;
console.log('');
function fibo1(n) {
    
if ( n === 1 || n === 2) {
    return a;
} else {
    c = fibo1(n-1) + fibo1(n-2);
}
return c;
};
console.log(fibo1(n));
console.log('');
