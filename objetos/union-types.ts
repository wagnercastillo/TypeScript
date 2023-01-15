(()=>{

    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    }

    let myCustomVariable: (string|number|Hero) = 'Wagner';
    console.log(typeof myCustomVariable );
    
    myCustomVariable = 20;
    console.log(typeof myCustomVariable );
    
    myCustomVariable = {
        name: 'Wagner',
        age: 22,
        powers: ['Study']
    };
    console.log(typeof myCustomVariable );

    let mutable: number | string[];
 
    mutable = ["Adios","Hola"];
    mutable = 123;
    
})()