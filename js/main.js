$(window).load(function(){
    $(".before-after").twentytwenty({
    before_label: 'Без нас',
    after_label: 'С нами'
    });;
    $('.before-slider').slick({
        draggable: false,
        dots: true,
        dotsClass: 'before-slider__dots',
        prevArrow: $('.arrow-back'),
        nextArrow: $('.arrow-next')
    });
    $('.menu-button').on('click', function(){
        $('.menu').toggleClass('menu_active');
    });
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top -0 + "px" });
        return false;
    });
    $('input[type="tel"]').mask("+7 (999) 999-99-99");

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
    prevScrollpos = currentScrollPos;
}

    var reviews = $('.reviews');
    var reviewsTop = reviews.offset().top;
    $(window).bind('scroll', function () {
        var windowTop = $(this).scrollTop();
        if (windowTop > reviewsTop) {
            $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A73e02af7d2382d2c640b39807154476658e36e37934777a995e387c468e2cc99&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=falce" ></script >')
            $(window).unbind('scroll')
        }
    });
});