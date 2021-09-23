
var resObject = getXHR();

function handleResponse(){
    if(resObject.readyState == 4){
        document.querySelector('#antwort').innerHTML=resObject.responseText;
    }
}

function sendReqPOST(){
    // Parameter zum senden anlegen
    let params = 'nachname=Wurst&Vorname=Hans';

    //POST-Verbindung öffnen
    resObject.open('post', '05-daten-senden.php', true);

    // Header-info zum Mime-Type der gesendeten Parameter festlegen

    resObject.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    resObject.onreadystatechange = handleResponse;

    resObject.send(params);
}

function sendReqGET(){
    //Parameter zum senden anlegen
    // Diese werden i.d R vom Formular geliefert

    let params = 'user=admin&passwort=geheim';

    // GET-Verbindung öffnen
    // URL: 05-daten-senden.php?user=admin&passwort=geheim

    resObject.open('get', '05-daten-senden.php?'+params, true);
    resObject.onreadystatechange = handleResponse;
    resObject.send(null);
}

function init(){
    document.querySelector('#sendeget').onclick = sendReqGET;
    document.querySelector('#sendepost').onclick = sendReqPOST;
}

document.addEventListener('DOMContentLoaded', init);
