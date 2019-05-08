
/*
human = {
    name: "Nick",
    age: 28,
    gender: 'male',
};
var gNick = 'age'
human.age = 30;
function obj(human) {
    for (var key in human) {
        console.log(key + human.key);
    }
}

console.log(obj(human));
*/;

var readlineSync = require('readline-sync');

var n = parseInt(readlineSync.question("Task 1 \nType a number "));
a=1;
b=1;
var c=1;
;
function fibo(n) {
for (var i = 3; i <= n && n !==1 && n !==2; i++) {
    c=a+b;
    a=b;
    b=c;
};
return c;
};
console.log(fibo(n));