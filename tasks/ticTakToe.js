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

    function writeBuff(obj) {

  
        var count = 1;
      
          for (var key in obj ) {
            console.log(key + key.length)
            count = count + key.length + 2;
          }
      
        var buffer = Buffer.alloc(count)
        var offset = buffer.writeInt8(Object.keys(obj).length);
        
        for (var key in obj) {
          
          offset = buffer.writeInt8(key.length,offset);
          buffer.write(key,offset);
          offset = buffer.writeInt8(obj[key],offset+key.length)
      
        };
        fs.writeFileSync('Buffer.txt',buffer);
         
      
      };
      
      
      function readBuffer() {
      
        var readFile = fs.readFileSync('Buffer.txt','binary');
        var buffer = Buffer.from(readFile);
        var maxPlayers = buffer.readInt8();
        console.log(buffer)
        
        var result = '';
        var offset = 2;
        var empty = 1;
      
        for (var i = 1; i <= maxPlayers; i++) {
      
          var count = buffer.readInt8(empty);
          var playerName = buffer.toString('utf8',offset,offset+count);
          result += playerName;
          var score = buffer.readInt8(playerName.length+offset);
          
          if ( i === maxPlayers ) {
            result +=": "+score; 
          } else {
            result +=": "+score+',';
          }
      
          offset += 2 + playerName.length; 
          empty = offset-1;
          
         
        };
      
        result = `{ ${result} }`;
        result = JSON5.parse(result);
        console.log(result);
        return result;
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
            
            if (!fs.existsSync('Buffer.txt')) {
                console.log("The file created");
                writeBuff(winner);      

            }; 

            
            var dataObj = readBuffer();
              
            var flagObj = false;

            for (var key in winner ) {

                console.log(winner);

                if ( key === winnerName ) {

                    winner[key] += 1;
                    console.log('Current stat \n')
                    writeBuff(dataObj)
                    flagObj = true;
                    
                    break;
                };  

            };
            if (!flagObj) {

                dataObj[winnerName] = 1;
                console.log('Current stat \n')
                writeBuff(dataObj)
                
            };

            break;         
            
        };
        
    };
        
};

game();