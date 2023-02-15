document.addEventListener("DOMContentLoaded", function () {
    //бургер меню
    $('.header__burger, .overlay').click(function () {
        $('.header').toggleClass('show');
        $('body').toggleClass('overflow');
    });
    $("#nav").on("click", ".header-nav__link_close", function (event) {
        $('.header').removeClass('show');
        $('body').removeClass('overflow');
    });

    //плавный скролл
    $("body").on("click", "a[href^=\"#\"]", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });


    //слайдеры
    var certificates__slider = new Swiper(".certificates-slider__slider", {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: ".certificates-slider__btn-next",
            prevEl: ".certificates-slider__btn-prev",
        },
        breakpoints: {
            581: {
                slidesPerView: 2,
            },
            999: {
                slidesPerView: 5,
            },
        }
    });
    var manufacturers__slider = new Swiper(".manufacturers-slider__slider", {
        slidesPerView: 1,
        spaceBetween: 28,
        navigation: {
            nextEl: ".manufacturers-slider__btn-next",
            prevEl: ".manufacturers-slider__btn-prev",
        },
        breakpoints: {
            581: {
                slidesPerView: 2,
            },
            999: {
                slidesPerView: 7,
            },
        }
    });
    var answer__slider = new Swiper(".answer-slider__slider", {
        autoHeight: true,
        slidesPerView: 1,
        spaceBetween: 7,
        navigation: {
            nextEl: ".answer-slider__btn-next",
            prevEl: ".answer-slider__btn-prev",
        },
        pagination: {
            el: ".answer-slider__pagination",
            clickable: true,
        },
    });


    //аккардион
    $(".answer-question-accordion__head.active").next(".answer-question-accordion__body").slideDown();
    $('.answer-question-accordion').on('click', '.answer-question-accordion__head', function (e) {
        e.preventDefault();
        $(this)
            .toggleClass("active")
            .next('.answer-question-accordion__body')
            .not(':animated')
            .slideToggle();
    })

    $(".catalog-accordion__head.active").next(".catalog-accordion__body").slideDown();
    $('.catalog-accordion').on('click', '.catalog-accordion__head', function (e) {
        e.preventDefault();
        $(this)
            .toggleClass("active")
            .next('.catalog-accordion__body')
            .not(':animated')
            .slideToggle();
    })

})

