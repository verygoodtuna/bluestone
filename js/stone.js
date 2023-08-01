$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on');
    });

    $('.p_slide').slick({
        arrows: false,
        fade: true,
    });

    $('.portfolio .slide_btn .left').on('click', function () {
        $('.p_slide').slick('slickPrev');
    });

    $('.portfolio .slide_btn .right').on('click', function () {
        $('.p_slide').slick('slickNext');
    });
})