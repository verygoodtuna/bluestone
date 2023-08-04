$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on');
    });

    $('header .mobile_btn').on('click', function () {
        $('header .mobile_btn').toggleClass('on');
        $('header .gnb').toggleClass('on');
        $('header .moblie_customer').toggleClass('on');
    });

    $('.gnb').on('wheel', function (e) {
        if ($('.gnb .lnb').hasClass('on')) {
          e.preventDefault();
        }
        else {
            e.preventDefault();
        }
    });

    $('.p_slide').slick({
        arrows: false,
        fade: true,
        autoplay: true,
    });

    $('.portfolio .slide_btn .left').on('click', function () {
        $('.p_slide').slick('slickPrev');
    });

    $('.portfolio .slide_btn .right').on('click', function () {
        $('.p_slide').slick('slickNext');
    });

    $('.portfolio .slide_btn .pause').on ('click', function () {
        $('.p_slide').slick('slickPause');
        $('.portfolio .slide_btn .pause').addClass('on');
        $('.portfolio .slide_btn .play').addClass('on');
    });

    $('.portfolio .slide_btn .play').on ('click', function () {
        $('.p_slide').slick('slickPlay');
        $('.portfolio .slide_btn .pause').removeClass('on');
        $('.portfolio .slide_btn .play').removeClass('on');
    });
})