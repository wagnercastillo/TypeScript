(()=> {

    const msg: string = 'Hola mundo';

    const hero = {
        name:'Iroman',
        age: 45
    }
                                                                            
    hero.age = 50  
    console.log(hero.age + 1)       

    const a:number = 10;
    let b:number = 10;

    function sayHello ( msg:string ) {
        console.log(msg)
    }

    (() => {

        const a:number = 10;
        console.log(a)

    })()

})()
