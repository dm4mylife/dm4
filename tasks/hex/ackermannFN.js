/** Функция Аккермана — простой пример вычислимой функции, которая не является примитивно рекурсивной.
Она обозначается A(m,n), принимает два неотрицательных целых числа в качестве параметров и возвращает натуральное число. 
Эта функция растёт очень быстро, например, число A(4,4) настолько велико, что количество цифр в порядке этого числа многократно превосходит 
количество атомов в наблюдаемой части Вселенной.
*/

var readlineSync = require('readline-sync');

var m = parseInt(readlineSync.question("Type a first number "));
var n= parseInt(readlineSync.question("Type a second number "));


function ackermann(m,n) {
if (m === 0) {
    return n+1;
} else if (m > 0 && n === 0) {
    return ackermann(m-1,1);
} else if (m > 0 && n > 0) {
    return ackermann(m-1,ackermann(m,n-1))
};
};
console.log(ackermann(m,n));