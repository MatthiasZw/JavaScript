var eingabe;
var ausgabe= new Array;
var ausgabe0= new Array;
var ausgabe1= new Array;

function encrypt(){

    var ausgabe=[];
    var ausgabe0=[];
    var ausgabe1=[];

    eingabe= $('#text').val();
    versch= $('#code').val();

    console.log(eingabe);
    console.log(versch);


    for (i=0; i< eingabe.length; i++) {
        
        ausgabe [i] = (eingabe.charCodeAt(i) + parseInt(versch));

        if(ausgabe [i] >= 127){
            ausgabe [i] = ausgabe [i] - 94;
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
