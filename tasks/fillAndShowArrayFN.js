var readlineSync = require('readline-sync');

var n = parseInt(readlineSync.question("Type a number ")); 
console.log('\nCurrent Array\n');
var newArray = [];

function fillArray() {

    for (var i = 0; i < n; i++) {

    var max = 100;
    var min = 0;

    var random =  Math.floor(Math.random() * (max-min+1) + min);
    newArray.push(random);
    };
    console.log(newArray);
    return newArray;
};
fillArray();
console.log('\nPrinting array index\n');

function showArray(newArray) {

    for (var i = 0; i < newArray.length-1 ; i++) {
        process.stdout.write(newArray[i]+', ');
    };

    process.stdout.write(''+newArray[newArray.length-1])
    return newArray;
    console.log('')
};
showArray(newArray);
