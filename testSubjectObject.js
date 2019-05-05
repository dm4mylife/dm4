

human = {
    name: "Nick",
    age: 28,
    gender: 'male',
};
var gNick = 'age'
human.age = 30;
function obj(human) {
    for (var key in human) {
        console.log(key + human.key);
    }
}

console.log(obj(human));