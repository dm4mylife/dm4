var readlineSync = require('readline-sync');
var xC = parseInt(readlineSync.question("Player 1: Type X \n"));
var yC = parseInt(readlineSync.question("Player 1: Type Y\n"));


function printField(xC,yC) {

    var x = [];
    
    for ( var i = 0; i < 8; i+=2 ) {

      var y = [];

        for ( var j = 0; j < 3; j++ ) {
            
            y.push('*','-');

        };

        y.push('*');
        x[i] = y;
      
            for ( var m = i; i >= m && m !== 6; m+=2 ) {

            var y1 = []
            y1.push('|');

              for ( var k = 0; k < 3; k++ ) {

                y1.push(' ','|');

              };

                x[i+1] = y1;
                

          }; 
    }; 
      console.log('')
      console.log(x)
      return x;
    };
printField();

var field = printField();

function ttt(field) {

xC = field[i];
yC = field[i][j];

        
  
  

}