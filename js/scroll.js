/*
 * @Author: 李浩栋
 * @Begin: 2019-05-20 08:30:03
 * @Update: 2019-05-20 09:07:54
 * @Update log: 滚动显示返回顶部按钮，固定菜单功能
 */

$(function () {

    //只要窗口滚动,就触发下面代码
    $(window).scroll(function () {
        var scrollT = document.documentElement.scrollTop + document.body.scrollTop; //获取滚动后的高度
        var Width = document.body.offsetWidth;
        // 显示锚点按钮
        if (scrollT > 200) {
            if (Width > 1051) {
                $("#go-top").fadeIn(400);
            }

        } else {
            $("#go-top").stop().fadeOut(400);

        }
        // 固定顶部菜单栏
        if (scrollT > 107) {
            $('.nav_bg').css({
                "position": "fixed",
                "top": 0,
                "z-index": 999
            })
        }else{
            $('.nav_bg').css({
                "position": "",
                "top": "",
                "z-index": ""
            })
        }

    });
    //当点击标签的时候,使用animate在200毫秒的时间内,滚到顶部
    $("#go-top").click(function () {
        $("html,body").animate({
            scrollTop: "0px"
        }, 200);
    });

});