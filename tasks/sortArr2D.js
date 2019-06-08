var readlineSync = require('readline-sync');
var n = parseInt(readlineSync.question("Type number \n"));
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

function sort() {

    for ( var i = 0; i < newArray.length; i++ ) {


        for ( var j = i + 1; j < newArray.length; j++ ) {

            var wasSwap = false;

            if ( newArray[i] > newArray[j] ) {

                
                var swap = newArray[i];
                newArray[i] = newArray[j];
                newArray[j] = swap;
                wasSwap = true;

            };
            
            
        }
        if ( !wasSwap ) break;

    };

    console.log(newArray)
};
sort(newArray)
