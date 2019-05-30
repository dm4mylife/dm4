var readlineSync = require('readline-sync');

var n = parseInt(readlineSync.question("Type a number ")); 

function tellANumber(n) {

    var arr0 = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' ];
    var arr1 = [ 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifthteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var arr2 = ['twenty', 'thirty', 'fourty', 'fifthy', 'sixty', 'seventy', 'eighty', 'ninety'];
    var arr3 = [ 'hundred' , ' thousand', 'million', 'billion'];

    var result = '';
    var sepNum = 0;
    







        if ( n === 0) {

            process.stdout.write(arr0[0]); 

        };

        if ( n >= 100 && n <= 999 ) {

            var sepNum = Math.floor( n / 100 );
            
            process.stdout.write(arr0[sepNum]+' '+arr3[0]); 

            if ( n % 100 !== 0 ) {

            process.stdout.write(' and ');   

            };

        };
           
        n = n - (Math.floor( n / 100) * 100);
         
        if (  n > 20 && n < 100  ) {

            sepNum = Math.floor( n / 10 ) - 2;
            
            process.stdout.write(arr2[sepNum]);

        n = n % 10;   

        };

        sepNum = n % 10;

        if (  n >= 10 && n <= 20   ) {
        
        process.stdout.write(arr1[sepNum]);

        };

        if ( n <= 9 && n !== 0) {

        process.stdout.write(arr0[sepNum]);
            
        };
        
        return result;
};
tellANumber();

console.log(tellANumber(n));