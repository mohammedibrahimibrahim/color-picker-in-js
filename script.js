
let col = document.getElementById ("col");
let colorplay = document.getElementById ("colorplay");  
let coling = document.getElementById ("coling");
let hh = document.getElementById ("hh");

col.addEventListener('input',function(){
    let selectedcol = col.value;
    colimg.style.backgroundColor = selectedcol;
    hh.style.color = selectedcol;
   colorplay.innerHTML="color value ="+selectedcol
})