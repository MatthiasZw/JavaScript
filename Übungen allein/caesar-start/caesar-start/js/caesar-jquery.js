var eingabe= 0

function encrypt(){

    eingabe= $('#text').val();
    versch= $('#code').val();

    console.log(eingabe);
    console.log(versch);

    for(char in eingabe){
    ausgabe= eingabe.charCodeAt(0);
    console.log(ausgabe);

    
    }

}

function init(){

    document.querySelector('#encrypt').onclick = encrypt;

}

document.addEventListener('DOMContentLoaded', init, true);
