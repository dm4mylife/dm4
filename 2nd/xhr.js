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
/* 
var engr1 = 'oniuns';
var engr2 = 'garlic';
var search = 'omelet';
var page = 1;
var url = `http://www.recipepuppy.com/api/?i=${engr1},${engr2}&q=${search}&p=${page}`;

async function getReceipt() {

    async function delay(ms) {
		
		return new Promise( (resolve,reject) => {

             setTimeout( () => resolve(console.log('DELAY IS WORKING')),ms);
        })
    };           
    try {

        var response = await fetch(url);
        await delay(300);
		console.log(console.log(await response.text()));
        var jsonResponse = await JSON.stringify(response);
        if (typeof jsonResponse == "object") {
			console.log('obj');
        } else if (typeof jsonResponse == "string" ) {
			console.log('string');
        }; 
		
    } catch (error) {
            console.log(error);
    };

};
getReceipt(); */
const fetch = require('node-fetch')


async function getReceipt() {

    async function delay(ms) {
		
		return new Promise( (resolve,reject) => {

             setTimeout( () => resolve(console.log('DELAY IS WORKING')),ms);
        })
    };           
    try {

        var url = `https://reqres.in/api/users?page=2`;
        var response = await fetch(url);
        await delay(300);
        var obj =  JSON.parse(await response.text());
        console.log(obj);
        var result = '';
        for ( let key in obj ) {
          
            if ( key === "page") {
                
            }

        };
		
    } catch (error) {
            console.log(error);
    };

};
getReceipt();