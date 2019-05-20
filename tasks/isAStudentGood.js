var readlineSync = require('readline-sync');

var n = parseInt(readlineSync.question("Type a number ")); 
console.log('\nCurrent Array\n');
var newArray = [];

function fillArray() {

    for (var i = 0; i < n; i++) {

    var max = 5;
    var min = 1;

    var random =  Math.floor(Math.random() * (max-min+1) + min);
    newArray.push(random);
    console.log(random)
    };
    console.log(newArray);
    return newArray;
};
fillArray();
function isGood(newArray) {

var flag = false;
var number = newArray[0];   
var counter = 0;
    for ( var i = 0; i < newArray.length; i++) {

        counter = counter + newArray[i];

        console.log(counter);
    };
   
    var mark = Math.floor(counter / newArray.length)
    console.log('Средняя оценка ' + mark);

    
    if (mark === 1 || mark === 2) {
        console.log('Неуспевающий');
    } else if ( mark === 3) {
        console.log('Троечник');
    } else if ( mark === 4 ) {
        console.log('Ударник');
    } else {
        console.log('Отличник')
    };
    
};
console.log(isGood(newArray));
