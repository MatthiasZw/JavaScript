var f = document.forms[0];

function meldungen_leeren(){
    with (document) {
        //Info-Felder leeren
        querySelector('#userinfo > small'). innerHTML= '';
        querySelector('#pwinfo > small'). innerHTML= '';
        querySelector('#emailinfo > small'). innerHTML= '';

        // Hintergrundfarbe zurücksetzen
        querySelector('#user').style.backgroundColor = '#fff';
        querySelector('#pw').style.backgroundColor = '#fff';
        querySelector('#email').style.backgroundColor = '#fff';

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
    let regpattern = /^[\w_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]{2,}$/;

    
    let mail= document.querySelector('#email');
    let pw= document.querySelector('#pw');
    let user= document.querySelector('#user');

   meldungen_leeren();

    with(document) {
        /* 1. Kontrolle e-mail */

        if( ! regpattern.test(mail.value) ){
            querySelector('#emailinfo > small').innerHTML='Die E-Mailadresse ist syntaktisch falsch';
            mail.style.backgroundColor = 'rgba(153,0,0,0.5)';
            mail.value = '';
            mail.focus();
            fehler = true;
        } /* 2. Kontrolle Passwort */

        if( pw.value.trim()== '' ){
            querySelector('#pwinfo > small').innerHTML='Kein Passwort eingegeben';
            pw.style.backgroundColor = 'rgba(153,0,0,0.5)';
            pw.value = '';
            pw.focus();
            fehler = true;
        }/* 3. Kontrolle UserId */

        if( user.value.length < 8 ){
            querySelector('#userinfo > small').innerHTML='Username midestens 8 Zeichen';
            user.style.backgroundColor = 'rgba(153,0,0,0.5)';
            user.value = '';
            user.focus();
            fehler = true;
        }

        // Fehler checken
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




// window.onload = init; Alternativ:

document.addEventListener("DOMContentLoaded", init, true);