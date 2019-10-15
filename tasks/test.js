var elem = document.querySelector('.ty-product-options__item.product-list-field select');  
var arr = [];
for (let i = 1; i < elem.options.length; i++) {
var text = elem.options[i].innerHTML;
arr.push(text);
}
console.log(arr)