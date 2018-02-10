$(document).ready(function() {
    $("#about_me_nav").click(function() {
        $('html, body').animate({
            scrollTop: $("#about_me_section").offset().top - 50
        }, 1000);
    });

    $("#projects_nav").click(function() {
        $('html, body').animate({
            scrollTop: $("#projects_section").offset().top - 80
        }, 1000);
    });

    $("#skills_nav").click(function() {
        $('html, body').animate({
            scrollTop: $("#skills_section").offset().top - 40
        }, 1000);
    });

    $("#cv_nav").click(function() {
        $('html, body').animate({
            scrollTop: $("#cv_section").offset().top + 20
        }, 1000);
    });

    $("#contacts_nav").click(function() {
        $('html, body').animate({
            scrollTop: $("#contacts_section").offset().top
        }, 1000);
    });
});
