var xhrObj = getXHR();

function updatePage(){
if(xhrObj.status == 200 && xhrObj.readyState == 4){
    document.querySelector('#ausgabe').innerHTML = '<pre>' + xhrObj.responseText + '</pre>';
}
}


function callTelefonbuch(){
let teilnehmer = document.querySelector('#eingabe').value;
let url = '03-telefonbuch.php?wunsch=' + encodeURIComponent(teilnehmer.trim());
xhrObj.open('get', url, true);
xhrObj.onreadystatechange = updatePage;
xhrObj.send(null);
}

function init(){
    document.querySelector('#eingabe').onkeyup = callTelefonbuch;
}

document.addEventListener('DOMContentLoaded', init, true);