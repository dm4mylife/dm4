var readlineSync = require('readline-sync');

var n = parseInt(readlineSync.question("Type a number ")); 

function tellANumber(n) {

    var arr0 = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' ];
    var arr1 = [ 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifthteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var arr2 = ['twenty', 'thirty', 'fourty', 'fifthy', 'sixty', 'seventy', 'eighty', 'ninety'];
    var arr3 = [ 'hundred' ];
    var arr4 = [ 'thousand' ];
    var arr5 = [ 'million' ];
    var arr6 = [ 'billion' ];
    var result = '';
    

        if ( n >= 100 && n <= 999 ) {

            var sepNum = Math.floor( n / 100 );
            var currentArray = arr0;

            for ( var i = 0; i < arr0.length; i++ ) { 

                    var currentIndex = currentArray[i];

                if ( currentArray[i] === currentArray[sepNum] ) {
                    
                    result = `${currentIndex} ${result}`;
                };
            }; 

            if ( n % 100 === 0) {
                currentIndex = arr3[0];
                 result = `${result}${currentIndex}`;
            } else {
                currentIndex = arr3[0];
                result = `${result}${currentIndex} and `;

            };

            n = n - (Math.floor( n / 100) * 100);
        }; 

        if (  n > 20 && n < 100  ) {

            sepNum = Math.floor( n / 10 ) - 2;
            currentArray = arr2;

            for ( var i = 0; i < arr2.length; i++ ) {

                    currentIndex = currentArray[i];

                if ( currentArray[i] === currentArray[sepNum] ) {
                    
                    result = `${result}${currentIndex}`;
                };
            };

        n = n % 10;   
        };
        sepNum = n % 10;

        if (  n >= 10 && n <= 20   ) {

        
        currentArray = arr1;

            for ( var i = 0; i < arr1.length; i++ ) { 

                    currentIndex = currentArray[i];

                if ( currentArray[i] === currentArray[sepNum] ) {
                    
                    result = `${result}${currentIndex}`;
                };
            }; 
        };

        if ( n <= 9 && n !== 0) {

        currentArray = arr0;  

            for ( var i = 0; i < arr0.length; i++ ) {

                    currentIndex = currentArray[i];

                if ( currentArray[i] === currentArray[sepNum]) {
                
                    result = `${result}${currentIndex}`;
                };
            };
        };
        
        return result;
};
tellANumber();

console.log(tellANumber(n));