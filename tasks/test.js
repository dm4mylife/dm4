
/* var arr = [258,32,113,42,5,]
var abc = [2,3,4,5,6]



var buffTest = Buffer.alloc(8)
console.log(buffTest)
var offset = buffTest.writeInt8(Object.keys(obj).length);
 offset = buffTest.writeInt8(obj.key)
console.log(buffTest) */
/* 
var fs = require('fs');
var obj = {
  alex: 1,
  nick: 3
};

function writeScore2Buffer(obj) {

var bufferSize=0;

  for ( var key in obj ) {

    bufferSize += key.length+2;

  };
  
  var buffer = Buffer.alloc(bufferSize+1);
  var offset = buffer.writeInt8(Object.keys(obj).length);
  var offsetStr;
for ( var key in obj) {

    
    offset = buffer.writeInt8(key.length,offset);
    offset += buffer.write(key,offset);
    offset = buffer.writeInt8(obj[key],offset);
    offsetStr = key;
  
};

return buffer;
}; */
/* var arr = [1, 44,33,12,765,33,22]
var str = ' eto prosto jest'
var bufArr = Buffer.from(str)
var read = bufArr.toString('utf8',2,4)
var read2 = bufArr.toString('utf8',4,10)
console.log(read,read2) */
/* 
var bufferRead = writeScore2Buffer(obj)

function readBuffer() {

var count = bufferRead.readInt8(0)

var l = bufferRead.readInt8(1)
bufferRead.toString('utf8',2,2+l)
bufferRead.readInt8(2+l)


}
readBuffer(bufferRead); */

 var marksArr = [1,2,3,4,5];
var testArr = [];
var obj = {

  name: 'Ivan',
  group: 345,
  marks : marksArr

};
console.log('\n');
testArr.push(obj)
testArr.push(obj)


console.log(testArr[0].marks[0])
/* var listStudents = [];
var obj = {

  name: 'Ivan',
  group: 345,
  marks : [1,2,3,4,5]

};

listStudents.push(obj)

console.log(listStudents)

function exc(listStudents) {

  var excList = [];

  console.log(listStudents);

  for ( var i = 0; i < listStudents[i].marks.length; i++ ) {

      var count = 0;

      if ( listStudents[i].marks.[i] === 5 ) {

      count++;

      } else {
      
      break;

      };
  };
  console.log(listStudents[0].length*5);

  if ( count === listStudents[0].length*5 ) {

    excList.push(student);

    console.log(excList);

    return excList;

  };

  return excList;

};

exc(listStudents); */
var fs = require('fs');
var JSON5 = require('json5');

var obj = {
  nick : 1,
   margo: 3,
  sanches: 2,
  dan: 1,
  igor: 4,
  karl: 1
};

/* function writeBuff(obj) {

  
  var count = 1;

    for (var key in obj ) {
      console.log(key + key.length)
      count = count + key.length + 2;
    }

  var buffer = Buffer.alloc(count)
  var offset = buffer.writeInt8(Object.keys(obj).length);
  
  for (var key in obj) {
    
    offset = buffer.writeInt8(key.length,offset);
    buffer.write(key,offset);
    offset = buffer.writeInt8(obj[key],offset+key.length)

  };
  fs.writeFileSync('Buffer.txt',buffer);
   

}; */


function readBuffer() {

  var readFile = fs.readFileSync('Buffer.txt','binary');
  var buffer = Buffer.from(readFile);
  var maxPlayers = buffer.readInt8();
  console.log(buffer)
  
  var result = '';
  var offset = 2;
  var empty = 1;

  for (var i = 1; i <= maxPlayers; i++) {

    var count = buffer.readInt8(empty);
    var playerName = buffer.toString('utf8',offset,offset+count);
    result += playerName;
    var score = buffer.readInt8(playerName.length+offset);
    
    if ( i === maxPlayers ) {
      result +=": "+score; 
    } else {
      result +=": "+score+',';
    }

    offset += 2 + playerName.length; 
    empty = offset-1;
    
   
  };

  result = `{ ${result} }`;
  result = JSON5.parse(result);
  console.log(result);
  return result;
};
readBuffer()
