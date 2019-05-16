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

/** 
function sort(newArray) {


    for (var i = 0; i < newArray.length ; i++) {

        for ( var j = 0; j < newArray.length-1 - i; j++) {

            if (newArray[j] > newArray[j+1]) {
                var swap = newArray[j];
                newArray[j] = newArray[j+1];
                newArray[j+1] = swap;
            };
        };  
    };
    
    console.log('');   
    console.log(newArray);
    return newArray;
};
sort(newArray);
*/

function sort(newArray) {

       number = newArray[0]; 
        
    for (var i = 0; i < newArray.length ; i++) {
       
        if ( number > newArray[i]) {
        number = newArray[i];    
        };
    };

    
    console.log('');   
    console.log(number);
    return newArray;
};
sort(newArray);