"use strict"
window.addEventListener("keydown", function(event) {
    let busqueda = document.getElementById("textoBusqueda").value;
    if(event.key== "Enter") {
        limpiarVentana();
        if (busqueda == "Mazda 3") {
            mostrarVehiculo(auto2);
            mostrarVehiculo(auto1);
            mostrarVehiculo(auto3);
            mostrarVehiculo(auto4);
        }
        else if (busqueda == "toyota corolla") {
            mostrarVehiculo(auto5);
        }
        else {
            this.alert("No se han encontrado coincidencias.");
        }
    }
});