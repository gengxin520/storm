/*
*
*   Custom JavaScript
*   Product: KnowledgeBase WordPress Theme
*
* */
jQuery(document).ready(function(e) {

	$ = jQuery;

    /*-----------------------------------------------------------------------------------*/
    /*	Menu Dropdown Control
     /*-----------------------------------------------------------------------------------*/
    $('.main-nav li').hover(function(){
        $(this).children('ul').stop(true, true).slideDown(500);
    },function(){
        $(this).children('ul').stop(true, true).slideUp(500);
    });

    $('.sub-menu li').click(function(){
        window.location = $(this).children('a').attr('href');
    });


    /*-----------------------------------------------------------------------------------*/
    /* CSS Fixes
    /*-----------------------------------------------------------------------------------*/
    //$(".flickr-photos > a:nth-child(3n+3) img").css("marginLeft","0px");



    /*-----------------------------------------------------------------------------------*/
    /* Apply Class on search form widget inputs
    /*-----------------------------------------------------------------------------------*/
    $("#searchform #s").addClass("span3 search-query");
    $("#searchform #searchsubmit").addClass("btn");



    /*-----------------------------------------------------------------------------------*/
    /*	Page's Nav
     /*-----------------------------------------------------------------------------------*/
    $(".pages-nav a").addClass("btn");



    /*-----------------------------------------------------------------------------------*/
    /*	Tags Cloud
    /*-----------------------------------------------------------------------------------*/
    $('.tagcloud a').removeAttr('style').addClass('btn btn-mini');

	
	/*-----------------------------------------------------------------------------------*/
	/*	Scroll to Top
	/*-----------------------------------------------------------------------------------*/	
    $(function() {
        $(window).scroll(function () {
            if(!$('body').hasClass('probably-mobile'))
            {
                if ($(this).scrollTop() > 50) {
                    $('a#scroll-top').fadeIn();
                } else {
                    $('a#scroll-top').fadeOut();
                }
            }
            else
            {
                $('a#scroll-top').fadeOut();
            }
        });

        $('a#scroll-top').on('click', function(){
            if(!$('body').hasClass('probably-mobile'))
            {
                $('html, body').animate({scrollTop:0}, 'slow' );
                return false;
            }
        });
    });
				
});







