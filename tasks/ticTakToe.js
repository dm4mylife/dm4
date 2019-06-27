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

        
        return arr;

    };
        
    var result1 = createArray2d();
    tictactoe(result1);

    
    var flag = false;
    var player = 1;
    var char = 'X '
    var endGame = false;

        for ( var i = 0; i < 9; i++ ) {

    
            var y = parseInt(readlineSync.question("Player:"+player+"  Type Y\n"));
            var x = parseInt(readlineSync.question("Player:"+player+"  Type X \n"));

            result1[y][x] = char;
            tictactoe(result1);

            if ( (result1[0][0] === 'X ' && result1[0][1] === 'X ' && result1[0][2] === 'X ') || 
                ( result1[1][0] === 'X ' && result1[1][1] === 'X ' && result1[1][2] === 'X ') || 
                ( result1[2][0] === 'X ' && result1[2][1] === 'X ' && result1[2][2] === 'X ') || 
                ( result1[0][0] === 'X ' && result1[1][0] === 'X ' && result1[2][0] === 'X ') ||
                ( result1[0][1] === 'X ' && result1[1][1] === 'X ' && result1[2][1] === 'X ') ||
                ( result1[0][2] === 'X ' && result1[1][2] === 'X ' && result1[2][2] === 'X ') ||
                ( result1[0][0] === 'X ' && result1[1][1] === 'X ' && result1[2][2] === 'X ') ||
                ( result1[0][2] === 'X ' && result1[1][1] === 'X ' && result1[0][0] === 'X ') ) {

                console.log('Win player 1');
                endGame = true;

            };

            if ( (result1[0][0] === 'O ' && result1[0][1] === 'O ' && result1[0][2] === 'O ') || 
                ( result1[1][0] === 'O ' && result1[1][1] === 'O ' && result1[1][2] === 'O ') || 
                ( result1[2][0] === 'O ' && result1[2][1] === 'O ' && result1[2][2] === 'O ') || 
                ( result1[0][0] === 'O ' && result1[1][0] === 'O ' && result1[2][0] === 'O ') ||
                ( result1[0][1] === 'O ' && result1[1][1] === 'O ' && result1[2][1] === 'O ') ||
                ( result1[0][2] === 'O ' && result1[1][2] === 'O ' && result1[2][2] === 'O ') ||
                ( result1[0][0] === 'O ' && result1[1][1] === 'O ' && result1[2][2] === 'O ') ||
                ( result1[0][2] === 'O ' && result1[1][1] === 'O ' && result1[0][0] === 'O ') ) {

                console.log('Win player 2');
                endGame = true;

            };

    
        if (!flag) {

            char = 'O ';
            flag = true;
            player = 2;

        } else {

            char = 'X '
            flag = false;
            player = 1;

        };
        
        
        if ( i === 8 ) {

            console.log('Endgame');

        }

        if ( endGame ) break;

        };
};
game();