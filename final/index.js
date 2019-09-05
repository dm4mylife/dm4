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
    sprite.src = `./pics/${i}.png`;
    pictures.push(sprite);

}
for ( var i = 1; i <= 9; i++ ) {

    var sprite = new Image();
    sprite.src = `./pics/jump${i}.png`;
    picturesJump.push(sprite);

};
/* for ( var i = 1; i <= 12; i++ ) {

    var bgr = new Image();
    bgr.src = `${i}.png`;
    bgr.push(bgr);

} */
var tank = new Image();
tank.src = './pics/tank.png'
obstacles.push(tank);
var dead = new Image()
dead.src = "./pics/dead.png"
picturesOthers.push(dead)
var duckPic = new Image();
duckPic.src = './pics/duck.png';
picturesOthers.push(duckPic);
var drone = new Image();
drone.src = './pics/drone.png'
obstacles.push(drone);

var onGround = false;
var jumpPressed = false;
var falling = false;
var endGameTablo = false;
var duck = false;
var restart = false;
var refresh = false;

var dy = 0;
frame_id = 0;

var tank = {

    x_pos : 320,   
    y_pos : 100,

};
var drone = {

    x_pos : 600,
    y_pos : 75,

};
var godzilla = {

    x_pos : 10,
    y_pos : 80,
    time : 0,
    duck_y_pos : 103

    };

function startLogo() {

        console.log('logo started')
        
        ctx.font = "25px bit";
        ctx.textAlign = 'center';
        ctx.fillText('Press Enter to start game',150,80);
    
    };
    startLogo();

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

            ctx.drawImage(picturesOthers[1],godzilla.x_pos,godzilla.duck_y_pos,60,36);

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


        };

        console.log(godzilla.y_pos)

     
    var godzilla_width_half = 20;
    var godzilla_height_half = 30;

    if ( duck && onGround) {

         godzilla_width_half = 30;
         godzilla_height_half = 18;

    };

    console.log(godzilla_width_half,godzilla_height_half)

    var godzilla_x = godzilla.x_pos;
    var godzilla_x1 = godzilla.x_pos + godzilla_width_half;
    
    var godzilla_y = godzilla.y_pos;
    var godzilla_y1 = godzilla.y_pos + godzilla_height_half;

    if ( duck && onGround ) {

        godzilla_y = godzilla.duck_y_pos;
        godzilla_y1 = godzilla.y_pos - godzilla_height_half;

    };
    
    var tank_width_half = 10;
    var tank_height_half  = 30;
    var tank_x = tank.x_pos;
    var tank_x1 = tank.x_pos + tank_width_half;
    var tank_y = tank.y_pos;
    var tank_y1 = tank.y_pos + tank_height_half;

    var drone_width_half = 12;
    var drone_height_half  = 12;
    var drone_x = drone.x_pos;
    var drone_x1 = drone.x_pos + drone_width_half;
    var drone_y = drone.y_pos;
    var drone_y1 = drone.y_pos + drone_height_half;

        
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

            ctx.strokeStyle = 'red';
            ctx.strokeRect(drone_x,drone_y,24,24)
            ctx.stroke()
            ctx.strokeStyle = 'grey';
            ctx.strokeRect(godzilla_x,godzilla_y,godzilla_x1,godzilla_y1)
            ctx.stroke()
            ctx.strokeStyle = 'green';
            ctx.strokeRect(tank_x,tank_y,50,35)
            ctx.stroke()

            gameOver();
            endGameTablo = true;
            
        };
            
 
                for ( let i = 0; i < 4; i++ ) {

                    if ( tank.x_pos < -50 ) {
                                        
                        tank.x_pos = Math.floor(getRandom(2,5) * 250);
                        console.log(`ground object appears at ${tank.x_pos} distance'`)
                                        
                    };
                
                
                ctx.drawImage(obstacles[0],tank.x_pos,105,50,35)
                
                
                tank.x_pos -= 1.5;
                

                };

                for ( let i = 0; i < 3; i++ ) {

                    if ( drone.x_pos < -50 ) {
                                        
                        drone.x_pos = Math.floor(getRandom(2,5) * 350);
                        console.log(`fly object appears at ${drone.x_pos} distance'`)
                                        
                    };

                    ctx.drawImage(obstacles[1],drone_x,drone_y,24,24)
                    drone.x_pos -= 1.5;

                    /* console.log(`${drone_x1}:${drone_y1}---drone\n${tank_x1}:${tank_y1}---tank
                    ${godzilla_x1}:${godzilla_y1}---godzilla`); */
                };
                
                
                

};

var timer = null;


var scoreCount = 0;
var pressedRestart = 0;

    document.onkeydown = function (event) {
    
    if ( event.keyCode === 38 && onGround) {

            onGround = false;
            jumpPressed = true;
            dy = -11;

    } else if ( event.keyCode === 13 ) {

        console.log('enter pressed');
       
            
            if (restart) {

                console.log(refresh+' refresh')

                if (refresh) { 

                    console.log('work refresh')
                    dy = 0;
                    tank.x_pos = 320;   
                    tank.y_pos = 100;
                    drone.x_pos = 600;
                    drone.y_pos = 75;
        
                    timer = setInterval(updateGame, 20);
                    refresh = false;
                    
                } 
                console.log('empty enter')

            } else {

                    timer = setInterval(updateGame, 20);
                    restart = true;

            };

            

             
     
            
            
            

       

    } else if  ( event.keyCode === 40) {

        duck = true;
        
    };
            
};
document.onkeyup = function (event) {

    if  ( event.keyCode === 40) {

        console.log('duck');
        
        duck = false;

        };
};

function getRandom(min, max) {

  return Math.random() * (max - min) + min;

};
function gameOver() {

    ctx.clearRect(200,5,100,30)
    ctx.font = "12px bit";
    ctx.fillText(`YOUR SCORE ${Math.floor(scoreCount)}`,185,100);

    ctx.fillStyle = 'black';
    ctx.font = "30px bit";
    ctx.textAlign = 'center'
    ctx.fillText(`GAME OVER` ,150,80);

    ctx.fillStyle = 'grey';
    ctx.font = "9px bit";
    ctx.textAlign = 'center'
    ctx.fillText(`press Space to restart game` ,220,140);

    clearInterval(timer);

    refresh = true;


    /* ctx.drawImage(picturesOthers[0],godzilla.x_pos,godzilla.y_pos,55,35); */

};
console.log(document.cookie+" pe4enki")

