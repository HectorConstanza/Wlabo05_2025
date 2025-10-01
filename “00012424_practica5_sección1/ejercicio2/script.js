const carrito = {
    productos: [
        { nombre: "Manzanas", cantidad: 3, precioUnitario: 1.5 },
        { nombre: "Bananas", cantidad: 2, precioUnitario: 0.75 },
    ],
    get total() {
        let precio = 0;
        for (let i = 0; i < this.productos.length; i++) {
            precio += this.productos[i].cantidad * this.productos[i].precioUnitario;
        }
        return precio;
    }
};
console.log("Total a pagar:", carrito.total);
