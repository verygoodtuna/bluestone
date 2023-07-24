$(function () {
    $('.main_con').fullpage({
        anchors: ['main_studio', 'main_about', 'main_goods', 'main_art', 'main_together'],
        navigation: false,
        css3: false,
    })

    $('.p_slide').slick({
        arrows: false,
    })
})