//Precio de la remera con iva del 21% y cupon de descuento

const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva   = x => x * 0.21;

let precioProducto = parseInt(prompt("Ingrese el precio de la remera elegida"));
let descuento = parseInt(prompt("Ingrese valor del cupon de descuento adquirido")); 

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);

alert(nuevoPrecio); 

//Calculadora de envios

function calculadoraEnvios(zona){

    switch(zona){

      case "zona norte":
        return "$500";      
      case "zona sur":
        return "$400";
      case "zona oeste":
        return "$450";
      case "zona este":
        return "$900";
        
      default:
        return "Zona no incluida para envios";
    }

}
let zona = prompt("Ingrese zona de residencia (zona oeste, norte, sur, este)").toLowerCase();
alert(calculadoraEnvios(zona)); 

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

productos.push(new Producto("http://127.0.0.1:5500/imagenes/goku%201.jpg", "Remera Goku 1", 1200));
productos.push(new Producto("http://127.0.0.1:5500/imagenes/goku%202.jpg", "Remera Goku 2", 1200));
productos.push(new Producto("http://127.0.0.1:5500/imagenes/goku%203.jpg", "Remera Goku 3", 1200));
productos.push(new Producto("http://127.0.0.1:5500/imagenes/goku%203.jpg", "Remera Goku 3", 1200));
productos.push(new Producto("http://127.0.0.1:5500/imagenes/goku%204.jpg", "Remera Goku 4", 1200));
productos.push(new Producto("http://127.0.0.1:5500/imagenes/goku%206.jpg", "Remera Goku 5", 1200));
productos.push(new Producto("http://127.0.0.1:5500/imagenes/goku%207.jpg", "Remera Goku 6", 1200));
productos.push(new Producto("http://127.0.0.1:5500/imagenes/breacking%20bad.jpg", "Remera Breacking bad 1", 1300));
productos.push(new Producto("http://127.0.0.1:5500/imagenes/breacking%20bad%202.jpg", "Remera Breacking bad 2", 1300));
productos.push(new Producto("http://127.0.0.1:5500/imagenes/breacking%20bad%203.jpg", "Remera Breacking bad 3", 1300));
productos.push(new Producto("http://127.0.0.1:5500/imagenes/mario%20bross%201.jpg", "Remera Mario bross 1", 1250));
productos.push(new Producto("http://127.0.0.1:5500/imagenes/mario%20bross%202.jpg", "Remera Mario bross 2", 1250));
productos.push(new Producto("http://127.0.0.1:5500/imagenes/mario%20bross%203.jpg", "Remera Mario bross 3", 1250));
productos.push(new Producto("http://127.0.0.1:5500/imagenes/mario%20bross%204.jpg", "Remera Mario bross 4", 1250));
productos.push(new Producto("http://127.0.0.1:5500/imagenes/volver%20al%20futuro%201.jpg", "Remera Volver al futuro 1", 1350));
productos.push(new Producto("http://127.0.0.1:5500/imagenes/volver%20al%20futuro%202.jpg", "Remera Volver al futuro 1", 1350));

// con el if se cambia el estado de vendido de false a true
for(const item of productos){
  if(item.nombre === "Remera Goku 1"){
      item.vender()
  }
}

console.log(productos);
