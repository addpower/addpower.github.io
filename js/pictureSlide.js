/*
 * @Author: 李浩栋 
 * @Date: 2019-05-05 12:50:34  
 * @Last Version by:   0.1 
 * @Last Version time: 2019-05-01 20:07:55 
 */

$(function () {

    var timer = null;
    var ImgWidth = $('ul.list li').width();
    var nowIndex = 0;
    var len = $('ul.btn li').length;
    var flag = true;
    var img = $('ul.list img');

    var ImgSrc;
    $.getJSON("../imgsrc/imgsrc.json",
        function (data) {
            ImgSrc = data.index;
                setImg(ImgSrc);
        }
    );


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
        }).mouseleave(function () {
            clearInterval(timer);
            autoPlay();
        })
        $('.container a').mouseover(function () {
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

    function changeIndex(index) {
        $('.on').removeClass('on');
        $('ul.btn li').eq(index).addClass('on');
    }

    function autoPlay() {
        timer = setInterval(function () {
            move('next');
            changeIndex(nowIndex);
        }, 3000);
    }


    /**
     * 
     * @param {*} imgsrc 首页轮播图图片资源
     * 0: {src: "https://img.alicdn.com/tfs/TB1YJsYTyrpK1RjSZFhXXXSdXXa-520-280.jpg_q90_.webp"}
        1: {src: "https://img.alicdn.com/tps/i4/TB1crI_TyLaK1RjSZFxSuumPFXa.jpg_q90_.webp"}
        2: {src: "https://img.alicdn.com/simba/img/TB101PINMHqK1RjSZFkSut.WFXa.jpg"}
        3: {src: "https://img.alicdn.com/simba/img/TB1kFpUTMTqK1RjSZPhSutfOFXa.jpg"}
        4: {src: "https://img.alicdn.com/simba/img/TB1zYF5TwDqK1RjSZSySuuxEVXa.jpg"}
        length: 5
     */
    function setImg(imgsrc) {
        for (var i = 0; i < img.length; i++) {
            $(img[i]).attr('src', imgsrc[i].src);
        }


    }

})