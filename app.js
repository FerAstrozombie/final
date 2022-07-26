import { productos } from "./productos.js"
import { carritoIndex } from "./carrito.js"

const mostrarProductos = (productos) =>{
    
    const contenedorProductos = document.getElementById("productos-contenedor")
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("cambioTienda");
        div.innerHTML += `<div data-aos="flip-left" class="cambioTienda"">                        
                            <div class= "ordenTienda">
                                <h5 class= "card-title">${producto.nombre}</h5>
                                <img src= ${producto.img}" class= "img-fluid tamañoImagen" alt="...">
                                <p class= "card-text">Descripcion: ${producto.nombre}</p>
                                <p class= "card-text">Precio: $${producto.precio}</p>
                                <button id= "modificadorBoton2"${producto.id}>Comprar</button>
                            </div>
                        </div>
                        `
    contenedorProductos.appendChild(div);
    const boton = document.getElementById("modificadorBoton2 ${producto.id}")
    boton.addEventListener('click', ()=>{
        carritoIndex(producto.id)
        alert(`Se agrego ${producto.nombre}`)
    })

    })

}

mostrarProductos(productos);