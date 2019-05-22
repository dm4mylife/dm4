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
console.log('');

function sort(newArray) {

    for ( var i = 1; i < newArray.length; i++) {

        var current = newArray[i]
        
        for ( var j = i; newArray[j -1 ] > current ; j--) {

              newArray[j] = newArray[j-1];  
        
        };
        newArray[j] = current;
    };
    return newArray;
};
console.log(sort(newArray));