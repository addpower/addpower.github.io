/*
 * @Author: Haodong.Li 
 * @Date: 2019-04-30 12:09:09 
 * @Last Modified by:   Haodong.Li 
 * @Last Modified time: 2019-04-30 12:09:09 
 */

$(function () {
    var timer = null;
    var ImgWidth = $('ul.list li').width();
    var nowIndex = 0;
    var len = $('ul.btn li').length;
    var flag = true;


    function init() {
        bindEvent();
        autoPlay();

    }
    init();

    function bindEvent() {
        $('.next').add($('.prev')).add($('.btn li')).on('click', function () {
            if ($(this).attr('class') == 'prev') {
                move('prev');
            } else if ($(this).attr('class') == 'next') {
                move('next');
            } else {
                var index = $(this).index();
                move(index);
            }
            changeIndex(nowIndex);
        })

        $('.container').mouseenter(function () { 
            clearInterval(timer);
        }).mouseleave(function(){
            clearInterval(timer);
            autoPlay();
        })
        $('.container a').mouseover(function(){
            clearInterval(timer);
            autoPlay();
        })
    }

    function move(ele) {
        if (flag) {
            flag = false;
            var a = 1;
            if (ele == 'prev' || ele == 'next') {
                if (ele == 'prev') {
                    if (nowIndex == 0) {
                        $('ul.list').css({
                            left: -(ImgWidth * len)
                        });
                        nowIndex = len - 1;
                    } else {
                        nowIndex -= 1;
                    }
                } else {
                    if (nowIndex == 4) {
                        a = 0;
                        $('ul.list').animate({
                            left: -(ImgWidth * len)
                        }, function () {
                            $(this).css({
                                left: 0
                            });
                            clearInterval(timer);
                            autoPlay();
                            flag = true;

                        })
                        nowIndex = 0;
                    } else {
                        nowIndex += 1;
                    }
                }
            } else {
                nowIndex = ele;
            }
            if (a) {
                $('ul.list').animate({
                    left: -(ImgWidth * nowIndex)
                }, function () {
                    clearInterval(timer);
                    autoPlay();
                    flag = true
                });
            }
        }
    }

    function changeIndex(index){
        $('.on').removeClass('on');
        $('ul.btn li').eq(index).addClass('on');
    }

    function autoPlay(){
        timer = setInterval(function(){
            move('next');
            changeIndex(nowIndex);
        },3000);
    }


})