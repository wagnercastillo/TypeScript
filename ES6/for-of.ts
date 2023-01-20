(() => {

    type Avenger = {
        name: string,
        weapon: string,
    }

    const iroman: Avenger = {
        name: 'Iroman',
        weapon: 'Amorsuit'
    }
    const capAmerica: Avenger = {
        name: 'Capitán America',
        weapon: 'Escudo'
    }
    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    }

    const avengers:Avenger[] = [iroman, thor, capAmerica];

    for (const iterator of avengers) {
        console.log(iterator)
        
    }

})()