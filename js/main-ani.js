/*
 * Ocultar los divs de las referencias familiares 
 */
let familia001 = document.getElementById('family_ref001');
familia001.style.display = "none";
let familia002 = document.getElementById('family_ref002');
familia002.style.display = "none";
let familia003 = document.getElementById('family_ref003');
familia003.style.display = "none";
let familia004 = document.getElementById('family_ref004');
familia004.style.display = "none";

/*
 Ocultar los divs de las referencias personales
*/
let person001 = document.getElementById('personal_ref001');
person001.style.display = "none";
let person002 = document.getElementById('personal_ref002');
person002.style.display = "none";
let person003 = document.getElementById('personal_ref003');
person003.style.display = "none";
let person004 = document.getElementById('personal_ref004');
person004.style.display = "none";


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
let fm_ref_button04 = document.getElementById('button-fam-ref04');
fm_ref_button04.addEventListener('click', ()=>{
    myFunction('family_ref004');
})
/*
Accion de los botones de las referencias personales
*/

let pr_ref_button01 = document.getElementById('button-per-ref01');
pr_ref_button01.addEventListener('click', ()=>{
    myFunction('personal_ref001');
})
let pr_ref_button02 = document.getElementById('button-per-ref02');
pr_ref_button02.addEventListener('click', ()=>{
    myFunction('personal_ref002');
})
let pr_ref_button03 = document.getElementById('button-per-ref03');
pr_ref_button03.addEventListener('click', ()=>{
    myFunction('personal_ref003');
})
let pr_ref_button04 = document.getElementById('button-per-ref04');
pr_ref_button04.addEventListener('click', ()=>{
    myFunction('personal_ref004');
})