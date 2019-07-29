var readlineSync = require('readline-sync');
var fs = require('fs')
var n = parseInt(readlineSync.question('Type a number '));
var testStr = 'vot eto jopa';

var resultColumn =[];
var resultRow = [];
for ( var i = 1; i <= n; i++ ) {
     resultRow.push(+i.toString(2));
};

console.log(resultRow.join(' '));

for ( var i = 1; i <= n; i++ ) {
    resultColumn.push(+i.toString(2));
};

console.log(resultColumn.join('\n'));

var buffer = Buffer.alloc(10);
console.log(buffer.length)
buffer.writeInt32BE(resultColumn)

console.log(buffer)