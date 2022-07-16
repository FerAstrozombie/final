/* let padre = document.getElementById("correo");
let parrafo = document.createElement ("p");
parrafo.innerHTML = "<p id = 'parrafo'>Proceso de carga de datos</p>";
padre.append(parrafo); */


let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validarFormulario);
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
        padre.append(mensaje)
    
    }
}


/* let nombre = document.getElementById("nombre");
let mensaje = document.getElementById("parrafo")
nombre.addEventListener("input", () => {
    if(nombre.value.length === 10 ){
        mensaje.className = "advertencia" ;
    }
}) */