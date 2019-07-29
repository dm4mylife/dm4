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