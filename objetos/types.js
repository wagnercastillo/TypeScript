"use strict";
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super Velocidad", "Viajar en el Tiempo"],
    };
    let superman = {
        name: "Bruce Banner",
        powers: ["Super Fuerza", "Destrucción"],
        getName() {
            return this.name;
        },
    };
})();
