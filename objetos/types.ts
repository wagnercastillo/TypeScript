(() => {
    
    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    }
    
    let flash:Hero = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super Velocidad", "Viajar en el Tiempo"],
    };

    let superman:Hero = {
        name: "Bruce Banner",
        powers: ["Super Fuerza", "Destrucción"],
        getName() {
            return this.name;
        },
    };
})();
