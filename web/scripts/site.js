// VARIABLES GLOBALES
var winWidth = $(window).width();


// MENU 1 (BOUTON HAMBURGER)
$(document).ready(function(){
    $('#nav-icon1').click(function(){
        $(this).toggleClass('open');
        $('#menu1').slideToggle();
    });
    
    $(window).resize(function(){
        winWidth = $(window).width();
        if(winWidth >= 792){
            $('#menu1').show();
        } else{
            $('#menu1').hide();
        };
    });
});


// MENU 1 (SOULIGNEMENT PAGE ACTUELLE)
$(document).ready(function(){
    winWidth = $(window).width();
    
    function menu1(){
        // PAGE PARCOURS
        if( (winWidth >= 792) && (window.location.href.indexOf("parcours.html") != -1) ){
            // AU CHARGEMENT DE LA PAGE
            $('#menu1 li:nth-child(1) a').css({
                borderBottom: "5px solid #0070c0"
            });
            
            $('#menu1 li:nth-child(2) a').css({
                borderBottom: "5px solid #fff"
            });
            
            $('#menu1 li:nth-child(3) a').css({
                borderBottom: "5px solid #0070c0"
            });
            
            $('#menu1 li:nth-child(4) a').css({
                borderBottom: "5px solid #fff"
            });
            
            // AU SURVOL DU MENU
            $('#menu1 li:nth-child(1) a').mouseover(function(){
                $('#menu1 li:nth-child(1) a').css({
                    borderBottom: "5px solid #fff"
                });
            });
            
            $('#menu1 li:nth-child(1) a').mouseout(function(){
                $('#menu1 li:nth-child(1) a').css({
                    borderBottom: "5px solid #0070c0"
                });
            });
            
            $('#menu1 li:nth-child(3) a').mouseover(function(){
                $('#menu1 li:nth-child(3) a').css({
                    borderBottom: "5px solid #fff"
                });
            });
            
            $('#menu1 li:nth-child(3) a').mouseout(function(){
                $('#menu1 li:nth-child(3) a').css({
                    borderBottom: "5px solid #0070c0"
                });
            });
            
            $('#menu1 li:nth-child(4) a').mouseover(function(){
                $('#menu1 li:nth-child(4) a').css({
                    borderBottom: "5px solid #fff"
                });
            });
            
            $('#menu1 li:nth-child(4) a').mouseout(function(){
                $('#menu1 li:nth-child(4) a').css({
                    borderBottom: "5px solid #0070c0"
                });
            });
        } else {
            $('#menu1 li:nth-child(2) a').css({
                borderBottom: "5px solid #0070c0"
            });
        };
        
        // PAGE REALISATIONS
        if( (winWidth >= 792) && (window.location.href.indexOf("realisations.html") != -1) ){
            // AU CHARGEMENT DE LA PAGE
            $('#menu1 li:nth-child(1) a').css({
                borderBottom: "5px solid #0070c0"
            });
            
            $('#menu1 li:nth-child(2) a').css({
                borderBottom: "5px solid #0070c0"
            });
            
            $('#menu1 li:nth-child(3) a').css({
                borderBottom: "5px solid #fff"
            });
            
            $('#menu1 li:nth-child(4) a').css({
                borderBottom: "5px solid #0070c0"
            });
            
            // AU SURVOL DU MENU
            $('#menu1 li:nth-child(1) a').mouseover(function(){
                $('#menu1 li:nth-child(1) a').css({
                    borderBottom: "5px solid #fff"
                });
            });
            
            $('#menu1 li:nth-child(1) a').mouseout(function(){
                $('#menu1 li:nth-child(1) a').css({
                    borderBottom: "5px solid #0070c0"
                });
            });

            $('#menu1 li:nth-child(2) a').mouseover(function(){
                $('#menu1 li:nth-child(2) a').css({
                    borderBottom: "5px solid #fff"
                });
            });
            
            $('#menu1 li:nth-child(2) a').mouseout(function(){
                $('#menu1 li:nth-child(2) a').css({
                    borderBottom: "5px solid #0070c0"
                });
            });
            
            $('#menu1 li:nth-child(4) a').mouseover(function(){
                $('#menu1 li:nth-child(4) a').css({
                    borderBottom: "5px solid #fff"
                });
            });
            
            $('#menu1 li:nth-child(4) a').mouseout(function(){
                $('#menu1 li:nth-child(4) a').css({
                    borderBottom: "5px solid #0070c0"
                });
            });
        } else {
            $('#menu1 li:nth-child(3) a').css({
                borderBottom: "5px solid #0070c0"
            });
        };
        
        // PAGE CONTACT
        if( (winWidth >= 792) && (window.location.href.indexOf("contact.php") != -1) ){
            // AU CHARGEMENT DE LA PAGE
            $('#menu1 li:nth-child(1) a').css({
                borderBottom: "5px solid #0070c0"
            });
            
            $('#menu1 li:nth-child(2) a').css({
                borderBottom: "5px solid #0070c0"
            });
            
            $('#menu1 li:nth-child(3) a').css({
                borderBottom: "5px solid #0070c0"
            });
            
            $('#menu1 li:nth-child(4) a').css({
                borderBottom: "5px solid #fff"
            });
            
            // AU SURVOL DU MENU
            $('#menu1 li:nth-child(1) a').mouseover(function(){
                $('#menu1 li:nth-child(1) a').css({
                    borderBottom: "5px solid #fff"
                });
            });
            
            $('#menu1 li:nth-child(1) a').mouseout(function(){
                $('#menu1 li:nth-child(1) a').css({
                    borderBottom: "5px solid #0070c0"
                });
            });
            
            $('#menu1 li:nth-child(2) a').mouseover(function(){
                $('#menu1 li:nth-child(2) a').css({
                    borderBottom: "5px solid #fff"
                });
            });
            
            $('#menu1 li:nth-child(2) a').mouseout(function(){
                $('#menu1 li:nth-child(2) a').css({
                    borderBottom: "5px solid #0070c0"
                });
            });
            
            $('#menu1 li:nth-child(3) a').mouseover(function(){
                $('#menu1 li:nth-child(3) a').css({
                    borderBottom: "5px solid #fff"
                });
            });
            
            $('#menu1 li:nth-child(3) a').mouseout(function(){
                $('#menu1 li:nth-child(3) a').css({
                    borderBottom: "5px solid #0070c0"
                });
            });
        } else {
            $('#menu1 li:nth-child(4) a').css({
                borderBottom: "5px solid #0070c0"
            });
        };
    };
    
    menu1();
    
    window.onresize = function(){
        winWidth = $(window).width();
        
        menu1();
    };
});


// BOUTON HAUT DE PAGE
$(document).ready(function(){    
    $('body').append('<div id="hautDePage"><a href="#top" id="hautDePageLien">&#8594;</a></div>');
    $(window).scroll(function(){
        resScroll = $(document).scrollTop();
        if(resScroll >=50) {
            $('#hautDePage').fadeIn(600);
        } else {
            $('#hautDePage').fadeOut(600);
        };
    });
});