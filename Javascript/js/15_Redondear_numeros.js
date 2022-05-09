"use strict"

console.log("Redondear de forma automatica")
var number1 = 4.4;
var number2 = 4.6;
var number3 = 4.5;
var number1Round = Math.round(number1);
var number2Round = Math.round(number2);
var number3Round = Math.round(number3);

console.log("Variable 1: " + number1Round + "\n" +
            "Variable 2: " + number2Round + "\n" +
            "Variable 3: " + number3Round);


console.log("Redondear con el metodo floor")            
var number4 = 4.9;
var number4Floor = Math.floor(number4);
console.log("Variable 4: " + number4Floor);

console.log("Redondear hacia el techo")
var number5 = 6.7;
var number5Ceil = Math.ceil(number5);
console.log("VAriable 5 : " + number5Ceil);