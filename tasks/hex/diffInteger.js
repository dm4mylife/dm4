/** Напишите функцию diff, которая принимает два угла (integer), каждый от 0 до 360, и возвращает наименьшую разницу между ними. */


var readlineSync = require('readline-sync');

var m = parseInt(readlineSync.question("Type a first number "));
var n= parseInt(readlineSync.question("Type a second number "));

function diff(m,n) {
var a=0;
var b=0;

    if ( m > n ) {
      a = m - n;
      b = 360 - a;
    } else if ( n > m) {
        a = n - m;
        b = 360 - a;
    };

    if ( a > b ) {
        return b;
    } else {
        return a;
    };
};
console.log(diff(m,n));