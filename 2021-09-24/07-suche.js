$(document).ready(function(){

    $('#suchmich').click(function(){
        $.ajax({
            url: "06-suche.xml",
            dataType:"xml",
            data:{
                s: $('#suche').val()
            }
        })
        .done(function(absatz){
            console.log(absatz);
          let absaetze = absatz.querySelectorAll('absatz');
          let muster = $('#suche').val();
          let suche = new RegExp(muster, 'i');
          let absatzneu= '';
          for(let i=0; i<absaetze.length; i++){
              if(suche.test(absaetze[i].innerHTML)) {
                  absatzneu +='<p>' + absaetze[i].innerHTML + '</p>';
              }
          }
          $('#ausgabe').html(absatzneu);
        });
    });
});