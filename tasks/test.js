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
        wstream.write(buffer);
    };
    
    function writeStr(value) {
        wstream.write(value);
    };

    writeInt(listStudents.length);

    for ( let i = 0; i < listStudents.length; i++ ) {

        writeInt(listStudents[i].name.length);
        writeStr(listStudents[i]['name'])
        writeInt(listStudents[i]['group'])
        writeInt(Object.keys(listStudents[i].marks).length)

        for (var key in listStudents[i].marks) {

            writeInt(key.length);
            writeStr(key);
            writeInt(listStudents[i].marks[key]);

        };

    };

    wstream.end(function () {
    console.log('done');
});

};



function readStream() {

    var fsExt = require('./fsExt');
     
    var rstreamSync = fsExt.createReadStream('students_list.bin');
    
    var listStudents= [];
    
    var countStudents = readInt();
    
    console.log(countStudents)
    
        for ( var i = 0; i < countStudents; i++ ) {
        
            var nameLength = readInt();
            console.log(nameLength);
            var name = readStr(nameLength);
            console.log(name);
            var obj = {};
            obj.name = name;
            var group = readInt();
            obj.group = group;
            console.log(obj);
            let count = readInt();
            console.log(count);
            var marksObj = {};

                for ( let k = 0; k < count; k++ ) {

                    
                    var subjectLength = readInt();
                   
                    let nameSubject = readStr(subjectLength);
                   
                    var mark = readInt();
                    
                    marksObj[nameSubject] = mark;
                    
                    
            
                };

                    
                    obj.marks = marksObj;
                    
                    listStudents[i] = obj;
                    console.log(listStudents[i]);
    
    };
    
    function readInt() {
     
        var buffer = rstreamSync.read(4);
        var value = buffer.readInt32BE();
        return value;
    
    };
    
    function readStr(value) {
    
        var buffer = rstreamSync.read(value);
        var value = buffer.toString('utf8',buffer);
        return value;
            
    };
    

    rstreamSync.close();
    console.log(listStudents);
};
    readStream(); */
/*  var arr = []
 console.log(arr.length); */
/*  
function bufferWrite() {

    var buffer = Buffer.alloc(4);
 let count = 0;
    for ( var key in players ) {

count++;
        
    }
buffer.writeInt32BE(count);
console.log(buffer);



} */
/* function generate(n) {
    var factors = [2,-1,0.5,-1];
    var result = [];
    var m=n;
    for (var i = 0; i < n; i++ ) {
        m = m * factors[i%4];
        result.push(m)
        console.log(m)
    }
    console.log(result)
    return result;
    
}
generate(20) */
if (getRandom(0,1) > 0.5) {
    console.log('true')
} else {
    console.log('false')
};
function getRandom(min, max) {

    return Math.random() * (max - min) + min;
  
  };