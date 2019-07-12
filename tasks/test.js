var fs = require('fs');

var obj = {nick: 1,margo: 2,fedya: 3};


function obj2str(obj) {

  var result = '';
  for (var key in obj) {
    result += key + ' ' + obj[key] + '\n';
    console.log(result) 
  }
  
  console.log(result);
  return result;
};


function str2obj(str) {

  console.log(str)
  str = str.split(RegExp(' |\n'));

  var obj = {};
  
  for ( var i = 0; i < str.length-1; i+=2 ) {
    
      var element = str[i];
      var count = +str[i+1];
      obj[element] = count;
      
  };
  console.log(obj)
  return obj;
};

var convstr = obj2str(obj);
var convobj = str2obj(convstr);
