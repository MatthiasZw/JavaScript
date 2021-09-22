var displ;
var temp;

function nummer(a){
var temp=a;

console.log(temp);
//document.getElementById('#ausgabe') += temp;
}


function init(){
    document.querySelector('#si').onclick = nummer();
  //  document.querySelector('#ausgabe') = 'temp';
}
document.addEventListener("DOMContentLoaded", init, true);