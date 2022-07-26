//Funcion para validar formulario de contacto
function validarFormulario(e) {
    e.preventDefault();
    if(e.target.children[0].value.includes("@")){
        alert("Nombre ingresado incorrecto")
        e.target.children[0].value = " ";
    }else if(e.target.children[1].value.includes("@")){
        alert("Apellido ingresado incorrecto")
        e.target.children[1].value = " ";
    }else if(!e.target.children[2].value.includes("@")){
        alert("Email ingresado incorrecto")
        e.target.children[2].value = " ";
    }else {         
        let padre = document.getElementById("correo")
        let mensaje = document.createElement("p");
        mensaje.innerHTML = "Datos ingresados correctamente";
        mensaje.className = "correcto";
        padre.innerHTML = ""; //evita que al apretar el boton aparezcan mas de un mensaje
        padre.append(mensaje)
        }    
}
//Traigo el formulario del html
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validarFormulario);