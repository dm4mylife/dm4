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
    function isCorrect(y,x,result1) {


                            while ( ( y > 3 || y < 1 ) || ( x > 3 || x < 1 ) || ( result1[y-1][x-1] === 'X ' || result1[y-1][x-1] === 'O ') ) {

                                console.log('Error');
                                y = parseInt(readlineSync.question("Player:"+player+"  Type Y\n"));
                                x = parseInt(readlineSync.question("Player:"+player+"  Type X \n"));
                            }; 
                                
                            var arrN = {'y': y,'x':x}
                            console.log(arrN)
                            return arrN;

    };    

    var result1 = createArray2d();
    tictactoe(result1);

    
    var flag = false;
    var player = 1;
    var char = 'X '
    var endGame = false;

        for ( var k = 0; k < 9; k++ ) {
              
                var y = parseInt(readlineSync.question("Player:"+player+"  Type Y\n"));
                var x = parseInt(readlineSync.question("Player:"+player+"  Type X \n"));

                var p = isCorrect(y,x,result1);

                y = p.y;
                x = p.x;

                result1[y-1][x-1] = char;

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
        
        
        if ( k === 8 ) {

            console.log('Endgame');

        };

        if ( endGame ) break;

        };
};
game();