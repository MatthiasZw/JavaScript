$(document).ready (function(){
    
    $('p')
    .hover(function(){
        $(this).toggleClass("pg");
    });

    $('h3').wrap("<li></li>");
    $('h2').wrap("<li></li>");

    $('h2')
    .hover(function(){
        $(this).toggleClass("pg");
        $(this).nextUntil('h2','p').toggleClass("pr");
    });

    $('h3')
    .hover(function(){
        $(this).toggleClass("pg");
        $(this).next().toggleClass("pr");
    });

   

});
