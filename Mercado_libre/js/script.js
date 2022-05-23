"use strict"

class Automovil {
    constructor(marca,modelo,anyo) {
        this.marca = marca;
        this.modelo = modelo;
        this.anyo = anyo;
    }
}

let auto = new Automovil();

auto.anyo = 2021;
auto.marca = "Mazda";
auto.modelo = "3 prime";

let buscarAutos = document.getElementById("buscarAutos");
buscarAutos.addEventListener("click", function() {
    maquetacion();
    let infoAutomovil = auto.marca + " " + auto.modelo + " Modelo " + auto.anyo;
    document.getElementById("infoAutos").innerHTML = infoAutomovil;
});

function maquetacion() {
    let mainContent = document.getElementById("mainContent");
    let marca = document.createElement("label");
    let textoMarca = document.createTextNode("Hola soy un traqueto");
    marca.appendChild(textoMarca);
    mainContent.appendChild(marca);
}