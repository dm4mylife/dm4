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
    ctx.fillText('Press Space to start game',canvas.width / 2 - 200,canvas.height / 2);
    
        

},50)

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 250;

ctx.fillStyle = 'grey';
ctx.font = "25px ebit"
ctx.fillText('Press Space to start game',canvas.width / 2 - 150,canvas.height / 2);
        

var pictures  = [];
var picturesJump = [];
var picturesDuck = [];
var picturesOthers = [];
var picturesCloud = [];
var backgrounds = [];
var obstacles = [];

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

for ( var i = 1; i <= 3; i++ ) {

    var bgr = new Image();
    bgr.src = `./pics/town${i}.png`;
    backgrounds.push(bgr);

};

var tank = new Image();
tank.src = './pics/tank.png'
obstacles.push(tank);
var path = new Image('.pics/path.png');
path.src = './pics/path.png'
picturesOthers.push(path);
var drone = new Image('.pics/drone.png');
drone.src = './pics/drone.png'
obstacles.push(drone);
var explode = new Image();
explode.src = './pics/explode.gif';



var failSound = new Audio('./sounds/fail.mp3');
var moneySound = new Audio('./sounds/money.mp3');
var jumpSound = new Audio('./sounds/jump.mp3');

var onGround = false;
var jumpPressed = false;
var endGameTablo = false;
var duck = false;
var restart = false;
var refresh = false;
var timer = null;
var launch = false;
var stopGame = false;
var choosenMode = '';

var currentCount = 0;
var pathNumber = 0;
var dy = 0;
var frame_id = 0;
var scoreCount = 0;
var gameTime = 0;
var randomTankTime = getRandom(4,10)*100;
var randomCloudAppear = getRandom(10,40);
var endBgr = 2200;
var countPath = 800; 
var secondCountPath = 1600;
var timeTownSpeed = 0;

var tank = {

    x_pos : 900,   
    y_pos : 214,
    x_rep : 900
};

var drone = {

    x_pos : 1250,
    y_pos : 150
};

var godzilla = {

    x_pos : 20,
    y_pos : 200,
    time : 0,
    duck_y_pos : 193,
    width : 60,
    height : 70,
    duck_width: 80,
    duck_height: 50,
    y_pos_size : 175
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
    path_length: 0,
    x_rep : 1000,
    cloud_x_pos : 1000,
    clod_y_pos : 40
}

var choseIconInfo = {


    x_pos: 140,
    y_pos: 190,
    x_speed: 0

};
var casualGameMod = {




};



var notPressed = false;
var choseIcon = new Image();
choseIcon.src = './pics/choseIcon.png';
var heart = new Image();
heart.src = './pics/heart.png';

var heartInfo = {

    x_pos : 800,
    y_pos : 200,
    width: 30,
    height: 30,
    
}

function choseDifficult() {

    ctx.clearRect(0,0,canvas.width,canvas.height )
    ctx.fillStyle = 'grey';
    ctx.font = "25px ebit";
    ctx.fillText('Hardcore mode',50,125);
    ctx.fillText('Casual mode',575,125);
    ctx.font = "16px ebit";
    ctx.fillStyle = 'black';
    ctx.fillText('Running for the highest score',40, 170);
    ctx.fillText('Reach 5000 to win a game ',550, 170);

    ctx.drawImage(choseIcon,choseIconInfo.x_pos,choseIconInfo.y_pos,30,30);

};

var changeSizeFlag = 0;
    
function hardcoreGame() {
    console.log("xyu")
};
    
    





function casualGame() {
    
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    if ( countPath < 0 ) {
        countPath = 800;
        secondCountPath = 1600;
    }

    ctx.drawImage(picturesOthers[0],countPath,230,100,18);
    
    var add = -100;
    for ( var i = 0; i < 8; i++ ) {

        ctx.drawImage(picturesOthers[0],countPath+add,230,100,18);
        add-=100;
        
    };
    add = -100;
    for ( var i = 0; i < 8; i++ ) {

        ctx.drawImage(picturesOthers[0],secondCountPath+add,230,100,18);
        add-=100;
        
    };

    secondCountPath-=4-gameTime;
    countPath-=4-gameTime;
        
    if ( endBgr < 0 ) {

        backgroundsInfo.x_pos = 1000;
        endBgr = 2200;
        timeTownSpeed +=0.1;
        console.log('work')
    };

    ctx.drawImage(backgrounds[pathNumber],backgroundsInfo.x_pos,backgroundsInfo.y_pos,400,90);
    ctx.drawImage(backgrounds[pathNumber+1],backgroundsInfo.x_pos+400,backgroundsInfo.y_pos,400,90);
    ctx.drawImage(backgrounds[pathNumber+2],backgroundsInfo.x_pos+800,backgroundsInfo.y_pos,400,90);
    

    
    backgroundsInfo.x_pos-= 1 + timeTownSpeed;
    endBgr -= 1+ timeTownSpeed;
    
    
    if ( Math.floor(scoreCount) % 50 === 0 && Math.floor(scoreCount) !== 0  ) {

        gameTime-=0.1;
        
    };

    if (!endGameTablo) {
        
        var zeroCount = '00000';
        ctx.font = '15px ebit';

        if ( scoreCount >= 9 && scoreCount < 100 && scoreCount > 0 ) {
            
            zeroCount = '0000';

        } else if ( scoreCount > 100 && scoreCount < 999 ) {
            
            zeroCount = '000';
            
        } else if ( scoreCount > 1000 && scoreCount < 9999) {

            zeroCount = '00';

        } else if ( scoreCount > 10000 && scoreCount < 99999) {

            zeroCount = '0';

        } 

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
    
    
    if (changeSizeFlag) {

        
        godzilla.width += 2;
        godzilla.height += 2;
        godzilla.duck_width +=2;
        godzilla.duck_height +=2;
        godzilla.y_pos_size -= 2;
        godzilla.duck_y_pos -= 2;
        dy -=2
       
        changeSizeFlag = 0;
    };

    if ( jumpPressed ) {
        
        ctx.drawImage(picturesJump[0],godzilla.x_pos,godzilla.y_pos,godzilla.width,godzilla.height);
        
        ctx.strokeRect(godzilla.x_pos,godzilla.y_pos,godzilla.width,godzilla.height)
        
    } else if ( duck ) {

        ctx.drawImage(picturesDuck[frame_id],godzilla.x_pos,godzilla.duck_y_pos,godzilla.duck_width,godzilla.duck_height);
        
        ctx.strokeRect(godzilla.x_pos,godzilla.duck_y_pos,godzilla.width,godzilla.height)
        
        godzilla.time += 140;
        
    } else {
           
        ctx.drawImage(pictures[frame_id],godzilla.x_pos,godzilla.y_pos,godzilla.width,godzilla.height);
        
        ctx.strokeRect(godzilla.x_pos,godzilla.y_pos,godzilla.width,godzilla.height)
            
        godzilla.time += 140;

    }; 
 
    godzilla.y_pos = godzilla.y_pos + dy;
        
    if ( godzilla.y_pos < godzilla.y_pos_size ) {

        dy += 0.9;   
        console.log(dy);

    } else {

        jumpPressed = false;
        onGround = true; 
        godzilla.y_pos = godzilla.y_pos_size;
        /* godzilla.duck_y_pos = 193; */

    };
    
    var godzilla_width_half = 30*2;
    var godzilla_height_half = 35*2;
    var godzilla_x = godzilla.x_pos;
    var godzilla_x1 = godzilla.x_pos + godzilla_width_half;
    var godzilla_y = godzilla.y_pos;
    var godzilla_y1 = godzilla.y_pos + godzilla_height_half;

    if ( duck && onGround ) {

        var godzilla_width_half = 40*2;
        var godzilla_height_half = 25*2;
        var godzilla_x = godzilla.x_pos;
        var godzilla_x1 = godzilla.x_pos + godzilla_width_half;
        var godzilla_y = godzilla.duck_y_pos;
        var godzilla_y1 = godzilla.duck_y_pos + godzilla_height_half;

    };

    
    var tank_width_half = 35*2;
    var tank_height_half  = 15*2;
    var tank_x = tank.x_pos;
    var tank_x1 = tank.x_pos + tank_width_half;
    var tank_y = tank.y_pos;
    var tank_y1 = tank.y_pos + tank_height_half;

    var drone_width_half = 35*2;
    var drone_height_half  = 20*2;
    var drone_x = drone.x_pos;
    var drone_x1 = drone.x_pos + drone_width_half;
    var drone_y = drone.y_pos;
    var drone_y1 = drone.y_pos + drone_height_half;

    if  ( ( ( godzilla_x1 > tank_x && godzilla_x1 < tank_x1 ||
        godzilla_x > tank_x &&  godzilla_x < tank_x1 ||
        godzilla_x < tank_x && godzilla_x1 > tank_x1 ||
        tank_x < godzilla_x && tank_x1 > godzilla_x1 ) &&

    ( godzilla_y > tank_y && godzilla_y < tank_y1 ||
        tank_y > godzilla_y &&  tank_y < godzilla_y1 ||
        godzilla_y < tank_y && godzilla_y1 > tank_y1 ||
        tank_y < godzilla_y && tank_y1 > godzilla_y1 )  ) ||
    
    ( ( godzilla_x1 > drone_x && godzilla_x1 < drone_x1 ||
        godzilla_x > drone_x &&  godzilla_x < drone_x1 ||
        godzilla_x < drone_x && godzilla_x1 > drone_x1 ||
        drone_x < godzilla_x && drone_x1 > godzilla_x1 ) &&

    ( godzilla_y > drone_y && godzilla_y < drone_y1 ||
        drone_y > godzilla_y &&  drone_y < godzilla_y1 ||
        godzilla_y < drone_y && godzilla_y1 > drone_y1 ||
        drone_y < godzilla_y && drone_y1 > godzilla_y1 ) ) ) {

       /*  failSound.volume = 0.4;
        failSound.play();
        gameOver(); 
        endGameTablo = true;  */
        
    };

    if ( !stopGame ) {

        if ( tank.x_pos < -50 ) {
                        
            tank.x_pos = Math.floor(getRandom(1,300) + 900);
            launch = true;
            
        };
    
        ctx.drawImage(obstacles[0],tank.x_pos,tank.y_pos,70,30);
        ctx.strokeRect(tank_x,tank_y,70,30)
        
        tank.x_pos -= 6;
        tank.x_pos += gameTime;  

        if ( launch ) {

            if ( drone.x_pos < -50 ) {
                                    
                drone.x_pos = Math.floor(getRandom(1,300) + 1300);
                launch = false;
                
                

            };

        ctx.drawImage(obstacles[1],drone.x_pos,drone.y_pos,70,40);
        ctx.strokeRect(drone_x,drone_y,70,40)
          
        drone.x_pos -= 6;
        drone.x_pos += gameTime; 

        };

    };

    changeSizeFlag  = appearHeart(scoreCount,godzilla_x1,godzilla_x,godzilla_y,godzilla_y1);
     
};


function appearHeart(scoreCount,godzilla_x1,godzilla_x,godzilla_y,godzilla_y1) {

    if (Math.floor(scoreCount) % 100 === 0 ) {

        takenHeart = true;
        changeSizeFlag = 0;
    };
   
    var heart_x1 = heartInfo.x_pos + 15;
    var heart_y1 = heartInfo.y_pos + 15;

    if  ( ( godzilla_x1 > heartInfo.x_pos && godzilla_x1 < heart_x1 ||
        godzilla_x > heartInfo.x_pos &&  godzilla_x < heart_x1 ||
        godzilla_x < heartInfo.x_pos && godzilla_x1 > heart_x1 ||
        heartInfo.x_pos < godzilla_x && heart_x1 > godzilla_x1 ) &&

    ( godzilla_y > heartInfo.y_pos && godzilla_y < heart_y1 ||
        heartInfo.y_pos > godzilla_y &&  heartInfo.y_pos < godzilla_y1 ||
        godzilla_y < heartInfo.y_pos && godzilla_y1 > heart_y1 ||
        heartInfo.y_pos < godzilla_y && heart_y1 > godzilla_y1 )  )  {

        
        heartInfo.x_pos = 1000 + Math.floor(50 * getRandom(1,7));
        takenHeart = false;  
        
        if (getRandom(0,1) > 0.5) {
            
            heartInfo.y_pos = 120;

        } else {

            heartInfo.y_pos = 200;
        };

    } else if (heartInfo.x_pos < -50 ) {

        if (getRandom(0,1) > 0.5) {
            
            heartInfo.y_pos = 120;

        } else {

            heartInfo.y_pos = 200;
        };

        heartInfo.x_pos = 1000 + Math.floor(50 * getRandom(1,7));
        
    }; 

            
    ctx.drawImage(heart,heartInfo.x_pos,heartInfo.y_pos,heartInfo.width,heartInfo.height);      
    heartInfo.x_pos -= 5;
    
    if ( !takenHeart ) {
        console.log('work size in func');
        takenHeart = true;
        changeSizeFlag = 1;
        return changeSizeFlag;

    } 
            
};

var takenHeart = false;

var loadedLogo = false;

document.onkeydown = function (event) {
    
    if ( event.keyCode === 38 && onGround) {

        onGround = false;
        jumpPressed = true;
        dy = -13;
        /* jumpSound.volume = 0.3;
        jumpSound.play(); */

    } else if ( event.keyCode === 32 && choosenMode === 'Casual' ) {
            
            if (restart) {

                if (refresh) {

                    ctx.clearRect(0,0,canvas.width,canvas.height);

                    endGameTablo = false;
                    refresh = false;

                    dy = 0;
                    gameTime = 0;
                    timeTownSpeed = 0;
                    tank.x_pos = 900;   
                    tank.y_pos = 214;
                    drone.x_pos = 1250;
                    drone.y_pos = 150;
                    backgroundsInfo.x_pos = 1000;
                    scoreCount = 0;
                    design.style.visibility = 'hidden';
                    stopGame = false;

                    timer = setInterval(casualGame, 20);
                         
                };

            } else {

                    timer = setInterval(casualGame, 20);
                    restart = true;

            };

       
    } else if ( event.keyCode === 32 && !loadedLogo ) { //       SPACE
      
        if ( choosenMode === 'Casual' ) {

            timer = setInterval(casualGame, 20);
            notPressed = false;
            

        } else if ( choosenMode === 'Hard' ) { 
            
            timer = setInterval(hardcoreGame, 20);
            notPressed = false; 
            console.log('temporary doesnt work');
        };

        loadedLogo = true;
        choseDifficult();
        notPressed = true;
        console.log('work pressed')

    } else if ( event.keyCode === 39 && notPressed ) {

        choseIconInfo.x_pos = 650;
        choseDifficult();
        choosenMode = "Casual";
        loadedLogo = true;
        
        
        

    } else if ( event.keyCode === 37 && notPressed ) {

        choseIconInfo.x_pos = 140;
        choseDifficult();
        choosenMode = 'Hard';
        loadedLogo = true;
        
        

    } else if ( event.keyCode === 40) {

        duck = true;
    

    };

};
            
document.onkeyup = function (event) {

    if  ( event.keyCode === 40) {
       

        duck = false;
        /* godzilla.width = 60;
        godzilla.height = 70; */
        
    };
};

    
function getRandom(min, max) {

  return Math.random() * (max - min) + min;

};
function gameOver() {
  
    if ( scoreCount > localStorage.getItem('score') ) {
        
        localStorage.setItem('score',`${scoreCount}`);

    };
    stopGame = true;
    clearInterval(timer);
    /* ctx.clearRect(650,0,150,40);
    ctx.clearRect(0,50,800,100); */
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.font = "12px ebit";
    ctx.fillText(`YOUR SCORE ${Math.floor(scoreCount)}`,canvas.width / 2 - 60,canvas.height / 2 );
    
    design.style.visibility = 'visible';
    ctx.fillStyle = 'black';
    ctx.font = "30px ebit";
    ctx.fillText(`GAME OVER` ,canvas.width / 2 - 95,canvas.height / 2 - 20);

    ctx.fillStyle = 'grey';
    ctx.font = "9px ebit";
    
    ctx.fillText(`press Enter to restart game` ,canvas.width / 2 - 85,canvas.height / 2 + 15);
    
    refresh = true;

};
 
var design = document.getElementById('design');

function designer() {

    design.style.visibility = 'hidden';
    
    ctx.font = '13px ebit'
    ctx.fillText(`inspired by Schoolbolt`,100,40);
    ctx.fillText(`code by Nikita Biryukov` ,300,55);
    ctx.fillText(`design by Alena Stepanova` ,500,70);

};

 