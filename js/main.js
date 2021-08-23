$(window).on('load', function () {
    var darkMode = localStorage.getItem('dark-mode');
    if (darkMode == 1) {
        $("body").addClass("dark-mode");
    }
});
$(document).ready(function () {
    $(".animateImg").addClass("animateIn")
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
        if ($("body").hasClass("dark-mode")) {
            localStorage.setItem('dark-mode', 1);
        } else {
            localStorage.setItem('dark-mode', 0);
        }
    });

    //////////** Search **//////////
    $('.search-icon').click(function () {
        $(".search-form-cont").slideToggle(300);
        $(this).toggleClass("active");
    });
    //////////** menu **//////////
    $('.menu-btn').click(function () {
        $("body").toggleClass("overflow");
        $('nav').slideToggle()
        $('.nav-list').toggleClass('act');
        $('.logo').toggleClass('active');
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

    //////////** addition fieldes **//////////
    $('.more-fields').click(function () {
        $(".addition-fieldes").slideToggle(300);
        $(this).toggleClass("active");
    })
    //////////** select2 **//////////
    if ($(window).width() >= 1199) {
        $('.phones-saerch-select').select2();
    }
    $('.advanced-btn').click(function () {
        $('.advanced-search').toggleClass('act');
        $('.filter-overlay').toggle(300);
        $(this).toggleClass('act');
    });
    $('.filter-overlay').click(function () {
        $('.advanced-search').removeClass('act');
        $('.filter-overlay').hide(300);
        $('.advanced-btn').removeClass('act');
    });
    //////////** comments scroll **//////////

    $('a[data-scroll]').click(function (e) {
        e.preventDefault();
        //Set Offset Distance from top to account for fixed nav
        var target = ('#' + $(this).data('scroll'));
        var $target = $(target);
        //Animate the scroll to, include easing lib if you want more fancypants easings
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 100
        }, 1000, 'swing');
    });

    //////////** accordion **//////////
    $('.acc-head').click(function () {
        $(".acc-head").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('display') == 'none') {
            $(this).siblings().slideDown(500);
        } else {
            $(this).siblings().slideUp(500);
        }
        $(".acc-head").not(this).siblings().slideUp(500);
    })

    ///////// ** gallery thumbs ** /////////
    var phoneThumbs = new Swiper(".main-thumbs-slider", {
        slidesPerView: 3.25,
        // loop: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            0: {
                spaceBetween: 10,
            },
            767: {
                spaceBetween: 9,
            },
            1199: {
                direction: "vertical",
            },
        },
    });
    var phoneImgs = new Swiper(".main-imgs-slider", {
        spaceBetween: 1,
        // loop: true,
        thumbs: {
            swiper: phoneThumbs,
        },
    });

    $(".range-slider-input").on("input", function (e) {
        var width = $(this).val()
        $(this).siblings(".value-bg").width(width * 10 + "%");
        $(this).parents(".range-slider-item").find(".value").html(width);
    });
});
