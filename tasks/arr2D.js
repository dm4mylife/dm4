
function arr2d(width,length) {

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


function print(r) {

    for ( var i = 0; i < r.length; i++) {

        for ( var j = 0; j < r[i].length; j++ ) {

            process.stdout.write(r[i][j]+'\t');

        };
        
        process.stdout.write('\n');

    };
    
    
};

var readlineSync = require('readline-sync');
var l = parseInt(readlineSync.question("Type width \n"));
var w = parseInt(readlineSync.question("Type length \n"));

var r = arr2d(w, l);
console.log(r);
print(r);





