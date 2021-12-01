/* */
var ciudad1 = "PiTaLiTo";
ciudad1 = ciudad1.toUpperCase();
console.log(ciudad1);

/* */

ciudad1 = ciudad1.toLocaleLowerCase();
console.log(ciudad1);

/* */
ciudad1 = ciudad1[0].toUpperCase() + ciudad1.slice(1);
console.log(ciudad1);

/* */
var anyo2 = "2019";
var auxConsecutivo = anyo2.slice(2,4);

/* */
var tematica = "Programacion Orientada a Objetos";
console.log("Longitud: " + tematica.length);

/* */
var nombres = "Jesus David";
for (i = 0; i < nombres.length; i++){
    if (nombres.slice(i, (i + 2)) === "  "){
        console.log("La cadena tiene espacios dobles");
        break;
    }
}

/* */
var hobby = "Programar en java";
var newLang = "Python";
for (i = 0; i < hobby.length; i++) {
    if (hobby.slice(i, i + 4) === "Java") {
        hobby = hobby.slice(0, i);
    }
}
console.log(hobby + newLang);


/* */
console.log(hobby + newLang);
var hobby2 = "Programar en Javascript a tope";
var firtChar = hobby2.indexOf("javascript")
if (firtChar !== -1) {
    console.log(firtchar);
    hobby2 = hobby2.slice(0,firstChar) + "php" + hobby2.slice(firstChar + 10);
    console.log(hobby2);
}
var primerNombre = "Jesus";
var primerCaracter = primerNombre.charAt(0);
console.log(primerCaracter);


/* */
 
var primerNombre = "Jesus";
var primerCaracter = primerNombre.charAt(primerNombre.length - 1);
console.log(primerCaracter);

/* */

var frase = "Hola Mundo!"
for (var i = 0; i < frase.length; i++) {
    if (frase.charAt(i) === "!") {
        console.log("La cadena tiene signos de admiracion.");
    }
}

/* */

var ciudad = "valle de Pitalito";
ciudad = ciudad.replace("pitalito", "Laboyos");
console.log(ciudad);

