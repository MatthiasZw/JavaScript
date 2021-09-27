var resObject= getXHR();


function handleResponse(){
    if(resObject.readyState == 4){
        let daten=resObject.responseXML;

       if(document.querySelector('#info0').innerHTML=='' && document.querySelector('#info1').innerHTML==''){
        document.querySelector('#info0').innerHTML=daten.querySelector('#url1').innerHTML + '<br>' +  daten.querySelector('#titel1').innerHTML ;
        } else if (document.querySelector('#info1').innerHTML=='' && !document.querySelector('#info0').innerHTML==''){
            document.querySelector('#info1').innerHTML=daten.querySelector('#url2').innerHTML + '<br>'+  daten.querySelector('#titel2').innerHTML ;
            document.querySelector('#info0').innerHTML='';
        } else{document.querySelector('#info0').innerHTML=daten.querySelector('#url1').innerHTML + '<br>'+  daten.querySelector('#titel1').innerHTML;
            document.querySelector('#info1').innerHTML='';
        }
    }
 
}

function sendReq(){

    resObject.open('get', 'kap11.xml', true);
    resObject.onreadystatechange = function(){
        handleResponse();
    }
        resObject.send();
}


function init(erg){
    document.querySelector('#umschalten').addEventListener('click', function(){

        sendReq();
        
    }, true); 
}

document.addEventListener('DOMContentLoaded', init);