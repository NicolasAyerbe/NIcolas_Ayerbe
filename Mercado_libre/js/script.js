"use strict"

/* class Automovil {
    constructor(marca,modelo,anyo) {
        this.marca = marca;
        this.modelo = modelo;
        this.anyo = anyo;
    }
}
let auto1 = new Automovil("Mazda", "4", 2016);
let auto2 = new Automovil("Mazda", "5", 2017);
let auto3 = new Automovil("Mazda", "6", 2018);
let auto4 = new Automovil("Mazda", "7", 2020);
let auto5 = new Automovil("toyota", "corolla", 2021);

alert(auto.marca + " " + auto.modelo);

let mostrarVehiculo = document.getElementById("autos").value;
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
}); */
class auto {
    constructor(marca,  version, anyo, precio,imagen) {
        this.marca = marca;
        this.version = version;
        this.anyo = anyo;
        this.precio = precio;
        this.imagen = imagen;
    }
}

let auto1 = new auto("Mazda 3", "2.8", 2019, 56000000, "img/carro5.jpg");
let auto2 = new auto("Mazda 4", "2.6", 2017, 19000000, "img/carro1.jpg");
let auto3 = new auto("Mada 5", "3.0", 2020, 36000000, "img/carro2.jpg");
let auto4 = new auto("Mazda 6", "3.1", 2021, 39000000, "img/carro3.jpg");
let auto5 = new auto("Toyota", "tundra", 2018, 15000000, "img/carro6.jpg");
let auto6 = new auto("Toyota 2", "prado", 2022, 12000000, "img/carro4.jpg");

function mostrarauto(auto) {
    let contenedorPrincipal = document.getElementById("main-content");
    let contenedorImg = document.createElement("div");
    contenedorPrincipal.appendChild(contenedorImg);
    contenedorImg.setAttribute("class", "contentImg");

    let imgAuto = document.createElement("img");
    imgAuto.setAttribute("src", auto.imagen);
    imgAuto.setAttribute("class", "estilo-img");
    contenedorImg.appendChild(imgAuto);

    let valorAuto = document.createElement("label");

    let precioFormat = new Intl.NumberFormat('es-ES', {}).format(auto.precio);
    
    
    let textovalorAuto = document.createTextNode("$" + precioFormat);
    valorAuto.appendChild(textovalorAuto);
    valorAuto.setAttribute("class", "precio");
    contenedorImg.appendChild(valorAuto);

    let descripcionauto = document.createElement("label");
    let textoDescripcionauto = document.createTextNode(auto.marca + " " + auto.version);
    descripcionauto.appendChild(textoDescripcionauto);
    descripcionauto.setAttribute("class", "descripcion");
    contenedorImg.appendChild(descripcionauto);


    /* let contenedorSeparador = document.createElement("div"); */
    let anyoauto = document.createElement("label");
    let textoAnyoauto = document.createTextNode(auto.anyo);
    anyoauto.appendChild(textoAnyoauto);

    
    
}

window.addEventListener("keydown", function(event) {
    let busqueda = document.getElementById("textoBusqueda").value;
    if(event.key == "Enter") {
        limpiarVentana();
        if (busqueda == "Mazda") {
            mostrarauto(auto1);
            mostrarauto(auto2);
            mostrarauto(auto3);
            mostrarauto(auto4);
        }
        else if (busqueda == "Toyota") {
            mostrarauto(auto5);
            mostrarauto(auto6);
        }
        else {

        this.alert("No se han encontrado coincidencias con la busqueda.");
        }
    }
});
function limpiarVentana() {
    document.getElementById("main-content").innerHTML = "";
}
