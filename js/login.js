$(function () {
    $('a.login').click(function () {
        loginShow();
    })

    function loginShow() {
        var oMask = $('<div id="mask"></div>');
        oMask.css({
            height: canSeeH + 'px'
        });
        oMask.appendTo($('body'));
        var oLogin = $('<div id = login ></div>');

        oLogin.html('<div class="title" id="title">' +
            '<h1>Welcome</h1>' +
            '<a href="javascript:;" class="close"></a>' + '</div>' +
            '<form action="#" method="post">' + 
            '<div class="content">' +
            '<div class="user">' +
            '<input type="text" class="pt" placeholder="手机/邮箱/用户名" value="" name="">' +
            '</div>' +
            '<div class="password">' +
            '<input type="password" class="pt" placeholder="请输入密码" value="" name="">' +
            '</div>' +
            '<div class="submit">' +
            '<input type="button" class="sm" value="登陆">' +
            '</div>' +
            '</form>' +
            '</div>');
        oLogin.appendTo($('body'));
        // 可视区高度
        var canSeeH = $(window).height();
        // 获取可视区宽度
        var canSeeW = $(window).width();
        // 登录框宽度  高度
        var oLoginW = $(oLogin).width();
        var oLoginH = $(oLogin).height();

        // 登录框居中显示
        oLogin.css({
            left: (canSeeW - oLoginW) / 2 + 'px',
            top: (canSeeH - oLoginH) / 2 + 'px'
        })

        $(window).resize(function () {
            // 可视区高度
            canSeeH = $(window).height();
            // 获取可视区宽度
            canSeeW = $(window).width();
            // 登录框宽度  高度
            oLoginW = $(oLogin).width();
            oLoginH = $(oLogin).height();
            // 登录框居中显示
            oLogin.css({
                left: (canSeeW - oLoginW) / 2 + 'px',
                top: (canSeeH - oLoginH) / 2 + 'px'
            })
            // 遮罩层
            oMask.css({
                height: canSeeH + 'px'
            });
        })

        $('a.close').click(function () {
            $(oMask).add($(oLogin)).remove();
        })

        $('input.sm').click(function(){
            $(oMask).add($(oLogin)).remove();
        })
    }




})