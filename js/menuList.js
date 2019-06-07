/*
 * @Author: 李浩栋
 * @Begin: 2019-04-20 09:29:01
 * @Update: 2019-06-07 13:48:43
 * @Update log: 更新日志
 */

/**
 * @description: 菜单列表的动态显示
 * @param {type} 
 * @return: 
 */
$(function () {
    $('.menu .title').click(function () {
        $(this).parents('ul.menu_list').toggleClass('active')
    })
})