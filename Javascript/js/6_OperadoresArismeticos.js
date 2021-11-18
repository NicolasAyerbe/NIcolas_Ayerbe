"use strict"

/* Hallar el total (suma) */

console.log("===== Suma =====");
var producto1 = 2560;
var producto2 = 3520;
var producto3 = 4650;
var totalSuma = producto1 + producto2 + producto3;
console.log("la suma de los productos es : $" + totalSuma);

/* Hallar el descuento (Resta) */
console.log("===== Resta =====");
var producto4 = 15600;
var descuento = 3000;
var totalConDescuento = producto4 - descuento;
console.log("el valor total con el descuento es: $" + totalConDescuento)

/* Hallar el descuento (Multiplicacion) */
console.log("===== Multiplicacion =====");
var producto5 = 2420;
var cantidadProductos = 5;
var totalMultiplicacion = producto4 + cantidadProductos ;
console.log("El valor total de los 5 productos es: $" + totalMultiplicacion)

/* halar el promedio de calificaciones */
console.log("===== Division =====");
var calificacion1 = 9.5;
var calificacion2 = 8.2;
var calificacion3 = 7.9;
var totalCalificaciones = 3;
var promedioFinal = (calificacion1 + calificacion2 + calificacion3) / totalCalificaciones;
promedioFinal = promedioFinal.toFixed(1);
console.log("El valor total de las calificaciones es: " + promedioFinal);

/* Hallar el residuo */
console.log("===== Residuo =====");
var ahorros = 25011;
var cantidadAportantes = 102; 
var ahorroInbdividual = 0;
var sobrante = 0;
/* cuanto dinero corresponde a cada uno y cuanto sobra */
var motoIndividual = parseInt(ahorros / cantidadAportantes);
console.log("EL monto individual es de: $" + motoIndividual)
/* El signo de resduo es % */
sobrante = (ahorros % cantidadAportantes)
console.log("El sobrante es de : $" + sobrante);