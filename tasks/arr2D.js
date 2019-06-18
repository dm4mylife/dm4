function createArray2d(length,width) {

 
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
function sort(teams,result,sums) {
    
    for ( var i = 0; i < sums.length-1; i++ ) {
    
    let wasSwap = false;

        for ( var j = i + 1; j < sums.length; j++ ) {

            if ( sums[i] < sums[j] ) {
    
                var swap = sums[i];
                sums[i] = sums[j];
                sums[j] = swap;
                wasSwap = true;

                var swapT = teams[i];
                teams[i] = teams[j];
                teams[j] = swapT;

                var swapI = result[i];
                result[i] = result[j];
                result[j] = swapI;
                
            };   
        };
        
        if ( !wasSwap ) break;
        
    };
    return sums;
  
}; 
function print(teams, result, sums) {
    var result1 = 0;
    
    for ( var i = 0; i < result.length; i++) {
        process.stdout.write(teams[i]+'\t'+'\t');
        for ( var j = 0; j < result[i].length; j++ ) {
            process.stdout.write(result[i][j]+'\t');
        };

        process.stdout.write(' | \t'+sums[i]);
        process.stdout.write('\n');            
    }; 

    process.stdout.write('\n'+'\t'.repeat(2)+'___\t'.repeat(l)+'\n'+'\n'+'\t'.repeat(2));
    

   for ( var i = 0; i < result.length; i++) {
        var team  = i;

        currentCounter = 0;

        for ( var j = 0; j < result[i].length; j++ ) {
            currentCounter= currentCounter + result[j][i];
        };

    }; 
    console.log('')
        
};    

var readlineSync = require('readline-sync');
var l = parseInt(readlineSync.question("Type length \n"));
var w = parseInt(readlineSync.question("Type width \n"));
console.log('');


var result = createArray2d(l,w);

var teams = [];

for ( var i = 1; i <= w; ++i ) {
    teams.push("Team " + i);
};

var sums = createSum(result);

print(teams, result, sums);

var st = sort(teams, result,sums);

print(teams, result, sums);
