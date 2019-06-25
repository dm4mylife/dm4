var readlineSync = require('readline-sync');

name1 = readlineSync.question("Write a key \n");
name2 = readlineSync.question("Write a prop \n");

function isKey() {

var obj = {};


    while ( name1 !== "stop" || name2 !== "stop") {

        obj[name1] = name2;
        name1 = readlineSync.question("Write a key \n");
        if ( name1 ==='stop') break;
        name2 = readlineSync.question("Write a prop \n");
        if ( name2 ==='stop') break;

    };

    for (var key in obj) {

        console.log(key+ ': ' + obj[key]);

    }
    
}
isKey(name1,name2);