$(function () {
    $('.menu .title').click(function () {

        if ($(this).parent().find('i').hasClass('down')) {
            $(this).parent().find('i').removeClass('down');
            $(this).parent().find('i').addClass('right');
        } else {

            $(this).parent().find('i').removeClass('right');
            $(this).parent().find('i').addClass('down');
        }
        $(this).parent().parent().find('.red_dot').toggleClass('block');

    })
})