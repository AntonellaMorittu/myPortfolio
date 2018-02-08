$(document).ready(function() {
    $("#about_me_nav").click(function() {
        $('html, body').animate({
            scrollTop: $("#about_me_section").offset().top
        }, 1000);
    });
});
