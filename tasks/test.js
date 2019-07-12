var fs = require('fs');
var JSON5 = require('json5');
var obj = { nick: 1, margo: 2, fedya: 3 };
console.log(obj.split(RegExp(' |\n')));

  /* function conv2obj(str) {
  var obj = {};
  
  for ( var i = 0; i < str.length; i+=2 ) {

      var e = obj[i];
      var d =obj[i+1];
      obj.e = d;

  };
  
  return obj;
};
function conv2str(obj) { 

  return obj.split(RegExp(' |\n'));

};

var convertedString = conv2str(obj);
var convertedObject = conv2obj(str)  */ 