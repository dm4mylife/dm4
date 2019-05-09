var readlineSync = require('readline-sync');

var n = parseInt(readlineSync.question("Lucky ticket6\n Type a number "));

function luckyTicket6(n) {

    var firstTriple = (n - n % 1000) / 1000;
    var lastTriple = n % 1000;

    var c = firstTriple % 10;
    var a = firstTriple / 100 - (firstTriple % 100 / 100);
    var b = firstTriple % 100 / 10 - (c / 10);

    var z = lastTriple % 10;
    var x = lastTriple / 100 - (lastTriple % 100 / 100);
    var y = lastTriple % 100 / 10 - (z / 10);

if ( Math.round(a + b + c) === Math.round(x + y + z )) {
    console.log('\nCongratilation, you are the winner!!!\n');
} else {
    console.log('\nSorry,next time will be luck :(\n')
};
};
luckyTicket6(n);

var n = parseInt(readlineSync.question("Lucky ticket11\n Type a number "));

function luckyTicket11(n) {

    var firstTriple = (( n - (n % 100000)) / 100000);
    firstTriple = firstTriple / 10 - (firstTriple % 10 / 10);
    var lastTriple = n % 100000;

    var b1 = firstTriple % 10;
    var b2 = firstTriple % 100 / 10 - b1 / 10;
    var c = (firstTriple % 1000 - firstTriple % 100) / 100;
    var b = (firstTriple % 10000 - firstTriple % 1000) / 1000;
    var a = firstTriple / 10000 - b / 10;

    var y1 = lastTriple % 10;
    var y2 = lastTriple % 100 / 10 - y1 / 10;
    var z = (lastTriple % 1000 - lastTriple % 100) / 100;
    var y = (lastTriple % 10000 - lastTriple % 1000) / 1000;
    var x = lastTriple / 10000 - y / 10;


if ( Math.round(a + b + c + b1 + b2) === Math.round(x + y + z + y2 + y1 )) {
    
    console.log('\nCongratilation, you are the winner!!!\n');
} else {
    console.log('\nSorry,next time will be luck :(\n')
};
};
luckyTicket11(n);
