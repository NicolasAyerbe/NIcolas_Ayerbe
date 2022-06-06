var personas = 35;

if (personas <= 20){
    console.log("El salon disponible para la clase es el ambiente 1")
}
else if (personas>20 && personas<=40){
    console.log("El salon disponible para la clase es el ambiente 2")
}
else if (personas>40 && personas<=100){
    console.log("El salon disponible para la clase es el bioauditorio")
}
else if (personas>100){
    console.log("No hay ambientes disponibles para la clase")
}
else {
    console.log("ha surgido un Error")
}


/*condicional anidado */

var edadusuario = 71;
var aerolineausuario = "latam";
var destinousuario = "san andres";
var valortiquete = 250000;
var descuento = .10;
var valordescuento = (valortiquete * .10);

if (edadusuario <= 10 || edadusuario >= 70) {
    valortiquete = (valortiquete -(valortiquete * descuento));
    if (destinousuario === "san andres"){
        valortiquete = (valortiquete - (valortiquete * descuento));
      if (aerolineausuario === "latam"){
          valortiquete = (valortiquete -valordescuento);

       }
    }  
}
console.log("valor del tiquete: $ " + valortiquete);

