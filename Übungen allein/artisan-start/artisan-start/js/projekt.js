/* artisan projekt.js */

function init(){
    $('<img src="img/herbst.jpg" alt="herbstlich">').appendTo('#currentimage');
    $('#maincontent').hide();
   
}

$('#topbutton1').html('Home')
.hover(function(){
    $(this).addClass("mouseovertopbutton");
    })
.mouseout(function(){
    $(this).removeClass("mouseovertopbutton");
    })
.click(function(){
    $(this).toggleClass("activatedtopbutton");
     $('#currentimage>img').replaceWith('<img src="img/fruehling.jpg" alt="herbstlich">');
});    
;

$('#topbutton2').html('Aktuelles')
.hover(function(){
    $(this).addClass("mouseovertopbutton");
    })
.mouseout(function(){
    $(this).removeClass("mouseovertopbutton");
    })
.click(function(){
    $(this).toggleClass("activatedtopbutton");
    /* $('#maincontent').toggle('fade'); */

    if($('#maincontent').is(':visible')){
        $( "#maincontent" ).fadeOut();

    }else if($('#maincontent').is(':hidden'))
    {$( "#maincontent" ).fadeIn();}
    
});    
;

$('#topbutton3').html('Login')
.hover(function(){
    $(this).addClass("mouseovertopbutton");
    })
.mouseout(function(){
    $(this).removeClass("mouseovertopbutton");
    })
.click(function(){
    $(this).toggleClass("activatedtopbutton");
});    
;

$('#topbutton4').html('Kontakt')
.hover(function(){
    $(this).addClass("mouseovertopbutton");
    })
.mouseout(function(){
    $(this).removeClass("mouseovertopbutton");
    })
.click(function(){
    $(this).toggleClass("activatedtopbutton");
});            
;

$('#teaserbutton1')
.click(function(){
    $('#currentimage>img').replaceWith('<img src="img/fruehling.jpg" alt="herbstlich">');
    });

$('#teaserbutton2')
.click(function(){
    $('#currentimage>img').replaceWith('<img src="img/sommer.jpg" alt="herbstlich">');
    });

$('#teaserbutton3')
.click(function(){
    $('#currentimage>img').replaceWith('<img src="img/winter.jpg" alt="herbstlich">');
    });

$('#teaserbutton4')
.click(function(){
    $('#currentimage>img').replaceWith('<img src="img/wald.jpg" alt="herbstlich">');
    });

$('#teaserbutton5')
.click(function(){
    $('#currentimage>img').replaceWith('<img src="img/see.jpg" alt="herbstlich">');
    });    




document.addEventListener('DOMContentLoaded', init);




