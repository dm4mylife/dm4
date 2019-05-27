var readlineSync = require('readline-sync');

var n = readlineSync.question("Word\n"); 
var m = readlineSync.question("Char\n"); 

function findChar(n,m) {

    var counter = 0;

    for ( var i = 0; i < n.length; i++ ) {

        if ( n[i] === m ) {
            counter++;
        };

    };

    console.log('Количество символа в строке : ' + counter);
    return counter;

};
console.log(findChar(n,m));

var n = readlineSync.question("Word\n"); 

function reverseString(n) {
    var result = '';

    for ( var i = n.length-1; i >= 0; i--) {
        var currentChar = n[i];
        result += currentChar;
        
    };

    if ( result === n) {
        console.log('Палидром');
    } else {
        console.log('Не является палидромом')
    };
    return result;

};
console.log(reverseString(n)); 

var n = readlineSync.question("Word\n"); 

function reverseString(n) {

    var k = 0;

    for ( var i = n.length-1; i >= 0; i--) {

        if ( n[i] !== n[k] ) {

            return console.log('Не является палиндромом')
            break;
        };
        k++;
    };
    return console.log('Палидром')
};
console.log(reverseString(n));