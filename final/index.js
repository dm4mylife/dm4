var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d')

var x = 0;
var fps_drop = 0;


var sprite = new Image('');
sprite.src = 'https://i.imgur.com/WYEVOiw.png';



function draw() {

    ctx.clearRect(0,0,canvas.width,canvas.height);

    if ( x === 1100 ) {
        x = 0;
    } else {
        x += 110;
    };

    ctx.drawImage(sprite,x,100,107,76,10,90,50,55)
    

};
setInterval(draw,70)