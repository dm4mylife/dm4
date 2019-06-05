var readlineSync = require('readline-sync');

var n = parseInt(readlineSync.question("Type a number ")); 

function tellANumber(n) {

    var arr0 = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' ];
    var arr1 = [ 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifthteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var arr2 = ['twenty', 'thirty', 'fourty', 'fifthy', 'sixty', 'seventy', 'eighty', 'ninety'];
    var arr3 = [ 'billion','million','thousand','hundred' ];

    var k = 1000000000;


    if ( n < 0 ) {

        process.stdout.write('minus ');
        n = n * -1;

    };

    if ( n === 0 ) {

        process.stdout.write(arr0[0]);
    };

     for ( var i = 0; i < 3; i++ ) {

        var a = Math.floor( n / k );

        if ( a != 0 ) {

            triple(a);
            process.stdout.write(' '+ arr3[i]);

        };

    k = Math.floor( k / 1000 );

    };
    
    triple(n);

    };

tellANumber();

console.log(tellANumber(n));

function triple() {
           
    var arr0 = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' ];
    var arr1 = [ 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifthteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var arr2 = ['twenty', 'thirty', 'fourty', 'fifthy', 'sixty', 'seventy', 'eighty', 'ninety'];
    var arr3 = [ 'hundred' , 'thousand', 'million', 'billion'];

    var sepNum = 0;
    var kkk = 1000000000;
    var kk = 1000000;
    var k = 1000;

    if ( n >= 100 && n <= 999 ) {

        var sepNum = Math.floor( n / 100 );
        
        process.stdout.write(arr0[sepNum]+' '+arr3[0]+' '+' and '); 

        n = n % 100;

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
};