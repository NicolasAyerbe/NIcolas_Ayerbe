"use strict"
let cris = document.getElementById("cris");
let ronaldo = document.getElementById("ronaldo");
 

cris.addEventListener("click",function() {
    cris.classList.remove("div-cris")
    cris.classList.add("div-cris-hidden")
    ronaldo.classList.remove("div-ronaldo")
    ronaldo.classList.add("div-ronaldo-hidden") 
});
ronaldo.addEventListener("click",function() {
    ronaldo.classList.remove("div-ronaldo-hidden")
    ronaldo.classList.add("div-ronaldo") 
    cris.classList.remove("div-cris-hidden")
    cris.classList.add("div-cris")
   
});


    


