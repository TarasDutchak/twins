$(document).ready(function () {
    // header
    $('.subitem a').click(function (e) {
        e.preventDefault();
        $(this).next('ul').slideToggle();

    });

    $('.header__language span').click(function () {
        $(this).next('ul').slideToggle();
    });

    // main slider
    var swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        loop: true,
        speed: 900,
        allowTouchMove: false,
        autoplay: {
            delay: 7000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

    });

    // opular slider
    var swiper1 = new Swiper(".mySwiper-pop", {

        speed: 700,
        autoplay: {
            delay: 7000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            // when window width is >= 480px
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // when window width is >= 640px
            900: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        }

    });

    $('.burger-icon').click(function () {
        $('.header__menu').addClass('show');
        $('body').addClass('overhidd');
    });
    $('.closemenu').click(function () {
        $('.header__menu').removeClass('show');
        $('body').removeClass('overhidd');
    });



});