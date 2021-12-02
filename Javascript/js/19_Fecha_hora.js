"use strict"

/*imprimir fecha y hora del navegador */
var currenTime = new Date();
    console.log(currenTime);



 /* Desglosando fecha y horas */
 var anyo = currenTime.getFullYear();
 console.log("año: " + anyo) 


 var mes =  currenTime.getMonth();
 console.log("mes: " + (mes + 1))

 var mes2 = currenTime.getDate();
 console.log("dia del mes: " + mes2)

 var mesesStr = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

var dia = currenTime.getDay() 
var diaSemanaStr = ["Domingo", "Lunes", "Martes" , "Miercoles" , "Jueves" , "Viernes" , "Sabado" ];
console.log("Hoy es: " + diaSemanaStr[dia])


 var hora = currenTime.getHours();
 console.log("Hora: " + hora)
 var minutos = currenTime.getMinutes();
 console.log("minutos: " + minutos)
 var segundos = currenTime.getSeconds();
 console.log("segundos: " + segundos)

 var milisegundos = currenTime.getMilliseconds();
 console.log("milisegundos: " + milisegundos)

 var tiempo = currenTime.getTime();
 console.log("tiempo: " + tiempo)

 /* fecha: jueves, 2 de Diciembre del año 2021 */



 console.log("Fecha: " + diaSemanaStr[dia] + ", " + dia + " de " + mesesStr[mes] + " del año " + anyo )



 

 

