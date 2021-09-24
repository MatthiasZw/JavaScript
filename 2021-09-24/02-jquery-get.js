$(document).ready(function(){

    $('#send').click(function(){
        $.get('02-jquery-get.php',
        {
            user: 'Tscoorsch',
            passwort: 'sehrgeheim'
        }
        )
        .done(function(daten){
            daten = JSON.parse(daten);
            $('#ausgabe').html('Der User' + daten.user +'mit dem Passwort' + daten.passwort + 'wurde gefunden');
        })
        .fail(function(jqXHR){
            $('#ausgabe').html('Ein unbekannter Fehler ist aufgetreten');
        });
    });
});