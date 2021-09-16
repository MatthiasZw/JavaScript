document.forms[0].action = 'https://test.jaderbass.de/formtester.php';
document.forms[0].method = 'post';

var elmts = document.forms[0].elements;

function formular(){
    let text = '';
    
    let idx= document.forms[0].elements[4].selectedIndex;

    text += '<h3>Ihre Auswahl</h3>';
    text += '<p>';

 

    text +='Textfeld:' + elmts[0].value + '<br>';

    text +='1.Radiobutton: ' + elmts[1].checked + ' Value: '+ elmts[1].value + '<br>';
    text +='2.Radiobutton: ' + elmts[2].checked + ' Value: '+ elmts[2].value + '<br>';

    text +='1. Checkbox: ' + elmts[3].checked + ' Value: '+ elmts[3].value + '<br>';

    text += 'Dropdown: ' + idx + ' = ' + elmts[4].options[idx].text;

    text += ' Value: ' + elmts[4].options[idx].value + '<br>';

    text +='Datumsfeld:' + elmts[5].value + '<br>';


    text +='</p>';

    document.querySelector('#ausgabe').innerHTML = text;
}

function senden(){
    if (elmts[6].checked){
        document.forms[0].submit();
    }
    else {
        document.querySelector('#ausgabe').innerHTML = 'Bitte bestätigen Sie die AGB!';
    }
}

function zurueck(){
    if(confirm('wollen Sie wirklich zurücksetzen?')){
        document.forms[0].reset();
        document.querySelector('#ausgabe').innerHTML = '';
    }
}



document.querySelector('#b1').onclick = formular;
document.querySelectorAll('button')[1].onclick = senden;
document.querySelectorAll('button')[2].onclick = zurueck;
