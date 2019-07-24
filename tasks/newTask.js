var readlineSync = require('readline-sync');
var fs = require('fs')
var n = parseInt(readlineSync.question('Type a number '));
var testStr = 'vot eto jopa';

var resultColumn =[];
var resultRow = [];
for ( var i = 1; i <= n; i++ ) {
     resultRow.push(i);
};
var bufRow = Buffer.from(resultRow);


console.log(bufRow)


/* fs.writeFileSync('row.txt',bufRow,'utf-8'); */
/* 
for ( var i = 1; i <= n; i++ ) {
    resultColumn.push(i)
};
resultColumn = resultColumn.join('\n')
console.log(resultColumn)

fs.writeFileSync('column.txt',resultColumn); */