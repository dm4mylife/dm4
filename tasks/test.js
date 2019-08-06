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

listStudents = json5.stringify(listStudents)
console.log(listStudents)
var buffer = Buffer.from(listStudents);

console.log(buffer)
var w = fs.createWriteStream('test_stream.txt');
w.write(buffer);
w.end()

/* function writeStream(listStudents) {

    listStudents = json5.stringify(listStudents);
    var buffer = Buffer.from(listStudents);
    var wstream = fs.createWriteStream('students_list.txt');
    wstream.write(buffer);
    wstream.end();

}; */