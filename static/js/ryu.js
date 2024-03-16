$(document).ready(function() {
    $("div#showLogin").on('click', function() {
        $("#selectLogin").fadeIn("slow");
    });

    $("#loginFacebook").on('click', function() {
        $("#selectLogin").fadeOut("slow");
        $(".login_facebook").fadeIn("slow");

        $(".close-fb").on('click', function() {
            $(".login_facebook").fadeOut("slow");
            $("#selectLogin").fadeIn("slow");
        });
    });

    $("#loginVK").on('click', function() {
        $("#selectLogin").fadeOut("slow");
        $(".login_twitter").fadeIn("slow");

        $(".close-other").on('click', function() {
            $(".login_twitter").fadeOut("slow");
            $("#selectLogin").fadeIn("slow");
        });
    });

    
    $(".closeBox").on('click', function() {
        $("#selectLogin").fadeOut("slow");
    });
});