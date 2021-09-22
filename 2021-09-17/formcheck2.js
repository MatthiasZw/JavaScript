var f = document.forms[0];

function meldungen_leeren(){
    with (document) {
        //Info-Felder leeren
        querySelector('#anzeige > small'). innerHTML= '';
        

        // Hintergrundfarbe zurücksetzen
        querySelector('#anzeige').style.backgroundColor = '#fff';

        querySelector('#alt').style.backgroundColor = '#fff';
        querySelector('#gew').style.backgroundColor = '#fff';
        querySelector('#gro').style.backgroundColor = '#fff';
        querySelector('#plz').style.backgroundColor = '#fff';
        querySelector('#ort').style.backgroundColor = '#fff';
        querySelector('#pre').style.backgroundColor = '#fff';
        querySelector('#name').style.backgroundColor = '#fff';
    }
}

function res( ){
    let msg= "Das Formular wird zurückgesetzt. Sind Sie sicher?";
    
    if(confirm(msg)) {
        meldungen_leeren();
        f.action= '';
        f.reset();  
    }
    return false;
    }

function vali(){

            let fehler= false;
            let regpattern = /^([1-9]|[1-9][0-9]|[1-9][0-9][0-9])$/;

            let a= document.querySelector('#alt');
            let ge= document.querySelector('#gew');
            let gr= document.querySelector('#gro');
            let pz= document.querySelector('#plz');
            let o= document.querySelector('#ort');
            let vn= document.querySelector('#pre');
            let n = document.querySelector('#name');


            meldungen_leeren();

            with(document){

            if( ! regpattern.test(a.value) ){
                querySelector('#anzeige > small').innerHTML='Die Altersangabe ist unsinnig';
                a.style.backgroundColor = 'rgba(153,0,0,0.5)';
                a.value = '';
                a.focus();
                fehler = true;   
            }  
            

            if( ! regpattern.test(ge.value) ){
                querySelector('#anzeige > small').innerHTML='Die Gewichtsangabe ist unsinnig';
                ge.style.backgroundColor = 'rgba(153,0,0,0.5)';
                ge.value = '';
                ge.focus();
                fehler = true;   
            }  

            if( ! regpattern.test(gr.value) ){
                querySelector('#anzeige > small').innerHTML='Die Größenangabe ist unsinnig';
                gr.style.backgroundColor = 'rgba(153,0,0,0.5)';
                gr.value = '';
                gr.focus();
                fehler = true;   
            }  

            if( plz.value.trim()== '' ){
                querySelector('#anzeige > small').innerHTML='Postleitzahl darf nicht leer sein';
                plz.style.backgroundColor = 'rgba(153,0,0,0.5)';
                plz.value = '';
                plz.focus();
                fehler = true;
            }

            if( o.value.trim()== '' ){
                querySelector('#anzeige > small').innerHTML='Ort darf nicht leer sein';
                o.style.backgroundColor = 'rgba(153,0,0,0.5)';
                o.value = '';
                o.focus();
                fehler = true;
            }

            if( vn.value.trim()== '' ){
                querySelector('#anzeige > small').innerHTML='Vorname darf nicht leer sein';
                vn.style.backgroundColor = 'rgba(153,0,0,0.5)';
                vn.value = '';
                vn.focus();
                fehler = true;
            }

            if( n.value.trim()== '' ){
                querySelector('#anzeige > small').innerHTML='Name darf nicht leer sein';
                n.style.backgroundColor = 'rgba(153,0,0,0.5)';
                n.value = '';
                n.focus();
                fehler = true;
            }


            if( fehler ) {
                return false;
            } else{
                f.method = 'post';
                f.action = 'http://test.jaderbass.de/formtester.php';
                f.submit();
            }
    }
}

function init(){
    document.querySelector('#send').onclick = vali;
    document.querySelector('#res').onclick = res;
}

document.addEventListener("DOMContentLoaded", init, true);