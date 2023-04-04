class Avion {
    constructor(nombre, capacidad, destino) {
        this.nombre = nombre;
        this.capacidad = capacidad;
        this.destino = destino;
        this.pasajeros = [];
    }

    abordar(pasajero) {
        if (this.pasajeros.length < this.capacidad) {
            this.pasajeros.push(pasajero);
            console.log(`${pasajero} ha abordado el avión ${this.nombre}.`);
        } else {
            console.log(`Lo siento, el avión ${this.nombre} está lleno.`);
        }
    }
}

class Aeropuerto {
    constructor(nombreAeropuerto) {
        this.nombreAeropuerto = nombreAeropuerto;
        this.listaAviones = [];
    }

    agregarAvion(avion) {
        this.listaAviones.push(avion);
        console.log(`El avión ${avion.nombre} ha sido agregado al aeropuerto ${this.nombreAeropuerto}.`);
    }

    buscarAvion(nombre) {
        for (let avion of this.listaAviones) {
            if (avion.nombre === nombre) {
                console.log(`Avión encontrado: ${avion.nombre}, con destino a ${avion.destino}.`);
                return avion;
            }
        }
        console.log(`No se encontró ningún avión con el nombre ${nombre}.`);
        return null;
    }
}


const aeropuertoInternacional = new Aeropuerto("Aeropuerto Internacional");


const avion1 = new Avion("Avión 1", 50, "Nueva York");
const avion2 = new Avion("Avión 2", 75, "Tokio");
const avion3 = new Avion("Avión 3", 100, "Londres");


aeropuertoInternacional.agregarAvion(avion1);
aeropuertoInternacional.agregarAvion(avion2);
aeropuertoInternacional.agregarAvion(avion3);


const avionEncontrado = aeropuertoInternacional.buscarAvion("Avión 2");
if (avionEncontrado) {
    avionEncontrado.abordar("Malena de Arriba");
    avionEncontrado.abordar("Santiago Rusiñol");
    avionEncontrado.abordar("Gabriela Avila");
}
