var readlineSync = require('readline-sync');

var n = parseInt(readlineSync.question("Type a number ")); 

function tellANumber(n) {

    var arr3 = [ 'billion','million','thousand' ];

    var k = 1000000000;
    
    if ( n <= 4 * k && n >= -4 * k ) { 

        if ( n < 0 ) {

            process.stdout.write('minus ');
            n = n * -1;

        };

        if ( n === 0 ) {

            process.stdout.write('zero');
        };


        for ( var i = 0; i < 3; i++ ) {

            var a = Math.floor( n / k );
            
            if ( a !== 0 ) {
                
                triple(a);

                process.stdout.write(' '+ arr3[i]+' ');
                n = n - (a * k); 
            }; 
            
        k =  k / 1000;

        };
        
        triple(n); 
    };
};
    
tellANumber(n);

function triple(a) {
           
    var arr0 = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' ];
    var arr1 = [ 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifthteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var arr2 = ['twenty', 'thirty', 'fourty', 'fifthy', 'sixty', 'seventy', 'eighty', 'ninety'];
    var arr3 = [ 'hundred' , 'thousand', 'million', 'billion'];

    var sepNum = 0;

    if ( a >= 100 && a <= 999 ) {

        var sepNum = Math.floor( a / 100 );
        
        process.stdout.write(arr0[sepNum]+' '+arr3[0]+" "); 

        a = a % 100;

    };
    
    if ( a >= 20 && a < 100 ) {

        sepNum = Math.floor( a / 10 ) - 2;
        
        process.stdout.write(arr2[sepNum]);

        a = a % 10;   

    };

    sepNum = a % 10;

    if ( a >= 10 && a < 20 ) {
    
    process.stdout.write(arr1[sepNum]);

    };

    if ( a > 0 && a <= 9 ) {

    process.stdout.write(arr0[a]+' ');
        
    };
}; 
