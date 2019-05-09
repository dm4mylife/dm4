var readlineSync = require('readline-sync');

function random() {

    
    var max = 100;
    var min = 0;
    var random =  Math.floor(Math.random() * (max-min+1) + min); 
    console.log(random);
    end = console.log('Повезёт в следующий раз.Наверно :)');
    for (var i = 6; i >= 0; i--) {

    var n = parseInt(readlineSync.question("Type a number ")); 
    if (random > n ) {
        console.log("Загаданное число больше");
    } else if (random < n ) {
        console.log("Загаданное число меньше")
    } else if (random === n) {
        end = console.log('Поздравляю,вы угадали число :)');
        break;
    };
    console.log(`Осталось попыток: ${i}`); 
};
    return end;
};
random();