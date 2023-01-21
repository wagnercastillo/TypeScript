import { Pokemon } from "./decorators";

const charmander = new Pokemon('Charmander');

(Pokemon.prototype as any).customName = 'Pikachu';

console.log(charmander);