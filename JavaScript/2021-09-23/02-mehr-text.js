var resObject = getXHR();

function handleResponse(i){
    if (resObject.readyState == 4){
        document.querySelector('#info' + i).innerHTML = resObject.responseText;
    }
}

function sndReq(i) {
    let infotext = '02-info' + i + '.txt';
    resObject.open('get', infotext, true);

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