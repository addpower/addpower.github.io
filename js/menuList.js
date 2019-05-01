/*
 * @Author: 李浩栋 
 * @Date: 2019-05-01 20:08:21 
 * @Last Version by:   0.0 
 * @Last Version time: 2019-05-01 20:08:21 
 */

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