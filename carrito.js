import { productos } from "./productos.js";

let carritoDeCompras = [];

export const carritoIndex = (productoId) => {

    const contenedorCarrito = document.getElementById("carrito-contenedor")

    const renderProductosCarrito = () => {

        let producto = productos.find(producto => producto.id == productoId);
        carritoDeCompras.push(producto);

        producto.cantidad = 1;

        let div = document.createElement("div")

        div.classList.add("productoCarrito")
        div.innerHTML = `<p>${productos.nombre}</p>
                            <p>Precio: $${producto.precio}</p>
                            <p id= "cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                            <button id= "eliminar${producto.id}" class= "boton-eliminar"><i class= "fa-solid fa-trash-can"></i></button>
                        `

        contenedorCarrito.appendChild(div);
    }
    renderProductosCarrito();
}