import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 10,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.slider__next',
        prevEl: '.slider__prev',
    },
});