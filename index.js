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
