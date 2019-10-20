var pictures  = [],
    picturesJump = [],
    picturesDuck = [],
    picturesOthers = [],
    backgrounds = [],
    obstacles = [],
    picturesExplosion = [];


loadIFilesArr(3,'town',backgrounds,'png');
loadIFilesArr(2,'run',pictures,'png');
loadIFilesArr(2,'duck',picturesDuck,'png');
loadIFilesArr(1,'jump',picturesJump,'png');
loadIFilesArr(12,'exp',picturesExplosion,'gif');

var tank = loadIFilesOthers('tank',obstacles),
    drone = loadIFilesOthers('drone',obstacles),
    path = loadIFilesOthers('path',picturesOthers),

    heart = loadIFilesOthers('heart',picturesOthers),
    choseIcon = loadIFilesOthers('choseIcon',picturesOthers),

    failSound = new Audio('./sounds/fail.mp3'),
    moneySound = new Audio('./sounds/money.mp3'),
    jumpSound = new Audio('./sounds/jump.mp3'),
    heartSound = new Audio('./sounds/heart.mp3'),
    heartSound = new Audio('./sounds/heart.mp3'),
    godzilla_roar = new Audio('./sounds/godzilla.mp3');

var onGround = false,
    jumpPressed = false,
    endGameTablo = false,
    duck = false,
    restart = false,
    timer = null,
    launch = false,
    stopGame = false,
    takenHeart = false,
    loadedLogo = false,
    tankCollision = null,
    droneCollision = null,
    heartCollision = null,
    notPressed = false,
    cheat = false,
    cheat2 = false,
    explosionFlag = false,
    endGame = false,
    objectExplosion = false,
    playSoundGodzilla = false,
    choosenMode = '';

var currentCount = 0,
    pathNumber = 0,
    dy = 0,
    frame_id = 0,
    scoreCount = 0,
    gameTime = 0,
    endExplosion = 1,
    endExplosion2 = 1,
    scoreCountCasual = 0,
    endBgr = 2200,
    countPath = 800,
    secondCountPath = 1600,
    timeTownSpeed = 0,
    changeSizeFlag = 0,
    heartCount = 0,
    explosion_frames = 0,
    potentialGrow = 2.5,
    time_explosion = 0;

var tank = {

    x_pos : 900,   
    y_pos : 214,
    x_rep : 900,
    width : 70,
    height : 30
};

var drone = {

    x_pos : 1350,
    y_pos : 142,
    width : 70,
    height : 40
};

var godzilla = {

    x_pos : 20,
    y_pos : 180,
    width : 60,
    height : 70,
    duck_y_pos : 193,
    y_pos_size : 175,
    duck_width: 80,
    duck_height: 50,
    time : 0
    
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
    
};

var choseIconInfo = {

    x_pos: 420,
    y_pos: 190,
    x_speed: 0

};

var gameMode = {

    CASUAL : "Casual",
    HARD : "Hard"
};

var heartInfo = {

    x_pos : 2800,
    y_pos : 200,
    width: 30,
    height: 30,
    
};

var limitSize = {

    x_pos : 20,
    y_pos : 125,
    width : 110,
    height : 120,
    duck_y_pos : 143,
    y_pos_size : 125,
    duck_width: 130,
    duck_height: 100

};

var explosionInfo = {

    x_pos : 200,
    x_pos2 : 200,
    y_pos : 200,
    explosion_frames : 0,
    time_explosion : 0

};
     
setTimeout(function () {
    
    var canvas = document.getElementById('canvas');
     
    var ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 270;

    changeTextStyle('grey','25px ebit');
    ctx.fillText('Press Space to start game',canvas.width / 2 - 200,canvas.height / 2);   

},50);

var design = document.getElementById('design');
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 270;

changeTextStyle('grey','25px ebit');
ctx.fillText('Press Space to start game',canvas.width / 2 - 150,canvas.height / 2);

function runGame() {
    
    ctx.clearRect(0,0,800,250);

    explosionFlag = limitSizeCompare();
        
    if ( endBgr < 0 ) {

        backgroundsInfo.x_pos = 1000;
        endBgr = 2200;
        timeTownSpeed +=0.1;
      
    };

    ctx.drawImage(backgrounds[pathNumber],backgroundsInfo.x_pos,backgroundsInfo.y_pos,400,90);
    ctx.drawImage(backgrounds[pathNumber+1],backgroundsInfo.x_pos+400,backgroundsInfo.y_pos,400,90);
    ctx.drawImage(backgrounds[pathNumber+2],backgroundsInfo.x_pos+800,backgroundsInfo.y_pos,400,90);
    
    backgroundsInfo.x_pos -= 1 + timeTownSpeed;
    endBgr -= 1 + timeTownSpeed;
    
    if ( explosionFlag ) {

        changeTextStyle('black','16px ebit')
        ctx.fillText('YOU WIN!',350,180);
        design.style.visibility = 'visible';
        cheat = true;
        endGame = true;
       
        if (!playSoundGodzilla) {

            godzilla_roar.volume = 0.2;
            godzilla_roar.play()
            playSoundGodzilla = true;
        };

        var godzilla_x = godzilla.x_pos + 30,
            godzilla_x2 = godzilla.x_pos + godzilla.width,
            godzilla_y = godzilla.y_pos,
            godzilla_y2 = godzilla.y_pos + godzilla.height;
            
        var tank_x = tank.x_pos,
            tank_x2 = tank.x_pos + tank.width,
            tank_y = tank.y_pos,
            tank_y2 = tank.y_pos + tank.height,

            drone_x = drone.x_pos,
            drone_x2 = drone.x_pos + drone.width,
            drone_y = drone.y_pos,
            drone_y2 = drone.y_pos + drone.height;

        tankCollision = collision(godzilla_x,godzilla_x2,tank_x,tank_x2,godzilla_y,godzilla_y2,tank_y,tank_y2);
        droneCollision = collision(godzilla_x,godzilla_x2,drone_x,drone_x2,godzilla_y,godzilla_y2,drone_y,drone_y2);

        if (endExplosion != 1) {    

            endExplosion = explosion(explosionInfo.x_pos,tank.y_pos-15,50,50);

        } else if (endExplosion2 != 1) { 

            endExplosion2 = explosion(explosionInfo.x_pos2,drone.y_pos,50,50);

        };

        if ( tankCollision ) {

            endExplosion = 0;
            explosionInfo.x_pos = tank.x_pos;
            tank.x_pos = launchObject(220,tank.x_pos,tank.y_pos,tank.width,tank.height,drone.x_pos,gameTime,obstacles,0);
            
        } else if ( droneCollision ) {

            endExplosion2 = 0;   
            explosionInfo.x_pos2 = drone.x_pos;
            drone.x_pos = launchObject(220,drone.x_pos,drone.y_pos,drone.width,drone.height,tank.x_pos,gameTime,obstacles,1);
            
        };

    };

    if ( countPath < 0 ) {

        countPath = 800;
        secondCountPath = 1600;

    };

    ctx.drawImage(picturesOthers[0],countPath,230,100,18);
    drawPath(picturesOthers[0],countPath);
    drawPath(picturesOthers[0],secondCountPath);

    secondCountPath-=4-gameTime;
    countPath-=4-gameTime;
    
    if ( Math.floor(scoreCount) % 50 === 0 && Math.floor(scoreCount) !== 0  ) {

        gameTime-=0.1;
        
    };

    if (!endGameTablo && choosenMode !== gameMode.CASUAL) {
        
        var zeroCount = '00000';
        changeTextStyle('black','14px ebit');
        
        if ( scoreCount >= 9 && scoreCount < 100 && scoreCount > 0 ) {
            
            zeroCount = '0000';

        } else if ( scoreCount > 100 && scoreCount < 999 ) {
            
            zeroCount = '000';
            
        } else if ( scoreCount > 1000 && scoreCount < 9999) {

            zeroCount = '00';

        } else if ( scoreCount > 10000 && scoreCount < 99999) {

            zeroCount = '0';

        };

        scoreCount += 0.2;
            
        if ( Math.floor(scoreCount) % 100 === 0 && Math.floor(scoreCount) !== 0 ) {

            scoreInfo.flag = true; 
            moneySound.volume = 0.4;
            moneySound.play();
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
    
    if (choosenMode === gameMode.CASUAL && !stopGame ) {
       
        progressBar();

    };

    if ( godzilla.time > 1000) {

            godzilla.time = 0;
            
    };

    frame_id = Math.floor(godzilla.time / 1000 * pictures.length);
    
    if (changeSizeFlag && choosenMode === gameMode.CASUAL ) {
        
        godzilla.width += potentialGrow;
        godzilla.height += potentialGrow;
        godzilla.duck_width += potentialGrow;
        godzilla.duck_height += potentialGrow;
        godzilla.y_pos_size -= potentialGrow;
        godzilla.duck_y_pos -= potentialGrow;
        drone.y_pos -= potentialGrow; 
        changeSizeFlag = 0;

    };
    
    if ( jumpPressed ) {
        
        ctx.drawImage(picturesJump[0],godzilla.x_pos,godzilla.y_pos,godzilla.width,godzilla.height);
        
    } else if ( duck ) {

        ctx.drawImage(picturesDuck[frame_id],godzilla.x_pos,godzilla.duck_y_pos,godzilla.duck_width,godzilla.duck_height);
        
        godzilla.time += 140;
        
    } else {
           
        ctx.drawImage(pictures[frame_id],godzilla.x_pos,godzilla.y_pos,godzilla.width,godzilla.height);
            
        godzilla.time += 140;

    }; 
 
    godzilla.y_pos = godzilla.y_pos + dy;
        
    if ( godzilla.y_pos < godzilla.y_pos_size ) {

        dy += 0.8;   
     
    } else {

        jumpPressed = false;
        onGround = true; 
        godzilla.y_pos = godzilla.y_pos_size;

    };
    
    var godzilla_x = godzilla.x_pos+35,
        godzilla_x2 = godzilla.x_pos + godzilla.width-5,
        godzilla_y = godzilla.y_pos,
        godzilla_y2 = godzilla.y_pos + godzilla.height;

    if ( duck && onGround ) {

        var godzilla_x = godzilla.x_pos,
            godzilla_x2 = godzilla.x_pos + godzilla.width,
            godzilla_y = godzilla.duck_y_pos+3,
            godzilla_y2 = godzilla.duck_y_pos + godzilla.height;

    };
    
    var tank_x = tank.x_pos,
        tank_x2 = tank.x_pos + tank.width,
        tank_y = tank.y_pos,
        tank_y2 = tank.y_pos + tank.height,

        drone_x = drone.x_pos,
        drone_x2 = drone.x_pos + drone.width-45,
        drone_y = drone.y_pos,
        drone_y2 = drone.y_pos + drone.height,

        heart_x = heartInfo.x_pos,
        heart_y = heartInfo.y_pos,
        heart_x2 = heartInfo.x_pos + 15,
        heart_y2 = heartInfo.y_pos + 15;

    if (!tankCollision) {
          
        tank.x_pos = launchObject(-50,tank.x_pos,tank.y_pos,tank.width,tank.height,drone.x_pos,gameTime,obstacles,0);
           
    };
   
    if (!droneCollision) {

        drone.x_pos = launchObject(-50,drone.x_pos,drone.y_pos,drone.width,drone.height,tank.x_pos,gameTime,obstacles,1);
        
    };

    if (!explosionFlag) {
       
        if ( choosenMode === gameMode.CASUAL ) {

            ctx.drawImage(picturesOthers[1],heartInfo.x_pos,heartInfo.y_pos,heartInfo.width,heartInfo.height);      
            heartInfo.x_pos -= 5;
            heartCollision = collision(godzilla_x,godzilla_x2,heart_x,heart_x2,godzilla_y,godzilla_y2,heart_y,heart_y2);

        };

        tankCollision = collision(godzilla_x,godzilla_x2,tank_x,tank_x2,godzilla_y,godzilla_y2,tank_y,tank_y2);
        droneCollision = collision(godzilla_x,godzilla_x2,drone_x,drone_x2,godzilla_y,godzilla_y2,drone_y,drone_y2);

    };
  
    if ( !cheat ) {

        if ( tankCollision || droneCollision ) {

            failSound.volume = 0.4;
            failSound.play();  
            gameOver(); 
            endGameTablo = true; 
        
        }; 

    };

    if ( cheat2 ) {
        
        godzilla.duck_width = limitSize.duck_width;
        godzilla.duck_height = limitSize.duck_height;
        godzilla.width = limitSize.width;
        godzilla.height = limitSize.height;
        godzilla.y_pos = limitSize.y_pos;
        godzilla.duck_y_pos = limitSize.duck_y_pos;

    };

    if ( !stopGame && !explosionFlag ) {
    
        if  ( heartCollision )  {

            heartCount++;
            gameTime -= 0.25;
            heartSound.volume = 0.4;
            heartSound.play();
            takenHeart = true;  
            changeSizeFlag = 1;     
            scoreCountCasual += 5;

            heartInfo.y_pos = changeYPosHeart(heartInfo.y_pos);
            heartInfo.x_pos = changeXPosHeart(heartInfo.x_pos);

        } else if ( heartInfo.x_pos < -50 ) {

            heartInfo.y_pos = changeYPosHeart(heartInfo.y_pos);
            heartInfo.x_pos = changeXPosHeart(heartInfo.x_pos);

        };
       
        if ( takenHeart ) {
            
            takenHeart = false;
            changeSizeFlag = 1;
        
        };      
        
    };
            
};

/// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function drawPath(arrElement,countPath) {

    var add = -100;

    for ( var i = 0; i < 8; i++ ) {

        ctx.drawImage(arrElement,countPath+add,230,100,18);
        add-=100;
        
    };
    
};
function progressBar() {

    ctx.clearRect(40,20,22,15);
    ctx.fillStyle = 'grey';
    ctx.font = '13px ebit'
    ctx.fillText(`growth: ${Math.floor(scoreCountCasual)}%`,40,35);
    
};
function choseDifficult() {

    ctx.clearRect(0,0,canvas.width,canvas.height );

    changeTextStyle('grey','25px ebit');
    ctx.fillText('Hardcore mode',50,125);
    ctx.fillText('Casual mode',575,125);

    changeTextStyle('black','16px ebit');
    ctx.fillText('Running for the highest score',30, 170);
    ctx.fillText('Grow up to win game ',570, 170);

    ctx.drawImage(picturesOthers[2],choseIconInfo.x_pos,choseIconInfo.y_pos,30,30);
    
}; 
function changeYPosHeart(y_pos) {

    if ( getRandom(0,1) > 0.5 ) {
    
        return y_pos.y_pos = 120;

    } else {

        return y_pos.y_pos = 210;
    };

};
function launchObject(distance,object1XPos,object1YPos,object1Width,object1Height,object2XPos,gameTime,arrElement,i) {

    if ( object1XPos < distance ) {

        if ( object2XPos > 800 ) {

            object1XPos = Math.floor(getRandom(object2XPos+200,object2XPos+375));
            
        } else {

            object1XPos = Math.floor(getRandom(950,1250));
           
        };           
    };
   
    ctx.drawImage(arrElement[i],object1XPos,object1YPos,object1Width,object1Height);

    object1XPos -= 6;
    object1XPos += gameTime;
    
    return object1XPos;
};
function loadIFilesOthers(name,arr) {

    var file = new Image();
    file.src = `./pics/${name}.png`;
    arr.push(file);
    
};
function loadIFilesArr(countPicture,namePicture,arrName,exe) {

    for ( var i = 1; i <= countPicture; i++ ) {

        var file = new Image();
        file.src = `./pics/${namePicture}${i}.${exe}`;
        arrName.push(file);
    
    };

    return arrName;
};
function getRandom(min, max) {

  return Math.random() * (max - min) + min;

};
function changeXPosHeart(x_pos) {

    return  x_pos.x_pos = Math.floor(50 * getRandom(1,7) + 1000);

};
function gameOver() {
  
    if ( scoreCount > localStorage.getItem('score') ) {
        
        localStorage.setItem('score',`${scoreCount}`);

    };

    stopGame = true;
    restart = true;
    design.style.visibility = 'visible';

    clearInterval(timer);

    ctx.clearRect(0,0,150,60);

    changeTextStyle('black',"20px ebit")
    ctx.fillText(`GAME OVER` ,30,30);

    changeTextStyle('grey','10px ebit')
    ctx.fillText(`press Space to restart game` ,15,45);

    if ( choosenMode === gameMode.HARD ) {

        changeTextStyle('grey','12px ebit')
        ctx.fillText(`YOUR SCORE ${Math.floor(scoreCount)}`,45,60 );
        
    };

}; 
function explosion(x,y,w,h) {

    if ( explosionInfo.time_explosion > 1000) {

    explosionInfo.time_explosion = 0;
    
    return 1;
        
    };

    explosionInfo.explosion_frames = Math.floor(explosionInfo.time_explosion / 1000 * picturesExplosion.length);
    ctx.drawImage(picturesExplosion[explosionInfo.explosion_frames],x,y,w,h);

    explosionInfo.time_explosion += 33;

    return 0;
};
function limitSizeCompare() {

    if ( limitSize.width <= godzilla.width && limitSize.height <= godzilla.height ) {

        return true;

    } else {

        return false;
    };

};
function designer() {

    design.style.visibility = 'hidden';
    ctx.font = '13px ebit'
    ctx.fillText(`inspired by Schoolbolt`,100,265);
    ctx.fillText(`code by Nikita Biryukov` ,300,265);
    ctx.fillText(`design by Alena Stepanova` ,500,265);

};
function reset() {

    ctx.clearRect(0,0,800,250);

    endGameTablo = false;
    stopGame = false;
    restart = true;
    cheat = false;
    cheat2 = false;
    heartCount = 0;
    scoreCountCasual = 0;
    dy = 0;
    gameTime = 0;
    timeTownSpeed = 0;
    endBgr = 2200;
    tank.x_pos = 900;   
    tank.y_pos = 214;
    drone.x_pos = 1350;
    drone.y_pos = 145;
    godzilla.width = 60;
    godzilla.height = 70;
    godzilla.y_pos = 180;
    godzilla.duck_y_pos = 193;
    godzilla.duck_width = 80;
    godzilla.duck_height = 50;
    godzilla.y_pos_size = 175;
    heartInfo.x_pos = 2800;
    backgroundsInfo.x_pos = 1000;
    scoreCount = 0;
    design.style.visibility = 'hidden';
 
    timer = setInterval(runGame, 20);

};
function collision(gx1,gx2,tx1,tx2,gy1,gy2,ty1,ty2) {

    if ( ( gx2 > tx1 && gx2 < tx2 ||
        gx1 > tx1 &&  gx1 < tx2 ||
        gx1 < tx1 && gx2 > tx2 ||
        tx1 < gx1 && gx2 < tx2 ) &&

    (   gy1 > ty1 && gy1 < ty2 ||
        ty1 > gy1 &&  ty1 < gy2 ||
        gy1 < ty1 && gy2 > ty2 ||
        ty1 < gy1 && ty2 > gy2 )  ) {
       
        return true;

        };

};
function changeTextStyle(style,font) {

    ctx.fillStyle = style;
    ctx.font = font;

};
document.onkeydown = function (event) {
    
    if ( event.keyCode === 38 && onGround && !endGame) {

        onGround = false;
        jumpPressed = true;
        jumpSound.volume = 0.4;
        jumpSound.play();
        dy = -12;
    
    } else if ( event.keyCode === 32 ) { //       SPACE
       
        
        if ( choosenMode === gameMode.CASUAL && notPressed ) {

            timer = setInterval(runGame, 20);
            notPressed = false;
            loadedLogo = true;

        } else if ( choosenMode === gameMode.HARD && notPressed ) { 
            
            timer = setInterval(runGame, 20);
            notPressed = false;
            loadedLogo = true;  
            
        } else if (!loadedLogo  && !restart) {

            choseDifficult()
            notPressed = true;
            loadedLogo = true;

        }  else if (restart) {

            reset();
            restart = false;

        };

    } else if ( event.keyCode === 39 && notPressed  ) {

        choseIconInfo.x_pos = 650;
        choseDifficult();
        choosenMode = gameMode.CASUAL;
        loadedLogo = true;
        
    } else if ( event.keyCode === 37 && notPressed  ) {

        choseIconInfo.x_pos = 140;
        choseDifficult();
        choosenMode = gameMode.HARD;
        loadedLogo = true;
    
    } else if ( event.keyCode === 40 && !endGame) {

        duck = true;

        dy = 10;

    } else if ( event.keyCode === 70 ) {

        cheat = true;

    } else if ( event.keyCode === 71 ) {

        cheat2 = true;

    };

};           
document.onkeyup = function (event) {

    if  ( event.keyCode === 40 && !endGame) {

        duck = false;
        
    };
};