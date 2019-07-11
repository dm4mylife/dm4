function game() {

    var readlineSync = require('readline-sync');
    var fs = require('fs');
    var JSON5 = require('json5');
    var player1 = readlineSync.question("Type your name player 1\n");
    var player2 = readlineSync.question("Type your name player 2\n");

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
                                y = parseInt(readlineSync.question('Please, '+player+", type X\n"));
                                x = parseInt(readlineSync.question('Please, '+player+", type Y \n"));
                            }; 
                                
                            var arrN = {'y': y,'x':x}
                            return arrN;

    };    

    var result1 = createArray2d();
    tictactoe(result1);

    
    var flag = false;
    var flagWinner = false;
    player = player1;
    var endGame = false;
    var char = 'X ';
    var winner = {};
    var winnerName;

        for ( var k = 0; k < 9; k++ ) {

                var y = parseInt(readlineSync.question('Please, '+player+", type X\n"));
                var x = parseInt(readlineSync.question('Please, '+player+", type Y \n"));

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

                console.log('Winner is '+player1);
                endGame = true;
                winner[player1] = 0;
                winnerName = player1;

            };
            

            if ( (result1[0][0] === 'O ' && result1[0][1] === 'O ' && result1[0][2] === 'O ') || 
                ( result1[1][0] === 'O ' && result1[1][1] === 'O ' && result1[1][2] === 'O ') || 
                ( result1[2][0] === 'O ' && result1[2][1] === 'O ' && result1[2][2] === 'O ') || 
                ( result1[0][0] === 'O ' && result1[1][0] === 'O ' && result1[2][0] === 'O ') ||
                ( result1[0][1] === 'O ' && result1[1][1] === 'O ' && result1[2][1] === 'O ') ||
                ( result1[0][2] === 'O ' && result1[1][2] === 'O ' && result1[2][2] === 'O ') ||
                ( result1[0][0] === 'O ' && result1[1][1] === 'O ' && result1[2][2] === 'O ') ||
                ( result1[0][2] === 'O ' && result1[1][1] === 'O ' && result1[0][0] === 'O ') ) {

                console.log('Winner is '+player2);
                endGame = true;
                winner[player2] = 0;
                winnerName = player2;

            }; 
            
        if (!flag) {

            char = 'O ';
            flag = true;
            player = player2;
             
        } else {

            char = 'X '
            flag = false;
            player = player1;

        };   
        if ( k === 8 ) {

            console.log('Endgame');

        };
        
            if (endGame) {
                
                if (!fs.existsSync('score.txt')) {
                    console.log("The file created");
                    winner = JSON5.stringify(winner);
                    console.log(winner)
                    fs.writeFileSync('score.txt',winner,function(err,data){
                    console.log(data+"File doesnt exists, create new one")})

                }; 

                    var data = fs.readFileSync('score.txt');
                    var dataObj = JSON5.parse(data);
                    console.log(dataObj);
                    
                    var counter = 1;
                for (var key in dataObj ) {
                    
                    console.log(winnerName)

                    if ( key === winnerName && counter === 1) {

                        dataObj[key] += 1;
                        dataObj = JSON5.stringify(dataObj)
                        console.log("Success add stat one player")
                        fs.writeFileSync('score.txt',dataObj, function(err,data){ console.log(data)})
                        break;

                    } else {

                        dataObj[winnerName] = 1;
                        dataObj = JSON5.stringify(dataObj)
                        console.log("Success add stat second player")
                        fs.writeFileSync('score.txt',dataObj, function(err,data){ console.log(data)})
                        break;
                    }; 
                    counter++;
                        
                    };
                    
                break;    
                };
                
            };
                
        };
    

game();