class rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }
    
    getAncho(ancho) {
        return this.ancho;
    }
    
    setAncho(ancho) {
        this.ancho = ancho;
    }
    
    getAlto(alto) {
        return this.alto;
    }
    
    setAlto (alto) {
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
console.log(rectangulo1.setAncho(7));
console.log(rectangulo1.setAlto(12));
console.log(rectangulo1.mostrarDetalles());