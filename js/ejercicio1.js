let auto = {
    color: "rojo",
    marca: "Audi",
    modelo: "A1 Sportback",
    año: 2022,
    puertas: 5,
    encendido: function () {
        encenderAuto = alert("Quieres encender el auto?");
        document.write("<p>El auto está encendido</p>");
    },
    apagado: function () {
        apagarAuto = alert("Quieres apagar el auto?");
        document.write("<p>El auto se apagó</p>");
    }
} 

console.log(auto);
auto.encendido ()