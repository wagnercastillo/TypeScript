var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./classes/Hero", "./data/powers"], function (require, exports, Hero_1, powers_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    powers_1 = __importDefault(powers_1);
    console.log('Hola Mundo!!');
    const iroman = new Hero_1.Hero('Superman', 1, 35);
    console.log(iroman.);
    console.log(iroman);
    console.log(powers_1.default);
});
