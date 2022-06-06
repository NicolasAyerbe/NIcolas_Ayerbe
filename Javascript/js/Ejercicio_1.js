var producto1 = 2000;
var producto2 = 3500;
var producto3 = 2300;
var producto4 = 1900;

/*condicionales */
if (producto2 > producto1, producto3, producto4) {
    console.log("El producto mas costoso vale: $" + producto2);
} 
else if(producto2 < producto1) {
    console.log("El producto mas costoso vale: $" + producto1);
}
else if(producto2 < producto3) {
    console.log("El producto mas costoso vale: $" + producto3);
}
else if(producto2 < producto4) {
    console.log("El producto mas costoso vale: $" + producto4);
}
else if(producto1 === producto2 === producto3 === producto4) {
    console.log("los precios son iguales ");
}
if (producto4 < producto1, producto3, producto2) {
    console.log("El producto menos costoso vale: $" + producto4);
} 
else if(producto4 > producto1) {
    console.log("El producto menos costoso vale: $" + producto1);
}
else if(producto4 > producto3) {
    console.log("El producto menos costoso vale: $" + producto3);
}
else if(producto4 > producto2) {
    console.log("El producto menos costoso vale: $" + producto2);
}
else {
    console.log("ha surgido un error. verifique, por favor.");
}