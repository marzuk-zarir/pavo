import Swiper, { Pagination } from 'swiper/core';
Swiper.use([Pagination]);

const swiper = new Swiper('.swiper-container', {
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
});
