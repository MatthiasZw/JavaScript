/* JavaScript für PLZ */
$(document).ready(function(){

    $('#eingabe').keyup(function(){
        let suche=encodeURIComponent($(this).val().trim());
        let url ='plz-json.php';

        $.ajax({
            url:url,
            type:"get",
            data: {
                wunsch: suche
            }
        })

        .done(function (daten){
            console.log(JSON.parse(daten));

        let antwort= '<table border="1">';

            for(index in JSON.parse(daten)){
                antwort += '<tr>';
                antwort += '<td>' + JSON.parse(daten)[index].ort+'</td>';
                antwort += '<td>' + JSON.parse(daten)[index].plz+'</td>';
                antwort += '<td>' + JSON.parse(daten)[index].bundesland+'</td>';
                antwort += '</tr>';
            }
            antwort += '</table>';

            $('#antwort').html('<pre>' + antwort + '</pre>');
        });

    });
	
});