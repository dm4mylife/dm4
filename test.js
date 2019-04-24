/** Найти числа от 1 до 100,которые:
 1.Если делятся на 3 то пишем Физ.
 2.Если делятся на 5 то пишем Баз
 3. Если и на 3 и на 5 то пишем ФизБаз.
 */

var test = 1;

function counter() {

for (var i = 1; i <= 100; i++) {

    console.log(i);

    i % 3 === 0 && process.stdout.write("Fizz");
    i % 5 === 0 && process.stdout.write("Buzz");
    console.log("");
    i +=1;
};
};
console.log (counter(test));