var readlineSync = require('readline-sync');
var a = console.log("Hello,Nick\n lets play a game");
var firstNum = parseInt(readlineSync.question("Type a number "));

var secondNum = parseInt(readlineSync.question("Okey, its a first number,now type a one more number "));


c = (firstNum ** 2 + 2*secondNum -4) / (firstNum * secondNum);
console.log("The answer is " + c);

/**** */
xswd