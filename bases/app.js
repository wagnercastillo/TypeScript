"use strict";
const msg = 'Hola mundo';
const hero = {
    name: 'Iroman',
    age: 45
};
hero.age = 50;
console.log(hero.age + 1);
const a = 10;
let b = 10;
function sayHello(msg) {
    console.log(msg);
}
(() => {
    const a = 10;
    console.log(a);
})();
