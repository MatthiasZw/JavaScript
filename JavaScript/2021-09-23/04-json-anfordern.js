var resObject = getXHR();

function handleResponse(i){
    if (resObject.readyState == 4){
      let daten = JSON.parse(resObject.responseText);

        console.log(daten.info[i]);
        document.querySelector('#info' + i).innerHTML = daten.info[i];


    }
}

function sndReq(i) {

    resObject.open('get', '04-json-anfordern.json', true);

    resObject.onreadystatechange = function (){
        handleResponse(i);
    }
    resObject.send(null);
}

function out(){
    for (let i = 0; i<3; i++){
        document.querySelector('#info' + i).innerHTML = '';
    }
}


function init(){ 
    for (let i = 0; i<3; i++){
        let image = document.querySelectorAll('img')[i];
        image.onmouseover = function( ){
            sndReq(i); 
        }
        image.onmouseout = out;
    }
}

document.addEventListener('DOMContentLoaded', init);