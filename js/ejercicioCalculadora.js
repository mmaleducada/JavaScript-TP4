let calculadora = {
    sumar: function (num1, num2) {
        return num1 + num2;
    },
    restar: function (num1, num2) {
        return num1 - num2;
    },
    multiplicar: function (num1, num2) {
        return num1 * num2;
    },
    dividir: function (num1, num2) {
        return num1 / num2;
    }
};

console.log("Suma: " + calculadora.sumar(5, 3));
console.log("Suma: " + calculadora.sumar(10, -2));
console.log("Resta: " + calculadora.restar(8, 3));
console.log("Resta: " + calculadora.restar(15, -5));
console.log("Multiplicación: " + calculadora.multiplicar(2, 6));
console.log("Multiplicación: " + calculadora.multiplicar(-4, 3));
console.log("División: " + calculadora.dividir(10, 2));
console.log("División: " + calculadora.dividir(-15, 3));
