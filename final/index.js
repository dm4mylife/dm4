

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d')



/* if ( x === 1100 ) {
    x = 0;
} else {
    x += 110;
}; */

var pictures  = [];

for ( var i = 1; i <= 12; i++ ) {

    var sprite = new Image();
    sprite.src = `${i}.png`;
    pictures.push(sprite);

}
console.log(pictures)
var sprite = new Image('');
sprite.src = '1.png';

 var godzilla = {

    frame_id : 0,
    y_pos : 50,
    time : 0

    }
var arr = [1,2,3,4]
console.log(arr[-2])
if ( 'abc' > 'df'){
    console.log('true')}
else {
    console.log('nj')
}
/* function drawGodzilla(pictures) {

    for ( var i = 1; i <= 6; i++ ) {


        ctx.clearRect(0,0,canvas.width,canvas.height);

        ctx.drawImage(pictures[i],0,60);

    }; 

    drawGodzilla(pictures) 

    };*/
time = 0;
frame_id = 0;

function moveGodzilla() {

    ctx.clearRect(0,0,canvas.width,canvas.height);

if ( godzilla.time > 1000) {

        godzilla.time = 0;
    }

    frame_id = Math.floor(godzilla.time / 1000 * pictures.length);
    console.log(frame_id)

    ctx.drawImage(pictures[frame_id],0,godzilla.y_pos,50,70);
    
    godzilla.time +=30;

    

};
            
        
setInterval(moveGodzilla, 30);
    
document.onkeydown = function (event) {
   

   if ( event.keyCode === 38 ) {

        console.log(event.keyCode)
        
        console.log(godzilla.y_pos)


        godzilla.y_pos -= 1;


    }
          

        

};
        
