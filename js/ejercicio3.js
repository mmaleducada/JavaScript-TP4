class rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }
    
    mostrarAncho(ancho) {
        return this.ancho;
    }
    
    newAncho(ancho) {
        this.ancho = ancho;
    }
    
    mostrarAlto(alto) {
        return this.alto;
    }
    
    newAlto (alto) {
        this.alto = alto;
    }
    
    calcularPerimetro () {
        return 2 * (this.ancho + this.alto);
    }
    
    calcularArea () {
        return this.ancho * this.alto;
    }
    
    mostrarDetalles () {
        console.log (`Ancho: ${this.ancho}`);
        console.log (`Alto: ${this.alto}`);
        console.log (`Perimetro: ${this.calcularPerimetro}`);
        console.log (`Area: ${this.calcularArea}`);
    }    
}


// PROBANDO

const rectangulo1 = new rectangulo (5,10);
console.log (rectangulo1.mostrarDetalles());
console.log(rectangulo1.newAncho(7));
console.log(rectangulo1.newAlto(12));
console.log(rectangulo1.mostrarDetalles());