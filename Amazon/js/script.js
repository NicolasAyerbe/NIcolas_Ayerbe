"use strict"

let cantidadProductosGlobal = document.getElementById("cantidadProductos").innerHTML;

function sumar() {
    if (cantidadProductosGlobal < 10) {
    cantidadProductosGlobal = Number(cantidadProductosGlobal) + 1;
    document.getElementById("cantidadProductos").innerHTML = cantidadProductosGlobal;
    modificarTotal();
    }
}
function restar() {
    if (cantidadProductosGlobal > 0){
    cantidadProductosGlobal = Number(cantidadProductosGlobal) - 1;
    document.getElementById("cantidadProductos").innerHTML = cantidadProductosGlobal;
    modificarTotal();
    }
}
function modificarTotal() {
    let cantidadProductos = document.getElementById("cantidadProductos").innerHTML;
    if (cantidadProductos == "1") {
        document.getElementById("cantidadProductos").innerHTML;
        
    }
    else {
        document.getElementById("cantidadProductos").innerHTML = cantidadProductos;
    }
    mostrarTotal();
}
function mostrarTotal() {
    
    let valorUnitario = document.getElementById("valorUnitario").innerHTML;
    let valorSubtotal = Number(valorUnitario) * Number(cantidadProductosGlobal);
    document.getElementById("valorSubtotal").innerHTML = valorSubtotal;
}
function realizar() {
    alert ("compra realizada");
}
function eliminar() {
    alert ("Compra cancelada");
}
