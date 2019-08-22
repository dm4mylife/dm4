var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d')

var pictures  = [];

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
   
    ctx.drawImage(pictures[frame_id],5,godzilla.y_pos,40,60);
    
    godzilla.time +=30;
    
        
        godzilla.y_pos = godzilla.y_pos + dy;
        console.log(godzilla.y_pos + ' ' + dy);
        if ( godzilla.y_pos < 80 ) {
    
            dy += 1;
    
        } else {

            onGround = true;
            godzilla.y_pos =  80;
            //dy = 0;

         };
};

var timer = null; 
           
        
    document.onclick = function () { 

        if (timer != null) {

            clearInterval(timer);
        };

        timer = setInterval(moveGodzilla, 20); 
        

    };

    document.oncontextmenu = function (event) {
        
            clearInterval(timer);
            return false;
    };

    document.onkeydown = function (event) {
    

    if ( event.keyCode === 38 && onGround) {

            onGround = false;
            dy = -9;

    };
            
        
};
        
