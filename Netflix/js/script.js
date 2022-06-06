function mostrarmensaje(){
    alert('¿ya viste la pelicula nueva que tenemos para ti?')
}
function intercambiarImagen(ruta) {
    document.getElementById("imgPrincipal").src = ruta ;
}
function textov(texto) {
    document.getElementById("textoPrincipal").textContent = texto;
}
function bodyi(contenido){
    document.getElementById("cuerpoP").textContent = contenido;
}