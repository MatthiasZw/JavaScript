/* JavaScript für books */

$(document).ready(function(){
    
    $("button").click(function(){
       
        
        $.get('includes/books.php',
         {
           isbn: $(this).attr("id")
          }
        )
        .done(function(daten){
            daten = JSON.parse(daten);
            console.log(daten);
           
            
            $('#title').html('<strong> Titel:</strong>' + daten.title);
            $('#author').html('<strong> Author: </strong>' + daten.author);
            $('#nr').html('<strong> ISBN-Nr.: </strong>' + daten.isbn);
            $('#publisher').html('<strong> Verlag </strong>:' +daten.publisher);
            $('#description').html('<strong> Klappentext: </strong> <br>'  + daten.description);
            $('#cover').html('<img src="'+ daten.image +'" alt=""></img>');

            
        })
        .fail(function(jqXHR){
            $('#ausgabe').html('Ein unbekannter Fehler ist aufgetreten');
        });
    });
});