// :::::::::::::::::: INIT:::::::::::::::::::::::::::::::::::
$(document).ready(function(){

    //:::::::: Slider:::::::::
    $('.owl-carousel').owlCarousel({
        loop:true,
        dots: true,
        infinite: true,
        speed: 300,
        cssEase: 'linear',
        autoplay:true,
        autoplaySpeed : 300,
        responsive:{
            0:{
                items:1

            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    //:::::::: Modal:::::::::
    $('.modal-trigger').leanModal();
    //:::::::: Navbar:::::::::
    $(".button-collapse").sideNav();
    $('#login').openModal();
    $('#login').closeModal();
    $('.btnLoginClose').click(function () {
        $('#login').closeModal();
    });
    $('.btnJoinNowClose').click(function () {
        $('#joinNow').closeModal();
    });
    $('.dropdown-button').dropdown('open');
    $('.dropdown-button').dropdown('close');


});
// Scrollbar
(function($) {
    $(window).load(function() {
        $(".listNews ul").mCustomScrollbar();
    });
})(jQuery);
(function($) {
    $(window).load(function() {
        $(".listCLB ul").mCustomScrollbar();
    });
})(jQuery);


