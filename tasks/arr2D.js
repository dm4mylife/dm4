function fill(width,length) {

    var y = [];

    for ( var i = 0; i < width; i++ ) {

        var x = [];

        for (var k = 0; k < length; k++) {

            var max = 100;
            var min = 0;
            var random =  Math.floor(Math.random() * (max-min+1) + min);

            x.push(random);

        };

        y[i] = x; 

    };

return y;

};
function print() {

    console.log(r);
    console.log('');
    var resultAll = 0;
    var result = 0;
    var currentCounter = 0;
    
    for ( var i = 0; i < r.length; i++) {


            for ( var j = 0; j < r[i].length; j++ ) {
                
                var counter = r[i][j];
                process.stdout.write(r[i][j]+'\t');
                currentCounter = currentCounter + counter;
                resultAll = resultAll + counter;
                
            };

    process.stdout.write(' | \t'+currentCounter)
    process.stdout.write('\n');
    currentCounter = 0;

    }; 

    console.log('\n'+'___\t'.repeat(l)+'\n')

    for ( var k = 0; k < l; k++ ) {

         for ( var i = 0; i < r.length; i++ ) {

            for ( var j = k; j <= k; j++ ) {

                var currentII = r[i][j];
                result = result + currentII;
                    
            };
        };
            
    process.stdout.write(result + '\t')
    result = 0;

    };    
    
console.log(`\n\nTotal: ${resultAll}\n`);

}; 
function sort() {

var newArray = [];
var amount = 0;

    for ( var i = 0; i < l; i++ ) {

        for ( var j = 0; j < r[i].length; j++) {

            var counter = r[i][j];
            amount = amount + counter;
            
        };

    newArray.push(amount);
    };
    console.log(newArray);
    
            for ( var i = 0; i < l; i++ ) {

                for ( var j = i + 1; j < newArray; j++ ) {
        
                    var wasSwap = false;
        
                    if ( newArray[i] > newArray[j] ) {
         
                        var swap = newArray[i];
                        newArray[i] = newArray[j];
                        newArray[j] = swap;
                        wasSwap = true;
        
                    };   
                };

                if ( !wasSwap ) break;
            };   
};     

var readlineSync = require('readline-sync');
var l = parseInt(readlineSync.question("Type length \n"));
var w = parseInt(readlineSync.question("Type width \n"));
console.log('');

fill(l,w);
var r = fill(l,w);

print(r);

sort(r);    







