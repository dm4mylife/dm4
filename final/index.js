window.onload = function () {

    if ( localStorage.getItem('score') !== null ) {

        var local = localStorage.getItem('score');
           
    } else {
        
        var local = undefined;
       
    };
   
     
};
setTimeout(function () {
    
    var canvas = document.getElementById('canvas');
     
    var ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 250;
 
    ctx.fillStyle = 'grey';
    ctx.font = "25px ebit"
    ctx.fillText('Press Enter to start game',canvas.width / 2 - 200,canvas.height / 2);
    
        

},10)

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 250;

ctx.fillStyle = 'grey';
ctx.font = "25px ebit"
ctx.fillText('Press Enter to start game',canvas.width / 2 - 150,canvas.height / 2);
        

var pictures  = [];
var picturesJump = [];
var picturesDuck = [];
var picturesOthers = [];
var backgrounds = [];
var obstacles = [];

/* ctx.mozImageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;
ctx.msImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false; */

for ( var i = 1; i <= 2; i++ ) {

    var sprite = new Image();
    sprite.src = `./pics/run${i}.png`;
    pictures.push(sprite);

};

for ( var i = 1; i <= 2; i++ ) {

    var sprite = new Image();
    sprite.src = `./pics/duck${i}.png`;
    picturesDuck.push(sprite);

};

    var sprite = new Image();
    sprite.src = `./pics/jump.png`;
    picturesJump.push(sprite);

for ( var i = 1; i <= 2; i++ ) {

    var bgr = new Image();
    bgr.src = `./pics/town${i}.png`;
    backgrounds.push(bgr);

}

var tank = new Image();
tank.src = './pics/tank.png'
obstacles.push(tank);
var dead = new Image()
dead.src = "./pics/dead.png"
picturesOthers.push(dead)
var drone = new Image('./pics/drone.png');
drone.src = './pics/drone.png'
obstacles.push(drone);

var failSound = new Audio('./sounds/fail.mp3');
var moneySound = new Audio('./sounds/money.mp3');
var jumpSound = new Audio('./sounds/jump.mp3');

var onGround = false;
var jumpPressed = false;
var endGameTablo = false;
var duck = false;
var restart = false;
var refresh = false;
var currentCount = 0;

var dy = 0;
var frame_id = 0;
var timer = null;
var scoreCount = 0;
var gameTime = 0;

var tank = {

    x_pos : 900,   
    y_pos : 214

};

var drone = {

    x_pos : 1150,
    y_pos : 160
};

var godzilla = {

    x_pos : 20,
    y_pos : 200,
    time : 0,
    duck_y_pos : 193,
    width : 60,
    height : 70

};

var scoreInfo = {

    black_count : 0,
    white_count : 0,
    blink_count : 0,
    blink_repeat: 0,
    flag : false

};

var backgroundsInfo = {

    x_pos: 1000,
    y_pos: 50,
}

function updateGame() {
    

    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    ctx.drawImage(backgrounds[0],backgroundsInfo.x_pos,backgroundsInfo.y_pos,600,90);
    backgroundsInfo.x_pos-=1;
    /* ctx.fillStyle = 'grey' */
    /* ctx.fillRect(0,0,canvas.width,canvas.height) */
    if ( Math.floor(scoreCount) % 100 === 0 && Math.floor(scoreCount) !== 0  ) {

        gameTime-=0.2;
        console.log(gameTime)
    }


    if (!endGameTablo) {
        
        var zeroCount = '00000';
        ctx.font = '15px ebit';

        if ( scoreCount >= 9 && scoreCount < 100 ) {
            
            zeroCount = '0000';
            

        } else if ( scoreCount > 100 && scoreCount < 999 ) {
            
            zeroCount = '000';
            
        } else if ( scoreCount > 1000 && scoreCount < 9999) {

            zeroCount = '00';
        };

        scoreCount += 0.2;
            
        if ( Math.floor(scoreCount) % 100 === 0 && Math.floor(scoreCount) !== 0 ) {

                    scoreInfo.flag = true; 
                    moneySound.volume = 0.4;
                    /* moneySound.play(); */
                    currentCount = scoreCount;
                    
        };

        if ( scoreInfo.flag === true ) {

            if ( scoreInfo.blink_repeat < 4 ) {

                if ( scoreInfo.blink_count < 7 ) {

                    if ( scoreInfo.white_count < 5 ) {

                        ctx.clearRect(750,20,22,15); 
                        ctx.fillStyle = 'white';
                        ctx.fillText(`${zeroCount}${Math.floor(scoreCount)}`,730,25);
                        scoreInfo.white_count++;
                
                    } else {
                
                        if ( scoreInfo.black_count < 30 ) {
                            
                            ctx.clearRect(750,20,22,15); 
                            ctx.fillStyle = 'black';
                            ctx.fillText(`${zeroCount}${Math.floor(currentCount)}`,730,25);
                            scoreInfo.black_count++;
                
                        } else if ( scoreInfo.blink_count < 7 ) {
                
                            scoreInfo.blink_count++;
                            
                        };
                
                    };

                } else {
                    
                    scoreInfo.black_count = 0;
                    scoreInfo.white_count = 0;
                    scoreInfo.blink_count = 0;
                    scoreInfo.blink_repeat++;

                };
            
            } else {

                    scoreInfo.flag = false;
                    scoreInfo.blink_repeat = 0;
            }


        } else {

            ctx.clearRect(750,20,22,15);
            ctx.fillStyle = 'black';
            ctx.fillText(`${zeroCount}${Math.floor(scoreCount)}`,730,25);
            scoreInfo.black_count++;

        };

        if ( localStorage.getItem('score') !== null) {

            var local = localStorage.getItem('score');
            ctx.fillStyle = 'grey';
            ctx.fillText(`HI ${Math.floor(local)}`,655,25);

        };
    };


    

        if ( godzilla.time > 1000) {

                godzilla.time = 0;
                time = 0;
                
        };

        frame_id = Math.floor(godzilla.time / 1000 * pictures.length);

        if ( jumpPressed ) {
            
           
            ctx.drawImage(picturesJump[0],godzilla.x_pos,godzilla.y_pos,godzilla.width,godzilla.height);
           
        } else if ( duck ) {

            godzilla.width = 80;
            godzilla.height = 50;

            ctx.drawImage(picturesDuck[frame_id],godzilla.x_pos,godzilla.duck_y_pos,godzilla.width,godzilla.height);
            
            godzilla.time += 140;
            
        } else {
                
            ctx.drawImage(pictures[frame_id],godzilla.x_pos,godzilla.y_pos,godzilla.width,godzilla.height);
              
            godzilla.time += 140;

        };

        

    godzilla.y_pos = godzilla.y_pos + dy;
        
    if ( godzilla.y_pos < 175 ) {

        dy += 1;   

    } else {

        jumpPressed = false;
        
        onGround = true; 

        godzilla.y_pos = 175;
        godzilla.duck_y_pos = 193;


    };

    if ( duck && onGround ) {

        var godzilla_width_half = 40;
        var godzilla_height_half = 25;

        var godzilla_x = godzilla.x_pos;
        var godzilla_x1 = godzilla.x_pos + godzilla_width_half;
        var godzilla_y = godzilla.duck_y_pos;
        var godzilla_y1 = godzilla.duck_y_pos + godzilla_height_half;
 

    } else {

        var godzilla_width_half = 30;
        var godzilla_height_half = 35;

        var godzilla_x = godzilla.x_pos;
        var godzilla_x1 = godzilla.x_pos + godzilla_width_half;
        var godzilla_y = godzilla.y_pos;
        var godzilla_y1 = godzilla.y_pos + godzilla_height_half;
    
    }
    
    var tank_width_half = 35;
    var tank_height_half  = 15;
    var tank_x = tank.x_pos;
    var tank_x1 = tank.x_pos + tank_width_half;
    var tank_y = tank.y_pos;
    var tank_y1 = tank.y_pos - tank_height_half;

    var drone_width_half = 35;
    var drone_height_half  = 20;
    var drone_x = drone.x_pos;
    var drone_x1 = drone.x_pos + drone_width_half;
    var drone_y = drone.y_pos;
    var drone_y1 = drone.y_pos + drone_height_half;

    if  ( ( ( godzilla_x < tank_x && godzilla_x1 > tank_x ||
        godzilla_x < tank_x1 &&  godzilla_x1 > tank_x1 ||
        tank_x < godzilla_x && tank_x1 > godzilla_x ||
        tank_x < godzilla_x1 && tank_x1 > godzilla_x1 ) &&

    ( godzilla_y < tank_y && godzilla_y1 > tank_y ||
        godzilla_y < tank_y1 &&  godzilla_y1 > tank_y1 ||
        tank_y < godzilla_y && tank_y1 > godzilla_y ||
        tank_y < godzilla_y1 && tank_y1 > godzilla_y1 )  ) ||
    
    ( ( godzilla_x < drone_x && godzilla_x1 > drone_x ||
        godzilla_x < drone_x1 &&  godzilla_x1 > drone_x1 ||
        drone_x < godzilla_x && drone_x1 > godzilla_x ||
        drone_x < godzilla_x1 && drone_x1 > godzilla_x1 ) &&

    ( godzilla_y < drone_y && godzilla_y1 > drone_y ||
        godzilla_y < drone_y1 &&  godzilla_y1 > drone_y1 ||
        drone_y < godzilla_y && drone_y1 > godzilla_y ||
        drone_y < godzilla_y1 && drone_y1 > godzilla_y1 ) ) ) {

        failSound.volume = 0.4;
        failSound.play();
        gameOver();
        endGameTablo = true;
        
    };
 
              
    if ( tank.x_pos < -50 ) {
                        
        tank.x_pos = Math.floor(getRandom(1,6) * 15 + 800);
       
                        
    };
                             
    ctx.drawImage(obstacles[0],tank.x_pos,tank.y_pos,70,30);
    
    tank.x_pos -= 5;
    tank.x_pos += gameTime;           
      console.log(tank.x_pos)        

    if ( drone.x_pos < -50 ) {
                        
        drone.x_pos = Math.floor(getRandom(1,6) * 1050);
                      
    };

    ctx.drawImage(obstacles[1],drone.x_pos,drone.y_pos,70,40);        
    
    drone.x_pos -= 5;
    drone.x_pos += gameTime;
     

};

document.onkeydown = function (event) {
    
    if ( event.keyCode === 38 && onGround) {

        onGround = false;
        jumpPressed = true;
        dy = -13;
        jumpSound.volume = 0.3;
        jumpSound.play();

    } else if ( event.keyCode === 13 ) {
            
            if (restart) {

                if (refresh) {

                    
                    endGameTablo = false;
                    
                    dy = 0;
                    gameTime = 0;
                    tank.x_pos = 900;   
                    tank.y_pos = 214;
                    drone.x_pos = 1150;
                    drone.y_pos = 160;
                    scoreCount = 0;
                    
                    timer = setInterval(updateGame, 20);
                    refresh = false;
                        
                } 

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

        godzilla.width = 60;
        godzilla.height = 70;
        duck = false;

        };
};
function getRandom(min, max) {

  return Math.random() * (max - min) + min;

};
function gameOver() {
  
    if ( scoreCount > localStorage.getItem('score') ) {
        
        localStorage.setItem('score',`${scoreCount}`);

    };

    clearInterval(timer);
    ctx.clearRect(650,0,150,40);
    
    ctx.font = "12px ebit";
    ctx.fillText(`YOUR SCORE ${Math.floor(scoreCount)}`,95,65);

    ctx.fillStyle = 'black';
    ctx.font = "30px ebit";
    ctx.fillText(`GAME OVER` ,55,50);

    ctx.fillStyle = 'grey';
    ctx.font = "9px ebit";
    ctx.textAlign = 'center'
    ctx.fillText(`press Enter to restart game` ,710,240);

    
    
    refresh = true;

};
