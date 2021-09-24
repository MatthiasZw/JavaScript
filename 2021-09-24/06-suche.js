$(document).ready(function(){

    $('#suchmich').click(function(){
        $.ajax({
            url: "06-suche.php",
            type:"get",
            data:{
                s: $('#suche').val()
            }
        })
        .done(function(absatz){
            console.log(absatz);
           $('#ausgabe').html(absatz);
        });
    });
});