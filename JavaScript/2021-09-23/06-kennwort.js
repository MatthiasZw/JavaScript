var resObject = getXHR();

function handleResponse(){
    if(resObject.status == 200 && resObject.readyState == 4){
        let zahl = parseInt(resObject.responseText);
        let hinw = document.querySelector('#hinweise');
        let prbr = document.querySelector('#progbar');

        if(zahl <= 10){
            hinw.innerHTML = 'schwach ('+zahl + 'Punkte)';
            prbr.removeAttribute('style');
            prbr.setAttribute('style', 'background:red;width:' + (zahl 
                * 10) + 'px;');
        }else if(zahl<=20){
            hinw.innerHTML = 'mittel ('+zahl + 'Punkte)';
            prbr.removeAttribute('style');
            prbr.setAttribute('style', 'background:yellow;width:' + (zahl 
                * 10) + 'px;');
        }else {
            hinw.innerHTML = 'stark ('+zahl + 'Punkte)';
            prbr.removeAttribute('style');
            prbr.setAttribute('style', 'background:green;width:' + (zahl 
                * 10) + 'px;');
        }
    }
}

function sendReq(){
    let inhalt = document.querySelector('#pw').value;
    
    if(inhalt.trim()== ''){
        document.querySelector('#hinweise').innerHTML=' noch nichts eingegeben!';
    }

    let params = encodeURIComponent(inhalt.trim());
    resObject.open('get', '06-kennwort.php?q=' + params, true);
    resObject.onreadystatechange = handleResponse;
    resObject.send(null);

}

function init(){
    document.querySelector('#pw').onkeyup = sendReq;
}

document.addEventListener('DOMContentLoaded', init);

