$(document).ready(function () {
    //////////** header **//////////
    if ($(this).scrollTop() >= 50) {
        $("header").addClass("header-scroll");
        $(".top-header-conteiner").hide();
    } else {
        $("header").removeClass("header-scroll");
        $(".top-header-conteiner").show();
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) {
            $("header").addClass("header-scroll");
            $(".top-header-conteiner").slideUp(300);
        } else {
            $("header").removeClass("header-scroll");
            $(".top-header-conteiner").slideDown(300);
        }
    });
    //////////** mode switch **//////////
    $('.color-switch').click(function () {
        $("body").toggleClass("dark-mode");
    });

    //////////** Search **//////////
    $('.search-icon').click(function () {
        $(".search-form").slideToggle(300);
        $(".overlay").toggle();
        $(this).toggleClass("active");
    });
    $('.overlay').click(function () {
        $(".search-form").slideUp(300);
        $(".overlay").hide();
        $('.search-icon').removeClass("active");
    });

    $('.menu-btn').click(function () {
        $("body").toggleClass("overflow");
        $('nav').slideToggle()
        $('.nav-list').toggleClass('act');
        $(this).toggleClass('act');
    });
});
