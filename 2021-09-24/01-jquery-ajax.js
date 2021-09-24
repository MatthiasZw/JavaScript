$(document).ready(function(){
    $('#send').click(function(){
        $.ajax({
            method:'get',
            url:'01-jquery-ajax.php', 
            data:{
                user: 'hans',
                passwort: 'geheim'
            }
        })
        .fail(function(jqXHR){
            $('#ausgabe').html('ein Fehler ist aufgetreten: <br>' + jqXHR.responseText);
        })
        .done(function(daten){
            $('#ausgabe').html(daten);
        });
    });
});