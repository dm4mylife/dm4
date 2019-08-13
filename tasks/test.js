var test1 = {

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

/* listStudents = json5.stringify(listStudents) */
/* 
function writeStream() {

var wstream = fs.createWriteStream('students_list.bin');


writeInt(listStudents.length)

function writeInt(value) {
var buffer = Buffer.alloc(4);
buffer.writeInt32BE(value);
wstream.write(buffer);
};
function writeStr(value) {
var buffer = Buffer.alloc(4);
buffer.write(value);
wstream.write(buffer)
};

for ( let i = 0; i < listStudents.length; i++ ) {

writeInt(listStudents[i].name.length);
writeStr(listStudents[i]['name'])
writeInt(listStudents[i]['group'])
writeInt(Object.keys(listStudents[i].marks).length)

var count = 0;

for ( var key in listStudents[i].marks) {

    count++;
    
};

writeInt(count);

for (var key in listStudents[i].marks) {

    writeStr(key);
    writeInt(listStudents[i].marks['key']);

}

};
wstream.end(function () {
    console.log('done');
});

};
writeStream(listStudents) */

function readStream() {

var fsExt = require('./fsExt');
 
var rstreamSync = fsExt.createReadStream('students_list.bin');
 

var buf = rstreamSync.read(4);
var result = '';
var i = 3;
while (buf != null) {
    console.log(buf);
    buf = rstreamSync.read(4);
    result += buf.readInt8(i)
    console.log(result)
    
}
 
rstreamSync.close();
};
readStream();


/* function writeStream(listStudents) {

    listStudents = json5.stringify(listStudents);
    var buffer = Buffer.from(listStudents);
    var wstream = fs.createWriteStream('students_list.txt');
    wstream.write(buffer);
    wstream.end();

}; */