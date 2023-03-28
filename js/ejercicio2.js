let cuenta = {
    titular: "Alex",
    saldo: 0,
    ingresar (cantidad) {
        this.saldo += cantidad;
        console.log (`Se ingresó $${cantidad} a la cuenta`);
    },
    extraer (cantidad) {
        if (cantidad <= this.saldo) {
            console.log (`Se extrajo $${cantidad} de la cuenta`);
            this.saldo -= cantidad;
        } else {
            console.log("No hay suficiente saldo para extraer el monto solicitado");
        }
    },
    informar () {
        console.log (`Titular: ${this.titular} | Saldo $${this.saldo}`);
    }
}


cuenta.informar ();

cuenta.ingresar (560);

cuenta.informar();

cuenta.extraer(450);

cuenta.informar();

cuenta.extraer(150);