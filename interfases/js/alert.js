
"use strict"

function guardarInfo() {
    let numeroDocumento = document.getElementById("numeroDocumento").value;
    if (numeroDocumento == "") {
        alert("Por favor, ingrese el numero de documento");
        return false;
    }
    if (document.getElementById("nombreUsuario").value == ""){
        alert("por favor, ingrese el nombre del usuario");
        return false;
    }
    if (document.getElementById("apellidoUsuario").value == ""){
        alert("por favor, ingrese el apellido del usuario");
        return false;
    }
    alert("informacion guardada con exito");
    limpiarformulario();
    return true;
}
function limpiarformulario() {
     document.getElementById("numeroDocumento").value = "";
     document.getElementById("nombreUsuario").value = "";
     document.getElementById("apellidoUsuario").value = "";
}

