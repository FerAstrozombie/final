//Calculadora de envios

/* function calculadoraEnvios(zona){

    if(zona === "zona norte"){
      envio = 500;
    }
    
    if(zona === "zona oeste"){
      envio = 600;
    }
    
    if(zona === "zona este"){
      envio = 700;
    }
    
    if(zona === "zona sur"){
      envio = 700;
    }

} */

class Producto{
    constructor(img, nombre, precio){
        this.img = img;
        this.nombre = nombre;
        this.precio = precio;
        this.vendido = false;
    }

    vender(){
        this.vendido = true;
    }
}

let productos = [];

productos.push(new Producto("http://127.0.0.1:5500/imagenes/goku%201.jpg", "REMERA GOKU 1", 1200));
productos.push(new Producto("http://127.0.0.1:5500/imagenes/goku%202.jpg", "REMERA GOKU 2", 1200));
productos.push(new Producto("http://127.0.0.1:5500/imagenes/goku%203.jpg", "REMERA GOKU 3", 1200));
productos.push(new Producto("http://127.0.0.1:5500/imagenes/goku%203.jpg", "REMERA GOKU 3", 1200));
productos.push(new Producto("http://127.0.0.1:5500/imagenes/goku%204.jpg", "REMERA GOKU 4", 1200));
productos.push(new Producto("http://127.0.0.1:5500/imagenes/goku%206.jpg", "REMERA GOKU 5", 1200));
productos.push(new Producto("http://127.0.0.1:5500/imagenes/goku%207.jpg", "REMERA GOKU 6", 1200));
productos.push(new Producto("http://127.0.0.1:5500/imagenes/breacking%20bad.jpg", "REMERA BREACKING BAD 1", 1300));
productos.push(new Producto("http://127.0.0.1:5500/imagenes/breacking%20bad%202.jpg", "REMERA BREACKING BAD 2", 1300));
productos.push(new Producto("http://127.0.0.1:5500/imagenes/breacking%20bad%203.jpg", "REMERA BREACKING BAD 3", 1300));
productos.push(new Producto("http://127.0.0.1:5500/imagenes/mario%20bross%201.jpg", "REMERA MARIO BROSS 1", 1250));
productos.push(new Producto("http://127.0.0.1:5500/imagenes/mario%20bross%202.jpg", "REMERA MARIO BROSS 2", 1250));
productos.push(new Producto("http://127.0.0.1:5500/imagenes/mario%20bross%203.jpg", "REMERA MARIO BROSS 3", 1250));
productos.push(new Producto("http://127.0.0.1:5500/imagenes/mario%20bross%204.jpg", "REMERA MARIO BROSS 4", 1250));
productos.push(new Producto("http://127.0.0.1:5500/imagenes/volver%20al%20futuro%201.jpg", "REMERA VOLVER AL FUTURO 1", 1350));
productos.push(new Producto("http://127.0.0.1:5500/imagenes/volver%20al%20futuro%202.jpg", "REMERA VOLVER AL FUTURO 1", 1350));

  // con el if se cambia el estado de vendido de false a true
for(const item of productos){
    if(item.nombre === "Remera Goku 1"){
        item.vender()
    }
}

console.log(productos);

//Precio de la remera con iva del 21% y cupon de descuento

const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva   = x => x * 0.21;


/* let precioProducto = parseInt(prompt("Ingrese el precio de la remera elegida"));
let descuento = parseInt(prompt("Ingrese valor del cupon de descuento adquirido")); 
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
alert(`El precio con I.V.A. y cupon de descuento es de $${nuevoPrecio}`); 
let zona = prompt("Ingrese zona de residencia (zona oeste, norte, sur, este)").toLowerCase();
calculadoraEnvios(zona);
alert(`el costo de envio es de $${envio}`);
let costoFinal = envio + nuevoPrecio;
alert(`El costo de la remera con el envio es $${costoFinal}`); */

const carrito = [];

let boton = document.getElementById("modificadorBoton");
boton.addEventListener("click" , respuestaClick);
function respuestaClick() {
  carrito.push (productos[8]);
}

console.log(carrito);



