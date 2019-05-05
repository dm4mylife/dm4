
var readlineSync = require('readline-sync');

/* function year (num) {
    if (num % 4 === 0 && num % 400 === 0) {
        console.log('Високосный год');
    } else {
        console.log("Обычный год");
    }  
};
*/
/*var n3 = parseInt(readlineSync.question("Task 3 \nType a number "));

function task3(n3) {
    for ( var i = 1; i < n3; i++) {
        process.stdout.write(i+", ");
    };
    process.stdout.write(""+i);
};
task3(n3);


var n4 = parseInt(readlineSync.question("\nTask 4 \nType a number "));
function task4(n4) {

    
    for( var i = 1; i <= n4; i++) {

    for( var j = 1; j < n4; j++) {
        process.stdout.write("*");
       }; 
       console.log('*')
    };
};
task4(n4);

var n5 = parseInt(readlineSync.question("\nTask 5 \nType a number "));

function task5(n5) {

var result = '';
    for( var i = 1; i <= n5; i++) {
        
        result = `${result}*`
        console.log(result)
    }   
}
task5(n5);

var n5a = parseInt(readlineSync.question("\nTask 5a \nType a number "));

function task5a(n5a) {

    
    for( var i = 0; i < n5a; i++) {

        for( var j = 1; j <= i; j++) {
        process.stdout.write("*");
        };
        console.log('*');
    }; 
    
};
task5a(n5a);
var n6 = parseInt(readlineSync.question("\nTask 6 \nType a number "));

function task6(n6) {

    
    for( var i = 0; i < n6; n6--) {

        for( var j = 1; j < n6; j++) {
        process.stdout.write("*");
        };
        console.log('*');
    }; 
    
};
task6(n6);

 var n7 = parseInt(readlineSync.question("\nTask 7 \nType a number "));

function task7(n7) {
    
    var newN = n7;

        for ( var i = 0; i < n7; n7--) {

            for ( var j = 1; j < n7; j++) {
                process.stdout.write("*");
                };

                console.log('*');    
         };

         for( var i = 0; i < n5a; i++) {

            for( var j = 1; j <= i; j++) {
            process.stdout.write("*");
            };
            console.log('*');
        }; 
        };
task7(n7);
*/
/*var n8 = parseInt(readlineSync.question("\nTask 7 \nType a number "));


function task8(n8) {

    for ( var k = 0; k < n8; k++) {
        process.stdout.write("*")
    }
    for ( var j = 0; j < n8/2; j++) {
        console.log("");
        process.stdout.write("*")
        for (var i = 0; i < n8/2; i++) {
            process.stdout.write(" ");
        };
        process.stdout.write("*")
    };
    console.log('');
    for ( var m = 0; m <n8;m++) {
        process.stdout.write("*")
    };     
};
task8(n8);

/*var n9 = parseInt(readlineSync.question("\nTask 8 \nType a number "));

function task8(n9) {

        
            for ( var g = 0; g < n9; g++) {
                    process.stdout.write('*');
            }; 
                console.log('');

                    for( var i = 0; i <= n9; i++) {

                        for( var j = 0; j <= i; j++) {
                            process.stdout.write(" ");
                        };
                    
                        for( var l = 1; l < n9; l++) {
                            process.stdout.write("*");
                
                        };
                        console.log('');
                        n9 -= 1; 
                    };                        
                };
                            
task8(n9);
*/
var n10 = parseInt(readlineSync.question("\nTask 10 \nType a number "));
function task10(n10) {

    var n10a = 0;
    var n10a = n10;
    console.log('');

for ( var i = 0; i < n10; i++) {
    process.stdout.write("*");
    };
    console.log('');

        var k = 0;
        for (var h = 2; h < n10; n10-=2) {

            for( var j = 0; j <= k; j++) {
                process.stdout.write(" ");
            };
            k += 1;
            for ( var i = 2; i < n10; i++) {
                process.stdout.write("*");
            };
            console.log('');
        };
        var k = 3;
        for (var h = 3; h < n10a; n10a-=2) {

            for( var j = 3; j < n10a; j+=2) {
                process.stdout.write(" ");
            };
            for ( var i = 0; i < k; i++) {
                process.stdout.write("*");
            };
            k += 2;
            console.log('');
        };

for ( var n = 0; n < k; n++) {
        process.stdout.write("*");
    };
    console.log('');
};     
task10(n10);
