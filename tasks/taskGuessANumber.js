var readlineSync = require('readline-sync');

function random() {

    var max = 100;
    var min = 0;
    var random =  Math.floor(Math.random() * (max-min+1) + min); 
    
    for (var i = 6; i >= 0; i--) {

    var n = parseInt(readlineSync.question("Type a number "));
       
    if (random > n ) {
        console.log("Загаданное число больше");
    } else if (random < n ) {
        console.log("Загаданное число меньше")
    } else if (random === n) {
        console.log('Поздравляю,вы угадали число :)');
    };
    console.log(`Осталось попыток: ${i}`); 
};
    return console.log('Повезёт в следующий раз.Наверно :)')
};
random();