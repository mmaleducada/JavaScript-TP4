function generarMovimiento() {
    let numAleatorio = Math.floor(Math.random() * 3);

    switch (numAleatorio) {
        case 0:
            return "piedra";
        case 1:
            return "papel";
        case 2:
            return "tijera";
    }
}

function determinarGanador(movimientoUsuario, movimientoPC) {
    if (movimientoUsuario === movimientoPC) {
        return "empate";
    } else if ((movimientoUsuario === "piedra" && movimientoPC === "tijera") || (movimientoUsuario === "papel" && movimientoPC === "piedra") || (movimientoUsuario === "tijera" && movimientoPC === "papel")) {
        return "usuario";
    } else {
        return "pc";
    }
}

function jugar() {
    let movimientoUsuario = prompt("Ingrese su movimiento: piedra, papel o tijera").toLowerCase();

    while (movimientoUsuario !== "piedra" && movimientoUsuario !== "papel" && movimientoUsuario !== "tijera") {
        movimientoUsuario = prompt("Movimiento inválido. Por favor, ingrese piedra, papel o tijera").toLowerCase();
    }

    let movimientoPC = generarMovimiento();

    let resultado = determinarGanador(movimientoUsuario, movimientoPC);

    if (resultado === "empate") {
        console.log("Empate!");
    } else if (resultado === "usuario") {
        console.log(`¡Ganaste! Elegiste ${movimientoUsuario} y la PC eligió ${movimientoPC}`);
    } else {
        console.log(`Perdiste! Elegiste ${movimientoUsuario} y la PC eligió ${movimientoPC}`);
    }

    let jugarDeNuevo = confirm("¿Quieres jugar de nuevo?");

    if (jugarDeNuevo) {
        jugar();
    }
}

jugar();
