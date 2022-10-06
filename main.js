/* Desafio 1 */

class Usuario {
    constructor (nombre, apellidos, libros, mascotas) {
        this.nombre = nombre
        this.apellidos = apellidos
        this.libros = libros
        this.mascotas =mascotas
    }


    getFullName() {
        return console.log(`Nombres y apellidos: ${this.nombre} ${this.apellidos}` );
    }

    addMascotas(mascota) {
       
        
        this.mascotas.push(mascota);
        return console.log(this.mascotas);
    }

    countMascotas() {
        let numberMascotas = this.mascotas.length;
        return console.log(numberMascotas);
    }

    addBook(nombre, autor){
        
        
        let newBook = {nombre, autor};
        this.libros.push(newBook);
        return console.log(this.libros);
    }

    getBookNames() {
        let namesBooks = [];

        this.libros.forEach(e=>namesBooks.push(e.nombre));

              return console.log(namesBooks);
    }


}




const nuevoUsuario = new Usuario("Alexander Paul","Castañeda Salinas", [{nombre: "Cien años de soledad", autor: "Gabriel Garcia Marquez"}], ["Sasha"]);

nuevoUsuario.getFullName();

nuevoUsuario.addMascotas("Misha");

nuevoUsuario.countMascotas();

nuevoUsuario.addBook("1984","George Orwell");

nuevoUsuario.getBookNames();
