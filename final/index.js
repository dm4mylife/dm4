var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d')

var pictures  = [];

for ( var i = 1; i <= 12; i++ ) {

    var sprite = new Image();
    sprite.src = `${i}.png`;
    pictures.push(sprite);

}
var jumpPressed = false;
var dy = 0;
 var godzilla = {

    frame_id : 0,
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
   
    ctx.drawImage(pictures[frame_id],5,godzilla.y_pos,40,60);
    
    godzilla.time +=30;
    

    if ( jumpPressed ) {

        jump();

    };

    function jump() {
        
        godzilla.y_pos += dy;
    
        if ( godzilla.y_pos > 5 ) {
    
            dy -= 1;
    
        } else {
    
             dy += 1;

        if( dy === 0 ) {

            godzilla.y_pos = 80;
            jumpPressed = false;

        }
             
    
         }
    };

}

var timer; 
           
        
    document.onclick = function () { 

        timer = setInterval(moveGodzilla, 20); 
        console.log('Run');

    };

    document.oncontextmenu = function (event) {
        
            clearInterval(timer);
            return false;
    }

    var dy = 0; 

    document.onkeydown = function (event) {
    console.log(event)

    if ( event.keyCode === 38 ) {

            console.log('Pressed jump');
            jumpPressed = true;
            

    }
            
        
};
        
