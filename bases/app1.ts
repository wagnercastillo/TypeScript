(() => {
  // Tipos
  const batman: string = "Bruce";
  const superman: string = "Clark";

  const existe: boolean = false;

  // Tuplas
  const parejaHeroes: [string, string] = [batman, superman];
  const villano: [string, number, boolean] = ["Lex Lutor", 5, true];
  let villano2: [string, number, boolean] = ["Lex Lutor", 5, true];
  let arreglo: ["Lex Lutor", 5, true];

  // Arreglos
  const aliados: string[] = ["Mujer Maravilla", "Acuaman", "San", "Flash"];

  //Enumeraciones
  enum superHeroes {
    none = 0,
    min = 1,
    medium = 5,
    max = 100,
  }
  const fuerzaFlash: superHeroes = superHeroes.medium;
  const fuerzaSuperman: superHeroes = superHeroes.max;
  const fuerzaBatman: superHeroes = superHeroes.min;
  const fuerzaAcuaman: superHeroes = superHeroes.none;

  // Retorno de funciones
  function activar_batiseñal(): string {
    return "activada";
  }

  function pedir_ayuda():void {
    console.log("Auxilio!!!");
  }

  // Aserciones de Tipo
  const poder: any = "100";
  const largoDelPoder: number = (poder as string).length;
  console.log(largoDelPoder);
  
})();
