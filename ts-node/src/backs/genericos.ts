// // import * as HeroClasses  from "./classes/Hero";
// import { Hero as SuperHero } from "./classes/Hero";
// import powers  from "./data/powers";

// console.log('Hola Mundo!!');
// const iroman = new SuperHero('Superman', 1, 35);

// console.log(iroman);
// console.log(powers);

// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

// import { printObject, genericFuntion } from './generics/generics';


// console.log( genericFuntion(41234).toFixed(2) );
// console.log( genericFuntion('Wagner').toUpperCase() );
// console.log( genericFuntion( new Date() ).getDate() );

// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

import { genericFunctionArrow } from '../generics/generics';
import { Hero, Villain } from '../interfaces';

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Wiston Wilson',
    dangerLevel: 130
}

console.log(genericFunctionArrow<Hero>(deadpool).realName );