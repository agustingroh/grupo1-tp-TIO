window.addEventListener("DOMContentLoaded",()=>{
"use strict";

document.querySelector("#btn-cambiar-color").addEventListener(click,cambiarColor);

function cambiarColor(){
    document.querySelector("#tabla-integrante").classList.add("verde");
    document.querySelector("#tabla-integrante").classList.remove("gris");
}

document.querySelector("#btn-cambiar-tamanio").addEventListener(click,cambiarTamanio);

function cambiarTamanio(){
    document.querySelector("#tabla-integrantes").classList.add("grande");
    document.querySelector("#tabla-integrantes").classList.remove("chico");
}
});
