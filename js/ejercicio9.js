class Animal {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    emitirSonido() {
        console.log ("El animal emite un sonido");
    }
}

class Perro extends Animal {
    emitirSonido() {
        console.log(`Mi perro ladra`);
    }
}

class Gato extends Animal {
    emitirSonido() {
        console.log("Mi gato maúlla");
    }
}

const miPerro = new Perro ("Salvador", 4);
miPerro.emitirSonido();

const miGato = new Gato ("Atun", 4);
miGato.emitirSonido();