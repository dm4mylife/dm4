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
    var kkk = 1000000000
    var kk = 1000000
    var k = 1000;
    
    for ( var i = 0; i < 4; i++) {


        if ( n === 0) {

            process.stdout.write(arr0[0]); 
            n = Math.floor( n % 1000 );

        };

       
        if ( n >= 100 && n <= 999 ) {

            var sepNum = Math.floor( n / 100 );
            
            process.stdout.write(arr0[sepNum]+' '+arr3[0]+' '); 

            n = n % 100;

            if ( n % 100 === 0 ) {

            process.stdout.write(' and ');  

            n = n - (Math.floor( n / 100) * 100);

            };

        };
           
         
        if (  n > 20 && n < 100  ) {

            sepNum = Math.floor( n / 10 ) - 2;
            
            process.stdout.write(arr2[sepNum]);

            n = n % 10;   

        };

        sepNum = n % 10;

        if (  n >= 10 && n <= 20   ) {
        
        process.stdout.write(arr1[sepNum]);

        };

        if ( n <= 9 ) {

        sepNum = n;
        process.stdout.write(arr0[sepNum]);
            
        };

        console.log(clone)
        if ( ( clone / kkk ) > 1 ) {
    
            sepNum = Math.floor( n / kkk );
            process.stdout.write(arr0[sepNum]+arr3[3]+' and ');
            n = Math.floor( n / k ) % k ;
            clone = Math.floor( n / 1000 );
            
        
          } else if ( ( clone / kk ) > 1) {
  
            process.stdout.write(arr3[2]+' and ');
            n = Math.floor( n / k ) % k ;
            clone = Math.floor( n / 1000 );
            i = i +1;
  
          } else if  ( clone / k === 1 ) {

            sepNum = Math.floor( n / k );
            process.stdout.write(arr0[sepNum]+arr3[1]);
            i = i + 3;

        } else if ( ( clone / k ) > 1 ) {

            
            sepNum = Math.floor( n / k );
            process.stdout.write(arr0[sepNum]+' '+arr3[1]+' and ');
            n =  n % k  ;
            clone =  n % k;
            i = i + 2;

          } else {

              i = i + 4;

          };

    };

    };
   

tellANumber();

console.log(tellANumber(n));