(() => {

    class Avenger {
        name;
        power;

        constructor(name = 'No name', power = 0){
            this.name = name;
            this.power = power;
        }
        
        
        
    }
    
    let funcion = () =>{};
    
    class FlyingAvenger extends Avenger {
        flying;

        constructor(name, power){
            super(name, power)
            this.flying = true
        }
    }

    const hulk = new Avenger ('Hulk', 9002)
    const falcon = new FlyingAvenger ('Falcon', 50)


    console.log(hulk )
    console.log(falcon)


})()


