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

var galleryThumbs = new Swiper('.new-gallery-thumbs', {
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
            spaceBetween: 11
        },
        // 1400: {
        //     slidesPerView: 5,
        //     spaceBetween: 0
        // }
    },
});
var galleryTop = new Swiper('.new-gallery-top', {
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs
    }
});



// swiper slider (only card page)
var galleryThumbs = new Swiper('.card-gallery-thumbs', {
    direction: 'vertical',
    spaceBetween: 6,
    slidesPerView: 3,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 3
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3
        },
        // when window width is >= 640px
        992: {
            spaceBetween: 15
        },
        // when window width is >= 1200px
        1200: {
            spaceBetween: 10
        }
    }
});
var galleryTop = new Swiper('.card-gallery-top', {
    direction: 'vertical',
    spaceBetween: 10,
    thumbs: {
        swiper: galleryThumbs,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});