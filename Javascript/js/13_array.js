var aprendiz1 = new Array();
aprendiz1[0] = 1; 
aprendiz1[1] = "Yeimi katherin";
aprendiz1[2] = "Peña Ariza";
aprendiz1[3] = 18;
aprendiz1[4] = "B villa del prado"
aprendiz1[5] = 156;

var aprendiz2 = new Array(2,"Luisa Fernanda", "Ramirez Montoya", 19, "B Simon bolivar", 157)

var aprendiz3 = [3, "Jesus Nicolas", "Ayerbe Guarnizo",17 , "B. Las parlmitas", 1,77];

console.log( "Nombre completo de aprendiz 2 :" + aprendiz2[1] + " " + aprendiz2[2]);

/*añadir elementos al array */
aprendiz3[6] = "3207173861";

/* contando elementos*/
 var cantidadelementos = aprendiz1.length;
console.log("Aprendiz 1 tiene " + cantidadelementos + " elementos");
 
 /*contar caracteres*/
 var cantidadcaracteres = aprendiz2[1].length;
 console.log("cantidad de caracteres: " + cantidadcaracteres)