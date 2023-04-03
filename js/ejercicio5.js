class Persona {
    constructor(nombre, edad, sexo, peso, altura, anioNacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioNacimiento = anioNacimiento;
        this.DNI = this.generaDNI();
    }
    // generar un número aleatorio de 8 cifras
    generaDNI() {
        return Math.floor(Math.random() * 90000000) + 10000000;
    }
    // mostrar a qué generación pertenece la persona creada y su rasgo característico
    mostrarGeneracion() {
    let generacion, rasgo;
    const anioActual = new Date().getFullYear();
    const edad = anioActual - this.anioNacimiento;

    if (edad >= 16 && edad <= 28) {
        generacion = "Generación Z";
        rasgo = "irreverencia";
    } else if (edad >= 29 && edad <= 42) {
        generacion = "Generación Y (millennials)";
        rasgo = "frustración";
    } else if (edad >= 43 && edad <= 54) {
        generacion = "Generación X";
        rasgo = "obsesión por el éxito";
    } else if (edad >= 55 && edad <= 74) {
        generacion = "Baby Boom";
        rasgo = "ambición";
    } else {
        generacion = "Silent Generation";
        rasgo = "austeridad";
    }

    console.log(`La persona pertenece a la ${generacion} y su rasgo característico es ${rasgo}`);
}
// indicar si la persona es mayor de edad
esMayorDeEdad() {
    if (this.edad >= 18) {
        console.log(`${this.nombre} es mayor de edad`);
    } else {
        console.log(`${this.nombre} no es mayor de edad`);
    }
}

// mostrar toda la información de la persona
mostrarDatos() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Edad: ${this.edad}`);
    console.log(`Sexo: ${this.sexo}`);
    console.log(`Peso: ${this.peso}`);
    console.log(`Altura: ${this.altura}`);
    console.log(`Año de nacimiento: ${this.anioNacimiento}`);
    console.log(`DNI: ${this.DNI}`);
}
}

const persona1 = new Persona(prompt("Ingrese un nombre"), parseInt(prompt("Ingrese una edad")), prompt("Ingrese el sexo"), parseInt(prompt("Ingrese el peso")), parseFloat(prompt("Ingrese la altura")), parseInt(prompt("Ingrese año de nacimiento")));

persona1.mostrarDatos();

persona1.mostrarGeneracion();

persona1.esMayorDeEdad();
