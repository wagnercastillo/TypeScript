function printToConsole( constructor: Function ) {
    console.log(constructor);
}

const printToConsoleConditional = ( print: boolean = false ): Function => {
    if( print ){
        return printToConsole;
    }else {
        return () => {}
    }
}

const bloquearPrototipo = function( constructor: Function ){
    Object.seal( constructor );
    Object.seal( constructor.prototype );
}

function CheckValidPokemonId(){
    return function ( target: any, propetyKey:string, descriptor: PropertyDescriptor ) {
        
        const originalMethod = descriptor.value;

        descriptor.value = (id: number)  => {
            if(id <= 1 || id >= 800){
                return console.error('El id debe estar entre 1 y 800');
            }else{
                return originalMethod();
            }
        }

    }
}

function readOnly (isWritable:boolean = true):Function {
    return function ( target: any, propetyKey:string ){
        const descriptor: PropertyDescriptor = {
            get (){
                console.log(this);
                return 'Wagner'
            },
            set(this, val){
                Object.defineProperty(this, propetyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                })

            }
        }
        return descriptor;
    }
}


@bloquearPrototipo
@printToConsoleConditional(true)
export class Pokemon {

    @readOnly()
    public publicApi: string = 'https://pokeapi.co'

    constructor(
        public name: string
    ){ }
    
    @CheckValidPokemonId()
    savePokemonToDB(id: number) {
        console.log(`Pokemon Save in DB ${id}`);

    }
    
}