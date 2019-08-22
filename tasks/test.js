/* var test1 = {

    name : "1Ivanov I2van",
    group : 234,
    marks : { 
        math: 2,
        english: 4,
        science: 3,
        biology: 4,
        geogpraphy: 3,
        politology: 4
    }

}

var test2 = {

    name : "Petrov Ivan",
    group : 134,
    marks : { 
        math: 2,
        english: 3,
        science: 2,
        biology: 2,
        geogpraphy: 2,
        politology: 3
    }
    
};
var test3 = {

    name : "Crasnov Ivan",
    group : 334,
    marks : { 
        math: 3,
        english: 2,
        science: 5,
        biology: 4,
        geogpraphy: 3,
        politology: 4
    }
    
};
var json5 = require('json5')
var fs = require('fs')
var listStudents = [];
listStudents.push(test1,test2,test3);

 
function writeStream() {

    var wstream = fs.createWriteStream('students_list.bin');

    function writeInt(value) {
        var buffer = Buffer.alloc(4);
        buffer.writeInt32BE(value);
        console.log(buffer)
        wstream.write(buffer);
    };
    
    function writeStr(value) {
        wstream.write(value);
    };

    writeInt(listStudents.length);

    for ( let i = 0; i < listStudents.length; i++ ) {

        console.log(listStudents[i].name.length)
        writeInt(listStudents[i].name.length);
        console.log(listStudents[i]['name'])
        writeStr(listStudents[i]['name'])
        console.log(listStudents[i]['group'])
        writeInt(listStudents[i]['group'])
        console.log(Object.keys(listStudents[i].marks).length)
        writeInt(Object.keys(listStudents[i].marks).length)

        var count = 0;

        for ( var key in listStudents[i].marks) {

            count++;
        
        };

        console.log(count)
        writeInt(count);

        for (var key in listStudents[i].marks) {

            console.log(key);
            writeStr(key);
            console.log(listStudents[i].marks[key])
            writeInt(listStudents[i].marks[key]);

        };

    };

    wstream.end(function () {
    console.log('done');
});

};
writeStream(listStudents) 
 */


 function readStream() {

var fsExt = require('./fsExt');
 
var rstreamSync = fsExt.createReadStream('students_list.bin');

var result = ' ';


function readInt(value) {

    var buffer = rstreamSync.read(4);
    console.log(buffer);
    result += buffer;
    console.log(result);

};


rstreamSync.read(4);

 var buf = rstreamSync.read(4);
 buf = rstreamSync.read(4);

 while ( buf != null ) {

    readInt();

 };
 
/* for ( let i = 0; i < listStudents.length; i++ ) {

writeInt(listStudents[i].name.length);
writeStr(listStudents[i]['name']);
writeInt(listStudents[i]['group']);
writeInt(Object.keys(listStudents[i].marks).length);

var count = 0;

for ( var key in listStudents[i].marks) {

    count++;
    
};

writeInt(count);

for (var key in listStudents[i].marks) {

    writeStr(key);
    writeInt(listStudents[i].marks['key']);

};

};
*/
 
rstreamSync.close();
};
readStream(); 
 