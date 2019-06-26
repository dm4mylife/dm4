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
                    arr1.push('  ');
            }; 

            arr[i] = arr1; 

        };

        console.log(arr)
        return arr;

    };
        
    var result1 = createArray2d();
    tictactoe(result1);

    var char = 'X '
    var flag = false;

        for ( var i = 0; i < 9; i++ ) {

            
    var x1 = parseInt(readlineSync.question("Player 1: Type X \n"));
    var y1 = parseInt(readlineSync.question("Player 1: Type Y\n"));
    result1[y1][x1] = char;

    

    tictactoe(result1);

    if (!flag) char = 'O '

    var x2 = parseInt(readlineSync.question("Player 2: Type X \n"));
    var y2 = parseInt(readlineSync.question("Player 2: Type Y\n"));
    result1[y2][x2] = char;

    
    tictactoe(result1);

    if (!flag) char = 'X '
    
    };

};
game();