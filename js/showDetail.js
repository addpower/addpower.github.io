$(function () {

    var showDetail = {
        init:function(){
            this.showImg();
        },
        showImg:function(){
            $('.box').mousemove(function (e) { 
                var src =  $('.left_pic .box img').attr('src');
                $('.right_pic>img').attr({src:src});
                $('.right_pic').show();
                $('.move').show();

                var x = e.pageX - $('.left_pic .box').offset().left - $('.move').width() / 2;
                var y = e.pageY - $('.left_pic .box').offset().top - $('.move').height() / 2;
                var maxX = $('.left_pic .box').width() - $('.move').width();
                var maxY = $('.left_pic .box').height() - $('.move').height();
                if(x <= 0){
                    x = 0;
                }else if(x >= maxX){
                    x = maxX
                }
                if(y <= 0){
                    y = 0;
                }else if(y >= maxY){
                    y = maxY;
                }
                $('.move').css({
                    left : x,
                    top : y
                })

                var moveX = x / maxX,
                    moveY = y / maxY;
                $('.right_pic>img').css({
                    left : -moveX * ($('.right_pic>img').width() - $('.right_pic').width()),
                    top : -moveY * ($('.right_pic>img').height() - $('.right_pic').height())
                })
            }).mouseout(function(){
                $('.right_pic').hide();
                $('.move').hide();
            })
        }
    }

    showDetail.init();

    
})