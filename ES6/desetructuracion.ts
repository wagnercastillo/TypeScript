(() => {

    type Avenger = {
        nick: string;
        iroman: string;
        vision: string;
        activo: boolean;
        power: number;
    }

    const avengers: Avenger = {
        nick: 'Samuel L Jackson.',
        iroman: 'Roberth Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        power: 1500,
    }

    const printAvenger = ({ iroman, ...resto }: Avenger) => {
        const hola = iroman;
        console.log(iroman, resto)
    }

    printAvenger(avengers);

    const avengersArr: [string, boolean, number] = ['Cap. AMérica', true, 123.123 ];
    const [capitan, iroman, serialNumero ] = avengersArr;

    console.log({ iroman, capitan   })



    const numero:number = 10;
 
    if( numero >0 ){
     
      const numero:number = 11;
     
    }

    console.log(numero)

    let frutas:string[] = ["Pera","Manzana"];
    let [ pera, manzana ] = frutas

})()
