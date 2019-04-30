/*
 * @Author: Haodong.Li 
 * @Date: 2019-04-30 12:07:53 
 * @Last Modified by:   Haodong.Li 
 * @Last Modified time: 2019-04-30 12:07:53 
 */


$(function () {
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
                $thisImg = $(this).attr('src');
                $('.box img').attr({
                    src: $thisImg
                });
            })
        },
        /**
         * 显示右边的细节
         */
        showImg: function () {
            $('.box').mousemove(function (e) {
                /**
                 * 获取左边大图的src  设置右边的 监听鼠标移动事件
                 * 显示右边的图片
                 */
                var src = $('.left_pic .box img').attr('src');
                $('.right_pic>img').attr({
                    src: src
                });
                $('.right_pic').show();
                $('.move').show();

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
            }).mouseout(function () {
                /**
                 * 鼠标移出
                 * 隐藏所有的div
                 */
                $('.right_pic').hide();
                $('.move').hide();
            })
        }
    }
    /**
     * 尺码颜色选择
     */
    var select = {
        init: function () {
            this.selectGoods();
        },
        selectGoods: function () {
            $('.colorDetail li').add($('.sizeDetail li')).click(function () {
                $(this).siblings().removeClass('on');
                $(this).addClass('on');
            })
        }
    }

    /**
     * 商品数量更改
     */
    var goodsNum = {
        clickThis: $('.sumNum a'),
        className: $('.sumNum a').attr('class'),
        init: function () {
            this.goodsNumUpdate();
        },
        goodsNumUpdate: function () {
            var nowNum;
            this.clickThis.click(function () {
                /**
                 * 获取当前输入框中的值
                 * 通过++  -- 设置值
                 * 如果当前值为1时则不能再减
                 */
                nowNum = $('.sumNum .number').val();
                if (this.className == 'minus') {
                    if (nowNum == 1) {
                        return;
                    } else {
                        nowNum--;
                        $('.sumNum .number').val(nowNum);
                    }
                } else {
                    nowNum++;
                    $('.sumNum .number').val(nowNum);
                }
            })
        }
    }

    /**
     * 快递免邮选择按钮
     */

    var dilFree = {
        init: function () {
            this.setDilFree();
        },
        setDilFree: function () {
            var clickThis = $('.dil-mon');
            clickThis.click(function () {
                clickThis.toggleClass('on');
                clickThis.find('.free').toggleClass('block');
            })
        }
    }

    /**
     * 加入购物车
     */

    var addShop = {
        init: function () {
            this.shopCar();
            this.showShopCar();
        },
        showShopCar: function () {
            $('.nav-shopcar').hover(function () {
                $(this).toggleClass('on');
                $(this).find('.shop_car_content').toggleClass('block');
                console.log($('.shop_car_ul li').length);

                if ($('.shop_car_ul li').length == 0) {
                    $('.shop_car_content h2').text('您最近没有添加商品！');
                } else {
                    $('.shop_car_content h2').text('最近加入的宝贝:');
                }
            })
        },
        shopCar: function () {
            var litext = '';
            var shopCar = $('.shop_car_ul');
            var shopNum;
            $('.add_shopcar').click(function () {
                var shopCarLi = $('<li class="shop_car_list"></li>');
                var goodsMoney = $('#nowmoney').text();
                var goodsTitle = $('#goods-title').text();
                var goodsSize = $('.size .on').text();
                var goodsColor = $('.color .on').text();
                var goodsImg = $('.box img').attr('src');
                // 点击加入购物车按钮
                // 将商品添加至我的购物车
                // 将li的个数设置为我的购物车中的件数
                litext = '<div class="shop_car_img">\
                    <img src="' + goodsImg + '" alt="">\
                </div>\
                <div class="shop_car_title">\
                    <a href="javascript:;">' + goodsTitle + '</a>\
                </div>\
                <div class="shop_car_details">\
                    <span>尺码:' + goodsSize + '</span>\
                    <span>颜色:' + goodsColor + '</span>\
                </div>\
                <div class="shop_car_money ">\
                    <span>￥' + goodsMoney + '</span>\
                </div>\
                <div class="delete">\
                    <a href="javascipt:;">删除</a>\
                </div>'
                shopCarLi.html(litext);
                shopCarLi.appendTo(shopCar);
                shopNum = $('.shop_car_ul li').length;
                $('.shop_car_num').text(shopNum);
            })
        }
    }

    /**
     * 详情页tab选项卡
     */

    var goodsTaps = {
        LiClass: $('#goodsTabs li'),
        tabContent: $('.middle_bottom_main'),
        init: function () {
            this.LiChange()
        },
        LiChange: function () {
            var _this = this;
            this.LiClass.click(function (e) {
                var e = e || window.event;
                var ET = e.target;
                var ETT = e.target.text;
                // 判断在点击到border情况下，不执行
                if(ETT){
                    $(ET).parent().siblings().removeClass('tab_active');
                    _this.tabContent.find('article').removeClass('block');
                    // 通过获取点击事件源对象的text属性判断需要执行的操作
                    switch (ETT) {
                        case "累计评价":
                            $(ET).parent().addClass('tab_active');
                            _this.tabContent.find('.tab_content3').addClass('block');
                            break;
                        case "专享服务":
                            $(ET).parent().addClass('tab_active');
                            _this.tabContent.find('.tab_content2').addClass('block');
                            break;
                        case "宝贝详情":
                            $(ET).parent().addClass('tab_active');
                            _this.tabContent.find('.tab_content').addClass('block');
                            break;
                    }
                };
            })
        }
    }


    // 尺码颜色选择
    select.init();
    // 显示图片详情
    showDetail.init();
    // 商品数量更改
    goodsNum.init();
    //快递免邮选择按钮
    dilFree.init();
    //加入购物车，购物车商品更新
    addShop.init();
    // 详情页显示
    goodsTaps.init();
})