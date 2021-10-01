$(document).ready (function(){

    //Tags sammeln

    var uniqueTags = new Array();
    $('.box').each(function(){
        let dataArray = $(this).data('tags').split(',');
        dataArray.forEach(element => {
            if($.inArray(element, uniqueTags) <0){
                uniqueTags.push(element);
            }
        });
    });

    //Buttons generieren

    var btns = '<button>aal</button>';
    for (const idx  in uniqueTags) {
        if (Object.hasOwnProperty.call(uniqueTags, idx )) {
            let tag = uniqueTags[idx ];
            btns += '<button>'+ tag +'</button>';
            
        }
    }
    $('body').prepend(btns);


    //Listener zum Filtern

    $('button').click(function(){
        let tag= $(this).text();
        //alle Boxen verstecken

        $('.box')
        .hide()
        .each(function(){
            let dataArray = $(this).data('tags').split(',');
            
            //Prüfe ob der Button-Txt im dataArray vorkommt
            if($.inArray(tag, dataArray) >=0){
                //Wenn ja dann einblenden
                $(this).fadeIn();
            }
        });

        // bei 'all' alle einblenden

        if(tag === 'aal'){
            $('.box').fadeIn();
        }

    });




});