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


/* const xhr = new XmlHttpRequest();

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

                 
                    setTimeout( function() {

                        resolve(xhr.response);
                    },2000)
               
            
            } else if  ( xhr.readyState === 3 ) {

                console.log('Pending...');

            } else if ( xhr.readyState ===0 ) {

                console.log("Smth goes wrong");
                reject(new Error('SHITTT'));
            };
        };
        
        
    });
   
   getReceipt.then( (data) => console.log(data));

}; 
main();
*/

 const fetch = require('node-fetch');

var engr1 = 'oniuns';
var engr2 = 'garlic';
var search = 'omelet';
var page = 1;
var url = `http://www.recipepuppy.com/api/?i=${engr1},${engr2}&q=${search}&p=${page}`;


async function getReceipt() {

    async function delay(ms) {
        
        setTimeout( () => console.log('DELAY'),ms)
    };
    try {

        var response = await fetch(url);
        await delay(1500);
        console.log(await response.text())

    } catch (error) {
            console.error(error);
    };

};
getReceipt();