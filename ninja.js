class Ninja {
    constructor(nombre, salud) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName() {
        console.log(`El nombre del ninja es ${this.nombre}.`);
    }

    showStats() {
        console.log(
            `Nombre: ${this.nombre} Salud: ${this.salud} Velicidad: ${this.velocidad} Fuerza: ${this.fuerza}`
        );
    }

    drinkSake() {
        this.salud += 10;
    }
}
const ninja1 = new Ninja("Oscar", 10);
console.log(ninja1);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
console.log(ninja1);  