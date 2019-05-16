var readlineSync = require('readline-sync');

var n = parseInt(readlineSync.question("Lucky ticket6\n Type a number "));

function luckyTicket6(n) {

    var lastPart = 0;
    var firstPart = 0;

    for ( var i = 0; i < 6; i++) {

        if ( i >= 3 ) {

            firstPart = n % 10 + firstPart;
            n = n / 10 - (n % 10 / 10);
            
        } else {

            lastPart = n % 10 + lastPart;
            n = n / 10 - (n % 10 / 10);
            console.log(lastPart)
        };
    };

if ( Math.floor(firstPart) === Math.round(lastPart)) {

    console.log('\nCongratilation, you are the winner!!!\n');

} else {

    console.log('\nSorry,next time will be luck :(\n')
};
};
luckyTicket6(n);


var n = parseInt(readlineSync.question("Lucky ticket11\n Type a number "));

function luckyTicket11(n) {

    var lastPart = 0;
    var firstPart = 0;

    for ( var i = 0; i < 11; i++) {

        if ( i >= 6 ) {

            firstPart = n % 10 + firstPart;
            n = n / 10 - (n % 10 / 10);
            
        } else if ( i === 5 ) {
            n = n / 10 - (n % 10 / 10);

        } else {

            lastPart = n % 10 + lastPart;
            n = n / 10 - (n % 10 / 10);
            
        };
    };

    
if ( Math.round(lastPart) === Math.round(firstPart)) {
    
    console.log('\nCongratilation, you are the winner!!!\n');

} else {

    console.log('\nSorry,next time will be luck :(\n')
};
};
luckyTicket11(n);
