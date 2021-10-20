window.addEventListener("DOMContentLoaded",()=>{
"use strict";

document.querySelector("#btn-cambiar-color").addEventListener(click,cambiarColor);

function cambiarColor(){
    document.querySelector("#tabla-integran").classList.add("verde");
    document.querySelector("#tabla-integrante").classList.add("celeste");
}


});
