"use strict";
(() => {
    // Tipos
    const batman = "Bruce";
    const superman = "Clark";
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ["Lex Lutor", 5, true];
    let villano2 = ["Lex Lutor", 5, true];
    let arreglo;
    // Arreglos
    const aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
    //Enumeraciones
    let superHeroes;
    (function (superHeroes) {
        superHeroes[superHeroes["none"] = 0] = "none";
        superHeroes[superHeroes["min"] = 1] = "min";
        superHeroes[superHeroes["medium"] = 5] = "medium";
        superHeroes[superHeroes["max"] = 100] = "max";
    })(superHeroes || (superHeroes = {}));
    const fuerzaFlash = superHeroes.medium;
    const fuerzaSuperman = superHeroes.max;
    const fuerzaBatman = superHeroes.min;
    const fuerzaAcuaman = superHeroes.none;
    // Retorno de funciones
    function activar_batiseñal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    // Aserciones de Tipo
    const poder = "100";
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
