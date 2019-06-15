function teams(length,width) {

    var y = [];
    
    for ( var i = 0; i < width; i++ ) {
        team = i;
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
function createSum(result) { 

    var newArray = [];
    var amount = 0;

    for ( var i = 0; i < w; i++ ) {

        for ( var j = 0; j < l; j++) {

            var counter = result[i][j];
            amount = amount + counter;
            
        };
        
        newArray.push(amount);
        amount = 0;
    }; 

    return newArray;
    
};
function sort(result,sums) {
    
    for ( var i = 0; i < sums.length-1; i++ ) {
    
    let wasSwap = false;

        for ( var j = i + 1; j < sums.length; j++ ) {

            if ( sums[i] < sums[j] ) {
    
                var swap = sums[i];
                sums[i] = sums[j];
                sums[j] = swap;
                wasSwap = true;

                var swapI = result[i];
                result[i] = result[j];
                result[j] = swapI;
                
            };   
        };
        
        if ( !wasSwap ) break;
        
    };
    return sums;
  
}; 
function print() {

    console.log(result);
    console.log('');
    var resultAll = 0;
    var result1 = 0;
    var currentCounter = 0;
    
    for ( var i = 0; i < result.length; i++) {
        var team  = i;
    
    process.stdout.write('team '+team+'\t'+'\t');
    
            for ( var j = 0; j < result[i].length; j++ ) {
                
                var counter = result[i][j];
                process.stdout.write(result[i][j]+'\t');
                currentCounter = currentCounter + counter;
                resultAll = resultAll + counter;
                
            };

    process.stdout.write(' | \t'+currentCounter)
    process.stdout.write('\n');
    currentCounter = 0;
            
    }; 

    process.stdout.write('\n'+'\t'.repeat(2)+'___\t'.repeat(l)+'\n'+'\n'+'\t'.repeat(2));
    

    for ( var k = 0; k < l; k++ ) {

         for ( var i = 0; i < result.length; i++ ) {

            for ( var j = k; j <= k; j++ ) {

                var currentII = result[i][j];
                result1 = result1 + currentII;
                    
            };
        };
            
    process.stdout.write(result1 + '\t')
    result1 = 0;

    };    
    
console.log(`\n\nTotal: ${resultAll}\n`);
    
}; 
    

var readlineSync = require('readline-sync');
var l = parseInt(readlineSync.question("Type length \n"));
var w = parseInt(readlineSync.question("Type width \n"));
console.log('');


var result = teams(l,w);

print(result);

var sums = createSum(result);

var st = sort(result,sums);

print(st)
 