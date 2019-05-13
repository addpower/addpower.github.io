/*
 * @Author: 李浩栋
 * @Begin: 2019-04-20 09:29:01
 * @Update: 2019-05-13 08:08:40
 * @Update log: 更新日志
 */

/**
 * @description: 菜单列表的动态显示
 * @param {type} 
 * @return: 
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