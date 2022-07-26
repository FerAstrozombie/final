let usuario;
let usuarioStorage = sessionStorage.getItem("usuario");

//Validamos eñ usuario
if (usuarioStorage) {
    let usuario = usuarioStorage;
    let padre = document.getElementById("nombre")
    let mensaje = document.createElement("p");
    mensaje.innerHTML = `Bienvenid@ ${usuarioStorage}`;
    mensaje.className = "mensajeBinvenida";
    padre.append(mensaje)
    
} else {
    usuario = prompt("Ingrese su nombre");
    sessionStorage.setItem("usuario", usuario);
    let padre = document.getElementById("nombre")
    let mensaje = document.createElement("p");
    mensaje.innerHTML = `Bienvenid@ ${usuario}`;
    mensaje.className = "mensajeBinvenida";
    padre.append(mensaje)
}

//traemos el boton de cerrar cesion y agregamos el reseteo
let botonCesion = document.getElementById("modificadorBoton2");
botonCesion.addEventListener("click", () => sessionStorage.clear());
botonCesion.addEventListener("click", () => nombre.remove())



