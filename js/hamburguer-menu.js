document.querySelector('.bars__menu').addEventListener("click",animarBarras);

var linea1__barra = document.querySelector('.linea1__bars-menu');
var linea2__barra = document.querySelector('.linea2__bars-menu');
var linea3__barra = document.querySelector('.linea3__bars-menu');
var menu = document.querySelector('.slide__menu');

function animarBarras(){
    linea1__barra.classList.toggle("activeLinea1__bars-menu");
    linea2__barra.classList.toggle("activeLinea2__bars-menu");
    linea3__barra.classList.toggle("activeLinea3__bars-menu");
    menu.classList.toggle("activeslide__menu");
}