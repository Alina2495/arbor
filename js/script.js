var swiper = new Swiper(".swiper-banner", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


var swiper = new Swiper('.swiper-news', {
    slidesPerView: 1,
    speed: 300,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 30
        },
        1400: {
            slidesPerView: 5
        }
    },
});


var swiper = new Swiper('.swiper-production', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 30
        },
        1400: {
            slidesPerView: 5,
            spaceBetween: 0

        }
    },
});

var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 8,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
        // 320: {
        //     slidesPerView: 1,
        //     spaceBetween: 0
        // },
        // 480: {
        //     slidesPerView: 2,
        //     spaceBetween: 20
        // },
        768: {
            // slidesPerView: 4,
            spaceBetween: 16
        },
        // 1400: {
        //     slidesPerView: 5,
        //     spaceBetween: 0
        // }
    },
});
var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs
    }
});