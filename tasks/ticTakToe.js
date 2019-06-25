function game() {

var readlineSync = require('readline-sync');

function tictactoe(result) {

    console.log('');

    for ( var i = 0; i < 3; i++ ) {

        process.stdout.write('* ')

            for ( var j = 0; j < 3; j++ ) {

                process.stdout.write('- * ');

            }; 

            console.log('');
                
                for ( var j = 0; j < 3; j++ ) {
                    
                    
                    process.stdout.write('| '+result[i][j]);   
 
            };
            process.stdout.write('|');
            console.log('');              
    };

    process.stdout.write('* - * - * - *')
    console.log('');
};

function createArray2d() {

    var arr = [];
    
    for ( var i = 0; i < 3; i++ ) {
        
        var arr1 = [];

        for (var k = 0; k < 3; k++) {

            if ( i === x1 && k === y1 ) {

                arr1.push('X ')

            } else if ( i === x2 && k === y2 ) {

                arr1.push('O ')

             } else {

                arr1.push('  ')
            }
            
        }; 

        arr[i] = arr1; 

    };

console.log(arr)
return arr;

};
       
var x1 = parseInt(readlineSync.question("Player 1: Type X \n"));
var y1 = parseInt(readlineSync.question("Player 1: Type Y\n"));
var result1 = createArray2d(x1,y1);

tictactoe(result1) 


var x2 = parseInt(readlineSync.question("Player 2: Type X \n"));
var y2 = parseInt(readlineSync.question("Player 2: Type Y\n"));
var result2 = createArray2d(x2,y2);

tictactoe(result2) 

};
game();