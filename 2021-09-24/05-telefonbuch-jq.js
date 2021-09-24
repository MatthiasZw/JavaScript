$(document).ready (function(){

    $('#eingabe').keyup(function (){
        let teilnehmer = encodeURIComponent($(this).val().trim());
        let url = '03-telefonbuch.php'; 

        $.ajax({
            url: url,
            type: "get",
            data:{
                wunsch: teilnehmer
            }
        })
        .done(function (daten){
            $('#ausgabe').html('<pre>' + daten + '</pre>');
        });
    });

});