var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d')

var pictures  = [];
var picturesJump = [];
var picturesOthers = [];
var backgrounds = [];
var obstacles = [];

var randomTimer = Math.floor(getRandom(2,6)) * 1000;

for ( var i = 1; i <= 12; i++ ) {

    var sprite = new Image();
    sprite.src = `${i}.png`;
    pictures.push(sprite);

}
for ( var i = 1; i <= 9; i++ ) {

    var sprite = new Image();
    sprite.src = `jump${i}.png`;
    picturesJump.push(sprite);

};
/* for ( var i = 1; i <= 12; i++ ) {

    var bgr = new Image();
    bgr.src = `${i}.png`;
    bgr.push(bgr);

} */
var tank = new Image();
tank.src = 'tank.png'
obstacles.push(tank);
var dead = new Image()
dead.src = "dead.png"
picturesOthers.push(dead)
var duckPic = new Image();
duckPic.src = 'duck.png';
picturesOthers.push(duckPic);
var drone = new Image();
drone.src = 'drone.png'
obstacles.push(drone);

var onGround = false;
var jumpPressed = false;
var falling = false;
var endGameTablo = false;
var duck = false;
var dy = 0;
var x = 320;   
var y = 100;
var x_drone = 600;
var y_drone = 75;

 var godzilla = {

    x_pos : 10,
    y_pos : 80,
    time : 0

    };

frame_id = 0;


console.log(obstacles)
/* function startLogo() {

        console.log('logo started')
        
        ctx.font = "25px bit";
        ctx.textAlign = 'center'
        ctx.fillText('GODZILA MAYHEM',150,80);
    
    };
    startLogo(); */
console.log(picturesOthers)
function updateGame() {
    

    

    ctx.clearRect(0,0,canvas.width,canvas.height);

if (!endGameTablo) {

         if ( Math.floor(scoreCount) === 30 && Math.floor(scoreCount) !== 0 ) {
            console.log('work blinking')
           
  
           
         ctx.clearRect(250,5,100,30);
         ctx.fillStyle = 'black'
         ctx.fillText(`${Math.floor(scoreCount)}`,230,20);
          
            
         };
         
    
         scoreCount+=0.3;
         
         ctx.fillStyle = 'black';
         ctx.font = "10px bit";
         ctx.fillText(`SCORE ${Math.floor(scoreCount)}`,230,20);
         

         };




        if ( godzilla.time > 1000) {

                godzilla.time = 0;
                time = 0;
                
        };

    frame_id = Math.floor(godzilla.time / 1000 * pictures.length);

        if ( jumpPressed ) {

            frame_id = Math.floor(godzilla.time / 1000 * picturesJump.length);
            ctx.drawImage(picturesJump[frame_id],godzilla.x_pos,godzilla.y_pos,40,60);
           
            godzilla.time +=30;

        } else if ( duck ) {

            ctx.drawImage(picturesOthers[1],godzilla.x_pos,godzilla.y_pos+23,60,35);


        } else {
                
                ctx.drawImage(pictures[frame_id],godzilla.x_pos,godzilla.y_pos,40,60);
                
                godzilla.time +=30;
            };

    
    godzilla.y_pos = godzilla.y_pos + dy;
        
        if ( godzilla.y_pos < 80 ) {
    
            dy += 1;
          

        } else {

            jumpPressed = false;
            
            onGround = true; 

            godzilla.y_pos = 80;

            
            //dy = 0;

        };

   /*  
    if ( duck ) {
        
        var godzilla_height_half = 5;

    } else {

        var godzilla_width_half = 20;
        var godzilla_height_half = 30;

    } */
    var godzilla_width_half = 20;
        var godzilla_height_half = 30;
    console.log(godzilla_height_half)
    var godzilla_x = godzilla.x_pos;
    var godzilla_x1 = godzilla.x_pos + godzilla_width_half;
    
    var godzilla_y = godzilla.y_pos;
    var godzilla_y1 = godzilla.y_pos + godzilla_height_half;

    var tank_width_half = 10;
    var tank_height_half  = 30;
    var tank_x = x;
    var tank_x1 = x + tank_width_half;
    var tank_y = y;
    var tank_y1 = y + tank_height_half;

    var drone_width_half = 12;
    var drone_height_half  = 12;
    var drone_x = x_drone;
    var drone_x1 = x_drone + drone_width_half;
    var drone_y = y_drone;
    var drone_y1 = y_drone + drone_height_half;

    

        
        if  ( ( ( godzilla_x > tank_x && godzilla_x < tank_x1 ||
                godzilla_x1 > tank_x &&  godzilla_x1 < tank_x1 ||
                tank_x > godzilla_x && tank_x < godzilla_x1 ||
                tank_x1 > godzilla_x && tank_x1 < godzilla_x1 ) &&

            ( godzilla_y > tank_y && godzilla_y < tank_y1 ||
                godzilla_y1 > tank_y &&  godzilla_y1 < tank_y1 ||
                tank_y > godzilla_y && tank_y < godzilla_y1 ||
                tank_y1 > godzilla_y && tank_y1 < godzilla_y1 ) ) ||
            
            ( (godzilla_x > drone_x && godzilla_x < drone_x1 ||
                godzilla_x1 > drone_x &&  godzilla_x1 < drone_x1 ||
                drone_x > godzilla_x && drone_x < godzilla_x1 ||
                drone_x1 > godzilla_x && drone_x1 < godzilla_x1 )  &&

            ( godzilla_y > drone_y && godzilla_y < drone_y1 ||
                godzilla_y1 > drone_y &&  godzilla_y1 < drone_y1 ||
                drone_y > godzilla_y && drone_y < godzilla_y1 ||
                drone_y1 > godzilla_y && drone_y1 < godzilla_y1 ) ) ) {
    
            console.log("BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM");
            gameOver();
            endGameTablo = true;
            
        } 
            
 
 

                for ( let i = 0; i < 4; i++ ) {

                    if ( x < -50 ) {
                                        
                        x = Math.floor(getRandom(2,5) * 250);
                        console.log(`ground object appears at ${x} distance'`)
                                        
                    };
                
                
                ctx.drawImage(obstacles[0],x,105,50,35)
                
                
                x -= 1.5;
                

                };

                /* for ( let i = 0; i < 3; i++ ) {

                    if ( x_drone < -50 ) {
                                        
                        x_drone = Math.floor(getRandom(2,5) * 350);
                        console.log(`fly object appears at ${x_drone} distance'`)
                                        
                    };

                    ctx.drawImage(obstacles[1],x_drone,y_drone,24,24)
                    x_drone -= 1.5;

console.log(`${drone_x1}:${drone_y1}---drone\n${tank_x1}:${tank_y1}---tank
${godzilla_x1}:${godzilla_y1}---godzilla`);
                }; */
                
                
                

};

var timer = null;
var scoreCount = 0;

    document.onkeydown = function (event) {
    
    if ( event.keyCode === 38 && onGround) {

            onGround = false;
            jumpPressed = true;
            dy = -11;

    } else if ( event.keyCode === 32 ) {
        
        if ( timer !== null ) {

            console.log('work');

            clearInterval(timer);

        };

        timer = setInterval(updateGame, 20);

    } else if  ( event.keyCode === 40) {

        
        duck = true;
        
        };
            
};
document.onkeyup = function (event) {
    if  ( event.keyCode === 40) {

        console.log('duck');
        
        duck = false;
        };
}

function getRandom(min, max) {

  return Math.random() * (max - min) + min;

};
function gameOver() {

    ctx.clearRect(200,5,100,30)
    ctx.font = "12px bit";
    ctx.fillText(`YOUR SCORE ${Math.floor(scoreCount)}`,135,100);

    ctx.fillStyle = 'black';
    ctx.font = "30px bit";
    ctx.textAlign = 'center'
    ctx.fillText(`GAME OVER` ,150,80);
    clearInterval(timer);

    /* ctx.drawImage(picturesOthers[0],godzilla.x_pos,godzilla.y_pos,55,35); */

};


