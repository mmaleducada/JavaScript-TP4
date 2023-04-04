let persona = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 25,
    esEstudiante: true,
    hobbies: ["leer", "ver películas", "cocinar"],

    presentar: function () {
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}, tengo ${this.edad} años y mis hobbies son: ${this.hobbies.join(", ")}.`);
    },

    agregarHobbie: function (hobbie) {
        this.hobbies.push(hobbie);
        console.log(`Se ha agregado el hobbie ${hobbie} a la lista.`);
    },

    borrarHobbie: function (hobbie) {
        let indice = this.hobbies.indexOf(hobbie);
        if (indice === -1) {
            console.log(`El hobbie ${hobbie} no está en la lista.`);
        } else {
            this.hobbies.splice(indice, 1);
            console.log(`Se ha eliminado el hobbie ${hobbie} de la lista.`);
        }
    },

    buscarHobbie: function (hobbie) {
        let indice = this.hobbies.indexOf(hobbie);
        if (indice === -1) {
            console.log(`No tengo el hobbie ${hobbie}.`);
        } else {
            console.log(`Sí tengo el hobbie ${hobbie}.`);
        }
    }
};

console.log(`Los hobbies de ${persona.nombre} son: ${persona.hobbies.join(", ")}.`);

persona.buscarHobbie("viajar");

persona.agregarHobbie("bailar");

persona.borrarHobbie(persona.hobbies[0]);

persona.presentar();
