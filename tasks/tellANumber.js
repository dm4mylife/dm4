var readlineSync = require('readline-sync');

var n = parseInt(readlineSync.question("Type a number ")); 

function tellANumber(n) {

    var arr0 = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' ];
    var arr1 = [ 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifthteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var arr2 = ['twenty', 'thirty', 'fourty', 'fifthy', 'sixty', 'seventy', 'eighty', 'ninety'];
    var arr3 = [ 'hundred' , 'thousand', 'million', 'billion'];

    var clone = n;
    var result = '';
    var sepNum = 0;
    var kkk = 1000000000;
    var kk = 1000000;
    var k = 1000;


    if ( n < 0 ) {

        process.stdout.write('minus ');
        n = n * -1;
    };
    
    for ( var i = 0; i < 4; i++ ) {

        if ( n === 0 && i === 0) { 

            process.stdout.write(arr0[0]+' '); 
            i = 4;
            clone = -1;
        };

        if ( ( clone / kkk ) > 1 ) {
    
            clone = n % kkk;
            n = Math.floor( n / kkk );
            
          }  else if  ( clone % kk === 0 ) {
            clone = n % kk;
            sepNum = Math.floor( n / kk );
            process.stdout.write(arr0[sepNum]+' '+arr3[2]);
            i = 3;
          
          } else if ( ( clone / kk ) > 1 ) {

            clone = n % kk;
            n = Math.floor( n / kk );
            i =  1;
  
          } else if  ( clone % k === 0 ) {
            
            n = Math.floor( n / k  );
            clone = n % k;
            i = 3;

        } else if ( ( clone / k ) > 1 ) {

            clone = n % k ;
            n =  Math.floor( n / k );
            i = 2;
            
          } else {

              i = 4;

          };
         
       
        if ( n >= 100 && n <= 999 ) {

            var sepNum = Math.floor( n / 100 );
            
            process.stdout.write(arr0[sepNum]+' '+arr3[0]+' '+' and '); 

            n = n % 100;

            if ( n % 100 === 1 ) {

            process.stdout.write(' and ');  

            n = n - (Math.floor( n / 100) * 100);

            };

        };
           
         
        if ( n >= 20 && n < 100 ) {

            sepNum = Math.floor( n / 10 ) - 2;
            
            process.stdout.write(arr2[sepNum]);

            n = n % 10;   

        };

        sepNum = n % 10;

        if ( n >= 10 && n < 20 ) {
        
        process.stdout.write(arr1[sepNum]);

        };

        if ( n > 0 && n <= 9 ) {

        sepNum = n;
        process.stdout.write(arr0[sepNum]+' ');
            
        };

        if ( i  === 2 ) {

            process.stdout.write(arr3[1]+' and '); 
            n = clone;
        
        }; 

        if ( i === 1 ) {

            process.stdout.write(arr3[2]+' and '); 
            n = clone;

        };

        if ( i === 0 ) {

            process.stdout.write(arr3[3]+' and ');
            n = clone
            
        };
        if ( i === 3 ) {
            process.stdout.write(' '+arr3[1]);

        }

    };

    };
   

tellANumber();

console.log(tellANumber(n));