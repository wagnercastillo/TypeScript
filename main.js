"use strict";
(() => {
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
})();
(() => {
    const batman = "Bruce";
    const superman = "Clark";
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ["Lex Lutor", 5, true];
    let villano2 = ["Lex Lutor", 5, true];
    let arreglo;
    const aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
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
    function activar_batiseñal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    const poder = "100";
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(() => {
    const sumar = (a, b) => {
        return a + b;
    };
    const contar = (heroes) => {
        return heroes.length;
    };
    const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    contar(superHeroes);
    const llamarBatman = (llamar) => {
        if (llamar) {
            console.log("Batiseñal activada");
        }
    };
    llamarBatman();
    const unirheroes = (...restPersonas) => {
        return restPersonas.join(", ");
    };
    const noHaceNada = (numero, texto, booleano, arreglo) => {
    };
    let noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
    function saludar() {
        console.log("Hola mundo!");
    }
})();
(() => {
    const fullName = (firstName, upper = false, lastName) => {
        if (upper) {
            return `${firstName} ${lastName || 'No last name'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || 'No last name'}`;
        }
    };
    const name = fullName("Tony", true, 'Stark');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'No last name'}`;
    };
    const name = fullName("Tony");
    console.log({ name });
})();
function saludar2(mensaje = "mundo") {
    console.log("Hola " + mensaje);
}
saludar2("hola");
(() => {
    const fullName = (firstName, lastName) => {
        if (!firstName) {
            throw new Error('Nombre requerido');
        }
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman });
})();
(() => {
    const addNumbers = (a, b) => {
        return a + b;
    };
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado!`;
    let myFuntion;
    myFuntion = 10;
    console.log(myFuntion);
    myFuntion = addNumbers;
    console.log(myFuntion(1, 2));
    myFuntion = greet;
    console.log(greet('Wagner'));
    myFuntion = saveTheWorld;
    console.log(myFuntion());
})();
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    function activeBatiSignal() {
        return 'Batiseñal Activada';
    }
})();
(() => {
    const batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4,
    };
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        },
    };
    const villanos = [
        {
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false,
        },
        {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true,
        },
        {
            nombre: "James Logan",
            edad: undefined,
            mutante: true,
        },
    ];
    const charles = {
        poder: "psiquico",
        estatura: 1.78,
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
    };
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
    let hola = 'hola';
    console.log(hola.toUpperCase());
})();
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super Velocidad", "Viajar en el Tiempo"],
    };
    flash = {
        name: "Bruce Banner",
        powers: ["Super Fuerza", "Destrucción"],
        getName() {
            return this.name;
        },
    };
})();
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
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = 'Dr Strange';
    console.log(avenger.charAt(0));
    avenger = 150.432143241;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(() => {
    const number = [1, 2, 3, 4, '5', 6, 7, 8, 9, 10];
    const villians = ['Omega Rojo', 'Dormmamu', 'Duende Verde'];
    villians.forEach(v => console.log(v.toLowerCase()));
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = (isBatman) ? true : false;
    console.log(isSuperman);
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    const error = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('Auxilio');
    console.log('Hola mundo');
})();
(() => {
    let nada = undefined;
    console.log(nada);
})();
(() => {
    let avengers = 10;
    console.log(avengers);
    const villans = 20;
    if (avengers < villans) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
})();
(() => {
    var _a;
    const batman = 'Batman';
    ;
    const linternaVerde = "Linterna Verde";
    const volcanNegro = `Héroe: Volcan Negro`;
    console.log(`I'am ${batman}`);
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No está presente');
})();
(() => {
    const hero = ['Dr Strange', 100, true];
    hero[0] = 'Iron man';
    hero[1] = 50;
    hero[2] = true;
    console.log(hero);
})();
(() => {
    function callBatman() {
        return;
    }
    const callSuperman = () => {
    };
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map