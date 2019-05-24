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

    for ( var i = 0; i < newArray.length-1; i++) {

        var index = i;

        for ( var j = i + 1; j < newArray.length; j++) {

             if ( newArray[i] > newArray[j] ) {
                 index = j;

             };
        };
        
         var swap = newArray[i];
         newArray[i] = newArray[j];
         newArray[j] = swap;
    };
    return newArray;
};
console.log(sort(newArray));