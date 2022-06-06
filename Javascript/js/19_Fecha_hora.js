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


var fechaHoraLimite = new Date(Date.UTC(2021, 11, 10, 8,));
fechaHoraLimite.setHours(8)
console.log("Fecha y Hora de vencimiento: " + fechaHoraLimite);
var ahoramismo = new Date();


if (ahoramismo.getFullYear() <= fechaHoraLimite.getFullYear() &&
    ahoramismo.getMonth() <= fechaHoraLimite.getMonth() &&
    ahoramismo.getDate() <= fechaHoraLimite.getDate() &&
    ahoramismo.getHours() <= fechaHoraLimite.getHours() &&
    ahoramismo.getMinutes() <= fechaHoraLimite.getMinutes()) {
        console.log("Falta: " + (ahoramismo.getDate - fechaHoraLimite.getDate()) + "dias, " +
        (ahoramismo.getHours - fechaHoraLimite.getHours()) + "horas " +
        (fechaHoraLimite.getMinutes() - ahoramismo.getMinutes) + "minutos");
        console.log("El envio fue realizado con exito");
      

     }
     else{
         console.log("Lo sentimos. La fecha de envio ya paso");
     }






 

 

