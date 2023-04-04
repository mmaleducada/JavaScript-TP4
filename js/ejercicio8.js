class Persona {
    constructor(nombre, edad, profesion){
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.`);
    }

    despedirse() {
        console.log(`Adiós, gracias por todo.`); 
    }
}

const persona1 = new Persona (prompt("Ingrese un nombre"), parseInt(prompt("Ingrese una edad")), prompt("ingrese una profesion"));

persona1.saludar();
persona1.despedirse();