$(document).ready(function(){

    $('form').submit(function(event){
        // Das Absenden des Formulars verhindern
        event.preventDefault();

        // Das zu sendende Formular und dessen metadaten bekannt machen
        let form = $(this);
        let action = form.attr('action');
        let method = form.attr('method');
        let fdaten = form.serialize();

        console.log(fdaten);

        $.ajax({
            url:action,
            type: method,
            data:fdaten
        })
        .done(function(daten){
            //Bei Erfolg
            $('#ausgabe').html('<p>Vielen Dank für die Übermittlung. </p><p>Folgende Daten wurden empfangen:<br><strong>' + daten + '</strong></p>');

        })
        .fail(function(){
            //Bei Fehler
            $('#ausgabe').html('<p style="color:#a00;">Fehler</p>');
        })
        .always(function(){
            //immer
            $('#ausgabe').append('<p>Kommunikation mit dem Server beendet.</p>');

        });
    });

});