/* var xhr = new XMLHttpRequest();
var engr1 = 'oniuns';
var engr2 = 'garlic';
var search = 'omelet';
var page = 1;
var url = `http://www.recipepuppy.com/api/?i=${engr1},${engr2}&q=${search}&p=${page}`;

xhr.open("Get",url, true);
xhr.send();

xhr.onreadystatechange = function () {

    if ( xhr.readyState === 4 && xhr.status === 200 ) {
        console.log("Success.Ready");
        console.log(xhr.response);
    } else if  ( xhr.readyState === 3 ) {
        console.log('Pending...');
    } else if ( xhr.readyState ===0 ) {
		console.log("Smth goes wrong");
    };
}; */


const xhr = new XMLHttpRequest();

function main() {

    let getReceipt = new Promise( function(resolve,reject) {

        var xhr = new XMLHttpRequest();
        var engr1 = 'oniuns';
        var engr2 = 'garlic';
        var search = 'omelet';
        var page = 1;
        var url = `http://www.recipepuppy.com/api/?i=${engr1},${engr2}&q=${search}&p=${page}`;
        
        xhr.open("Get",url, true);
        xhr.send();
        
        xhr.onreadystatechange = function () {
        
            if ( xhr.readyState === 4 && xhr.status === 200 ) {

                console.log("Success in getting request, keep doing shit");

                resolve( 
                    setTimeout( function() {
                        resolve(console.log('Thats winner delay'));
                    },2000)
                )

                getReceipt.then( () => console.log(xhr.response));
            
            } else if  ( xhr.readyState === 3 ) {

                console.log('Pending...');

            } else if ( xhr.readyState ===0 ) {

                console.log("Smth goes wrong");
                reject(new Error('SHITTT'));
            };
        };
        
    });
   
   
};
main();





