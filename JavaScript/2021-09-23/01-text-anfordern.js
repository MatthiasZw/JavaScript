// 1. erzeuge ein xhr-objekt (XMLHttprequest-objekt)
let resObject = getXHR();

function handleResponse(){
    //5a. Prüfe ob die Antwort vollständig vom Webserver angekommen ist
    //d.h die eigenschaft readystate hat den wert 4
    if (resObject.readyState == 4) {
        //5b. Antwort wird verarbeitet
        // dh in diesem fall ist das div mit der id antwort geschrieben
        document.querySelector('#antwort').innerHTML = resObject.responseText;
    }
}

function sendReq () {
    //2. Verbindung zum Webserver öffnen
    resObject.open('get', '01-text-anfordern.txt', true);

    //3. Callback funktion über das Ereignis onreadstatedchange referenzieren

    resObject.onreadystatechange = handleResponse;

    //4. Anfrage an Webserver senden

    resObject.send(null);
}

function init(){
    document.querySelector('#frage').onclick = sendReq;
}

document.addEventListener('DOMContentLoaded', init) ;
