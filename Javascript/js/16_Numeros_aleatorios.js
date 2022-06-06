"use estrict"

/* Generando numeros aleatorios */

var numeroAleatorio = Math.random();
console.log(numeroAleatorio)

/* Generando numeros aleatorios entre 0 y 9 */

var numeroAleatorio2 = Math.random() * 10;
var numeroAleatorio2Round = Math.round(numeroAleatorio2);
if (numeroAleatorio2Round === 0) {
    numeroAleatorio2Round = 1;
}
console.log(numeroAleatorio2Round)

/* generando numeros aleatorios entre 0 y 99 */

var numeroAleatorio3 = Math.random() * 100;
var numeroAleatorio3Round = Math.floor(numeroAleatorio3);
if (numeroAleatorio3Round === 0) {
    numeroAleatorio3Round = 1;
}
console.log(numeroAleatorio3Round)
