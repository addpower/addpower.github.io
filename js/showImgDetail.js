/*
 * @Author: 李浩栋
 * @Begin: 2019-05-11 11:59:37
 * @Update: 2019-05-23 20:10:27
 * @Update log: 火狐浏览器的mouseout不能实现功能，改用mouseleave
 */

/**
 * 展示商品图片细节
 */
var showDetail = {
    init: function () {
        this.toggleImg();
        this.showImg();

    },
    /**
     * 选择小图片  切换大图片
     */
    toggleImg: function () {
        var $thisImg;
        $('#goodsList img').hover(function () {
            /**
             * 设置下边小图片的border样式
             */
            $(this).parents('li').siblings().removeClass('on');
            $(this).parents('li').addClass('on');
            /**
             * 通过获取小图片的src  设置大图片的src 改变图片
             */
            var boxImg = new Image();
            $thisImg = $(this).attr('src');
            boxImg.src = $thisImg + '_400x400.jpg';
            boxImg.width = 360;
            boxImg.height = 360;
            boxImg.onload = function () {
                $('.box img').remove();
                $('.box').append(boxImg);
            }

            // $('.box img').attr({
            //     src: $thisImg
            // });
        })
    },
    /**
     * 显示右边的细节
     */
    showImg: function () {

        $('.box').mousemove(function (e) {
            e.preventDefault()
            /**
             * 获取左边大图的src  设置右边的 监听鼠标移动事件
             * 显示右边的图片
             */
            var src = $('.left_pic .box img').attr('src');
            $('.right_pic>img').attr({
                src: src
            });
            $('.move').css({
                "display": "block"
            });
            $('.right_pic').show();


            /**
             * 拖拽事件
             */
            var x = e.pageX - $('.left_pic .box').offset().left - $('.move').width() / 2;
            var y = e.pageY - $('.left_pic .box').offset().top - $('.move').height() / 2;
            var maxX = $('.left_pic .box').width() - $('.move').width();
            var maxY = $('.left_pic .box').height() - $('.move').height();
            if (x <= 0) {
                x = 0;
            } else if (x >= maxX) {
                x = maxX
            }
            if (y <= 0) {
                y = 0;
            } else if (y >= maxY) {
                y = maxY;
            }
            $('.move').css({
                left: x,
                top: y
            })

            var moveX = x / maxX,
                moveY = y / maxY;
            $('.right_pic>img').css({
                left: -moveX * ($('.right_pic>img').width() - $('.right_pic').width()),
                top: -moveY * ($('.right_pic>img').height() - $('.right_pic').height())
            })
            // mouseout冒泡,mouseleave不冒泡
            // 之前用mouseout火狐浏览器不能实现功能！以后建议使用mouseleave
        }).mouseleave(function (e) {
            e.preventDefault();
            /**
             * 鼠标移出
             * 隐藏所有的div
             */

            $('.right_pic').hide();
            $('.move').hide();
        })
    }
}



// 显示图片详情
showDetail.init();