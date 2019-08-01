function game() {

    var readlineSync = require('readline-sync');
    var fs = require('fs');
    var JSON5 = require('json5');
    var player1 = readlineSync.question("Type your name player 1\n");
    var player2 = readlineSync.question("Type your name player 2\n");

    while ( player1 === player2 ) {

        console.log('Error');
        var player2 = readlineSync.question("Type your name player 2 again\n");
    };
   
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
                                x = parseInt(readlineSync.question('Please, '+player+", type X\n"));
                                y = parseInt(readlineSync.question('Please, '+player+", type Y \n"));
                            }; 
                                
                            var arrN = {'y': y,'x':x}
                            return arrN;

    };
    function obj2str(obj) {

        var result = '';
        for (var key in obj) {
          result += key + ' ' + obj[key] + '\n';
           
        }
        return result;
    };
    function str2obj(str) {
        str = str.split(RegExp(' |\n'))
        
        var obj = {};
        
        for ( var i = 0; i < str.length-1; i+=2 ) {
          
            var element = str[i];
            var count = +str[i+1];
            obj[element] = count;
            
        };
        console.log(obj)
        return obj;
    };
    function writeScore2Buffer(obj) {

        var bufferSize=0;
        
          for ( var key in obj ) {
        
            bufferSize += key.length+2;
        
          };
          
          var buffer = Buffer.alloc(bufferSize+1);
          var offset = buffer.writeInt8(Object.keys(obj).length);
        
        for ( var key in obj) {
        
            
            offset = buffer.writeInt8(key.length,offset);
            offset += buffer.write(key,offset);
            offset = buffer.writeInt8(obj[key],offset);
            
          
        };
        fs.writeFileSync('score.txt',buffer);
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

        var x = parseInt(readlineSync.question('Please, '+player+", type X\n"));
        
        var y = parseInt(readlineSync.question('Please, '+player+", type Y \n"));

       
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
            console.log(winner)
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
            console.log(winner)
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
                writeScore2Buffer(winner)
            }; 
              
            var flagObj = false;

            for (var key in winner ) {

                console.log(winner);

                if ( key === winnerName ) {

                    winner[key] += 1;
                    console.log('Current stat \n')
                    console.log(winner)
                    writeScore2Buffer(winner)
                    flagObj = true;
                    
                    break;
                };  

            };
            if (!flagObj) {

                winner[winnerName] = 1;
                console.log('Current stat \n')
                console.log(winner)
                writeScore2Buffer(winner)
                
            };

            break; 
            
        };
        
    };
        
};

game();