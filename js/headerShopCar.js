/*
 * @Author: 李浩栋
 * @Begin: 2019-04-30 10:54:50
 * @Update: 2019-05-13 08:10:59
 * @Update log: 更新日志
 */


/**
 * @description: 购物车功能
 * @param {type} 
 * @return: 
 */ 
$(function () {
    /**
     * 加入购物车
     */

    var addShop = {
        init: function () {
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
        }
    }
    addShop.init();
})