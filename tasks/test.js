

var n = 1;

var kkk = 1000000000
var kk = 1000000
var k = 1000;
var clone = n;

if ( ( clone / kkk ) > 0 ) {
    
  sepNum = Math.floor( n / kkk );
  process.stdout.write(arr0[sepNum]+arr3[3]+' and ');
  n = Math.floor( n / k ) % k ;
  clone = Math.floor( n / 1000 );
  

} else if ( ( clone / kk ) > 0) {

  process.stdout.write(arr3[2]+' and ');
  n = Math.floor( n / k ) % k ;
  clone = Math.floor( n / 1000 );
  i = i +1;

} else if ( ( clone / k ) > 0 ) {

  process.stdout.write(arr3[1]+' and ');
  n = Math.floor( n / k ) % k ;
  clone = Math.floor( n / 1000 )
  i = i + 2;

} else {

    i = i + 4;

};
console.log(n)
  