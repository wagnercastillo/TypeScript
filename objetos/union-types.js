"use strict";
(() => {
    let myCustomVariable = 'Wagner';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Wagner',
        age: 22,
        powers: ['Study']
    };
    console.log(typeof myCustomVariable);
    let mutable;
    mutable = ["Adios", "Hola"];
    mutable = 123;
})();
