
var readlineSync = require('readline-sync');

var n1 = parseInt(readlineSync.question("Task 1 \nType a number "));
console.log('');
function task1(n1) {
    for ( var i = 0; i < n1; i++) {
        console.log('*')
    };
};
task1(n1);

var n2 = parseInt(readlineSync.question("Task 2 \nType a number "));
console.log('');
function task2(n2) {
    for ( var i = 0; i < n2; i++) {
        process.stdout.write('*');
    };
};
task2(n2);
console.log('');

var n3 = parseInt(readlineSync.question("Task 3 \nType a number "));
console.log('');
function task3(n3) {
    for ( var i = 1; i < n3; i++) {
        process.stdout.write(i+", ");
    };
    process.stdout.write(""+i);
};
task3(n3);

var n4 = parseInt(readlineSync.question("\nTask 4 \nType a number "));
function task4(n4) {
console.log('');
    
    for( var i = 1; i <= n4; i++) {

    for( var j = 1; j < n4; j++) {
        process.stdout.write("*");
       }; 
       console.log('*')
    };
};
task4(n4);

var n5 = parseInt(readlineSync.question("\nTask 5 \nType a number "));
console.log('');
function task5(n5) {

var result = '';
    for( var i = 1; i <= n5; i++) {
        
        result = `${result}*`
        console.log(result)
    }   
}
task5(n5);

var n5a = parseInt(readlineSync.question("\nTask 5a \nType a number "));
console.log('');
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
console.log('');
function task6(n6) {
    
        for ( var i = 1; i < n6; i+=2) {

            for ( var g = 0; g < n6; g++) {
                process.stdout.write("*");
            };
            console.log('');
        };
            for ( var h = 1; h <= 1; h++) {

                for (var g = 1; g < n6; g+=2) {
                process.stdout.write("*");
                };
                for ( var j = 1; j <= 1; j++) {
                process.stdout.write(" ");
                };
                for (var g = 1; g < n6; g+=2) {
                process.stdout.write("*");
                };
                console.log('');
            };

            for ( var i = 1; i < n6; i+=2) {

                for ( var g = 0; g < n6; g++) {
                    process.stdout.write("*");
                };
                console.log('');
            };
    }; 
task6(n6);

 var n7 = parseInt(readlineSync.question("\nTask 7 \nType a number "));
console.log('');
function task7(n7) {

    for ( var k = 0; k < n7; k++) {
        process.stdout.write("*")
    }
    for ( var j = 0; j < n7/2; j++) {
        console.log("");
        process.stdout.write("*")
        for (var i = 2; i < n7; i++) {
            process.stdout.write(" ");
        };
        process.stdout.write("*")
    };
    console.log('');
    for ( var m = 0; m <n7;m++) {
        process.stdout.write("*")
    };     
};
task7(n7);

var n8 = parseInt(readlineSync.question("\nTask 8 \nType a number "));
console.log('');
function task8(n8) {

    
    for( var i = 0; i < n8; n8--) {

        for( var j = 0; j < n8; j++) {
        process.stdout.write("*");
        };
        console.log('');
    }; 
    
};
task8(n8);

var n9 = parseInt(readlineSync.question("\nTask 9 \nType a number "));
console.log('');
function task9(n9) {
var n9a =n9;
    for ( var i = 2; i < n9; n9--) {

        for ( var g = 2; g < n9; g++) {
            process.stdout.write("*");
        };
        console.log('');
    };
    for ( var h = 3; h < n9a; h++) {
        
        for (var g = 1; g < h; g++) {
            process.stdout.write("*");
        };
     console.log('');   
    };
};     
task9(n9);

var n10 = parseInt(readlineSync.question("\nTask 10 \nType a number "));
console.log('');
function task10(n10) {

            console.log('');
            for ( var g = 0; g < n10; g++) {
                    process.stdout.write('*');
            }; 
            console.log('');
            var k = n10;

                    for( var i = 1; i < n10; i++) {

                        for( var j = 0; j < i; j++) {
                            process.stdout.write(" ");      
                        };                                         
                        for( var l = 1; l < k; l++) {
                            process.stdout.write("*");
                        };
                        k -=1;
                        console.log('');  
                    };                        
                };                     
task10(n10);

var n11 = parseInt(readlineSync.question("\nTask 11 \nType a number "));
function task11(n11) {

    var n11a = 0;
    var n11a = n11;
    console.log('');

for ( var i = 0; i < n11; i++) {
    process.stdout.write("*");
    };
    console.log('');

        var k = 0;
        for (var h = 2; h < n11; n11-=2) {

            for( var j = 0; j <= k; j++) {
                process.stdout.write(" ");
            };
            k += 1;
            for ( var i = 2; i < n11; i++) {
                process.stdout.write("*");
            };
            console.log('');
        };
        var k = 3;
        for (var h = 3; h < n11a; n11a-=2) {

            for( var j = 3; j < n11a; j+=2) {
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
task11(n11);
