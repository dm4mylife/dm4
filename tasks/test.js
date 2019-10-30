var XMLHttpRequest = require('xhr2')

let xhttp = new XMLHttpRequest();
var textHtml ='';
xhttp.onreadystatechange = function () {

    if ( this.status === 200 && this.readyState === 4) {

        textHtml = this.responseText;

    };

};
xhttp.open('GET','http://getpost.itgid.info/');
xhttp.send();
console.log(textHtml);



var el = document.querySelectorAll('._sizes_').click();

console.log(el)
