
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d')



    /* if ( x === 1100 ) {
        x = 0;
    } else {
        x += 110;
    }; */
    
var pictures  = [];
/* for ( var i = 1; i <= 6; i++ ) {

var sprite = new Image('');
sprite.src = `${i}.png`;
pictures.push(sprite)
} */
console.log(pictures)
var sprite = new Image('');
sprite.src = '1.png';

 var godzilla = {

    y_pos : 50

    }

/* function drawGodzilla(pictures) {

    for ( var i = 1; i <= 6; i++ ) {


        ctx.clearRect(0,0,canvas.width,canvas.height);

        ctx.drawImage(pictures[i],0,60);

    }; 

    drawGodzilla(pictures) 

    };*/

    function moveGodzilla() {


        ctx.clearRect(0,0,canvas.width,canvas.height)
        ctx.drawImage(sprite,0,godzilla.y_pos,50,70);
        

        };
            
        
    setTimeout(moveGodzilla, 30);
    
document.onkeydown = function (event) {
   

   if ( event.keyCode === 38 ) {

            console.log(event.keyCode)
            
            console.log(godzilla.y_pos)

            for ( ;godzilla.y_pos === 30; ) {
                
            setInterval(moveGodzilla, 30);
                console.log('Work')
            godzilla.y_pos -= 1;
            console.log(godzilla.y_pos)

            }  
                console.log('Eto xyuna done')
                setInterval(moveGodzilla, 30);
                godzilla.y_pos = 20;

            }
          

                

        };
                
