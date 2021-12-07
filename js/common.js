$(document).ready(function () {
    // header
    $('.subitem a').click(function (e) {
        e.preventDefault();
        console.log('sdsdsd')
        $(this).next('ul').slideToggle();

    });

    $('.header__language span').click(function () {
        $(this).next('ul').slideToggle();
    });

    // main slider
    var swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        speed: 900,
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
        slidesPerView: 4,
        spaceBetween: 30,
        // autoplay: {
        //     delay: 7000,
        // },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

    });





});