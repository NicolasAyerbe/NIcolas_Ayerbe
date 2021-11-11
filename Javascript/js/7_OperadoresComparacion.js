"use strict"

/* Operadores de comparacion 
> (mayor que)
< (menor que)
>=(mayor o igual que)
<=(menor o igual que)
!=(distinto sin importar el tipo de dato)
== (igual sin importar el tipo de dato )
=== (estrictamente igual, incluyendo todo tipo de dato)
!== (distinto "si no son estrictamente iguales") */

/* Quien ocupo el primer puesto? */

var nota1 = 8.1;
var nota2 = 8.5;

/*condicionales */
if (nota1 > nota2) {
    console.log("El aprendiz que ocupo el primer puesto es: " + nota1);
} 
else if(nota1 < nota2) {
    console.log("El aprendiz que ocupo el primer puesto es: " + nota2);
}
else if(nota1 === nota2) {
    console.log("las notas son iguales ");
}
else {
    console.log("ha surgido un error. verifique, por favor.");
}