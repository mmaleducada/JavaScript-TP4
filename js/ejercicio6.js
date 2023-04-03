class Libro {
    constructor(ISBN, titulo, autor, numPaginas) {
      this._ISBN = ISBN;
      this._titulo = titulo;
      this._autor = autor;
      this._numPaginas = numPaginas;
    }
  
    // Métodos get y set
    get ISBN() {
      return this._ISBN;
    }
    set ISBN(newISBN) {
      this._ISBN = newISBN;
    }
    get titulo() {
      return this._titulo;
    }
    set titulo(newTitulo) {
      this._titulo = newTitulo;
    }
    get autor() {
      return this._autor;
    }
    set autor(newAutor) {
      this._autor = newAutor;
    }
    get numPaginas() {
      return this._numPaginas;
    }
    set numPaginas(newNumPaginas) {
      this._numPaginas = newNumPaginas;
    }
  
    // Método para mostrar la información del libro
    mostrarLibro() {
      console.log(`El libro ${this._titulo} con ISBN ${this._ISBN} creado por el autor ${this._autor} tiene ${this._numPaginas} páginas.`);
    }
  }
  
  // Creación de dos objetos Libro
  const libro1 = new Libro(123456, "La isla del tesoro", "Robert Louis Stevenson", 304);
  const libro2 = new Libro(789012, "El Quijote", "Miguel de Cervantes", 863);
  
  // Mostrar la información de los libros
  libro1.mostrarLibro();
  libro2.mostrarLibro();
  
  // Comparar el número de páginas de los dos libros
  if (libro1.numPaginas > libro2.numPaginas) {
    console.log(`El libro ${libro1.titulo} tiene más páginas que el libro ${libro2.titulo}`);
  } else if (libro2.numPaginas > libro1.numPaginas) {
    console.log(`El libro ${libro2.titulo} tiene más páginas que el libro ${libro1.titulo}`);
  } else {
    console.log("Ambos libros tienen el mismo número de páginas.");
  }
  