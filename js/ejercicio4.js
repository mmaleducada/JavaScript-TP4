class Producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
    
    imprimeDatos() {
        console.log(`Código: ${this.codigo}, Nombre: ${this.nombre}, Precio: ${this.precio}`);
    }
}

const productos = [new Producto(1, "Producto 1", 10.5), new Producto(2, "Producto 2", 20.5), new Producto(3, "Producto 3", 30.5),];

productos.forEach((producto) => producto.imprimeDatos());
