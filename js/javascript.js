window.addEventListener("DOMContentLoaded",()=>{
"use strict";

document.querySelector("#btn-cambiar-color").addEventListener("click",cambiarColor);

function cambiarColor(){
    document.querySelector("#color-head").classList.toggle("azul");
}

document.querySelector("#btn-cambiar-tamanio").addEventListener("click",cambiarTamanio);

function cambiarTamanio(){
    document.querySelector("#tabla-integrante").classList.toggle("aumentar");
}
});
