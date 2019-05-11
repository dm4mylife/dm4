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

n = parseInt(readlineSync.question("\nType a number to find in array\n"));

function findIndexArray(newArray) {

    for (var i = 0; i < newArray.length; i++) {

        if (newArray[i] === n) {
        
            console.log('Found ' + newArray[i]);
            return newArray[i];
        }; 
    };
    console.log('Current number index not found');
    return -1;
};
findIndexArray(newArray);
