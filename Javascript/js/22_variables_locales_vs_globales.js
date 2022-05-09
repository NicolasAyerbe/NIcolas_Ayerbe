"use strict"

/* Variable local */
function asignarEdad(){
    let edad = 5 + 3 ;
    console.log(edad);
}
asignarEdad();

/* variable global */
var nombre = "David";
function mostrarNombre(){
    console.log("Nombre: " + nombre);
}
mostrarNombre();