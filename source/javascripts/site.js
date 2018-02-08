$(document).ready(function() {
    $("#about_me_nav").click(function() {
        $('html, body').animate({
            scrollTop: $("#about_me_section").offset().top
        }, 1000);
    });

    $("#projects_nav").click(function() {
        $('html, body').animate({
            scrollTop: $("#projects_section").offset().top
        }, 1000);
    });

    $("#contacts_nav").click(function() {
        $('html, body').animate({
            scrollTop: $("#contacts_section").offset().top
        }, 1000);
    });
});
