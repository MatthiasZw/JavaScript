var xhrObj = getXHR();

function updatePage(){
if(xhrObj.status == 200 && xhrObj.readyState == 4){
    let tel = JSON.parse(xhrObj.responseText);
    console.log(tel);
    
    let ausgabe= '<table border="1">';

    for( index in tel){
        ausgabe += '<tr>';
        
        ausgabe += '<td>' + tel[index][0] + '</td>';
        ausgabe += '<td>' + tel[index][1].trim() + '</td>';
        
        ausgabe+= '</tr>';
    }
    
    ausgabe += '</table>';
    document.querySelector('#ausgabe').innerHTML = ausgabe;
}
}


function callTelefonbuch(){
let teilnehmer = document.querySelector('#eingabe').value;
let url = '04-telefonbuch-json.php?wunsch=' + encodeURIComponent(teilnehmer.trim());
xhrObj.open('get', url, true);
xhrObj.onreadystatechange = updatePage;
xhrObj.send(null);
}

function init(){
    document.querySelector('#eingabe').onkeyup = callTelefonbuch;
}

document.addEventListener('DOMContentLoaded', init, true);