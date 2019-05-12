/** Создайте функцию isPerfect, которая принимает число и возвращает true, если оно совершенное, и false — в ином случае.
Совершенное число — это положительное целое число, равное сумме его положительных делителей (не считая само число).
1-е совершенное число — 6 имеет следующие собственные делители: 1, 2, 3; их сумма равна 6.
2-е совершенное число — 28 имеет следующие собственные делители: 1, 2, 4, 7, 14; их сумма равна 28.
3-е совершенное число — 496 имеет следующие собственные делители: 1, 2, 4, 8, 16, 31, 62, 124, 248; их сумма равна 496.
*/

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