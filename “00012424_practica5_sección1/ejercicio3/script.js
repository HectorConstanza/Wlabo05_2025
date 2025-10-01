const estanteria = {
    libros: [{
        titulo: "El Quijote",
        autor: "Miguel de Cervantes",
        anio: 1605
    },
    {
        titulo: "Cien Años de Soledad",
        autor: "Gabriel García Márquez",
        anio: 1967
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        anio: 1949
    },
    {
        titulo: "La Sombra del Viento",
        autor: "Carlos Ruiz Zafón",
        anio: 2001
    },
    {
        titulo: "Donde Cantan los Pájaros",
        autor: "Evie Wyld",
        anio: 2011
    },
    {
        titulo: "Sapiens: De Animales a Dioses",
        autor: "Yuval Noah Harari",
        anio: 2011
    }],
    log() {
        const { libros } = this;
        let resultado = "";
        for (const libro of libros) {
            const prefijo = libro.leido ? "Ya has  " : "No has";
            resultado += `${prefijo} leído "${libro.titulo}" de ${libro.autor} (${libro.anio})\n`;
        }
        console.log(resultado);

    },
    sugerencias() {
        const librosNoLeidos = this.libros.filter(libro => !libro.leido);
        const indiceAleatorio = Math.floor(Math.random() * librosNoLeidos.length);
        const elementoramdon = librosNoLeidos[indiceAleatorio];
        console.log(`Te sugerimos leer "${elementoramdon.titulo}" de ${elementoramdon.autor} (${elementoramdon.anio})`); 
    }
}


console.log("Estado inicial de la estantería:");
estanteria.log();
estanteria.libros[0].leido = true;
estanteria.libros[2].leido = true;
estanteria.libros[5].leido = true;
console.log("Estado actualizado de la estantería:");
estanteria.log();
estanteria.sugerencias();