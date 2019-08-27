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





            var midPointGodX = Math.floor((godzilla.x_pos + (godzilla.x_pos+40)-1) / 2);
            var midPointGodY = (godzilla.y_pos + (godzilla.y_pos+60)) / 2;
            var midPointBlackX = Math.floor(x + (x + 10) / 2);
            var midPointBlackY = y + (y + 40) / 2;
            console.log(`${midPointBlackX}:${midPointBlackY}---black\n${midPointGodX}:${midPointBlackY}---godzilla`)
            if ( midPointGodX === midPointBlackX && midPointGodY === midPointBlackY ) {
        
                console.log("BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM");
                clearInterval(timer);
                clearInterval(black);
                
            }
        
};

var timer = null;
var black = null;
var black1 = null;
           
        
    document.onclick = function () { 

        if (timer != null) {

            clearInterval(timer);
        };

        timer = setInterval(moveGodzilla, 20);
        black = setInterval(obstacle, 20);
            
    
       

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


var x = 320;
var y = 100;
function obstacle() {
    
    if ( x < -10 ) {
        
        x = 320;
    
    };
    
    ctx.fillRect(x,y,10,40);
    x--;
    
    score.value = x
};
var x_1 = 320;
/* function obstacle1() {
    
    
    if ( x_1 < -10 ) {
        
        x_1 = 320;
    

    };
    

    ctx.fillRect(x_1,y,10,40);
    x_1--;
   
   
}; */



function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}


