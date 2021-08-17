$(document).ready(function () {
    $(".about-main-img").addClass("animateIn")
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
    //////////** menu **//////////
    $('.menu-btn').click(function () {
        $("body").toggleClass("overflow");
        $('nav').slideToggle()
        $('.nav-list').toggleClass('act');
        $(this).toggleClass('act');
    });

    //////////** feats slider **//////////
    var featswiper = new Swiper('.about-feats .swiper-container', {
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 23,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 100,
            },
        },
        pagination: {
            el: '.about-feats .swiper-pagination',
            clickable: true,
        },
    });
});
