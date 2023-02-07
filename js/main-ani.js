/*
 * Ocultar los divs de las referencias familiares 
 */
let familia001 = document.getElementById('family_ref001');
familia001.style.display = "none";
let familia002 = document.getElementById('family_ref002');
familia002.style.display = "none";
let familia003 = document.getElementById('family_ref003');
familia003.style.display = "none";

/*
 Ocultar los divs de las referencias personales
*/
let person001 = document.getElementById('personal_ref001');
person001.style.display = "none";



// Funcion que oculta y muestra

function myFunction(nombre) {
    var x = document.getElementById(nombre);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
/** 
  Acccion de los botones de las referencias familiares
**/
let fm_ref_button01 = document.getElementById('button-fam-ref01');
fm_ref_button01.addEventListener('click', ()=>{
    myFunction('family_ref001');
})
let fm_ref_button02 = document.getElementById('button-fam-ref02');
fm_ref_button02.addEventListener('click', ()=>{
    myFunction('family_ref002');
})
let fm_ref_button03 = document.getElementById('button-fam-ref03');
fm_ref_button03.addEventListener('click', ()=>{
    myFunction('family_ref003');
})

/*
Accion de los botones de las referencias personales
*/