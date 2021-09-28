var eingabe;
var ausgabe= new Array;
var ausgabe0= new Array;
var ausgabe1= new Array;

function encrypt(){

    eingabe= $('#text').val();
    versch= $('#code').val();

    console.log(eingabe);
    console.log(versch);


    for (i=0; i< eingabe.length; i++) {
        
        ausgabe [i] = (eingabe.charCodeAt(i) + parseInt(versch));

        if(ausgabe [i] >= 255){
            ausgabe [i] = ausgabe [i] - 223;
        }

        ausgabe0 [i] = (eingabe.charCodeAt(i));
        ausgabe1 [i]= String.fromCharCode(ausgabe[i]);   

    }

    $('#ascii').html(ausgabe0);
    $('#asciiPlus').html(ausgabe);

    $('#encrypted').html(ausgabe1);
    console.log(ausgabe);

}

function init(){

    document.querySelector('#encrypt').onclick = encrypt;

}

document.addEventListener('DOMContentLoaded', init, true);
