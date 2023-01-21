import { getPokemon } from '../generics/get-pockemon';


getPokemon(10)
    .then( pokemon => console.log( pokemon.sprites ) )
    .catch( error => console.log(error) )
    .finally(()=> console.log('Fin de getPokemon'));