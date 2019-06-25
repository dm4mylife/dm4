var readlineSync = require('readline-sync');

n = parseInt(readlineSync.question("Write number \n"));

function binarySearch(n) {

var arr = [3,7,21,33,56,78,90,103];

var first = 0;
var last = arr.length-1;
var middle = 0;
var flag = false;

        while ( flag === false && first <= last ) {

        middle = Math.floor((first + last) / 2);

        console.log(middle)

        if ( arr[middle] > n ) {

            last = middle - 1;

        } else if ( arr[middle] < n ) {

            first = middle + 1;

        } else if ( arr[middle] === n) {

            flag = true;
            console.log('Found '+ middle);

        } else {

            flag = true;
            console.log('Not Found');

        };
    
    };
    

};
binarySearch(n);