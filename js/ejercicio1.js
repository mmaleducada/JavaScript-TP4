let auto = {
    color: "rojo",
    marca: "Audi",
    modelo: "A1 Sportback",
    año: 2022,
    puertas: 5,
    encendido: function () {
        document.write("<p>El auto está encendido</p>");
    },
    apagado: function () {
        document.write("<p>Apagado</p>");
    }
} 

console.log(auto);
auto.encendido ()