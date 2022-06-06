"use strict"
var leche = 200000;
var arroz = 100000;
var pan = 30000;
var aceite = 60000;
var gaseosa = 35000;
var compratotal = (leche+arroz+pan+aceite+gaseosa)
var descuento1= compratotal*0.03;
var descuento2= compratotal*0.05;
var descuento3= compratotal*0.08;

console.log("subtotal: $"+ compratotal);

if(compratotal>100000 && compratotal<200000){
    console.log("descuento: $"+ descuento1);
    console.log("total con descuento: $"+(compratotal-descuento1));
}
else if(compratotal>200000 && compratotal<300000){
    console.log("descuento: $"+ descuento2);
    console.log("total con descuento: $"+(compratotal-descuento2));
}
else if(compratotal>300000){
    console.log("descuento: $"+ descuento3);
    console.log("total con descuento: $"+(compratotal-descuento3));
}