window.addEventListener("DOMContentLoaded",()=>{
"use strict";

document.querySelector("#btn-cambiar-color").addEventListener(click,cambiarColor);

function cambiarColor(){
    document.querySelector("#tabla-integrante").classList.add("verde");
    document.querySelector("#tabla-integrante").classList.remove("gris");
}


});
