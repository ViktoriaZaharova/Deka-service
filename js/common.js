
$(document).ready(function () {

    const $menu = $('.nav-menu');
    const $burger = $('.btn-burger');
    const $close = $('.nav-menu__close');
    const mobileWidth = 1120;

    function isMobile() {
        return $(window).width() < mobileWidth;
    }

    // Открыть меню
    $burger.on('click', function (e) {
        e.preventDefault();
        if (isMobile()) {
            $menu.addClass('active');
            $('body').addClass('overflow-hidden');
        }
    });

    // Закрыть меню (крестик)
    $close.on('click', function (e) {
        e.preventDefault();
        closeMenu();
    });

    // Закрытие по якорным ссылкам
    $('.nav-menu .go_to').on('click', function () {
        if (isMobile()) {
            closeMenu();
        }
    });

    // Клик вне меню
    $(document).on('click', function (e) {
        if (
            isMobile() &&
            $menu.hasClass('active') &&
            !$(e.target).closest('.nav-menu, .btn-burger').length
        ) {
            closeMenu();
        }
    });

    function closeMenu() {
        $menu.removeClass('active');
        $('body').removeClass('overflow-hidden');
    }

    // При ресайзе возвращаем меню
    $(window).on('resize', function () {
        if (!isMobile()) {
            closeMenu();
        }
    });

});
