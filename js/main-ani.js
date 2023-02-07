let familia001 = document.getElementById('family_ref001');
familia001.style.display = "none";
let familia002 = document.getElementById('family_ref002');
familia002.style.display = "none";
let familia003 = document.getElementById('family_ref003');
familia003.style.display = "none";

function myFunction(nombre) {
    var x = document.getElementById(nombre);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

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