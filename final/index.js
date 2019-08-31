var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d')
var score = document.getElementById('score');
var pictures  = [];
var randomTimer = Math.floor(getRandom(2,6)) * 1000;

for ( var i = 1; i <= 12; i++ ) {

    var sprite = new Image();
    sprite.src = `${i}.png`;
    pictures.push(sprite);

}
var onGround = false;

var dy = 0;
var x = 320;   
var y = 100;

 var godzilla = {

    x_pos : 5,
    y_pos : 80,
    time : 0

    };

frame_id = 0;

function moveGodzilla() {

    ctx.clearRect(0,0,canvas.width,canvas.height);

    if ( godzilla.time > 1000) {

            godzilla.time = 0;
            time = 0;
            
        }

    frame_id = Math.floor(godzilla.time / 1000 * pictures.length);
   
    ctx.drawImage(pictures[frame_id],godzilla.x_pos,godzilla.y_pos,40,60);
    
    godzilla.time +=30;
    
        
        godzilla.y_pos = godzilla.y_pos + dy;
        
        if ( godzilla.y_pos < 80 ) {
    
            dy += 1;
    
        } else {

            onGround = true;
            godzilla.y_pos =  80;
            //dy = 0;

         };
            var godzilla_width_half = 20;
            var godzilla_height_half = 30;
            var black_width_half = 10;
            var black_height_half  = 30;

            var godzilla_x = godzilla.x_pos;
            var godzilla_x1 = godzilla.x_pos + godzilla_width_half;
            var square_x = x;
            var square_x1 = x + black_width_half;
            var godzilla_y = godzilla.y_pos;
            var godzilla_y = godzilla.y_pos + 
            
            

            if ( godzilla_x > square_x && godzilla_x < square_x1 ||
                godzilla_x1 > square_x &&  godzilla_x1 < square_x1 ||
                square_x > godzilla_x && square_x < godzilla_x1 ||
                square_x1 > godzilla_x && square_x1 < godzilla_x1 ) {
        
                console.log("BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM");
                clearInterval(timer);
                
            };

            

            if ( x < -10 ) {
                
                x = 320;
            
            };
            
            ctx.fillRect(x,y,10,40);
            x-=6;
            
            score.value = x

};

var timer = null;
var black = null;
var black1 = null;
        
    document.onclick = function () { 

        if (timer != null) {

            clearInterval(timer);
        };

        timer = setInterval(moveGodzilla, 20);
      
              
    };

    var stop = document.oncontextmenu = function (event) {
        
            clearInterval(timer);

            return false;
    };

    document.onkeydown = function (event) {
    
    if ( event.keyCode === 38 && onGround) {

            onGround = false;
            dy = -11;

    };
            
};


function getRandom(min, max) {

  return Math.random() * (max - min) + min;

};
