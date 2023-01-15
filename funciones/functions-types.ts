(() => {

    const addNumbers = (a: number, b: number): number => {
        return a + b;
    };
    const greet = (name: string) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado!`;

    let myFuntion;
    //* let myFuntion = Function;
    //* let myFuntion: () => number;
    //* let myFuntion: (x:string) => string;
    //* let myFuntion: () => void; || //* let myFuntion: () => string;



    myFuntion = 10;
    console.log(myFuntion);

    myFuntion = addNumbers;
    console.log(myFuntion(1,2));

    myFuntion = greet;
    console.log(greet('Wagner'));
    
    myFuntion = saveTheWorld;
    console.log(myFuntion());



})();
