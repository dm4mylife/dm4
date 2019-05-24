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

        for ( var j = i;  j >= 0; j--) {
            
            if (newArray[j-1] > newArray[j]) {

            var swap = newArray[j];  
            newArray[j] = newArray[j-1];
            newArray[j-1] = swap;

            };
        }; 
    };
    return newArray;
};
console.log(sort(newArray));