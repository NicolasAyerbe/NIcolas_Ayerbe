"use strict"

/* conversion temporal de forma implicita */
console.log("Conversion inplisita");
var num1 = "12";
var num2 = 4;

console.log("El resultado de la suma es : " + (num1 + num2));
console.log("El resultado de la resta es : " + (num1 - num2));
console.log("El resultado de la multiplicacion es : " + (num1 * num2));
console.log("El resultado de la divicion es : " + (num1 / num2));

/* conversion temporal de forma explicita */
console.log("conversion explisita")
var num3 = "20";
var num4 = 2;
var num3Int = parseInt(num3);
console.log("El resultado de la suma es : " + (num3Int + num4));

var num5 = "12.2";
var num6 = 4.5;
console.log("El resultado de la suma es: " + (parseFloat(num5) + num6));

var num7 = 12;
var num8 = 10;
var num7Str = num7.toString();
var num8Str = num8.toString();
console.log("El resultado de la suma es: " + ( num7Str + num8Str));

var num9 = "8";
var num10 = 3;
console.log("El resultado de la suma es: " + (Number(num9) + num10));
console.log("El resultado de la suma es: "+ (num9 + num10 ));