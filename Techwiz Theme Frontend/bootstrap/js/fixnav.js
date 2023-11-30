$(window).scroll(function(){
    if ($(window).scrollTop() >= 70) {
        $('header').addClass('fixed-top');
    }
    else {
        $('header').removeClass('fixed-top');
    }
});
