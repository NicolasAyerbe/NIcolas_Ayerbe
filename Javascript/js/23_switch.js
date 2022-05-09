"use strict"

var voto = "Luisa";
var votos = [0, 0, 0, 0, 0, 0];
var candidatos = ["Luisa","Jesus","Yolanda","Hamir","Nulo","En blanco"];

for (let i=0; i < candidatos.length; i++) {
    if (voto === candidatos[i]) {
      /* votos[i] = votos[i] + 1; */
      votos[i]++;
    }
}
console.log("resultados:")
for (let i=0; i < candidatos.length; i++) {
    console.log(candidatos[i] + ": " + votos[i]);
}